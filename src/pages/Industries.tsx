import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientButton from "@/components/ui/GradientButton";
import { ArrowRight, Heart, ShoppingBag, Factory, GraduationCap, Hotel, Briefcase, Building, Rocket, Headphones, Store } from "lucide-react";

const industries = [
  { icon: <Heart className="w-6 h-6" />, title: "Healthcare", desc: "Patient management, scheduling, EMR integrations, and compliance-ready healthcare platforms." },
  { icon: <ShoppingBag className="w-6 h-6" />, title: "Retail", desc: "Inventory, POS, omnichannel sales, and customer engagement systems for modern retail." },
  { icon: <Factory className="w-6 h-6" />, title: "Manufacturing", desc: "Production planning, quality control, supply chain, and shop floor management solutions." },
  { icon: <GraduationCap className="w-6 h-6" />, title: "Education", desc: "Learning management, enrollment, student portals, and institutional operations platforms." },
  { icon: <Hotel className="w-6 h-6" />, title: "Hospitality", desc: "Property management, booking systems, guest experience, and operational dashboards." },
  { icon: <Briefcase className="w-6 h-6" />, title: "Professional Services", desc: "Project management, resource allocation, time tracking, and client portal solutions." },
  { icon: <Building className="w-6 h-6" />, title: "Real Estate", desc: "Property listings, lead management, transaction workflows, and client relationship systems." },
  { icon: <Rocket className="w-6 h-6" />, title: "Startups", desc: "MVP development, scalable architecture, rapid prototyping, and growth-ready platforms." },
  { icon: <Headphones className="w-6 h-6" />, title: "BPO & Operations", desc: "Workflow automation, quality monitoring, agent management, and performance analytics." },
  { icon: <Store className="w-6 h-6" />, title: "Multi-Location Business", desc: "Centralized management, location-specific dashboards, and unified reporting across branches." },
];

const Industries = () => (
  <>
    <Helmet>
      <title>Industries — Vaeyu Innovations | Enterprise Solutions Across Sectors</title>
      <meta name="description" content="Vaeyu Innovations serves Healthcare, Retail, Manufacturing, Education, Hospitality, Professional Services, Real Estate, Startups and more." />
      <meta property="og:title" content="Industries — Vaeyu Innovations" />
      <meta property="og:description" content="Custom solutions for diverse industries including healthcare, retail, manufacturing, education, hospitality, and professional services." />
      <link rel="canonical" href="https://vaeyuinnovations.com/industries" />
    </Helmet>

    <section className="section-padding">
      <div className="container-premium">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Industries We Serve</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-5">
            Solutions for <span className="text-gradient-brand">Every Industry</span>
          </h1>
          <p className="text-muted-foreground text-lg">Deep domain understanding across sectors. Custom technology solutions that address industry-specific challenges.</p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <AnimatedSection key={ind.title} delay={i * 0.06}>
              <div className="rounded-2xl border border-border/30 bg-card/30 p-7 hover-lift h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-brand-subtle flex items-center justify-center text-primary mb-5">{ind.icon}</div>
                <h3 className="font-heading text-lg font-bold mb-3">{ind.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{ind.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-gradient-to-b from-secondary/20 to-transparent">
      <div className="container-premium">
        <AnimatedSection>
          <div className="rounded-3xl bg-gradient-brand p-12 sm:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 dot-pattern opacity-10" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-5">Don't See Your Industry?</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">We build custom solutions for any business. Let's discuss your specific requirements.</p>
              <GradientButton to="/contact" variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Let's Talk <ArrowRight className="w-4 h-4" />
              </GradientButton>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Industries;
