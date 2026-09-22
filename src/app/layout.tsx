import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Our Wings Group | Global Talent. Brighter Futures.",
  description:
    "Connecting skilled professionals from India with verified international opportunities and helping global employers build dependable workforces.",
  keywords: [
    "Our Wings Group",
    "Global Talent",
    "International Careers",
    "Overseas Recruitment",
    "MEA Approved Agency",
    "Skilled Professionals India"
  ],
  authors: [{ name: "Our Wings Group" }],
};

export const viewport: Viewport = {
  themeColor: "#070a1e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable} ${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
