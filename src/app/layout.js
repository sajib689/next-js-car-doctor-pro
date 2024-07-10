import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import AuthProvider from "@/Services/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor Pro",
  description: "Car Repare Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='carDoctorTheme'>
     <AuthProvider>
     <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
     </AuthProvider>
    </html>
  );
}
