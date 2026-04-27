declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
let analyticsInitialized = false;

const hasAnalytics = () => Boolean(GA_MEASUREMENT_ID) && typeof window !== "undefined";

export const initAnalytics = () => {
  if (!hasAnalytics() || analyticsInitialized || !GA_MEASUREMENT_ID) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtagShim(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: false,
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  analyticsInitialized = true;
};

type EventValue = string | number | boolean | undefined;

const sanitize = (params: Record<string, EventValue>) =>
  Object.fromEntries(Object.entries(params).filter(([, value]) => value !== undefined));

export const trackEvent = (eventName: string, params: Record<string, EventValue> = {}) => {
  if (!hasAnalytics() || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, sanitize(params));
};

export const trackPageView = (path: string) => {
  if (typeof window === "undefined") {
    return;
  }

  trackEvent("page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
};
