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
      <HeroSection image="/images/our-spa.jpg" title="Reviews of Our Spa" />

      <div className="relative -mt-[16%] z-50 overflow-hidden pb-10">
        {children}
      </div>
      <Footer />
    </>
  )
}
