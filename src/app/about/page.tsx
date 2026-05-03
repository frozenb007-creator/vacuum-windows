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
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
            Тухай
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Илүү дулаан, чимээгүй, тогтвортой барилгын ирээдүйг бүтээж байна
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Vacuum Window нь Монголын барилгын салбарт зориулсан вакуум шилэн
            цонхны үйлдвэрлэгч. Манай зорилго бол барилгын дулааны алдагдлыг
            эрс бууруулж, хүйтэн өвөл, халуун зунд илүү тав тухтай орчин
            бүрдүүлэх явдал юм.
          </p>
          <p className="mt-3 max-w-3xl text-base text-slate-500 italic">
            (Энэ бол түр зуурын text — компанийн жинхэнэ танилцуулга,
            түүхийг та өгсөний дараа нэмнэ.)
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Тоон үзүүлэлт
          </h2>
          <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.k}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <dt className="text-xs uppercase tracking-wider text-slate-500">
                  {s.k}
                </dt>
                <dd className="mt-2 text-3xl font-bold text-slate-900">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Үнэт зүйлс
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#0c2461] via-[#1e3a8a] to-[#38bdf8] px-8 py-12 text-white sm:px-12">
            <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
              Хамтран ажиллах сонирхолтой юу?
            </h2>
            <p className="mt-4 max-w-2xl text-base text-sky-100">
              Архитектор, барилгын ерөнхий гүйцэтгэгч, хувийн өрхүүдтэй адил
              ажиллана.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Холбоо барих →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
