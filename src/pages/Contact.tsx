import { FormEvent, useState } from "react";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useToast } from "@/hooks/use-toast";
import { submitLead } from "@/lib/leadCapture";
import { trackEvent } from "@/lib/analytics";
import { leadInterestOptions } from "@/lib/validationSchemas";
import { Mail, Phone, MapPin, Send } from "lucide-react";

// NOTE: No Cal.com booking link yet, so there is no calendar embed / booking tab.
// When a real Cal.com link exists, add the embed (or a "Book a Call" CTA / tab) here.

const Contact = () => {
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

          {/* Contact form (default and only view — booking tab removed until a Cal.com link exists) */}
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
                    Call or email us directly and we'll set up a free 30-minute strategy session at a time that works for you.
                  </p>
                  <a
                    href="tel:+917204873132"
                    onClick={() => trackEvent("click_cta", { cta_name: "contact_sidebar_call" })}
                    className="text-sm font-semibold text-primary hover:underline flex items-center gap-1"
                  >
                    <Phone className="w-4 h-4" /> +91 7204873132
                  </a>
                </div>
              </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
