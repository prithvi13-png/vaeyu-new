import { render, type RenderOptions } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import type { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => (
  <HelmetProvider>
    <MemoryRouter>
      {children}
      <Toaster />
    </MemoryRouter>
  </HelmetProvider>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";
export { customRender as render };
