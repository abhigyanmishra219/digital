"use client";

import React from "react";
import { Check, ArrowRight, Sparkles, HelpCircle, ShieldCheck } from "lucide-react";

interface PackagesProps {
  onOpenEnquiry: (packagePrefill?: string) => void;
}

export default function Packages({ onOpenEnquiry }: PackagesProps) {
  const plans = [
    {
      id: "starter-presence",
      name: "Starter Presence",
      badge: "Foundational Setup",
      target: "For small businesses starting their digital journey and needing a solid identity.",
      features: [
        "Social media profile setup & branding",
        "Basic visual identity & logo application",
        "Monthly content planning framework",
        "Essential promotional static creatives",
        "Google Business Profile setup guidance",
        "Direct communication on WhatsApp",
      ],
      ctaText: "Ask for Starter Plan",
      isPopular: false,
    },
    {
      id: "growth-presence",
      name: "Growth Presence",
      badge: "Most Practical",
      target: "For businesses with an existing presence seeking consistent regular engagement.",
      features: [
        "Ongoing social media account management",
        "Regular weekly post & carousel creation",
        "Short-form video / reels concepts",
        "Google Business Profile maintenance & posts",
        "Website content & banner updates",
        "Monthly objective performance review",
        "Priority support via call & WhatsApp",
      ],
      ctaText: "Discuss Growth Plan",
      isPopular: true,
    },
    {
      id: "custom-digital-growth",
      name: "Custom Digital Growth",
      badge: "Comprehensive",
      target: "For businesses requiring an omnichannel strategy tailored to specific goals.",
      features: [
        "Full digital presence initial audit",
        "Dedicated multi-platform social strategy",
        "Custom branding & marketing asset production",
        "Targeted advertising & campaign management",
        "Comprehensive Google Business optimization",
        "Active website maintenance & landing pages",
        "Custom review cycles & strategic consultation",
      ],
      ctaText: "Build My Digital Plan",
      isPopular: false,
    },
  ];

  return (
    <section id="packages" className="section" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">Structured Engagement</div>
          <h2 className="section-title">Digital Growth Packages</h2>
          <p className="section-description">
            Practical engagement models built around your business stage. No lock-in traps or artificial guarantees—just realistic, structured digital support.
          </p>
        </div>

        {/* Pricing/Scope Transparency Disclaimer */}
        <div
          style={{
            maxWidth: "780px",
            margin: "-1.5rem auto 3rem auto",
            backgroundColor: "#FFFFFF",
            border: "1px solid var(--border-light)",
            borderRadius: "var(--radius-md)",
            padding: "1rem 1.25rem",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "0.88rem",
            color: "var(--text-secondary)",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <HelpCircle size={18} style={{ color: "var(--brand-orange)", flexShrink: 0 }} />
          <span>
            <strong>Pricing Transparency:</strong> Final pricing depends on your required services, posting frequency, creative formats, and advertising scope. We tailor each quote to your exact operational scope.
          </span>
        </div>

        {/* Plans Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
            alignItems: "stretch",
          }}
        >
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "2.5rem 2rem",
                position: "relative",
                borderColor: plan.isPopular ? "var(--brand-orange)" : "var(--border-light)",
                boxShadow: plan.isPopular ? "0 10px 30px rgba(255, 107, 44, 0.12)" : "var(--shadow-sm)",
                backgroundColor: "#FFFFFF",
              }}
            >
              {plan.isPopular && (
                <div
                  style={{
                    position: "absolute",
                    top: "-13px",
                    right: "24px",
                    backgroundColor: "var(--brand-orange)",
                    color: "#FFFFFF",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: "var(--radius-full)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    boxShadow: "0 2px 8px rgba(255, 107, 44, 0.4)",
                  }}
                >
                  Recommended
                </div>
              )}

              <div>
                <span
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: plan.isPopular ? "var(--brand-orange)" : "var(--text-muted)",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  {plan.badge}
                </span>

                <h3
                  style={{
                    fontSize: "1.65rem",
                    fontWeight: 800,
                    color: "var(--brand-navy)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {plan.name}
                </h3>

                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.55,
                    marginBottom: "1.75rem",
                    minHeight: "44px",
                  }}
                >
                  {plan.target}
                </p>

                <div
                  style={{
                    padding: "1rem 0",
                    borderTop: "1px solid var(--border-light)",
                    borderBottom: "1px solid var(--border-light)",
                    marginBottom: "1.75rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "var(--brand-navy)",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      marginBottom: "0.85rem",
                    }}
                  >
                    Included In Plan:
                  </div>

                  <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {plan.features.map((feat, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                          fontSize: "0.9rem",
                          color: "var(--text-primary)",
                          lineHeight: 1.4,
                        }}
                      >
                        <Check
                          size={16}
                          style={{
                            color: "var(--brand-orange)",
                            flexShrink: 0,
                            marginTop: "2px",
                          }}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <button
                  onClick={() => onOpenEnquiry(plan.name)}
                  className={`btn btn-full ${plan.isPopular ? "btn-primary" : "btn-secondary"}`}
                  style={{ justifyContent: "center" }}
                >
                  {plan.ctaText}
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
