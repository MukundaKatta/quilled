import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quilled — Your newsletter. Ghostwritten.",
  description:
    "Tell us what happened this week. Wake up tomorrow to a full issue, in your voice, ready to send.",
  openGraph: {
    title: "Quilled — Your newsletter. Ghostwritten.",
    description:
      "Tell us what happened this week. Wake up tomorrow to a full issue, in your voice, ready to send.",
    images: [
      {
        url: "https://waitlist-api-sigma.vercel.app/api/og?title=Quilled&accent=indigo&category=Creator%20tools",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://waitlist-api-sigma.vercel.app/api/og?title=Quilled&accent=indigo&category=Creator%20tools",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-neutral-900 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
