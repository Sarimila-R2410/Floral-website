"use client"

import { Leaf, Droplets, Sun, Home } from "lucide-react"

const categories = [
  {
    icon: Leaf,
    name: "Indoor Plants",
    description: "Perfect for your home",
    count: "48 items",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Sun,
    name: "Outdoor Plants",
    description: "For gardens & patios",
    count: "32 items",
    color: "from-yellow-500 to-orange-600",
  },
  {
    icon: Droplets,
    name: "Water Plants",
    description: "Low maintenance",
    count: "24 items",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Home,
    name: "Desk Plants",
    description: "Small & decorative",
    count: "56 items",
    color: "from-purple-500 to-pink-600",
  },
]

export default function CategoriesSection() {
  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Explore Categories</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {categories.map((category, idx) => {
            const Icon = category.icon
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 p-8 cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">{category.description}</p>
                  <p className="text-xs text-green-400 font-semibold">{category.count}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
