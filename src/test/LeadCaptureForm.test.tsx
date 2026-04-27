import { describe, it, expect, vi, beforeEach } from "vitest";
import { screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "./utils";
import LeadCaptureForm from "@/components/LeadCaptureForm";

vi.mock("@/lib/leadCapture", () => ({
  submitLead: vi.fn(),
}));

vi.mock("@/lib/analytics", () => ({
  trackEvent: vi.fn(),
  trackPageView: vi.fn(),
  initAnalytics: vi.fn(),
}));

import { submitLead } from "@/lib/leadCapture";

// Radix Select opens a portal; after clicking the combobox, click the option via fireEvent
// because userEvent respects the `pointer-events: none` the overlay sets on <body>
const selectInterest = async (user: ReturnType<typeof userEvent.setup>, option = "ERP Solutions") => {
  await user.click(screen.getByRole("combobox"));
  // Two nodes share the same text: the Radix portal span and the Radix hidden <option>
  // We want the visible portal span (role="option")
  const optionEl = await screen.findByRole("option", { name: option });
  fireEvent.click(optionEl);
};

describe("LeadCaptureForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders all form fields", () => {
    render(<LeadCaptureForm />);
    expect(screen.getByPlaceholderText("John Doe")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("you@company.com")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("+91 XXXXX XXXXX")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /get free call/i })).toBeInTheDocument();
  });

  it("blocks submission and shows error when name is missing", async () => {
    const user = userEvent.setup();
    render(<LeadCaptureForm />);

    await user.click(screen.getByRole("button", { name: /get free call/i }));

    await waitFor(() => {
      expect(screen.getByText(/at least 2 characters/i)).toBeInTheDocument();
    });
    expect(submitLead).not.toHaveBeenCalled();
  });

  it("blocks submission when required fields are invalid", async () => {
    const user = userEvent.setup();
    render(<LeadCaptureForm />);

    // Submit with a valid name but missing email and interest
    await user.type(screen.getByPlaceholderText("John Doe"), "John Doe");
    await user.click(screen.getByRole("button", { name: /get free call/i }));

    // The success state must NOT appear and submitLead must NOT be called
    await new Promise((r) => setTimeout(r, 300));
    expect(screen.queryByText(/you're on the list/i)).not.toBeInTheDocument();
    expect(submitLead).not.toHaveBeenCalled();
  });

  it("submits successfully and shows success state", async () => {
    vi.mocked(submitLead).mockResolvedValueOnce(new Response("{}", { status: 200 }));
    const user = userEvent.setup();
    render(<LeadCaptureForm />);

    await user.type(screen.getByPlaceholderText("John Doe"), "Jane Smith");
    await user.type(screen.getByPlaceholderText("you@company.com"), "jane@company.com");
    await selectInterest(user);

    await user.click(screen.getByRole("button", { name: /get free call/i }));

    await waitFor(() => {
      expect(screen.getByText(/you're on the list/i)).toBeInTheDocument();
    });

    expect(submitLead).toHaveBeenCalledWith(
      expect.objectContaining({ name: "Jane Smith", email: "jane@company.com" }),
      expect.objectContaining({ source: "homepage_lead_form" }),
    );
  });

  it("shows error toast when submission fails", async () => {
    vi.mocked(submitLead).mockRejectedValueOnce(new Error("Network error"));
    const user = userEvent.setup();
    render(<LeadCaptureForm />);

    await user.type(screen.getByPlaceholderText("John Doe"), "Error User");
    await user.type(screen.getByPlaceholderText("you@company.com"), "error@company.com");
    await selectInterest(user);

    await user.click(screen.getByRole("button", { name: /get free call/i }));

    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    });
    expect(submitLead).toHaveBeenCalledOnce();
  });
});
