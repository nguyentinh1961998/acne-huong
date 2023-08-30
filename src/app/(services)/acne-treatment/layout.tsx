import { HeroSection } from 'components/HeroSection/HeroSection'

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <HeroSection
        image="/images/our-spa.jpg"
        title="Acne treatment"
        description="Eliminate bad conditions for the skin bad conditions for the skin"
      />
      <div className="relative z-50 pb-16">{children}</div>
    </>
  )
}
