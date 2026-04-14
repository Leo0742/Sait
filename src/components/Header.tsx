import Link from 'next/link';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="https://ext.same-assets.com/252857205/451986379.svg"
              alt="Всемирный фестиваль молодёжи"
              className="w-10 h-10"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <Link href="/events" className="hover:text-primary transition-colors">
              Мероприятия
            </Link>
            <Link href="/news" className="hover:text-primary transition-colors">
              Новости
            </Link>
            <Link href="/photo" className="hover:text-primary transition-colors">
              Фотобанк
            </Link>
            <Link href="/ifc" className="hover:text-primary transition-colors">
              МКД
            </Link>
            <Link href="/wyf2024" className="hover:text-primary transition-colors">
              ВФМ-2024
            </Link>
            <Link href="/documents" className="hover:text-primary transition-colors">
              Документы
            </Link>
            <Link href="/contacts" className="hover:text-primary transition-colors">
              Контакты
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Social icons */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href="https://max.ru/wyffest"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-black flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="max"
              >
                <img src="https://ext.same-assets.com/252857205/438817219.svg" alt="" className="w-5 h-5" />
              </a>
              <a
                href="https://vk.com/wyf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-black flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="vkontakte"
              >
                <img src="https://ext.same-assets.com/252857205/1253302197.svg" alt="" className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/wyffest"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-black flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="telegram"
              >
                <img src="https://ext.same-assets.com/252857205/1816782271.svg" alt="" className="w-5 h-5" />
              </a>
            </div>

            {/* User section */}
            <div className="flex items-center gap-3">
              <Link href="/profile" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <Avatar className="w-10 h-10 bg-[#5CEBAA] text-white font-semibold text-sm border-2 border-white shadow-sm">
                  <AvatarFallback className="bg-[#5CEBAA] text-white">БЛ</AvatarFallback>
                </Avatar>
                <span className="hidden md:block text-sm font-medium">Болбачан Л. А.</span>
              </Link>
              <div className="hidden md:flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full px-4 py-1 h-8 text-xs border-gray-300"
                >
                  RU
                </Button>
                <Button
                  size="sm"
                  className="rounded-full px-6 py-1 h-9 text-sm bg-[#E55C94] hover:bg-[#D04A82]"
                >
                  Выйти
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
