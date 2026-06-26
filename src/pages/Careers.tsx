import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientButton from "@/components/ui/GradientButton";
import { ArrowRight, Code, Brain, Palette, BarChart3, CheckCircle2, MapPin } from "lucide-react";

const openings = [
  { icon: <Code className="w-5 h-5" />, title: "Full-Stack Engineer", type: "Engineering", location: "Bangalore / Remote", desc: "Build custom ERP, CRM, and AI platforms using modern technologies. React, Node.js, Python, and cloud-native architectures." },
  { icon: <Brain className="w-5 h-5" />, title: "AI/ML Engineer", type: "AI", location: "Bangalore / Remote", desc: "Design and implement practical AI solutions NLP, computer vision, LLM integrations, and custom ML pipelines for enterprise use cases." },
  { icon: <Palette className="w-5 h-5" />, title: "Product Designer", type: "Design", location: "Bangalore / Remote", desc: "Design premium enterprise interfaces. UX strategy, interaction design, and design systems for complex business applications." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Business Analyst", type: "Strategy", location: "Bangalore", desc: "Bridge business and technology. Requirements gathering, workflow mapping, and stakeholder management for enterprise software projects." },
];

const internshipHighlights = [
  "Real-world project experience",
  "Industry mentorship",
  "Skill development",
  "Certificate upon successful completion",
  "Opportunity for future full-time roles based on performance",
];

const locations = [
  {
    city: "Bangalore",
    label: "Headquarters",
    address: "Pro Works, Om Chambers, 648/A,\n4th Floor, Binnamangala,\n1st Stage, Indiranagar,\nBangalore - 560038",
  },
  {
    city: "Hyderabad",
    label: "Office",
    address: "Hyderabad, Telangana, India",
  },
  {
    city: "Singapore",
    label: "Office",
    address: "Singapore",
  },
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

        {/* Hero */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Careers</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-5">
            Build What <span className="text-gradient-brand">Matters</span>
          </h1>
          <p className="text-muted-foreground text-lg">Join a team that builds premium enterprise software for real businesses. Speed, quality, and impact every project.</p>
        </AnimatedSection>

        {/* Internship Section */}
        <AnimatedSection className="mb-24">
          <div className="rounded-2xl border border-primary/20 bg-gradient-brand-subtle overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-10 lg:p-14">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Internship Program</p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-5">
                  Launch Your <span className="text-gradient-brand">Career</span> With Us
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Kickstart your career with Vaeyu Innovations. Our internship program provides hands-on experience on real-world projects under the guidance of experienced mentors. Interns work with modern technologies, collaborate with our engineering teams, and gain practical industry exposure.
                </p>
                <a
                  href="https://forms.gle/RQW46S16ghzJsHPr9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold bg-gradient-brand rounded-xl text-primary-foreground hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                >
                  Apply for Internship <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="p-10 lg:p-14 lg:border-l border-primary/10 flex items-center">
                <ul className="space-y-4 w-full">
                  {internshipHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary-foreground" />
                      </div>
                      <span className="text-foreground text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Open Roles */}
        <div className="max-w-3xl mx-auto space-y-4 mb-24">
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
                  <GradientButton to="/contact" variant="outline" size="sm">
                    Apply <ArrowRight className="w-3.5 h-3.5" />
                  </GradientButton>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="text-center mb-24">
          <p className="text-muted-foreground text-sm">Don't see your role? We're always looking for exceptional talent.</p>
          <p className="text-sm mt-2">Send your resume to <a href="mailto:info@vaeyuinnovations.com" className="text-primary hover:underline">info@vaeyuinnovations.com</a></p>
        </AnimatedSection>

        {/* Locations */}
        <AnimatedSection className="mb-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Our Locations</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Where We <span className="text-gradient-brand">Work</span>
            </h2>
            <p className="text-muted-foreground">
              Our teams collaborate across multiple locations, giving employees opportunities to work on global projects and grow in a dynamic environment.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {locations.map((loc, i) => (
              <AnimatedSection key={loc.city} delay={i * 0.1}>
                <div className="rounded-2xl border border-border/30 bg-card/30 p-7 hover-lift h-full">
                  <div className="w-11 h-11 rounded-xl bg-gradient-brand-subtle flex items-center justify-center text-primary mb-5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-1">{loc.city}</h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{loc.label}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">{loc.address}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </section>
  </>
);

export default Careers;
