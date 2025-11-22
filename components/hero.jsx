"use client"

import { Play, Sparkles, Leaf } from "lucide-react"
import { useState, useEffect } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [rotationY, setRotationY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const interval = setInterval(() => {
      setRotationY((prev) => (prev + 1) % 360)
    }, 50)

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
  }, [])

  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden pt-12 pb-20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-600 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-tr from-green-500/20 to-transparent rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start min-h-[600px]">

          {/* Left Section */}
          <div className="md:col-span-1 z-10 flex flex-col justify-start">
            <div className="flex items-center gap-2 mb-3">
              <Leaf className="w-8 h-8 text-emerald-400 animate-bounce" />
              <h1 className="text-white text-5xl md:text-5xl font-bold leading-tight">
                Earth&apos;s Exhale
              </h1>
            </div>

            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Earth Exhale symbolizes the purity and vitality of the Earth&apos;s natural environment and its essential
              role in sustaining life.
            </p>

            <div className="flex gap-3 mb-8">
              <button className="btn-primary text-sm px-6 py-2 hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300">
                Buy Now
              </button>
              <button className="btn-secondary flex items-center gap-2 text-sm px-6 py-2 hover:shadow-lg hover:shadow-slate-500/50 transition-all duration-300">
                <Play className="w-4 h-4" /> See Demo
              </button>
            </div>

            {/* Review Card */}
            <div className="card-border bg-slate-700/40 backdrop-blur p-4 w-fit hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <img src="/images/image.png" alt="Customer" className="w-8 h-8 rounded-full border border-green-400" />
                <div>
                  <p className="font-semibold text-sm text-white">Jimma Hamil</p>
                  <p className="text-xs text-yellow-400">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                I can&apos;t express how thrilled I am with my office plant. It&apos;s been a great addition to my space
                and has already made a huge difference.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-slate-800/40 backdrop-blur p-3 rounded-lg border border-slate-700/50">
                <p className="text-emerald-400 font-bold text-lg">5000+</p>
                <p className="text-gray-400 text-xs">Happy Customers</p>
              </div>
              <div className="bg-slate-800/40 backdrop-blur p-3 rounded-lg border border-slate-700/50">
                <p className="text-emerald-400 font-bold text-lg">100%</p>
                <p className="text-gray-400 text-xs">Organic Plants</p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="md:col-span-1 z-10 relative flex flex-col items-center">
            <div className="relative mb-6 w-full flex justify-center group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-300 animate-pulse"></div>
              <img
                src="/images/73aa329dd21fb3adb64c08f5d85cf384-removebg-preview.png"
                alt="Featured Dieffenbachia plant"
                className="w-64 h-64 object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300 relative z-10"
                style={{
                  transform: `rotateY(${rotationY * 0.5}deg) rotateX(${Math.sin(rotationY * 0.05) * 10}deg) scale(${1 + Math.sin(rotationY * 0.02) * 0.05})`,
                  transformStyle: "preserve-3d",
                }}
              />
            </div>

            <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-4 flex-wrap">
              <div className="bg-slate-800/60 backdrop-blur px-3 py-1 rounded-full border border-emerald-400/30 text-xs text-emerald-300 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Fresh Delivered
              </div>
              <div className="bg-slate-800/60 backdrop-blur px-3 py-1 rounded-full border border-emerald-400/30 text-xs text-emerald-300 flex items-center gap-1">
                <Leaf className="w-3 h-3" /> Organic Quality
              </div>
            </div>
          </div>

          {/* Right Product Card */}
          <div className="md:col-span-1 z-10">
            <div
              className="card-border bg-slate-700/30 backdrop-blur p-8 rounded-2xl sticky top-32 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 transform hover:scale-105"
              style={{
                transform: `perspective(1000px) rotateX(${(mousePosition.y - 400) * 0.02}deg) rotateY(${(mousePosition.x - 700) * 0.02}deg)`,
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-gray-400 text-xs font-medium">Indoor Plant</p>
                <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
              </div>

              <h3 className="text-white text-2xl font-bold mb-2">
                Aglaonema plant
              </h3>

              <p className="text-gray-400 text-sm mb-6">
                The Aglaonema plant is a genus of succulent plants known for their striking leaves and architectural
                forms.
              </p>

              <div className="mb-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-4 flex items-center justify-center h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-green-400/10"></div>
                <img
                  src="/images/51khtfXGjLL._AC_UF894_1000_QL80_-removebg-preview.png"
                  alt="Aglaonema"
                  className="h-full w-full object-contain relative z-10"
                />
              </div>

              <button className="btn-primary w-full hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 mb-4">
                Buy Now
              </button>

              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-slate-800/40 p-2 rounded text-center">
                  <p className="text-xs text-gray-400">Price</p>
                  <p className="text-emerald-400 font-bold">Rs. 450/-</p>
                </div>
                <div className="bg-slate-800/40 p-2 rounded text-center">
                  <p className="text-xs text-gray-400">Rating</p>
                  <p className="text-emerald-400 font-bold">4.8★</p>
                </div>
              </div>

              <div className="flex gap-2 justify-center">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                <div className="w-2 h-2 rounded-full bg-gray-600"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
