import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white py-16">
          {/* Background decorative shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Left pink circle */}
            <div className="absolute -left-32 top-1/3 w-80 h-80 rounded-full bg-[#F5C7D8] opacity-40" />
            {/* Left green circle */}
            <div className="absolute -left-24 top-2/3 w-64 h-64 rounded-full bg-[#B8E4D4] opacity-50" />
            {/* Right yellow shape */}
            <div className="absolute -right-32 top-1/4 w-96 h-96 rounded-full bg-[#FFE5B4] opacity-40" />
            {/* Right green shape */}
            <div className="absolute right-0 top-2/3 w-80 h-80 rounded-full bg-[#C8E6D7] opacity-40" />
            {/* Bottom pink shape */}
            <div className="absolute left-1/4 -bottom-32 w-72 h-72 rounded-full bg-[#F5D1E0] opacity-30" />
          </div>

          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            {/* Title */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#1a1a1a] leading-tight">
                Международная платформа<br />возможностей
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Интернациональное пространство для развития международного сотрудничества<br />
                среди молодых лидеров со всего мира
              </p>
            </div>

            {/* Featured Event Card */}
            <div className="max-w-5xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-yellow-400 via-yellow-300 to-orange-400 p-1">
                <div className="relative rounded-[22px] overflow-hidden bg-gradient-to-r from-green-400 via-teal-300 to-green-300 h-[400px]">
                  {/* Background image */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-teal-200" />
                  </div>

                  <div className="relative h-full flex items-center">
                    <div className="flex-1 px-12 z-10">
                      {/* Event Info Box */}
                      <div className="bg-white rounded-2xl p-8 max-w-lg shadow-xl">
                        <p className="text-green-600 font-semibold mb-3">11 — 17 сентября</p>
                        <h2 className="text-3xl font-bold text-[#2E3192] mb-6 leading-tight">
                          МЕЖДУНАРОДНЫЙ ФЕСТИВАЛЬ<br />
                          МОЛОДЁЖИ — 2026
                        </h2>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-3 mb-6">
                          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-lg font-bold text-sm shadow-md">
                            СЛЕДУЙ ЗА МЕЧТОЙ
                          </div>
                          <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-2 rounded-lg font-bold text-sm shadow-md">
                            ВМЕСТЕ С РОССИЕЙ
                          </div>
                        </div>

                        {/* Button */}
                        <Link href="/events/mfm2026">
                          <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all">
                            Подать заявку
                          </button>
                        </Link>
                      </div>
                    </div>

                    {/* Event Image */}
                    <div className="flex-1 h-full flex items-center justify-center pr-12">
                      <img
                        src="https://ext.same-assets.com/252857205/3894719337.png"
                        alt="МФМ 2026"
                        className="max-h-[350px] object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-16 bg-[#FAF8F7]">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-4xl font-bold text-[#1a1a1a]">Мероприятия</h2>
              <Link href="/events" className="text-[#E55C94] hover:text-[#D04A82] font-medium flex items-center gap-2">
                Смотреть все
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
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
        </section>
      </main>

      <Footer />
    </div>
  );
}
