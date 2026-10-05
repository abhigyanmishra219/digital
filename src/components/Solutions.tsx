"use client";

import React from "react";
import {
  Store,
  MapPin,
  GraduationCap,
  School,
  Rocket,
  UserCheck,
  Briefcase,
  ArrowRight,
} from "lucide-react";

interface SolutionsProps {
  onOpenEnquiry: (solutionPrefill?: string) => void;
}

export default function Solutions({ onOpenEnquiry }: SolutionsProps) {
  const solutions = [
    {
      id: "small-businesses",
      title: "Small Businesses",
      icon: Store,
      desc: "Build a professional online presence and make it easier for customers to discover and contact you.",
      tag: "Visibility & Contact",
    },
    {
      id: "local-businesses",
      title: "Local Businesses",
      icon: MapPin,
      desc: "Google Business optimization, local social media, branding, and geographic discovery.",
      tag: "Local Footprint",
    },
    {
      id: "coaching-institutes",
      title: "Coaching Institutes",
      icon: GraduationCap,
      desc: "Social media, student-focused content, website management, and structured digital promotion.",
      tag: "Student Outreach",
    },
    {
      id: "schools",
      title: "Schools",
      icon: School,
      desc: "Institutional branding, website management, student announcements, and official communication channels.",
      tag: "Institutional Trust",
    },
    {
      id: "startups",
      title: "Startups",
      icon: Rocket,
      desc: "Brand identity, launch creatives, responsive web presence, and digital credibility from day one.",
      tag: "Go-to-Market",
    },
    {
      id: "professionals",
      title: "Professionals",
      icon: UserCheck,
      desc: "Personal branding, portfolio presence, thought-leadership creatives, and active social profiles.",
      tag: "Personal Brand",
    },
    {
      id: "service-businesses",
      title: "Service Businesses",
      icon: Briefcase,
      desc: "Service catalog content, Google presence, website management, and streamlined customer enquiry channels.",
      tag: "Client Acquisition",
    },
  ];

  return (
    <section id="solutions" className="section" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Tailored For Your Sector</div>
          <h2 className="section-title">Digital Solutions For Your Business</h2>
          <p className="section-description">
            Every business category operates differently. We design practical digital activities configured around your specific audience and operating model.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "1.75rem",
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
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        padding: "3px 8px",
                        borderRadius: "4px",
                        backgroundColor: "var(--bg-secondary)",
                        color: "var(--text-muted)",
                        fontWeight: 600,
                        border: "1px solid var(--border-light)",
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "var(--brand-navy)",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.92rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.55,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>

                <button
                  onClick={() => onOpenEnquiry(item.title)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: "var(--brand-orange)",
                    padding: 0,
                    cursor: "pointer",
                  }}
                >
                  Discuss {item.title} Strategy <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
