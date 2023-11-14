'use client'
// pages/clientes.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';


const Page = () => {

  const [filtro, setFiltro] = useState('');

  const handleFiltroChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFiltro(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para manejar el envío del formulario con el filtro seleccionado
    console.log('Filtro seleccionado:', filtro);
  };
 
  const [clientes, setClientes] = useState([
    {
      id: 1,
      nombre: 'Cliente 1',
      tipoCliente: 'Tipo A',
      rut: '123456789',
      user1: 'user1_cliente1',
      user2: 'user2_cliente1',
    },
    {
      id: 2,
      nombre: 'Cliente 2',
      tipoCliente: 'Tipo B',
      rut: '987654321',
      user1: 'user1_cliente2',
      user2: 'user2_cliente2',
    },
    {
      id: 3,
      nombre: 'Cliente 3',
      tipoCliente: 'Tipo C',
      rut: '543210987',
      user1: 'user1_cliente3',
      user2: 'user2_cliente3',
    },
    {
      id: 4,
      nombre: 'Cliente 4',
      tipoCliente: 'Tipo A',
      rut: '678901234',
      user1: 'user1_cliente4',
      user2: 'user2_cliente4',
    },
    {
      id: 5,
      nombre: 'Cliente 5',
      tipoCliente: 'Tipo B',
      rut: '432109876',
      user1: 'user1_cliente5',
      user2: 'user2_cliente5',
    },
  ]);

  return (
    
    <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Clientes</h1>
     {/* filtro Clientes */}
     <div className="container mx-auto p-4">
      <div className="flex">
        <form onSubmit={handleSubmit} className="mr-auto">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Tipo de cliente:</label>
            <select
              className="mt-1 border rounded-md"
              value={filtro}
              onChange={handleFiltroChange}
            >
              <option value="filtro1">Fullfilment</option>
              <option value="filtro2">pro</option>
              <option value="filtro3">enterprise</option>
            </select>
          </div>
        </form>
        <div className="">
        <button type="submit" className="px-2 py-2 mt-5 bg-gray-500 text-white rounded-md hover:bg-gray-400">
  <Link href="/dashboard/clientes/formulario">
    <p>Crear</p>
  </Link>
</button>
        </div>
        
      </div>
    </div>
     {/* Fin filtro Clientes */}
    {/* Tabla Clientes PONER ROUNDED*/}
    
    <div className="" >
      <table className="min-w-full bg-white border border-gray-300 ">
        <thead className=''>
          <tr className=" divide-x">
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Nombre</th>
            <th className="py-2 px-4 border-b">Tipo de Cliente</th>
            <th className="py-2 px-4 border-b">RUT</th>
            <th className="py-2 px-4 border-b">User 1</th>
            <th className="py-2 px-4 border-b">User 2</th>
            <th className="py-2 px-4 border-b">User 2</th>
            <th className="py-2 px-4 border-b">User 2</th>
            <th className="py-2 px-4 border-b">Crud</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id} className="divide-x">
              <td className="py-2 px-4 border-b">{cliente.id}</td>
              <td className="py-2 px-4 border-b">{cliente.nombre}</td>
              <td className="py-2 px-4 border-b">{cliente.tipoCliente}</td>
              <td className="py-2 px-4 border-b">{cliente.rut}</td>
              <td className="py-2 px-4 border-b">{cliente.user1}</td>
              <td className="py-2 px-4 border-b">{cliente.user2}</td>
              <td className="py-2 px-4 border-b">{cliente.user2}</td>
              <td className="py-2 px-4 border-b">{cliente.user2}</td>
              <td className="py-2 px-4 border-b">D - V - E</td>
            </tr>
          ))} 
        </tbody>
      </table>
    </div> 
     {/*Fin Tabla Clientes */}
  </div>
  );
};

export default Page;