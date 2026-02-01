import {defineField, defineType} from 'sanity'

/**
 * Site Settings - singleton document for company info and global settings.
 * Contains contact details, social links, and other site-wide configuration.
 */
export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      validation: (rule) => rule.required(),
      initialValue: 'Clarke Carpentry Contractors Ltd',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Company tagline or slogan',
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      description: 'Default meta description for SEO',
      rows: 3,
    }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'address',
          title: 'Address',
          type: 'text',
          rows: 2,
          initialValue:
            'Unit 5 Wansdyke Workshops, Unity Road, Keynsham, Bristol BS31 1NH',
        },
        {
          name: 'phone',
          title: 'Office Phone',
          type: 'string',
          initialValue: '01225 350376',
        },
        {
          name: 'mobile',
          title: 'Mobile',
          type: 'string',
          initialValue: '07540 150412',
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
          initialValue: 'info@clarkecarpentry.co.uk',
        },
      ],
    }),
    defineField({
      name: 'social',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        {
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url',
        },
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url',
        },
        {
          name: 'linkedin',
          title: 'LinkedIn URL',
          type: 'url',
        },
        {
          name: 'twitter',
          title: 'Twitter/X URL',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'serviceAreas',
      title: 'Service Areas',
      type: 'array',
      description: 'Locations served',
      of: [{type: 'string'}],
      initialValue: ['Bristol', 'Bath', 'South West England'],
    }),
    defineField({
      name: 'accreditations',
      title: 'Accreditations',
      type: 'array',
      description: 'Industry accreditations and certifications',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Name'},
            {name: 'logo', type: 'image', title: 'Logo'},
          ],
          preview: {
            select: {
              title: 'name',
              media: 'logo',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
        subtitle: 'Company information and global settings',
      }
    },
  },
})
