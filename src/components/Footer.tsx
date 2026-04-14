import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Left section */}
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <img
                src="https://ext.same-assets.com/252857205/1789007745.webp"
                alt="Росмолодёжь"
                className="h-12"
              />
              <img
                src="https://ext.same-assets.com/252857205/797422460.svg"
                alt="Росмолодёжь"
                className="h-12"
              />
            </div>
            <Button
              variant="outline"
              className="rounded-full border-2 border-gray-800 text-gray-800 hover:bg-gray-50 font-medium px-6"
            >
              Обратная связь
            </Button>
          </div>

          {/* Navigation links */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <Link href="/events" className="block text-sm hover:text-primary transition-colors">
                Мероприятия
              </Link>
              <Link href="/news" className="block text-sm hover:text-primary transition-colors">
                Новости
              </Link>
              <Link href="/photo" className="block text-sm hover:text-primary transition-colors">
                Фотобанк
              </Link>
              <Link href="/wyf2024" className="block text-sm hover:text-primary transition-colors">
                ВФМ-2024
              </Link>
            </div>
            <div className="space-y-3">
              <Link href="/ifc" className="block text-sm hover:text-primary transition-colors">
                МКД
              </Link>
              <Link href="/documents" className="block text-sm hover:text-primary transition-colors">
                Документы
              </Link>
              <Link href="/contacts" className="block text-sm hover:text-primary transition-colors">
                Контакты
              </Link>
            </div>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3 mb-8">
          <a
            href="https://max.ru/wyffest"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="max"
          >
            <img src="https://ext.same-assets.com/252857205/438817219.svg" alt="" className="w-5 h-5" />
          </a>
          <a
            href="https://vk.com/wyf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="vkontakte"
          >
            <img src="https://ext.same-assets.com/252857205/1253302197.svg" alt="" className="w-5 h-5" />
          </a>
          <a
            href="https://t.me/wyffest"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="telegram"
          >
            <img src="https://ext.same-assets.com/252857205/1816782271.svg" alt="" className="w-5 h-5" />
          </a>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-gray-600">
          <div>
            <p className="mb-1">© 2026 Автономная некоммерческая организация</p>
            <p>«Дирекция Всемирного фестиваля молодежи»</p>
            <p>Все права защищены</p>
          </div>
          <Link
            href="/doc/privacy-policy-ru.pdf"
            target="_blank"
            className="text-sm underline hover:text-primary transition-colors"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>

      {/* Cookie banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-xl p-6 z-50">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-700">
            Платформа работает как часы благодаря файлам cookie. Чтобы всё работало корректно, пожалуйста, ознакомься с нашей{' '}
            <Link href="/doc/privacy-policy-ru.pdf" target="_blank" className="text-[#E55C94] underline">
              Политики конфиденциальности
            </Link>
          </p>
          <Button className="bg-[#E55C94] hover:bg-[#D04A82] text-white rounded-full px-8 whitespace-nowrap">
            Принять
          </Button>
        </div>
      </div>
    </footer>
  );
}
