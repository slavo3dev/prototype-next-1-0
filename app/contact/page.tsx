import { Container, SectionHeading } from "@/components";

export default function ContactPage() {
  return (
    <main className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk about your next project"
          description="Tell me what you’re building, where you are stuck, or what kind of system or product you want to launch."
        />
      </Container>
    </main>
  );
}