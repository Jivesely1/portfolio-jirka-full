"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Odesílám...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Zpráva odeslána (demo) ✅ – e-mail zatím nikam neodchází.");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Něco se nepovedlo ❌");
      }
    } catch (err) {
      console.error(err);
      setStatus("Chyba připojení ❌");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto flex flex-col gap-4 text-left"
    >
      <input
        type="text"
        name="name"
        placeholder="Jméno"
        value={form.name}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg p-3"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={form.email}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg p-3"
        required
      />
      <textarea
        name="message"
        placeholder="Zpráva"
        rows={5}
        value={form.message}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg p-3"
        required
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white font-semibold rounded-lg py-3 hover:bg-indigo-700 transition"
      >
        Odeslat
      </button>
      {status && (
        <p className="text-center text-sm text-gray-700 mt-2">{status}</p>
      )}
    </form>
  );
}
