import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "new experimental function unstable_getImgProps() in nextjs app router",
  description: "new experimental function unstable_getImgProps() in nextjs app router",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode;}) {

  return (
    <html lang="en">
      <body className={inter.className}>
          <Header />
          {children}
      </body>
    </html>
  );

}
