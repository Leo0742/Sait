'use client';

import Link from 'next/link';

const events = [
  {
    id: 'mfm2026',
    title: 'Международный фестиваль молодёжи – 2026',
    location: 'Россия, Свердловская область',
    dates: '11.09.2026 – 17.09.2026',
    image: 'https://ext.same-assets.com/252857205/117723726.png'
  },
  {
    id: 'biryusa-2026',
    title: 'Всероссийский молодёжный форум «Территория инициативной молодёжи «Бирюса» – 2026',
    location: 'Россия, Красноярский край',
    dates: '17.06.2026 – 21.06.2026',
    image: 'https://ext.same-assets.com/252857205/1733271699.png'
  },
  {
    id: 'child-peace',
    title: 'Всемирная детская конференция «Дети – за мир»',
    location: 'Россия, Республика Крым',
    dates: '21.06.2026 – 12.07.2026',
    image: 'https://ext.same-assets.com/252857205/4277843668.png'
  },
  {
    id: 'ecosystem-26',
    title: 'Всероссийский молодёжный экологический форум «Экосистема. Заповедный край» – 2026',
    location: 'Россия, Камчатский край',
    dates: '22.06.2026 – 28.06.2026',
    image: 'https://ext.same-assets.com/252857205/1876784289.png'
  }
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F7]">
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm mb-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Главная
          </Link>
          <span className="text-gray-400">›</span>
          <span className="text-gray-900 font-medium">Мероприятия</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-8 text-[#1a1a1a]">Мероприятия</h1>

        {/* Filters */}
        <div className="bg-[#F5EDE7] rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {/* Country */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Страна</label>
              <select className="w-full px-4 py-2.5 rounded-lg border-0 bg-white text-sm focus:ring-2 focus:ring-[#E55C94]">
                <option value="">Все</option>
                <option>Россия</option>
              </select>
            </div>

            {/* Region */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Регион</label>
              <select className="w-full px-4 py-2.5 rounded-lg border-0 bg-white text-sm focus:ring-2 focus:ring-[#E55C94]">
                <option value="">Все</option>
              </select>
            </div>

            {/* Audience */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Аудитория</label>
              <select className="w-full px-4 py-2.5 rounded-lg border-0 bg-white text-sm focus:ring-2 focus:ring-[#E55C94]">
                <option value="">Все</option>
              </select>
            </div>

            {/* Date From */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Дата проведения</label>
              <input
                type="text"
                placeholder="ДД.ММ.ГГГГ"
                className="w-full px-4 py-2.5 rounded-lg border-0 bg-white text-sm focus:ring-2 focus:ring-[#E55C94] placeholder:text-gray-400"
              />
            </div>

            {/* Date To */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">&nbsp;</label>
              <input
                type="text"
                placeholder="ДД.ММ.ГГГГ"
                className="w-full px-4 py-2.5 rounded-lg border-0 bg-white text-sm focus:ring-2 focus:ring-[#E55C94] placeholder:text-gray-400"
              />
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Статус регистрации</label>
              <select className="w-full px-4 py-2.5 rounded-lg border-0 bg-white text-sm focus:ring-2 focus:ring-[#E55C94]">
                <option value="">Все</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="mt-4">
            <button className="px-6 py-2.5 bg-white hover:bg-gray-50 text-gray-700 rounded-lg font-medium text-sm transition-colors">
              Найти мероприятие
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Event Image */}
              <div className="relative h-[200px] bg-[#F5EDE7] flex items-center justify-center p-6">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Event Details */}
              <div className="p-5">
                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{event.dates}</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{event.location}</span>
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold mb-4 text-[#1a1a1a] leading-tight min-h-[60px]">
                  {event.title}
                </h3>

                {/* Button */}
                <Link href={`/events/${event.id}`}>
                  <button className="w-full px-4 py-2.5 bg-gradient-to-r from-[#E84393] to-[#E55C94] text-white rounded-full font-medium text-sm hover:opacity-90 transition-opacity">
                    Подробнее
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
