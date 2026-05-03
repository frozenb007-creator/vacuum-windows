import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Vacuum Window — Үнэ цэнэт вакуум шилэн цонхны үйлдвэр",
    template: "%s | Vacuum Window",
  },
  description:
    "Дулааны алдагдлыг 90% хүртэл бууруулдаг орчин үеийн вакуум шилэн цонх. Орон сууц, арилжааны барилга, үйлдвэрийн төсөл бүхэнд тохирно.",
  keywords: [
    "вакуум цонх",
    "vacuum window",
    "vacuum glazing",
    "энерги хэмнэлт",
    "дулаан тусгаарлалт",
    "цонх үйлдвэрлэл",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="mn"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
