import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientButton from "@/components/ui/GradientButton";
import { ArrowRight, Search, Map, Palette, Code, TestTube, Rocket, Headphones } from "lucide-react";

const steps = [
  { icon: <Search className="w-6 h-6" />, step: "01", title: "Discovery & Understanding", desc: "We start by deeply understanding your business operations, challenges, goals, and workflows. No assumptions, just listening." },
  { icon: <Map className="w-6 h-6" />, step: "02", title: "Workflow Mapping", desc: "We map your exact processes, identify inefficiencies, and design the system architecture that fits your reality." },
  { icon: <Palette className="w-6 h-6" />, step: "03", title: "Architecture & UX", desc: "Premium interface design and robust system architecture built for usability, performance, and scale." },
  { icon: <Code className="w-6 h-6" />, step: "04", title: "Sprint Development", desc: "Fast, focused development sprints with weekly demos. You see progress in real-time, not after months of silence." },
  { icon: <TestTube className="w-6 h-6" />, step: "05", title: "QA & Refinement", desc: "Rigorous testing, performance optimization, and iterative refinement until every detail meets our quality standard." },
  { icon: <Rocket className="w-6 h-6" />, step: "06", title: "Go-Live & Launch", desc: "Smooth deployment, team training, and a seamless transition to your new system. Launch-ready, production-grade." },
  { icon: <Headphones className="w-6 h-6" />, step: "07", title: "Support & Scale", desc: "Ongoing support, feature enhancements, and scaling as your business grows. We stay with you." },
];

const OurProcess = () => (
  <>
    <Helmet>
      <title>Our Process — Vaeyu Innovations | How We Deliver</title>
      <meta name="description" content="Discover Vaeyu Innovations' lean, transparent delivery process. From discovery to launch in weeks — with sprint-based development and continuous collaboration." />
      <meta property="og:title" content="Our Process — Vaeyu Innovations" />
      <meta property="og:description" content="Transparent development process from discovery to launch with sprint-based development and continuous collaboration." />
      <link rel="canonical" href="https://vaeyuinnovations.com/our-process" />
    </Helmet>

    <section className="section-padding">
      <div className="container-premium">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Our Process</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-5">
            Structured for <span className="text-gradient-brand">Speed & Quality</span>
          </h1>
          <p className="text-muted-foreground text-lg">A lean, transparent delivery process that gets business-ready systems live in weeks not months.</p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-8">
          {steps.map((s, i) => (
            <AnimatedSection key={s.step} delay={i * 0.08}>
              <div className="flex gap-6 sm:gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-brand-subtle flex items-center justify-center text-primary group-hover:bg-gradient-brand group-hover:text-primary-foreground transition-all duration-300">
                    {s.icon}
                  </div>
                  {i < steps.length - 1 && <div className="w-px flex-1 bg-border/30 my-2" />}
                </div>
                <div className="pb-8">
                  <span className="text-xs font-mono text-primary mb-1 block">{s.step}</span>
                  <h3 className="font-heading text-xl font-bold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
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
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-5">Ready to Start?</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">Book a free discovery call. We'll understand your requirements and share how we'd approach your project.</p>
              <GradientButton to="/contact" variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Book a Strategy Call <ArrowRight className="w-4 h-4" />
              </GradientButton>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default OurProcess;
