import { type CollectionEntry, getCollection } from 'astro:content'

export async function getAllPosts() {
  return await getCollection('posts', ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true
  })
}

export function sortMDByDate(posts: Array<CollectionEntry<'posts'>>) {
  return posts.sort((a, b) => {
    const aDate = new Date(a.data.updatedAt ?? a.data.createdAt).valueOf()
    const bDate = new Date(b.data.updatedAt ?? b.data.createdAt).valueOf()
    return bDate - aDate
  })
}
