import { Inter } from "next/font/google";
import "./globals.css";
import LeftSideComponent from "@/component/LeftSideComponent";
import {motion } from "framer-motion"
import Navbar from "@/component/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <section className="main-parent-section-1">
          <LeftSideComponent/>
          <div className="right-side-main-component-parent-section">
            <div className="parent-useless-container">
            </div>
            <div className="parent-working-container">
              <Navbar/>
              {children}
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}