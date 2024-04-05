import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/global.css";
import { Providers } from "@/store/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Annual Budget",
    default: "Annual Budget",
  },
  description: "Annual Budget",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
