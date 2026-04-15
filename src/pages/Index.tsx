import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientButton from "@/components/ui/GradientButton";
import heroVisual from "../assets/hero-visual.jpg";
import erpVisual from "../assets/erp-visual.jpg";
import crmVisual from "../assets/crm-visual.jpg";
import aiVisual from "../assets/ai-visual.jpg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Zap, Shield, Clock, BarChart3, Users, Brain, Layers, CheckCircle2, Star } from "lucide-react";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 20, suffix: "+", label: "Industries Served" },
  { value: 98, suffix: "%", label: "On-Time Delivery" },
  { value: 2, suffix: "x", label: "Faster Than Traditional" },
];

const pillars = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: "ERP Solutions",
    desc: "Custom enterprise resource planning built around your actual workflows not rigid templates.",
    image: erpVisual,
    link: "/erp-solutions",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "CRM Solutions",
    desc: "Intelligent customer relationship management designed to convert, retain, and grow your revenue.",
    image: crmVisual,
    link: "/crm-solutions",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Custom AI Tools",
    desc: "Practical AI systems that enhance decision-making, automate workflows, and unlock business intelligence.",
    image: aiVisual,
    link: "/ai-solutions",
  },
];

const trustCards = [
  { quote: "The team translated operational complexity into a clean, working platform.", context: "ERP Implementation — Manufacturing" },
  { quote: "Speed of execution stood out without compromising delivery clarity.", context: "CRM System — Professional Services" },
  { quote: "From concept to usable system, the process felt unusually structured and fast.", context: "AI Integration — Healthcare" },
  { quote: "What impressed us most was how quickly they understood our business logic.", context: "Custom Platform — Retail" },
];

