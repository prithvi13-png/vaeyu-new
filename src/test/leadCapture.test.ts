import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { submitLead } from "@/lib/leadCapture";

describe("submitLead", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
    vi.stubEnv("VITE_WEB3FORMS_KEY", "test-key-abc");
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllEnvs();
  });

  it("POSTs to Web3Forms with correct fields", async () => {
    vi.mocked(fetch).mockResolvedValueOnce(new Response("{}", { status: 200 }));

    await submitLead(
      { name: "Jane Doe", email: "jane@company.com", interest: "ERP Solutions" },
      { source: "homepage_lead_form", subject: "New Lead: Jane Doe" },
    );

    expect(fetch).toHaveBeenCalledOnce();
    const [url, init] = vi.mocked(fetch).mock.calls[0];
    expect(String(url)).toBe("https://api.web3forms.com/submit");
    expect(init?.method).toBe("POST");

    const body = JSON.parse(init?.body as string);
    expect(body.name).toBe("Jane Doe");
    expect(body.email).toBe("jane@company.com");
    expect(body.source).toBe("homepage_lead_form");
    expect(body.access_key).toBe("test-key-abc");
    expect(body.replyto).toBe("jane@company.com");
  });

  it("sets replyto from the email field", async () => {
    vi.mocked(fetch).mockResolvedValueOnce(new Response("{}", { status: 200 }));

    await submitLead(
      { name: "Test User", email: "test@example.com" },
      { source: "contact_form", subject: "Test" },
    );

    const body = JSON.parse(vi.mocked(fetch).mock.calls[0][1]?.body as string);
    expect(body.replyto).toBe("test@example.com");
  });

  it("skips empty/whitespace values from the payload", async () => {
    vi.mocked(fetch).mockResolvedValueOnce(new Response("{}", { status: 200 }));

    await submitLead(
      { name: "Sam", email: "sam@example.com", phone: "   " },
      { source: "exit_intent", subject: "Exit Intent Lead: Sam" },
    );

    const body = JSON.parse(vi.mocked(fetch).mock.calls[0][1]?.body as string);
    expect(body.phone).toBeUndefined();
  });

  it("throws when Web3Forms response is not ok", async () => {
    vi.mocked(fetch).mockResolvedValueOnce(new Response("{}", { status: 422 }));

    await expect(
      submitLead(
        { name: "Fail User", email: "fail@example.com" },
        { source: "contact_form", subject: "Fail" },
      ),
    ).rejects.toThrow("Lead submission failed");
  });

  it("throws when access key is not configured", async () => {
    vi.stubEnv("VITE_WEB3FORMS_KEY", "");

    await expect(
      submitLead({ name: "X", email: "x@x.com" }, { source: "contact_form", subject: "X" }),
    ).rejects.toThrow("not configured");
  });
});
