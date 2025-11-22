"use client"

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🌿</span>
              <span className="font-bold text-xl text-white">FloraVision.</span>
            </div>
            <p className="text-white text-sm mb-4">
              "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to enhance your living
              environment."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Quick Link&apos;s</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white hover:text-green-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#plants" className="text-white hover:text-green-400 transition">
                  Types of plants
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-green-400 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-white hover:text-green-400 transition">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">For Every Update.</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
              />
              <button className="btn-primary">SUBSCRIBE</button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm">© 2025 FloraVision. All rights reserved.</p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <button className="w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 transition flex items-center justify-center">
              ✈️
            </button>
            <button className="w-10 h-10 rounded-full bg-slate-700 hover:bg-slate-600 transition flex items-center justify-center">
              👆
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
