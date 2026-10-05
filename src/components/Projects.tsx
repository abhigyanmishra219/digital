"use client";

import React from "react";
import { ExternalLink, Layers, Music, Globe, CheckCircle } from "lucide-react";

export default function Projects() {
  const verifiedProjects = [
    {
      id: "uwillget-services",
      name: "UwillGet Services Platform",
      tagline: "Digital Services & Solution Hub",
      description:
        "Comprehensive digital services and technology solution platform built for service discovery, solution browsing, and streamlined client interactions.",
      tags: ["Web", "Business", "Digital"],
      category: "Platform / Business Services",
      url: "https://uwillget-service.vercel.app/",
      icon: Layers,
      previewGradient: "linear-gradient(135deg, #1B2B5E 0%, #2A3F7E 100%)",
      highlights: [
        "Structured service directory",
        "Clean responsive web presentation",
        "Direct enquiry pathways",
      ],
    },
    {
      id: "tripurari-jha",
      name: "Tripurari Jha Official",
      tagline: "Musician & Performer Digital Portfolio",
      description:
        "Professional digital platform and branding presentation for musician and live performer Tripurari Jha, showcasing creative identity, event booking, and music releases.",
      tags: ["Website", "Branding", "Entertainment"],
      category: "Personal Brand / Entertainment",
      url: "https://tripurari-jha.vercel.app/",
      icon: Music,
      previewGradient: "linear-gradient(135deg, #FF6B2C 0%, #D9531E 100%)",
      highlights: [
        "Artistic visual branding & media portfolio",
        "Mobile-optimized performance booking",
        "Fast media loading & streaming embeds",
      ],
    },
  ];

  return (
    <section id="work" className="section" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Verified Deployments</div>
          <h2 className="section-title">What We&apos;ve Built</h2>
          <p className="section-description">
            Explore live public platforms and digital presences built and supported within our ecosystem. We present only genuine, verifiable projects.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {verifiedProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="card"
                style={{
                  padding: "0",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* Visual Header / Mockup Representation */}
                <div
                  style={{
                    background: project.previewGradient,
                    padding: "2.5rem 2rem",
                    color: "#FFFFFF",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "10px",
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      <Icon size={22} color="#FFFFFF" />
                    </div>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        padding: "4px 10px",
                        borderRadius: "var(--radius-full)",
                        backgroundColor: "rgba(255, 255, 255, 0.25)",
                        fontWeight: 600,
                        letterSpacing: "0.03em",
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.45rem", fontWeight: 800, marginBottom: "4px", color: "#FFFFFF" }}>
                    {project.name}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.85)" }}>
                    {project.tagline}
                  </p>
                </div>

                {/* Body Content */}
                <div style={{ padding: "2rem", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        gap: "6px",
                        flexWrap: "wrap",
                        marginBottom: "1.25rem",
                      }}
                    >
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            padding: "3px 8px",
                            borderRadius: "4px",
                            backgroundColor: "var(--bg-secondary)",
                            color: "var(--brand-navy)",
                            border: "1px solid var(--border-light)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.6,
                        marginBottom: "1.5rem",
                      }}
                    >
                      {project.description}
                    </p>

                    <div style={{ marginBottom: "1.75rem" }}>
                      <div
                        style={{
                          fontSize: "0.8rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          color: "var(--brand-navy)",
                          letterSpacing: "0.04em",
                          marginBottom: "0.6rem",
                        }}
                      >
                        Project Highlights:
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                        {project.highlights.map((h, i) => (
                          <div
                            key={i}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              fontSize: "0.85rem",
                              color: "var(--text-secondary)",
                            }}
                          >
                            <CheckCircle size={14} style={{ color: "#10B981", flexShrink: 0 }} />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-full"
                      style={{ justifyContent: "center" }}
                    >
                      Visit Live Project
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
