'use client'
import { ArchiveBoxIcon, Bars3Icon, CurrencyDollarIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Clientes', href: '/dashboard/clientes', icon: UserIcon },
  { name: 'Catalogo', icon: Bars3Icon},
  { name: 'Precios', href: '/dashboard/precios', icon: CurrencyDollarIcon },
  { name: 'Stock', href: '/dashboard/stock', icon: ArchiveBoxIcon },
  { name: 'Ordenes', href: '/dashboard/ordenes', icon: ShoppingCartIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isCurrentPage = pathname === link.href;

        const linkClasses = {
          'flex': true,
          'h-[48px]': true,
          'grow': true,
          'items-center': true,
          'justify-center': true,
          'gap-2': true,
          'rounded-md': true,
          'bg-gray-50': true,
          'p-3': true,
          'text-sm': true,
          'font-medium': true,
          'hover:bg-sky-100': true,
          'hover:text-blue-600': true,
          'md:flex-none': true,
          'md:justify-start': true,
          'md:p-2': true,
          'md:px-3': true,
          'bg-sky-100': isCurrentPage,
          'text-blue-600': isCurrentPage,
        };

        return (
          <a key={link.href} href={link.href} className={Object.entries(linkClasses).filter(([, value]) => value).map(([key]) => key).join(' ')}>
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
}
