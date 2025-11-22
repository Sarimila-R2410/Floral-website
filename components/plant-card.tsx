"use client"

import { ShoppingBag } from "lucide-react"

interface PlantCardProps {
  name: string
  price: string
  description: string
  image: string
}

export default function PlantCard({ name, price, description, image }: PlantCardProps) {
  return (
    <div className="flex justify-center">
      <div className="relative w-full max-w-xs">
        {/* Plant image container - positioned to overflow outside card */}
        <div className="flex justify-center mb-0 pb-16 relative z-20">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 backdrop-blur-md p-3 flex items-center justify-center shadow-2xl border border-emerald-400/30 hover:shadow-emerald-500/50 hover:border-emerald-400/60 transition-all duration-300">
            <img
              src={image || "/placeholder.svg"}
              alt={name}
              className="h-full w-full object-contain drop-shadow-xl filter brightness-110"
            />
          </div>
        </div>

        {/* Card body - minimal design with glassmorphism */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl px-6 py-8 border border-slate-700/50 hover:border-emerald-400/30 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/20 pt-8">
          {/* Title */}
          <h3 className="text-xl font-bold text-center text-white mb-3 tracking-tight">{name}</h3>

          {/* Description - two lines with subtle color */}
          <p className="text-slate-400 text-sm text-center leading-relaxed mb-6 line-clamp-2 h-10">{description}</p>

          {/* Footer - Price and Shopping Bag Icon */}
          <div className="flex items-center justify-between">
            <span className="text-emerald-400 font-bold text-lg">{price}</span>
            <button className="p-3 rounded-full border border-emerald-400/30 bg-emerald-500/10 hover:bg-emerald-500/20 hover:border-emerald-400/60 transition-all duration-300 group">
              <ShoppingBag className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
