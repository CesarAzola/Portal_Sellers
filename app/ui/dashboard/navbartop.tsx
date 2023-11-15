export default function Navbartop() {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
  {/* Navbar con logo "stokeado" */}
  <nav className="flex items-center justify-between mb-4 p-4 bg-blue-500 w-full">
    <div className="flex items-center space-x-2">
    
      {/* Nombre de la aplicación, puedes agregar un texto aquí si lo necesitas */}
      <span className="text-white text-lg font-semibold">Stokeado</span>
    </div>
    {/* Otros elementos del Navbar, como botones o iconos adicionales */}
    <div className="flex items-center space-x-4">
      {/* Puedes agregar más elementos según tus necesidades */}
    </div>
  </nav>
</div>

    );
};