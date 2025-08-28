'use client';

import { XStackTable } from '@/LitWrappers';
import { motion } from 'framer-motion';

export default function TableExample() {
  const data = [
    { "id": 1, "name": "John Doe", "age": 32, "city": "New York" },
    { "id": 2, "name": "Jane Smith", "age": 28, "city": "London" },
    { "id": 3, "name": "Sam Green", "age": 45, "city": "Tokyo" },
    { "id": 4, "name": "Alice Johnson", "age": 39, "city": "Paris" },
    { "id": 5, "name": "Bob Brown", "age": 51, "city": "Sydney" },
    { "id": 6, "name": "Emily White", "age": 25, "city": "Berlin" }
  ];

  const columns = [
    { "key": "id", "label": "ID" },
    { "key": "name", "label": "Name" },
    { "key": "age", "label": "Age" },
    { "key": "city", "label": "City" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <XStackTable
        columns={columns}
        data={data}
        pageSize={3}
        showSearch={true}
        showPageSize={true}
        showPagination={true}
      />
    </motion.div>
  );
}
