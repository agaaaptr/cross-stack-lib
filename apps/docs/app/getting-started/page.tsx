import Installation from './installation.mdx';
import Usage from './usage.mdx';

export default function GettingStartedPage() {
  return (
    <div className="p-8 bg-background-light rounded-lg shadow-lg text-text-DEFAULT">
      <h1 className="text-4xl font-bold mb-6 text-primary">Getting Started</h1>
      <Installation />
      <Usage />
    </div>
  );
}