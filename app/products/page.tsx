import { Container, SectionHeading } from "@/components";

export default function ProductsPage() {
  return (
    <main className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Products"
          title="Products and internal ventures"
          description="AriClear, LearningWar, and future experiments built under Prototype.NEXT."
        />
      </Container>
    </main>
  );
}