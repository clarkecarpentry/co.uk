import {defineField, defineType} from 'sanity'

/**
 * Blog Post schema for articles and news content.
 * Uses Portable Text (blockContent) for rich text body.
 */
export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly identifier',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'Brief summary shown in blog listings',
      rows: 3,
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      description: 'Full article content',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      description: 'Author name',
      initialValue: 'Mike Clarke',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      description: 'Publication date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      description: 'Main image for the post',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility',
        },
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      description: 'Post categories/tags',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'relatedServices',
      title: 'Related Services',
      type: 'array',
      description: 'Services mentioned or related to this post',
      of: [
        {
          type: 'reference',
          to: [{type: 'service'}],
        },
      ],
    }),
  ],
  orderings: [
    {
      title: 'Published Date (Newest)',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{field: 'title', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      date: 'publishedAt',
      media: 'image',
    },
  },
})
