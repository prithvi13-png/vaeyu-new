import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientButton from "@/components/ui/GradientButton";
import { ArrowRight, Layers, Users, Brain, Globe, Cloud, BarChart3, Headphones, Search, Palette } from "lucide-react";

const ServicesMeta = () => (
  <Helmet>
    <title>Services — Vaeyu Innovations | Custom Software Solutions</title>
    <meta name="description" content="Vaeyu Innovations offers ERP, CRM, AI, web development, cloud infrastructure, consulting, and more. Full-spectrum technology solutions." />
    <meta property="og:title" content="Services — Vaeyu Innovations" />
    <meta property="og:description" content="Custom software, ERP, CRM, AI, web & mobile development, cloud infrastructure, and consulting." />
    <link rel="canonical" href="https://vaeyuinnovations.com/services" />
  </Helmet>
);

const services = [
  // 🔹 EXISTING (UNCHANGED)
  { icon: <Layers className="w-6 h-6" />, title: "ERP Solutions", desc: "Custom enterprise resource planning systems built around your business workflows. Operations, inventory, HR, finance unified.", link: "/erp-solutions", primary: true },
  { icon: <Users className="w-6 h-6" />, title: "CRM Solutions", desc: "Intelligent customer relationship management that converts leads, tracks pipelines, and scales revenue.", link: "/crm-solutions", primary: true },
  { icon: <Brain className="w-6 h-6" />, title: "Custom AI Tools", desc: "Practical AI systems assistants, automation, document intelligence built for real business operations.", link: "/ai-solutions", primary: true },
  { icon: <Globe className="w-6 h-6" />, title: "Web & Mobile Development", desc: "Scalable, high-performance web and mobile applications. From portals to platforms, engineered for growth.", link: "/services" },
  { icon: <Cloud className="w-6 h-6" />, title: "Cloud & DevOps", desc: "Secure cloud infrastructure, CI/CD pipelines, and scalable architecture for enterprise-grade reliability.", link: "/services" },
  { icon: <BarChart3 className="w-6 h-6" />, title: "Consulting", desc: "Strategic technology consulting that aligns digital transformation with business objectives.", link: "/services" },
  { icon: <Headphones className="w-6 h-6" />, title: "BPO Services", desc: "Business process outsourcing that ensures operational continuity and efficiency at scale.", link: "/services" },
  { icon: <Search className="w-6 h-6" />, title: "Technical SEO", desc: "Advanced technical SEO that drives qualified traffic, improves visibility, and supports lead generation.", link: "/services" },
  { icon: <Palette className="w-6 h-6" />, title: "Media & Creative", desc: "Premium creative services branding, content production, and visual identity for technology companies.", link: "/services" },

  // 🔹 NEW – FULL STACK DELIVERY
  { icon: <Layers className="w-6 h-6" />, title: "Full-Stack Technology Delivery", desc: "End-to-end product engineering from idea to deployment with ultra-fast execution and enterprise quality.", link: "/services", primary: true },

  // 🔹 IT SERVICES EXPANSION
  { icon: <Globe className="w-6 h-6" />, title: "API Integrations", desc: "Seamless integrations with third-party platforms, CRMs, payment gateways, and enterprise APIs.", link: "/services" },


  // 🔹 MEDIA & PRODUCTION EXPANSION
  { icon: <Palette className="w-6 h-6" />, title: "Photo & Video Production", desc: "High-quality cinematic production for branding, digital campaigns, and storytelling.", link: "/services" },
  { icon: <Users className="w-6 h-6" />, title: "Event Management", desc: "Complete event execution for corporate, entertainment, and large-scale productions.", link: "/services" },
  { icon: <BarChart3 className="w-6 h-6" />, title: "Commercial & Corporate Shoots", desc: "Premium shoots for brands, advertisements, and corporate communication.", link: "/services" },
  { icon: <Layers className="w-6 h-6" />, title: "Interior & Stage Design", desc: "Creative environment and stage design for events and production setups.", link: "/services" },

  // 🔹 CONSULTING EXPANSION
  { icon: <Brain className="w-6 h-6" />, title: "Product Strategy", desc: "End-to-end product planning from idea validation to scalable launch.", link: "/services", primary: true },
  { icon: <BarChart3 className="w-6 h-6" />, title: "Technical Architecture", desc: "Designing scalable, secure, and future-ready systems.", link: "/services" },
  { icon: <Globe className="w-6 h-6" />, title: "Digital Transformation", desc: "Helping businesses transition into digital-first enterprises.", link: "/services" },
  { icon: <Brain className="w-6 h-6" />, title: "AI Strategy", desc: "Strategic implementation of AI for automation and growth.", link: "/services" },

  // 🔹 BPO EXPANSION
  { icon: <Headphones className="w-6 h-6" />, title: "Customer Support", desc: "Global customer support operations with scalable teams.", link: "/services" },
  { icon: <Layers className="w-6 h-6" />, title: "Data Processing", desc: "Accurate and efficient data handling for operations and analytics.", link: "/services" },
  { icon: <Search className="w-6 h-6" />, title: "Quality Assurance", desc: "Process-driven QA services ensuring consistency and compliance.", link: "/services" },
  { icon: <Users className="w-6 h-6" />, title: "Back Office Operations", desc: "Operational support systems for scaling organizations.", link: "/services" },

  // 🔹 SEO EXPANSION
  { icon: <Search className="w-6 h-6" />, title: "Technical Audit", desc: "Detailed SEO audits to uncover performance gaps.", link: "/services" },

  { icon: <Layers className="w-6 h-6" />, title: "Schema Markup", desc: "Structured data to enhance search engine visibility.", link: "/services" },
  { icon: <Cloud className="w-6 h-6" />, title: "Performance Optimization", desc: "Speed and performance tuning for better rankings and UX.", link: "/services" },

  // 🔹 CA SERVICES (NEW)
  { icon: <Users className="w-6 h-6" />, title: "CA Services", desc: "Taxation, compliance, financial advisory, and business consulting services.", link: "/services", primary: true },
];

