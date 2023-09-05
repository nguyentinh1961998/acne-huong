'use client'

import { docsConfig } from 'config/header'
import { Button } from '../ui/button'
import Navigation from './Navigation'
import TopBar from './TopBar'
import Logo from '../common/Logo'

export function Header() {
  return (
    <header className="">
      <TopBar />
      <div className="flex items-center justify-between p-4 px-6">
        <div className="flex items-center justify-center gap-2">
          <Logo />
          <span className="pt-2 text-2xl font-header text-active">
            Rela Spa
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Navigation items={docsConfig.mainNav} />
          {/* <Button className="rounded-none p-8 px-10 text-white font-light text-[10px] tracking-[0.3rem]">
            BOOK SPA
          </Button> */}
        </div>
      </div>
    </header>
  )
}
