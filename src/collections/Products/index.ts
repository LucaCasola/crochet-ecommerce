import type { CollectionConfig } from 'payload'

import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'

export const Products: CollectionConfig = {
  slug: 'products',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'price',
      label: 'Price',
      type: 'number',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: false,
    },
    {
      name: 'images',
      label: 'Images',
      type: 'array',
      fields: [
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
      required: false,
    },
    {
      name: 'color',
      label: 'Colors',
      type: 'array',
      fields: [
        {
          name: 'color',
          label: 'Color',
          type: 'text',
        },
      ],
      required: false,
    },
    {
      name: 'published',
      label: 'Published',
      type: 'checkbox',
      defaultValue: true,
      required: true,
    },
  ],
  admin: {
    preview: (doc, { locale }) => {
      if (doc?.slug) {
        return `/${doc.slug}?locale=${locale}`
      }
      return null
    },
  },
}
