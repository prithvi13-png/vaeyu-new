export type LeadPayload = Record<string, string | undefined>;

interface LeadSubmitOptions {
  source: "homepage_lead_form" | "contact_form" | "exit_intent";
  subject: string;
}

export const submitLead = async (
  payload: LeadPayload,
  options: LeadSubmitOptions,
) => {
  const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY?.trim();
  if (!WEB3FORMS_KEY) {
    throw new Error("Web3Forms access key is not configured (VITE_WEB3FORMS_KEY)");
  }

  const clean: Record<string, string> = {};
  Object.entries(payload).forEach(([key, value]) => {
    if (value && value.trim()) clean[key] = value.trim();
  });

  const body = {
    access_key: WEB3FORMS_KEY,
    subject: options.subject,
    source: options.source,
    from_name: "Vaeyu Innovations Website",
    // Sends an auto-confirmation email to the lead
    replyto: clean.email ?? "",
    ...clean,
  };

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("Lead submission failed");
  }

  return response;
};
