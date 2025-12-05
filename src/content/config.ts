import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const books = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    note: z.string().optional(),
    rating: z.number().min(1).max(5).optional(),
    status: z.enum(['reading', 'finished', 'want-to-read']).optional(),
  }),
});

const quotes = defineCollection({
  type: 'content',
  schema: z.object({
    text: z.string(),
    author: z.string(),
    source: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().optional(),
    github: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = { blog, books, quotes, projects };
