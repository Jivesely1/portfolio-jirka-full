import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "Portfolio Jirka CMS",

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "",
  dataset: process.env.SANITY_STUDIO_DATASET || "",

  basePath: "/",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  document: {
    productionUrl: async (prev, context) => {
      const { document } = context;

      if (document._type === "project") {
        return `https://portfolio-jirka-frontend.vercel.app/projekty/${document._id}`;
      }

      return prev;
    },
  },
});
