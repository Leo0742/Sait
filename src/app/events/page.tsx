'use client';

import Link from 'next/link';

const events = [
  {
    id: 'mfm2026',
    title: 'Международный фестиваль молодёжи – 2026',
    location: 'Россия, Свердловская область',
    dates: '11.09.2026 – 17.09.2026',
    image: 'https://ext.same-assets.com/252857205/2071610930.png'
  },
  {
    id: 'biryusa-2026',
    title: 'Всероссийский молодёжный форум «Территория инициативной молодёжи «Бирюса» – 2026',
    location: 'Россия, Красноярский край',
    dates: '17.06.2026 – 21.06.2026',
    image: 'https://ext.same-assets.com/252857205/328611913.png'
  },
  {
    id: 'child-peace',
    title: 'Всемирная детская конференция «Дети – за мир»',
    location: 'Россия, Республика Крым',
    dates: '21.06.2026 – 12.07.2026',
    image: 'https://ext.same-assets.com/252857205/1810453731.png'
  },
  {
    id: 'ecosystem-26',
    title: 'Всероссийский молодёжный экологический форум «Экосистема. Заповедный край» – 2026',
    location: 'Россия, Камчатский край',
    dates: '22.06.2026 – 28.06.2026',
    image: 'https://ext.same-assets.com/252857205/1575724261.png'
  }
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F7] py-8">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm mb-6 text-gray-600">
          <Link href="/" className="hover:text-[#E55C94]">Главная</Link>
          <span>›</span>
          <span className="text-gray-900">Мероприятия</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-8 text-[#1a1a1a]">Мероприятия</h1>

        {/* Filters */}
        <div className="bg-[#F5EDE7] rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2">Страна</label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm">
                <option value="">Все</option>
                <option>Россия</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Регион</label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm">
                <option value="">Все</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Аудитория</label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm">
                <option value="">Все</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Дата проведения</label>
              <input
                type="text"
                placeholder="ДД.ММ.ГГГГ"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Статус регистрации</label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm">
                <option value="">Все</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Найти мероприятие по названию</label>
              <input
                type="text"
                placeholder="Поиск..."
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm"
              />
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Link
              key={event.id}
              href={`/events/${event.id}`}
              className="bg-[#F5EDE7] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] relative bg-white">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{event.dates}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{event.location}</span>
                </div>
                <h3 className="font-semibold text-gray-900 leading-tight mb-4">
                  {event.title}
                </h3>
                <button className="w-full bg-[#E55C94] text-white py-3 px-6 rounded-full font-medium hover:bg-[#D04A82] transition-colors">
                  Подробнее
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
