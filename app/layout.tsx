import type { Metadata } from "next";
import ThemeProvider from "@/components/theme/ThemeProvider";
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

export const metadata: Metadata = {
  // metadataBase: new URL("https://devatlas.vercel.app"),

  title: {
    default: "DevAtlas — Learn. Build. Master.",
    template: "%s | DevAtlas",
  },

  description:
    "DevAtlas is a structured learning platform for developers. Learn programming, web development, databases, DevOps and more.",

  keywords: [
    "DevAtlas",
    "programming",
    "web development",
    "JavaScript",
    "React",
    "TypeScript",
    "Node.js",
    "programming notes",
    "developer learning",
  ],

  authors: [
    {
      name: "DevAtlas",
    },
  ],

  openGraph: {
    title: "DevAtlas — Learn. Build. Master.",
    description:
      "Structured notes and learning paths for modern developers.",
    type: "website",
    siteName: "DevAtlas",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}