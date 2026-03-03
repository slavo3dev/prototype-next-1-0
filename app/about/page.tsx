import { Container, SectionHeading } from "@/components";

export default function AboutPage() {
  return (
    <main className="py-20">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Built by a product-minded engineer"
          description="Prototype.NEXT exists to help turn ambitious ideas into real digital products, AI systems, and business assets."
        />
      </Container>
    </main>
  );
}