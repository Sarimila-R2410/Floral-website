"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronRight, Leaf } from "lucide-react"

export default function InteractivePlantShowcase() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeCard, setActiveCard] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 2)
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlay])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    })
  }

  const plants = [
    {
      id: 0,
      name: "Calathea Orbifolia",
      image: "/images/images-3-removebg-preview.png",
      price: "Rs. 599/-",
      description: "Premium indoor plant with striking dark foliage and vibrant yellow patterns",
      features: ["Low Maintenance", "Air Purifying", "Pet Friendly"],
    },
    {
      id: 1,
      name: "Bonsai Tree",
      image: "/images/61oaz-yzf3l.png",
      price: "Rs. 1,299/-",
      description: "Elegant miniature tree perfect for meditation spaces and living rooms",
      features: ["Bonsai Art", "Stress Relief", "Long Living"],
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/50 rounded-full mb-4">
            <Leaf className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold">Exclusive Collection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover Our <span className="text-emerald-400">Premium Plants</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Experience the beauty and elegance of our handpicked collection with stunning 3D interactive views
          </p>
        </div>

        {/* Interactive 3D Showcase */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          {/* 3D Card Container */}
          <div
            className="relative h-[500px] perspective"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => {
              setIsAutoPlay(true)
              setMousePosition({ x: 0, y: 0 })
            }}
          >
            {plants.map((plant, idx) => (
              <div
                key={plant.id}
                className={`absolute inset-0 transition-all duration-1000 ${
                  activeCard === idx ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                {/* 3D Effect Container */}
                <div
                  className="w-full h-full relative"
                  style={{
                    transform: `
                      perspective(1000px)
                      rotateX(${activeCard === idx ? mousePosition.y * 8 : 0}deg)
                      rotateY(${activeCard === idx ? mousePosition.x * 8 : 0}deg)
                      translateZ(0)
                    `,
                    transition: "transform 0.1s ease-out",
                  }}
                >
                  {/* Glowing Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-slate-700 to-cyan-600/20 rounded-3xl blur-xl opacity-75"></div>

                  {/* Card */}
                  <div className="relative w-full h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl overflow-hidden shadow-2xl">
                    {/* Animated Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 animate-pulse"></div>

                    {/* Plant Image - Floating Animation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="relative w-72 h-72 animate-float"
                        style={{
                          animation: `float ${3 + idx}s ease-in-out infinite`,
                        }}
                      >
                        <Image
                          src={plant.image || "/placeholder.svg"}
                          alt={plant.name}
                          width={300}
                          height={300}
                          className="w-full h-full object-contain drop-shadow-2xl"
                        />
                      </div>
                    </div>

                    {/* Info Section */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent p-8 space-y-4">
                      <h3 className="text-2xl font-bold text-white">{plant.name}</h3>
                      <p className="text-gray-300 text-sm">{plant.description}</p>
                      <div className="flex gap-2 flex-wrap">
                        {plant.features.map((feature, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/50 rounded-full text-emerald-300 text-xs font-semibold"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-4">
                        <span className="text-2xl font-bold text-emerald-400">{plant.price}</span>
                        <button className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors font-semibold">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info & Controls */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white">{plants[activeCard].name}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{plants[activeCard].description}</p>
            </div>

            {/* Carousel Dots */}
            <div className="flex gap-3">
              {plants.map((plant, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveCard(idx)
                    setIsAutoPlay(false)
                  }}
                  className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                    activeCard === idx ? "w-20 h-20" : "w-16 h-16"
                  }`}
                >
                  <Image
                    src={plant.image || "/placeholder.svg"}
                    alt={plant.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                  {activeCard === idx && (
                    <div className="absolute inset-0 border-2 border-emerald-400 rounded-lg"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Benefits List */}
            <div className="space-y-3 pt-4">
              {["🌿 100% Healthy & Thriving", "🚚 Free Shipping on All Orders", "💚 Lifetime Plant Care Support"].map(
                (benefit, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <ChevronRight className="w-5 h-5 text-emerald-400" />
                    <span>{benefit}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotateZ(-5deg);
          }
          50% {
            transform: translateY(-20px) rotateZ(5deg);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </section>
  )
}
