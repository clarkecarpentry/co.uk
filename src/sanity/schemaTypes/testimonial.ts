import {defineField, defineType} from 'sanity'

/**
 * Testimonial schema - aligned with src/lib/data/testimonials.ts interface:
 *
 * interface Testimonial {
 *   quote: string;
 *   clientName: string;
 *   company?: string;
 *   project?: string;
 * }
 */
export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      description: 'The testimonial text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      description: 'Name of the person giving the testimonial',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      description: 'Company or organisation (optional)',
    }),
    defineField({
      name: 'project',
      title: 'Project',
      type: 'string',
      description: 'Related project name or role (optional)',
    }),
    defineField({
      name: 'projectRef',
      title: 'Project Reference',
      type: 'reference',
      description: 'Link to the related project (optional)',
      to: [{type: 'project'}],
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show on homepage?',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which testimonial appears (lower = first)',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
    {
      title: 'Client Name A-Z',
      name: 'clientNameAsc',
      by: [{field: 'clientName', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'clientName',
      subtitle: 'company',
      quote: 'quote',
    },
    prepare(selection: {title?: string; subtitle?: string; quote?: string}) {
      const {title, subtitle, quote} = selection
      const truncatedQuote = quote && quote.length > 50 ? `${quote.slice(0, 50)}...` : quote
      return {
        title: title ?? 'Unknown',
        subtitle: subtitle ?? truncatedQuote ?? '',
      }
    },
  },
})
