import { Container, SectionHeading } from "@/components";

const services = [
  {
    title: "AI Consulting",
    description: "Turn AI ideas into practical business opportunities and execution plans.",
  },
  {
    title: "Product Prototyping",
    description: "Validate and launch MVPs quickly with modern UX and scalable foundations.",
  },
  {
    title: "Web Platforms",
    description: "Build fast, clean, conversion-focused web apps with modern frontend architecture.",
  },
  {
    title: "AI Systems",
    description: "Create internal automations and smart workflows that save time and create leverage.",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Focused offers for modern businesses"
          description="A simple, high-value set of services designed to help you move faster and build better."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map(service => (
            <div
              key={service.title}
              className="rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}