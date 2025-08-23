'use client';

import { useState } from 'react';
import { XStackModal } from '@/LitWrappers';
import { Button } from '@/components/ui/button';

export default function ModalExample() {
  const [type, setType] = useState('');

  const openModal = (modalType: string) => {
    setType(modalType);
  };

  const closeModal = () => {
    setType('');
  };

  return (
    <div className="flex flex-wrap gap-4">
      <Button onClick={() => openModal('confirmation')}>Open Confirmation Modal</Button>
      <Button onClick={() => openModal('info')}>Open Info Modal</Button>
      <Button onClick={() => openModal('warning')}>Open Warning Modal</Button>
      <Button onClick={() => openModal('danger')}>Open Danger Modal</Button>

      <XStackModal
        open={!!type}
        type={type}
        onClose={closeModal}
      >
        <h2 slot="header" className="text-lg font-semibold">
          {type.charAt(0).toUpperCase() + type.slice(1)} Modal
        </h2>
        <p slot="body" className="py-4">
          This is the body of the {type} modal. You can place any content here.
        </p>
        <div slot="footer" className="flex justify-end gap-2">
          <Button variant="outline" onClick={closeModal}>Cancel</Button>
          <Button onClick={closeModal}>Confirm</Button>
        </div>
      </XStackModal>
    </div>
  );
}
