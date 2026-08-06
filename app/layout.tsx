import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import "./globals.scss";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cipreses y Pinos | Tu operación en movimiento",
  description:
    "Somos el operador que gestiona, mantiene y protege infraestructuras de alto nivel, para que lo que construiste siga funcionando hoy, mañana y en los años que vienen.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={poppins.variable}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
