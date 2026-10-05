"use client";

import React from "react";
import {
  Share2,
  FileText,
  Sparkles,
  MapPin,
  Target,
  Globe2,
  Check,
  ArrowRight,
  ExternalLink,
  ShieldAlert,
  Info,
  MessageSquare,
} from "lucide-react";

interface ServicesSectionProps {
  onOpenEnquiry: (servicePrefill?: string) => void;
}

export default function ServicesSection({ onOpenEnquiry }: ServicesSectionProps) {
  const services = [
    {
      id: "service-social-media",
      icon: Share2,
      category: "Social Presence",
      title: "Social Media That Represents Your Business",
      description:
        "We help businesses maintain a professional and consistent social media presence through planning, content and ongoing management.",
      platforms: ["Instagram", "Facebook", "YouTube", "LinkedIn"],
      items: [
        "Social media account management",
        "Content planning & posting schedule",
        "Post creation & creative design",
        "Engaging captions & hashtag strategy",
        "Reels & short video concepts",
        "Community response & engagement",
        "Monthly content planning",
        "Objective performance review",
      ],
      primaryCta: "Manage My Social Media",
      secondaryCta: "Discuss My Requirements",
      prefill: "Social Media Management",
    },
    {
      id: "service-content-creation",
      icon: FileText,
      category: "Content Production",
      title: "Content That Communicates Your Brand",
      description:
        "Create useful and visually consistent content designed around your business, audience and goals.",
      platforms: ["Visual Posts", "Short Videos", "Educational"],
      items: [
        "Social media static & carousel posts",
        "Promotional creatives & banners",
        "Short-form videos & reels editing",
        "Educational & value-driven content",
        "Product & service highlight creatives",
        "Festival & seasonal event creatives",
        "Campaign-specific design assets",
        "Structured content calendars",
      ],
      primaryCta: "Create Content For My Business",
      secondaryCta: "Explore Options",
      prefill: "Content Creation",
    },
    {
      id: "service-branding",
      icon: Sparkles,
      category: "Identity & Design",
      title: "Build a Brand People Can Recognize",
      description:
        "A consistent visual identity helps customers recognize and remember your business across touchpoints.",
      platforms: ["Visual Identity", "Print & Digital"],
      items: [
        "Logo design & icon mark",
        "Visiting cards & stationary design",
        "Social media profile identity kit",
        "Curated brand colors & typography rules",
        "Digital marketing banners",
        "Promotional flyer & brochure designs",
        "Basic brand guidelines document",
        "Consistent brand asset system",
      ],
      primaryCta: "Build My Brand",
      secondaryCta: "View Brand Solutions",
      prefill: "Branding",
    },
    {
      id: "service-google-presence",
      icon: MapPin,
      category: "Local Discovery",
      title: "Get Found When Customers Search",
      description:
        "Help businesses establish and maintain a stronger Google Business presence for customers searching in your local area.",
      platforms: ["Google Business Profile", "Google Maps"],
      disclaimer: "We do NOT promise rankings or guaranteed leads. We focus on complete and accurate setup.",
      items: [
        "Google Business Profile setup & verification guidance",
        "Profile optimization for local searches",
        "Accurate business info, hours & contact points",
        "Category & service catalog structuring",
        "High-quality store/office image uploads",
        "Regular Google updates & posts",
        "Legitimate review collection guidance",
        "Ongoing profile maintenance & accuracy",
      ],
      primaryCta: "Improve My Google Presence",
      secondaryCta: "Discuss Setup",
      prefill: "Google Business",
    },
    {
      id: "service-digital-advertising",
      icon: Target,
      category: "Paid Reach",
      title: "Reach the Right Audience",
      description:
        "We help businesses plan and manage online advertising campaigns based on their objectives, audience and budget.",
      platforms: ["Google Ads", "Targeted Campaigns"],
      disclaimer:
        "Advertising results depend on the market, offer, audience, budget, competition and campaign execution. We do NOT claim guaranteed leads, sales or ROI.",
      items: [
        "Campaign strategy & audience targeting",
        "Ad copy & creative development",
        "Google Ads setup & structuring",
        "Conversion tracking guidance where applicable",
        "Ongoing campaign budget & bid monitoring",
        "Objective performance reviews",
        "Landing page experience recommendations",
        "Budget-conscious pacing",
      ],
      primaryCta: "Discuss Advertising",
      secondaryCta: "Ask for Consultation",
      prefill: "Google Ads",
    },
    {
      id: "service-website-management",
      icon: Globe2,
      category: "Web Maintenance",
      title: "Keep Your Website Updated",
      description:
        "Your website should stay accurate, secure and useful after launch so visitors always see fresh information.",
      platforms: ["Existing Websites", "Landing Pages"],
      techCrossLink: true,
      items: [
        "Content & copy updates",
        "Image, banner & asset updates",
        "New service or campaign landing pages",
        "Basic on-page SEO meta updates",
        "Form and lead capture testing",
        "Product/service pricing updates",
        "General maintenance coordination",
        "Speed & performance upkeep",
      ],
      primaryCta: "Manage My Website",
      secondaryCta: "Need a New Site?",
      prefill: "Website Management",
    },
  ];

  return (
    <section id="services" className="section" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">Comprehensive Offerings</div>
          <h2 className="section-title">Everything Your Business Needs Online</h2>
          <p className="section-description">
            From building your first digital presence to managing ongoing campaigns, UwillGet Digital provides practical digital marketing services based on your business requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2.25rem",
          }}
        >
          {services.map((srv, index) => {
            const Icon = srv.icon;
            const isDark = index % 2 === 1;

            return (
              <div
                key={srv.id}
                id={srv.id}
                style={{
                  backgroundColor: isDark ? "var(--bg-dark)" : "var(--bg-secondary)",
                  color: isDark ? "var(--text-inverse)" : "var(--text-primary)",
                  borderRadius: "var(--radius-xl)",
                  border: isDark ? "1px solid var(--border-dark)" : "1px solid var(--border-light)",
                  padding: "2.5rem",
                  transition: "all 0.3s ease",
                  scrollMarginTop: "90px",
                }}
                className="service-card-wrapper"
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "2rem",
                  }}
                  className="service-card-grid"
                >
                  {/* Left Column: Info & Platforms */}
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "12px",
                          backgroundColor: isDark ? "rgba(255, 107, 44, 0.2)" : "var(--brand-orange-light)",
                          color: "var(--brand-orange)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon size={24} />
                      </div>
                      <div>
                        <span
                          style={{
                            fontSize: "0.78rem",
                            fontWeight: 700,
                            letterSpacing: "0.05em",
                            textTransform: "uppercase",
                            color: "var(--brand-orange)",
                          }}
                        >
                          {srv.category}
                        </span>
                        <div
                          style={{
                            display: "flex",
                            gap: "6px",
                            flexWrap: "wrap",
                            marginTop: "3px",
                          }}
                        >
                          {srv.platforms.map((p) => (
                            <span
                              key={p}
                              style={{
                                fontSize: "0.72rem",
                                padding: "2px 8px",
                                borderRadius: "4px",
                                backgroundColor: isDark ? "rgba(255, 255, 255, 0.1)" : "#FFFFFF",
                                color: isDark ? "#CBD5E1" : "var(--text-muted)",
                                border: isDark ? "none" : "1px solid var(--border-light)",
                                fontWeight: 500,
                              }}
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <h3
                      style={{
                        fontSize: "1.75rem",
                        fontWeight: 800,
                        lineHeight: 1.25,
                        marginBottom: "0.85rem",
                        color: isDark ? "#FFFFFF" : "var(--brand-navy)",
                      }}
                    >
                      {srv.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "1.025rem",
                        lineHeight: 1.6,
                        color: isDark ? "var(--text-inverse-muted)" : "var(--text-secondary)",
                        marginBottom: "1.5rem",
                      }}
                    >
                      {srv.description}
                    </p>

                    {/* Disclaimer Badge if present */}
                    {srv.disclaimer && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                          padding: "0.85rem 1rem",
                          borderRadius: "var(--radius-md)",
                          backgroundColor: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 107, 44, 0.06)",
                          border: isDark ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(255, 107, 44, 0.2)",
                          fontSize: "0.85rem",
                          lineHeight: 1.45,
                          marginBottom: "1.5rem",
                          color: isDark ? "#CBD5E1" : "var(--text-secondary)",
                        }}
                      >
                        <ShieldAlert size={18} style={{ color: "var(--brand-orange)", flexShrink: 0, marginTop: "2px" }} />
                        <span>{srv.disclaimer}</span>
                      </div>
                    )}

                    {/* Technology Division Cross Link if Website Management */}
                    {srv.techCrossLink && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0.85rem 1rem",
                          borderRadius: "var(--radius-md)",
                          backgroundColor: "rgba(27, 43, 94, 0.08)",
                          border: "1px solid rgba(27, 43, 94, 0.15)",
                          marginBottom: "1.5rem",
                        }}
                      >
                        <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--brand-navy)" }}>
                          Need a brand new website or custom software?
                        </div>
                        <a
                          href="https://tech.uwillget.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: "0.85rem",
                            fontWeight: 700,
                            color: "var(--brand-orange)",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          Explore Technology <ExternalLink size={14} />
                        </a>
                      </div>
                    )}

                    {/* CTA Buttons */}
                    <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}>
                      <button
                        onClick={() => onOpenEnquiry(srv.prefill)}
                        className="btn btn-primary"
                      >
                        {srv.primaryCta}
                        <ArrowRight size={15} />
                      </button>
                      <a
                        href={`https://wa.me/919117090518?text=Hello%20UwillGet%20Digital%2C%20I%20am%20interested%20in%20${encodeURIComponent(srv.prefill)}%20for%20my%20business.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn ${isDark ? "btn-outline-white" : "btn-secondary"}`}
                      >
                        <MessageSquare size={15} style={{ color: "var(--brand-orange)" }} />
                        Discuss on WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Key Deliverables List */}
                  <div
                    style={{
                      backgroundColor: isDark ? "rgba(255, 255, 255, 0.03)" : "#FFFFFF",
                      borderRadius: "var(--radius-lg)",
                      padding: "1.75rem",
                      border: isDark ? "1px solid rgba(255, 255, 255, 0.07)" : "1px solid var(--border-light)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: "var(--brand-orange)",
                        marginBottom: "1rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <Info size={15} />
                      Scope of Services & Activities
                    </div>
                    <ul
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        gap: "0.75rem",
                      }}
                    >
                      {srv.items.map((item, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "10px",
                            fontSize: "0.92rem",
                            color: isDark ? "#E2E8F0" : "var(--text-primary)",
                            lineHeight: 1.45,
                          }}
                        >
                          <div
                            style={{
                              width: "18px",
                              height: "18px",
                              borderRadius: "50%",
                              backgroundColor: "rgba(255, 107, 44, 0.15)",
                              color: "var(--brand-orange)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                              marginTop: "2px",
                            }}
                          >
                            <Check size={12} strokeWidth={3} />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          .service-card-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}</style>
    </section>
  );
}
