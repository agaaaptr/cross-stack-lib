// src/app/page.tsx
'use client';

import { useState } from 'react';
import { XStackTable, XStackModal } from '@/components/LitWrappers';

export default function HomePage() {
  // State untuk mengontrol modal
  const [isModalOpen, setModalOpen] = useState(false);

  // Data untuk tabel
  const tableData = [
    { id: 1, framework: 'React', year: 2013, creator: 'Facebook' },
    { id: 2, framework: 'Angular', year: 2016, creator: 'Google' },
    { id: 3, framework: 'Vue', year: 2014, creator: 'Evan You' },
    { id: 4, framework: 'Svelte', year: 2016, creator: 'Rich Harris' },
  ];

  const tableColumns = [
    { key: 'id', label: 'ID' },
    { key: 'framework', label: 'Framework' },
    { key: 'year', label: 'Year' },
    { key: 'creator', label: 'Creator' },
  ];

  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>XStack Library Test Page</h1>

      <div style={{ margin: '2rem 0' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Modal Example</h2>
        <button onClick={() => setModalOpen(true)} style={buttonStyle}>
          Open Modal
        </button>
      </div>

      <div style={{ margin: '2rem 0' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Table Example</h2>
        <XStackTable
          columns={tableColumns}
          data={tableData}
          showSearch={true}
          showPageSize={true}
          showPagination={true}
        />
      </div>

      <XStackModal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        type="info"
      >
        <h2 slot="header">Hello from XStack Modal!</h2>
        <p slot="body">This modal is running in a Next.js application.</p>
        <div slot="footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={() => setModalOpen(false)} style={buttonStyle}>
            Close
          </button>
        </div>
      </XStackModal>
    </main>
  );
}

// Simple button style
const buttonStyle: React.CSSProperties = {
  background: '#0070f3',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
};