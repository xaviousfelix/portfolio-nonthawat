import React from "react";

export default function Footer() {
  return (
    <footer className="footer footer-center border-t text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - 2030 Nonthawat. All rights
          reserved.
        </p>
      </aside>
    </footer>
  );
};
