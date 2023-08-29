import Footer from 'components/Footer'
import { Header } from 'components/Header'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className="bg-neutral-100 font-sans text-slate-800 antialiased"
      lang="en"
    >
      <head />

      <body className="min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
