export default function DocumentsPage() {
  const documents = [
    {
      id: 1,
      title: "Положение о Международном фестивале молодёжи – 2026",
      type: "PDF",
      size: "2.4 MB",
      date: "15 марта 2026"
    },
    {
      id: 2,
      title: "Регламент участия в мероприятиях",
      type: "PDF",
      size: "1.8 MB",
      date: "10 марта 2026"
    },
    {
      id: 3,
      title: "Политика конфиденциальности",
      type: "PDF",
      size: "956 KB",
      date: "1 марта 2026"
    },
    {
      id: 4,
      title: "Правила подачи заявки",
      type: "PDF",
      size: "1.2 MB",
      date: "25 февраля 2026"
    },
    {
      id: 5,
      title: "Устав АНО «Дирекция Всемирного фестиваля молодежи»",
      type: "PDF",
      size: "3.1 MB",
      date: "20 февраля 2026"
    },
    {
      id: 6,
      title: "Методические рекомендации для участников",
      type: "PDF",
      size: "2.7 MB",
      date: "15 февраля 2026"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f2f0]">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-12 text-[#1a1a1a]">Документы</h1>

        <div className="grid grid-cols-1 gap-4">
          {documents.map(doc => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6 flex-1">
                  <div className="w-16 h-16 bg-[#e84393] rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1 text-[#1a1a1a] group-hover:text-[#e84393] transition-colors">
                      {doc.title}
                    </h3>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span className="font-medium">{doc.type}</span>
                      <span>•</span>
                      <span>{doc.size}</span>
                      <span>•</span>
                      <span>{doc.date}</span>
                    </div>
                  </div>
                </div>
                <button className="px-6 py-3 bg-[#e84393] text-white rounded-full font-semibold hover:bg-[#d73882] transition-colors flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Скачать
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
