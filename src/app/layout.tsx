import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsappButton";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Brains & Brands",
  description: "Premium studio for content creation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jost.className} min-h-full`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}