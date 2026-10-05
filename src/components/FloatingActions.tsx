"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, MessageSquare, ArrowUp } from "lucide-react";

interface FloatingActionsProps {
  onOpenEnquiry: () => void;
}

export default function FloatingActions({ onOpenEnquiry }: FloatingActionsProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl =
    "https://wa.me/919117090518?text=Hello%20UwillGet%20Digital%2C%20I%20want%20to%20discuss%20a%20digital%20marketing%20requirement.";

  return (
    <div className="floating-actions-container">
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scroll-top-btn"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Floating Ask for Enquiry Button */}
      <button
        onClick={onOpenEnquiry}
        className="float-btn float-enquiry"
        id="floating-ask-enquiry-btn"
        aria-label="Ask for an Enquiry"
      >
        <MessageSquare size={18} style={{ color: "var(--brand-orange)" }} />
        <span>Ask for an Enquiry</span>
      </button>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn float-whatsapp"
        id="floating-whatsapp-btn"
        aria-label="Chat with UwillGet Digital on WhatsApp"
      >
        <MessageCircle size={20} />
        <span>WhatsApp Us</span>
      </a>
    </div>
  );
}
