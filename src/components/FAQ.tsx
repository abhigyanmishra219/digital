"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What digital marketing services do you provide?",
      a: "We provide social media management, content creation, branding, Google Business support, digital advertising, website management and customized digital solutions.",
    },
    {
      q: "Can you manage our social media?",
      a: "Yes. Social media management can include content planning, creatives, posting, reels and other agreed activities.",
    },
    {
      q: "Do you create reels and short videos?",
      a: "Yes. Reels and short-form video creation can be included depending on the requirement.",
    },
    {
      q: "Can you help with Google Business?",
      a: "Yes. We can help with Google Business Profile setup, optimization and ongoing management.",
    },
    {
      q: "Do you run Google Ads?",
      a: "Yes. Advertising campaigns can be planned and managed according to the business objective and available budget.",
    },
    {
      q: "Do you guarantee leads or sales?",
      a: "No. Digital marketing performance depends on multiple factors including market, audience, offer, competition, budget and execution.",
    },
    {
      q: "Can you manage our website too?",
      a: "Yes. Website management and updates can be provided. For new websites and custom software, UwillGet Technology handles technology development.",
    },
    {
      q: "How much does digital marketing cost?",
      a: "Pricing depends on the services, content requirements, frequency, advertising scope and business requirements.",
    },
    {
      q: "How do I get started?",
      a: "Submit an enquiry or contact UwillGet Digital directly through WhatsApp (+91 9117090518) or by phone.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Common Queries</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description">
            Direct, straightforward answers regarding our services, operating standards, and transparent workflow.
          </p>
        </div>

        <div
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  border: isOpen ? "1.5px solid var(--brand-orange)" : "1px solid var(--border-light)",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: isOpen ? "var(--bg-secondary)" : "#FFFFFF",
                  transition: "all 0.2s ease",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1.25rem 1.5rem",
                    textAlign: "left",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: isOpen ? "var(--brand-orange)" : "var(--brand-navy)",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    gap: "1rem",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <HelpCircle size={18} style={{ color: isOpen ? "var(--brand-orange)" : "var(--text-muted)", flexShrink: 0 }} />
                    {faq.q}
                  </span>
                  <div
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                      color: isOpen ? "var(--brand-orange)" : "var(--text-muted)",
                      flexShrink: 0,
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 1.5rem 1.25rem 3.1rem",
                      fontSize: "0.95rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                      animation: "fadeIn 0.2s ease",
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
