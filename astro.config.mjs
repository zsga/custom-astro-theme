import mdx from '@astrojs/mdx'
import {
  transformerNotationDiff,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from '@shikijs/transformers'
import { rendererRich, transformerTwoslash } from '@shikijs/twoslash'
import { defineConfig, passthroughImageService } from 'astro/config'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import remarkToc from 'remark-toc'
import UnoCSS from 'unocss/astro'
import { remarkReadingTime } from './src/utils/remarkReadingTime'

import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
  site: 'https://lottee.dev',
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    mdx(),
  ],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      // theme: 'dracula',
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      cssVariablePrefix: '--s-',
      wrap: true,
      transformers: [
        transformerTwoslash({
          // explicitTrigger: true,
          renderer: rendererRich(),
        }),
        transformerNotationDiff(),
        transformerNotationFocus(),
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
      ],
    },
    remarkPlugins: [remarkToc, remarkReadingTime],
    rehypePlugins: [rehypeAccessibleEmojis],
  },
  image: {
    service: passthroughImageService(),
  },
  prefetch: true,
  output: 'server',
  adapter: cloudflare(),
})
