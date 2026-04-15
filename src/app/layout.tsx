import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { Lora, DM_Sans } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.linkedin.com/in/krishnaaaaaa/"),
  title: "Sai Krishna | Senior Full Stack .NET Developer",
  description:
    "Results-driven Senior Full Stack .NET Developer with 10 years of experience across healthcare, financial services, government, and telecom domains.",
  keywords: [
    "Sai Krishna",
    "Senior Full Stack .NET Developer",
    "ASP.NET Core Web API",
    "Angular",
    "React",
    "Blazor",
    "Azure",
    "AWS",
    "Microservices",
    "Event-Driven Architecture",
  ],
  openGraph: {
    title: "Sai Krishna | Senior Full Stack .NET Developer",
    description:
      "10 years building scalable enterprise applications with .NET, Angular/React, Azure, and AWS.",
    url: "https://www.linkedin.com/in/krishnaaaaaa/",
    siteName: "Sai Krishna",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${dmSans.variable}`}>
      <body className="bg-gray-50 text-gray-900 antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  );
}