import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function EcosystemEventPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
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
              <Badge className="bg-gray-400 text-white border-none font-medium px-4 py-2 rounded-lg">
                Регистрация недоступна
              </Badge>
            </div>

            <div className="grid lg:grid-cols-[1fr,400px] gap-12 items-start">
              <div className="text-white">
                <div className="flex items-center gap-2 text-sm mb-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span>22.06.2026 – 28.06.2026</span>
                </div>
                <div className="flex items-center gap-2 text-sm mb-8">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Россия, Камчатский край</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                  Всероссийский молодёжный экологический форум «Экосистема. Заповедный край» – 2026
                </h1>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <img 
                  src="https://ext.same-assets.com/252857205/1091441774.png" 
                  alt="Экосистема 2026"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-[1fr,380px] gap-12">
            <div>
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6">О мероприятии</h2>
                <div className="prose prose-lg max-w-none space-y-4 text-gray-700">
                  <p>
                    Всероссийский молодёжный экологический форум «Экосистема. Заповедный край» объединяет молодых экологов и активистов.
                  </p>
                </div>
              </section>
            </div>

            <div>
              <div className="bg-[#F5EDE7] rounded-2xl p-6 sticky top-6">
                <h3 className="font-bold text-base mb-3">Даты проведения</h3>
                <p className="text-sm mb-6">22.06.2026 – 28.06.2026</p>

                <h3 className="font-bold text-base mb-3">Регион</h3>
                <p className="text-sm mb-6">Россия, Камчатский край</p>

                <h3 className="font-bold text-base mb-3">Возраст участников</h3>
                <p className="text-sm mb-6">18–35</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
