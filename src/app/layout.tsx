import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AfriConnect — Websites, Systems & Business Technology",
  description:
    "Websites, online stores, business systems and managed technology for growing South African businesses, with brand and production under one roof.",
  icons: {
    icon: [{ url: "/logo-icon.png", type: "image/png" }],
    apple: "/logo-icon.png",
  },
  openGraph: {
    title: "AfriConnect — Websites, Systems & Business Technology",
    description:
      "Websites, online stores, business systems and managed technology—built and supported by one team in Vosloorus.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`}>
      <body className="font-body">
        <Nav />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
