import { Container, SectionHeading } from "@/components";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore products built under Prototype.NEXT, including AriClear and future internal ventures.",
  alternates: {
    canonical: "/products",
  },
};


export default function ProductsPage() {
  return (
    <main className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Products"
          title="Products and internal ventures"
          description="Tools built to improve clarity, leverage, and execution."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">AriClear</h2>
            <p className="mt-3 text-slate-600">
              Analyze whether humans and AI understand your homepage, messaging,
              and positioning.
            </p>
            <Link
              href="https://www.ariclear.com"
              target="_blank"
              className="mt-6 inline-flex rounded-full bg-blue-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-600"
            >
              Visit AriClear
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}