import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientButton from "@/components/ui/GradientButton";
import { ArrowRight, Rocket, Brain, Layers, Repeat, Search, CheckCircle2, ShieldCheck } from "lucide-react";

// NOTE: These are productized starting offers. Prices are indicative and easy to
// edit here — adjust the numbers/scope to your real rate card any time.
const offers = [
  {
    icon: <Rocket className="w-5 h-5" />,
    name: "MVP in 6 Weeks",
    price: "from ₹3.5L",
    tagline: "Fixed price, fixed timeline",
    desc: "A launch-ready web or mobile MVP built in six weeks — scoped, designed, built, and shipped.",
    points: ["Web or mobile MVP", "Fixed scope & timeline", "Launch + handover included"],
    featured: true,
  },
  {
    icon: <Brain className="w-5 h-5" />,
    name: "AI Assistant in 3 Weeks",
    price: "from ₹2L",
    tagline: "Premium add-on",
    desc: "Add an AI assistant, automation, or document intelligence to your product or operations.",
    points: ["Custom AI workflow", "Integrates with your stack", "Attach to any build"],
  },
  {
    icon: <Layers className="w-5 h-5" />,
    name: "Custom Build",
    price: "Milestone-based",
    tagline: "Larger custom software",
    desc: "Bespoke software delivered in milestones — 30% upfront, then per milestone for predictable cash flow.",
    points: ["Phased delivery", "30% upfront", "Fixed price per milestone"],
  },
  {
    icon: <Repeat className="w-5 h-5" />,
    name: "Monthly Retainer",
    price: "₹1L–₹5L / mo",
    tagline: "Ongoing partnership",
    desc: "A dedicated team for ongoing development, maintenance, and AI operations.",
    points: ["Dedicated senior team", "Flexible scope", "Predictable monthly cost"],
  },
  {
    icon: <Search className="w-5 h-5" />,
    name: "Paid Discovery",
    price: "₹25k–₹75k",
    tagline: "Start small",
    desc: "A focused, paid discovery sprint for big or ambiguous scopes — credited toward your build.",
    points: ["Scoping & architecture", "Clear roadmap + estimate", "Credited to the build"],
  },
];

const guarantees = [
  { icon: <ShieldCheck className="w-5 h-5" />, title: "Money-back first milestone", desc: "If we miss the first milestone, you get your money back. We de-risk the start." },
  { icon: <CheckCircle2 className="w-5 h-5" />, title: "Fixed price, fixed timeline", desc: "No hourly surprises. You know the cost and the date before we start." },
  { icon: <Rocket className="w-5 h-5" />, title: "Direct founder access", desc: "You work directly with the founders — not an account manager." },
];

const Pricing = () => (
  <>
    <Helmet>
      <title>Pricing & Productized Offers — Vaeyu Innovations</title>
      <meta name="description" content="Fixed-price, productized software offers — MVP in 6 weeks, AI assistant in 3 weeks, custom builds, retainers, and paid discovery. Transparent pricing, money-back first milestone." />
      <meta property="og:title" content="Pricing — Vaeyu Innovations" />
      <meta property="og:description" content="Productized fixed-price offers with money-back first milestone and direct founder access." />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://vaeyuinnovations.com/pricing" />
    </Helmet>

    <section className="section-padding">
      <div className="container-premium">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Pricing</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-5">
            Productized, <span className="text-gradient-brand">Fixed-Price</span> Offers
          </h1>
          <p className="text-muted-foreground text-lg">
            No vague hourly billing. Clear scope, a fixed price, and a fixed timeline — so you can decide with confidence.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((o, i) => (
            <AnimatedSection key={o.name} delay={i * 0.08}>
              <div className={`rounded-2xl border p-7 hover-lift h-full flex flex-col ${o.featured ? "border-primary/30 bg-gradient-brand-subtle" : "border-border/30 bg-card/30"}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${o.featured ? "bg-gradient-brand text-primary-foreground" : "bg-secondary text-primary"}`}>
                  {o.icon}
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">{o.tagline}</p>
                <h3 className="font-heading text-lg font-bold mb-1">{o.name}</h3>
                <p className="font-heading text-2xl font-bold text-gradient-brand mb-3">{o.price}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{o.desc}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {o.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
                <GradientButton to="/contact" variant={o.featured ? "primary" : "outline"} size="sm" className="self-start">
                  Get Started <ArrowRight className="w-3.5 h-3.5" />
                </GradientButton>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground/60 mt-8 max-w-2xl mx-auto">
          Prices are indicative starting points and depend on final scope. International projects are quoted in USD/GBP. Every engagement starts with 30–50% upfront.
        </p>
      </div>
    </section>

    <section className="section-padding bg-gradient-to-b from-secondary/20 to-transparent">
      <div className="container-premium">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-5">Built-In <span className="text-gradient-brand">Guarantees</span></h2>
          <p className="text-muted-foreground text-lg">We remove the risk of working with a new partner.</p>
        </AnimatedSection>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {guarantees.map((g, i) => (
            <AnimatedSection key={g.title} delay={i * 0.08}>
              <div className="rounded-xl border border-border/30 bg-card/30 p-7 hover-lift h-full text-center">
                <div className="w-10 h-10 rounded-lg bg-gradient-brand-subtle flex items-center justify-center text-primary mb-4 mx-auto">{g.icon}</div>
                <h3 className="font-heading font-semibold mb-2">{g.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{g.desc}</p>
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
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-5">Not Sure Which Fits?</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">Book a free consultation and we'll recommend the right offer and a fixed quote for your project.</p>
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

export default Pricing;
