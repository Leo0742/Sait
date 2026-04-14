'use client';

import Link from 'next/link';

const events = [
  {
    id: 'biryusa-2026',
    title: 'Всероссийский молодёжный форум «Территория инициативной молодёжи «Бирюса» – 2026',
    location: 'Красноярский край',
    dates: '17 июня 2026 г. – 21 июня 2026 г.',
    status: 'unavailable',
    statusText: 'Регистрация недоступна',
    statusNote: 'Регистрация доступна только следующим категориям пользователей: иностранные участники, соотечественники (РФ граждане за рубежом), иностранные участники, проживающие на территории РФ.',
    logo: 'https://ext.same-assets.com/252857205/1596549718.png'
  },
  {
    id: 'child-peace',
    title: 'Всемирная детская конференция «Дети – за мир»',
    location: 'Республика Крым',
    dates: '21 июня 2026 г. – 12 июля 2026 г.',
    status: 'unavailable',
    statusText: 'Регистрация недоступна',
    statusNote: 'Регистрация доступна только для участников с датой рождения с 13.07.2008 по 21.05.2012.',
    logo: 'https://ext.same-assets.com/252857205/1194794149.png'
  },
  {
    id: 'ecosystem-26',
    title: 'Всероссийский молодёжный экологический форум «Экосистема. Заповедный край» – 2026',
    location: 'Камчатский край',
    dates: '22 июня 2026 г. – 28 июня 2026 г.',
    status: 'unavailable',
    statusText: 'Регистрация недоступна',
    statusNote: 'Регистрация доступна только следующим категориям пользователей: иностранные участники, соотечественники (РФ граждане за рубежом), иностранные участники, проживающие на территории РФ.',
    logo: 'https://ext.same-assets.com/252857205/1091441774.png'
  },
  {
    id: 'sheregesh-2026',
    title: 'Молодёжный форум «Шерегеш» – 2026',
    location: 'Кемеровская область',
    dates: '22 июня 2026 г. – 25 июня 2026 г.',
    status: 'unavailable',
    statusText: 'Регистрация недоступна',
    statusNote: 'Регистрация доступна только следующим категориям пользователей: иностранные участники, соотечественники (РФ граждане за рубежом), иностранные участники, проживающие на территории РФ.',
    logo: 'https://ext.same-assets.com/252857205/70379289.svg'
  },
  {
    id: 'eurasia-2026',
    title: 'Международный молодёжный форум «Евразия Global»',
    location: 'Оренбургская область',
    dates: '23 июня 2026 г. – 28 июня 2026 г.',
    status: 'available',
    statusText: 'Подать заявку',
    statusNote: '',
    logo: 'https://ext.same-assets.com/252857205/70379289.svg'
  },
  {
    id: 'dobrino-2026',
    title: 'Всероссийский форум развития гражданского общества «Добрино»',
    location: 'Ханты-Мансийский автономный округ - Югра',
    dates: '1 июля 2026 г. – 14 июля 2026 г.',
    status: 'unavailable',
    statusText: 'Регистрация недоступна',
    statusNote: 'Регистрация доступна только следующим категориям пользователей: иностранные участники, соотечественники (РФ граждане за рубежом), иностранные участники, проживающие на территории РФ.',
    logo: 'https://ext.same-assets.com/252857205/70379289.svg'
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

      {/* Events list */}
      <div className="space-y-6">
        {events.map((event) => (
          <Link
            key={event.id}
            href={`/events/${event.id}`}
            className="block bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="p-6">
              <div className="flex gap-6 items-start">
                {/* Event logo */}
                <div className="w-24 h-24 flex-shrink-0 bg-gray-50 rounded-lg flex items-center justify-center p-3">
                  <img
                    src={event.logo}
                    alt={event.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Event details */}
                <div className="flex-1">
                  <div className="text-sm text-gray-600 mb-2">
                    {event.location} {event.dates}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-[#E55C94] transition-colors">
                    {event.title}
                  </h3>
                  {event.statusNote && (
                    <p className="text-sm text-[#E55C94]">
                      {event.statusNote}
                    </p>
                  )}
                </div>

                {/* Status button */}
                <div className="flex-shrink-0">
                  {event.status === 'available' ? (
                    <button
                      onClick={(e) => e.preventDefault()}
                      className="px-8 py-3 bg-[#00A86B] text-white rounded-full font-medium hover:bg-[#008F5A] transition-colors whitespace-nowrap"
                    >
                      {event.statusText}
                    </button>
                  ) : (
                    <div className="px-8 py-3 bg-gray-100 text-gray-500 rounded-full font-medium whitespace-nowrap">
                      {event.statusText}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
