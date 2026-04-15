import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientButton from "@/components/ui/GradientButton";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  { title: "Why Custom ERP Outperforms Off-the-Shelf Solutions", category: "ERP", excerpt: "Rigid platforms force businesses to adapt to software. Here's why building around your actual workflows delivers better ROI.", date: "Apr 10, 2026", readTime: "5 min" },
  { title: "The CRM Your Sales Team Actually Wants to Use", category: "CRM", excerpt: "Most CRMs become data graveyards. Learn how custom CRM design changes adoption and results.", date: "Apr 5, 2026", readTime: "4 min" },
  { title: "Practical AI for Business: Beyond the Hype", category: "AI", excerpt: "AI isn't magic. It's engineering. Here's how businesses are using custom AI tools for real operational impact.", date: "Mar 28, 2026", readTime: "6 min" },
  { title: "Accelerated Software Delivery Without the Shortcuts", category: "Strategy", excerpt: "How lean execution models deliver production-grade systems faster than traditional software agencies.", date: "Mar 20, 2026", readTime: "5 min" },
  { title: "Digital Transformation for Manufacturing in 2026", category: "Industry", excerpt: "From shop floor to dashboard — how manufacturing companies are modernizing operations with custom software.", date: "Mar 15, 2026", readTime: "7 min" },
  { title: "Building Dashboards That Drive Decisions", category: "Product", excerpt: "The difference between data display and actionable intelligence. How to design dashboards teams actually use.", date: "Mar 8, 2026", readTime: "4 min" },
];

const Blog = () => (
  <>
    <Helmet>
      <title>Blog — Vaeyu Innovations | Insights on ERP, CRM & AI</title>
      <meta name="description" content="Expert insights on ERP, CRM, AI, digital transformation, and custom software delivery from the Vaeyu Innovations team." />
    </Helmet>

    <section className="section-padding">
      <div className="container-premium">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Insights</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-5">
            The Vaeyu <span className="text-gradient-brand">Blog</span>
          </h1>
          <p className="text-muted-foreground text-lg">Perspectives on enterprise technology, business systems, and the craft of building software that matters.</p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <AnimatedSection key={post.title} delay={i * 0.08}>
              <article className="rounded-2xl border border-border/30 bg-card/30 overflow-hidden hover-lift h-full flex flex-col group">
                <div className="h-48 bg-gradient-brand-subtle relative">
                  <div className="absolute inset-0 dot-pattern opacity-20" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">{post.category}</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="font-heading text-lg font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Blog;
