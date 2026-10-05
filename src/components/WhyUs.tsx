"use client";

import React from "react";
import {
  FileCheck,
  Wrench,
  Network,
  Sliders,
  PhoneCall,
  Expand,
  ShieldCheck,
} from "lucide-react";

export default function WhyUs() {
  const reasons = [
    {
      icon: FileCheck,
      title: "Requirement First",
      desc: "We begin with your actual business requirement, not a generic pre-packaged sales pitch.",
    },
    {
      icon: Wrench,
      title: "Practical Solutions",
      desc: "We recommend services based on what your business actually needs to make tangible progress.",
    },
    {
      icon: Network,
      title: "One UwillGet Ecosystem",
      desc: "Technology, digital marketing, consultancy, and business systems are united under one accountable brand.",
    },
    {
      icon: Sliders,
      title: "Custom Approach",
      desc: "Different businesses require different digital strategies; we adjust to your industry context.",
    },
    {
      icon: PhoneCall,
      title: "Direct Communication",
      desc: "Communicate directly through active WhatsApp, verified phone lines, and direct email channels.",
    },
    {
      icon: Expand,
      title: "Flexible Scaling",
      desc: "Start with only the immediate services you need today, and expand into broader activities over time.",
    },
  ];

  return (
    <section id="about" className="section" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Our Principles</div>
          <h2 className="section-title">Why Work With UwillGet Digital?</h2>
          <p className="section-description">
            We prioritize commercial clarity, honesty, and pragmatic execution over hyped promises and fabricated claims.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.75rem",
            marginBottom: "3rem",
          }}
        >
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="card"
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "flex-start",
                  padding: "1.75rem",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    backgroundColor: "var(--brand-navy-soft)",
                    color: "var(--brand-navy)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--brand-navy)",
                      marginBottom: "0.45rem",
                    }}
                  >
                    {r.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.92rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.55,
                    }}
                  >
                    {r.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commitment Badge */}
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            backgroundColor: "var(--bg-secondary)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--border-light)",
            padding: "1.25rem 1.75rem",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <ShieldCheck size={22} style={{ color: "var(--brand-orange)", flexShrink: 0 }} />
          <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
            <strong>Authentic Commitment:</strong> We never manufacture artificial guarantees, fake follower numbers, or bot vanity metrics. Our success is measured by consistent presence and clear client communication.
          </p>
        </div>
      </div>
    </section>
  );
}
