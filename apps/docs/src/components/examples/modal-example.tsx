'use client';

import { useState } from 'react';
import { XStackModal } from '@/LitWrappers';
import { Button } from '@/components/ui/button';

// Define a type for the modal state to ensure 'type' is strictly typed
type ModalType = 'confirmation' | 'info' | 'warning' | 'danger';

interface ModalState {
  open: boolean;
  type: ModalType;
}

export default function ModalExample() {
  const [modalState, setModalState] = useState<ModalState>({ open: false, type: 'confirmation' });

  const openModal = (type: ModalType) => {
    setModalState({ open: true, type });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, open: false }));
  };

  return (
    <div className="p-4 border rounded-lg flex flex-col sm:flex-row flex-wrap gap-4 items-center">
      <Button onClick={() => openModal('confirmation')} variant="confirmation" size="default" className="w-32">Confirmation</Button>
      <Button onClick={() => openModal('info')} variant="info" size="default" className="w-32">Info</Button>
      <Button onClick={() => openModal('warning')} variant="warning" size="default" className="w-32">Warning</Button>
      <Button onClick={() => openModal('danger')} variant="danger" size="default" className="w-32">Danger</Button>

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
          {/* Use the strictly typed modalState.type for variant */} 
          <Button onClick={closeModal} variant={modalState.type}>OK</Button> 
        </div>
      </XStackModal>
    </div>
  );
}