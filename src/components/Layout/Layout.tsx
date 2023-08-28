'use client'

import { Header } from 'components/Header'
import { WithChildren } from 'types/common'
import Footer from '../Footer'

export const Layout = ({ children }: WithChildren) => {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
