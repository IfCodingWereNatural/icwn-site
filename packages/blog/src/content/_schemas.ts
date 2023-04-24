import { z } from 'astro:content'
import { DateTime } from 'luxon'

const zone = 'America/Denver' as const

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

export const blogSchema = z
  .object({
    author: z.enum(['Craig Blackburn']).default('Craig Blackburn'),
    pubDatetime: z
      .date()
      .transform((date) => DateTime.fromJSDate(date).setZone(zone).toJSDate()),
    title: z.string(),
    postSlug: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default(['others']),
    ogImage: z.string().optional(),
    description: z.string(),
  })
  .strict()

export type BlogFrontmatter = z.infer<typeof blogSchema>

export type Frontmatter = SstTutorialFrontmatter | BlogFrontmatter
