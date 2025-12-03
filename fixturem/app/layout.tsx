// app/layout.tsx
import "../styles/globals.css";

export const metadata = {
  title: "Mi página",
  description: "Ejemplo con Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
