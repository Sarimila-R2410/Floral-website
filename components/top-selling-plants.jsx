"use client"

import PlantCard from "./plant-card"

const plants = [
  {
    id: 1,
    name: "Aglaonema plant",
    price: "Rs. 300/-",
    description: "The Aglaonema plant, known as Chinese Evergreen, is an attractive foliage and ease of care.",
    image: "/images/51khtfXGjLL._AC_UF894_1000_QL80_-removebg-preview.png",
  },
  {
    id: 2,
    name: "Plantain Lilies",
    price: "Rs. 380/-",
    description:
      "Hosta are primarily prized for their lush, decorative leaves, which come in a wide variety of shapes, sizes.",
    image: "/images/images__1_-removebg-preview.png",
  },
  {
    id: 3,
    name: "Cactus",
    price: "Rs. 259/-",
    description: "It is known for their ability to thrive in arid environments.",
    image: "/images/images__2_-removebg-preview.png",
  },
]

export default function TopSellingPlants() {
  return (
    <section id="plants" className="py-20 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Our Top Selling Plants</h2>

        <div className="grid md:grid-cols-3 gap-12">
          {plants.map((plant) => (
            <PlantCard
              key={plant.id}
              name={plant.name}
              price={plant.price}
              description={plant.description}
              image={plant.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
