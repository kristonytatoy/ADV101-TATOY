import type { ReactNode } from "react";
import "./globals.css";
import Header from "./components/Header";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}