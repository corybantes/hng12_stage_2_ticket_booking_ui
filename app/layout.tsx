import type { Metadata } from "next";
import { roboto } from "@/components/fonts/fonts";
import Header from "@/components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ticket Generator",
  description: "Ticket Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased bg-layout-bg`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
