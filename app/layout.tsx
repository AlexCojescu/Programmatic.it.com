import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/features/Footer";
import AvailabilityToast from "@/components/features/AvailibilityToast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- EDITED METADATA ---
export const metadata: Metadata = {
  // Your existing title and description are great!
  title: "Programmatic | AI Solutions for Business Growth & Efficiency",
  description: "Unlock exponential growth with Programmatic. Our AI-powered automation solutions are tailored to boost your efficiency, drive data-backed decisions, and give you a competitive edge. Get your free consultation.",
  
  // ADDED: Establishes the base URL for relative assets
  metadataBase: new URL('https://www.programmatic.it.com'), // <-- REPLACE WITH YOUR DOMAIN

  // ADDED: Open Graph tags for rich social media previews
  openGraph: {
    title: "Programmatic | AI Solutions for Business, Growth, & Efficiency",
    description: "Unlock exponential growth with Programmatic's AI-powered automation solutions.",
    url: 'https://www.programmatic.it.com', // <-- REPLACE WITH YOUR DOMAIN
    siteName: 'Programmatic',
    images: [
      {
        url: '/programmatic-socail-card.png', // This points to public/og-image.png
        width: 1200,
        height: 630,
        alt: 'Programmatic AI & Automation Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};
// --- END OF EDITS ---

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <main className="flex-13">
            {children}
            <AvailabilityToast />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}