import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dileepa Ashen | Software Engineer & Full-Stack Developer",
  description:
    "Cosmic Systems Engineer — Designing and building impactful digital systems inspired by mathematics, astrophysics, and the complexity of the universe. University of Moratuwa undergraduate, full-stack developer, and startup co-founder.",
  keywords: [
    "Dileepa Ashen",
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "University of Moratuwa",
    "Portfolio",
  ],
  authors: [{ name: "Dileepa Ashen" }],
  openGraph: {
    title: "Dileepa Ashen | Software Engineer & Full-Stack Developer",
    description:
      "Cosmic Systems Engineer — Building impactful digital systems at the intersection of engineering and scientific curiosity.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dileepa Ashen | Software Engineer",
    description:
      "Cosmic Systems Engineer — Building impactful digital systems.",
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
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="min-h-full flex flex-col noise-overlay">
        {children}
      </body>
    </html>
  );
}
