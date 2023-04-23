import type { CollectionEntry } from 'astro:content'

export const sortPostsByPart = (posts: CollectionEntry<'sst'>[]) =>
  posts
    .filter(({ data }) => !data.draft)
    .sort((a, b) => (a.data.postNumber > b.data.postNumber ? 1 : -1))

export const sortPostsByPubDate = (posts: CollectionEntry<'sst'>[]) =>
  posts
    .filter(({ data }) => !data.draft)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.pubDatetime).getTime() / 1000) -
        Math.floor(new Date(a.data.pubDatetime).getTime() / 1000),
    )

export default sortPostsByPart
