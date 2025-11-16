import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-indigo-700">Jiří&nbsp;V.</div>
        <nav className="flex gap-5 text-sm text-gray-700">
          <Link href="/">Domů</Link>
          <Link href="/#projects">Projekty</Link>
          <Link href="/#contact">Kontakt</Link>
        </nav>
      </div>
    </header>
  );
}
