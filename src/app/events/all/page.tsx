'use client';

import Link from 'next/link';

const events = [
  {
    id: 'mfm2026',
    title: 'Международный фестиваль молодёжи – 2026',
    location: 'Россия, Свердловская область',
    dates: '11.09.2026 – 17.09.2026',
    status: 'Регистрация открыта',
    statusColor: 'bg-green-100 text-green-700',
    image: 'https://ext.same-assets.com/252857205/117723726.png'
  },
  {
    id: 'biryusa-2026',
    title: 'Всероссийский молодёжный форум «Территория инициативной молодёжи «Бирюса» – 2026',
    location: 'Россия, Красноярский край',
    dates: '17.06.2026 – 21.06.2026',
    status: 'Регистрация открыта',
    statusColor: 'bg-green-100 text-green-700',
    image: 'https://ext.same-assets.com/252857205/1733271699.png'
  },
  {
    id: 'child-peace',
    title: 'Всемирная детская конференция «Дети – за мир»',
    location: 'Россия, Республика Крым',
    dates: '21.06.2026 – 12.07.2026',
    status: 'Регистрация открыта',
    statusColor: 'bg-green-100 text-green-700',
    image: 'https://ext.same-assets.com/252857205/4277843668.png'
  },
  {
    id: 'ecosystem-26',
    title: 'Всероссийский молодёжный экологический форум «Экосистема. Заповедный край» – 2026',
    location: 'Россия, Камчатский край',
    dates: '22.06.2026 – 28.06.2026',
    status: 'Регистрация открыта',
    statusColor: 'bg-green-100 text-green-700',
    image: 'https://ext.same-assets.com/252857205/1876784289.png'
  }
];

export default function AllEventsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-[#1a1a1a]">Мероприятия</h1>

      {/* Tabs */}
      <div className="flex gap-8 mb-8 border-b border-gray-200">
        <Link
          href="/events/my"
          className="pb-3 text-base font-medium text-gray-600 hover:text-[#E55C94] transition-colors"
        >
          Мои мероприятия
        </Link>
        <Link
          href="/events/all"
          className="pb-3 text-base font-medium text-[#E55C94] border-b-2 border-[#E55C94]"
        >
          Все мероприятия
        </Link>
      </div>

      {/* Events grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
              {/* Event image */}
              <div className="relative h-[200px] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Event details */}
              <div className="p-6">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{event.dates}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-4 text-[#1a1a1a] leading-tight min-h-[60px]">
                  {event.title}
                </h3>

                <Link href={`/events/${event.id}`}>
                  <button className="w-full px-6 py-3 bg-[#e84393] text-white rounded-full font-semibold hover:bg-[#d73882] transition-colors">
                    Подробнее
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}
