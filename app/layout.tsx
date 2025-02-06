import type { Metadata } from "next";
import { Bitter,Merienda } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/navigation";
import Footer from "./components/footer";
import { Toaster } from "@/components/ui/toaster"


export const metadata: Metadata = {
  title: "Cata de Vinos",
  description: "Pagina generada con create next app",
};

 const bitter = Bitter({variable: "--font-bitter-serif", subsets: ['latin'] })
const merienda = Merienda({variable: "--font-merienda-serif", subsets: ['latin'] }) 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${bitter.variable} ${merienda.variable} antialiased`}
      >
        <Navigation/>
        <Toaster/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
