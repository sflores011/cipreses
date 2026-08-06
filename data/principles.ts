export interface PrincipleData {
  number: string;
  title: string;
  description: string;
}

export const PRINCIPLES: PrincipleData[] = [
  {
    number: "1",
    title: "Gestión de activos y prevención",
    description:
      "Planificamos el mantenimiento según el ciclo de vida de cada activo, no según las emergencias. Así protegemos la inversión de quien desarrolló el proyecto.",
  },
  {
    number: "2",
    title: "Operación con datos",
    description:
      "Monitoreamos cada indicador clave de la operación en tiempo real. Esto nos permite detectar fallas antes de que ocurran, predecir el desgaste y mejorar la operación de forma continua, en vez de improvisar decisiones sobre la marcha.",
  },
  {
    number: "3",
    title: "Continuidad total",
    description:
      "La infraestructura crítica no puede darse el lujo de detenerse. Operamos los 365 días del año, con guardias y protocolos listos para actuar ante cualquier imprevisto, para que quienes dependen de esa infraestructura nunca noten la diferencia.",
  },
  {
    number: "4",
    title: "Seguridad operativa integrada",
    description:
      "La seguridad no es un protocolo que se revisa de vez en cuando; es parte de cómo diseñamos cada proceso desde el primer día. Identificamos riesgos antes de que se conviertan en incidentes, y capacitamos a nuestro equipo para actuar rápido cuando algo se sale de lo esperado.",
  },
  {
    number: "5",
    title: "Tecnología aplicada",
    description:
      "Desarrollamos e implementamos tecnología propia para hacer la operación más eficiente: sistemas que reducen tiempos, eliminando pasos innecesarios y le dan a cada proyecto una forma más inteligente de funcionar, todos los días.",
  },
];
