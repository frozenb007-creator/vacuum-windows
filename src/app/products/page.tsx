import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Бүтээгдэхүүн",
  description:
    "Орон сууц, арилжаа, үйлдвэрийн төсөлд зориулсан вакуум шилэн цонхны төрлүүд.",
};

type Product = {
  id: string;
  category: string;
  title: string;
  description: string;
  specs: { label: string; value: string }[];
};

const products: Product[] = [
  {
    id: "residential",
    category: "Орон сууц",
    title: "VW-Home Standard",
    description:
      "Айл өрхийн стандарт цонх. Дулаан тусгаарлалт өндөр, тоосноос болон чийгээс хамгаалсан хайстай.",
    specs: [
      { label: "U-value", value: "0.7 W/m²K" },
      { label: "Дуу тусгаарлалт", value: "32 dB" },
      { label: "Зузаан", value: "8.3 мм" },
      { label: "Хүрээ", value: "PVC / Хөнгөн цагаан" },
    ],
  },
  {
    id: "residential-premium",
    category: "Орон сууц",
    title: "VW-Home Premium",
    description:
      "Туйлын хүйтэн уур амьсгалд тохирсон гурван давхар вакуум шил. Тусгай Low-E бүрхүүлтэй.",
    specs: [
      { label: "U-value", value: "0.4 W/m²K" },
      { label: "Дуу тусгаарлалт", value: "37 dB" },
      { label: "Зузаан", value: "12 мм" },
      { label: "Хүрээ", value: "Хөнгөн цагаан / Мод" },
    ],
  },
  {
    id: "commercial",
    category: "Арилжаа & оффис",
    title: "VW-Office Curtain",
    description:
      "Оффисын фасадны том талбайн шилэн хана. Нарны халуунаас хамгаалах бүрхүүлтэй.",
    specs: [
      { label: "U-value", value: "0.6 W/m²K" },
      { label: "Дуу тусгаарлалт", value: "35 dB" },
      { label: "Хамгийн их хэмжээ", value: "2.4 × 3.6 м" },
      { label: "Хүрээ", value: "Curtain wall системтэй" },
    ],
  },
  {
    id: "commercial-shop",
    category: "Арилжаа & оффис",
    title: "VW-Storefront",
    description:
      "Дэлгүүр, ресторан, кафе зэргийн нүүрний шилэн хаалт. Дотогшоо харах талбай ил, дулаан хямсэг.",
    specs: [
      { label: "U-value", value: "0.7 W/m²K" },
      { label: "Дуу тусгаарлалт", value: "33 dB" },
      { label: "Хамгийн их хэмжээ", value: "2.0 × 3.0 м" },
      { label: "Хүрээ", value: "Хөнгөн цагаан" },
    ],
  },
  {
    id: "industrial",
    category: "Үйлдвэрийн объект",
    title: "VW-Industrial Clean",
    description:
      "Цэвэр өрөө, лабораторид зориулсан өндөр стандарттай вакуум шил. Тоос үл нэвтрэх битүүмжтэй.",
    specs: [
      { label: "U-value", value: "0.5 W/m²K" },
      { label: "Дуу тусгаарлалт", value: "38 dB" },
      { label: "Цэвэрлэгээ", value: "ISO Class 7 нийцтэй" },
      { label: "Хүрээ", value: "Зэвэрдэггүй ган" },
    ],
  },
  {
    id: "industrial-thermal",
    category: "Үйлдвэрийн объект",
    title: "VW-Industrial Thermal",
    description:
      "Хүйтэн агуулах, дулаан үйлдвэрлэлийн өрөөнд тохирсон халаалт-хүйтэн ялгаа тэсвэрлэх шил.",
    specs: [
      { label: "U-value", value: "0.4 W/m²K" },
      { label: "Температурын хязгаар", value: "−40°C – +120°C" },
      { label: "Зузаан", value: "14 мм" },
      { label: "Хүрээ", value: "Тусгай ган рам" },
    ],
  },
];

const categories = ["Бүгд", "Орон сууц", "Арилжаа & оффис", "Үйлдвэрийн объект"];

export default function ProductsPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
            Бүтээгдэхүүн
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Вакуум шилэн цонхны жагсаалт
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Орон сууц, арилжааны барилга, үйлдвэрийн объектод тохирсон 6+
            төрлийн шийдэл. Хэмжээгээр захиалга боломжтой.
          </p>
          {/* Category chips (display-only for now) */}
          <ul className="mt-8 flex flex-wrap gap-2">
            {categories.map((c, i) => (
              <li
                key={c}
                className={
                  i === 0
                    ? "rounded-full bg-slate-900 px-4 py-1.5 text-sm font-medium text-white"
                    : "rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm text-slate-700"
                }
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <article
                key={p.id}
                id={p.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <div
                  aria-hidden
                  className="aspect-[4/3] bg-gradient-to-br from-[#0c2461] via-[#1e3a8a] to-[#38bdf8]"
                />
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    {p.category}
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-slate-900">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate-600">{p.description}</p>
                  <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-slate-200 pt-5 text-sm">
                    {p.specs.map((s) => (
                      <div key={s.label}>
                        <dt className="text-xs uppercase tracking-wide text-slate-500">
                          {s.label}
                        </dt>
                        <dd className="mt-0.5 font-medium text-slate-900">
                          {s.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center text-sm font-semibold text-slate-900 hover:underline"
                  >
                    Үнийн санал авах →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
