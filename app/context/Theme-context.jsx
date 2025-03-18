"use client";

import {useEffect} from "react";
import { themeChange } from "theme-change";

export default function ThemeContextProvider({ children }) {
    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
      }, []);
  return children;
}