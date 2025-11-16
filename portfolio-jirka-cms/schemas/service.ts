import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Služby',
  type: 'document',
  fields: [
    defineField({ name: 'icon', title: 'Ikona (emoji)', type: 'string' }),
    defineField({ name: 'title', title: 'Název služby', type: 'string' }),
    defineField({ name: 'description', title: 'Popis', type: 'text' }),
  ],
})
