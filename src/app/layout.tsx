import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diego Tejada Cardenas - Portfolio",
  description: "Data analyst portfolio showcasing analytics projects, Tableau dashboards, and insights. Unveiling Data's Stories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
