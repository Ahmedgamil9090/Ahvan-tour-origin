import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

// Метаданные теперь более универсальные
export const metadata: Metadata = {
  title: "AhVan Tour | Excursions in Hurghada & Egypt",
  description: "Book unforgettable excursions in Hurghada: Safari, Luxor, Sea trips and Transfers across Egypt.",
  verification: {
    google: "9w3HX9ey_aM2pcTfarS5YDekH32AfguhSDF66YJhIhY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Убираем жесткую привязку к "ru", чтобы браузеры не конфликтовали при переключении
    <html>
      <body className={inter.className}>{children}<Analytics /></body>
    </html>
  );
}