import type { Metadata } from "next";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://xentro-trading-template-clone.vercel.app"),
  title: {
    default: "Mind Your Trades | Futures Trading Mindset Coaching and Tools",
    template: "%s | MYT"
  },
  description:
    "Mind Your Trades helps futures traders improve discipline, mindset, and rule-following through 1:1 coaching, intent-engine tools, and Whop access.",
  openGraph: {
    title: "Mind Your Trades | Futures Trading Mindset Coaching and Tools",
    description:
      "1:1 coaching, mindset-first trading tools, and Whop access for futures traders building discipline and better execution habits.",
    images: ["/images/myt-precision-edge.png"],
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="/brand/myt-mark.png" rel="shortcut icon" type="image/png" />
        <link href="/brand/myt-mark.png" rel="apple-touch-icon" />
      </head>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
