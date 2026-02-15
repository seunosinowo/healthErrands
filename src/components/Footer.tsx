import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-teal-dark text-primary-foreground">
    <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <h3 className="font-display text-2xl font-bold mb-4">
          Health<span className="text-accent">Errands</span>
        </h3>
        <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
          Strategic marketing for pharmaceutical & cosmetics brands. Driving growth, building lasting brand equity.
        </p>
      </div>

      <div>
        <h4 className="font-display text-lg font-semibold mb-4 text-accent">Quick Links</h4>
        <div className="flex flex-col gap-2">
          {[
            { to: "/about", label: "About Us" },
            { to: "/services", label: "Services" },
            { to: "/process", label: "Our Process" },
            { to: "/case-study", label: "Case Study" },
            { to: "/contact", label: "Contact" },
          ].map((l) => (
            <Link key={l.to} to={l.to} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-display text-lg font-semibold mb-4 text-accent">Contact</h4>
        <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
          <span className="flex items-center gap-2"><MapPin size={16} className="text-accent shrink-0" /> 88 Ogunlana Street, Surulere, Lagos</span>
          <span className="flex items-center gap-2"><Phone size={16} className="text-accent shrink-0" /> +234 8032882145</span>
          <span className="flex items-center gap-2"><Mail size={16} className="text-accent shrink-0" /> healtherrands@gmail.com</span>
        </div>
      </div>
    </div>

    <div className="border-t border-teal-light/20 py-6 text-center text-xs text-primary-foreground/50">
      © {new Date().getFullYear()} Health Errands Ltd. All rights reserved.
    </div>
  </footer>
);

export default Footer;
