"use client";

import React from "react";
import { ArrowRight, Lightbulb, Compass, Palette, Rocket, TrendingUp } from "lucide-react";

interface HowWeWorkProps {
  onOpenEnquiry: () => void;
}

export default function HowWeWork({ onOpenEnquiry }: HowWeWorkProps) {
  const steps = [
    {
      num: "01",
      name: "Understand",
      desc: "We understand your business, audience, offerings and exact commercial goals.",
      icon: Lightbulb,
    },
    {
      num: "02",
      name: "Plan",
      desc: "We identify the right services and create a practical, realistic roadmap.",
      icon: Compass,
    },
    {
      num: "03",
      name: "Create",
      desc: "We develop the content, creatives, branding assets or campaign setups.",
      icon: Palette,
    },
    {
      num: "04",
      name: "Launch",
      desc: "We publish, implement or launch the planned digital activities consistently.",
      icon: Rocket,
    },
    {
      num: "05",
      name: "Improve",
      desc: "We review the work and make improvements based on feedback and real data.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="section" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Structured Delivery</div>
          <h2 className="section-title">How We Work</h2>
          <p className="section-description">
            A clear, transparent five-step process designed to eliminate confusion and deliver steady digital progress for your brand.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3.5rem",
          }}
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="card"
                style={{
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundColor: "#FFFFFF",
                  position: "relative",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 900,
                        color: "var(--brand-orange)",
                        opacity: 0.9,
                        letterSpacing: "-0.04em",
                      }}
                    >
                      {step.num}
                    </span>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        backgroundColor: "var(--brand-orange-light)",
                        color: "var(--brand-orange)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "var(--brand-navy)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {step.name}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.55,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div
                    style={{
                      marginTop: "1.25rem",
                      height: "2px",
                      background: "linear-gradient(90deg, var(--brand-orange) 0%, rgba(255, 107, 44, 0.1) 100%)",
                      borderRadius: "2px",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center" }}>
          <button
            onClick={onOpenEnquiry}
            className="btn btn-primary btn-lg"
          >
            Start Your Project
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
