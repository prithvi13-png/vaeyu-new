import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import GradientButton from "@/components/ui/GradientButton";
import { trackEvent } from "@/lib/analytics";
import { submitLead } from "@/lib/leadCapture";
import { exitIntentSchema, type ExitIntentFormData } from "@/lib/validationSchemas";
import { ArrowRight, CheckCircle2, X } from "lucide-react";

const ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const mouseYRef = useRef(0);

  const form = useForm<ExitIntentFormData>({
    resolver: zodResolver(exitIntentSchema),
    defaultValues: { name: "", email: "" },
  });

  useEffect(() => {
    if (hasShown) return;
    if (sessionStorage.getItem("exitIntentShown")) {
      setHasShown(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseYRef.current = e.clientY;
      if (e.clientY < 100 && !hasShown && !open) {
        setOpen(true);
        setHasShown(true);
        trackEvent("exit_intent_popup_shown");
        sessionStorage.setItem("exitIntentShown", "true");
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [hasShown, open]);

  const handleClose = () => {
    setOpen(false);
    trackEvent("exit_intent_popup_closed");
  };

  const onSubmit = async (data: ExitIntentFormData) => {
    setIsSubmitting(true);
    try {
      await submitLead(
        { name: data.name, email: data.email },
        { source: "exit_intent", subject: `Exit Intent Lead: ${data.name}` },
      );
      trackEvent("exit_intent_lead_captured", { lead_email: data.email });
      setSubmitted(true);
    } catch {
      trackEvent("form_submit_error", { form_name: "exit_intent" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md border-border/50 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        {submitted ? (
          <div className="py-6 text-center">
            <div className="w-14 h-14 rounded-full bg-gradient-brand flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-2">Perfect — we've got you</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Expect a reply within 24 hours. We've sent a confirmation to your inbox.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader className="text-left">
              <DialogTitle className="text-2xl font-bold">Before you go...</DialogTitle>
              <DialogDescription className="text-base text-muted-foreground pt-2">
                Get a free 30-minute strategy call. We'll discuss your project, timeline, and budget — no obligation.
              </DialogDescription>
            </DialogHeader>

            <div className="rounded-lg bg-gradient-brand/10 border border-primary/20 p-4 mb-4">
              <h3 className="font-semibold text-sm text-foreground mb-2">What you'll get:</h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Expert assessment of your specific requirements
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Custom solution architecture recommendation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Realistic timeline & budget estimate
                </li>
              </ul>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
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
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm">Work Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@company.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex gap-3 pt-1">
                  <GradientButton
                    type="submit"
                    size="lg"
                    className="flex-1"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Get Free Call"} <ArrowRight className="w-4 h-4" />
                  </GradientButton>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-5 py-2 rounded-lg border border-border/50 bg-card/50 hover:bg-card text-foreground font-medium transition-colors text-sm"
                  >
                    Later
                  </button>
                </div>
                <p className="text-[11px] text-muted-foreground/60 text-center">
                  We'll confirm by email and reach out within 24 hours.
                </p>
              </form>
            </Form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
