import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "@/app/globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Webgo",
  description: "Paginas webs gratis para quienes no tengan paginas webs y quieran crear o empezar su emprendimineto y creacion de websites profesionalesv
",
  themeColor: "#000000",
  openGraph: {
    title: "Webgo",
    description: "Paginas webs gratis para quienes no tengan paginas webs y quieran crear o empezar su emprendimineto y creacion de websites profesionalesv
",
    url: "https://webgo-1741223209632.vercel.app",
    images: [{ url: "/imagenes/opengraph-image.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${dmSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}