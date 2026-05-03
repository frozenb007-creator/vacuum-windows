import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
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
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
