import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BackToTop } from "@/components/common/BackToTop";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-20 overflow-x-hidden">{children}</main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
}
