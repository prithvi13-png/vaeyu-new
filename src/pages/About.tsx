import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientButton from "@/components/ui/GradientButton";
import { ArrowRight, Zap, Brain, Target, Shield, Users, Rocket } from "lucide-react";

const values = [
  { icon: <Zap className="w-5 h-5" />, title: "Speed With Quality", desc: "We deliver launch-ready systems in weeks. Fast doesn't mean rushed it means focused, efficient, and disciplined." },
  { icon: <Brain className="w-5 h-5" />, title: "Business-First Engineering", desc: "Every line of code serves a business purpose. We understand operations before we write software." },
  { icon: <Target className="w-5 h-5" />, title: "Custom, Always", desc: "No templates. No rigid platforms. Every system is designed around your specific workflows and goals." },
  { icon: <Shield className="w-5 h-5" />, title: "Enterprise-Grade Quality", desc: "Scalable architecture, security best practices, and production-ready code always." },
  { icon: <Users className="w-5 h-5" />, title: "Partner Mindset", desc: "We're not vendors. We're technology partners invested in your long-term success and growth." },
  { icon: <Rocket className="w-5 h-5" />, title: "Future-Ready Systems", desc: "We build with modern technologies that scale, adapt, and evolve with your business." },
];

const About = () => (
  <>
    <Helmet>
      <title>About Vaeyu Innovations — Premium Technology Partner</title>
      <meta name="description" content="Vaeyu Innovations is a premium technology company specializing in custom ERP, CRM, and AI solutions. Fast delivery, enterprise quality." />
    </Helmet>

    <section className="section-padding">
      <div className="container-premium">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">About Us</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
              We Build Business Systems <span className="text-gradient-brand">That Matter</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Vaeyu Innovations is a premium technology company that specializes in building custom enterprise software ERP systems, CRM platforms, and AI tools for businesses that need more than off-the-shelf solutions.
              </p>
              <p>
                We exist because most software companies make businesses wait too long, pay too much, and settle for systems that don't fit. Our lean delivery model changes that delivering business-ready platforms in weeks, not months.
              </p>
              <p>
                Based in Bangalore, we work with founders, SMEs, and enterprise teams across industries from healthcare and manufacturing to retail and professional services. Every engagement is custom. Every system is built to fit.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="section-padding bg-gradient-to-b from-secondary/20 to-transparent">
      <div className="container-premium">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-5">What We <span className="text-gradient-brand">Stand For</span></h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.08}>
              <div className="rounded-xl border border-border/30 bg-card/30 p-7 hover-lift h-full">
                <div className="w-10 h-10 rounded-lg bg-gradient-brand-subtle flex items-center justify-center text-primary mb-4">{v.icon}</div>
                <h3 className="font-heading font-semibold mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
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
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-5">Let's Build Something Great</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">We're always looking for meaningful projects and ambitious businesses to partner with.</p>
              <GradientButton to="/contact" variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Start a Conversation <ArrowRight className="w-4 h-4" />
              </GradientButton>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default About;
