import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#FF6B2C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "UwillGet Digital | Digital Marketing, Branding & Online Growth",
  description:
    "UwillGet Digital helps businesses build and grow their online presence through social media management, content creation, branding, Google Business, digital advertising and website management.",
  keywords: [
    "digital marketing",
    "digital marketing India",
    "social media management",
    "social media marketing",
    "content creation",
    "branding services",
    "Google Business Profile",
    "Google Ads",
    "digital presence",
    "website management",
    "online marketing",
    "UwillGet Digital",
  ],
  authors: [{ name: "UwillGet Digital" }],
  creator: "UwillGet",
  publisher: "UwillGet Digital",
  metadataBase: new URL("https://digital.uwillget.com"),
  alternates: {
    canonical: "https://digital.uwillget.com",
  },
  openGraph: {
    title: "UwillGet Digital | Digital Marketing, Branding & Online Growth",
    description:
      "UwillGet Digital helps businesses build and grow their online presence through social media management, content creation, branding, Google Business, digital advertising and website management.",
    url: "https://digital.uwillget.com",
    siteName: "UwillGet Digital",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UwillGet Digital | Digital Marketing, Branding & Online Growth",
    description:
      "Build Your Presence. Reach Your Customers. Grow Your Business with UwillGet Digital.",
  },
  icons: {
    icon: "/uwillget_logo_complete.jpeg",
    shortcut: "/uwillget_logo_complete.jpeg",
    apple: "/uwillget_logo_complete.jpeg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/uwillget_logo_complete.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/uwillget_logo_complete.jpeg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
