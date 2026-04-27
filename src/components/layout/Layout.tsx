import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Chatbot from "@/components/Chatbot";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-20">{children}</main>
    <Footer />
    <Chatbot />
    <ExitIntentPopup />
  </div>
);

export default Layout;