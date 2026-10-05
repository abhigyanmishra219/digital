"use client";

import React, { useEffect } from "react";
import { X, Shield, FileText } from "lucide-react";

interface LegalModalProps {
  type: "privacy" | "terms" | null;
  onClose: () => void;
}

export default function LegalModals({ type, onClose }: LegalModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (type) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ padding: "2.5rem 2rem", maxWidth: "680px" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1.5rem",
            paddingBottom: "1rem",
            borderBottom: "1px solid var(--border-light)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {type === "privacy" ? (
              <Shield size={24} style={{ color: "var(--brand-orange)" }} />
            ) : (
              <FileText size={24} style={{ color: "var(--brand-orange)" }} />
            )}
            <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--brand-navy)" }}>
              {type === "privacy" ? "Privacy Policy" : "Terms & Conditions"}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: "var(--bg-secondary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <X size={20} />
          </button>
        </div>

        <div
          style={{
            fontSize: "0.92rem",
            color: "var(--text-secondary)",
            lineHeight: 1.65,
            maxHeight: "60vh",
            overflowY: "auto",
            paddingRight: "0.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {type === "privacy" ? (
            <>
              <p>
                <strong>Effective Date:</strong> January 2026
              </p>
              <p>
                At <strong>UwillGet Digital</strong> (&quot;uwillget — U Want It, U Get It&quot;), we respect your privacy and are committed to protecting the personal information you share with us through our website (digital.uwillget.com), forms, and direct communication channels.
              </p>
              <h4 style={{ color: "var(--brand-navy)", fontWeight: 700 }}>1. Information We Collect</h4>
              <p>
                When you submit an enquiry, request a digital presence audit, or contact us via WhatsApp, phone, or email, we collect your name, mobile number, email address, organization name, and project requirements.
              </p>
              <h4 style={{ color: "var(--brand-navy)", fontWeight: 700 }}>2. How We Use Your Information</h4>
              <p>
                Information provided is utilized solely to understand your business requirements, prepare service quotations, coordinate project activities, and communicate updates regarding your account. We never sell, rent, or trade your personal data to external advertisers.
              </p>
              <h4 style={{ color: "var(--brand-navy)", fontWeight: 700 }}>3. Security & Disclaimers</h4>
              <p>
                We adopt industry-standard protocols to safeguard communication. For any queries regarding your privacy rights or data removal, please contact us directly at <code>uwillget4@gmail.com</code>.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Effective Date:</strong> January 2026
              </p>
              <p>
                Welcome to <strong>UwillGet Digital</strong>. By accessing digital.uwillget.com or engaging our digital marketing, branding, or website management services, you agree to these Terms and Conditions.
              </p>
              <h4 style={{ color: "var(--brand-navy)", fontWeight: 700 }}>1. Scope of Services</h4>
              <p>
                UwillGet Digital provides professional digital marketing services, including social media management, content production, branding, Google Business optimization, advertising execution, and website maintenance.
              </p>
              <h4 style={{ color: "var(--brand-navy)", fontWeight: 700 }}>2. Performance Disclaimers</h4>
              <p>
                Digital marketing performance relies on commercial dynamics including target audience, budget, offer strength, search platform algorithms, and competition. UwillGet Digital explicitly does NOT promise or guarantee viral content, fixed rankings, guaranteed leads, or specific sales revenue.
              </p>
              <h4 style={{ color: "var(--brand-navy)", fontWeight: 700 }}>3. Client Cooperation</h4>
              <p>
                Clients agree to supply timely brand assets, accurate business descriptions, and review content deliverables within agreed scheduling timelines.
              </p>
            </>
          )}
        </div>

        <div style={{ marginTop: "1.5rem", textAlign: "right" }}>
          <button onClick={onClose} className="btn btn-secondary btn-sm">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
