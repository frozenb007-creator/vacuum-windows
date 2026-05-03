import Link from "next/link";

const navLinks = [
  { href: "/", label: "Нүүр" },
  { href: "/products", label: "Бүтээгдэхүүн" },
  { href: "/about", label: "Тухай" },
  { href: "/contact", label: "Холбоо барих" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900">
          <span
            aria-hidden
            className="inline-block h-7 w-7 rounded-md bg-gradient-to-br from-[var(--brand)] to-[var(--brand-accent)]"
          />
          <span className="text-lg tracking-tight">Vacuum Window</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 md:inline-flex"
        >
          Үнийн санал авах
        </Link>
      </div>
    </header>
  );
}
