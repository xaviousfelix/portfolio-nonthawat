import React from "react";
import "./globals.css";
import { Kanit } from "next/font/google";
import PropTypes from "prop-types";

const kanit = Kanit({ subsets: ["thai", "latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Nonthawat | Personal Portfolio",
  description: "Not is a Junior full-stack developer with 7 months intern of experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className={kanit.className}>
        {children}
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,  // Validate that 'children' is a required node
};