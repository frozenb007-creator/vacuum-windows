import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900">
            <span
              aria-hidden
              className="inline-block h-7 w-7 rounded-md bg-gradient-to-br from-[var(--brand)] to-[var(--brand-accent)]"
            />
            <span className="text-lg tracking-tight">Vacuum Window</span>
          </Link>
          <p className="mt-3 max-w-md text-sm text-slate-600">
            Дулаан тусгаарлалт өндөртэй вакуум шилэн цонхны үйлдвэрлэгч —
            орон сууц, арилжаа, үйлдвэрийн төсөлд зориулсан шийдлүүд.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">Хуудас</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link className="hover:text-slate-900" href="/products">
                Бүтээгдэхүүн
              </Link>
            </li>
            <li>
              <Link className="hover:text-slate-900" href="/about">
                Тухай
              </Link>
            </li>
            <li>
              <Link className="hover:text-slate-900" href="/contact">
                Холбоо барих
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">Холбоо</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Утас: +976 0000-0000</li>
            <li>И-мэйл: info@vacuumwindow.mn</li>
            <li>Хаяг: Улаанбаатар хот</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-4 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>&copy; {year} Vacuum Window. Бүх эрх хуулиар хамгаалагдсан.</p>
          <p>Made with Next.js · Hosted on Vercel</p>
        </div>
      </div>
    </footer>
  );
}
