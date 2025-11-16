import { defineType, defineField } from "sanity";

export default defineType({
  name: "project",
  title: "Projekty",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Název projektu",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug (URL adresa)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      title: "Popis",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Obrázek",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
