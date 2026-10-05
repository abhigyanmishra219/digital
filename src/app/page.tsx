"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickServices from "@/components/QuickServices";
import ServicesSection from "@/components/ServicesSection";
import DigitalAudit from "@/components/DigitalAudit";
import PriceSheet from "@/components/PriceSheet";
import Solutions from "@/components/Solutions";
import HowWeWork from "@/components/HowWeWork";
import WhyUs from "@/components/WhyUs";
import TechConnection from "@/components/TechConnection";
import ContactSection from "@/components/ContactSection";
import Ecosystem from "@/components/Ecosystem";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import LegalModals from "@/components/LegalModals";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryPrefill, setEnquiryPrefill] = useState<string | undefined>(undefined);
  const [legalModalType, setLegalModalType] = useState<"privacy" | "terms" | null>(null);

  const handleOpenEnquiry = (servicePrefill?: string) => {
    setEnquiryPrefill(servicePrefill);
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
    setEnquiryPrefill(undefined);
  };

  return (
    <>
      {/* Sticky Navigation */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      <main>
        {/* 1. Who We Are (Hero Section) */}
        <Hero onOpenEnquiry={handleOpenEnquiry} />

        {/* 2. What We Do (6 Compact Quick Service Cards) */}
        <QuickServices />

        {/* 3. Main Services (Detailed cards for Social, Content, Branding, Google, Ads, Web) */}
        <ServicesSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 3b. Highlighted Conversion: Digital Presence Audit */}
        <DigitalAudit onOpenEnquiry={handleOpenEnquiry} />

        {/* 3c. Official Professional Price Sheet (Downloadable & Printable) */}
        <PriceSheet onOpenEnquiry={handleOpenEnquiry} />

        {/* 4. Digital Solutions By Business Type */}
        <Solutions onOpenEnquiry={handleOpenEnquiry} />

        {/* 6. How We Work (5-Step Transparent Process) */}
        <HowWeWork onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* 7. Why UwillGet Digital (Pragmatic principles & truth-first execution) */}
        <WhyUs />

        {/* Cross Division: Technology & Digital Connection */}
        <TechConnection />

        {/* 8 & 9. Enquiry & Contact Section */}
        <ContactSection onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* 10. UwillGet Connected Ecosystem */}
        <Ecosystem />

        {/* 11. Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* 12. Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType("privacy")}
        onOpenTerms={() => setLegalModalType("terms")}
      />

      {/* Persistent Floating Actions */}
      <FloatingActions onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Interactive Modals */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={handleCloseEnquiry}
        servicePrefill={enquiryPrefill}
      />

      <LegalModals
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </>
  );
}
