// Media
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'

declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
  }
}

export type NavItem = {
  title: string
  href: string
  navItems?: NavItem[]
  disabled?: boolean
}

export type MainNavItem = NavItem

export type DocsConfig = {
  mainNav: MainNavItem[]
}

export type CardItem = {
  title: string
  description: string
  image: string
  href?: string
}

export type CardItemConfig = {
  listCard: CardItem[]
}

export type Contact = {
  label: string
  icon: React.ReactNode
  href?: string
}

export type ContactConfig = {
  contacts: Contact[]
}

export type Review = {
  description: string
  name?: string
  avatar?: string
}

export type ReviewConfig = {
  reviews: Review[]
}
