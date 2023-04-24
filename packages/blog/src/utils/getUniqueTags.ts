import { slugifyStr } from './slugify'
import type { CollectionEntry } from 'astro:content'

const getUniqueTags = (
  posts: Array<CollectionEntry<'sst'> | CollectionEntry<'blog'>>,
) => {
  const tags: string[] = []
  const filteredPosts = posts.filter(({ data }) => !data.draft)
  for (const post of filteredPosts) {
    tags.push(...post.data.tags.map((tag) => slugifyStr(tag)))
  }
  return [...new Set(tags)]
  // return tags
}

export default getUniqueTags
