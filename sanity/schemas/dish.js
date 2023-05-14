import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'name of dish',
      validation: (Rule) => {
        Rule.required()
      },
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'short_description',
      validation: (Rule) => {
        Rule.max(200)
      },
    },
    {
      name: 'price',
      type: 'number',
      title: 'price of dish',
    },
    {
      name: 'image',
      type: 'image',
      title: 'image of the dish',
    },
  ],
})
