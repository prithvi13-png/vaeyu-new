import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  leadCaptureSchema,
  leadInterestOptions,
  type LeadCaptureFormData,
} from "@/lib/validationSchemas";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import GradientButton from "@/components/ui/GradientButton";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useToast } from "@/hooks/use-toast";
import { submitLead } from "@/lib/leadCapture";
import { trackEvent } from "@/lib/analytics";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const LeadCaptureForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<LeadCaptureFormData>({
    resolver: zodResolver(leadCaptureSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: undefined,
    },
  });

  const onSubmit = async (data: LeadCaptureFormData) => {
    setIsSubmitting(true);
    try {
      await submitLead(
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          interest: data.interest,
        },
        {
          source: "homepage_lead_form",
          subject: `New Lead: ${data.name}`,
        },
      );

      trackEvent("generate_lead", {
        form_name: "homepage_lead_capture",
        lead_interest: data.interest,
        has_phone: data.phone ? "yes" : "no",
      });

      setSubmitted(true);
      form.reset();
    } catch {
      trackEvent("form_submit_error", { form_name: "homepage_lead_capture" });
      toast({
        title: "Something went wrong",
        description: "Please try again or email us at info@vaeyuinnovations.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <AnimatedSection>
        <div className="rounded-2xl border border-primary/20 bg-gradient-brand-subtle p-10 max-w-md mx-auto text-center">
          <div className="w-14 h-14 rounded-full bg-gradient-brand flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="w-7 h-7 text-primary-foreground" />
          </div>
          <h3 className="font-heading text-xl font-bold mb-2">You're on the list</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            We'll reach out within 24 hours. Check your inbox — a confirmation is on its way.
          </p>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <AnimatedSection>
      <div className="rounded-2xl border border-border/30 bg-card/30 p-8 max-w-md mx-auto">
        <h3 className="font-heading text-xl font-bold mb-2">Get a Free Strategy Call</h3>
        <p className="text-muted-foreground text-sm mb-6">Tell us what you need, and we'll design a solution for your business.</p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@company.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Phone <span className="text-muted-foreground/60">(optional)</span></FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="+91 XXXXX XXXXX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="interest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">What are you looking for?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {leadInterestOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <GradientButton type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Get Free Call"} <ArrowRight className="w-4 h-4" />
            </GradientButton>

            <p className="text-[11px] text-muted-foreground/60 text-center">
              No spam. We'll confirm by email and reach out within 24 hours.
            </p>
          </form>
        </Form>
      </div>
    </AnimatedSection>
  );
};

export default LeadCaptureForm;
