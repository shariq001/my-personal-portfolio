import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css"; // Adjust the path if needed


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose the weights you need // Optional: Define a CSS variable
});

export const metadata: Metadata = {
  title: "Muhammad Shariq | Portfolio",

  description: "Hi, I'm Muhammad Shariq — an aspiring Cloud Applied Generative AI Engineer passionate about building modern web experiences.",

  keywords: ["Muhammad Shariq", "Portfolio", "Aspiring Cloud Applied Generative AI Engineer", "Frontend Developer", "Web Developer", "Web Designer"],

  authors: [{ name: "Muhammad Shariq", url: "https://github.com/shariq001" }],

  icons: {
    icon: "/logo.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body
        className={poppins.className}
      ><Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
