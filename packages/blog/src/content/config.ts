import { defineCollection } from 'astro:content'
import { sstTutorialSchema, blogSchema } from './_schemas'

const sst = defineCollection({
  schema: sstTutorialSchema,
})

const blog = defineCollection({
  schema: blogSchema,
})

export const collections = { sst, blog }
