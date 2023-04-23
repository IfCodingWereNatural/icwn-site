import { defineCollection } from 'astro:content'
import { sstTutorialSchema } from './_schemas'

const sst = defineCollection({
  schema: sstTutorialSchema,
})

export const collections = { sst }
