export default function WYF2024Page() {
  const stats = [
    { value: "20 000", label: "Участников", color: "bg-[#e84393]" },
    { value: "180+", label: "Стран", color: "bg-[#44cc7d]" },
    { value: "300+", label: "Мероприятий", color: "bg-[#dfb329]" },
    { value: "7", label: "Дней фестиваля", color: "bg-[#ba565f]" }
  ];

  const highlights = [
    {
      id: 1,
      title: "Церемония открытия",
      description: "Грандиозное шоу с участием звезд мировой величины",
      image: "https://ext.same-assets.com/252857205/841344995.jpeg"
    },
    {
      id: 2,
      title: "Международные дискуссии",
      description: "Обсуждение актуальных вопросов развития молодежи",
      image: "https://ext.same-assets.com/252857205/3372641695.jpeg"
    },
    {
      id: 3,
      title: "Культурная программа",
      description: "Знакомство с культурами разных стран мира",
      image: "https://ext.same-assets.com/252857205/3348201702.jpeg"
    },
    {
      id: 4,
      title: "Спортивные соревнования",
      description: "Турниры и состязания в различных дисциплинах",
      image: "https://ext.same-assets.com/252857205/3723770319.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f2f0]">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-6 text-[#1a1a1a]">
            Всемирный фестиваль молодёжи – 2024
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            Крупнейшее международное молодёжное событие года, объединившее тысячи участников из разных стран мира для обмена опытом, знаниями и культурой.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color.replace('bg-', 'text-')}`}>
                {stat.value}
              </div>
              <div className="text-lg text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold mb-8 text-[#1a1a1a]">О фестивале</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Всемирный фестиваль молодёжи 2024 года стал знаковым событием, которое объединило более 20 000 молодых лидеров, активистов и талантливых людей из 180 стран мира. Фестиваль прошел с огромным успехом и оставил яркий след в истории международного молодёжного движения.
            </p>
            <p>
              В течение семи дней участники принимали участие в образовательных сессиях, культурных мероприятиях, спортивных соревнованиях и творческих конкурсах. Фестиваль стал платформой для обмена опытом, установления новых контактов и реализации совместных проектов.
            </p>
            <p>
              Основными темами фестиваля стали устойчивое развитие, международное сотрудничество, инновации в образовании и науке, культурное разнообразие и молодёжное предпринимательство.
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-[#1a1a1a]">Ключевые моменты</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map(highlight => (
              <div key={highlight.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-[250px]">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-[#1a1a1a]">{highlight.title}</h3>
                  <p className="text-gray-700">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div className="mt-16 bg-gradient-to-r from-[#e84393] to-[#ba565f] rounded-3xl p-12 text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-8">Результаты фестиваля</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Подписанных соглашений о сотрудничестве</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg opacity-90">Запущенных совместных проектов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Участников рекомендуют фестиваль</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
