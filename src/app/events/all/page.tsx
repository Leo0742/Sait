'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const events = [
  {
    id: 'biryusa-2026',
    title: 'Всероссийский молодёжный форум «Территория инициативной молодёжи «Бирюса» – 2026',
    location: 'Красноярский край',
    dates: '17 июня 2026 г. – 21 июня 2026 г.',
    status: 'Регистрация недоступна',
    statusColor: 'bg-red-100 text-red-700',
    image: 'biryusa',
    warning: 'Регистрация доступна только следующим категориям пользователей: иностранные участники, соотечественники (РФ граждане за рубежом), иностранные участники, проживающие на территории РФ.'
  },
  {
    id: 'deti-za-mir',
    title: 'Всемирная детская конференция «Дети – за мир»',
    location: 'Республика Крым',
    dates: '21 июня 2026 г. – 12 июля 2026 г.',
    status: 'Регистрация недоступна',
    statusColor: 'bg-red-100 text-red-700',
    image: 'deti',
    warning: 'Регистрация доступна только для участников с датой рождения с 13.07.2008 по 21.05.2012'
  },
  {
    id: 'ekosistema',
    title: 'Всероссийский молодёжный экологический форум «Экосистема. Заповедный край» – 2026',
    location: 'Камчатский край',
    dates: '22 июня 2026 г. – 28 июня 2026 г.',
    status: 'Регистрация недоступна',
    statusColor: 'bg-red-100 text-red-700',
    image: 'ekosistema',
    warning: 'Регистрация доступна только следующим категориям пользователей: иностранные участники, соотечественники (РФ граждане за рубежом), иностранные участники, проживающие на территории РФ.'
  },
  {
    id: 'sheregesh',
    title: 'Молодёжный форум «Шерегеш» – 2026',
    location: 'Кемеровская область',
    dates: '22 июня 2026 г. – 25 июня 2026 г.',
    status: 'Регистрация недоступна',
    statusColor: 'bg-red-100 text-red-700',
    image: 'sheregesh'
  }
];

export default function AllEventsPage() {
  return (
    <div className="bg-white rounded-2xl p-8">
      <h1 className="text-3xl font-bold mb-8">Мероприятия</h1>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-gray-200 mb-8">
        <Link
          href="/events/my"
          className="pb-4 text-sm font-medium text-gray-600 hover:text-[#E55C94] transition-colors"
        >
          Мои мероприятия
        </Link>
        <Link
          href="/events/all"
          className="pb-4 text-sm font-medium text-[#E55C94] border-b-2 border-[#E55C94]"
        >
          Все мероприятия
        </Link>
      </div>

      {/* Events list */}
      <div className="space-y-6">
        {events.map((event) => (
          <div key={event.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-6">
              {/* Event logo placeholder */}
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-blue-600">{event.image.charAt(0).toUpperCase()}</span>
              </div>

              {/* Event details */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      {event.location} &nbsp; {event.dates}
                    </p>
                    <h3 className="text-lg font-semibold mb-2 leading-tight">
                      {event.title}
                    </h3>
                  </div>
                  <Badge className={`${event.statusColor} font-medium px-3 py-1 whitespace-nowrap`}>
                    {event.status}
                  </Badge>
                </div>

                {event.warning && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                    <p className="text-sm text-red-700">
                      {event.warning}
                    </p>
                  </div>
                )}

                <div className="flex gap-3">
                  <Link href={`/events/${event.id}`}>
                    <Button
                      variant="outline"
                      className="rounded-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium"
                    >
                      Подробнее
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
