import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallBackWidget from "@/components/CallBackWidget";

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
  title: "Our Wings Overseas | Global Talent. Brighter Futures.",
  description:
    "Connecting skilled professionals from India with verified international opportunities and helping global employers build dependable workforces.",
  keywords: [
    "Our Wings Overseas",
    "Global Talent",
    "International Careers",
    "Overseas Recruitment",
    "Global Recruitment Agency",
    "Skilled Professionals India"
  ],
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  authors: [{ name: "Our Wings Overseas" }],
};

export const viewport: Viewport = {
  themeColor: "#070a1e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable} ${inter.variable} ${playfair.variable}`}>
      <body>
        {children}
        <WhatsAppButton />
        <CallBackWidget />
      </body>
    </html>
  );
}
