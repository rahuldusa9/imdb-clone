import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Provider from "./Provider";
import NavBar from "@/components/NavBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB-Clone",
  description: "this is an clone of imdb",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">

      <body className={inter.className}>
        <Provider>
          <Header/>
          <NavBar/>
        {children}
        </Provider>
        </body>
    </html>
  );
}
