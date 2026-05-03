import Link from "next/link";

const navLinks = [
  { href: "/", label: "Нүүр" },
  { href: "/products", label: "Бүтээгдэхүүн" },
  { href: "/about", label: "Тухай" },
  { href: "/contact", label: "Холбоо" },
];

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-white/90"
        >
          Vacuum &middot; Windows
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <label className="relative">
            <span className="sr-only">Хайх</span>
            <input
              type="search"
              placeholder="Search"
              className="w-44 rounded-full bg-white/95 px-4 py-2 pr-10 text-sm text-slate-900 outline-none ring-0 placeholder:text-slate-500 focus:bg-white"
            />
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </label>
        </div>
      </div>
    </header>
  );
}
