"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  ExternalLink,
  ArrowUp,
  Heart,
} from "lucide-react";

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export default function Footer({ onOpenPrivacy, onOpenTerms }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "var(--bg-dark)",
        color: "var(--text-inverse)",
        paddingTop: "5rem",
        paddingBottom: "2.5rem",
        borderTop: "1px solid var(--border-dark)",
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2.5rem",
            marginBottom: "3.5rem",
          }}
        >
          {/* Column 1: Brand Info */}
          <div style={{ maxWidth: "320px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  backgroundColor: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Image
                  src="/uwillget_logo_complete.jpeg"
                  alt="UwillGet Logo"
                  width={44}
                  height={44}
                  style={{ objectFit: "contain", width: "100%", height: "100%" }}
                />
              </div>
              <div>
                <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.02em" }}>
                  UwillGet <span style={{ color: "var(--brand-orange)" }}>Digital</span>
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-inverse-muted)" }}>
                  U Want It, U Get It
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-inverse-muted)",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
              }}
            >
              Digital, technology and business solutions built around your requirements.
            </p>

            <div style={{ display: "flex", gap: "10px" }}>
              <a
                href="https://instagram.com/uwillget.co"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="UwillGet on Instagram"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--brand-orange)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              <a
                href="https://youtube.com/@Uwillget-m9y"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="UwillGet on YouTube"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--brand-orange)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4
              style={{
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "#FFFFFF",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "1.25rem",
              }}
            >
              Company
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.65rem", fontSize: "0.9rem" }}>
              <li>
                <a href="#hero" style={{ color: "var(--text-inverse-muted)" }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" style={{ color: "var(--text-inverse-muted)" }}>
                  About
                </a>
              </li>
              <li>
                <a href="#services" style={{ color: "var(--text-inverse-muted)" }}>
                  Services
                </a>
              </li>
              <li>
                <a href="#solutions" style={{ color: "var(--text-inverse-muted)" }}>
                  Solutions
                </a>
              </li>
              <li>
                <a href="#pricing" style={{ color: "var(--text-inverse-muted)" }}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" style={{ color: "var(--text-inverse-muted)" }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Digital Services */}
          <div>
            <h4
              style={{
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "#FFFFFF",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "1.25rem",
              }}
            >
              Digital Services
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.65rem", fontSize: "0.9rem" }}>
              <li>
                <a href="#service-social-media" style={{ color: "var(--text-inverse-muted)" }}>
                  Social Media
                </a>
              </li>
              <li>
                <a href="#service-content-creation" style={{ color: "var(--text-inverse-muted)" }}>
                  Content Creation
                </a>
              </li>
              <li>
                <a href="#service-branding" style={{ color: "var(--text-inverse-muted)" }}>
                  Branding
                </a>
              </li>
              <li>
                <a href="#service-google-presence" style={{ color: "var(--text-inverse-muted)" }}>
                  Google Business
                </a>
              </li>
              <li>
                <a href="#service-digital-advertising" style={{ color: "var(--text-inverse-muted)" }}>
                  Google Ads
                </a>
              </li>
              <li>
                <a href="#service-website-management" style={{ color: "var(--text-inverse-muted)" }}>
                  Website Management
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: UwillGet Ecosystem */}
          <div>
            <h4
              style={{
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "#FFFFFF",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "1.25rem",
              }}
            >
              UwillGet Network
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.65rem", fontSize: "0.9rem" }}>
              <li>
                <a
                  href="https://uwillget.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--text-inverse-muted)", display: "inline-flex", alignItems: "center", gap: "4px" }}
                >
                  Main Website <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://consultancy.uwillget.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--text-inverse-muted)", display: "inline-flex", alignItems: "center", gap: "4px" }}
                >
                  Consultancy <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://digital.uwillget.com"
                  style={{ color: "var(--brand-orange)", fontWeight: 600 }}
                >
                  Digital (Current)
                </a>
              </li>
              <li>
                <a
                  href="https://tech.uwillget.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--text-inverse-muted)", display: "inline-flex", alignItems: "center", gap: "4px" }}
                >
                  Technology <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4
              style={{
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "#FFFFFF",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "1.25rem",
              }}
            >
              Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.9rem" }}>
              <a
                href="tel:9117090518"
                style={{ color: "var(--text-inverse-muted)", display: "flex", alignItems: "center", gap: "8px" }}
              >
                <Phone size={14} style={{ color: "var(--brand-orange)" }} />
                9117090518
              </a>
              <a
                href="tel:7905239681"
                style={{ color: "var(--text-inverse-muted)", display: "flex", alignItems: "center", gap: "8px" }}
              >
                <Phone size={14} style={{ color: "var(--brand-orange)" }} />
                7905239681
              </a>
              <a
                href="mailto:uwillget4@gmail.com"
                style={{ color: "var(--text-inverse-muted)", display: "flex", alignItems: "center", gap: "8px" }}
              >
                <Mail size={14} style={{ color: "var(--brand-orange)" }} />
                uwillget4@gmail.com
              </a>
              <a
                href="mailto:uwillget5@gmail.com"
                style={{ color: "var(--text-inverse-muted)", display: "flex", alignItems: "center", gap: "8px" }}
              >
                <Mail size={14} style={{ color: "var(--brand-orange)" }} />
                uwillget5@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div
          style={{
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.85rem",
            color: "var(--text-inverse-muted)",
          }}
        >
          <div>
            © 2026 UwillGet. All Rights Reserved.
          </div>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            <button
              onClick={onOpenPrivacy}
              style={{ color: "var(--text-inverse-muted)", cursor: "pointer", fontSize: "0.85rem" }}
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              style={{ color: "var(--text-inverse-muted)", cursor: "pointer", fontSize: "0.85rem" }}
            >
              Terms & Conditions
            </button>
            <a href="#contact" style={{ color: "var(--text-inverse-muted)" }}>
              Contact
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "var(--text-inverse-muted)",
              cursor: "pointer",
              fontSize: "0.85rem",
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
