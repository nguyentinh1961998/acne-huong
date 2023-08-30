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
        title="Face massages"
        description="The treatment that helps you relax your face."
      />
      <div className="relative z-50 pb-16">{children}</div>
    </>
  )
}
