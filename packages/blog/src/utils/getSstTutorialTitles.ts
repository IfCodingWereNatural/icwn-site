import type { CollectionEntry } from 'astro:content'

export const getSstTutorialTitles = (posts: CollectionEntry<'sst'>[]) =>
  posts.map(({ data, ...post }) => {
    const { postNumber, title } = data
    return {
      ...post,
      data: {
        ...data,
        title: `SST Tutorial, Part ${postNumber} | ${title}`,
      },
    }
  })

export default getSstTutorialTitles
