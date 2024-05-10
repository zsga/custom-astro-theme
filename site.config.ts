import type { SiteConfig } from '@/types'

const config: SiteConfig = {
  title: 'lottee.dev',
  description: 'Just for fun',
  date: {
    locale: 'zh-CN',
    options: {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    },
  },
}

export default config
