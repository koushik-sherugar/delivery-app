import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurants',
  title: 'Restaurants',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'restaurant name',
      description: 'description',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'short description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'image of the restaurant',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'latitude of the restaurant',
    },
    {
      name: 'long',
      type: 'number',
      title: 'longitude of the restaurant',
    },
    {
      name: 'address',
      type: 'string',
      title: 'address of the restaurant',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'rating of the restaurant',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('please enter a value between 1 to 5'),
    },
    {
      name: 'type',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    },
  ],
})
