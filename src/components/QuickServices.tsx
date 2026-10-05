"use client";

import React from "react";
import {
  Share2,
  FileText,
  Sparkles,
  MapPin,
  Target,
  Globe2,
  ArrowRight,
} from "lucide-react";

export default function QuickServices() {
  const quickCategories = [
    {
      id: "social-media",
      icon: Share2,
      title: "Social Media",
      desc: "Build and manage a consistent presence across social platforms.",
      targetId: "service-social-media",
    },
    {
      id: "content-creation",
      icon: FileText,
      title: "Content Creation",
      desc: "Create useful, engaging and brand-focused digital content.",
      targetId: "service-content-creation",
    },
    {
      id: "branding",
      icon: Sparkles,
      title: "Branding",
      desc: "Create a consistent and professional identity for your business.",
      targetId: "service-branding",
    },
    {
      id: "google-presence",
      icon: MapPin,
      title: "Google Presence",
      desc: "Improve your Google Business presence and local visibility.",
      targetId: "service-google-presence",
    },
    {
      id: "digital-advertising",
      icon: Target,
      title: "Digital Advertising",
      desc: "Run targeted online advertising campaigns based on business objectives.",
      targetId: "service-digital-advertising",
    },
    {
      id: "website-management",
      icon: Globe2,
      title: "Website Management",
      desc: "Maintain, update and improve your business website.",
      targetId: "service-website-management",
    },
  ];

  return (
    <section
      style={{
        padding: "3.5rem 0",
        backgroundColor: "var(--bg-secondary)",
        borderBottom: "1px solid var(--border-light)",
      }}
      id="quick-services"
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {quickCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <a
                key={cat.id}
                href={`#${cat.targetId}`}
                className="card"
                style={{
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textDecoration: "none",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <div>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      backgroundColor: "var(--brand-orange-light)",
                      color: "var(--brand-orange)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--brand-navy)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {cat.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.92rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.5,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {cat.desc}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: "var(--brand-orange)",
                  }}
                >
                  Explore <ArrowRight size={15} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
