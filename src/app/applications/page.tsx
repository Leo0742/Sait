'use client';

import { Badge } from '@/components/ui/badge';

export default function ApplicationsPage() {
  const applications = [
    {
      id: 1,
      name: 'Всероссийский молодёжный форум «Территория инициативной молодёжи «Бирюса» – 2026',
      location: 'Красноярский край',
      dates: '17 июня 2026 г. – 21 июня 2026 г.',
      status: 'pending',
      statusText: 'Регистрация недоступна',
    },
    {
      id: 2,
      name: 'Всемирная детская конференция «Дети – за мир»',
      location: 'Республика Крым',
      dates: '21 июня 2026 г. – 12 июля 2026 г.',
      status: 'pending',
      statusText: 'Регистрация недоступна',
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm">
      <h1 className="text-3xl font-bold mb-8">Мои заявки</h1>

      <div className="space-y-6">
        {applications.map((app) => (
          <div
            key={app.id}
            className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-3 leading-tight">
                  {app.name}
                </h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="text-[#E55C94]">📅</span>
                    <span>{app.dates}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#E55C94]">📍</span>
                    <span>{app.location}</span>
                  </div>
                </div>
              </div>
              <Badge variant="outline" className="text-red-600 border-red-300 bg-red-50 whitespace-nowrap">
                {app.statusText}
              </Badge>
            </div>

            <div className="text-sm text-gray-500">
              Регистрация доступна только следующим категориям пользователей: иностранные участники,
              соотечественники (РФ граждане за рубежом), иностранные участники, проживающие на территории РФ.
            </div>
          </div>
        ))}

        {applications.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg">У вас пока нет заявок</p>
            <p className="mt-2">Подайте заявку на участие в мероприятиях</p>
          </div>
        )}
      </div>
    </div>
  );
}
