import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import Navbar from './navbar';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      {/* Encabezado */}
      <div>





        
      </div>
      <header className="row mb-2 flex items-end justify-start rounded-md bg-blue-400 p-4">
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </header>

      {/* Contenido principal del menú lateral */}
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        {/* Placeholder para el bloque visible solo en pantallas md y mayores */}
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        {/* Formulario de cierre de sesión */}
        <form>
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Cerrar sesión</div>
          </button>
        </form>
      </div>
    </div>
  );
}
