import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientButton from "@/components/ui/GradientButton";
import heroVisual from "../assets/hero-visual.jpg";
import { ArrowRight, Globe, Cloud, Users, LayoutDashboard, Plug, Zap, Gauge, ShieldCheck, CheckCircle2 } from "lucide-react";

const modules = [
  { icon: <Cloud className="w-5 h-5" />, title: "SaaS Platforms", desc: "Multi-tenant SaaS products with billing, auth, and role-based access built in." },
  { icon: <Users className="w-5 h-5" />, title: "Customer Portals", desc: "Secure client and customer portals that streamline self-service and support." },
  { icon: <LayoutDashboard className="w-5 h-5" />, title: "Admin Dashboards", desc: "Real-time dashboards and internal tools that put your data to work." },
  { icon: <Globe className="w-5 h-5" />, title: "Progressive Web Apps", desc: "Fast, installable PWAs that work across every device and connection." },
  { icon: <Plug className="w-5 h-5" />, title: "APIs & Integrations", desc: "Connect payments, CRMs, and third-party services with robust APIs." },
  { icon: <Zap className="w-5 h-5" />, title: "Real-Time Features", desc: "Live updates, chat, notifications, and collaborative experiences." },
  { icon: <Gauge className="w-5 h-5" />, title: "Performance & SEO", desc: "Fast, prerendered, search-friendly apps engineered for Core Web Vitals." },
  { icon: <ShieldCheck className="w-5 h-5" />, title: "Secure & Scalable", desc: "Cloud-native architecture that scales with your users and stays secure." },
];

const WebAppDevelopment = () => (
  <>
    <Helmet>
      <title>Web App Development Company in India — Vaeyu Innovations</title>
      <meta name="description" content="Custom web application development for startups and growing businesses. SaaS platforms, customer portals, dashboards, and PWAs — shipped in weeks, not months." />
      <meta property="og:title" content="Web App Development — Vaeyu Innovations" />
      <meta property="og:description" content="Scalable, high-performance web applications and SaaS platforms, engineered for growth." />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://vaeyuinnovations.com/web-app-development" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Web App Development",
        "provider": { "@type": "Organization", "name": "Vaeyu Innovations" },
        "description": "Custom web application development — SaaS platforms, customer portals, admin dashboards, and progressive web apps for startups and growing businesses.",
        "areaServed": ["IN", "US", "GB", "AU"],
        "serviceType": "Web Application Development",
      })}</script>
    </Helmet>

    <section className="section-padding">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Web App Development</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Web Apps Built to <span className="text-gradient-brand">Scale</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              From MVPs to production SaaS, we build fast, secure web applications around your real workflows — with fixed pricing, direct founder access, and a money-back first milestone.
            </p>
            <div className="flex flex-wrap gap-4">
              <GradientButton to="/contact" size="lg">Book a Free Consultation <ArrowRight className="w-4 h-4" /></GradientButton>
              <GradientButton to="/our-process" variant="outline" size="lg">See Our Process</GradientButton>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img src={heroVisual} alt="Custom web application and SaaS dashboard interfaces" width={1200} height={800} className="w-full h-auto" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="section-padding bg-gradient-to-b from-secondary/20 to-transparent">
      <div className="container-premium">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-5">What We <span className="text-gradient-brand">Build</span></h2>
          <p className="text-muted-foreground text-lg">Every build is custom-engineered for performance, security, and scale.</p>
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
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-5">Why Build With <span className="text-gradient-brand">Vaeyu</span></h2>
        </AnimatedSection>
        <div className="space-y-4">
          {[
            "Modern stack — React, TypeScript, Node, and cloud-native infrastructure",
            "Fixed price and fixed timeline — no scope-creep surprises",
            "Launch-ready MVPs in weeks with our lean execution model",
            "SEO-ready, prerendered front-ends that Google can actually index",
            "Direct founder access — you work with builders, not account managers",
            "Money-back first milestone — we de-risk the start for you",
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
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-5">Ready to Build Your Web App?</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">Book a free consultation. We'll scope your project and show you a fixed price and timeline.</p>
              <GradientButton to="/contact" variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Book a Free Consultation <ArrowRight className="w-4 h-4" />
              </GradientButton>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default WebAppDevelopment;
