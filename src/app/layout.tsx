import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JEOA",
  description: "Journal Easier on Audio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
