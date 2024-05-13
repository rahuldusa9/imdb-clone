import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB-Clone",
  description: "this is an clone of imdb",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">

      <body className={inter.className}>
      <Header/>
        {children}</body>
    </html>
  );
}
