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
        description="Acnehuong is a genuine salon in the middle of the city that combines relaxing skincare, beauty and treatment"
      />

      <div className="-mt-[12%] relative z-50 overflow-hidden">{children}</div>
      <Footer />
    </>
  )
}
