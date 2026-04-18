import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Spectral, Space_Grotesk } from "next/font/google";

const spectral = Spectral({
  subsets: ["latin"],
  variable: "--font-spectral",
  weight: ["400", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.linkedin.com/in/amrutha-moparthi-921967222/"),
  title: "Amrutha Moparthi | Senior AI & ML Engineer",
  description:
    "Senior AI & ML Engineer specializing in generative AI, RAG, cloud AI, and MLOps for enterprise systems.",
  keywords: [
    "Amrutha Moparthi",
    "AI Engineer",
    "ML Engineer",
    "Generative AI",
    "RAG",
    "AWS Bedrock",
    "Azure ML",
    "GCP Vertex AI",
    "MLOps",
    "Semantic Search",
  ],
  openGraph: {
    title: "Amrutha Moparthi | Senior AI & ML Engineer",
    description:
      "Generative AI leader building RAG, semantic search, and MLOps solutions for regulated enterprise environments.",
    url: "https://www.linkedin.com/in/amrutha-moparthi-921967222/",
    siteName: "Amrutha Moparthi",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spectral.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-slate-950 text-slate-100 antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  );
}