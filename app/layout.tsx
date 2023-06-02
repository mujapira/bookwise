import "./globals.css";
import { Nunito_Sans } from "next/font/google";
const nunito = Nunito_Sans({ weight: ["400", "700"], subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} flex justify-between align-top p-5 text-zinc-200 bg-neutral-950`}>{children}</body>
    </html>
  );
}
