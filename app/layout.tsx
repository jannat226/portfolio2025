import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//Please replace placeholders with your content for SEO
export const metadata: Metadata = {
  title: "Next.js portfolio template",
  description:
    "A next.js portfolio template for students to easily deploy and share more about themselves",
  icons: {
    //icon displayed in the browser tab and bookmarks
    icon: "favicon.ico",
  },
  //openGraph is used by platforms like Facebook, LinkedIn, and others to generate link previews when sharing a page.
  openGraph: {
    title: "Next.js portfolio template",
    description:
      "A next.js portfolio template for students to easily deploy and share more about themselves",
    url: "https://next-portfolio-template-og.vercel.app/",
    siteName: "Next.js portfolio template",
    images: [
      {
        url: "/template-images/next-template-image.png",
        width: 756,
        height: 440,
        alt: "portfolio-image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js portfolio template",
    description:
      "A next.js portfolio template for students to easily deploy and share more about themselves",
    images: ["/template-images/next-template-image.png"],
  },
};

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
        <main className="flex justify-center">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
