export default function IFCPage() {
  return (
    <div className="min-h-screen bg-[#f8f2f0]">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-8 text-[#1a1a1a]">
            Международные клубы дружбы
          </h1>
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                  Международные клубы дружбы – это объединения для молодых и активных людей со всего мира, созданные на базе программы «Культурное шефство» Всемирного фестиваля молодёжи в 2024 году.
                </p>
                <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                  МКД предоставляют платформу для реализации международных молодёжных инициатив, способствуют развитию сотрудничества и укреплению дружеских связей между регионами России и иностранными государствами.
                </p>
                <button className="px-8 py-4 bg-[#e84393] text-white rounded-full font-semibold hover:bg-[#d73882] transition-colors shadow-lg">
                  Присоединиться к МКД
                </button>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <img
                  src="https://ext.same-assets.com/252857205/3570047452.webp"
                  alt="Международные клубы дружбы"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <div className="text-5xl font-bold text-[#e84393] mb-2">150+</div>
            <div className="text-lg text-gray-700">Активных клубов</div>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <div className="text-5xl font-bold text-[#44cc7d] mb-2">80+</div>
            <div className="text-lg text-gray-700">Стран-участниц</div>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <div className="text-5xl font-bold text-[#dfb329] mb-2">5000+</div>
            <div className="text-lg text-gray-700">Участников</div>
          </div>
        </div>

        {/* Activities Section */}
        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-[#1a1a1a]">Направления деятельности</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#e84393] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Культурный обмен</h3>
                <p className="text-gray-700">
                  Организация и проведение культурных мероприятий, фестивалей и выставок
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#44cc7d] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Образовательные программы</h3>
                <p className="text-gray-700">
                  Проведение семинаров, тренингов и образовательных инициатив
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#dfb329] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Волонтёрство</h3>
                <p className="text-gray-700">
                  Реализация социальных и благотворительных проектов
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#ba565f] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Международное сотрудничество</h3>
                <p className="text-gray-700">
                  Укрепление дружеских связей между странами и регионами
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
