import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Target, Megaphone, Users, ShoppingBag, Palette, BarChart3, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";

const services = [
  {
    icon: Target,
    title: "Brand Strategy & Positioning",
    desc: "We help brands define their identity, target audience, and competitive advantage. Our brand strategy ensures clear positioning, strong messaging, and consistency across all touchpoints.",
    deliverables: ["Market research & consumer insights", "Brand positioning & messaging", "Go-to-market strategy", "Packaging and shelf-appeal advisory"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & Social Media",
    desc: "We design and manage digital campaigns that build awareness, engagement, and conversion. From content strategy to paid advertising, we ensure brands stay relevant and visible.",
    deliverables: ["Social media strategy & management", "Content creation & campaign design", "Paid ads (Meta, Google, influencer boosting)", "Community growth & engagement"],
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    desc: "Health Errands Ltd connects brands with the right influencers to drive authenticity and trust. We manage influencer sourcing, contracts, content direction, and performance tracking.",
    deliverables: ["Influencer identification & vetting", "Campaign planning & execution", "Content direction & approvals", "Performance tracking & reporting"],
  },
  {
    icon: ShoppingBag,
    title: "Retail Activation & Trade Marketing",
    desc: "We strengthen in-store visibility and consumer trial through targeted retail activation strategies that drive immediate purchase decisions.",
    deliverables: ["In-store promotions & sampling", "Merchandising & POS deployment", "Retail staff engagement & training", "Field sales & activation monitoring"],
  },
  {
    icon: Palette,
    title: "Creative & Production",
    desc: "We deliver high-quality creative assets that elevate brand perception and support marketing campaigns across channels.",
    deliverables: ["Product photography & videography", "Campaign visuals & design", "Promotional materials & displays", "Packaging design support"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Performance Reporting",
    desc: "We track what matters. Our analytics framework ensures every campaign is measured, optimised, and aligned with business goals.",
    deliverables: ["Campaign performance dashboards", "Sales & conversion tracking", "Consumer behaviour insights", "ROI analysis & recommendations"],
  },
  {
    icon: ShieldCheck,
    title: "Market Monitoring & Fake Tracking",
    desc: "Real-time market surveillance to protect your brand from counterfeits and track competitive movements across distribution channels.",
    deliverables: ["Fake product detection", "Market surveillance reports", "Distribution channel monitoring", "Product recall consulting"],
  },
];

const Services = () => (
  <Layout>
    {/* Hero */}
    <section className="relative py-28 overflow-hidden">
      <img src={servicesBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative z-10 container-narrow text-center px-6">
        <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-3 block">What We Do</span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Services</h1>
        <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
          Integrated marketing solutions that drive awareness, engagement, and growth.
        </p>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding bg-background">
      <div className="container-narrow space-y-12">
        {services.map((s, i) => (
          <div
            key={s.title}
            className={`grid grid-cols-1 lg:grid-cols-5 gap-8 items-start bg-card rounded-xl border border-border p-8 lg:p-10 hover:shadow-gold hover:border-accent/30 transition-all duration-300 ${
              i % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
                  <s.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{s.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
            <div className="lg:col-span-2">
              <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Key Deliverables</h4>
              <ul className="space-y-2">
                {s.deliverables.map((d) => (
                  <li key={d} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-section-dark text-center">
      <div className="container-narrow">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Ready to Transform Your Brand?
        </h2>
        <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
          Let's discuss how our services can accelerate your brand's growth.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-10 py-4 rounded-lg font-semibold hover:brightness-110 transition-all shadow-gold"
        >
          Get Started <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Services;
