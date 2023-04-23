import { z } from 'astro:content'

export const sstTutorialSchema = z
  .object({
    author: z.enum(['Craig Blackburn']).default('Craig Blackburn'),
    pubDatetime: z.date(),
    title: z.string(),
    postSlug: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default(['others']),
    ogImage: z.string().optional(),
    description: z.string(),
    postNumber: z.number(),
  })
  .strict()

export type SstTutorialFrontmatter = z.infer<typeof sstTutorialSchema>
