'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function IFCPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "Кто может стать участником событий МКД?",
      answer: "Участником событий МКД может стать любой желающий в возрасте от 14 до 35 лет."
    },
    {
      id: 2,
      question: "Какие направления деятельности у МКД?",
      answer: "МКД работает по различным направлениям: медиа, креативные индустрии, государственное управление, образование и наука, предпринимательство, спорт, IT."
    },
    {
      id: 3,
      question: "Какие возможности открываются участникам событий МКД?",
      answer: "Участники получают возможности для международных контактов, сотрудничества, языковой практики и создания собственных проектов."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F7] py-8">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm mb-6 text-gray-600">
          <Link href="/" className="hover:text-[#E55C94]">Главная</Link>
          <span>›</span>
          <span className="text-gray-900">МКД</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-8 text-[#1a1a1a]">Международные клубы дружбы</h1>

        {/* Hero Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                В 2024 году Всемирный фестиваль молодёжи стал значимым событием, которое вдохновило молодёжь по всему миру на укрепление международных связей и создание глобального сообщества.
              </p>
              <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                Благодаря усилиям региональных представителей и волонтёров, молодые люди смогли наладить контакты и обменяться опытом.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <img
                src="https://ext.same-assets.com/252857205/4197862709.webp"
                alt="МКД"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-[#1a9455] to-[#44cc7d] text-white rounded-3xl p-8 md:p-12 mb-8">
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl">
            Международные клубы дружбы — это уникальные объединения молодых и активных людей со всего мира, которые реализуют совместные инициативы. Участники событий МКД обмениваются опытом, реализуют проекты и мероприятия.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-[#F5EDE7] rounded-2xl p-6 text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#E55C94] mb-2">90</div>
            <div className="text-sm md:text-base text-gray-700">международных клубов дружбы</div>
          </div>
          <div className="bg-[#F5EDE7] rounded-2xl p-6 text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#E55C94] mb-2">140</div>
            <div className="text-sm md:text-base text-gray-700">стран-партнёров</div>
          </div>
          <div className="bg-[#F5EDE7] rounded-2xl p-6 text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#E55C94] mb-2">1150+</div>
            <div className="text-sm md:text-base text-gray-700">событий</div>
          </div>
          <div className="bg-[#F5EDE7] rounded-2xl p-6 text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#E55C94] mb-2">32 000+</div>
            <div className="text-sm md:text-base text-gray-700">участников</div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">География Международных клубов дружбы</h2>
          <div className="bg-white rounded-3xl p-8">
            <p className="text-gray-700 mb-6">
              Введите в поиск название региона или страны и найдите свой Международный клуб дружбы
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                placeholder="Регион"
                className="px-4 py-3 rounded-lg border border-gray-200 bg-white"
              />
              <input
                type="text"
                placeholder="Страна"
                className="px-4 py-3 rounded-lg border border-gray-200 bg-white"
              />
            </div>
            <div className="aspect-video bg-[#F5EDE7] rounded-2xl flex items-center justify-center">
              <p className="text-gray-500">Карта клубов</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Часто задаваемые вопросы</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-[#E55C94] flex-shrink-0 transition-transform ${
                      openFaq === faq.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === faq.id && (
                  <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
