import { useState } from "react";
import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <section className="px-6 pt-10 pb-20 md:px-12 lg:px-24 lg:pb-28 bg-section-dark">
        <div className="container-narrow text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-3 block">Get in Touch</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
            Let's grow your brand together. Reach out and we'll get back to you promptly.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Office Address</p>
                    <p className="text-muted-foreground text-sm">88 Ogunlana Street, Surulere, Lagos</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Phone</p>
                    <p className="text-muted-foreground text-sm">+234 8032882145</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Email</p>
                    <p className="text-muted-foreground text-sm">healtherrands@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-card border border-accent/30 rounded-xl p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-4">
                  <Send size={28} className="text-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="bg-card border border-border rounded-xl p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1.5">Name</label>
                    <input required className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1.5">Email</label>
                    <input required type="email" className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="you@email.com" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1.5">Company</label>
                  <input className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="Company name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1.5">Message</label>
                  <textarea required rows={5} className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none" placeholder="Tell us about your project..." />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-semibold text-sm hover:brightness-110 transition-all shadow-gold flex items-center justify-center gap-2"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
