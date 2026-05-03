import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Холбоо барих",
  description:
    "Vacuum Window-той холбогдох. Утас, и-мэйл, хаяг, мессеж илгээх форм.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.25em] text-white/60">
            Холбоо барих
          </p>
          <h1 className="mt-3 font-display text-5xl font-bold uppercase leading-[0.9] text-[var(--brand)] sm:text-6xl lg:text-7xl">
            Тантай
            <br />
            ярилцахад бэлэн
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/75">
            Үнийн санал, техникийн зөвлөгөө, угсралтын асуудлаар манай багтай
            холбогдоорой.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact details */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-xl font-semibold uppercase text-white">
                Хэрхэн холбогдох вэ
              </h2>
              <dl className="mt-6 space-y-6 text-sm">
                <div>
                  <dt className="font-medium text-white">Утас</dt>
                  <dd className="mt-1 text-white/70">
                    <a href="tel:+97600000000" className="hover:text-white">
                      +976 0000-0000
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-white">И-мэйл</dt>
                  <dd className="mt-1 text-white/70">
                    <a
                      href="mailto:info@vacuumwindow.mn"
                      className="hover:text-white"
                    >
                      info@vacuumwindow.mn
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-white">Хаяг</dt>
                  <dd className="mt-1 text-white/70">
                    Улаанбаатар хот
                    <br />
                    (Дэлгэрэнгүй хаягийг таны мэдээллээр нэмнэ)
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-white">Ажлын цаг</dt>
                  <dd className="mt-1 text-white/70">
                    Даваа – Баасан: 09:00 – 18:00
                    <br />
                    Бямба: 10:00 – 14:00
                  </dd>
                </div>
              </dl>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form className="rounded-2xl border border-white/10 bg-zinc-950 p-6 sm:p-8">
                <h2 className="font-display text-xl font-semibold uppercase text-white">
                  Мессеж илгээх
                </h2>
                <p className="mt-2 text-sm text-white/50">
                  (Одоохондоо зөвхөн загвар — backend дараа холбоно.)
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field label="Овог нэр" name="name" required />
                  <Field
                    label="Утасны дугаар"
                    name="phone"
                    type="tel"
                    required
                  />
                  <div className="sm:col-span-2">
                    <Field label="И-мэйл" name="email" type="email" />
                  </div>
                  <div className="sm:col-span-2">
                    <Field
                      label="Сонирхож буй бүтээгдэхүүн"
                      name="product"
                      placeholder="Жишээ нь: VW-Home Premium"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white"
                    >
                      Мессеж
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="mt-2 w-full rounded-md border border-white/15 bg-black/50 px-3 py-2 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/30"
                      placeholder="Цонхны хэмжээ, тоо ширхэг, төслийн товч мэдээлэл..."
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled
                  className="pill mt-6 cursor-not-allowed opacity-60"
                  title="Backend холбохгүй учраас идэвхгүй"
                >
                  Илгээх
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-white">
        {label}
        {required && <span className="ml-0.5 text-[var(--brand)]">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-white/15 bg-black/50 px-3 py-2 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/30"
      />
    </div>
  );
}
