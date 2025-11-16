import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Portfolio Jiřího",
  description: "Osobní portfolio vývojáře Jiřího.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
