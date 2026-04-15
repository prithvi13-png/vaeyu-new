import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/layout/Layout";
import ScrollToTop from "@/components/ScrollToTop";

import Index from "./pages/Index";
import Services from "./pages/Services";
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

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/erp-solutions" element={<ERPSolutions />} />
              <Route path="/crm-solutions" element={<CRMSolutions />} />
              <Route path="/ai-solutions" element={<AISolutions />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/about" element={<About />} />
              <Route path="/our-process" element={<OurProcess />} />
              {/* <Route path="/blog" element={<Blog />} /> */}
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;