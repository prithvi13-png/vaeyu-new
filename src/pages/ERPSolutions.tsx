import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientButton from "@/components/ui/GradientButton";
import erpVisual from "../assets/erp-visual.jpg";
import { ArrowRight, Settings, Package, DollarSign, Users, BarChart3, Shield, Smartphone, Brain, CheckCircle2 } from "lucide-react";

const modules = [
  { icon: <Settings className="w-5 h-5" />, title: "Operations Management", desc: "Streamline daily operations with automated workflows, approvals, and task management." },
  { icon: <Package className="w-5 h-5" />, title: "Inventory & Supply Chain", desc: "Real-time stock tracking, purchase orders, vendor management, and warehouse workflows." },
  { icon: <DollarSign className="w-5 h-5" />, title: "Finance & Accounting", desc: "Complete financial visibility — invoicing, expenses, budgets, and compliance reporting." },
  { icon: <Users className="w-5 h-5" />, title: "HR & Payroll", desc: "Employee lifecycle, attendance, payroll processing, leave management, and performance tracking." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Sales & Purchase", desc: "Unified sales and purchase flows with quotation management, order tracking, and analytics." },
  { icon: <Shield className="w-5 h-5" />, title: "Role-Based Access", desc: "Granular permissions and approval hierarchies that mirror your organizational structure." },
  { icon: <Smartphone className="w-5 h-5" />, title: "Mobile-Ready ERP", desc: "Access your ERP from anywhere. Mobile-optimized interfaces for teams on the move." },
  { icon: <Brain className="w-5 h-5" />, title: "AI-Enhanced Insights", desc: "Smart dashboards, predictive analytics, and AI-powered recommendations built into your ERP." },
];

const ERPSolutions = () => (
  <>
    <Helmet>
      <title>Custom ERP Solutions — Vaeyu Innovations | Enterprise Resource Planning</title>
      <meta name="description" content="Custom ERP systems built around your business workflows. Operations, inventory, HR, finance all unified in one platform. Delivered in weeks." />
      <meta property="og:title" content="Custom ERP Solutions — Vaeyu Innovations" />
      <meta property="og:description" content="Custom ERP systems for operations, inventory, HR, finance. Built for your workflows." />
      <link rel="canonical" href="https://vaeyuinnovations.com/erp-solutions" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Custom ERP Solutions",
        "provider": {
          "@type": "Organization",
          "name": "Vaeyu Innovations"
        },
        "description": "Enterprise Resource Planning systems customized for your business workflows. Unified platform for operations, inventory, HR, finance, and more.",
        "areaServed": ["IN", "US", "GB", "AU"],
        "serviceType": "Enterprise Resource Planning"
      })}</script>
    </Helmet>

    <section className="section-padding">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">ERP Solutions</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              ERP Built Around <span className="text-gradient-brand">Your Business</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We don't force your operations into rigid software. We build ERP systems that mirror your actual workflows designed for how your teams work, not how templates dictate.
            </p>
            <div className="flex flex-wrap gap-4">
              <GradientButton to="/contact" size="lg">Explore ERP Solutions <ArrowRight className="w-4 h-4" /></GradientButton>
              <GradientButton to="/our-process" variant="outline" size="lg">See Our Process</GradientButton>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img src={erpVisual} alt="Enterprise resource planning system visualization" width={1200} height={800} className="w-full h-auto" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="section-padding bg-gradient-to-b from-secondary/20 to-transparent">
      <div className="container-premium">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-5">Comprehensive ERP <span className="text-gradient-brand">Modules</span></h2>
          <p className="text-muted-foreground text-lg">Every module is custom-built and deeply integrated with your specific business processes.</p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((m, i) => (
            <AnimatedSection key={m.title} delay={i * 0.08}>
              <div className="rounded-xl border border-border/30 bg-card/30 p-6 hover-lift h-full">
                <div className="w-10 h-10 rounded-lg bg-gradient-brand-subtle flex items-center justify-center text-primary mb-4">{m.icon}</div>
                <h3 className="font-heading font-semibold text-sm mb-2">{m.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{m.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-premium max-w-4xl">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-5">Why Custom ERP <span className="text-gradient-brand">Wins</span></h2>
        </AnimatedSection>
        <div className="space-y-4">
          {[
            "Adapts to your processes — not the other way around",
            "No per-user licensing fees that scale against you",
            "Full ownership and control of your platform",
            "Integrates with your existing tools and systems",
            "Scales as your business grows — no re-platforming",
            "Delivered in weeks with our lean execution model",
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="flex items-center gap-4 p-5 rounded-xl border border-border/30 bg-card/20">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm text-foreground">{item}</p>
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
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-5">Ready for ERP That Fits?</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">Book a free consultation. We'll map your workflows and show you what's possible.</p>
              <GradientButton to="/contact" variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Get Free ERP Consultation <ArrowRight className="w-4 h-4" />
              </GradientButton>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default ERPSolutions;
