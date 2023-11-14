'use client'
// pages/clientes.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from './modal';

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
 
  

  return (
    <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Clientes</h1>

        <form className='card'>
        <div className="grid gap-x-8 gap-y-4 grid-cols-3">
      <div>
        <label className="block text-sm font-medium text-gray-600">Nombre:</label>
        <input type='text' className="mt-1 border rounded-md"></input>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-600">Rut:</label>
        <input type='text' className="mt-1 border rounded-md"></input>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-600">Tipo de cliente:</label>
          <select
              className=" border rounded-md"
              value={filtro}
              onChange={handleFiltroChange}
            >
              <option value="filtro1">Fullfilment</option>
              <option value="filtro2">pro</option>
              <option value="filtro3">enterprise</option>
          </select>
      </div>
      <div>04</div>
      <div>05</div>
      <div>06</div>
      <button
            type="submit"
            className="px-2 py-2 mt-5  bg-gray-500 text-white rounded-md hover:bg-gray-400"
          >
            Guardar
          </button>
      <button
            type="submit"
            className="px-2 py-2 mt-5  bg-gray-500 text-white rounded-md hover:bg-gray-400"
          >
            Cancelar
      </button>
      </div>
        </form>
         {/* <Modal/>  */}

     {/* filtro Clientes */}
    

  </div>
  );
};

export default Page;