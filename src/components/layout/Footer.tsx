import { Link } from "react-router-dom";
import vaeyuLogo from "@/assets/vaeyu-logo.png";

const footerLinks = {
  Solutions: [
    { label: "ERP Solutions", to: "/erp-solutions" },
    { label: "CRM Solutions", to: "/crm-solutions" },
    { label: "Custom AI Tools", to: "/ai-solutions" },
    { label: "All Services", to: "/services" },
  ],
  Company: [
    { label: "About Us", to: "/about" },
    { label: "Our Process", to: "/our-process" },
    { label: "Careers", to: "/careers" },
  ],
  Resources: [
    { label: "Industries", to: "/industries" },
    { label: "Contact", to: "/contact" },
  ],
};

const Footer = () => (
  <footer className="border-t border-border/50 bg-card/30">
    <div className="container-premium py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-3 mb-5">
            <img src={vaeyuLogo} alt="Vaeyu Innovations" className="h-9 w-auto" width={36} height={36} />
            <span className="font-heading font-bold text-lg text-foreground">Vaeyu Innovations</span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
            Enterprise software, ERP, CRM, and AI solutions. Built for scale, delivered with speed.
          </p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>info@vaeyuinnovations.com</p>
            <p>+91 7204873132</p>
            <p className="leading-relaxed">Pro Works, Om Chambers, 648/A, 4th Floor,<br />Binnamangala, 1st Stage, Indiranagar,<br />Bangalore - 560038</p>
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-heading font-semibold text-sm text-foreground mb-4">{title}</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="mt-16 pt-8 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Vaeyu Innovations. All rights reserved.</p>
        <p className="text-xs text-muted-foreground">Engineered with precision in Bangalore, India.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
