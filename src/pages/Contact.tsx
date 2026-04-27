import { FormEvent, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useToast } from "@/hooks/use-toast";
import { submitLead } from "@/lib/leadCapture";
import { trackEvent } from "@/lib/analytics";
import { leadInterestOptions } from "@/lib/validationSchemas";
import { Mail, Phone, MapPin, Send, CalendarDays } from "lucide-react";

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL?.trim();

const CalendlyEmbed = ({ url }: { url: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const existing = document.querySelector('script[src*="calendly"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget w-full rounded-2xl overflow-hidden border border-border/30"
      data-url={`${url}?hide_gdpr_banner=1`}
      style={{ minHeight: 700 }}
    />
  );
};

const Contact = () => {
  const [activeTab, setActiveTab] = useState<"message" | "book">("message");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const { toast } = useToast();

  const inputClass =
    "w-full bg-secondary/30 border border-border/50 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors";
  const labelClass = "block text-xs font-medium text-muted-foreground mb-2";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const interest = String(formData.get("interest") ?? "");

    try {
      await submitLead(
        {
          name,
          email,
          phone: String(formData.get("phone") ?? ""),
          company: String(formData.get("company") ?? ""),
          interest,
          timeline: String(formData.get("timeline") ?? ""),
          message: String(formData.get("message") ?? ""),
        },
        {
          source: "contact_form",
          subject: "New Inquiry from Vaeyu Website",
        },
      );

      trackEvent("generate_lead", {
        form_name: "contact_form",
        lead_interest: interest || "not_selected",
      });

      setSubmitted(true);
      form.reset();
      toast({
        title: "Thanks for reaching out",
        description: "We've received your inquiry and will respond within 24 hours.",
      });
    } catch {
      trackEvent("form_submit_error", { form_name: "contact_form" });
      setSubmitError("We couldn't submit your inquiry right now. Please try again in a moment.");
      toast({
        title: "Submission failed",
        description: "Please retry, or email us directly at info@vaeyuinnovations.com.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact — Vaeyu Innovations | Get Free Consultation</title>
        <meta
          name="description"
          content="Get a free consultation for your ERP, CRM, or AI project. Contact Vaeyu Innovations — premium custom software, delivered faster."
        />
        <meta property="og:title" content="Contact Vaeyu Innovations" />
        <meta property="og:description" content="Get a free consultation for your custom software project." />
        <link rel="canonical" href="https://vaeyuinnovations.com/contact" />
      </Helmet>

      <section className="section-padding">
        <div className="container-premium">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Contact Us
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-5">
              Let's Build <span className="text-gradient-brand">Together</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Tell us about your project. Free strategy consultation — no obligation, no pressure.
            </p>
          </AnimatedSection>

          {/* Tab switcher */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-xl border border-border/40 bg-secondary/20 p-1 gap-1">
              <button
                onClick={() => {
                  setActiveTab("message");
                  trackEvent("click_cta", { cta_name: "contact_tab_message" });
                }}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === "message"
                    ? "bg-gradient-brand text-primary-foreground shadow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Send a Message
              </button>
              <button
                onClick={() => {
                  setActiveTab("book");
                  trackEvent("click_cta", { cta_name: "contact_tab_book_call" });
                }}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === "book"
                    ? "bg-gradient-brand text-primary-foreground shadow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <CalendarDays className="w-4 h-4" />
                Book a Call
              </button>
            </div>
          </div>

          {activeTab === "message" ? (
            <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
              <AnimatedSection className="lg:col-span-3">
                {submitted ? (
                  <div className="rounded-2xl border border-primary/20 bg-gradient-brand-subtle p-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-brand flex items-center justify-center mx-auto mb-6">
                      <Send className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-3">Thank You</h3>
                    <p className="text-muted-foreground">
                      We've received your inquiry. Our team will reach out within 24 hours. Check your inbox for a confirmation.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="rounded-2xl border border-border/30 bg-card/30 p-8 space-y-6"
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClass}>Full Name *</label>
                        <input required name="name" type="text" className={inputClass} placeholder="Your name" />
                      </div>
                      <div>
                        <label className={labelClass}>Email *</label>
                        <input required name="email" type="email" className={inputClass} placeholder="you@company.com" />
                      </div>
                      <div>
                        <label className={labelClass}>Phone</label>
                        <input name="phone" type="tel" className={inputClass} placeholder="+91 XXXXX XXXXX" />
                      </div>
                      <div>
                        <label className={labelClass}>Company</label>
                        <input name="company" type="text" className={inputClass} placeholder="Company name" />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>I'm interested in *</label>
                      <select required name="interest" className={inputClass}>
                        <option value="">Select an option</option>
                        {leadInterestOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClass}>Timeline</label>
                        <select name="timeline" className={inputClass}>
                          <option value="">Select timeline</option>
                          <option value="ASAP">ASAP</option>
                          <option value="1–2 Months">1–2 Months</option>
                          <option value="3–6 Months">3–6 Months</option>
                          <option value="Just Exploring">Just Exploring</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Project Details *</label>
                      <textarea
                        required
                        name="message"
                        rows={4}
                        className={inputClass}
                        placeholder="Tell us about your project requirements, challenges, and goals..."
                      />
                    </div>

                    <p className="text-xs text-muted-foreground">
                      Your information is secure. We respect your privacy and will never share your data. You'll receive a confirmation email immediately.
                    </p>

                    {submitError ? <p className="text-sm text-destructive">{submitError}</p> : null}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold bg-gradient-brand rounded-xl text-primary-foreground hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                    </button>
                  </form>
                )}
              </AnimatedSection>

              <AnimatedSection delay={0.2} className="lg:col-span-2 space-y-8">
                <div className="rounded-2xl border border-border/30 bg-card/30 p-7">
                  <h3 className="font-heading font-bold text-lg mb-6">Get in Touch</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-brand-subtle flex items-center justify-center text-primary flex-shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Email</p>
                        <a href="mailto:info@vaeyuinnovations.com" className="text-sm text-foreground hover:text-primary transition-colors">
                          info@vaeyuinnovations.com
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-brand-subtle flex items-center justify-center text-primary flex-shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Phone</p>
                        <a href="tel:+917204873132" className="text-sm text-foreground hover:text-primary transition-colors">
                          +91 7204873132
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-brand-subtle flex items-center justify-center text-primary flex-shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Office</p>
                        <p className="text-sm text-foreground leading-relaxed">
                          Pro Works, Om Chambers, 648/A,<br />
                          4th Floor, Binnamangala,<br />
                          1st Stage, Indiranagar,<br />
                          Bangalore - 560038
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-primary/20 bg-gradient-brand-subtle p-7">
                  <h3 className="font-heading font-bold mb-3">Prefer a live conversation?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Switch to the "Book a Call" tab to schedule a free 30-minute strategy session directly on our calendar — no back-and-forth emails.
                  </p>
                  <button
                    onClick={() => {
                      setActiveTab("book");
                      trackEvent("click_cta", { cta_name: "contact_sidebar_book_call" });
                    }}
                    className="text-sm font-semibold text-primary hover:underline flex items-center gap-1"
                  >
                    <CalendarDays className="w-4 h-4" /> Book a call instead
                  </button>
                </div>
              </AnimatedSection>
            </div>
          ) : (
            <AnimatedSection className="max-w-4xl mx-auto">
              {CALENDLY_URL ? (
                <CalendlyEmbed url={CALENDLY_URL} />
              ) : (
                <div className="rounded-2xl border border-border/30 bg-card/30 p-12 text-center max-w-lg mx-auto">
                  <div className="w-14 h-14 rounded-full bg-gradient-brand-subtle flex items-center justify-center mx-auto mb-5">
                    <CalendarDays className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">Book a Strategy Call</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Email us to schedule a free 30-minute strategy session. We typically confirm within a few hours.
                  </p>
                  <a
                    href="mailto:info@vaeyuinnovations.com?subject=Book a Strategy Call"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-brand rounded-xl text-sm font-semibold text-primary-foreground hover:scale-[1.02] transition-all duration-300"
                    onClick={() => trackEvent("click_cta", { cta_name: "contact_book_via_email" })}
                  >
                    <Mail className="w-4 h-4" />
                    Email to book
                  </a>
                  <p className="text-[11px] text-muted-foreground/60 mt-4">
                    Or call +91 7204873132 to book directly.
                  </p>
                </div>
              )}
            </AnimatedSection>
          )}
        </div>
      </section>
    </>
  );
};

export default Contact;
