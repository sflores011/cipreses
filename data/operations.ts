export interface OperationPanel {
  id: string;
  title: string;
  description: string;
  variant: "highlighted" | "default";
}

export const OPERATIONS: OperationPanel[] = [
  {
    id: "gestion-activos",
    title: "Gestión de activos y prevención",
    description:
      "Planificamos el mantenimiento según el ciclo de vida de la infraestructura, no según las emergencias. Así protegemos la inversión de quien la desarrolló.",
    variant: "highlighted",
  },
  {
    id: "operacion-datos",
    title: "Operación con datos",
    description:
      "Monitoreamos cada indicador clave de la operación en tiempo real. Eso nos permite detectar fallas antes de que ocurran, predecir el desgaste y mejorar la operación de forma continua, en vez de improvisar decisiones sobre la marcha.",
    variant: "default",
  },
  {
    id: "continuidad-total",
    title: "Continuidad total",
    description:
      "La infraestructura crítica no puede darse el lujo de detenerse. Operamos los 365 días del año, con guardias y protocolos listos para actuar ante cualquier imprevisto, para que quien depende de esa infraestructura nunca note la diferencia.",
    variant: "default",
  },
];
