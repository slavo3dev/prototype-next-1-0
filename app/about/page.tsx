import { Container, SectionHeading } from "@/components";

export default function AboutPage() {
  return (
    <main className="py-20 md:py-24">
      <Container>
        <section className="mx-auto max-w-4xl text-center">
          <SectionHeading
            eyebrow="About"
            title="A product studio built for clarity, execution, and leverage"
            description="Prototype.NEXT is an AI product studio and consulting company focused on helping founders and modern businesses turn ideas into real, working products and systems."
            align="center"
          />

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            The goal is simple: reduce noise, remove unnecessary complexity, and
            build things that actually work — products people understand,
            systems that create leverage, and experiences that convert.
          </p>
        </section>

        {/* Story */}
        <section className="mt-20 md:mt-24 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              How Prototype.NEXT started
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Prototype.NEXT was created from years of hands-on experience in
              building frontend systems, Smart TV applications, and modern web
              platforms. Over time, a clear pattern emerged — most projects
              struggle not because of code, but because of unclear direction,
              weak product thinking, and lack of execution focus.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              The idea behind Prototype.NEXT is to combine engineering,
              product thinking, and AI into a single focused approach that helps
              businesses move faster with more clarity and confidence.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[var(--border)] bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              What makes it different
            </h3>

            <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-700">
              <li>• Built by an engineer who actually ships products</li>
              <li>• Focus on clarity before complexity</li>
              <li>• Combines AI, product, and engineering thinking</li>
              <li>• Fast iteration instead of long planning cycles</li>
              <li>• Designed for real-world execution, not theory</li>
            </ul>
          </div>
        </section>

        {/* Philosophy */}
        <section className="mt-24 md:mt-28">
          <div className="rounded-[2rem] border border-blue-100 bg-blue-50/50 p-8 md:p-12">
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              The philosophy
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              Most businesses don’t need more features — they need more clarity.
              Clear messaging, clear products, and clear systems lead to better
              decisions, better user experience, and better results.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              Prototype.NEXT focuses on building things that are simple,
              understandable, and effective — whether that’s a landing page, a
              full platform, or an internal AI workflow.
            </p>
          </div>
        </section>

        {/* Products */}
        <section className="mt-24 md:mt-28">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
            Products and ecosystem
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            In addition to consulting and product work, Prototype.NEXT builds
            internal tools and products that solve real problems.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-[var(--border)] bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                AriClear
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                An AI-powered tool that analyzes how clearly your website
                communicates — for both humans and AI systems.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[var(--border)] bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                Future Labs
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                A growing set of experiments and tools focused on AI, learning,
                and product development systems.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 md:mt-28 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Let’s build something that actually works
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            If you have an idea, product, or system you want to bring to life —
            Prototype.NEXT can help you move from concept to execution.
          </p>

          <div className="mt-8">
            <a
              href="/contact"
              className="rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-600"
            >
              Start a Conversation
            </a>
          </div>
        </section>
      </Container>
    </main>
  );
}