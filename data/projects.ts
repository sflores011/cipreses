import { MEDIA } from "@/data/media";

export const PROJECTS_CONTENT = {
  titleLine1: "En cada proyecto que operamos",
  titleLine2: "aplicamos el mismo estándar",
  paragraph:
    "Continuidad, atención al detalle y datos reales detrás de cada decisión, sin importar el tipo de infraestructura que tengamos que cuidar. Así es como operamos, y así es como seguiremos operando cada proyecto que se sume.",
  cta: "Ver todos los proyectos",
};

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  href: string;
}

const [elSalvador, ciudadGuatemala, pacifico] = MEDIA.projects.items;

export const projects: ProjectItem[] = [
  {
    title: "Tramo VAS Carretera a El Salvador",
    description:
      "Conecta la Calzada Atanasio Tzul con San Miguel Petapa, Villa Canales y Boca del Monte, agilizando el ingreso a la capital.",
    image: elSalvador.image,
    href: `/proyectos/${elSalvador.slug}`,
  },
  {
    title: "Tramo VAS Ciudad de Guatemala",
    description:
      "Conecta la Calzada Atanasio Tzul con San Miguel Petapa, Villa Canales y Boca del Monte, agilizando el ingreso a la capital.",
    image: ciudadGuatemala.image,
    href: `/proyectos/${ciudadGuatemala.slug}`,
  },
  {
    title: "Tramo VAS Carretera al Pacífico",
    description:
      "Conecta la Calzada Atanasio Tzul con San Miguel Petapa, Villa Canales y Boca del Monte, agilizando el ingreso a la capital.",
    image: pacifico.image,
    href: `/proyectos/${pacifico.slug}`,
  },
];
