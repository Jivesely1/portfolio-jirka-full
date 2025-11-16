import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

// 👇 Import všech schémat z /schemas/index.ts
import { schemaTypes } from './schemas'

// ✅ Hlavní konfigurace Sanity CMS
export default defineConfig({
  name: 'default',
  title: 'Portfolio Jirka CMS',

  projectId: 'sjl39asi', // 👈 tvé Sanity project ID
  dataset: 'production', // 👈 dataset (máš správně)

  // Pluginy pro strukturu a Vision (dotazy, náhledy dat)
  plugins: [structureTool(), visionTool()],

  // Registrace všech typů z /schemas
  schema: {
    types: schemaTypes,
  },

  // 👇 Nepovinné, ale praktické – URL pro náhledy / preview
  document: {
    // Ukázka: umožní snadno přidat preview do frontendu
    productionUrl: async (prev, context) => {
      const { document } = context
      if (document._type === 'project') {
        return `https://portfolio-jirka-frontend.vercel.app/project/${document._id}`
      }
      return prev
    },
  },
})
