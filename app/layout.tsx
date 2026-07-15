import type { Metadata } from "next";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://xentro-trading-template-clone.vercel.app"),
  title: {
    default: "MYT - Mind Your Trades",
    template: "%s | MYT"
  },
  description:
    "Mind Your Trades helps futures traders improve through livestreams, coaching, learning materials, and indicator-led market context.",
  openGraph: {
    title: "MYT - Mind Your Trades",
    description:
      "Livestreams, coaching, learning materials, and indicators for futures traders building a repeatable edge.",
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
