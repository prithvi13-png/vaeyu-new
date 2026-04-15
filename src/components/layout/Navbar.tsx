import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import vaeyuLogo from "../../assets/vaeyu-logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  {
    label: "Solutions", to: "/services", children: [
      { label: "All Services", to: "/services" },
      { label: "ERP Solutions", to: "/erp-solutions" },
      { label: "CRM Solutions", to: "/crm-solutions" },
      { label: "Custom AI Solutions", to: "/ai-solutions" },
    ]
  },
  { label: "Industries", to: "/industries" },
  { label: "Our Process", to: "/our-process" },
  { label: "About", to: "/about" },
  // { label: "Blog", to: "/blog" },
  { label: "Careers", to: "/careers" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setDropdown(null); }, [location]);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass py-3" : "py-5 bg-transparent"}`}
    >
      <div className="container-premium flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={vaeyuLogo} alt="Vaeyu Innovations" className="h-9 w-auto" width={42} height={42} />
          <span className="font-heading font-bold text-lg text-foreground group-hover:text-gradient-brand transition-all duration-300">
            Vaeyu Innovations
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setDropdown(link.label)}
              onMouseLeave={() => setDropdown(null)}
            >
              <Link
                to={link.to}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${location.pathname === link.to
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {link.label}
              </Link>
              <AnimatePresence>
                {link.children && dropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 glass rounded-xl p-2 min-w-[200px]"
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-200"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" className="px-6 py-2.5 text-sm font-semibold bg-gradient-brand rounded-lg text-primary-foreground hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
            Get Free Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-foreground rounded transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-foreground rounded transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-foreground rounded transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link to={link.to} className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg transition-colors">
                    {link.label}
                  </Link>
                  {link.children?.map((child) => (
                    <Link key={child.to} to={child.to} className="block px-8 py-2.5 text-sm text-muted-foreground/70 hover:text-foreground rounded-lg transition-colors">
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
              <Link to="/contact" className="mt-3 px-6 py-3 text-sm font-semibold bg-gradient-brand rounded-lg text-primary-foreground text-center">
                Get Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
