import type { Site, SocialObjects } from './types'

export const SITE: Site = {
  website: 'https://ifcodingwerenatural.com/',
  author: 'Craig Blackburn',
  desc: 'A minimal, responsive and SEO-friendly Astro blog theme.',
  title: 'If Coding Were Natural',
  ogImage: 'astropaper-og.jpg',
  lightAndDarkMode: true,
  postPerPage: 3,
}

export const LOCALE = ['en-EN'] // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
}

export const SOCIALS: SocialObjects = [
  {
    name: 'Github',
    href: 'https://github.com/ifcodingwerenatural/',
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  // {
  //   name: 'LinkedIn',
  //   href: 'https://github.com/satnaing/astro-paper',
  //   linkTitle: `${SITE.title} on LinkedIn`,
  //   active: true,
  // },
  {
    name: 'Mail',
    href: 'mailto:ifcodingwerenatural@gmail.com',
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@ifcodingwerenatural',
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
]
