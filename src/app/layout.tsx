import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FabMotif - Boost Your Brand with Social Media Design",
  description: "Premium graphics, content calendars & performance reports for your social media success. Professional design agency specializing in social media branding.",
  keywords: ["social media design", "content calendar", "brand design", "performance reports", "creative agency"],
  authors: [{ name: "FabMotif Creative Agency" }],
  openGraph: {
    title: "FabMotif - Creative Social Media Design Agency",
    description: "Transform your social media presence with premium designs, strategic content calendars, and detailed performance tracking.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${inter.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}