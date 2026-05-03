import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Холбоо барих",
  description:
    "Vacuum Window-той холбогдох. Утас, и-мэйл, хаяг, мессеж илгээх форм.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
            Холбоо барих
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Тантай ярилцахад бэлэн байна
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Үнийн санал, техникийн зөвлөгөө, угсралтын асуудлаар манай багтай
            холбогдоорой.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact details */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-slate-900">
                Хэрхэн холбогдох вэ
              </h2>
              <dl className="mt-6 space-y-6 text-sm">
                <div>
                  <dt className="font-medium text-slate-900">Утас</dt>
                  <dd className="mt-1 text-slate-600">
                    <a
                      href="tel:+97600000000"
                      className="hover:text-slate-900"
                    >
                      +976 0000-0000
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-900">И-мэйл</dt>
                  <dd className="mt-1 text-slate-600">
                    <a
                      href="mailto:info@vacuumwindow.mn"
                      className="hover:text-slate-900"
                    >
                      info@vacuumwindow.mn
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-900">Хаяг</dt>
                  <dd className="mt-1 text-slate-600">
                    Улаанбаатар хот
                    <br />
                    (Дэлгэрэнгүй хаягийг таны мэдээллээр нэмнэ)
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-900">Ажлын цаг</dt>
                  <dd className="mt-1 text-slate-600">
                    Даваа – Баасан: 09:00 – 18:00
                    <br />
                    Бямба: 10:00 – 14:00
                  </dd>
                </div>
              </dl>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-slate-900">
                  Мессеж илгээх
                </h2>
                <p className="mt-2 text-sm text-slate-500">
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
                    <Field
                      label="И-мэйл"
                      name="email"
                      type="email"
                    />
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
                      className="block text-sm font-medium text-slate-900"
                    >
                      Мессеж
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                      placeholder="Цонхны хэмжээ, тоо ширхэг, төслийн товч мэдээлэл..."
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled
                  className="mt-6 inline-flex cursor-not-allowed items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white opacity-50"
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
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-900"
      >
        {label}
        {required && <span className="ml-0.5 text-rose-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
      />
    </div>
  );
}
