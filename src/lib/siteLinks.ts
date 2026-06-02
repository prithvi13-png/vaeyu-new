// ─────────────────────────────────────────────────────────────────────────────
// Site-wide links / contact constants.
//
// Cal.com: no booking link yet. All "Book a Free Consultation" buttons currently
// route to the internal /contact page. When a real Cal.com link is available,
// add it here (e.g. `export const CAL_COM_URL = "https://cal.com/your-team/..."`)
// and point the header/hero/footer CTAs and the Contact page at it.
// ─────────────────────────────────────────────────────────────────────────────

// WhatsApp click-to-chat. Number must be country code + number, digits only (no "+").
// ⚠️ MUST CONFIRM: verify this number is registered/enabled on WhatsApp before
// trusting this button — wa.me links silently fail for non-WhatsApp numbers.
export const WHATSAPP_NUMBER = "917204873132";
export const WHATSAPP_MESSAGE = "Hi Vaeyu Innovations, I'd like to discuss a project.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;
