import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "multimedia.aumenta.do",
        pathname: "/**",
      },
    ],
    // El origen sirve fotos de 7-10MB sin comprimir. El optimizador de
    // Next aborta la descarga a los 7s (timeout interno no configurable),
    // lo que produce 500 en /_next/image. Hasta que el origen sirva
    // versiones livianas, se desactiva la optimización y el navegador
    // consume las imágenes directamente.
    unoptimized: true,
  },
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default nextConfig;
