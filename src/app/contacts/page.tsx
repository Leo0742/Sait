export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-[#f8f2f0]">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-12 text-[#1a1a1a]">Контакты</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-[#1a1a1a]">Свяжитесь с нами</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#e84393] rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold mb-1">Email</div>
                  <a href="mailto:info@wyffest.com" className="text-[#e84393] hover:underline">
                    info@wyffest.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#44cc7d] rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold mb-1">Телефон</div>
                  <a href="tel:+74951234567" className="text-[#44cc7d] hover:underline">
                    +7 (495) 123-45-67
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#dfb329] rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold mb-1">Адрес</div>
                  <p className="text-gray-700">
                    Москва, ул. Примерная, д. 1, стр. 1
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t">
              <div className="font-bold mb-4">Социальные сети</div>
              <div className="flex gap-3">
                <a
                  href="https://vk.com/wyf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <img src="https://ext.same-assets.com/252857205/3890491112.svg" alt="VK" className="w-6 h-6" />
                </a>
                <a
                  href="https://t.me/wyffest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <img src="https://ext.same-assets.com/252857205/3329913190.svg" alt="Telegram" className="w-6 h-6" />
                </a>
                <a
                  href="https://max.ru/wyffest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <img src="https://ext.same-assets.com/252857205/3242978114.svg" alt="MAX" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-[#1a1a1a]">Обратная связь</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#e84393] focus:outline-none transition-colors"
                  placeholder="Введите ваше имя"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#e84393] focus:outline-none transition-colors"
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Тема обращения</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#e84393] focus:outline-none transition-colors"
                  placeholder="Краткое описание темы"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Сообщение</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#e84393] focus:outline-none transition-colors resize-none"
                  placeholder="Введите ваше сообщение"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#e84393] text-white rounded-full font-semibold hover:bg-[#d73882] transition-colors shadow-lg"
              >
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
