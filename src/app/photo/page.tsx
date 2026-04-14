'use client';

import Link from 'next/link';

export default function PhotoPage() {
  const albums = [
    {
      id: 'wyffest25',
      title: 'Слёт Всемирного фестиваля молодёжи - 2025',
      date: '24.09.2025',
      albumCount: 14,
      photoCount: 8988,
      coverImage: 'https://ext.same-assets.com/252857205/3237024123.jpeg'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F7] py-8">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm mb-6 text-gray-600">
          <Link href="/" className="hover:text-[#E55C94]">Главная</Link>
          <span>›</span>
          <span className="text-gray-900">Фотобанк</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-8 text-[#1a1a1a]">Фотобанк</h1>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album) => (
            <Link
              key={album.id}
              href={`/photo/${album.id}`}
              className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              <div className="aspect-video relative">
                <img
                  src={album.coverImage}
                  alt={album.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Album Stats */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-gray-900 flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    {album.albumCount}
                  </span>
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-gray-900 flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {album.photoCount.toLocaleString()}
                  </span>
                </div>

                {/* Album Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-lg font-semibold mb-1">{album.title}</p>
                  <p className="text-sm text-white/90">{album.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State if no albums */}
        {albums.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 text-gray-300">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-xl text-gray-600">Фотографии скоро появятся</p>
          </div>
        )}
      </div>
    </div>
  );
}
