import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-white">
      <Container className="flex flex-col gap-3 py-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-500">
          © 2026 Prototype.NEXT. All rights reserved.
        </p>
        <p className="text-sm text-slate-500">
          AI Product Studio • Consulting • Systems
        </p>
      </Container>
    </footer>
  );
}