import { Link } from "react-router-dom";
import { ArrowRight, Target, BarChart3, Users, Megaphone, Palette, ShieldCheck } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";


const services = [
  { icon: Target, title: "Brand Strategy & Positioning", desc: "Define identity, target audience, and competitive advantage." },
  { icon: Megaphone, title: "Digital Marketing & Social Media", desc: "Build awareness, engagement, and conversion across platforms." },
  { icon: Users, title: "Influencer Marketing", desc: "Connect with the right voices to drive authenticity and trust." },
  { icon: Palette, title: "Creative & Production", desc: "High-quality assets that elevate brand perception." },
  { icon: BarChart3, title: "Analytics & Reporting", desc: "Track, measure, and optimise every campaign." },
  { icon: ShieldCheck, title: "Market Monitoring", desc: "Real-time tracking and fake product detection." },
];

const values = [
  { label: "Excellence", desc: "High standards in strategy, creativity, and execution." },
  { label: "Integrity", desc: "Transparency, accountability, and trust." },
  { label: "Innovation", desc: "Ahead of market trends and consumer behaviour." },
  { label: "Results", desc: "Growth, traction, and tangible outcomes." },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-2xl animate-fade-in">
          <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">
            Health Errands Ltd
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Strategic Marketing for{" "}
            <span className="text-gradient">Pharmaceutical & Cosmetics</span>{" "}
            Brands
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
            We combine market intelligence, creative execution, and performance measurement to help products stand out and build lasting brand equity.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-lg font-semibold text-sm hover:brightness-110 transition-all shadow-gold"
            >
              Our Services <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-primary-foreground/10 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Services preview */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <SectionHeading
          subtitle="What We Do"
          title="Our Core Services"
          description="End-to-end marketing solutions that translate great products into powerful market presence."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group bg-card border border-border rounded-xl p-8 hover:shadow-gold hover:border-accent/30 transition-all duration-300"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <s.icon size={24} className="text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services" className="text-accent font-semibold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-section-dark">
      <div className="container-narrow">
        <SectionHeading subtitle="Our Values" title="What Drives Us" light />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.label} className="text-center p-6">
              <h3 className="font-display text-xl font-semibold text-accent mb-2">{v.label}</h3>
              <p className="text-primary-foreground/70 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-section-dark text-center">
      <div className="container-narrow">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Let's Grow Your Brand Together
        </h2>
        <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
          We don't just promote products — we build brands that last.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-10 py-4 rounded-lg font-semibold hover:brightness-110 transition-all shadow-gold"
        >
          Contact Us <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;
