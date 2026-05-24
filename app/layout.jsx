import "./globals.css";
import { Audiowide, Figtree, Oxanium } from "next/font/google";
import { Providers } from "./Providers";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });
const audiowide = Audiowide({ subsets: ["latin"], weight: "400", variable: "--font-audiowide" });
const oxanium = Oxanium({ subsets: ["latin"], variable: "--font-oxanium" });

export const metadata = {
  title: "Al Mahmud | Full Stack Developer",
  description: "Full Stack MERN Developer from Dhaka, Bangladesh. Building fast, scalable and modern web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${figtree.variable} ${audiowide.variable} ${oxanium.variable} font-figtree bg-background antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
