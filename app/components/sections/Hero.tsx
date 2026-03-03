import Link from "next/link";
import { Container } from "@/components";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
            AI Product Studio & Consulting
          </div>

          <h1 className="text-5xl font-semibold tracking-tight text-slate-900 md:text-7xl">
            Build smarter digital products with clarity and speed.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            Prototype.NEXT helps founders and businesses design, prototype, and launch
            modern AI-powered products, systems, and web platforms.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-600"
            >
              Start a Project
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}