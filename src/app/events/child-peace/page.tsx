import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const otherEvents = [
  {
    id: 'biryusa-2026',
    title: 'Всероссийский молодёжный форум «Территория инициативной молодёжи «Бирюса» – 2026',
    location: 'Россия, Красноярский край',
    dates: '17.06.2026 – 21.06.2026',
    logo: 'https://ext.same-assets.com/252857205/1596549718.png'
  },
  {
    id: 'ecosystem-26',
    title: 'Всероссийский молодёжный экологический форум «Экосистема. Заповедный край» – 2026',
    location: 'Россия, Камчатский край',
    dates: '22.06.2026 – 28.06.2026',
    logo: 'https://ext.same-assets.com/252857205/1091441774.png'
  },
  {
    id: 'sheregesh-2026',
    title: 'Молодёжный форум «Шерегеш» – 2026',
    location: 'Россия, Кемеровская область',
    dates: '22.06.2026 – 25.06.2026',
    logo: 'https://ext.same-assets.com/252857205/70379289.svg'
  },
  {
    id: 'eurasia-2026',
    title: 'Международный молодёжный форум «Евразия Global»',
    location: 'Россия, Оренбургская область',
    dates: '23.06.2026 – 28.06.2026',
    logo: 'https://ext.same-assets.com/252857205/70379289.svg'
  }
];

export default function ChildPeaceEventPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div
          className="relative bg-cover bg-center py-16"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://ext.same-assets.com/252857205/1663841482.webp)',
          }}
        >
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-gray-800/80 text-white border-none font-medium px-4 py-2 rounded-lg">
                Партнерское мероприятие
              </Badge>
              <Badge className="bg-[#00A86B] text-white border-none font-medium px-4 py-2 rounded-lg">
                Регистрация открыта
              </Badge>
            </div>

            <div className="grid lg:grid-cols-[1fr,400px] gap-12 items-start">
              <div className="text-white">
                <div className="flex items-center gap-2 text-sm mb-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span>21.06.2026 – 12.07.2026</span>
                </div>
                <div className="flex items-center gap-2 text-sm mb-8">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Россия, Республика Крым</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                  Всемирная детская конференция «Дети – за мир»
                </h1>
                <Button className="bg-[#E55C94] hover:bg-[#D04A82] text-white rounded-full px-10 py-6 text-base font-semibold shadow-lg">
                  Подать заявку
                </Button>
                <p className="text-sm mt-4 opacity-90">
                  Регистрация доступна только для участников с датой рождения с 13.07.2008 по 21.05.2012.
                </p>
              </div>

              {/* Event logo card */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://ext.same-assets.com/252857205/1194794149.png"
                  alt="Дети за мир 2026"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-[1400px] mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-[1fr,380px] gap-12">
            {/* Main content */}
            <div>
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6">О мероприятии</h2>
                <div className="prose prose-lg max-w-none space-y-4 text-gray-700">
                  <p>
                    Всемирная детская конференция «Дети – за мир» объединит детей со всего мира для обсуждения важных вопросов мира и взаимопонимания.
                  </p>
                </div>
              </section>

              {/* Other events section */}
              <section>
                <h2 className="text-3xl font-bold mb-8">Другие мероприятия</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {otherEvents.map((event) => (
                    <Link key={event.id} href={`/events/${event.id}`}>
                      <div className="bg-[#F5EDE7] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group">
                        <div className="aspect-[4/3] bg-white flex items-center justify-center p-8">
                          <img
                            src={event.logo}
                            alt={event.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span>{event.dates}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span>{event.location}</span>
                          </div>
                          <h3 className="font-semibold text-gray-900 leading-tight mb-4 group-hover:text-[#E55C94] transition-colors">
                            {event.title}
                          </h3>
                          <Button className="w-full bg-[#E55C94] hover:bg-[#D04A82] text-white rounded-full font-medium">
                            Подробнее
                          </Button>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-[#F5EDE7] rounded-2xl p-6 sticky top-6">
                <h3 className="font-bold text-base mb-3">Даты проведения</h3>
                <p className="text-sm mb-6">21.06.2026 – 12.07.2026</p>

                <h3 className="font-bold text-base mb-3">Даты регистрации</h3>
                <p className="text-sm mb-6">13.03.2026 – 21.05.2026</p>

                <h3 className="font-bold text-base mb-3">Регион</h3>
                <p className="text-sm mb-6">Россия, Республика Крым</p>

                <h3 className="font-bold text-base mb-3">Возраст участников</h3>
                <p className="text-sm mb-6">14–17</p>

                <h3 className="font-bold text-base mb-3">Категории участия</h3>
                <div className="space-y-2 mb-6">
                  <div className="bg-white border border-gray-200 text-gray-700 text-xs px-4 py-2.5 rounded-full text-center font-medium">
                    Иностранные участники
                  </div>
                </div>

                {/* Social share */}
                <div className="flex gap-3 justify-center pt-4 border-t border-gray-200">
                  <a href="https://vk.com/wyf" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#0077FF] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.15 14.39h-1.6c-.68 0-.89-.54-2.11-1.76-1.06-1.02-1.53-1.16-1.8-1.16-.37 0-.48.11-.48.63v1.61c0 .43-.14.69-1.26.69-1.87 0-3.94-1.13-5.4-3.24-2.19-3.07-2.79-5.39-2.79-5.86 0-.27.11-.52.63-.52h1.6c.47 0 .65.21.83.71.88 2.54 2.36 4.77 2.97 4.77.23 0 .33-.11.33-.68v-2.64c-.07-1.14-.67-1.24-.67-1.65 0-.22.18-.43.47-.43h2.52c.39 0 .54.21.54.67v3.58c0 .39.18.54.29.54.23 0 .42-.15.85-.58 1.31-1.48 2.25-3.77 2.25-3.77.12-.27.33-.52.81-.52h1.6c.48 0 .58.24.48.67-.17.99-2.23 4.27-2.23 4.27-.19.31-.26.45 0 .81.19.27.82.8 1.24 1.29.77.88 1.37 1.62 1.53 2.13.16.51-.09.77-.58.77z"/>
                    </svg>
                  </a>
                  <a href="https://t.me/wyffest" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#0088CC] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                    </svg>
                  </a>
                  <button className="w-10 h-10 rounded-full bg-[#0077CC] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
