import { defineCollection } from 'astro:content'
import { blogSchema } from './_schemas'

const sst = defineCollection({
  schema: blogSchema,
})

export const collections = { sst }
