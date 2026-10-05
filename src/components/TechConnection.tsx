"use client";

import React from "react";
import {
  Code2,
  ExternalLink,
  Laptop,
  GraduationCap,
  Layers,
  Smartphone,
  Cpu,
  CheckCircle,
} from "lucide-react";

export default function TechConnection() {
  const techOfferings = [
    { name: "Website Development", icon: Laptop },
    { name: "Custom Software", icon: Code2 },
    { name: "School ERP Systems", icon: GraduationCap },
    { name: "Business Systems", icon: Layers },
    { name: "Mobile Applications", icon: Smartphone },
    { name: "Process Automation", icon: Cpu },
  ];

  return (
    <section
      style={{
        padding: "4.5rem 0",
        backgroundColor: "var(--brand-navy)",
        color: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2.5rem",
            alignItems: "center",
          }}
          className="tech-connection-grid"
        >
          {/* Left Text */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 12px",
                borderRadius: "var(--radius-full)",
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                backgroundColor: "rgba(255, 107, 44, 0.2)",
                color: "#FF8F5E",
                marginBottom: "1rem",
              }}
            >
              UwillGet Ecosystem Integration
            </div>

            <h2
              style={{
                fontSize: "clamp(1.85rem, 3.2vw, 2.5rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.25,
                marginBottom: "1rem",
              }}
            >
              Need Technology Along With <br />
              <span style={{ color: "var(--brand-orange)" }}>Digital Marketing?</span>
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                color: "#CBD5E1",
                lineHeight: 1.6,
                marginBottom: "1.75rem",
              }}
            >
              UwillGet operates a dedicated <strong>Technology Division</strong> for companies requiring custom websites, enterprise portals, student administration systems, or specialized applications. Both divisions collaborate smoothly when your growth demands technical infrastructure.
            </p>

            <a
              href="https://tech.uwillget.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              Explore UwillGet Technology
              <ExternalLink size={18} />
            </a>
          </div>

          {/* Right: Technical Division Capability Grid */}
          <div>
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "var(--radius-xl)",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "var(--brand-orange)",
                  marginBottom: "1.25rem",
                }}
              >
                Technology Division Capabilities:
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "1rem",
                }}
              >
                {techOfferings.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        borderRadius: "var(--radius-md)",
                        padding: "1rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "8px",
                          backgroundColor: "rgba(255, 107, 44, 0.2)",
                          color: "var(--brand-orange)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#FFFFFF" }}>
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div
                style={{
                  marginTop: "1.5rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                  fontSize: "0.82rem",
                  color: "#94A3B8",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <CheckCircle size={15} style={{ color: "#10B981" }} />
                <span>Seamless handoff between marketing campaigns and tech architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          .tech-connection-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
}
