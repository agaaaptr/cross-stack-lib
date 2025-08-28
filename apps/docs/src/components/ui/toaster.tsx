"use client"

import { CheckCircledIcon, InfoCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons"
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, variant, ...props }) {
        let IconComponent = null;
        if (variant === "success") {
          IconComponent = CheckCircledIcon;
        } else if (variant === "info") {
          IconComponent = InfoCircledIcon;
        } else if (variant === "destructive") {
          IconComponent = CrossCircledIcon;
        }

        return (
          <Toast key={id} {...props} variant={variant}>
            <div className="flex items-center space-x-4"> {/* Flex container for icon and text */}
              {IconComponent && <IconComponent className="h-5 w-5" />}
              <div className="grid gap-1"> {/* Grid for title and description */}
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}