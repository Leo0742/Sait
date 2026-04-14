export default function PhotoPage() {
  const albums = [
    {
      id: 1,
      title: "Международный фестиваль молодёжи – 2026",
      count: 245,
      cover: "https://ext.same-assets.com/252857205/841344995.jpeg"
    },
    {
      id: 2,
      title: "Территория инициативной молодёжи «Бирюса»",
      count: 186,
      cover: "https://ext.same-assets.com/252857205/3372641695.jpeg"
    },
    {
      id: 3,
      title: "Всемирная детская конференция",
      count: 152,
      cover: "https://ext.same-assets.com/252857205/3348201702.jpeg"
    },
    {
      id: 4,
      title: "Волонтёрский корпус",
      count: 98,
      cover: "https://ext.same-assets.com/252857205/3723770319.jpeg"
    },
    {
      id: 5,
      title: "Международные клубы дружбы",
      cover: "https://ext.same-assets.com/252857205/3570047452.webp",
      count: 127
    },
    {
      id: 6,
      title: "Церемония открытия ВФМ",
      count: 312,
      cover: "https://ext.same-assets.com/252857205/3743851005.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f2f0]">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-12 text-[#1a1a1a]">Фотобанк</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map(album => (
            <div
              key={album.id}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-[300px]">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{album.title}</h3>
                  <p className="text-sm opacity-90">{album.count} фото</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
