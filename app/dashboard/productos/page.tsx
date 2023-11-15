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
    <h1 className="text-2xl font-bold mb-4">Productos</h1>
     {/* filtro Clientes */}
     <div className="container mx-auto p-4">
      <div className="flex">
        <form onSubmit={handleSubmit} className="mr-auto">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Tipo de prodcto:</label>
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
            <th className="py-2 px-4 border-b">Titulo</th>
            <th className="py-2 px-4 border-b">Tipo de Cliente</th>
            <th className="py-2 px-4 border-b">RUT</th>
            <th className="py-2 px-4 border-b">User 1</th>
            <th className="py-2 px-4 border-b">Id vendedor</th>
            <th className="py-2 px-4 border-b">Descripción</th>
            <th className="py-2 px-4 border-b">Imagen</th>
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
              <td className="py-2 px-4 border-b"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
 - <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
 - <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>
</td>
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