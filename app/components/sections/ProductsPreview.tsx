import { Container , SectionHeading} from "@/components";

const products = [
  {
    title: "AriClear",
    description: "AI-powered website clarity analysis for founders and businesses.",
  },
  {
    title: "LearningWar",
    description: "Habit and learning system focused on progress, consistency, and self-growth.",
  },
  {
    title: "Future Labs",
    description: "Experimental tools, prototypes, and new ideas under the Prototype.NEXT umbrella.",
  },
];

export function ProductsPreview() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Products"
          title="Tools and experiments built for leverage"
          description="A growing ecosystem of products designed to solve real business and personal growth problems."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map(product => (
            <div
              key={product.title}
              className="rounded-3xl border border-blue-100 bg-blue-50/50 p-8"
            >
              <h3 className="text-xl font-semibold text-slate-900">{product.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}