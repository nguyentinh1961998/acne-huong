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
        title="Deep Tissue Treatment"
        description="Targets the perennial acne issue. The treatment use sloer strokes or frition techniques across severe skin changes"
      />
      <div className="relative z-50 -mt-[16%] pb-16">{children}</div>
    </>
  )
}
