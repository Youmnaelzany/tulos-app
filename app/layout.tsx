import type { Metadata } from "next";
import { Raleway } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tulos Ecommerce App for shoppers",
  description: "Tulos Ecommerce App for shoppers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${raleway.className} antialiased`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
