import "./globals.css";
import { Audiowide, Figtree, Oxanium } from "next/font/google";
import { Providers } from "./Providers";
import { ThemeProvider } from "next-themes";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });
const audiowide = Audiowide({ subsets: ["latin"], weight: "400", variable: "--font-audiowide" });
const oxanium = Oxanium({ subsets: ["latin"], variable: "--font-oxanium" });

export const metadata = {
  title: "Al Mahmud | Frontend Developer",
  description: "Frontend Developer from Bangladesh, building modern and responsive web applications with React and Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${figtree.variable} ${audiowide.variable} ${oxanium.variable} font-figtree bg-background antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}