'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { icon: '👤', label: 'Профиль', href: '/profile/common' },
    { icon: '📋', label: 'Мои заявки', href: '/applications' },
    { icon: '🎯', label: 'Мероприятия', href: '/events', submenu: [
      { label: 'Мои мероприятия', href: '/events/my' },
      { label: 'Все мероприятия', href: '/events/all' }
    ]}
  ];

  return (
    <aside className="w-[340px] bg-white rounded-2xl p-6 sticky top-6 self-start">
      {/* User Profile */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative mb-3">
          <Avatar className="w-24 h-24 bg-[#5CEBAA] text-white font-semibold text-2xl border-4 border-white shadow-md">
            <AvatarFallback className="bg-[#5CEBAA] text-white">БЛ</AvatarFallback>
          </Avatar>
          <div className="absolute -top-1 -right-1 w-7 h-7 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center shadow-sm border-2 border-white">
            <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <h2 className="font-semibold text-lg mb-1">Болбачан Л. А.</h2>
        <p className="text-sm text-[#E55C94] mb-4">bolianN200746@yandex.ru</p>
        <Button
          variant="outline"
          className="w-full rounded-full border-2 border-[#E55C94] text-[#E55C94] hover:bg-[#FCF1F5] font-medium"
        >
          Редактировать профиль
        </Button>
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <div key={item.href}>
            <Link
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium text-sm",
                pathname.startsWith(item.href)
                  ? "text-[#E55C94] bg-[#FCF1F5]"
                  : "text-gray-700 hover:bg-gray-50"
              )}
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
            {item.submenu && (
              <div className="ml-11 mt-1 space-y-1">
                {item.submenu.map((subitem) => (
                  <Link
                    key={subitem.href}
                    href={subitem.href}
                    className={cn(
                      "block px-4 py-2 rounded-lg text-sm transition-colors",
                      pathname === subitem.href
                        ? "text-[#E55C94] font-medium"
                        : "text-gray-600 hover:text-gray-900"
                    )}
                  >
                    {subitem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Event Banner */}
      <div className="mt-6 rounded-xl overflow-hidden shadow-lg relative bg-gradient-to-br from-yellow-400 via-yellow-300 to-orange-400 p-[3px]">
        <div className="bg-white rounded-[10px] p-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
            <img src="https://ext.same-assets.com/252857205/451986379.svg" alt="" className="w-full h-full object-contain" />
          </div>
          <p className="text-xs text-gray-500 mb-2 relative z-10">11 — 17 сентября</p>
          <h3 className="font-bold text-sm mb-3 leading-tight relative z-10">
            МЕЖДУНАРОДНЫЙ<br />
            ФЕСТИВАЛЬ<br />
            МОЛОДЁЖИ — 2026
          </h3>
          <div className="flex flex-wrap gap-2 mb-3 relative z-10">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-md shadow-sm">
              СЛЕДУЙ ЗА МЕЧТОЙ
            </div>
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-md shadow-sm">
              ВМЕСТЕ С РОССИЕЙ
            </div>
          </div>
          <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold rounded-lg mb-2 shadow-md relative z-10 text-sm py-2">
            Подать заявку
          </Button>
          <p className="text-[10px] text-gray-500 text-center relative z-10">
            Подробнее о мероприятии
          </p>
        </div>
      </div>
    </aside>
  );
}
