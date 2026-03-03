import Link from "next/link";
import { Container } from "@/components";

export function CTASection() {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-10 text-center shadow-sm md:p-16">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Ready to build something smarter?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Let’s turn your idea into a modern product, AI system, or business-ready prototype.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-600"
            >
              Book a Conversation
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}