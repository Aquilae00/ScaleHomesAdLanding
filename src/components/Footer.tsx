import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-primary-foreground py-12 px-4 pb-28">
      <div className="max-w-lg mx-auto text-center">
        {/* Logo */}
        <h3 className="text-xl font-bold mb-2">Scale Homes Remodel</h3>
        <p className="text-primary-foreground/70 text-sm mb-8">
          Transforming Dallas-Fort Worth homes since 2008
        </p>

        {/* Contact Info */}
        <div className="space-y-3 mb-8">
          <a
            href="tel:+14692108283"
            className="flex items-center justify-center gap-2 text-primary-foreground/90 hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>(469) 210-8283</span>
          </a>
          <a
            href="mailto:service@scalehomes.co"
            className="flex items-center justify-center gap-2 text-primary-foreground/90 hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>service@scalehomes.co</span>
          </a>
          <div className="flex items-center justify-center gap-2 text-primary-foreground/70">
            <MapPin className="w-4 h-4" />
            <span>Serving all of DFW</span>
          </div>
        </div>

        {/* Badges */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="bg-primary-foreground/10 px-3 py-2 rounded-lg">
            <span className="text-xs font-semibold">Licensed</span>
          </div>
          <div className="bg-primary-foreground/10 px-3 py-2 rounded-lg">
            <span className="text-xs font-semibold">Insured</span>
          </div>
          <div className="bg-primary-foreground/10 px-3 py-2 rounded-lg">
            <span className="text-xs font-semibold">BBB A+</span>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Scale Homes Remodel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;