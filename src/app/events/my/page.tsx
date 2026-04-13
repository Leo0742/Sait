'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export default function MyEventsPage() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm">
      <h1 className="text-3xl font-bold mb-8">Мероприятия</h1>

      <div className="flex gap-6 border-b border-gray-200 mb-8">
        <Link
          href="/events/my"
          className="pb-4 text-sm font-medium text-[#E55C94] border-b-2 border-[#E55C94]"
        >
          Мои мероприятия
        </Link>
        <Link
          href="/events/all"
          className="pb-4 text-sm font-medium text-gray-600 hover:text-[#E55C94] transition-colors"
        >
          Все мероприятия
        </Link>
      </div>

      <div className="text-center py-12 text-gray-500">
        <div className="mb-4 text-6xl">📋</div>
        <p className="text-lg mb-2">У вас пока нет мероприятий</p>
        <p className="text-sm">Подайте заявку на участие в мероприятиях во вкладке "Все мероприятия"</p>
      </div>
    </div>
  );
}
