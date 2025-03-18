// import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
// import { Toaster } from "react-hot-toast";
// import ThemeContextProvider from "./context/Theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nonthawat | Personal Portfolio",
  description: "Not is a Junior full-stack developer with 7 months intern of experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + "flex min-h-screen flex-col bg-[#121212]"}>
          <Header />
          {children}
      </body>
    </html>
  );
}
