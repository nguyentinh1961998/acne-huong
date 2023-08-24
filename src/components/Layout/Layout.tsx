'use client'

import { Header } from 'components/Header'
import { WithChildren } from 'types/common'

export const Layout = ({ children }: WithChildren) => {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <main className="flex-1">
        <Header />

        <div className="flex space-y-6 flex-col">{children}</div>
      </main>
    </div>
  )
}
