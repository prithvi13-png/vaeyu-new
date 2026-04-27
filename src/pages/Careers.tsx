import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientButton from "@/components/ui/GradientButton";
import { ArrowRight, Code, Brain, Palette, BarChart3 } from "lucide-react";

const openings = [
  { icon: <Code className="w-5 h-5" />, title: "Full-Stack Engineer", type: "Engineering", location: "Bangalore / Remote", desc: "Build custom ERP, CRM, and AI platforms using modern technologies. React, Node.js, Python, and cloud-native architectures." },
  { icon: <Brain className="w-5 h-5" />, title: "AI/ML Engineer", type: "AI", location: "Bangalore / Remote", desc: "Design and implement practical AI solutions NLP, computer vision, LLM integrations, and custom ML pipelines for enterprise use cases." },
  { icon: <Palette className="w-5 h-5" />, title: "Product Designer", type: "Design", location: "Bangalore / Remote", desc: "Design premium enterprise interfaces. UX strategy, interaction design, and design systems for complex business applications." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Business Analyst", type: "Strategy", location: "Bangalore", desc: "Bridge business and technology. Requirements gathering, workflow mapping, and stakeholder management for enterprise software projects." },
];

const Careers = () => (
  <>
    <Helmet>
      <title>Careers — Vaeyu Innovations | Join Our Team</title>
      <meta name="description" content="Join Vaeyu Innovations. Work on premium ERP, CRM, and AI projects. Engineering, design, and strategy roles available." />
      <meta property="og:title" content="Careers — Vaeyu Innovations" />
      <meta property="og:description" content="Join our team and work on premium ERP, CRM, and AI projects. Engineering, design, and strategy roles available." />
      <link rel="canonical" href="https://vaeyuinnovations.com/careers" />
    </Helmet>

    <section className="section-padding">
      <div className="container-premium">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Careers</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-5">
            Build What <span className="text-gradient-brand">Matters</span>
          </h1>
          <p className="text-muted-foreground text-lg">Join a team that builds premium enterprise software for real businesses. Speed, quality, and impact every project.</p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-4">
          {openings.map((job, i) => (
            <AnimatedSection key={job.title} delay={i * 0.1}>
              <div className="rounded-xl border border-border/30 bg-card/30 p-6 hover-lift group">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-brand-subtle flex items-center justify-center text-primary flex-shrink-0">{job.icon}</div>
                    <div>
                      <h3 className="font-heading font-bold mb-1">{job.title}</h3>
                      <p className="text-xs text-muted-foreground mb-2">{job.type} · {job.location}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{job.desc}</p>
                    </div>
                  </div>
                  <GradientButton to="/contact" variant="outline" size="sm" className="flex-shrink-0 self-start sm:self-center">
                    Apply <ArrowRight className="w-3.5 h-3.5" />
                  </GradientButton>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="text-center mt-12">
          <p className="text-muted-foreground text-sm">Don't see your role? We're always looking for exceptional talent.</p>
          <p className="text-sm mt-2">Send your resume to <a href="mailto:info@vaeyuinnovations.com" className="text-primary hover:underline">info@vaeyuinnovations.com</a></p>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Careers;
