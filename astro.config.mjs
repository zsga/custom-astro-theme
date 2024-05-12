import {
  transformerNotationDiff,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from '@shikijs/transformers'
import { rendererRich, transformerTwoslash } from '@shikijs/twoslash'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
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
  },
})
