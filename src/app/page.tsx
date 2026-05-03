import Link from "next/link";

const HERO_IMG =
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80&auto=format&fit=crop";

const FEATURED = [
  {
    rank: "1st",
    name: "VW-Home Premium",
    location: "Орон сууцны төсөл",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format&fit=crop",
  },
  {
    rank: "2nd",
    name: "VW-Office Curtain",
    location: "Арилжааны барилга",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop",
  },
  {
    rank: "3rd",
    name: "VW-Industrial Clean",
    location: "Үйлдвэрийн объект",
    img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80&auto=format&fit=crop",
  },
  {
    rank: "4th",
    name: "VW-Storefront",
    location: "Дэлгүүр / олон нийт",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80&auto=format&fit=crop",
  },
];

const COLLAGE = [
  "https://images.unsplash.com/photo-1564540583246-934409427776?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1554435517-cf3c19f1e252?w=600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&q=80&auto=format&fit=crop",
];

const BOTTOM_IMG =
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80&auto=format&fit=crop";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={HERO_IMG}
          alt="Орчин үеийн шилэн фасадтай барилга"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/80"
        />

        <div className="mx-auto max-w-7xl px-4 pt-32 pb-16 sm:px-6 sm:pt-40 lg:px-8 lg:pt-48 lg:pb-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_220px]">
            {/* Left: headline + body + CTA */}
            <div>
              <h1 className="font-display text-7xl font-bold uppercase leading-[0.9] text-[var(--brand)] sm:text-8xl lg:text-[10rem]">
                Vacuum
                <br />
                Windows
              </h1>

              <div className="mt-10 grid max-w-2xl gap-6 text-sm leading-relaxed text-white/85 sm:grid-cols-2 sm:text-base">
                <p>
                  Орчин үеийн вакуум технологи нь дулаан алдагдлыг
                  <strong className="text-white"> 90% хүртэл </strong>
                  бууруулдаг. Орон сууц, арилжаа, үйлдвэрийн төсөл бүхэнд
                  тохирно.
                </p>
                <p>
                  6+ төрлийн бүтээгдэхүүн, U-value{" "}
                  <strong className="text-white">0.4</strong>-ээс эхэлж, 25+
                  жилийн ашиглалтын баталгаатай.
                </p>
              </div>

              <div className="mt-10">
                <Link href="/contact" className="pill">
                  Үнэ авах
                </Link>
              </div>
            </div>

            {/* Right: vertical menu + recommended pill */}
            <div className="flex flex-col items-start gap-8 lg:items-end">
              <ul className="space-y-3 text-sm font-medium text-white/85">
                <li className="flex items-center gap-3">
                  <Link href="/contact" className="hover:text-white">
                    Захиалга
                  </Link>
                  <span className="block h-px w-10 bg-white/40" />
                </li>
                <li className="flex items-center gap-3">
                  <Link href="/products" className="hover:text-white">
                    Бүтээгдэхүүн
                  </Link>
                  <span className="block h-px w-10 bg-white/40" />
                </li>
                <li className="flex items-center gap-3">
                  <Link href="/contact" className="hover:text-white">
                    Үнэ
                  </Link>
                  <span className="block h-px w-10 bg-white/40" />
                </li>
                <li className="flex items-center gap-3">
                  <Link href="/about" className="hover:text-white">
                    Тухай
                  </Link>
                  <span className="block h-px w-10 bg-white/40" />
                </li>
              </ul>

              <Link
                href="/products"
                className="pill max-w-[14rem] text-center leading-tight"
              >
                Санал болгох
                <br />
                бүтээгдэхүүн
                <ArrowOut />
              </Link>
            </div>
          </div>
        </div>

        {/* FEATURED PROJECT CARDS — overlap hero bottom */}
        <div className="relative z-10">
          <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {FEATURED.map((p) => (
                <article key={p.rank} className="group">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
                    />
                    <span className="absolute left-3 top-2 font-display text-3xl font-bold uppercase leading-none text-[var(--brand)] sm:text-4xl">
                      {p.rank}
                    </span>
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-white">
                    {p.name}
                  </h3>
                  <p className="text-xs text-white/60">{p.location}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY + EXPLORE */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left text */}
            <div>
              <h2 className="font-display text-2xl font-semibold uppercase text-[var(--brand)] sm:text-3xl">
                Яагаад вакуум шил вэ?
              </h2>
              <div className="mt-8 space-y-6 text-sm leading-relaxed text-white/80 sm:text-base">
                <p>
                  Уламжлалт хий дүүргэсэн давхар шилнээс ялгаатай нь шилний дунд
                  <strong className="text-white"> вакуум зай </strong>
                  үлдээж дулаан дамжуулалтыг бараг тэгд оруулсан технологи.
                  Үүний үр дүнд жилийн халаалтын зардал 30–60% хүртэл буурдаг.
                </p>
                <p>
                  Дуу шуугианыг 35 dB-ээс илүү бууруулдаг тул хөл хөдөлгөөн
                  ихтэй гудамжны барилгад тохиромжтой. Хайс нь зэвэрдэггүй,
                  битүүмж нь чийгийг үл нэвтрүүлэх тул 25 жил тогтвортой ажилдаг.
                </p>
                <p>
                  Эрчим хүчний хэрэглээ багасснаар жилд 1 м²-аас 30 кг хүртэл
                  CO₂ ялгаралт буурч, тогтвортой барилгын стандартыг (LEED, BREEAM)
                  хангахад чухал хувь нэмэр болдог.
                </p>
              </div>
              <Link href="/contact" className="pill mt-10 inline-flex">
                Холбоо барих
                <ArrowOut />
              </Link>
            </div>

            {/* Right: Big EXPLORE + collage */}
            <div className="relative">
              <h2 className="font-display text-7xl font-bold uppercase leading-[0.9] text-[var(--brand)] sm:text-8xl lg:text-9xl">
                Шийдэл
                <br />
                Хайх
              </h2>

              <div className="mt-10 grid grid-cols-3 gap-3">
                {COLLAGE.map((src, i) => (
                  <div
                    key={src}
                    className={`overflow-hidden rounded-lg ${
                      i === 1 ? "translate-y-6" : ""
                    }`}
                  >
                    <img
                      src={src}
                      alt="Шилэн цонхны жишээ"
                      className="aspect-[3/4] w-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <Link
                href="/products"
                className="pill absolute bottom-4 right-4 shadow-lg"
              >
                Илүү харах
                <SearchIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM BANNER WITH FIND OUT */}
      <section className="relative overflow-hidden">
        <img
          src={BOTTOM_IMG}
          alt="Шилэн фасадтай орчин үеийн барилга"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-r from-black/60 via-black/30 to-black/10"
        />
        <div className="mx-auto max-w-7xl px-4 py-32 sm:px-6 sm:py-40 lg:px-8">
          <Link href="/contact" className="pill">
            Холбоо барих
            <ArrowOut />
          </Link>
        </div>
      </section>
    </>
  );
}

function ArrowOut() {
  return (
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
  );
}

function SearchIcon() {
  return (
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
