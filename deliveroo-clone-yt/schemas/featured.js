import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Menu categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Featured Category name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'short description',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'restaurants', // Update the field name to "restaurants"
      type: 'array',
      title: 'Restaurants',
      of: [
        {
          type: 'reference',
          to: [{type: 'restaurant'}], // Reference to the 'restaurant' schema
        },
      ],
    }),
  ],
})
