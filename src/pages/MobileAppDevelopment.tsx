import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientButton from "@/components/ui/GradientButton";
import heroVisual from "../assets/hero-visual.jpg";
import { ArrowRight, Smartphone, Layers, Bell, WifiOff, CreditCard, Rocket, BarChart3, ShieldCheck, CheckCircle2 } from "lucide-react";

const modules = [
  { icon: <Smartphone className="w-5 h-5" />, title: "iOS & Android Apps", desc: "Native-quality apps for both platforms, designed for performance and polish." },
  { icon: <Layers className="w-5 h-5" />, title: "Cross-Platform", desc: "One codebase, both stores — React Native and Flutter for faster delivery." },
  { icon: <Bell className="w-5 h-5" />, title: "Push & Notifications", desc: "Engagement-driving push, in-app messaging, and real-time alerts." },
  { icon: <WifiOff className="w-5 h-5" />, title: "Offline-First", desc: "Apps that work without a connection and sync seamlessly when back online." },
  { icon: <CreditCard className="w-5 h-5" />, title: "In-App Payments", desc: "Subscriptions, one-tap checkout, and secure payment-gateway integration." },
  { icon: <Rocket className="w-5 h-5" />, title: "App Store Launch", desc: "We handle store submission, review, and a smooth launch on both stores." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Analytics & Growth", desc: "Built-in analytics, funnels, and A/B hooks so you can grow with data." },
  { icon: <ShieldCheck className="w-5 h-5" />, title: "Secure & Compliant", desc: "Data encryption, secure auth, and privacy best practices by default." },
];

const MobileAppDevelopment = () => (
  <>
    <Helmet>
      <title>Mobile App Development Company in India — Vaeyu Innovations</title>
      <meta name="description" content="Custom mobile app development for iOS and Android. Native and cross-platform (React Native, Flutter) apps for startups and growing businesses — shipped in weeks." />
      <meta property="og:title" content="Mobile App Development — Vaeyu Innovations" />
      <meta property="og:description" content="Native and cross-platform mobile apps with polished UX, built to scale across iOS and Android." />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://vaeyuinnovations.com/mobile-app-development" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Mobile App Development",
        "provider": { "@type": "Organization", "name": "Vaeyu Innovations" },
        "description": "Custom mobile app development for iOS and Android — native and cross-platform apps (React Native, Flutter) for startups and growing businesses.",
        "areaServed": ["IN", "US", "GB", "AU"],
        "serviceType": "Mobile Application Development",
      })}</script>
    </Helmet>

    <section className="section-padding">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Mobile App Development</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Mobile Apps Your <span className="text-gradient-brand">Users Love</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Native and cross-platform apps for iOS and Android, built around your users and your roadmap — with fixed pricing, direct founder access, and a money-back first milestone.
            </p>
            <div className="flex flex-wrap gap-4">
              <GradientButton to="/contact" size="lg">Book a Free Consultation <ArrowRight className="w-4 h-4" /></GradientButton>
              <GradientButton to="/our-process" variant="outline" size="lg">See Our Process</GradientButton>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img src={heroVisual} alt="Mobile application interfaces for iOS and Android" width={1200} height={800} className="w-full h-auto" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="section-padding bg-gradient-to-b from-secondary/20 to-transparent">
      <div className="container-premium">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-5">What We <span className="text-gradient-brand">Build</span></h2>
          <p className="text-muted-foreground text-lg">From MVP to App Store — engineered for performance, retention, and scale.</p>
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
            "Cross-platform with React Native & Flutter — one build, both stores",
            "Fixed price and fixed timeline — no scope-creep surprises",
            "Launch-ready MVPs in weeks with our lean execution model",
            "App Store and Play Store submission handled end-to-end",
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
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-5">Ready to Build Your Mobile App?</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">Book a free consultation. We'll scope your app and show you a fixed price and timeline.</p>
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

export default MobileAppDevelopment;
