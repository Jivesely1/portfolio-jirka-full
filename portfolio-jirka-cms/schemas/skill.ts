import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Technologie (Skill)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Název technologie',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(50),
    }),
    defineField({
      name: 'emoji',
      title: 'Emoji ikona',
      type: 'string',
      description: 'Např. ⚛️ 💡 🎨 ⚙️',
      validation: (Rule) => Rule.required().max(2),
    }),
    defineField({
      name: 'category',
      title: 'Kategorie',
      type: 'string',
      options: {
        list: [
          { title: 'Frontend', value: 'frontend' },
          { title: 'Backend', value: 'backend' },
          { title: 'Databáze', value: 'database' },
          { title: 'Nástroje / DevOps', value: 'tools' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
