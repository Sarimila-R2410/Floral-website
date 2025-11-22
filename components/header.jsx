"use client"

import { Menu, Search, User, ShoppingCart } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌿</span>
          <span className="font-bold text-xl text-white">FloraVision.</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#home" className="text-sm text-white hover:text-green-400 transition font-medium">
            Home
          </a>
          <a href="#plants" className="text-sm text-white hover:text-green-400 transition font-medium">
            Plants
          </a>
          <a href="#about" className="text-sm text-white hover:text-green-400 transition font-medium">
            About
          </a>
          <a href="#contact" className="text-sm text-white hover:text-green-400 transition font-medium">
            Contact
          </a>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-slate-800 rounded-lg px-3 py-2">
            <Search className="w-4 h-4 text-white" />
            <input
              type="text"
              placeholder="Search plants..."
              className="bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none"
            />
          </div>

          <div className="relative cursor-pointer hover:text-green-400 transition text-white">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-green-500 text-white text-xs rounded-full flex items-center justify-center">
              0
            </span>
          </div>

          <User className="w-5 h-5 cursor-pointer hover:text-green-400 transition text-white" />

          <Menu
            className="w-5 h-5 md:hidden cursor-pointer text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 p-4 animate-in slide-in-from-top">
          <nav className="flex flex-col gap-4">
            <a href="#home" className="text-sm text-white hover:text-green-400 transition">
              Home
            </a>
            <a href="#plants" className="text-sm text-white hover:text-green-400 transition">
              Plants
            </a>
            <a href="#about" className="text-sm text-white hover:text-green-400 transition">
              About
            </a>
            <a href="#contact" className="text-sm text-white hover:text-green-400 transition">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
