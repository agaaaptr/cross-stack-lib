"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast"; // Import useToast

export function SuggestionForm() {
  const { toast } = useToast(); // Initialize toast

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission (redirect)

    const form = event.currentTarget;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(form.action, {
        method: form.method,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formJson),
      });

      if (response.ok) {
        toast({
          variant: "success",
          title: "Suggestion Submitted!",
          description: "Thank you for your valuable feedback. We appreciate it!",
        });
        form.reset(); // Clear the form
      } else {
        const errorData = await response.json();
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: errorData.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "Could not connect to the server. Please check your internet connection.",
      });
    }
  };

  return (
    <form
      action="https://formspree.io/f/mpwjwvlg"
      method="POST"
      onSubmit={handleSubmit} // Add onSubmit handler
      className="my-8 space-y-4 max-w-4xl mx-auto p-6 border rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800"
    >
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="name">Your Name (Optional)</Label>
        <Input type="text" id="name" name="name" placeholder="John Doe" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Your Email (Optional)</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="your.email@example.com"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="subject">Subject</Label>
        <Input
          type="text"
          id="subject"
          name="subject"
          placeholder="New feature idea"
          required
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="message">Your Suggestion</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Describe your feature suggestion here..."
          rows={5}
          required
        />
      </div>
      <Button type="submit" className="w-full">
        Submit Suggestion
      </Button>
      <p className="text-sm text-muted-foreground text-center mt-4">
        This form is powered by Formspree.
      </p>
    </form>
  );
}