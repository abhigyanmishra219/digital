"use client";

import React from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  Globe,
  ExternalLink,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import EnquiryForm from "./EnquiryForm";

interface ContactSectionProps {
  onOpenEnquiry: () => void;
}

export default function ContactSection({ onOpenEnquiry }: ContactSectionProps) {
  const phoneNumbers = [
    { number: "9117090518", href: "tel:9117090518" },
    { number: "7905239681", href: "tel:7905239681" },
  ];

  const emails = [
    { email: "uwillget4@gmail.com", href: "mailto:uwillget4@gmail.com" },
    { email: "uwillget5@gmail.com", href: "mailto:uwillget5@gmail.com" },
  ];

  const portals = [
    { title: "Main Website", url: "https://uwillget.com" },
    { title: "Technology Division", url: "https://tech.uwillget.com" },
    { title: "Consultancy Division", url: "https://consultancy.uwillget.com" },
    { title: "Digital Division", url: "https://digital.uwillget.com" },
    { title: "Service Platform", url: "https://uwillget-service.vercel.app/" },
  ];

  return (
    <section id="contact" className="section" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Direct Communication</div>
          <h2 className="section-title">Let&apos;s Grow Your Digital Presence</h2>
          <p className="section-description">
            Have a business, idea or digital marketing requirement? Tell us what you need and we&apos;ll help you identify the right digital solution.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "flex-start",
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Contact Details & Action Cards */}
          <div>
            {/* Quick Action Buttons */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <a
                href="https://wa.me/919117090518?text=Hello%20UwillGet%20Digital%2C%20I%20want%20to%20discuss%20a%20digital%20marketing%20requirement."
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  backgroundColor: "#25D366",
                  color: "#FFFFFF",
                  justifyContent: "center",
                  padding: "0.85rem 1.25rem",
                }}
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>

              <a
                href="tel:9117090518"
                className="btn btn-secondary"
                style={{ justifyContent: "center", padding: "0.85rem 1.25rem" }}
              >
                <Phone size={18} style={{ color: "var(--brand-orange)" }} />
                Call 9117090518
              </a>

              <a
                href="tel:7905239681"
                className="btn btn-secondary"
                style={{ justifyContent: "center", padding: "0.85rem 1.25rem" }}
              >
                <Phone size={18} style={{ color: "var(--brand-navy)" }} />
                Call 7905239681
              </a>

              <a
                href="mailto:uwillget4@gmail.com"
                className="btn btn-secondary"
                style={{ justifyContent: "center", padding: "0.85rem 1.25rem" }}
              >
                <Mail size={18} style={{ color: "var(--brand-orange)" }} />
                Send Email
              </a>
            </div>

            {/* Structured Contact Directory Box */}
            <div
              style={{
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid var(--border-light)",
                borderRadius: "var(--radius-xl)",
                padding: "2rem",
                marginBottom: "2rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  color: "var(--brand-navy)",
                  marginBottom: "1.25rem",
                }}
              >
                Official Contact Directory
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {/* Phone Lines */}
                <div>
                  <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "4px" }}>
                    Verified Phone Lines
                  </div>
                  <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
                    {phoneNumbers.map((p) => (
                      <a
                        key={p.number}
                        href={p.href}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          fontWeight: 700,
                          fontSize: "1.05rem",
                          color: "var(--brand-navy)",
                        }}
                      >
                        <Phone size={16} style={{ color: "var(--brand-orange)" }} />
                        {p.number}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Email Inboxes */}
                <div>
                  <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "4px" }}>
                    Support & Enquiries Email
                  </div>
                  <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
                    {emails.map((e) => (
                      <a
                        key={e.email}
                        href={e.href}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          fontWeight: 600,
                          fontSize: "0.95rem",
                          color: "var(--text-primary)",
                        }}
                      >
                        <Mail size={16} style={{ color: "var(--brand-orange)" }} />
                        {e.email}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Ecosystem Portals */}
                <div style={{ paddingTop: "1rem", borderTop: "1px solid var(--border-light)" }}>
                  <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "8px" }}>
                    Official Web Network
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {portals.map((portal) => (
                      <a
                        key={portal.title}
                        href={portal.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "6px 10px",
                          borderRadius: "6px",
                          backgroundColor: "#FFFFFF",
                          border: "1px solid var(--border-light)",
                          fontSize: "0.88rem",
                          fontWeight: 500,
                          color: "var(--text-secondary)",
                        }}
                      >
                        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <Globe size={14} style={{ color: "var(--brand-navy)" }} />
                          {portal.title}
                        </span>
                        <span style={{ fontSize: "0.78rem", color: "var(--brand-orange)", display: "flex", alignItems: "center", gap: "2px" }}>
                          Visit <ExternalLink size={12} />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct On-Page Enquiry Box */}
          <div
            id="enquiry-section"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1.5px solid var(--border-light)",
              borderRadius: "var(--radius-xl)",
              padding: "2.5rem",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "var(--brand-orange)",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                marginBottom: "6px",
              }}
            >
              <MessageSquare size={14} />
              Instant Request Form
            </div>
            <h3
              style={{
                fontSize: "1.65rem",
                fontWeight: 800,
                color: "var(--brand-navy)",
                marginBottom: "0.5rem",
              }}
            >
              Send Your Project Details
            </h3>
            <p
              style={{
                fontSize: "0.92rem",
                color: "var(--text-secondary)",
                marginBottom: "1.75rem",
                lineHeight: 1.5,
              }}
            >
              Fill out this quick form and our team will get in touch with a customized plan.
            </p>

            <EnquiryForm />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
