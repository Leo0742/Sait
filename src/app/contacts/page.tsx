'use client';

import Link from 'next/link';

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F7] py-8">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm mb-6 text-gray-600">
          <Link href="/" className="hover:text-[#E55C94]">Главная</Link>
          <span>›</span>
          <span className="text-gray-900">Контакты</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-8 text-[#1a1a1a]">Обратная связь</h1>

        {/* Service Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Служба заботы</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="bg-[#F5EDE7] rounded-3xl p-8 space-y-6">
              <div>
                <div className="text-sm text-gray-600 mb-1">Email</div>
                <a href="mailto:help@wyffest.com" className="text-lg font-semibold text-[#E55C94] hover:underline">
                  help@wyffest.com
                </a>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Для звонков по России</div>
                <a href="tel:88007077733" className="text-lg font-semibold text-[#E55C94] hover:underline">
                  8 (800) 707-77-33
                </a>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Режим работы</div>
                <div className="text-lg font-semibold text-gray-900">
                  Пн-пт: 9:00 - 18:00
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Для звонков из-за рубежа</div>
                <a href="tel:+74737077733" className="text-lg font-semibold text-[#E55C94] hover:underline">
                  +7 (473) 707-77-33
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-[#F5EDE7] rounded-3xl p-8 space-y-6">
              <div>
                <div className="text-sm text-gray-600 mb-1">Для СМИ</div>
                <a href="mailto:press@wyffest.com" className="text-lg font-semibold text-[#E55C94] hover:underline">
                  press@wyffest.com
                </a>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Для партнёров</div>
                <a href="mailto:partners@wyffest.com" className="text-lg font-semibold text-[#E55C94] hover:underline">
                  partners@wyffest.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Organization Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Об организации</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="bg-[#F5EDE7] rounded-3xl p-8 space-y-6">
              <div>
                <div className="text-sm text-gray-600 mb-1">Юридический адрес</div>
                <div className="text-lg font-semibold text-gray-900 mb-3">
                  121099, г. Москва, Подколокольный переулок, дом 10А/2, стр. 1
                </div>
                <a href="mailto:info@wyffest.com" className="text-lg font-semibold text-[#E55C94] hover:underline">
                  info@wyffest.com
                </a>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Режим работы</div>
                <div className="text-lg font-semibold text-gray-900">
                  Пн-Пт: 10:00 - 19:00
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-[#F5EDE7] rounded-3xl p-8">
              <div className="text-lg font-semibold text-gray-900 mb-4">
                Устав организации
              </div>
              <a
                href="#"
                className="inline-block px-8 py-3 bg-[#E55C94] text-white rounded-full font-semibold hover:bg-[#D04A82] transition-colors"
              >
                Просмотреть
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
