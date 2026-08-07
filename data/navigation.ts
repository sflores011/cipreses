export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Impacto y sostenibilidad", href: "#impacto" },
  { label: "Innovación", href: "#innovacion" },
  { label: "Sala de prensa", href: "#sala-de-prensa" },
];
