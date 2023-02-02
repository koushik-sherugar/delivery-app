import {defineField, defineType, validation} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'category name',
      validation: (Rule) => {
        Rule.required()
      },
    },
    {
      name: 'image',
      type: 'image',
      title: 'image of category',
    },
  ],
})
