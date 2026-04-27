import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackEvent } from "@/lib/analytics";
import { MessageCircle, X, Send, ChevronRight } from "lucide-react";

interface Message {
  role: "bot" | "user";
  text: string;
}

const suggestedQuestions = [
  "What ERP solutions do you offer?",
  "Tell me about CRM services",
  "How can AI help my business?",
  "How do I get a consultation?",
  "What industries do you serve?",
  "How fast can you deliver?",
];

const getResponse = (q: string): string => {
  const lower = q.toLowerCase();
  if (lower.includes("erp")) return "We build custom ERP systems tailored to your business workflows — operations, inventory, HR, finance, and more. Unlike rigid platforms, our ERP adapts to how your team works. Would you like to explore our ERP Solutions page or book a free consultation?";
  if (lower.includes("crm")) return "Our custom CRM solutions cover lead management, pipeline tracking, customer lifecycle, sales dashboards, and automation. Each CRM is built specifically for your business model. Visit our CRM Solutions page or reach out for a consultation.";
  if (lower.includes("ai") || lower.includes("artificial")) return "We create practical AI tools for business — AI assistants, workflow automation, document intelligence, smart dashboards, and more. These are real operational tools, not demos. Check our AI Solutions page or let's discuss your requirements.";
  if (lower.includes("consult") || lower.includes("contact") || lower.includes("reach")) return "You can reach us at:\n📧 info@vaeyuinnovations.com\n📞 +91 7204873132\n\nOr visit our Contact page to submit a project inquiry. We offer free strategy consultations.";
  if (lower.includes("phone") || lower.includes("call") || lower.includes("number")) return "You can call us at +91 7204873132. We're happy to discuss your project requirements.";
  if (lower.includes("email")) return "You can email us at info@vaeyuinnovations.com. We typically respond within 24 hours.";
  if (lower.includes("industr")) return "We serve Healthcare, Retail, Manufacturing, Education, Hospitality, Professional Services, Real Estate, Startups, and more. Our solutions are customized for each industry's unique workflows.";
  if (lower.includes("fast") || lower.includes("deliver") || lower.includes("time") || lower.includes("speed")) return "Speed is our differentiator. Where traditional agencies take 3+ months, our lean delivery model gets business-ready systems live in weeks. No shortcuts on quality — just focused execution.";
  if (lower.includes("price") || lower.includes("cost") || lower.includes("budget")) return "Every project is unique. We offer flexible engagement models based on scope and complexity. Book a free consultation and we'll provide a tailored estimate — info@vaeyuinnovations.com";
  return "Thank you for your interest! We specialize in custom ERP, CRM, and AI solutions for businesses. For detailed information, I'd recommend reaching out to our team at info@vaeyuinnovations.com or calling +91 7204873132. We offer free consultations.";
};

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hello! I'm Vaeyu's assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const send = (text: string) => {
    if (!text.trim()) return;
    trackEvent("chatbot_message_sent", {
      message_length: text.trim().length,
    });
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: getResponse(text) }]);
    }, 600);
  };

  return (
    <>
      {/* Toggle */}
      <motion.button
        onClick={() => {
          const nextOpen = !open;
          setOpen(nextOpen);
          if (nextOpen) {
            trackEvent("chatbot_opened");
          }
        }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-brand flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
        whileTap={{ scale: 0.95 }}
        aria-label="Chat with us"
      >
        {open ? <X className="w-5 h-5 text-primary-foreground" /> : <MessageCircle className="w-5 h-5 text-primary-foreground" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] glass rounded-2xl overflow-hidden flex flex-col"
            style={{ height: "480px" }}
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-border/50 bg-gradient-brand-subtle">
              <h3 className="font-heading font-semibold text-sm text-foreground">Vaeyu Assistant</h3>
              <p className="text-xs text-muted-foreground mt-0.5">We typically reply instantly</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${msg.role === "user"
                    ? "bg-gradient-brand text-primary-foreground rounded-br-md"
                    : "bg-secondary text-secondary-foreground rounded-bl-md"
                    }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>

            {/* Suggestions */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {suggestedQuestions.slice(0, 3).map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="text-xs px-3 py-1.5 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors flex items-center gap-1"
                  >
                    {q.slice(0, 30)}{q.length > 30 ? "…" : ""}
                    <ChevronRight className="w-3 h-3" />
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-border/50">
              <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-secondary/50 border border-border/50 rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/30 transition-colors"
                />
                <button type="submit" className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center hover:scale-105 transition-transform">
                  <Send className="w-4 h-4 text-primary-foreground" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
