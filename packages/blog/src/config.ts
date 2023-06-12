import type { Site, SocialObjects } from './types'

export const SITE: Site = {
  website: 'https://ifcodingwerenatural.com/',
  author: 'Craig Blackburn',
  desc: 'Blog website to put thoughts down for my YouTube channel',
  title: 'If Coding Were Natural',
  ogImage: 'astropaper-og.jpg',
  lightAndDarkMode: true,
  postPerPage: 5,
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
    name: 'YouTube',
    href: 'https://www.youtube.com/@ifcodingwerenatural',
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
  {
    name: 'Github',
    href: 'https://github.com/IfCodingWereNatural/icwn-site',
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: 'Mail',
    href: 'mailto:ifcodingwerenatural@gmail.com',
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
]
