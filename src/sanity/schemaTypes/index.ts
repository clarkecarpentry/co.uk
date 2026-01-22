import {type SchemaTypeDefinition} from 'sanity'

import {blockContent} from './blockContent'
import {blogPost} from './blogPost'
import {project} from './project'
import {service} from './service'
import {siteSettings} from './siteSettings'
import {testimonial} from './testimonial'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [
    // Content types
    service,
    project,
    blogPost,
    testimonial,

    // Settings
    siteSettings,

    // Reusable types
    blockContent,
  ],
}
