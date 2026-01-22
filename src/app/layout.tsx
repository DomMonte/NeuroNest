import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Neuronest Psychology | Child Educational & ADHD Assessments Adelaide",
    template: "%s | Neuronest Psychology Adelaide"
  },
  description: "Specialist cognitive, psycho-educational, ADHD, and giftedness assessments for children in Adelaide. Unlock your child's learning potential.",
  keywords: ["Psycho-Educational Assessment", "ADHD Assessment", "Cognitive Assessment", "Child Psychologist Adelaide", "Dyslexia Testing", "Giftedness Assessment", "Neuronest"],
  openGraph: {
    title: "Neuronest Psychology Adelaide",
    description: "Understanding each child to unlock their potential. Comprehensive educational assessments.",
    url: "https://neuronestadl.com.au",
    siteName: "Neuronest Psychology",
    locale: "en_AU",
    type: "website",
  },
  icons: {
    icon: "/NeuroNest Logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Neuronest Psychology",
              "image": "https://neuronestadl.com.au/NeuroNest%20Logo.png",
              "description": "Specialist cognitive, psycho-educational, ADHD, and giftedness assessments for children.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Adelaide",
                "addressRegion": "SA",
                "addressCountry": "AU"
              },
              "priceRange": "$750 - $1800",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
