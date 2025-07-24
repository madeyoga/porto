import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    index: defineCollection({
      type: 'page',
      source: 'index.yml',
      schema: z.object({
        title: z.string(),
        hero: z.object({
          intro: z.string(),
          title: z.string(),
          location: z.string(),
          links: z.array(z.object({
            icon: z.string(),
            url: z.string()
          }))
        }),
        techstack: z.array(z.object({
          icon: z.string(),
          title: z.string()
        })),
        experiences: z.array(z.object({
          timeframe: z.string(),
          title: z.string(),
          company: z.string(),
          domainName: z.string().optional(),
          url: z.string().optional(),
          jobtype: z.string()
        }))
      })
    }),
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    })
  }
})
