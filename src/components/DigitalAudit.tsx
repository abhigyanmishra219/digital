"use client";

import React, { useState } from "react";
import {
  SearchCheck,
  CheckCircle,
  FileCheck2,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Sparkles,
} from "lucide-react";

interface DigitalAuditProps {
  onOpenEnquiry: (servicePrefill?: string) => void;
}

export default function DigitalAudit({ onOpenEnquiry }: DigitalAuditProps) {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const auditPillars = [
    {
      title: "Business Website",
      focus: "Accuracy, clarity of value, mobile readability, speed & clear contact channels.",
      checklist: [
        "Are your phone and WhatsApp links working and visible?",
        "Is your service/product catalog clearly structured?",
        "Does the website load properly on modern mobile screens?",
      ],
    },
    {
      title: "Google Business Profile",
      focus: "Verification, business category precision, accurate hours & local discovery.",
      checklist: [
        "Are your address, pin location, and phone number verified?",
        "Are services and categories accurately updated?",
        "Are recent photos and business updates visible?",
      ],
    },
    {
      title: "Social Channels (IG & FB)",
      focus: "Profile bio clarity, branding consistency, link in bio & posting regularity.",
      checklist: [
        "Does your bio explain what you offer within 3 seconds?",
        "Is visual branding consistent across posts and highlights?",
        "Are enquiry and DM communication points active?",
      ],
    },
    {
      title: "Visual Brand Identity",
      focus: "Logo clarity, color coherence, typography and asset standardization.",
      checklist: [
        "Is your logo scalable and professional across all formats?",
        "Are standard brand colors and typography applied consistently?",
        "Do marketing creatives look unified or fragmented?",
      ],
    },
    {
      title: "Customer Enquiry Journey",
      focus: "Frictionless path from discovery to phone call or WhatsApp discussion.",
      checklist: [
        "How many clicks does it take for a user to send an enquiry?",
        "Are contact forms functioning without errors?",
        "Is there immediate confirmation after submission?",
      ],
    },
    {
      title: "Basic Search Visibility",
      focus: "Search engine title tags, descriptive metadata, and crawl indexing.",
      checklist: [
        "Are search snippets clearly describing your offerings?",
        "Do search results point to relevant, active pages?",
        "Is basic meta information configured properly?",
      ],
    },
  ];

  return (
    <section
      id="audit"
      className="section"
      style={{
        backgroundColor: "var(--bg-dark)",
        color: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background glow */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 107, 44, 0.12) 0%, rgba(11, 19, 43, 0) 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
          }}
          className="audit-grid"
        >
          {/* Left Column: Offer & Description */}
          <div>
            <div className="section-badge section-badge-dark">
              <Sparkles size={14} />
              Highlighted Conversion Assessment
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 2.75rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.2,
                marginBottom: "1.25rem",
              }}
            >
              How Strong Is Your <br />
              <span style={{ color: "var(--brand-orange)" }}>Online Presence?</span>
            </h2>

            <p
              style={{
                fontSize: "1.1rem",
                color: "#CBD5E1",
                lineHeight: 1.65,
                marginBottom: "1.5rem",
              }}
            >
              Before spending on random campaigns, understand where your digital presence currently stands. We evaluate your active customer touchpoints and identify practical improvement opportunities.
            </p>

            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "var(--radius-lg)",
                padding: "1.5rem",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "var(--brand-orange)",
                  marginBottom: "0.75rem",
                }}
              >
                Areas Reviewed In Our Digital Presence Audit:
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "0.5rem 1rem",
                  fontSize: "0.9rem",
                  color: "#E2E8F0",
                }}
              >
                <div>• Website Structure</div>
                <div>• Content Quality</div>
                <div>• Google Business Profile</div>
                <div>• Contact Information</div>
                <div>• Instagram & Facebook</div>
                <div>• Customer Journey Flow</div>
                <div>• Brand Consistency</div>
                <div>• Basic SEO Presence</div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
              <button
                onClick={() => onOpenEnquiry("Digital Presence Audit")}
                className="btn btn-primary btn-lg"
              >
                Request a Digital Presence Audit
                <ArrowRight size={18} />
              </button>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.82rem",
                  color: "var(--text-inverse-muted)",
                }}
              >
                <ShieldCheck size={16} style={{ color: "#10B981" }} />
                Objective assessment • No automated fake scores
              </div>
            </div>
          </div>

          {/* Right Column: Clean Interactive Audit Checklist Matrix */}
          <div>
            <div
              style={{
                backgroundColor: "var(--bg-dark-surface)",
                borderRadius: "var(--radius-xl)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                padding: "2rem",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.5rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <FileCheck2 size={20} style={{ color: "var(--brand-orange)" }} />
                  <span style={{ fontWeight: 700, fontSize: "1rem", color: "#FFFFFF" }}>
                    Audit Methodology Framework
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    padding: "3px 8px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    color: "#94A3B8",
                  }}
                >
                  6 Evaluation Pillars
                </span>
              </div>

              {/* Pillar Selector Buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  flexWrap: "wrap",
                  marginBottom: "1.5rem",
                }}
              >
                {auditPillars.map((p, idx) => (
                  <button
                    key={p.title}
                    onClick={() => setSelectedPillar(idx)}
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      padding: "6px 12px",
                      borderRadius: "6px",
                      backgroundColor: selectedPillar === idx ? "var(--brand-orange)" : "rgba(255, 255, 255, 0.06)",
                      color: selectedPillar === idx ? "#FFFFFF" : "#CBD5E1",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.15s ease",
                    }}
                  >
                    {p.title}
                  </button>
                ))}
              </div>

              {/* Active Pillar Details */}
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.5rem",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  minHeight: "220px",
                }}
              >
                <div style={{ fontSize: "1.15rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.35rem" }}>
                  {auditPillars[selectedPillar].title}
                </div>
                <div style={{ fontSize: "0.88rem", color: "#94A3B8", marginBottom: "1.25rem", lineHeight: 1.4 }}>
                  {auditPillars[selectedPillar].focus}
                </div>

                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--brand-orange)", marginBottom: "0.75rem", textTransform: "uppercase" }}>
                  Key Questions Examined:
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {auditPillars[selectedPillar].checklist.map((q, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        fontSize: "0.88rem",
                        color: "#E2E8F0",
                      }}
                    >
                      <CheckCircle size={16} style={{ color: "#10B981", flexShrink: 0, marginTop: "2px" }} />
                      <span>{q}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  marginTop: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "0.78rem",
                  color: "#94A3B8",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <AlertCircle size={14} style={{ color: "var(--brand-orange)" }} />
                  Detailed diagnostic report shared directly with your team
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          .audit-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
}
