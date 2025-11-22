"use client"

import { useState } from "react"

const reviews = [
  {
    id: 1,
    name: "Shelly Russel",
    rating: 5,
    text: "Just got my hands on some absolutely gorgeous plants, and I couldn't be more satisfied.",
    image: "/shelly.jpg",
  },
  {
    id: 2,
    name: "Lula Rofison",
    rating: 5,
    text: "Each one has its own unique charm and personality, and they're in perfect condition. The vibrant colors and fresh greenery make such a huge",
    image: "/lula.jpg",
  },
  {
    id: 3,
    name: "Carol Huels",
    rating: 5,
    text: "It's like bringing a little piece of nature indoors. Definitely worth the investment. The quality has never looked better!",
    image: "/festive-carol-scene.png",
  },
]

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className="py-20 px-4 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Customer Review</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`card-border bg-slate-700/50 backdrop-blur p-6 transition-all ${
                index === currentIndex ? "ring-2 ring-green-500" : "opacity-70"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <img src={review.image || "/placeholder.svg"} alt={review.name} className="w-10 h-10 rounded-full" />
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-yellow-400 text-sm">{"⭐".repeat(review.rating)}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4">
          <button onClick={prevSlide} className="p-2 rounded-lg bg-slate-700 hover:bg-green-600 transition">
            ←
          </button>
          <div className="flex gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition ${
                  index === currentIndex ? "bg-green-500 w-8" : "bg-slate-500"
                }`}
              />
            ))}
          </div>
          <button onClick={nextSlide} className="p-2 rounded-lg bg-slate-700 hover:bg-green-600 transition">
            →
          </button>
        </div>
      </div>
    </section>
  )
}
