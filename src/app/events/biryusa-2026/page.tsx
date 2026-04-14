import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BiryusaEventPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div
          className="relative bg-cover bg-center py-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200)',
          }}
        >
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex items-center gap-4 mb-6">
              <Badge className="bg-black/50 text-white border border-white/30 font-medium px-4 py-2">
                Партнерское мероприятие
              </Badge>
              <Badge className="bg-green-600 text-white font-medium px-4 py-2">
                Регистрация открыта
              </Badge>
            </div>

            <div className="flex items-start justify-between gap-8">
              <div className="flex-1 text-white">
                <p className="text-sm mb-2 opacity-90">
                  📅 17.06.2026 - 21.06.2026
                </p>
                <p className="text-sm mb-6 opacity-90">
                  📍 Россия, Красноярский край
                </p>
                <h1 className="text-5xl font-bold mb-6 leading-tight">
                  Всероссийский молодёжный форум «Территория инициативной молодёжи «Бирюса» – 2026
                </h1>
                <Button className="bg-[#E55C94] hover:bg-[#D04A82] text-white rounded-full px-8 py-6 text-lg font-semibold">
                  Подать заявку
                </Button>
                <p className="text-sm mt-4 opacity-90">
                  Регистрация открыта до 17 апреля 2026 г.
                </p>
              </div>

              {/* Event logo card */}
              <div className="bg-white rounded-2xl p-6 w-80 shadow-xl">
                <div className="bg-gradient-to-br from-blue-400 to-cyan-300 rounded-xl p-8 text-center">
                  <h3 className="text-white text-2xl font-bold mb-2">ТЕРРИТОРИЯ</h3>
                  <h3 className="text-white text-2xl font-bold mb-2">ИНИЦИАТИВНОЙ МОЛОДЁЖИ</h3>
                  <h2 className="text-white text-4xl font-black">БИРЮСА</h2>
                  <h3 className="text-white text-3xl font-bold">2026</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-[1400px] mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">О мероприятии</h2>
                <div className="prose max-w-none space-y-4 text-gray-700">
                  <p>
                    С 17 по 21 июня Красноярский край станет точкой сбора тех, для кого спорт – образ жизни.{' '}
                    <strong>Всероссийская смена «Физическая культура и спорт»</strong> объединит{' '}
                    <strong>400 молодых людей</strong> в возрасте от 18 до 35 лет.
                  </p>

                  <h3 className="text-2xl font-bold mt-8 mb-4">Что тебя ждет?</h3>
                  <p>– прокачка связей между спортивными сообществами;</p>
                  <p>– разработка идей и проектов для развития спорта и ЗОЖ;</p>
                  <p>– обмен опытом среди единомышленников.</p>

                  <h3 className="text-2xl font-bold mt-8 mb-4">
                    Интересный факт: добраться до форума можно только на теплоходе. Это не просто логистика – это уже часть приключения.
                  </h3>

                  <h3 className="text-2xl font-bold mt-8 mb-4">Обрати внимание:</h3>
                  <p className="font-medium">
                    форум полностью русскоязычный, начиная от навигации до общения в чатах. Для участия в форуме тебе достаточно владеть
                    русским хотя бы на базовом уровне. Это является одним из критериев отбора при рассмотрении заявок.
                  </p>

                  <h3 className="text-2xl font-bold mt-8 mb-4">Справочно:</h3>
                  <p>
                    Проживание, питание, внутренний трансфер для участников предоставляется за счёт организаторов.
                  </p>
                  <p>
                    Для иностранных участников проезд от места проживания до Красноярска и обратно осуществляется за свой счёт или за счёт направляющей
                    стороны.
                  </p>
                </div>
              </section>

              {/* Other events section */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Другие мероприятия</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {['Дети – за мир', 'Экосистема', 'Шерегеш', 'Евразия Global'].map((title, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="bg-gradient-to-br from-purple-300 to-pink-300 rounded-lg h-32 mb-4 flex items-center justify-center">
                        <span className="text-white text-4xl font-bold">{title.charAt(0)}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">22.06.2026 - 28.06.2026</p>
                      <p className="text-sm text-gray-600 mb-3">Россия, Камчатский край</p>
                      <h3 className="font-semibold mb-4 leading-tight">{title}</h3>
                      <Button
                        variant="outline"
                        className="w-full rounded-full border-2 border-[#E55C94] text-[#E55C94] hover:bg-[#FCF1F5] font-medium"
                      >
                        Подробнее
                      </Button>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-6 sticky top-6">
                <h3 className="font-bold text-lg mb-4">Даты проведения</h3>
                <p className="text-sm mb-1">17.06.2026 – 21.06.2026</p>

                <hr className="my-6 border-gray-200" />

                <h3 className="font-bold text-lg mb-4">Даты регистрации</h3>
                <p className="text-sm mb-1">11.03.2026 – 17.04.2026</p>

                <hr className="my-6 border-gray-200" />

                <h3 className="font-bold text-lg mb-4">Регион</h3>
                <p className="text-sm mb-1">Россия, Красноярский край</p>

                <hr className="my-6 border-gray-200" />

                <h3 className="font-bold text-lg mb-4">Возраст участников</h3>
                <p className="text-sm mb-1">18–35</p>

                <hr className="my-6 border-gray-200" />

                <h3 className="font-bold text-lg mb-4">Категории участия</h3>
                <div className="space-y-2">
                  <Badge variant="outline" className="block text-center py-2 rounded-full border-gray-300">
                    Иностранные участники
                  </Badge>
                  <Badge variant="outline" className="block text-center py-2 rounded-full border-gray-300">
                    Соотечественники (РФ граждане за рубежом)
                  </Badge>
                  <Badge variant="outline" className="block text-center py-2 rounded-full border-gray-300">
                    Иностранные участники, проживающие на территории РФ
                  </Badge>
                </div>

                <hr className="my-6 border-gray-200" />

                {/* Social share */}
                <div className="flex gap-3 justify-center">
                  <button className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                    VK
                  </button>
                  <button className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                    TG
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                    🌐
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
