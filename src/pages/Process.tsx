import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Search, PenTool, Rocket, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Discover",
    desc: "We study the brand, the market, and consumer perception with thorough data collation. Our first point of call is our extensive market intelligence gathered across industries globally.",
  },
  {
    icon: PenTool,
    num: "02",
    title: "Design",
    desc: "We develop a clear strategy and creative direction for market lead generation, crafting a tailored marketing plan specific to your brand.",
  },
  {
    icon: Rocket,
    num: "03",
    title: "Activate",
    desc: "We execute across digital platforms, media influencers, and retail channels. This includes tactical product presentations to top-level dealers and market storm campaigns.",
  },
  {
    icon: BarChart3,
    num: "04",
    title: "Measure & Optimise",
    desc: "We track performance in real-time, refine strategies, and adapt for better results. Our clients receive ongoing progress reports with full transparency.",
  },
];

const whyUs = [
  "Specialised focus on cosmetics and pharmaceutical brands",
  "Strong understanding of global consumer markets with specific attention to the African market",
  "Integrated digital and retail marketing capability",
  "Data-driven decision making",
  "Proven execution with Cosmo and similar brands",
  "Best-in-class product recall strategy and consulting",
];

const Process = () => (
  <Layout>
    <section className="section-padding bg-section-dark">
      <div className="container-narrow text-center">
        <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-3 block">How We Work</span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Process</h1>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          A structured approach that ensures clarity, efficiency, and measurable growth for every client.
        </p>
      </div>
    </section>

    {/* Steps */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="bg-card border border-border rounded-xl p-8 hover:shadow-gold hover:border-accent/30 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-display font-bold text-accent/30 group-hover:text-accent transition-colors">{s.num}</span>
                <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
                  <s.icon size={20} className="text-accent" />
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding bg-muted">
      <div className="container-narrow">
        <SectionHeading subtitle="Why Choose Us" title="Why Health Errands Ltd?" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {whyUs.map((item) => (
            <div key={item} className="flex items-start gap-3 bg-card rounded-lg p-5 border border-border">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
              <p className="text-sm text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-8 max-w-lg mx-auto italic">
          "We don't just promote products — we build brands that last, because we see our clients' engagement as partnership."
        </p>
      </div>
    </section>

    <section className="section-padding bg-section-dark text-center">
      <div className="container-narrow">
        <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Let's Get Started</h2>
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

export default Process;
