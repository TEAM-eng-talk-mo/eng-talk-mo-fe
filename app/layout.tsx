import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";

const noto_sans_kr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "200", "600", "800"],
});

export const metadata: Metadata = {
  title: "Eng-Talk-Mo",
  description: "English Talking Study Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={noto_sans_kr.className}>
        <Header />
        <main className="flex justify-center items-center w-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
