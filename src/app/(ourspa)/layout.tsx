import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { HeroSection } from 'components/HeroSection/HeroSection'

export default function OurSpaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <HeroSection
        image="/images/our-spa.jpg"
        title="An Incredible Spa Experience"
        description=" Rela is a genuine oasis in the middle of the city that combines
          relaxing water procedures, beauty and wellness services, and sports."
      />

      <div className="mx-4 -mt-60 relative z-50 overflow-hidden">
        {children}
      </div>
      <Footer />
    </>
  )
}
