import "./globals.css";
import { Navbar, Footer } from "@/components";

export const metadata = {
  title: "Prototype.NEXT",
  description: "AI Product Studio & Consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}