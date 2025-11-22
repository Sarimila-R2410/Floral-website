"use client"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: "🌱",
      title: "Health Benefits",
      description: "Plants improve air quality and boost mental well-being in any space",
    },
    {
      icon: "🏠",
      title: "Easy Maintenance",
      description: "Our curated plants require minimal care and thrive in various conditions",
    },
    {
      icon: "💚",
      title: "Eco-Friendly",
      description: "Sustainably sourced and packaged with care for the environment",
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "Fresh plants delivered to your door within 2-3 business days",
    },
  ]

  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <h2 className="section-title mb-16 text-white">Why Choose FloraVision</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-700 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {benefit.icon}
              </div>

              {/* Title in white */}
              <h3 className="text-lg font-bold mb-2 text-white">{benefit.title}</h3>

              {/* Description in white */}
              <p className="text-sm leading-relaxed text-white">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
