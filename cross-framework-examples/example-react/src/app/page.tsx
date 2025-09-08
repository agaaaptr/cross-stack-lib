// src/app/page.tsx
'use client';

import { useState } from 'react';
import { XStackTable, XStackModal } from '@/components/LitWrappers';

export default function HomePage() {
  const [isModalOpen, setModalOpen] = useState(false);

  const tableData = [
    { id: 1, framework: 'React', year: 2013, creator: 'Facebook' },
    { id: 2, framework: 'Angular', year: 2016, creator: 'Google' },
    { id: 3, framework: 'Vue', year: 2014, creator: 'Evan You' },
    { id: 4, framework: 'Svelte', year: 2016, creator: 'Rich Harris' },
    { id: 5, framework: 'Ember', year: 2011, creator: 'Yehuda Katz' },
    { id: 6, framework: 'Backbone', year: 2010, creator: 'Jeremy Ashkenas' },
  ];

  const tableColumns = [
    { key: 'id', label: 'ID' },
    { key: 'framework', label: 'Framework' },
    { key: 'year', label: 'Year' },
    { key: 'creator', label: 'Creator' },
  ];

  return (
    <main className="container">
      <h1 className="header">Admin Dashboard</h1>

      <div className="panel">
        <h2 className="panel-header">Framework Management</h2>
        <p style={{ opacity: 0.7, marginTop: '-1rem', marginBottom: '1.5rem' }}>
          A list of popular web frameworks.
        </p>
        <XStackTable
          columns={tableColumns}
          data={tableData}
          showSearch={true}
          showPageSize={true}
          showPagination={true}
        />
      </div>

      <div className="panel">
        <h2 className="panel-header">Modal Example</h2>
        <p style={{ opacity: 0.7, marginTop: '-1rem', marginBottom: '1.5rem' }}>
          Click the button to launch a confirmation modal.
        </p>
        <button onClick={() => setModalOpen(true)} className="btn btn-primary">
          Show Confirmation
        </button>
      </div>

      <XStackModal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        type="info"
      >
        <h2 slot="header">Confirm Action</h2>
        <p slot="body">Are you sure you want to proceed? This action cannot be undone.</p>
        <div slot="footer" style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
          <button onClick={() => setModalOpen(false)} className="btn btn-secondary">
            Cancel
          </button>
          <button onClick={() => setModalOpen(false)} className="btn btn-primary">
            Confirm
          </button>
        </div>
      </XStackModal>
    </main>
  );
}
