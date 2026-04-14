'use client';

import Link from 'next/link';

export default function WYF2024Page() {
  return (
    <div className="min-h-screen bg-[#FAF8F7] py-8">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm mb-6 text-gray-600">
          <Link href="/" className="hover:text-[#E55C94]">Главная</Link>
          <span>›</span>
          <span className="text-gray-900">ВФМ</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-8 text-[#1a1a1a]">Всемирный фестиваль молодёжи сегодня</h1>

        {/* Hero Section with Image */}
        <div className="bg-white rounded-3xl overflow-hidden mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                По указу Президента Российской Федерации с 1 по 7 марта 2024 года на федеральной территории «Сириус» состоялось крупнейшее международное событие — Всемирный фестиваль молодёжи.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Фестиваль прошел под девизом «Начнём будущее вместе!».</strong> Основная идея заключалась в объединении стран для создания многополярного мира, основанного на принципах справедливости и равенства.
              </p>
            </div>
            <div className="aspect-video md:aspect-auto">
              <img
                src="https://ext.same-assets.com/252857205/3336016423.webp"
                alt="Президент РФ"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Three Column Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* City of Youth */}
          <div className="bg-[#F5EDE7] rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#1a1a1a]">Город молодёжи мира</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              В дни фестиваля Олимпийский парк превратился в настоящий Город молодёжи мира. Программа фестиваля формировалась на основе 8 ценностей: ответственность за судьбы мира, многонациональное единство, мир без терроризма.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Участников фестиваля ждали дискуссии и лекции известных экспертов, выставочная программа, культурный обмен, спортивные соревнования и тренировки, добровольческие акции и другие интерактивные форматы.
            </p>
          </div>

          {/* Regional Program */}
          <div className="bg-[#F5EDE7] rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#1a1a1a]">Региональная программа</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              География фестиваля не ограничивалась только федеральной территорией «Сириус». С 10 по 17 марта состоялась региональная программа, во время которой 2 тысячи иностранных участников познакомились с Россией.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Гости в составе делегаций от 14 до 100 человек, из России и 500 из-за рубежа смогли присоединиться к обсуждению важнейших вопросов современности и прикоснуться к формированию будущего.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="https://ext.same-assets.com/252857205/1382047194.webp"
              alt="Программа для детей"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-[#1a9455] to-[#44cc7d] text-white rounded-3xl p-8 md:p-12 mb-12">
          <div className="max-w-4xl">
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              Сегодня <strong>Всемирный фестиваль молодёжи</strong> — это постоянно действующая платформа для международного сотрудничества среди молодых лидеров.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              По поручению <strong>Президента России</strong>, фестиваль будет проводиться в нашей стране каждые шесть лет. Дирекция продолжит укреплять связи между молодыми людьми со всего мира, проводить тематические слёты, мероприятия и сохранять наследие фестиваля.
            </p>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {[
            { number: '336 000', label: 'Заявок' },
            { number: '20 000', label: 'Участников' },
            { number: '5 000', label: 'Волонтёров' },
            { number: '122 896', label: 'Волонтёрских часов' },
            { number: '190', label: 'Стран мира' },
            { number: '1 200', label: 'Мероприятий' },
          ].map((stat, index) => (
            <div key={index} className="bg-[#F5EDE7] rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-[#E55C94] mb-2">{stat.number}</div>
              <div className="text-sm text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Symbols Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Символика ВФМ-2024</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Logo */}
            <div className="bg-[#F5EDE7] rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Логотип ВФМ-2024</h3>
              <div className="aspect-square bg-white rounded-2xl flex items-center justify-center mb-6">
                <img
                  src="https://ext.same-assets.com/252857205/2071610930.png"
                  alt="Логотип"
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
              <p className="text-gray-700 leading-relaxed">
                Логотип ВФМ-2024 изображает человеческие фигуры, держащиеся за руки. Он символизирует единство среди людей разных культур, вероисповеданий и убеждений, объединённых мечтой о мире, где каждый может оставаться собой.
              </p>
            </div>

            {/* Mascot */}
            <div className="bg-[#F5EDE7] rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Талисман ВФМ-2024</h3>
              <div className="aspect-square bg-white rounded-2xl flex items-center justify-center mb-6">
                <img
                  src="https://ext.same-assets.com/252857205/2706063805.webp"
                  alt="Чебурашка"
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
              <p className="text-gray-700 leading-relaxed">
                Чебурашка — важный элемент культурного кода России, широко известный за рубежом. Это символ, олицетворяющий доброту и взаимное уважение.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
