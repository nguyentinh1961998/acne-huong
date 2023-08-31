import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { HeroSection } from 'components/HeroSection/HeroSection'

export default function VideoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <HeroSection image="/images/our-spa.jpg" title="Our Videos" />

      <div className="mx-4 relative z-50 overflow-hidden">{children}</div>
      <Footer />
    </>
  )
}
