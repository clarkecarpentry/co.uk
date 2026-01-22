import {defineField, defineType} from 'sanity'

/**
 * Project schema - aligned with src/lib/data/projects.ts interface:
 *
 * interface Project {
 *   name: string;
 *   slug: string;
 *   type: "Commercial" | "Domestic";
 *   client?: string;
 *   description: string;
 *   completedDate: string;
 *   services: string[];
 * }
 */
export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Project name (e.g., "Wilder House")',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly identifier',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      description: 'Commercial or Domestic project',
      options: {
        list: [
          {title: 'Commercial', value: 'Commercial'},
          {title: 'Domestic', value: 'Domestic'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
      description: 'Client name (optional)',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Project description',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'completedDate',
      title: 'Completed Date',
      type: 'string',
      description: 'When the project was completed (e.g., "August 2018")',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      description: 'Services provided on this project',
      of: [
        {
          type: 'reference',
          to: [{type: 'service'}],
        },
      ],
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      description: 'Project gallery images',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      description: 'Main image shown in project listings',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    }),
  ],
  orderings: [
    {
      title: 'Completed Date (Newest)',
      name: 'completedDateDesc',
      by: [{field: 'completedDate', direction: 'desc'}],
    },
    {
      title: 'Name A-Z',
      name: 'nameAsc',
      by: [{field: 'name', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'client',
      media: 'featuredImage',
    },
  },
})
