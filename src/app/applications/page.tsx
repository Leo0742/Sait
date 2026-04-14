'use client';

export default function ApplicationsPage() {
  const applications: any[] = [];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-[#1a1a1a]">Мои заявки</h1>

      {/* Tabs */}
      <div className="flex gap-8 mb-8 border-b border-gray-200">
        <button className="pb-3 text-base font-medium text-[#E55C94] border-b-2 border-[#E55C94]">
          Все
        </button>
      </div>

      {/* Empty state */}
      {applications.length === 0 && (
        <div className="bg-white rounded-2xl p-24 text-center">
          <p className="text-gray-500 text-lg">Тут пока ничего нет</p>
        </div>
      )}

      {/* Applications list (when there are applications) */}
      {applications.length > 0 && (
        <div className="space-y-6">
          {applications.map((app: any) => (
            <div
              key={app.id}
              className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-3 leading-tight">
                    {app.name}
                  </h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span>📅</span>
                      <span>{app.dates}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📍</span>
                      <span>{app.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
