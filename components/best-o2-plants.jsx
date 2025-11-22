"use client"

export default function BestO2Plants() {
  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Our Best o2</h2>

        <div className="card-border bg-gradient-to-r from-slate-800 to-slate-700 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center p-8">
            {/* Left - Plant Image */}
            <div className="flex justify-center">
              <img src="/images/images__2_-removebg-preview.png" alt="O2 Plant" className="max-w-sm w-full" />
            </div>

            {/* Right - Content */}
            <div>
              <h3 className="text-3xl font-bold mb-4">We Have Small And Best O2 Plants Collection&apos;s</h3>
              <p className="text-gray-300 mb-4">
                Oxygen-producing plants, often referred to as &quot;O2 plants&quot; are those that release oxygen into
                the atmosphere through the process of photosynthesis.
              </p>
              <p className="text-gray-400 text-sm mb-6">
                Most plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and
                trichloroethylene. This makes the air cleaner and healthier to breathe.
              </p>

              <button className="btn-secondary">Explore</button>

              {/* Pagination dots */}
              <div className="flex gap-2 mt-6">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                <div className="w-2 h-2 rounded-full bg-slate-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
