import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Тухай",
  description:
    "Vacuum Window — орчин үеийн вакуум шилэн цонхны үйлдвэр. Энерги хэмнэлт, удаан эдэлгээ, чанар.",
};

const stats = [
  { k: "Жилийн туршлага", v: "—" },
  { k: "Хэрэгжүүлсэн төсөл", v: "—" },
  { k: "Орц / м²", v: "—" },
  { k: "Ажилчдын тоо", v: "—" },
];

const values = [
  {
    title: "Чанар",
    description:
      "Олон улсын стандарт (ISO, EN-1279) хангасан түүхий эд, технологи. Нэг бүрчилсэн шалгалттай.",
  },
  {
    title: "Энерги хэмнэлт",
    description:
      "Хэрэглэгчийн жилийн халаалтын зардлыг 30–60% хүртэл бууруулдаг шийдлийг санал болгоно.",
  },
  {
    title: "Хариуцлага",
    description:
      "25 жилийн ашиглалтын баталгаа, угсралтын дараах үйлчилгээний дэмжлэг бүхий бүрэн пакет.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.25em] text-white/60">
            Тухай
          </p>
          <h1 className="mt-3 font-display text-5xl font-bold uppercase leading-[0.9] text-[var(--brand)] sm:text-6xl lg:text-7xl">
            Илүү дулаан
            <br />
            Илүү тогтвортой
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
            Vacuum Window нь Монголын барилгын салбарт зориулсан вакуум шилэн
            цонхны үйлдвэрлэгч. Манай зорилго бол барилгын дулааны алдагдлыг
            эрс бууруулж, хүйтэн өвөл, халуун зунд илүү тав тухтай орчин
            бүрдүүлэх явдал юм.
          </p>
          <p className="mt-3 max-w-3xl text-sm italic text-white/50">
            (Энэ бол түр зуурын text — компанийн жинхэнэ танилцуулга,
            түүхийг та өгсөний дараа нэмнэ.)
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold uppercase text-[var(--brand)] sm:text-3xl">
            Тоон үзүүлэлт
          </h2>
          <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.k}
                className="rounded-2xl border border-white/10 bg-zinc-950 p-6"
              >
                <dt className="text-xs uppercase tracking-wider text-white/60">
                  {s.k}
                </dt>
                <dd className="mt-2 font-display text-4xl font-bold text-white">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold uppercase text-[var(--brand)] sm:text-3xl">
            Үнэт зүйлс
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-white/10 bg-black p-6"
              >
                <h3 className="font-display text-lg font-semibold uppercase text-white">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 px-8 py-12 sm:px-12">
            <h2 className="font-display text-3xl font-bold uppercase text-white sm:text-4xl">
              Хамтран ажиллах
              <br />
              сонирхолтой юу?
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-white/70 sm:text-base">
              Архитектор, барилгын ерөнхий гүйцэтгэгч, хувийн өрхүүдтэй адил
              ажиллана.
            </p>
            <Link href="/contact" className="pill mt-8 inline-flex">
              Холбоо барих
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
                className="h-4 w-4"
              >
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
