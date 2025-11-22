import Header from "@/components/header"
import Hero from "@/components/hero"
import CategoriesSection from "@/components/categories-section"
import TopSellingPlants from "@/components/top-selling-plants"
import BenefitsSection from "@/components/benefits-section"
import CustomerReviews from "@/components/customer-reviews"
import BestO2Plants from "@/components/best-o2-plants"
import InteractivePlantShowcase from "@/components/interactive-plant-showcase"
import PlantGallery3D from "@/components/plant-gallery-3d"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <Header />
      <Hero />
      <CategoriesSection />
      <TopSellingPlants />
      <BenefitsSection />
      <InteractivePlantShowcase />
      <PlantGallery3D />
      <CustomerReviews />
      <BestO2Plants />
      <Footer />
    </main>
  )
}
