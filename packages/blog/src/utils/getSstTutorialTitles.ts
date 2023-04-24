import type { CollectionEntry } from 'astro:content'
// import type { Post } from 'types'

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

// import type { CollectionEntry } from 'astro:content'
// import type { Post } from 'types'

// const isSstPost = (post: unknown): post is CollectionEntry<'sst'> =>
//   (post as CollectionEntry<'sst'>).data.postNumber != null

// export const getTitles = (posts: CollectionEntry<'sst'>[]) =>
//   posts.map((post) => {
//     if (isSstPost(post)) {
//       const { data, ...entry } = post
//       const { postNumber, title } = data
//       return {
//         ...entry,
//         data: {
//           ...data,
//           title: `SST Tutorial, Part ${postNumber} | ${title}`,
//         },
//       }
//     }

//     return post
//   })

// export default getTitles
