import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonial', // ✅ změněno z "reference"
  title: 'Reference',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Jméno klienta', type: 'string' }),
    defineField({ name: 'text', title: 'Text reference', type: 'text' }),
    defineField({ name: 'company', title: 'Společnost', type: 'string' }),
  ],
})
