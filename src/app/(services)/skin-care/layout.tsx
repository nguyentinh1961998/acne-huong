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
        title="Skincare"
        description="The art of healing through the use of plant-extracts."
      />
      <div className="relative z-50 pb-16">{children}</div>
    </>
  )
}
