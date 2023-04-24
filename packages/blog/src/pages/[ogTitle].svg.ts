import { getCollection } from 'astro:content'
import generateOgImage from '@utils/generateOgImage'
import type { APIRoute } from 'astro'

export const get: APIRoute = async ({ params }) => ({
  body: await generateOgImage(params.ogTitle),
})

const posts = await Promise.all([
  getCollection('sst'),
  getCollection('blog'),
]).then((posts) => posts.flat())

export function getStaticPaths() {
  return posts
    .filter(({ data }) => !data.draft)
    .filter(({ data }) => !data.ogImage)
    .map(({ data }) => ({
      params: { ogTitle: data.title },
    }))
}