const Services = () => (
  <>
    <Helmet>
      <title>Services — Vaeyu Innovations | ERP, CRM, AI & Enterprise Software</title>
      <meta name="description" content="Explore Vaeyu Innovations' full range of technology services including custom ERP, CRM, AI solutions, web development, cloud, consulting, and more." />
      <meta property="og:title" content="Services — Vaeyu Innovations" />
      <meta property="og:description" content="Custom software, ERP, CRM, AI, web & mobile development, cloud infrastructure, consulting." />
      <link rel="canonical" href="https://vaeyuinnovations.com/services" />
    </Helmet>

    <section className="section-padding">
      <div className="container-premium">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Our Services</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-5">
            End-to-End Technology <span className="text-gradient-brand">Solutions</span>
          </h1>
          <p className="text-muted-foreground text-lg">From ERP and CRM to AI and custom platforms comprehensive technology services built for scale and delivered with speed.</p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.08}>
              <div className={`group rounded-2xl border p-7 hover-lift h-full flex flex-col ${s.primary ? "border-primary/20 bg-gradient-brand-subtle" : "border-border/30 bg-card/30"}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${s.primary ? "bg-gradient-brand text-primary-foreground" : "bg-secondary text-primary"}`}>
                  {s.icon}
                </div>
                <h3 className="font-heading text-lg font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{s.desc}</p>
                {/* <GradientButton to={s.link} variant="ghost" size="sm" className="mt-5 self-start">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </GradientButton> */}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-gradient-to-b from-secondary/20 to-transparent">
      <div className="container-premium">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-brand p-12 sm:p-16 text-center">
            <div className="absolute inset-0 dot-pattern opacity-10" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-5">Need a Custom Solution?</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">Tell us about your project. We'll design a tailored approach and deliver faster than you'd expect.</p>
              <GradientButton to="/contact" variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Start Your Project <ArrowRight className="w-4 h-4" />
              </GradientButton>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Services;
