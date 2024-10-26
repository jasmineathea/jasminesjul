import type { Metadata } from "next";
import "./globals.css";
import { Abril_Fatface } from "next/font/google";

const abril = Abril_Fatface({subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Jasmines jul 🎁",
  description: "en digital ønskeliste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className={abril.className}>{children}</body>
    </html>
  );
}
