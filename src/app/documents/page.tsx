'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function DocumentsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { id: 'normative', name: 'Нормативные документы', count: 4 },
    { id: 'info', name: 'Информационно-справочные документы', count: 1 },
    { id: 'regulations', name: 'Положения о мероприятиях и регламенты конкурсного отбора', count: 2 }
  ];

  const documents = [
    {
      id: 1,
      title: 'Регламент конкурсного отбора участников Международного фестиваля молодёжи – 2026',
      date: '06.02.2026',
      category: 'regulations'
    },
    {
      id: 2,
      title: 'Политика конфиденциальности Международной платформы возможностей',
      date: '05.02.2026',
      category: 'normative'
    },
    {
      id: 3,
      title: 'Кодекс клиентских групп',
      date: '05.02.2026',
      category: 'info'
    },
    {
      id: 4,
      title: 'Устав организации',
      date: '24.09.2025',
      category: 'normative'
    }
  ];

  const filteredDocs = selectedCategory
    ? documents.filter(doc => doc.category === selectedCategory)
    : documents;

  return (
    <div className="min-h-screen bg-[#FAF8F7] py-8">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm mb-6 text-gray-600">
          <Link href="/" className="hover:text-[#E55C94]">Главная</Link>
          <span>›</span>
          <span className="text-gray-900">Документы</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-8 text-[#1a1a1a]">Документы</h1>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-4 sticky top-8">
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center justify-between ${
                      selectedCategory === category.id
                        ? 'bg-[#E55C94] text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <span className="text-sm font-medium">{category.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      selectedCategory === category.id
                        ? 'bg-white/20'
                        : 'bg-gray-200'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="bg-white rounded-2xl p-6 mb-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <input
                    type="text"
                    placeholder="Найти документ"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="ДД.ММ.ГГГГ"
                    className="px-4 py-3 rounded-lg border border-gray-200 bg-white"
                  />
                  <input
                    type="text"
                    placeholder="ДД.ММ.ГГГГ"
                    className="px-4 py-3 rounded-lg border border-gray-200 bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Documents List */}
            <div className="space-y-4">
              {filteredDocs.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white rounded-2xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 bg-[#F5EDE7] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-[#E55C94]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{doc.title}</h3>
                        <p className="text-sm text-gray-600">{doc.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 border-2 border-[#E55C94] text-[#E55C94] rounded-full text-sm font-medium hover:bg-[#E55C94] hover:text-white transition-colors">
                        Просмотреть
                      </button>
                      <button className="px-4 py-2 bg-[#1a9455] text-white rounded-full text-sm font-medium hover:bg-[#157a44] transition-colors">
                        Скачать
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredDocs.length === 0 && (
              <div className="text-center py-20">
                <div className="w-24 h-24 mx-auto mb-6 text-gray-300">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-xl text-gray-600">Документы не найдены</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
