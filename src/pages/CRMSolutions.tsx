import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientButton from "@/components/ui/GradientButton";
import crmVisual from "../assets/crm-visual.jpg";
import { ArrowRight, Target, TrendingUp, UserCheck, MailCheck, BarChart3, Shield, Zap, MessageSquare, CheckCircle2 } from "lucide-react";

const features = [
  { icon: <Target className="w-5 h-5" />, title: "Lead Management", desc: "Capture, qualify, and nurture leads with automated scoring and intelligent routing." },
  { icon: <TrendingUp className="w-5 h-5" />, title: "Pipeline Tracking", desc: "Visual pipeline management with deal stages, forecasting, and conversion analytics." },
  { icon: <UserCheck className="w-5 h-5" />, title: "Customer Lifecycle", desc: "Complete customer journey tracking from first touch to long-term retention." },
  { icon: <MailCheck className="w-5 h-5" />, title: "Follow-Up Automation", desc: "Automated follow-ups, reminders, and engagement sequences that never miss a beat." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Sales Dashboards", desc: "Real-time analytics on team performance, revenue trends, and opportunity health." },
  { icon: <Zap className="w-5 h-5" />, title: "Task Automation", desc: "Automate repetitive tasks — data entry, status updates, notifications, and reporting." },
  { icon: <MessageSquare className="w-5 h-5" />, title: "Support History", desc: "Unified customer support records with ticket tracking and resolution analytics." },
  { icon: <Shield className="w-5 h-5" />, title: "Role-Based Access", desc: "Custom access levels for sales teams, managers, and executives — secure and controlled." },
];

const CRMSolutions = () => (
  <>
    <Helmet>
      <title>Custom CRM Solutions — Vaeyu Innovations | Customer Relationship Management</title>
      <meta name="description" content="Custom CRM systems for lead management, pipeline tracking, customer lifecycle, and sales automation. Built specifically for your business model." />
    </Helmet>

    <section className="section-padding">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">CRM Solutions</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              CRM That <span className="text-gradient-brand">Grows Revenue</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Generic CRMs force your sales process into their templates. We build CRM systems that match your exact sales flow, customer journey, and team structure.
            </p>
            <div className="flex flex-wrap gap-4">
              <GradientButton to="/contact" size="lg">Build My CRM <ArrowRight className="w-4 h-4" /></GradientButton>
              <GradientButton to="/our-process" variant="outline" size="lg">See Our Process</GradientButton>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img src={crmVisual} alt="CRM dashboard with customer pipeline visualization" width={1200} height={800} className="w-full h-auto" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="section-padding bg-gradient-to-b from-secondary/20 to-transparent">
      <div className="container-premium">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-5">Complete CRM <span className="text-gradient-brand">Capabilities</span></h2>
          <p className="text-muted-foreground text-lg">Every feature designed to convert more leads, retain more customers, and grow your revenue.</p>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.08}>
              <div className="rounded-xl border border-border/30 bg-card/30 p-6 hover-lift h-full">
                <div className="w-10 h-10 rounded-lg bg-gradient-brand-subtle flex items-center justify-center text-primary mb-4">{f.icon}</div>
                <h3 className="font-heading font-semibold text-sm mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
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
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-5">Your CRM, Your Rules</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">Let's design a CRM that matches how your sales team actually works.</p>
              <GradientButton to="/contact" variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Get Free CRM Consultation <ArrowRight className="w-4 h-4" />
              </GradientButton>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default CRMSolutions;
