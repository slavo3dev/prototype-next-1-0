import Link from "next/link";
import { Container, SectionHeading } from "@/components";
import { services } from "@/lib";


const processSteps = [
  {
    title: "Discover",
    description:
      "We clarify your goals, current bottlenecks, audience, and opportunities before jumping into solutions.",
  },
  {
    title: "Define",
    description:
      "We shape the right scope, priorities, and execution path so the project stays focused and practical.",
  },
  {
    title: "Build",
    description:
      "We create the product, prototype, or system using modern tools and a clean technical foundation.",
  },
  {
    title: "Refine",
    description:
      "We improve based on feedback, usage, and business needs so the result becomes more useful and valuable over time.",
  },
];

export default function ServicesPage() {
  return (
    <main className="py-20 md:py-24">
      <Container>
        <section className="mx-auto max-w-4xl text-center">
          <SectionHeading
            eyebrow="Services"
            title="Build smarter products, systems, and digital experiences"
            description="Prototype.NEXT helps founders, startups, and modern businesses turn ideas into focused digital products, AI-powered workflows, and scalable web platforms."
            align="center"
          />

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            The goal is not to add more complexity. The goal is to create more
            clarity, better execution, and stronger leverage through thoughtful
            product strategy, modern engineering, and practical AI integration.
          </p>
        </section>

        <section className="mt-16 md:mt-20">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] border border-[var(--border)] bg-white p-8 shadow-sm md:p-10"
              >
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  {service.title}
                </h2>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-6">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-500">
                    What’s included
                  </h3>

                  <ul className="mt-4 space-y-3">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                      >
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 md:mt-28">
          <div className="rounded-[2rem] border border-blue-100 bg-blue-50/50 p-8 md:p-12">
            <SectionHeading
              eyebrow="Who this is for"
              title="Built for ambitious founders and modern teams"
              description="Prototype.NEXT is a strong fit for people and businesses that want to move with clarity, speed, and intention."
            />

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Founders shaping a new product or MVP",
                "Businesses exploring practical AI opportunities",
                "Teams that need better systems and automation",
                "Brands that want a modern, conversion-focused web platform",
                "Operators who need help turning ideas into execution",
                "Companies that want technical clarity without unnecessary complexity",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white bg-white/80 px-5 py-4 text-sm leading-6 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24 md:mt-28">
          <SectionHeading
            eyebrow="Process"
            title="A simple process designed for clarity and momentum"
            description="The best work happens when strategy and execution stay connected."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[2rem] border border-[var(--border)] bg-white p-8 shadow-sm"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">
                  0{index + 1}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 md:mt-28">
          <div className="rounded-[2rem] border border-[var(--border)] bg-white p-8 shadow-sm md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">
                Let’s build
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Need help turning an idea into a real product or system?
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
                Whether you need AI consulting, a fast prototype, a scalable
                platform, or a smarter internal workflow, Prototype.NEXT can help
                you move from direction to execution.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-600"
                >
                  Start a Conversation
                </Link>

                <Link
                  href="/products"
                  className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Explore Products
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}