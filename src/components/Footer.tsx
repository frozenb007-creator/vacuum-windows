import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-white/60">
          Terms &amp; Conditions &middot; Privacy &middot; &copy; {year} Vacuum Windows
        </p>

        <div className="flex items-center gap-4 text-white/70">
          <Link href="#" aria-label="Instagram" className="hover:text-white">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
            </svg>
          </Link>
          <Link href="#" aria-label="Facebook" className="hover:text-white">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2V8.6h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z" />
            </svg>
          </Link>
          <Link href="#" aria-label="Telegram" className="hover:text-white">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="m21.4 4.3-3 14.6c-.2 1-.8 1.3-1.7.8l-4.6-3.4-2.2 2.1c-.3.3-.5.5-1 .5l.3-4.7 8.5-7.7c.4-.3-.1-.5-.6-.2L6.6 12.1l-4.5-1.4c-1-.3-1-1 .2-1.5l17.6-6.8c.8-.3 1.5.2 1.5 1.4Z" />
            </svg>
          </Link>
        </div>

        <div className="flex items-center gap-2 font-display text-xs uppercase tracking-[0.2em] text-white/80">
          <span
            aria-hidden
            className="inline-block h-5 w-5 rounded-sm bg-[var(--brand)]"
          />
          <span>Vacuum Windows</span>
        </div>
      </div>
    </footer>
  );
}
