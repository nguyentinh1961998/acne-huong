import { DocsConfig } from 'types'

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      href: '',
      title: 'Home',
    },
    {
      href: 'our-spa',
      title: 'Our Spa',
      navItems: [
        {
          href: 'our-spa',
          title: 'Our Spa',
        },
        {
          href: 'experts',
          title: 'Experts',
        },
        {
          href: 'experience',
          title: 'Experience',
        },
        {
          href: 'location',
          title: 'Location',
        },
      ],
    },
    {
      href: 'videos',
      title: 'Videos',
      navItems: [
        {
          href: 'videos',
          title: 'Trending Videos',
        },
        {
          href: 'videos',
          title: 'Newest Videos',
        },
      ],
    },
    {
      href: 'services',
      title: 'Services',
      navItems: [
        {
          href: 'acne-treatment',
          title: 'Acne Treatment',
        },
        {
          href: 'face-massages',
          title: 'Face Massages',
        },
        {
          href: 'skin-care',
          title: 'Skincare',
        },
      ],
    },
    {
      href: 'spa-review',
      title: 'Reviews',
    },
  ],
}
