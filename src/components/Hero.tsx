"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Share2,
  FileText,
  Sparkles,
  Search,
  Globe,
  Users,
  BarChart3,
  CheckCircle2,
  Send,
  MessageCircle,
} from "lucide-react";

interface HeroProps {
  onOpenEnquiry: (servicePrefill?: string) => void;
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  const [activeNode, setActiveNode] = useState<string>("Brand");

  const nodes = [
    {
      id: "Brand",
      title: "Brand Identity",
      icon: Sparkles,
      color: "#FF6B2C",
      role: "Visual foundation & recognition",
    },
    {
      id: "Social",
      title: "Social Media",
      icon: Share2,
      color: "#2563EB",
      role: "Engagement & community presence",
    },
    {
      id: "Content",
      title: "Content Creation",
      icon: FileText,
      color: "#059669",
      role: "Reels, posts & educational media",
    },
    {
      id: "Google",
      title: "Google Presence",
      icon: Search,
      color: "#EA4335",
      role: "Search discovery & local maps",
    },
    {
      id: "Website",
      title: "Website",
      icon: Globe,
      color: "#7C3AED",
      role: "Conversion hub & information",
    },
    {
      id: "Customers",
      title: "Customers",
      icon: Users,
      color: "#D97706",
      role: "Audience reach & enquiries",
    },
    {
      id: "Analytics",
      title: "Analytics",
      icon: BarChart3,
      color: "#0284C7",
      role: "Review & optimization insights",
    },
  ];

  return (
    <section
      id="hero"
      style={{
        paddingTop: "4.5rem",
        paddingBottom: "5rem",
        position: "relative",
        background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
        overflow: "hidden",
        borderBottom: "1px solid var(--border-light)",
      }}
    >
      {/* Background Subtle Gradient Blobs */}
      <div
        style={{
          position: "absolute",
          top: "-15%",
          right: "-10%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 107, 44, 0.08) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(27, 43, 94, 0.05) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Hero Left Content */}
          <div style={{ maxWidth: "620px" }}>
            {/* Positioning Tag */}
            <div
              className="section-badge"
              style={{
                marginBottom: "1.25rem",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "var(--brand-orange)",
                  display: "inline-block",
                }}
              />
              UwillGet Digital • Growth Solutions
            </div>

            {/* Exactly ONE H1 on the homepage */}
            <h1
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                color: "var(--brand-navy)",
                marginBottom: "1.25rem",
              }}
            >
              Build Your Presence. <br />
              <span style={{ color: "var(--brand-orange)" }}>Grow Your Business.</span>
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                lineHeight: 1.45,
                marginBottom: "1rem",
              }}
            >
              Digital marketing and online growth solutions for businesses, professionals, startups and organizations.
            </p>

            {/* Description */}
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                lineHeight: 1.65,
                marginBottom: "2rem",
              }}
            >
              We help businesses build a professional digital presence through social media, content, branding, Google Business, advertising and website management.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                alignItems: "center",
                marginBottom: "2.25rem",
              }}
            >
              <button
                onClick={() => onOpenEnquiry()}
                className="btn btn-primary btn-lg"
                id="hero-get-started-cta"
              >
                Get Started
                <ArrowRight size={18} />
              </button>
              <a
                href="#services"
                className="btn btn-secondary btn-lg"
                id="hero-explore-services-cta"
              >
                Explore Services
              </a>
              <a
                href="https://wa.me/919117090518?text=Hello%20UwillGet%20Digital%2C%20I%20want%20to%20discuss%20a%20digital%20marketing%20requirement."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  borderColor: "#25D366",
                  color: "#166534",
                  backgroundColor: "rgba(37, 211, 102, 0.08)",
                }}
              >
                <MessageCircle size={18} style={{ color: "#25D366" }} />
                WhatsApp
              </a>
            </div>

            {/* Small Trust Line */}
            <div
              style={{
                paddingTop: "1.25rem",
                borderTop: "1px solid var(--border-light)",
              }}
            >
              <p
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "var(--text-muted)",
                  letterSpacing: "0.03em",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                <span>Social Media</span>
                <span>•</span>
                <span>Content</span>
                <span>•</span>
                <span>Branding</span>
                <span>•</span>
                <span>Google</span>
                <span>•</span>
                <span>Advertising</span>
                <span>•</span>
                <span>Website Management</span>
              </p>
            </div>
          </div>

          {/* Hero Visual: Modern Marketing Command Center (Interconnected Ecosystem - NO fake stats) */}
          <div
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            <div
              style={{
                background: "linear-gradient(145deg, #131E3D 0%, #0B132B 100%)",
                borderRadius: "var(--radius-xl)",
                padding: "2rem",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow: "0 25px 50px -12px rgba(11, 19, 43, 0.35)",
                color: "#FFFFFF",
                position: "relative",
              }}
            >
              {/* Command Center Bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "1.25rem",
                  marginBottom: "1.5rem",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#EF4444" }} />
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#F59E0B" }} />
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10B981" }} />
                  <span style={{ fontSize: "0.8rem", color: "var(--text-inverse-muted)", marginLeft: "8px", fontWeight: 500 }}>
                    UwillGet Digital Ecosystem Architecture
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    padding: "3px 10px",
                    borderRadius: "12px",
                    background: "rgba(255, 107, 44, 0.2)",
                    color: "#FF8F5E",
                    fontWeight: 600,
                  }}
                >
                  Connected System
                </div>
              </div>

              {/* Central Architecture Map */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                  gap: "0.85rem",
                  marginBottom: "1.75rem",
                }}
              >
                {nodes.map((node) => {
                  const Icon = node.icon;
                  const isSelected = activeNode === node.id;
                  return (
                    <div
                      key={node.id}
                      onClick={() => setActiveNode(node.id)}
                      style={{
                        backgroundColor: isSelected ? "rgba(255, 107, 44, 0.15)" : "rgba(255, 255, 255, 0.04)",
                        border: isSelected ? "1.5px solid var(--brand-orange)" : "1px solid rgba(255, 255, 255, 0.08)",
                        borderRadius: "var(--radius-md)",
                        padding: "1rem 0.85rem",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        textAlign: "left",
                      }}
                    >
                      <div
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "8px",
                          backgroundColor: `${node.color}22`,
                          color: node.color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "0.6rem",
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "2px" }}>
                        {node.title}
                      </div>
                      <div style={{ fontSize: "0.72rem", color: "var(--text-inverse-muted)", lineHeight: 1.3 }}>
                        {node.role}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Interactive Inspector Panel */}
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  padding: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--brand-orange)", fontWeight: 700, marginBottom: "3px" }}>
                    Selected Component
                  </div>
                  <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#FFFFFF" }}>
                    {nodes.find((n) => n.id === activeNode)?.title}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-inverse-muted)", marginTop: "2px" }}>
                    {nodes.find((n) => n.id === activeNode)?.role}
                  </div>
                </div>

                <button
                  onClick={() => onOpenEnquiry(nodes.find((n) => n.id === activeNode)?.title)}
                  className="btn btn-primary btn-sm"
                  style={{ fontSize: "0.85rem", padding: "0.5rem 1rem" }}
                >
                  Discuss {activeNode}
                  <Send size={13} />
                </button>
              </div>

              {/* Status Indicator */}
              <div
                style={{
                  marginTop: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "0.78rem",
                  color: "var(--text-inverse-muted)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <CheckCircle2 size={14} style={{ color: "#10B981" }} />
                  <span>Strategic Coordination & Custom Execution</span>
                </div>
                <span>Zero Fabricated Metrics</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.95fr !important;
          }
        }
      `}</style>
    </section>
  );
}
