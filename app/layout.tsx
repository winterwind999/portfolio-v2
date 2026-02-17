import { ThemeProvider } from "@/components/theme-provider";
import { DOMAIN } from "@/data/constants";
import type { Metadata } from "next";
import { Golos_Text } from "next/font/google";
import "./globals.css";

const golosText = Golos_Text({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jordan Faciol | Software Engineer",
  description:
    "Jordan G. Faciol is a Software Engineer specializing in Typescript, Node.js, NextJS, React, Next.js, Spring Boot, and modern web technologies. View tech stack, projects, and experiences.",
  keywords: [
    "Jordan Faciol",
    "Jordan G. Faciol",
    "Jordan Faciol Portfolio",
    "Software Engineer Philippines",
    "Full Stack Developer Philippines",
    "Typescript Developer",
    "Node.js Developer",
    "React Developer",
    "Next.js Developer",
    "Spring Boot Developer",
  ],
  authors: [{ name: "Jordan G. Faciol" }],
  creator: "Jordan G. Faciol",
  metadataBase: new URL(DOMAIN),
  openGraph: {
    title: "Jordan Faciol | Software Engineer",
    description: "Portfolio of Jordan G. Faciol – Software Engineer",
    url: DOMAIN,
    siteName: "Jordan Faciol Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jordan Faciol | Software Engineer",
    description:
      "Software Engineer specializing in Typescript, Node.js, NextJS, React, Next.js, Spring Boot, and modern web technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${golosText.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
