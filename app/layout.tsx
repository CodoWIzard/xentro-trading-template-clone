import type { Metadata } from "next";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://xentro-trading-template-clone.vercel.app"),
  title: {
    default: "Mind Your Trades | Futures Trading Room, Courses and Indicators",
    template: "%s | MYT"
  },
  description:
    "Mind Your Trades helps futures traders build a repeatable process through courses, indicators, live market context, coaching, and review.",
  openGraph: {
    title: "Mind Your Trades | Futures Trading Room, Courses and Indicators",
    description:
      "Courses, indicators, live market context, coaching, and review for futures traders building a repeatable process.",
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
