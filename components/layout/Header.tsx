"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall } from "lucide-react";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { NAV_ITEMS } from "@/data/navigation";
import styles from "./Header.module.scss";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Cipreses y Pinos">
          <Logo height={52} priority />
        </Link>

        <nav
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
          aria-label="Navegación principal"
        >
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href.startsWith("/") && pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${
                      isActive ? styles.navLinkActive : ""
                    }`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <a href="#contacto" className={styles.ctaMobile}>
            <PhoneCall size={14} />
            ¡Contáctanos!
          </a>
        </nav>

        <a href="#contacto" className={styles.cta}>
          <span className={styles.ctaIcon}>
            <PhoneCall size={13} />
          </span>
          ¡Contáctanos!
        </a>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>
    </header>
  );
}
