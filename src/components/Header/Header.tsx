'use client'

import { Button } from '../ui/button'
import Nagivation, { NavigationItemType } from './Navigation'
import TopBar from './TopBar'
import Logo from '../common/Logo'

const NAVIGATION_ITEMS: NavigationItemType[] = [
  {
    key: 'Home',
    title: 'Home',
    navItems: [
      {
        href: '',
        label: 'Home 1',
      },
      {
        href: '',
        label: 'Home 2',
      },
      {
        href: '',
        label: 'Home 2',
      },
    ],
  },
  {
    key: 'OurSpa',
    title: 'Our Spa',
    navItems: [
      {
        href: '',
        label: 'Our Spa',
      },
      {
        href: '',
        label: 'Experts',
      },
      {
        href: '',
        label: 'Experience',
      },
    ],
  },
  {
    key: 'Services',
    title: 'Services',
    navItems: [
      {
        href: '',
        label: 'Our Spa',
      },
      {
        href: '',
        label: 'Experts',
      },
      {
        href: '',
        label: 'Experience',
      },
    ],
  },
  {
    key: 'Reviews',
    title: 'Reviews',
    navItems: [
      {
        href: '',
        label: 'Our Spa',
      },
      {
        href: '',
        label: 'Experts',
      },
      {
        href: '',
        label: 'Experience',
      },
    ],
  },
  {
    key: 'Specials',
    title: 'Specials',
    navItems: [
      {
        href: '',
        label: 'Our Spa',
      },
      {
        href: '',
        label: 'Experts',
      },
      {
        href: '',
        label: 'Experience',
      },
    ],
  },
  {
    key: 'News',
    title: 'News',
    navItems: [
      {
        href: '',
        label: 'Our Spa',
      },
      {
        href: '',
        label: 'Experts',
      },
      {
        href: '',
        label: 'Experience',
      },
    ],
  },
  {
    key: 'Features',
    title: 'Features',
    navItems: [
      {
        href: '',
        label: 'Our Spa',
      },
      {
        href: '',
        label: 'Experts',
      },
      {
        href: '',
        label: 'Experience',
      },
    ],
  },
]

export const Header = () => {
  return (
    <header className="">
      <TopBar />
      <div className="p-4 px-6 flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <Logo />
          <span className="pt-2 text-2xl font-header text-active">
            Rela Spa
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <Nagivation items={NAVIGATION_ITEMS} />
          <Button className="rounded-none p-8 px-10 text-white font-light text-[10px] tracking-[0.3rem]">
            BOOK SPA
          </Button>
        </div>
      </div>
    </header>
  )
}
