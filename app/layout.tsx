import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";
import WhatsAppButton from "@/components/whatsapp-button";
import Navbar from "@/components/navbar";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oasis Dental Clinic",
  description: "For the best dental care in Uganda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
          <WhatsAppButton />
          <Toaster />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
