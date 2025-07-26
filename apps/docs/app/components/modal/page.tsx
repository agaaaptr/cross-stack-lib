import Examples from './examples.mdx';
import API from './api.mdx';

export default function ModalPage() {
  return (
    <div className="p-8 bg-background-light rounded-lg shadow-lg text-text-DEFAULT">
      <h1 className="text-4xl font-bold mb-6 text-primary">Modal Component</h1>
      <Examples />
      <API />
    </div>
  );
}