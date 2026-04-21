import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import  Footer from "@/components/footer/Footer";

const ubuntu = Ubuntu({
  weight: ["400","500","700"], // Changed "600" to "700"
  subsets:["latin"],
});

export const metadata: Metadata = {
  title: "Digital Shop",
  description: "Shop anything online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={ubuntu.className}
    >
      <body 
        className=""
      >
        <main className="w-full">
          <NavBar/>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
