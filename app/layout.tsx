import type { Metadata } from "next";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://xentro-trading-template-clone.vercel.app"),
  title: {
    default: "Mind Your Trades | Futures Trading Learning, Tools and Coaching",
    template: "%s | MYT"
  },
  description:
    "Mind Your Trades helps futures traders understand market conditions, build a repeatable trading process, and master execution through learning, tools, and coaching.",
  openGraph: {
    title: "Mind Your Trades | Futures Trading Learning, Tools and Coaching",
    description:
      "Learning, TradingView tools, and coaching for futures traders building market context, better conditions, and disciplined execution.",
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