const Index = () => {
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <>
      <Helmet>
        <title>Vaeyu Innovations — Premium ERP, CRM & AI Solutions</title>
        <meta name="description" content="Vaeyu Innovations delivers premium custom ERP, CRM, and AI solutions for businesses. Enterprise-grade software built faster, with precision." />
        <meta property="og:title" content="Vaeyu Innovations — Premium ERP, CRM & AI Solutions" />
        <meta property="og:description" content="Enterprise-grade custom software, ERP, CRM, and AI solutions. Built faster, delivered with precision." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://vaeyuinnovations.com" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Vaeyu Innovations",
          url: "https://vaeyuinnovations.com",
          email: "info@vaeyuinnovations.com",
          telephone: "+917204873132",
          address: { "@type": "PostalAddress", streetAddress: "Pro Works, Om Chambers, 648/A, 4th Floor, Binnamangala, 1st Stage, Indiranagar", addressLocality: "Bangalore", postalCode: "560038", addressCountry: "IN" }
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-[120px]" />

        <div className="container-premium relative z-10 py-20 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/30 mb-8">
                <Zap className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium text-muted-foreground">2x Faster Than Traditional Agencies</span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight mb-6">
                Enterprise Systems.{" "}
                <span className="text-gradient-brand">Built Faster.</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10">
                Custom ERP, CRM, and AI solutions engineered for your business.
                Launch-ready systems in weeks not months.
              </p>
              <div className="flex flex-wrap gap-4">
                <GradientButton to="/contact" size="lg">
                  Get Free Consultation <ArrowRight className="w-4 h-4" />
                </GradientButton>
                <GradientButton to="/services" variant="outline" size="lg">
                  Explore Solutions
                </GradientButton>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                <img src={heroVisual} alt="Premium enterprise dashboard interfaces showing ERP, CRM and AI analytics" width={1920} height={1080} className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              {/* Floating cards */}
              <div className="absolute -bottom-4 -left-4 glass-card rounded-xl px-5 py-3 animate-[float_6s_ease-in-out_infinite]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">System Live</p>
                    <p className="text-[10px] text-muted-foreground">Deployed in 4 weeks</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 glass-card rounded-xl px-5 py-3 animate-[float_6s_ease-in-out_infinite_2s]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Revenue +34%</p>
                    <p className="text-[10px] text-muted-foreground">After CRM launch</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="py-16 border-y border-border/30">
        <div className="container-premium grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
              <p className="font-heading text-3xl sm:text-4xl font-bold text-gradient-brand">
                {statsInView ? <CountUp end={stat.value} duration={2.5} /> : "0"}{stat.suffix}
              </p>
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Core Pillars */}
      <section className="section-padding">
        <div className="container-premium">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Core Solutions</p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
              Three Pillars of <span className="text-gradient-brand">Business Transformation</span>
            </h2>
            <p className="text-muted-foreground text-lg">Purpose-built enterprise systems that align with how your business actually operates.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <AnimatedSection key={pillar.title} delay={i * 0.15}>
                <div className="group relative rounded-2xl overflow-hidden border border-border/30 bg-card/30 hover-lift h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img src={pillar.image} alt={pillar.title} loading="lazy" width={1200} height={800} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card/90" />
                  </div>
                  <div className="p-7 flex-1 flex flex-col">
                    <div className="w-11 h-11 rounded-xl bg-gradient-brand-subtle flex items-center justify-center text-primary mb-4">
                      {pillar.icon}
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-3">{pillar.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{pillar.desc}</p>
                
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Speed Advantage */}
      <section className="section-padding bg-gradient-to-b from-secondary/20 to-transparent">
        <div className="container-premium">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">The Vaeyu Advantage</p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
              Speed Without <span className="text-gradient-brand">Compromise</span>
            </h2>
            <p className="text-muted-foreground text-lg">Traditional agencies operate with bloated timelines. We deliver launch-ready systems with a lean, focused execution model.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Traditional */}
            <AnimatedSection direction="left">
              <div className="rounded-2xl border border-border/30 bg-card/20 p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <h3 className="font-heading font-semibold text-lg text-muted-foreground">Traditional Approach</h3>
                </div>
                <ul className="space-y-4">
                  {["3–6 month delivery cycles", "Fragmented teams across time zones", "Scope creep and unclear milestones", "Delayed feedback loops", "Legacy architecture decisions"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Vaeyu */}
            <AnimatedSection direction="right">
              <div className="rounded-2xl border border-primary/20 bg-gradient-brand-subtle p-8 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/5 blur-[60px]" />
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <Zap className="w-5 h-5 text-primary" />
                  <h3 className="font-heading font-semibold text-lg text-foreground">The Vaeyu Model</h3>
                </div>
                <ul className="space-y-4 relative z-10">
                  {["Launch-ready in 1–3 weeks", "Lean, dedicated team", "Clear sprint milestones", "Real-time collaboration", "Modern, scalable architecture"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="section-padding">
        <div className="container-premium">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Delivery Outcomes</p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
              What Business Teams <span className="text-gradient-brand">Value</span>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {trustCards.map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="rounded-2xl border border-border/30 bg-card/30 p-7 hover-lift h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 text-primary fill-primary" />)}
                  </div>
                  <p className="text-foreground text-sm leading-relaxed italic mb-4">"{card.quote}"</p>
                  <p className="text-xs text-muted-foreground">{card.context}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gradient-to-b from-secondary/20 to-transparent">
        <div className="container-premium">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Full-Spectrum Delivery</p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
              Beyond ERP, CRM & AI
            </h2>
            <p className="text-muted-foreground text-lg">Supporting capabilities that complete the enterprise technology stack.</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Layers className="w-5 h-5" />, title: "Custom Dashboards", desc: "Real-time visibility into every metric that matters." },
              { icon: <Zap className="w-5 h-5" />, title: "Business Automation", desc: "Eliminate manual processes. Automate at scale." },
              { icon: <Shield className="w-5 h-5" />, title: "Cloud & DevOps", desc: "Secure, scalable infrastructure for enterprise systems." },
              { icon: <BarChart3 className="w-5 h-5" />, title: "Technical SEO", desc: "Visibility that drives qualified traffic and leads." },
            ].map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <div className="rounded-xl border border-border/30 bg-card/20 p-6 hover-lift h-full">
                  <div className="w-10 h-10 rounded-lg bg-gradient-brand-subtle flex items-center justify-center text-primary mb-4">
                    {s.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-sm mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-premium">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-brand p-12 sm:p-16 lg:p-20 text-center">
              <div className="absolute inset-0 dot-pattern opacity-10" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-5">
                  Ready to Build Faster?
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-10">
                  Let's discuss your ERP, CRM, or AI project. Free strategy consultation no obligation.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <GradientButton to="/contact" variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50">
                    Book a Strategy Call <ArrowRight className="w-4 h-4" />
                  </GradientButton>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Index;
