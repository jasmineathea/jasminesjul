import type { Metadata } from "next";
import "./globals.css";
import { Abril_Fatface, Roboto } from "next/font/google";

const abril = Abril_Fatface({ subsets: ["latin"], weight: "400" });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Jasmines jul 🎁",
  description: "En digital ønskeliste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className={`${abril.className} ${roboto.className}`}>
      <body>{children}</body>
    </html>
  );
}
