import Link from "next/link";
import { Camera, Globe, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Logo from "@/components/ui/Logo";
import { NAV_ITEMS } from "@/data/navigation";
import styles from "./Footer.module.scss";

const SOCIAL_LINKS = [
  { icon: Camera, label: "Instagram", href: "#" },
  { icon: Globe, label: "Facebook", href: "#" },
  { icon: MessageCircle, label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Logo height={46} />

            <p className={styles.description}>
              Gestionamos activos, planificamos con datos y garantizamos
              continuidad operativa, para que la infraestructura del país
              siga rindiendo mucho después de construida.
            </p>

            <ul className={styles.social}>
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a href={href} className={styles.socialLink} aria-label={label}>
                    <Icon size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.menu}>
            <h3 className={styles.menuTitle}>Menú</h3>
            <ul className={styles.menuList}>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.menuLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.callout}>
            <h3 className={styles.calloutTitle}>
              ¡Quiero conocer todo
              <br />
              sobre Cipreses y Pinos
            </h3>
            <PrimaryButton href="/nosotros" variant="inverse">
              Conoce cómo operamos
            </PrimaryButton>
          </div>
        </div>

        <p className={styles.copyright}>Powered by Aumenta</p>
      </Container>
    </footer>
  );
}
