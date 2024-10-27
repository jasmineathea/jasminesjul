import {defineField, defineType} from 'sanity'

export const gift = defineType({
  name: 'gift',
  title: 'Wishlist',
  type: 'document',
  fields: [
    defineField({
        name: 'name',
        type: 'string',
    }),
    defineField({
        name: 'type',
        type: 'string',
    }),
    defineField({
        name: 'color',
        type: 'string',
    }),
    defineField({
        name: 'image',
        type: 'image',
    }),
    defineField({
        name: 'link',
        type: 'url',
    }),
    defineField({
        name: 'comments',
        type: 'string',
    }),
  ],
})
