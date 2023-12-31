'use client'
import AcmeLogo from '@/app/ui/acme-logo';
import Link from 'next/link';
import React, { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';


export default function Page() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(''); 

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);

      // Agregar el token CSRF a la solicitud
      formData.append('_token', token);

      const response = await axios.post('http://127.0.0.1:8000/api/login', formData, {

      headers: {'Content-Type': 'multipart/form-data',},
    });
      //SET LOCAL STORAGE
        localStorage.setItem('token',response.data.access_token);
        localStorage.setItem('rol',response.data.role);
        localStorage.setItem('permisions',response.data.permisions);

      //RESPUESTAS
        console.log("--------------------RESPONSE.DATA-----------------");
        console.log(response.data);
        console.log("----------------------  RESPONSE  -----------------------------");
        console.log(response);
        console.log("----------------------  TOKEN  ---------------------------");
        console.log(localStorage.getItem('token'));
        console.log("----------------------  ROL  ---------------------------");
        console.log(localStorage.getItem('rol'));
        console.log("----------------------  PERMISIONS revisar ---------------------------");
        console.log(localStorage.getItem('permisions'));
        // 
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
    
  };

  useEffect(() => {
    // Recuperar el token almacenado en localStorage al cargar la página
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
    const storedRol = localStorage.getItem('rol');
    if (storedRol) {
      setToken(storedRol);
    }
    const storedPermisions = localStorage.getItem('permisions');
    if (storedPermisions) {
      setToken(storedPermisions);
    }
  }, []);
  
  // useEffect(() => {
  //   axios.post('http://127.0.0.1:8000/api/login')
  //     .then((response) => {
  //       setToken(response.data.csrf_token);
  //     })
  //     .catch((error) => {
  //       console.error('Error al obtener el token CSRF:', error);
  //     });
  // }, []);

  return (
    <div>
      {/* cabecera */}
      <div className="flex items-center">
        <Link className=" rounded-md p-4 " href="/">
          <div className="md:w-60">
            <AcmeLogo />
          </div>
        </Link>
      </div>
            {/* Log in  */}
            
      <form className='flex justify-center pt-3' onSubmit={handleLogin}>
      
        <div className='grid border-2 border-inherit px-5 py-5 rounded-md'>
          <label className="block text-sm font-medium text-gray-800">Login</label>

          <div className='py-2'>
            <label className="block text-sm font-medium text-gray-600">Correo:</label>
            <input type='email' className="mt-1 border rounded-md" value={email}
              onChange={(e) => setEmail(e.target.value)} required></input>
          </div>
          <div className='py-2'>
            <label className="block text-sm font-medium text-gray-600">Contraseña:</label>
            <input type='password' className="mt-1 border rounded-md"  value={password}
              onChange={(e) => setPassword(e.target.value)} required></input>
          </div>
          <div className='py-2'>
          <Link className="block text-sm font-medium text-gray-600" href="/recuperar+contraseña">¿Olvidó su contraseña?</Link>
          </div>
          <div>
          <button type="submit" className="px-2 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-400">
              Iniciar sesión
            </button>
          </div>
        </div>
      </form>
    </div>
    //...
  );
}