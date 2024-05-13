import { getAllPosts } from '@/utils/post'
import rss from '@astrojs/rss'
import config from 'config'

export async function GET(context) {
  const posts = await getAllPosts()

  return rss({
    // https://docs.astro.build/zh-cn/reference/api-reference/#contextsite
    site: context.site,
    title: config.title,
    description: config.description,

    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.createdAt,
      link: `/posts/${post.slug}`,
    })),
    customData: '<language>en-us</language>',
    stylesheet: '/pretty-feed-v3.xsl',
  })
}
