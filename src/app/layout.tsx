import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/index.css'

export const metadata = {
  authors: [
    {
      name: 'acnehuong',
    },
  ],
  creator: 'kienmai',
  title: 'Home | Acne Huong',
}

export default function RootLayout({
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

      <body className="min-h-screen">{children}</body>
    </html>
  )
}
