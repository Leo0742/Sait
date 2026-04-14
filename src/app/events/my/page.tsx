'use client';

import Link from 'next/link';

export default function MyEventsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-[#1a1a1a]">Мероприятия</h1>

      {/* Tabs */}
      <div className="flex gap-8 mb-8 border-b border-gray-200">
        <Link
          href="/events/my"
          className="pb-3 text-base font-medium text-[#E55C94] border-b-2 border-[#E55C94]"
        >
          Мои мероприятия
        </Link>
        <Link
          href="/events/all"
          className="pb-3 text-base font-medium text-gray-600 hover:text-[#E55C94] transition-colors"
        >
          Все мероприятия
        </Link>
      </div>

      {/* Empty state */}
      <div className="bg-white rounded-2xl p-24 text-center">
        <p className="text-gray-500 text-lg">Тут пока ничего нет</p>
      </div>
    </div>
  );
}
