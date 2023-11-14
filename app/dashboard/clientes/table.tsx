// components/Table.tsx
import React from 'react';

interface TableRow {
  id: number;
  nombre: string;
  tipoCliente: string;
  rut: string;
  user1: string;
  user2: string;
  user3: string;
  user4: string;
}

interface TableProps {
  data: TableRow[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="min-w-full border border-gray-300">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">ID</th>
          <th className="py-2 px-4 border-b">Nombre</th>
          <th className="py-2 px-4 border-b">Tipo de Cliente</th>
          <th className="py-2 px-4 border-b">RUT</th>
          <th className="py-2 px-4 border-b">User 1</th>
          <th className="py-2 px-4 border-b">User 2</th>
          <th className="py-2 px-4 border-b">User 3</th>
          <th className="py-2 px-4 border-b">User 4</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td className="py-2 px-4 border-b">{row.id}</td>
            <td className="py-2 px-4 border-b">{row.nombre}</td>
            <td className="py-2 px-4 border-b">{row.tipoCliente}</td>
            <td className="py-2 px-4 border-b">{row.rut}</td>
            <td className="py-2 px-4 border-b">{row.user1}</td>
            <td className="py-2 px-4 border-b">{row.user2}</td>
            <td className="py-2 px-4 border-b">{row.user3}</td>
            <td className="py-2 px-4 border-b">{row.user4}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
