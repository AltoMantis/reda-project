import type { Metadata } from "next";
import { IBM_Plex_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Cayla - Chemical Solutions",
  description: "Cayla provides innovative chemical solutions for a sustainable future",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${roboto.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-[60px] md:pt-[80px]">
          {children}
        </main>
      </body>
    </html>
  );
}
