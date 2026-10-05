"use client";

import React from "react";
import { GraduationCap, Users2, Megaphone, Laptop2, ExternalLink, CheckCircle } from "lucide-react";

export default function Ecosystem() {
  const divisions = [
    {
      id: "main",
      name: "UwillGet",
      tagline: "Education & College Counselling",
      description: "Dedicated counselling, guidance, and career pathways for higher education aspirants.",
      url: "https://uwillget.com",
      icon: GraduationCap,
      isCurrent: false,
    },
    {
      id: "consultancy",
      name: "UwillGet Consultancy",
      tagline: "Admission & Education Consultancy",
      description: "Specialized institutional admissions, career guidance, and academic consultancy services.",
      url: "https://consultancy.uwillget.com",
      icon: Users2,
      isCurrent: false,
    },
    {
      id: "digital",
      name: "UwillGet Digital",
      tagline: "Digital Marketing & Promotion",
      description: "Social media, branding, Google Business, content, and digital growth services.",
      url: "https://digital.uwillget.com",
      icon: Megaphone,
      isCurrent: true,
    },
    {
      id: "tech",
      name: "UwillGet Technology",
      tagline: "Websites, Software & Systems",
      description: "Custom web development, mobile applications, School ERPs, and business systems.",
      url: "https://tech.uwillget.com",
      icon: Laptop2,
      isCurrent: false,
    },
  ];

  return (
    <section className="section" style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border-light)" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Connected Ecosystem</div>
          <h2 className="section-title">Explore UwillGet</h2>
          <p className="section-description">
            Four specialized divisions operating with focused domain expertise under the unified UwillGet umbrella brand.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {divisions.map((div) => {
            const Icon = div.icon;
            return (
              <div
                key={div.id}
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "1.75rem",
                  backgroundColor: div.isCurrent ? "#FFFFFF" : "rgba(255, 255, 255, 0.7)",
                  borderColor: div.isCurrent ? "var(--brand-orange)" : "var(--border-light)",
                  boxShadow: div.isCurrent ? "0 8px 24px rgba(255, 107, 44, 0.12)" : "var(--shadow-sm)",
                  position: "relative",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "10px",
                        backgroundColor: div.isCurrent ? "var(--brand-orange)" : "var(--brand-navy-soft)",
                        color: div.isCurrent ? "#FFFFFF" : "var(--brand-navy)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={20} />
                    </div>

                    {div.isCurrent ? (
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          padding: "2px 8px",
                          borderRadius: "var(--radius-full)",
                          backgroundColor: "var(--brand-orange-light)",
                          color: "var(--brand-orange)",
                        }}
                      >
                        You Are Here
                      </span>
                    ) : (
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 500,
                          padding: "2px 8px",
                          borderRadius: "4px",
                          color: "var(--text-muted)",
                        }}
                      >
                        Sister Division
                      </span>
                    )}
                  </div>

                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: "var(--brand-navy)",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {div.name}
                  </h3>

                  <div
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "var(--brand-orange)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {div.tagline}
                  </div>

                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.5,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {div.description}
                  </p>
                </div>

                <div>
                  {div.isCurrent ? (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "var(--brand-navy)",
                      }}
                    >
                      <CheckCircle size={15} style={{ color: "#10B981" }} />
                      Active Digital Marketing Division
                    </div>
                  ) : (
                    <a
                      href={div.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-full btn-sm"
                      style={{ justifyContent: "center" }}
                    >
                      Visit Division <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
