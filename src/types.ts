interface ThemedLogo {
  dark: string
  light: string
}

interface Image {
  src: string | ThemedLogo
  alt?: string
}

interface Link {
  label: string
  url: string
  icon?: string
}

export enum FaviconType {
  ico = 'image/x-icon',
  gif = 'image/gif',
  jpeg = 'image/jpeg',
  jpg = 'image/jpeg',
  png = 'image/png',
  svg = 'image/svg+xml',
}

interface Favicon {
  href: string
  type: FaviconType
}

interface Friend {
  name: string
  url: string
  avatar?: string
  desc?: string
}

interface DataOptions {
  locale: string | undefined
  options: Intl.DateTimeFormatOptions
}

export interface SiteConfig {
  title: string // website title
  description: string // website description info
  logo?: Image // website logo image
  lang?: string
  tagline?: string // website tagline
  favicon?: Favicon
  social?: Link[] // social media accounts
  friends?: Friend[]
  date: DataOptions
}
