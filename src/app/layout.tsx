import type { Metadata } from "next";
import { Inter, Fragment_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { BottomBlurOverlay } from "@/components/layout/BottomBlurOverlay";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fragmentMono = Fragment_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fragment-mono",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MVPfast Studios – Web Design, Branding & Digital Growth",
  description: "Elevate your brand with expert web design, branding, and digital marketing. MVPfast Studios delivers strategic, high-performing solutions tailored to your business needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="lenis lenis-autoToggle" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          inter.variable,
          fragmentMono.variable,
          outfit.variable,
          "antialiased bg-background text-foreground font-sans"
        )}
      >
        <SmoothScroll>
          <Header />
          {children}
        </SmoothScroll>
        <BottomBlurOverlay />
      </body>
    </html>
  );
}
