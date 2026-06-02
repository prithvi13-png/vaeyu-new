import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/layout/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import RouteAnalytics from "@/components/RouteAnalytics";

import Index from "./pages/Index";
import Services from "./pages/Services";
import WebAppDevelopment from "./pages/WebAppDevelopment";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import ERPSolutions from "./pages/ERPSolutions";
import CRMSolutions from "./pages/CRMSolutions";
import AISolutions from "./pages/AISolutions";
import Industries from "./pages/Industries";
import About from "./pages/About";
import OurProcess from "./pages/OurProcess";
// import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const RootLayout = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <RouteAnalytics />
      <Layout>
        <Outlet />
      </Layout>
    </TooltipProvider>
  </QueryClientProvider>
);

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Index /> },
      { path: "services", element: <Services /> },
      { path: "web-app-development", element: <WebAppDevelopment /> },
      { path: "mobile-app-development", element: <MobileAppDevelopment /> },
      { path: "erp-solutions", element: <ERPSolutions /> },
      { path: "crm-solutions", element: <CRMSolutions /> },
      { path: "ai-solutions", element: <AISolutions /> },
      { path: "industries", element: <Industries /> },
      { path: "about", element: <About /> },
      { path: "our-process", element: <OurProcess /> },
      // { path: "blog", element: <Blog /> },
      { path: "careers", element: <Careers /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
