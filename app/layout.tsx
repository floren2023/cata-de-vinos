import type { Metadata } from "next";
import { Bitter,Merienda } from "next/font/google";
import "./globals.css";
import { Navigation } from "./_components/navigation";
import Footer from "./_components/footer";
import { Toaster } from "@/components/ui/toaster"


export const metadata: Metadata = {
  title: "Cata de Vinos",
  description: "Pagina de cta de vinos",
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
       <Navigation />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
