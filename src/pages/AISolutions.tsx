import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientButton from "@/components/ui/GradientButton";
import aiVisual from "../assets/ai-visual.jpg";
import { ArrowRight, MessageSquare, Search, Zap, BarChart3, FileText, UserCheck, Bot, Brain } from "lucide-react";

const capabilities = [
  { icon: <MessageSquare className="w-5 h-5" />, title: "AI Chat Assistants", desc: "Intelligent conversational agents trained on your business knowledge for customer support and internal queries." },
  { icon: <Brain className="w-5 h-5" />, title: "AI Knowledge Tools", desc: "Enterprise knowledge bases powered by AI — instant answers from your documents, SOPs, and databases." },
  { icon: <Zap className="w-5 h-5" />, title: "Workflow Automation", desc: "AI-driven process automation that eliminates repetitive tasks and accelerates operations." },
  { icon: <Search className="w-5 h-5" />, title: "Intelligent Search", desc: "Semantic search across your internal systems — find any document, record, or insight instantly." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Smart Dashboards", desc: "AI-enhanced analytics with anomaly detection, trend prediction, and automated insights." },
  { icon: <UserCheck className="w-5 h-5" />, title: "AI Lead Qualification", desc: "Automatically score and qualify leads based on behavior, engagement, and business fit." },
  { icon: <Bot className="w-5 h-5" />, title: "AI Copilots for Teams", desc: "Context-aware AI assistants that help your teams make faster, better decisions." },
  { icon: <FileText className="w-5 h-5" />, title: "Document Intelligence", desc: "Extract, classify, and process documents automatically — invoices, contracts, reports." },
];

const AISolutions = () => (
  <>
    <Helmet>
      <title>Custom AI Solutions — Vaeyu Innovations | Business AI Tools</title>
      <meta name="description" content="Practical AI tools for business — chat assistants, workflow automation, document intelligence, smart dashboards. Built for real operations." />
      <meta property="og:title" content="Custom AI Solutions — Vaeyu Innovations" />
      <meta property="og:description" content="AI-powered tools for chat assistants, workflow automation, document intelligence, and smart dashboards." />
      <link rel="canonical" href="https://vaeyuinnovations.com/ai-solutions" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Custom AI Solutions",
        "provider": {
          "@type": "Organization",
          "name": "Vaeyu Innovations"
        },
        "description": "Practical AI integration for business operations. Chat assistants, workflow automation, document intelligence, predictive analytics, and AI copilots.",
        "areaServed": ["IN", "US", "GB", "AU"],
        "serviceType": "Artificial Intelligence Integration"
      })}</script>
    </Helmet>

    <section className="section-padding">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">AI Solutions</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              AI That Works for <span className="text-gradient-brand">Your Business</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We build practical AI systems that support real operations not demos or experiments. Custom AI tools that integrate with your workflows and deliver measurable impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <GradientButton to="/contact" size="lg">Talk to an AI Expert <ArrowRight className="w-4 h-4" /></GradientButton>
              <GradientButton to="/our-process" variant="outline" size="lg">See Our Process</GradientButton>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 relative">
              <img src={aiVisual} alt="AI neural network visualization for business intelligence" width={1200} height={800} className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="section-padding bg-gradient-to-b from-secondary/20 to-transparent">
      <div className="container-premium">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-5">AI <span className="text-gradient-brand">Capabilities</span></h2>
          <p className="text-muted-foreground text-lg">Business-grade AI tools engineered for operational impact, not novelty.</p>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.08}>
              <div className="rounded-xl border border-border/30 bg-card/30 p-6 hover-lift h-full">
                <div className="w-10 h-10 rounded-lg bg-gradient-brand-subtle flex items-center justify-center text-primary mb-4">{c.icon}</div>
                <h3 className="font-heading font-semibold text-sm mb-2">{c.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{c.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-premium">
        <AnimatedSection>
          <div className="rounded-3xl bg-gradient-brand p-12 sm:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 dot-pattern opacity-10" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-5">Bring AI Into Your Operations</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">Let's explore how custom AI tools can transform your business workflows.</p>
              <GradientButton to="/contact" variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Get Free AI Consultation <ArrowRight className="w-4 h-4" />
              </GradientButton>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default AISolutions;
