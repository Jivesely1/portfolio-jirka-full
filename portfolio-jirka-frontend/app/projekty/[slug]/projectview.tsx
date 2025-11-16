'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function ProjectView({ project }: { project: any }) {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {project.imageUrl ? (
            <div className="mb-8 overflow-hidden rounded-2xl border border-gray-200 shadow">
              <Image
                src={project.imageUrl}
                alt={project.title || "Projekt"}
                width={1200}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
          ) : (
            <div className="mb-8 h-64 flex items-center justify-center bg-gray-100 rounded-2xl border border-gray-200 text-gray-400">
              Bez obrázku
            </div>
          )}

          <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">
            {project.title}
          </h1>

          <p className="text-gray-700 leading-relaxed text-lg mb-10">
            {project.description}
          </p>

          <Link
            href="/#portfolio"
            className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow hover:bg-indigo-700 transition"
          >
            ← Zpět na projekty
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
