import { Footer } from 'components/Footer'
import { Header } from 'components/Header'

export default function OurSpaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <div className="relative z-50 pb-16">{children}</div>
      <Footer />
    </>
  )
}
