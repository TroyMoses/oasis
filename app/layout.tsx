import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";
import WhatsAppButton from "@/components/whatsapp-button";
import Navbar from "@/components/navbar";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
});

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
      <body className={montserrat.className}>
        <ConvexClientProvider>
          <Navbar />
          <div className="pt-20">{children}</div>
          <Footer />
          <ScrollToTop />
          <WhatsAppButton />
          <Toaster />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
