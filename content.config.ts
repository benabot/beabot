import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: 'page',
      source: {
        include: 'articles/**/*.md',
        prefix: '/eco-conception',
      },
      schema: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        chapo: z.string().optional(),
        date: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        tag: z.array(z.string()).default([]),
        temps: z.number().optional(),
        schema: z.string().optional(),
        image: z.string().optional(),
        img: z.string().optional(),
        seo: z
          .object({
            title: z.string().optional(),
            description: z.string().optional(),
            ogImage: z.string().optional(),
            robots: z.string().optional(),
          })
          .catchall(z.any())
          .optional(),
        conversion: z
          .object({
            service: z.string().optional(),
            cta: z.boolean().optional(),
          })
          .catchall(z.any())
          .optional(),
      }),
    }),
  },
})
