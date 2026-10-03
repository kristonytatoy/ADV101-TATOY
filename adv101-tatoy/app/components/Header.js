"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <h2>KT</h2>

      <nav>
        <Link className={pathname === "/" ? "active" : ""} href="/">
          Home
        </Link>

        <Link className={pathname === "/portfolio" ? "active" : ""} href="/portfolio">
          Portfolio
        </Link>

        <Link className={pathname === "/about" ? "active" : ""} href="/about">
          About
        </Link>

        <Link className={pathname === "/gallery" ? "active" : ""} href="/gallery">
          Gallery
        </Link>
      </nav>
    </header>
  );
}