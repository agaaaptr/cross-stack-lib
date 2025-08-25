'use client';

import { useState } from 'react';
import { XStackModal } from '@/LitWrappers';
import { Button } from '@/components/ui/button';

export default function ModalExample() {
  const [modalState, setModalState] = useState({ open: false, type: 'confirmation' });

  const openModal = (type: string) => {
    setModalState({ open: true, type });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, open: false }));
  };

  return (
    <div className="p-4 border rounded-lg flex flex-wrap gap-4 items-center">
      <Button onClick={() => openModal('confirmation')}>Confirmation</Button>
      <Button onClick={() => openModal('info')} variant="outline">Info</Button>
      <Button onClick={() => openModal('warning')} variant="outline">Warning</Button>
      <Button onClick={() => openModal('danger')} variant="destructive">Danger</Button>

      <XStackModal
        open={modalState.open}
        type={modalState.type}
        onClose={closeModal}
      >
        <div slot="header">
          {modalState.type.charAt(0).toUpperCase() + modalState.type.slice(1)} Modal
        </div>
        <div slot="body">
          This modal has a &apos;{modalState.type}&apos; type, indicated by the colored accent bar at the top.
        </div>
        <div slot="footer" className="flex justify-end gap-2">
          <Button variant="outline" onClick={closeModal}>Cancel</Button>
          <Button onClick={closeModal} data-variant="primary">OK</Button>
        </div>
      </XStackModal>
    </div>
  );
}