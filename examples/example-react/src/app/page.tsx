'use client';

import { useState } from 'react';
import { CslTable, CslModal } from '../components/LitWrappers';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tableColumns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
  ];

  const tableData = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
    { id: 4, name: 'David', email: 'david@example.com' },
    { id: 5, name: 'Eve', email: 'eve@example.com' },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Next.js with Cross-Stack Lib</h1>

      <div className="w-full max-w-4xl mb-16">
        <h2 className="text-2xl font-semibold mb-4">Table Component</h2>
        <CslTable columns={tableColumns} data={tableData} pageSize={5}></CslTable>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Modal Component</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Open Modal
        </button>
        <CslModal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div slot="header">Modal Header</div>
          <div slot="body">This is a modal inside a Next.js app!</div>
          <div slot="footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
              Close
            </button>
          </div>
        </CslModal>
      </div>
    </main>
  );
}