import { Inter } from "next/font/google";
import "./globals.css";
import LeftSideComponent from "@/component/LeftSideComponent";
import { motion } from "framer-motion";
import Navbar from "@/component/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "tsering",
  description: "tsering protfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="main-parent-section">
          <LeftSideComponent />
          <div className="main-hero-area-section">
            <div></div>
            <div>
              <Navbar />
              {children}
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
