export default function NewsPage() {
  const news = [
    {
      id: 1,
      category: "Новости ДВФМ",
      date: "10 апр. 2026 г., 15:30",
      title: "Свердловская область вошла в тройку лидеров среди регионов России по числу заявок на Международный фестиваль молодёжи – 2026",
      image: "https://ext.same-assets.com/252857205/841344995.jpeg",
      featured: true
    },
    {
      id: 2,
      date: "9 апр. 2026 г., 12:54",
      title: "Дмитрий Чернышенко: На Международный фестиваль молодёжи подано более 60 тысяч заявок из 175 стран и 89 регионов России",
      image: "https://ext.same-assets.com/252857205/3348201702.jpeg"
    },
    {
      id: 3,
      date: "3 апр. 2026 г., 07:50",
      title: "Дирекция Всемирного фестиваля молодёжи и госструктуры Индонезии обсудили развитие молодёжного сотрудничества",
      image: "https://ext.same-assets.com/252857205/3372641695.jpeg"
    },
    {
      id: 4,
      date: "2 апр. 2026 г., 13:00",
      title: "На Международном фестивале молодёжи будет создана команда из молодых медиаспецилистов",
      image: "https://ext.same-assets.com/252857205/3723770319.jpeg"
    },
    {
      id: 5,
      date: "31 мар. 2026 г., 09:27",
      title: "Объявлен набор в резерв волонтёрского корпуса Международного фестиваля молодёжи – 2026",
      image: "https://ext.same-assets.com/252857205/3743851005.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f2f0]">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-12 text-[#1a1a1a]">Новости</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured news */}
          {news.filter(item => item.featured).map(item => (
            <div key={item.id} className="lg:col-span-2">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-[400px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex gap-4 mb-4 text-sm text-gray-600">
                      <span className="bg-[#44cc7d] text-white px-4 py-1 rounded-full font-medium">
                        {item.category}
                      </span>
                      <span>{item.date}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#1a1a1a] leading-tight">
                      {item.title}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Regular news */}
          {news.filter(item => !item.featured).map(item => (
            <div key={item.id}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full">
                <div className="relative h-[250px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-600 mb-3">
                    {item.date}
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1a1a] leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-4 border-2 border-[#e84393] text-[#e84393] rounded-full font-semibold hover:bg-[#e84393] hover:text-white transition-colors">
            Показать еще
          </button>
        </div>
      </div>
    </div>
  );
}
