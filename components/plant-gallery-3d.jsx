"use client"

import { useRef, useState } from "react"

export default function PlantGallery3D() {
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [rotationZ, setRotationZ] = useState(0)

  const plants = [
    {
      id: 1,
      name: "Philodendron",
      image: "/images/images-removebg-preview.png",
      price: "Rs. 899",
      rotation: "rotateY(15deg) rotateX(10deg)",
    },
    {
      id: 2,
      name: "Caladium",
      image: "/images/images-3-removebg-preview.png",
      price: "Rs. 1,299",
      rotation: "rotateY(-15deg) rotateX(-10deg)",
    },
    {
      id: 3,
      name: "Bonsai Tree",
      image: "/images/61oaz-yzf3l.png",
      price: "Rs. 2,599",
      rotation: "rotateY(0deg) rotateX(0deg)",
    },
    {
      id: 4,
      name: "Croton Plant",
      image: "/images/51khtfXGjLL._AC_UF894_1000_QL80_-removebg-preview.png",
      price: "Rs. 1,499",
      rotation: "rotateY(20deg) rotateX(-5deg)",
    },
  ]

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30
    setRotationZ((prev) => (prev + 1) % 360)
    setMousePosition({ x, y })
  }

  return (
    <section className="py-20 px-4 bg-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">3D Plant Gallery</h2>
          <p className="text-gray-400 text-lg">Move your cursor to explore our plants in 3D</p>
        </div>

        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => {
            setIsHovering(false)
            setMousePosition({ x: 0, y: 0 })
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective"
          style={{ perspective: "1000px" }}
        >
          {plants.map((plant) => (
            <div
              key={plant.id}
              className="relative group"
              style={{
                transform: isHovering
                  ? `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) rotateZ(${rotationZ * 0.5}deg)`
                  : `rotateZ(${rotationZ * 0.2}deg)`,
                transformStyle: "preserve-3d",
                transition: isHovering ? "none" : "transform 0.6s ease-out",
              }}
            >
              {/* Outer glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500 animate-pulse"></div>

              {/* Card content */}
              <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 rounded-2xl p-6 h-full flex flex-col items-center justify-center group-hover:shadow-2xl group-hover:shadow-emerald-500/20 transition-all duration-300">
                {/* Plant image container with enhanced 3D motion */}
                <div className="relative w-full h-48 flex items-center justify-center mb-6 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent rounded-lg group-hover:from-emerald-500/20 transition-all duration-300 animate-pulse"
                    style={{
                      transform: isHovering
                        ? `translateZ(50px) scale(1.1) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`
                        : `translateZ(0) scale(1)`,
                      transformStyle: "preserve-3d",
                    }}
                  ></div>
                  <img
                    src={plant.image || "/placeholder.svg"}
                    alt={plant.name}
                    className="relative z-10 w-40 h-40 object-contain drop-shadow-2xl group-hover:drop-shadow-none transition-all duration-300"
                    style={{
                      transform: isHovering
                        ? `scale(1.15) translateZ(30px) rotateZ(${rotationZ * 0.8}deg)`
                        : `scale(1) translateZ(0) rotateZ(${rotationZ * 0.1}deg)`,
                      transformStyle: "preserve-3d",
                    }}
                  />
                </div>

                {/* Plant info */}
                <h3 className="text-xl font-bold text-white mb-2 text-center">{plant.name}</h3>
                <p className="text-emerald-400 font-semibold mb-4">{plant.price}</p>

                {/* Animated button with floating effect */}
                <button className="btn-primary w-full transform group-hover:scale-105 transition-transform duration-300 hover:animate-pulse">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Background animation */}
        <div className="fixed -bottom-32 -right-32 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl animate-blob"></div>
        <div className="fixed -top-32 -left-32 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>
    </section>
  )
}
