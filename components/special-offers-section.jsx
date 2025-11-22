"use client"

import { useState } from "react"

export default function SpecialOffersSection() {
  const [activeOffer, setActiveOffer] = useState(0)

  const offers = [
    {
      id: 1,
      title: "Monstera Deliciosa",
      subtitle: "Trendy & Bold",
      image: "/images/images__1_-removebg-preview.png",
      discount: "30%",
      price: "Rs. 2,499",
      description: "Add tropical vibes to your space",
    },
    {
      id: 2,
      title: "Bonsai Collection",
      subtitle: "Miniature Art",
      image: "/images/61oaz-yzf3l.png",
      discount: "25%",
      price: "Rs. 1,999",
      description: "Traditional Japanese garden beauty",
    },
    {
      id: 3,
      title: "Rare Caladium",
      subtitle: "Exotic Beauty",
      image: "/images/images-3-removebg-preview.png",
      discount: "20%",
      price: "Rs. 1,799",
      description: "Stunning variegated foliage",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Special Offers</h2>
          <p className="text-gray-400 text-lg">Limited time deals on our most coveted plants</p>
        </div>

        {/* 3D Carousel Effect */}
        <div className="relative h-96 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Background blur effect */}
            <div className="absolute w-96 h-96 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse"></div>
          </div>

          <div className="relative z-10 w-full max-w-2xl">
            {offers.map((offer, index) => (
              <div
                key={offer.id}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  activeOffer === index
                    ? "opacity-100 scale-100 z-20"
                    : activeOffer > index
                      ? "opacity-0 scale-75 -translate-x-full"
                      : "opacity-0 scale-75 translate-x-full"
                }`}
              >
                <div className="bg-slate-700/30 backdrop-blur-xl border border-slate-600 rounded-3xl p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Image with 3D effect */}
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                      <div className="relative bg-slate-800 rounded-2xl p-8 flex items-center justify-center h-64">
                        <img
                          src={offer.image || "/placeholder.svg"}
                          alt={offer.title}
                          className="w-full h-full object-contain drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-lg">
                          {offer.discount} OFF
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center md:text-left">
                      <p className="text-emerald-400 text-sm uppercase tracking-widest font-semibold">
                        {offer.subtitle}
                      </p>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">{offer.title}</h3>
                      <p className="text-gray-300 mb-6">{offer.description}</p>
                      <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
                        <div>
                          <p className="text-gray-400 text-sm">Starting at</p>
                          <p className="text-3xl font-bold text-emerald-400">{offer.price}</p>
                        </div>
                        <button className="btn-primary">Shop Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-center gap-3 mt-12">
          {offers.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveOffer(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeOffer === index ? "bg-emerald-500 w-8" : "bg-slate-600 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
