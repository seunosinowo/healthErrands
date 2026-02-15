import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import aboutImage from "@/assets/about-image.jpg";
import { CheckCircle } from "lucide-react";

const values = [
  { label: "Excellence", desc: "We pursue high standards in strategy, creativity, and execution." },
  { label: "Integrity", desc: "We operate with transparency, accountability, and trust." },
  { label: "Innovation", desc: "We stay ahead of market trends and consumer behaviour." },
  { label: "Results", desc: "We measure success by growth, traction, and tangible outcomes." },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="section-padding bg-section-dark">
      <div className="container-narrow text-center">
        <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-3 block">About Us</span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
          Driving Growth for Brands
        </h1>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto leading-relaxed">
          Health Errands Ltd is a results-driven marketing company specialised in the strategic marketing and growth of cosmetics and pharmaceutical brands.
        </p>
      </div>
    </section>

    {/* About content */}
    <section className="section-padding bg-background">
      <div className="container-narrow grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="rounded-xl overflow-hidden shadow-gold">
          <img src={aboutImage} alt="Team at work" className="w-full h-96 object-cover" />
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We combine market intelligence, creative execution, and performance measurement to help products stand out, sell faster, and build lasting brand equity.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With a strong focus on consumer behaviour, retail visibility, and digital influence, we partner with manufacturers and distributors to translate great products into powerful market presence.
          </p>
        </div>
      </div>
    </section>

    {/* Mission / Vision */}
    <section className="section-padding bg-muted">
      <div className="container-narrow grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-card rounded-xl p-10 border border-border">
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            To help brands achieve sustainable growth by delivering strategic, creative, and data-driven marketing solutions that connect products with consumers and convert awareness into sales.
          </p>
        </div>
        <div className="bg-card rounded-xl p-10 border border-border">
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">Our Vision</h3>
          <p className="text-muted-foreground leading-relaxed">
            To be a leading marketing partner for pharmaceutical and cosmetics brands across Africa, recognised for excellence, integrity, and measurable impact.
          </p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <SectionHeading subtitle="Our Core Values" title="What We Stand For" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {values.map((v) => (
            <div key={v.label} className="flex items-start gap-4">
              <CheckCircle size={24} className="text-accent shrink-0 mt-1" />
              <div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-1">{v.label}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
