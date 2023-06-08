import "./globals.css";
import {Nunito_Sans} from "next/font/google";
import { NextAuthProvider } from "../libs/provider";
const nunito = Nunito_Sans({weight: ["400", "700"], subsets: ["latin"]});
import ToasterContext from "../contexts/ToasterContext";


export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body
                className={`${nunito.className} flex justify-between align-top text-zinc-200 bg-neutral-950`}>
                <NextAuthProvider> <ToasterContext/> {children}</NextAuthProvider>
            </body>
        </html>
    );
}
