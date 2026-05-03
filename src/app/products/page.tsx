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
  img: string;
  specs: { label: string; value: string }[];
};

const products: Product[] = [
  {
    id: "residential",
    category: "Орон сууц",
    title: "VW-Home Standard",
    description:
      "Айл өрхийн стандарт цонх. Дулаан тусгаарлалт өндөр, тоосноос болон чийгээс хамгаалсан хайстай.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format&fit=crop",
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
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&auto=format&fit=crop",
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
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop",
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
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80&auto=format&fit=crop",
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
    img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80&auto=format&fit=crop",
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
    img: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80&auto=format&fit=crop",
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
      <section className="relative pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.25em] text-white/60">
            Бүтээгдэхүүн
          </p>
          <h1 className="mt-3 font-display text-5xl font-bold uppercase leading-[0.9] text-[var(--brand)] sm:text-6xl lg:text-7xl">
            Вакуум шилэн
            <br />
            цонхны жагсаалт
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/75">
            Орон сууц, арилжааны барилга, үйлдвэрийн объектод тохирсон 6+
            төрлийн шийдэл. Хэмжээгээр захиалга боломжтой.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {categories.map((c, i) => (
              <li
                key={c}
                className={
                  i === 0
                    ? "rounded-full bg-[var(--brand)] px-4 py-1.5 text-sm font-medium text-white"
                    : "rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-white/80"
                }
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <article
                key={p.id}
                id={p.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs uppercase tracking-wider text-white backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-display text-xl font-semibold uppercase text-white">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-sm text-white/70">{p.description}</p>
                  <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-white/10 pt-5 text-sm">
                    {p.specs.map((s) => (
                      <div key={s.label}>
                        <dt className="text-xs uppercase tracking-wide text-white/50">
                          {s.label}
                        </dt>
                        <dd className="mt-0.5 font-medium text-white">
                          {s.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center text-sm font-semibold text-[var(--brand)] hover:underline"
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
