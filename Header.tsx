import Link from "next/link";
export default function Header() {
  return <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
    <Link href="/" className="text-lg font-extrabold tracking-[.22em]">NEURO<span className="text-rose-500">.</span>INVITE</Link>
    <nav className="flex items-center gap-5 text-sm text-stone-600"><Link href="/templates">Шаблоны</Link><Link href="/editor">Конструктор</Link><a href="#pricing">Цены</a></nav>
  </header>;
}
