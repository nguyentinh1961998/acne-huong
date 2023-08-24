'use client'

import { Button } from '../ui/button'
import Nagivation, { NavigationItemType } from './Navigation'
import TopBar from './TopBar'

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
      <div className="py-8 p-4 flex justify-between items-center">
        <div>LOGO</div>
        <div className="flex gap-2 items-center">
          <Nagivation items={NAVIGATION_ITEMS} />
          <Button className="rounded-none p-10 px-14 text-white text-lg">
            BOOK SPA
          </Button>
        </div>
      </div>
    </header>
  )
}
