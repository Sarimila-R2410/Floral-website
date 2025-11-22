"use client"

export default function PlantCollections() {
  const collections = [
    {
      id: 1,
      name: "Premium Collection",
      count: "12 Plants",
      image: "/images/51khtfXGjLL._AC_UF894_1000_QL80_-removebg-preview.png",
      gradient: "from-amber-400 to-orange-600",
      description: "Exotic and vibrant plants for sophisticated spaces",
    },
    {
      id: 2,
      name: "Indoor Essentials",
      count: "8 Plants",
      image: "/images/images__2_-removebg-preview.png",
      gradient: "from-emerald-400 to-teal-600",
      description: "Low-maintenance plants perfect for any room",
    },
    {
      id: 3,
      name: "Rare Finds",
      count: "15 Plants",
      image: "/images/images__1_-removebg-preview.png",
      gradient: "from-rose-400 to-pink-600",
      description: "Unique and hard-to-find plant species",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Plant Collections</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our curated collections designed for every style and preference
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group relative overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer"
            >
              {/* Background Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${collection.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              {/* Content */}
              <div className="relative p-6 flex flex-col items-center justify-center min-h-80">
                <div className="mb-6 overflow-hidden">
                  <img
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    className="w-40 h-40 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-xl font-bold text-center mb-1">{collection.name}</h3>
                <p
                  className={`text-sm font-semibold bg-gradient-to-r ${collection.gradient} bg-clip-text text-transparent mb-3`}
                >
                  {collection.count}
                </p>
                <p className="text-gray-400 text-sm text-center mb-6">{collection.description}</p>

                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition-colors text-sm font-medium">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
