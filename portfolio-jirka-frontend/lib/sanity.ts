import { createClient } from "next-sanity";

console.log("PROJECT_ID:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
console.log("DATASET:", process.env.NEXT_PUBLIC_SANITY_DATASET);

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-10-01",
  useCdn: true,
});


// 📦 Typy dat
export interface SanityProject {
  _id: string;
  title: string;
  description: string;
  imageUrl?: string;
  slug?: { current: string };
}

export interface SanityService {
  _id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface SanityReference {
  _id: string;
  name: string;
  text: string;
  company?: string;
}

export interface SanitySkill {
  _id: string;
  name: string;
  icon?: string;
}

// 📡 Projekty
export async function getProjects(): Promise<SanityProject[]> {
  try {
    return await client.fetch(`
      *[_type == "project"]{
        _id,
        title,
        description,
        slug,
        "imageUrl": coalesce(image.asset->url, "")
      } | order(_createdAt desc)
    `);
  } catch (e) {
    console.error("❌ Chyba při načítání projektů:", e);
    return [];
  }
}

// 📡 Služby
export async function getServices(): Promise<SanityService[]> {
  try {
    return await client.fetch(`
      *[_type == "service"]{
        _id,
        title,
        description,
        icon
      } | order(_createdAt desc)
    `);
  } catch (e) {
    console.error("❌ Chyba při načítání služeb:", e);
    return [];
  }
}

// 📡 Reference
export async function getReferences(): Promise<SanityReference[]> {
  try {
    return await client.fetch(`
      *[_type == "testimonial"]{
        _id,
        name,
        text,
        company
      } | order(_createdAt desc)
    `);
  } catch (e) {
    console.error("❌ Chyba při načítání referencí:", e);
    return [];
  }
}

// 📡 Dovednosti
export async function getSkills(): Promise<SanitySkill[]> {
  try {
    return await client.fetch(`
      *[_type == "skill"]{
        _id,
        name,
        icon
      } | order(_createdAt desc)
    `);
  } catch (e) {
    console.error("❌ Chyba při načítání dovedností:", e);
    return [];
  }
}
