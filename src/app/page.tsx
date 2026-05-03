import Link from "next/link";

const features = [
  {
    title: "Дулаан тусгаарлалт",
    description:
      "Вакуум давхарга нь хий дамжуулдаггүй тул дулаан алдагдлыг 90% хүртэл бууруулдаг. U-value 0.4 хүртэл хүрнэ.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className="h-6 w-6"
      >
        <path d="M14 14.76V5a2 2 0 1 0-4 0v9.76a4 4 0 1 0 4 0Z" />
      </svg>
    ),
  },
  {
    title: "Дуу шуугиан тусгаарлалт",
    description:
      "Гадны дуу чимээг 35 dB-ээс илүү бууруулдаг. Хөл хөдөлгөөн ихтэй гудамжны барилгад тохиромжтой.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className="h-6 w-6"
      >
        <path d="M11 5 6 9H2v6h4l5 4V5Z" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      </svg>
    ),
  },
  {
    title: "Удаан эдэлгээ",
    description:
      "25 жилийн ашиглалтын баталгаа. Чанартай уян хатан хайс, тусгай битүүмжлэгчтэй.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className="h-6 w-6"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "Эко-найрсаг",
    description:
      "Эрчим хүчний хэрэглээ багасснаар жилд 1 м²-аас 30 кг хүртэл CO₂ ялгаралт буурдаг.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className="h-6 w-6"
      >
        <path d="M21 3c-7 0-13 6-13 13a8 8 0 0 0 8 8c7 0 13-6 13-13" />
        <path d="M5 19c2-7 7-12 14-13" />
      </svg>
    ),
  },
];

const productPreview = [
  {
    title: "Орон сууцны цонх",
    description:
      "Айл өрхөд зориулсан стандарт болон тусгай хэмжээний вакуум цонх. Дулаан, дуу тусгаарлалт өндөр.",
    href: "/products#residential",
  },
  {
    title: "Арилжаа & оффис",
    description:
      "Том талбайн шилэн фасад, давхар жаазтай шийдэл. Энерги хэмнэлтийг тооцох мэргэжлийн тооцоо.",
    href: "/products#commercial",
  },
  {
    title: "Үйлдвэрийн объект",
    description:
      "Цэвэр өрөө, лаборатори, тусгай нөхцөлийн орчинд тохирсон тэсвэртэй вакуум шил.",
    href: "/products#industrial",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0c2461] via-[#1e3a8a] to-[#38bdf8]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.5), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.3), transparent 45%)",
          }}
        />
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-sky-200">
            Вакуум шилэн цонхны үйлдвэр
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Дулаан, дуу, эрчим хүч —{" "}
            <span className="text-sky-200">бүгдийг нэг шилэнд</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-100/90">
            Уламжлалт давхар шилнээс <strong>4 дахин</strong> илүү
            тусгаарлалттай вакуум шилэн цонх. Орон сууц, арилжаа, үйлдвэрийн
            объект бүхэнд хэмжээгээр захиалж тохируулна.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
            >
              Бүтээгдэхүүн үзэх
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Үнийн санал авах
            </Link>
          </div>
          <dl className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { k: "U-value", v: "0.4" },
              { k: "Дуу тусгаарлалт", v: "35 dB+" },
              { k: "Эдэлгээ", v: "25+ жил" },
              { k: "Зузаан", v: "8.3 мм-ээс" },
            ].map((stat) => (
              <div key={stat.k} className="border-l border-white/30 pl-4">
                <dt className="text-xs uppercase tracking-wider text-sky-200">
                  {stat.k}
                </dt>
                <dd className="mt-1 text-2xl font-semibold text-white">
                  {stat.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Яагаад вакуум шилэн цонх вэ?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Уламжлалт хий дүүргэсэн давхар шилнээс ялгаатай нь шилний дунд
              <strong> вакуум зай </strong>үлдээж дулаан дамжуулалтыг бараг
              тэгд оруулсан технологи.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 hover:shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  {f.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products preview */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Шийдлүүд
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Жижиг айлын цонхноос эхлээд том фасад, үйлдвэрийн объект
                хүртэлх цар хүрээний шийдлүүд.
              </p>
            </div>
            <Link
              href="/products"
              className="text-sm font-semibold text-slate-900 hover:underline"
            >
              Бүх бүтээгдэхүүнийг үзэх →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {productPreview.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-slate-300 hover:shadow-md"
              >
                <div
                  aria-hidden
                  className="aspect-[4/3] bg-gradient-to-br from-[#0c2461] via-[#1e3a8a] to-[#38bdf8]"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-slate-600">
                    {p.description}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-slate-900 group-hover:underline">
                    Дэлгэрэнгүй →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-slate-900 px-8 py-14 sm:px-14">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Төслийнхөө хэмнэлтийг урьдчилан тооцуул
                </h2>
                <p className="mt-4 text-base text-slate-300">
                  Барилгынхаа цонхны хэмжээ, тоо ширхэгийг хэлмэгц жилийн эрчим
                  хүчний хэмнэлтийг тооцоод үнийн санал илгээнэ.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link
                  href="/contact"
                  className="rounded-md bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-sky-300"
                >
                  Холбоо барих
                </Link>
                <Link
                  href="/products"
                  className="rounded-md border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Бүтээгдэхүүн үзэх
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
