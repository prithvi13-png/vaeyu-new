import AnimatedSection from "@/components/ui/AnimatedSection";
import { BadgeCheck, Briefcase, Quote, ShieldCheck, Users } from "lucide-react";

const trustSignals = [
  {
    icon: <Briefcase className="w-5 h-5 text-primary" />,
    title: "50+ software projects delivered",
    description: "Custom systems across ERP, CRM, AI, automation, and enterprise dashboards.",
  },
  {
    icon: <Users className="w-5 h-5 text-primary" />,
    title: "Multi-industry implementation experience",
    description: "Healthcare, retail, manufacturing, education, services, and operations teams.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
    title: "NDA-first engagement model",
    description: "Confidential delivery workflows with reference calls and walkthroughs shared on request.",
  },
  {
    icon: <BadgeCheck className="w-5 h-5 text-primary" />,
    title: "Focused delivery and post-launch support",
    description: "Clear sprint updates, QA ownership, and handover support after go-live.",
  },
];

const testimonials = [
  {
    quote:
      "We went from running reports manually in Excel to having live dashboards across three warehouse locations. The ERP shipped in exactly five weeks — as agreed.",
    role: "Head of Operations",
    company: "FMCG Distribution Company",
    initials: "R.S.",
  },
  {
    quote:
      "Our sales conversion rate jumped from 12% to 19% in the first quarter after the CRM launched. The pipeline automation alone saves the team 15+ hours every week.",
    role: "Founder & CEO",
    company: "B2B SaaS Company (Series A)",
    initials: "K.M.",
  },
  {
    quote:
      "Two other agencies failed to deliver. Vaeyu gave us weekly sprint updates, a clear milestone sheet, and launched on the exact date they committed to — no excuses.",
    role: "VP Technology",
    company: "Healthcare Services Firm",
    initials: "A.T.",
  },
  {
    quote:
      "The AI document processing tool handles in two hours what used to take our finance team three full days. ROI was visible in the first month of go-live.",
    role: "Director of Finance",
    company: "Manufacturing Enterprise",
    initials: "P.R.",
  },
];

const buyingAssurance = [
  {
    title: "Reference conversations available",
    description: "We can arrange relevant project references and walkthroughs during the proposal phase.",
  },
  {
    title: "Clear scope before sprint execution",
    description: "You get milestone visibility, effort clarity, and expected deliverables upfront.",
  },
  {
    title: "Built for business outcomes",
    description: "Architecture and UX choices are tied to operational speed, accuracy, and growth.",
  },
];

const SocialProofSection = () => {
  return (
    <section className="section-padding">
      <div className="container-premium">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Trust & Proof</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            Why Teams Choose <span className="text-gradient-brand">Vaeyu</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Built to reduce decision risk: delivery experience, process clarity, and accountable execution.
          </p>
        </AnimatedSection>

        {/* Trust signals */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {trustSignals.map((signal, i) => (
            <AnimatedSection key={signal.title} delay={i * 0.08}>
              <div className="rounded-2xl border border-border/30 bg-card/30 p-6 hover-lift h-full">
                <div className="w-10 h-10 rounded-xl bg-gradient-brand-subtle flex items-center justify-center mb-4">
                  {signal.icon}
                </div>
                <h3 className="font-heading text-base font-semibold mb-2">{signal.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{signal.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Anonymised testimonials */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Client Outcomes</p>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold">
            Results from the teams we've worked with
          </h3>
          <p className="text-muted-foreground text-sm mt-3">
            Client names are kept confidential by default. References available on request under NDA.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.initials} delay={i * 0.1}>
              <div className="rounded-2xl border border-border/30 bg-card/30 p-7 hover-lift h-full flex flex-col">
                <Quote className="w-6 h-6 text-primary/40 mb-4 flex-shrink-0" />
                <p className="text-sm text-foreground leading-relaxed flex-1 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 mt-5 pt-5 border-t border-border/20">
                  <div className="w-9 h-9 rounded-full bg-gradient-brand flex items-center justify-center text-xs font-bold text-primary-foreground flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.role}</p>
                    <p className="text-xs text-muted-foreground">{t.company}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Buying assurance */}
        <div className="rounded-2xl border border-primary/20 bg-gradient-brand-subtle p-8">
          <h3 className="font-heading text-xl font-semibold mb-5">What you can expect before signing</h3>
          <div className="grid md:grid-cols-3 gap-5">
            {buyingAssurance.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="rounded-xl border border-border/30 bg-card/40 p-5 h-full">
                  <p className="text-sm font-semibold text-foreground mb-2">{item.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
