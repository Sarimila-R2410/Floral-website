"use client"

import { ArrowRight } from "lucide-react"

export default function FeatureShowcase() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-sm font-semibold">
              Why Choose Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Premium Quality Plants <span className="text-green-400">Delivered Fresh</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              We handpick every plant in our collection to ensure you receive healthy, vibrant specimens that will
              thrive in your space. Our expert team nurtures each plant with care.
            </p>

            {/* Features List */}
            <div className="space-y-4 py-8">
              {[
                { title: "100% Organic Plants", desc: "No chemicals, naturally grown" },
                { title: "Free Shipping", desc: "On orders over Rs. 999" },
                { title: "Expert Support", desc: "Care guides & lifetime assistance" },
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/40 transition-colors flex-shrink-0">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-400">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-lg font-semibold group">
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 h-48 group cursor-pointer hover:shadow-2xl transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 group-hover:from-green-500/20 group-hover:to-emerald-500/20 transition-all"></div>
                <div className="w-full h-full flex items-center justify-center text-green-400 text-4xl font-bold">
                  🌿
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
