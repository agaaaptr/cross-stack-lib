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
    { "id": 6, "name": "Emily White", "age": 25, "city": "Berlin" },
    { "id": 7, "name": "Michael Black", "age": 30, "city": "Rome" },
    { "id": 8, "name": "Sarah Blue", "age": 35, "city": "Madrid" },
    { "id": 9, "name": "David Grey", "age": 40, "city": "Cairo" },
    { "id": 10, "name": "Laura Red", "age": 29, "city": "Beijing" },
    { "id": 11, "name": "Chris Yellow", "age": 48, "city": "Moscow" },
    { "id": 12, "name": "Olivia Green", "age": 22, "city": "Seoul" },
    { "id": 13, "name": "Daniel Purple", "age": 55, "city": "Rio" },
    { "id": 14, "name": "Sophia Orange", "age": 33, "city": "Dubai" },
    { "id": 15, "name": "James Pink", "age": 27, "city": "Amsterdam" },
    { "id": 16, "name": "Mia Gold", "age": 41, "city": "Stockholm" },
    { "id": 17, "name": "Ethan Silver", "age": 36, "city": "Oslo" },
    { "id": 18, "name": "Isabella Bronze", "age": 24, "city": "Dublin" },
    { "id": 19, "name": "Alexander Copper", "age": 50, "city": "Warsaw" },
    { "id": 20, "name": "Charlotte Platinum", "age": 31, "city": "Prague" }
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
        showSearch={true}
        showPageSize={true}
        showPagination={true}
      />
    </motion.div>
  );
}
