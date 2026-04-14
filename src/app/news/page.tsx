'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const news = [
    {
      id: 1,
      category: "Новости ДВФМ",
      date: "10 апр. 2026 г., 15:30",
      title: "Свердловская область вошла в тройку лидеров среди регионов России по числу заявок на Международный фестиваль молодёжи – 2026",
      image: "https://ext.same-assets.com/252857205/3245376477.jpeg",
      featured: true,
      type: "DVFM"
    },
    {
      id: 2,
      category: "Новости ДВФМ",
      date: "9 апр. 2026 г., 12:54",
      title: "Дмитрий Чернышенко: На Международный фестиваль молодёжи подано более 60 тысяч заявок из 175 стран и 89 регионов России",
      image: "https://ext.same-assets.com/252857205/522232881.jpeg",
      type: "DVFM"
    },
    {
      id: 3,
      category: "Новости ДВФМ",
      date: "3 апр. 2026 г., 07:50",
      title: "Дирекция Всемирного фестиваля молодёжи и госструктуры Индонезии обсудили развитие молодёжного сотрудничества",
      image: "https://ext.same-assets.com/252857205/2480171154.jpeg",
      type: "DVFM"
    },
    {
      id: 4,
      category: "Новости ДВФМ",
      date: "2 апр. 2026 г., 13:00",
      title: "На Международном фестивале молодёжи будет создана команда из молодых медиаспецилистов",
      image: "https://ext.same-assets.com/252857205/530301121.jpeg",
      type: "DVFM"
    },
    {
      id: 5,
      category: "Новости ДВФМ",
      date: "31 мар. 2026 г., 09:27",
      title: "Объявлен набор в резерв волонтёрского корпуса Международного фестиваля молодёжи – 2026",
      image: "https://ext.same-assets.com/252857205/1809586602.jpeg",
      type: "DVFM"
    }
  ];

  const filteredNews = activeFilter === 'all'
    ? news
    : news.filter(item => item.type === activeFilter);

  return (
    <div className="min-h-screen bg-[#FAF8F7] py-8">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm mb-6 text-gray-600">
          <Link href="/" className="hover:text-[#E55C94]">Главная</Link>
          <span>›</span>
          <span className="text-gray-900">Новости</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-8 text-[#1a1a1a]">Новости</h1>

        {/* Filters */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-2.5 rounded-full font-medium whitespace-nowrap transition-colors ${
              activeFilter === 'all'
                ? 'bg-[#E55C94] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Все новости
          </button>
          <button
            onClick={() => setActiveFilter('DVFM')}
            className={`px-6 py-2.5 rounded-full font-medium whitespace-nowrap transition-colors ${
              activeFilter === 'DVFM'
                ? 'bg-[#E55C94] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Новости ДВФМ
          </button>
          <button
            onClick={() => setActiveFilter('MKD')}
            className={`px-6 py-2.5 rounded-full font-medium whitespace-nowrap transition-colors ${
              activeFilter === 'MKD'
                ? 'bg-[#E55C94] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Новости МКД
          </button>
          <button
            onClick={() => setActiveFilter('FESTIVAL')}
            className={`px-6 py-2.5 rounded-full font-medium whitespace-nowrap transition-colors ${
              activeFilter === 'FESTIVAL'
                ? 'bg-[#E55C94] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Новости фестиваля
          </button>
          <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder="Поиск новостей"
              className="w-full px-4 py-2.5 rounded-full border border-gray-200 bg-white text-sm"
            />
          </div>
        </div>

        {/* Featured News */}
        {filteredNews.filter(item => item.featured).map(item => (
          <Link
            key={item.id}
            href={`/news/${item.id}`}
            className="block mb-8 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="grid md:grid-cols-2">
              <div className="aspect-video md:aspect-auto relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#44cc7d] text-white px-4 py-1.5 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-600">{item.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                  {item.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredNews.filter(item => !item.featured).map(item => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {item.category && (
                    <span className="bg-[#44cc7d] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                  )}
                  <span className="text-sm text-gray-600">{item.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <button className="px-8 py-3 border-2 border-[#E55C94] text-[#E55C94] rounded-full font-semibold hover:bg-[#E55C94] hover:text-white transition-colors inline-flex items-center gap-2">
            <span>Смотреть все новости</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
