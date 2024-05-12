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

export function getAllTags(posts: Array<CollectionEntry<'posts'>>) {
  return posts.flatMap((post) => {
    if (!post.data.tags) {
      return []
    }
    return [...post.data.tags]
  })
}

export function getUniqueTags(posts: Array<CollectionEntry<'posts'>>) {
  return [...new Set(getAllTags(posts))]
}

export function getUniqueTagsWithCount(
  posts: Array<CollectionEntry<'posts'>>,
): Array<[string, number]> {
  return [
    ...getAllTags(posts).reduce(
      (acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
      new Map<string, number>(),
    ),
  ].sort((a, b) => b[1] - a[1])
}
