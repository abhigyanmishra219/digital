"use client";

import React, { useState } from "react";
import {
  Download,
  ExternalLink,
  MessageCircle,
  Check,
  ArrowRight,
  Sparkles,
  School,
  TrendingUp,
  Globe2,
  FileSpreadsheet,
} from "lucide-react";

interface PriceSheetProps {
  onOpenEnquiry: (packagePrefill?: string) => void;
}

export default function PriceSheet({ onOpenEnquiry }: PriceSheetProps) {
  const [activeTab, setActiveTab] = useState<
    "websites" | "coaching" | "schools" | "digital" | "full-sheet"
  >("websites");

  const erpWhatsAppUrl =
    "https://wa.me/919117090518?text=Hello%20UwillGet%20Digital,%20I%20am%20interested%20in%20School%20ERP.%20Want%20to%20know%20pricing%20and%20details%20for%20our%20institution.";

  const openDownloadSheet = () => {
    window.open("/UwillGet_Professional_Price_Sheet.html", "_blank");
  };

  // Section A.4 Website Management Plans
  const websiteManagementPlans = [
    {
      id: "basic",
      name: "Basic Plan",
      badge: "Starter",
      price: "₹2,399",
      billingCycle: "/ month",
      priceNote: "Professional starter website maintenance & deployment",
      idealFor: "Small businesses, professionals, and individuals.",
      features: [
        "Responsive website upkeep (Mobile & Desktop)",
        "Modern clean UI & layout checking",
        "Interactive contact form & leads routing",
        "WhatsApp chat integration verification",
        "Basic on-page SEO & meta update support",
        "Social media profile link maintenance",
        "Continuous deployment & cloud uptime maintenance",
      ],
      ctaText: "Choose Basic Plan",
    },
    {
      id: "standard",
      name: "Standard Plan",
      badge: "Enhanced",
      price: "₹4,599",
      billingCycle: "/ month",
      priceNote: "Enhanced dynamic updates & regular content changes",
      idealFor: "Growing businesses requiring regular updates and lead capture.",
      features: [
        "Full responsive dynamic layout upkeep",
        "Periodic service and offer page additions",
        "Lead / enquiry forms optimization",
        "Basic performance and security monitoring",
        "Routine blog or announcements updates",
        "Ongoing search visibility maintenance",
        "Fast cloud hosting upkeep & backups",
      ],
      ctaText: "Choose Standard Plan",
    },
    {
      id: "business",
      name: "Business Plan",
      badge: "Most Recommended",
      isRecommended: true,
      price: "₹7,999",
      billingCycle: "/ month",
      priceNote: "Comprehensive business website solution + priority support",
      idealFor: "Commercial businesses, institutions, and high-conversion brands.",
      features: [
        "Custom business architecture maintenance",
        "High performance responsive UI upkeep",
        "Lead generation system with direct notifications",
        "Landing page creation for active marketing campaigns",
        "WhatsApp & automated communication bridges",
        "Full SEO, core web vitals & speed optimization",
        "Priority tech coordination & periodic content updates",
      ],
      ctaText: "Choose Business Plan",
    },
    {
      id: "custom",
      name: "Custom Plan",
      badge: "Enterprise & Scale",
      price: "₹15,999",
      billingCycle: "/ month",
      priceNote: "Dedicated custom workflows, portals & bespoke requirements",
      idealFor: "Enterprises needing custom web platforms, portals, and scale.",
      features: [
        "Custom tailored backend & API maintenance",
        "Multi-role user authentication support",
        "Secure database upkeep (SQL / NoSQL)",
        "Dedicated staging & production release cycle",
        "Custom integration with third-party software",
        "24/7 critical uptime response & priority SLA",
      ],
      ctaText: "Choose Custom Plan",
    },
  ];

  // Section B: Coaching & Institutes Packages
  const coachingPackages = [
    {
      id: "coaching-starter",
      name: "Starter Package",
      badge: "Coaching Essentials",
      priceDisplay: "₹11,998",
      priceNote: "First Month Total (then ₹3,999 / month)",
      breakdown: [
        "Website (Business Plan): ₹7,999 one-time",
        "Social Media (Growth Plan): ₹3,999 / month",
      ],
      ongoingTerms: "First Month Total: ₹11,998 • Then ₹3,999 / month",
      idealFor: "Coaching institutes, academies and educators launching online.",
      features: [
        "Custom responsive coaching website",
        "Batch schedules, courses & faculty showcase",
        "Student enquiry forms & WhatsApp capture",
        "Active Social Media Growth package included",
        "Local Google Business optimization",
      ],
      ctaText: "Enroll in Starter Package",
    },
    {
      id: "coaching-growth",
      name: "Growth Package",
      badge: "High Enrollment",
      isRecommended: true,
      priceDisplay: "₹14,998",
      priceNote: "First Month Total (then ₹6,999 / month)",
      breakdown: [
        "Website (Business Plan): ₹7,999 one-time",
        "Social Media (Premium Plan): ₹6,999 / month",
      ],
      ongoingTerms: "First Month Total: ₹14,998 • Then ₹6,999 / month",
      idealFor: "Established institutes looking for continuous student admissions & authority.",
      features: [
        "Comprehensive coaching portal & batch landing pages",
        "Student enquiry management panel with direct alerts",
        "Premium Social Media Handling (Daily engagement, reels, creatives)",
        "High-converting lead funnel & admission enquiry forms",
        "Dedicated account manager & continuous support",
      ],
      ctaText: "Enroll in Growth Package",
    },
  ];

  // Section C: Schools & Colleges Packages
  const schoolPackages = [
    {
      id: "school-audit-setup",
      name: "Manual Social Media Audit + Setup & Management",
      terms: "One Time",
      price: "₹999",
      desc: "Complete manual institutional audit, social media account hygiene, official setup, and operational guidance.",
      features: [
        "Institutional social media audit",
        "Official account branding & verification prep",
        "Security & administrative permissions setup",
        "Introductory post kit & guidance",
      ],
      ctaText: "Order Setup (₹999)",
    },
    {
      id: "school-digital-presence",
      name: "Complete Digital Presence for Schools",
      badge: "Institution Complete",
      price: "₹14,998",
      terms: "First Month Total",
      desc: "Website (Business plan) + All Social Media (Premium)",
      breakdown: [
        "Website (Business plan): ₹7,999 one-time",
        "All Social Media (Premium): ₹6,999 / month",
      ],
      ongoingTerms: "First Month Total: ₹14,998 • Thereafter: ₹6,999 / month",
      features: [
        "Official institutional website with notices & prospectus download",
        "End-to-end premium social media management",
        "Event coverage, campus reels, and academic circulars",
        "Parent & student admission enquiry system",
        "Ongoing maintenance, domain security & updates",
      ],
      ctaText: "Get Complete Presence",
    },
    {
      id: "school-erp-pricing-card",
      name: "School ERP Solution",
      badge: "In-House System",
      isERP: true,
      price: "Let's Discuss!",
      priceQuestion: "Want to know pricing?",
      terms: "Tailored to student strength & requirements",
      desc: "Centralized administration software connecting Super Admin, Teachers, Students & Parents.",
      features: [
        "Daily attendance with instant parent SMS/WhatsApp alerts",
        "Exam management, grading, and term report cards",
        "Fee collection with digital receipts & tracking",
        "Teacher timetable & student notice board",
        "Role-based access security & cloud backup",
      ],
      ctaText: "Discuss ERP Pricing",
    },
  ];

  // Section A.1 & A.2 Digital Growth Solutions
  const digitalGrowthSolutions = [
    {
      title: "1. Full Audit Report",
      category: "Audit & Analysis",
      price: "₹149",
      terms: "One Time",
      desc: "Complete comprehensive digital presence, website, and social audit report with actionable fixes.",
    },
    {
      title: "2. a) Audit + Social Media Setup",
      category: "Digital Setup",
      price: "₹999",
      terms: "One Time",
      desc: "Manual social media audit, branded account creation and profile optimization across Instagram, Facebook, and Google.",
    },
    {
      title: "2. b) Google Business Setup",
      category: "Local Discovery",
      price: "₹399",
      terms: "One Time",
      desc: "Complete Google Business Profile setup, pin verification, service categories, working hours, and local visibility.",
    },
    {
      title: "2. c) Social Media Handling — Premium",
      category: "Monthly Management",
      price: "₹6,999",
      terms: "/ month",
      desc: "Full-service social media strategy, custom reels, static creatives, captions, posting calendar, and community engagement.",
    },
  ];

  // Section A.3 Social Media Packages
  const socialMediaPackages = [
    {
      name: "Starter Package",
      price: "₹1,999",
      terms: "/ month",
      desc: "Essential brand presence, scheduled posts, and profile maintenance for emerging businesses.",
      features: [
        "Account setup & profile branding",
        "Scheduled static posts per week",
        "Targeted hashtag & caption strategy",
        "Direct communication on WhatsApp",
      ],
    },
    {
      name: "Growth (Social + Leads)",
      price: "₹3,999",
      terms: "/ month",
      desc: "Strategic content creation, reels, customer engagement, and active enquiry lead generation.",
      isPopular: true,
      features: [
        "Consistent weekly posts & carousel sets",
        "Short-form video / reels concept planning",
        "Community response & DM management",
        "Lead capture & promotional creatives",
      ],
    },
    {
      name: "Premium Package",
      price: "₹6,999",
      terms: "/ month",
      desc: "End-to-end social media dominance, high-retention video reels, targeted campaigns, and full management.",
      features: [
        "Complete multi-platform social management",
        "Dedicated reels production & video editing",
        "Campaign specific graphic assets & banners",
        "Monthly performance review & strategic advice",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      style={{
        backgroundColor: "var(--bg-secondary)",
        padding: "5rem 0 5.5rem 0",
        borderTop: "1px solid var(--border-light)",
        borderBottom: "1px solid var(--border-light)",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: "2rem" }}>
          <div className="section-badge">OFFICIAL PRICE SHEET</div>
          <h2 className="section-title">Professional Pricing &amp; Service Plans</h2>
          <p className="section-description">
            You Want, We Get It. Transparent pricing for websites, coaching academies, schools, and digital growth systems.
          </p>

          {/* Quick Action Download & WhatsApp Header Bar (Same as Tech) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
              marginTop: "1.5rem",
            }}
          >
            <button
              type="button"
              onClick={openDownloadSheet}
              className="btn btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 22px",
                fontSize: "0.95rem",
                borderRadius: "var(--radius-full)",
                boxShadow: "0 4px 14px rgba(255, 107, 44, 0.3)",
              }}
              title="Download or Print Official Price Sheet"
            >
              <Download size={18} />
              <span>Download Official Price Sheet (PDF)</span>
              <ExternalLink size={15} />
            </button>

            <a
              href={erpWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                fontSize: "0.92rem",
                borderRadius: "var(--radius-full)",
                borderColor: "#25D366",
                color: "#15803D",
                backgroundColor: "rgba(37, 211, 102, 0.08)",
              }}
            >
              <MessageCircle size={18} style={{ color: "#25D366" }} />
              <span>School ERP Pricing Enquiry (WhatsApp)</span>
            </a>
          </div>
        </div>

        {/* Pricing Category Tabs Navigation (5 Tabs as in Tech folder) */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#FFFFFF",
              padding: "6px",
              borderRadius: "var(--radius-full)",
              border: "1px solid var(--border-light)",
              boxShadow: "var(--shadow-sm)",
              overflowX: "auto",
              maxWidth: "100%",
            }}
          >
            <button
              type="button"
              onClick={() => setActiveTab("websites")}
              style={{
                padding: "9px 18px",
                borderRadius: "var(--radius-full)",
                fontSize: "0.88rem",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
                backgroundColor: activeTab === "websites" ? "var(--brand-navy)" : "transparent",
                color: activeTab === "websites" ? "#FFFFFF" : "var(--text-secondary)",
                transition: "all 0.2s ease",
              }}
            >
              Website Management (A.4)
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("coaching")}
              style={{
                padding: "9px 18px",
                borderRadius: "var(--radius-full)",
                fontSize: "0.88rem",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
                backgroundColor: activeTab === "coaching" ? "var(--brand-orange)" : "transparent",
                color: activeTab === "coaching" ? "#FFFFFF" : "var(--text-secondary)",
                transition: "all 0.2s ease",
              }}
            >
              Coaching &amp; Institutes (B)
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("schools")}
              style={{
                padding: "9px 18px",
                borderRadius: "var(--radius-full)",
                fontSize: "0.88rem",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
                backgroundColor: activeTab === "schools" ? "#0D7A46" : "transparent",
                color: activeTab === "schools" ? "#FFFFFF" : "var(--text-secondary)",
                transition: "all 0.2s ease",
              }}
            >
              Schools &amp; Colleges (C)
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("digital")}
              style={{
                padding: "9px 18px",
                borderRadius: "var(--radius-full)",
                fontSize: "0.88rem",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
                backgroundColor: activeTab === "digital" ? "var(--brand-navy)" : "transparent",
                color: activeTab === "digital" ? "#FFFFFF" : "var(--text-secondary)",
                transition: "all 0.2s ease",
              }}
            >
              Digital Growth &amp; Social Media (A.1-A.3)
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("full-sheet")}
              style={{
                padding: "9px 18px",
                borderRadius: "var(--radius-full)",
                fontSize: "0.88rem",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
                backgroundColor: activeTab === "full-sheet" ? "var(--brand-orange)" : "transparent",
                color: activeTab === "full-sheet" ? "#FFFFFF" : "var(--brand-orange)",
                transition: "all 0.2s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <FileSpreadsheet size={16} />
              <span>Full Price Sheet Table</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: WEBSITE MANAGEMENT (A.4) */}
        {/* ========================================================================= */}
        {activeTab === "websites" && (
          <div>
            {/* Banner */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "var(--radius-lg)",
                padding: "1.5rem 2rem",
                borderLeft: "5px solid var(--brand-navy)",
                border: "1px solid var(--border-light)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <div>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--brand-navy)", textTransform: "uppercase" }}>
                  SECTION A.4
                </span>
                <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--brand-navy)" }}>
                  Website Management Plans
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  Continuous development, high performance hosting, updates, and maintenance for your digital infrastructure.
                </p>
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "var(--brand-orange)",
                  backgroundColor: "var(--brand-orange-light)",
                  padding: "6px 14px",
                  borderRadius: "var(--radius-full)",
                }}
              >
                <Sparkles size={16} />
                <span>Monthly Maintenance &amp; Growth</span>
              </div>
            </div>

            {/* Cards Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {websiteManagementPlans.map((pkg) => (
                <div
                  key={pkg.id}
                  className="card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "2rem",
                    borderColor: pkg.isRecommended ? "var(--brand-orange)" : "var(--border-light)",
                    boxShadow: pkg.isRecommended ? "0 8px 30px rgba(255, 107, 44, 0.15)" : "var(--shadow-sm)",
                    position: "relative",
                  }}
                >
                  {pkg.badge && (
                    <div
                      style={{
                        position: "absolute",
                        top: "-12px",
                        right: "20px",
                        backgroundColor: pkg.isRecommended ? "var(--brand-orange)" : "var(--brand-navy)",
                        color: "#FFFFFF",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        padding: "3px 10px",
                        borderRadius: "var(--radius-full)",
                        textTransform: "uppercase",
                      }}
                    >
                      {pkg.badge}
                    </div>
                  )}

                  <div>
                    <h4 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--brand-navy)", marginBottom: "4px" }}>
                      {pkg.name}
                    </h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.25rem", minHeight: "36px" }}>
                      {pkg.idealFor}
                    </p>

                    <div style={{ marginBottom: "1.25rem" }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                        <span style={{ fontSize: "2rem", fontWeight: 900, color: "var(--brand-orange)" }}>
                          {pkg.price}
                        </span>
                        <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-muted)" }}>
                          {pkg.billingCycle}
                        </span>
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "2px" }}>
                        {pkg.priceNote}
                      </div>
                    </div>

                    <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: "1rem", marginBottom: "1.5rem" }}>
                      <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--brand-navy)", textTransform: "uppercase", marginBottom: "0.6rem" }}>
                        Included Features:
                      </div>
                      <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.88rem", color: "var(--text-primary)" }}>
                            <div style={{ width: "16px", height: "16px", borderRadius: "50%", backgroundColor: "var(--brand-orange-light)", color: "var(--brand-orange)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "3px" }}>
                              <Check size={11} strokeWidth={3} />
                            </div>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenEnquiry(`Website Management (${pkg.name} - ${pkg.price}/mo)`)}
                    className={`btn btn-full ${pkg.isRecommended ? "btn-primary" : "btn-secondary"}`}
                    style={{ justifyContent: "center" }}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: COACHING & INSTITUTES (B) */}
        {/* ========================================================================= */}
        {activeTab === "coaching" && (
          <div>
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "var(--radius-lg)",
                padding: "1.5rem 2rem",
                borderLeft: "5px solid var(--brand-orange)",
                border: "1px solid var(--border-light)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <div>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--brand-orange)", textTransform: "uppercase" }}>
                  SECTION B
                </span>
                <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--brand-navy)" }}>
                  Coaching &amp; Institutes Packages
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  Complete bundled student acquisition systems: Dedicated business website + active Social Media handling.
                </p>
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  backgroundColor: "var(--brand-orange)",
                  padding: "6px 14px",
                  borderRadius: "var(--radius-full)",
                }}
              >
                <School size={16} />
                <span>Website + Social Media Bundles</span>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "2rem",
                marginBottom: "1.5rem",
              }}
            >
              {coachingPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "2.25rem",
                    borderColor: pkg.isRecommended ? "var(--brand-orange)" : "var(--border-light)",
                    boxShadow: pkg.isRecommended ? "0 10px 30px rgba(255, 107, 44, 0.15)" : "var(--shadow-sm)",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-12px",
                      right: "24px",
                      backgroundColor: "var(--brand-orange)",
                      color: "#FFFFFF",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      padding: "4px 12px",
                      borderRadius: "var(--radius-full)",
                      textTransform: "uppercase",
                    }}
                  >
                    {pkg.badge}
                  </div>

                  <div>
                    <h4 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--brand-navy)", marginBottom: "4px" }}>
                      {pkg.name}
                    </h4>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "1.25rem" }}>
                      {pkg.idealFor}
                    </p>

                    <div
                      style={{
                        backgroundColor: "#FFF8F5",
                        border: "1px solid rgba(255, 107, 44, 0.2)",
                        borderRadius: "var(--radius-md)",
                        padding: "1.25rem",
                        marginBottom: "1.5rem",
                      }}
                    >
                      <div style={{ fontSize: "1.85rem", fontWeight: 900, color: "var(--brand-orange)" }}>
                        {pkg.priceDisplay}
                      </div>
                      <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--brand-navy)", marginBottom: "8px" }}>
                        {pkg.priceNote}
                      </div>

                      <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "4px" }}>
                        Included Pricing Structure:
                      </div>
                      {pkg.breakdown.map((item, bIdx) => (
                        <div key={bIdx} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", color: "var(--text-primary)" }}>
                          <Check size={14} style={{ color: "var(--brand-orange)" }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: "1rem", marginBottom: "1.5rem" }}>
                      <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--brand-navy)", textTransform: "uppercase", marginBottom: "0.6rem" }}>
                        Deliverables:
                      </div>
                      <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.88rem", color: "var(--text-primary)" }}>
                            <div style={{ width: "16px", height: "16px", borderRadius: "50%", backgroundColor: "var(--brand-orange-light)", color: "var(--brand-orange)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "3px" }}>
                              <Check size={11} strokeWidth={3} />
                            </div>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenEnquiry(`Coaching ${pkg.name} (${pkg.priceDisplay})`)}
                    className={`btn btn-full ${pkg.isRecommended ? "btn-primary" : "btn-secondary"}`}
                    style={{ justifyContent: "center" }}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              ))}
            </div>

            <p style={{ textAlign: "center", fontSize: "0.85rem", color: "var(--text-muted)", fontStyle: "italic" }}>
              💡 <strong>Plan flexibility:</strong> Changes are applicable as per client requirements based on the Social Media Management plans in A.3 and Website Management plans in A.4.
            </p>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: SCHOOLS & COLLEGES (C) */}
        {/* ========================================================================= */}
        {activeTab === "schools" && (
          <div>
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "var(--radius-lg)",
                padding: "1.5rem 2rem",
                borderLeft: "5px solid #0D7A46",
                border: "1px solid var(--border-light)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <div>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#0D7A46", textTransform: "uppercase" }}>
                  SECTION C
                </span>
                <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--brand-navy)" }}>
                  Schools &amp; Colleges Packages
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  Institutional audits, complete digital presence packages, and our signature School ERP platform.
                </p>
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  backgroundColor: "#0D7A46",
                  padding: "6px 14px",
                  borderRadius: "var(--radius-full)",
                }}
              >
                <School size={16} />
                <span>Institutional Solutions</span>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1.75rem",
                marginBottom: "1.5rem",
              }}
            >
              {schoolPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "2rem",
                    borderColor: pkg.isERP ? "#0D7A46" : "var(--border-light)",
                    backgroundColor: pkg.isERP ? "#F0FDF4" : "#FFFFFF",
                    position: "relative",
                  }}
                >
                  {pkg.badge && (
                    <div
                      style={{
                        position: "absolute",
                        top: "-12px",
                        right: "20px",
                        backgroundColor: pkg.isERP ? "#0D7A46" : "var(--brand-navy)",
                        color: "#FFFFFF",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        padding: "3px 10px",
                        borderRadius: "var(--radius-full)",
                        textTransform: "uppercase",
                      }}
                    >
                      {pkg.badge}
                    </div>
                  )}

                  <div>
                    <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--brand-navy)", marginBottom: "4px" }}>
                      {pkg.name}
                    </h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.25rem", minHeight: "36px" }}>
                      {pkg.desc}
                    </p>

                    <div style={{ marginBottom: "1.25rem" }}>
                      {pkg.priceQuestion && (
                        <div style={{ fontSize: "0.85rem", color: "#0D7A46", fontWeight: 600 }}>
                          {pkg.priceQuestion}
                        </div>
                      )}
                      <div style={{ fontSize: "1.85rem", fontWeight: 900, color: pkg.isERP ? "#0D7A46" : "var(--brand-orange)" }}>
                        {pkg.price}
                      </div>
                      <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                        {pkg.terms}
                      </div>

                      {pkg.breakdown && (
                        <div style={{ marginTop: "8px", fontSize: "0.8rem", color: "var(--brand-navy)" }}>
                          {pkg.breakdown.map((item, bIdx) => (
                            <div key={bIdx}>• {item}</div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: "1rem", marginBottom: "1.5rem" }}>
                      <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--brand-navy)", textTransform: "uppercase", marginBottom: "0.6rem" }}>
                        Scope of Work:
                      </div>
                      <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.88rem", color: "var(--text-primary)" }}>
                            <div style={{ width: "16px", height: "16px", borderRadius: "50%", backgroundColor: pkg.isERP ? "rgba(13, 122, 70, 0.15)" : "var(--brand-orange-light)", color: pkg.isERP ? "#0D7A46" : "var(--brand-orange)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "3px" }}>
                              <Check size={11} strokeWidth={3} />
                            </div>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {pkg.isERP ? (
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <a
                        href={erpWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{
                          backgroundColor: "#25D366",
                          color: "#FFFFFF",
                          justifyContent: "center",
                        }}
                      >
                        <MessageCircle size={16} />
                        Enquire on WhatsApp
                      </a>
                      <button
                        type="button"
                        onClick={() => onOpenEnquiry("School ERP Quotation")}
                        className="btn btn-secondary btn-sm"
                        style={{ justifyContent: "center" }}
                      >
                        Ask for ERP Quotation
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onOpenEnquiry(`School ${pkg.name} (${pkg.price})`)}
                      className="btn btn-primary btn-full"
                      style={{ justifyContent: "center" }}
                    >
                      <span>{pkg.ctaText}</span>
                      <ArrowRight size={15} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            <p style={{ textAlign: "center", fontSize: "0.85rem", color: "var(--text-muted)", fontStyle: "italic" }}>
              💡 <strong>Plan flexibility:</strong> Changes are applicable as per client requirements based on the Social Media Management plans in A.3 and Website Management plans in A.4.
            </p>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: DIGITAL GROWTH & SOCIAL MEDIA (A.1 - A.3) */}
        {/* ========================================================================= */}
        {activeTab === "digital" && (
          <div>
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "var(--radius-lg)",
                padding: "1.5rem 2rem",
                borderLeft: "5px solid var(--brand-navy)",
                border: "1px solid var(--border-light)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <div>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--brand-navy)", textTransform: "uppercase" }}>
                  SECTION A.1, A.2, A.3
                </span>
                <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--brand-navy)" }}>
                  Digital Growth &amp; Social Media
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  Instant audits, verified Google Business Profile setups, and monthly social media handling.
                </p>
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "var(--brand-orange)",
                  backgroundColor: "var(--brand-orange-light)",
                  padding: "6px 14px",
                  borderRadius: "var(--radius-full)",
                }}
              >
                <TrendingUp size={16} />
                <span>Audits, Maps &amp; Social Leads</span>
              </div>
            </div>

            {/* Grid 2 Columns: Solutions (A.1, A.2) & Social Packages (A.3) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "2rem",
              }}
            >
              {/* Left Column: Digital Growth Solutions */}
              <div>
                <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--brand-navy)", marginBottom: "1rem" }}>
                  A.1 &amp; A.2 Digital Setup &amp; Audit Services
                </h4>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {digitalGrowthSolutions.map((item, idx) => (
                    <div
                      key={idx}
                      className="card"
                      style={{
                        padding: "1.25rem 1.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "1rem",
                      }}
                    >
                      <div style={{ maxWidth: "340px" }}>
                        <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--brand-orange)", textTransform: "uppercase" }}>
                          {item.category}
                        </span>
                        <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--brand-navy)", marginTop: "2px" }}>
                          {item.title}
                        </div>
                        <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "2px" }}>
                          {item.desc}
                        </div>
                      </div>

                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontSize: "1.35rem", fontWeight: 900, color: "var(--brand-orange)" }}>
                          {item.price}
                        </div>
                        <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "6px" }}>
                          {item.terms}
                        </div>
                        <button
                          type="button"
                          onClick={() => onOpenEnquiry(`${item.title} (${item.price})`)}
                          className="btn btn-secondary btn-sm"
                          style={{ padding: "4px 10px", fontSize: "0.78rem" }}
                        >
                          Book Service
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Social Media Management (A.3) */}
              <div>
                <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--brand-navy)", marginBottom: "1rem" }}>
                  A.3 Social Media Management Packages
                </h4>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {socialMediaPackages.map((pkg, idx) => (
                    <div
                      key={idx}
                      className="card"
                      style={{
                        padding: "1.5rem",
                        borderColor: pkg.isPopular ? "var(--brand-orange)" : "var(--border-light)",
                        boxShadow: pkg.isPopular ? "0 6px 20px rgba(255, 107, 44, 0.12)" : "var(--shadow-sm)",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                        <div>
                          <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--brand-navy)" }}>
                            {pkg.name}
                          </div>
                          <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "2px" }}>
                            {pkg.desc}
                          </div>
                        </div>

                        <div style={{ textAlign: "right" }}>
                          <div style={{ fontSize: "1.35rem", fontWeight: 900, color: "var(--brand-orange)" }}>
                            {pkg.price}
                          </div>
                          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                            {pkg.terms}
                          </div>
                        </div>
                      </div>

                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem", paddingTop: "0.75rem", borderTop: "1px solid var(--border-light)" }}>
                        <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                          Planned content &amp; posting schedule
                        </span>
                        <button
                          type="button"
                          onClick={() => onOpenEnquiry(`Social Media - ${pkg.name} (${pkg.price}/mo)`)}
                          className={`btn btn-sm ${pkg.isPopular ? "btn-primary" : "btn-secondary"}`}
                        >
                          Select Package
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: FULL PRICE SHEET TABLE (Exact Replica as in Tech Folder) */}
        {/* ========================================================================= */}
        {activeTab === "full-sheet" && (
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "var(--radius-xl)",
              border: "1.5px solid var(--border-light)",
              boxShadow: "var(--shadow-lg)",
              overflow: "hidden",
            }}
          >
            {/* Document Header */}
            <div
              style={{
                padding: "2rem",
                textAlign: "center",
                borderBottom: "2px solid #E2E8F0",
                background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
              }}
            >
              <div style={{ fontSize: "1.75rem", fontWeight: 900, color: "var(--brand-navy)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                UWILLGET
              </div>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--brand-orange)", letterSpacing: "0.08em", textTransform: "uppercase", margin: "3px 0 6px 0" }}>
                | DIGITAL • TECH SOLUTIONS • CONSULTANCY |
              </div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--brand-navy)" }}>
                Professional Price Sheet
              </h3>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontStyle: "italic" }}>
                You Want, We Get It.
              </div>
            </div>

            {/* SECTION A: Table */}
            <div>
              <div
                style={{
                  backgroundColor: "var(--brand-navy)",
                  color: "#FFFFFF",
                  padding: "0.85rem 1.5rem",
                  fontSize: "1rem",
                  fontWeight: 800,
                  letterSpacing: "0.03em",
                }}
              >
                A. SERVICES FOR ALL TYPES OF BUSINESS
              </div>

              {/* A.1 */}
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "#F8FAFC", borderBottom: "1px solid var(--border-light)" }}>
                    <th style={{ padding: "0.75rem 1.5rem", textAlign: "left", fontSize: "0.85rem", fontWeight: 700, color: "var(--brand-navy)" }}>
                      Service
                    </th>
                    <th style={{ padding: "0.75rem 1.5rem", textAlign: "right", fontSize: "0.85rem", fontWeight: 700, color: "var(--brand-navy)", width: "200px" }}>
                      Price / Terms
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid var(--border-light)" }}>
                    <td style={{ padding: "0.75rem 1.5rem", fontSize: "0.92rem", fontWeight: 600 }}>
                      1. Full Audit Report
                    </td>
                    <td style={{ padding: "0.75rem 1.5rem", textAlign: "right", fontSize: "1.05rem", fontWeight: 800, color: "var(--brand-orange)" }}>
                      ₹149
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* A.2 Sub-bar */}
              <div style={{ backgroundColor: "#FFF8F5", padding: "0.6rem 1.5rem", fontSize: "0.88rem", fontWeight: 700, color: "var(--brand-navy)", borderBottom: "1px solid var(--border-light)" }}>
                2. Complete Digital Growth Solutions for Business
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  <tr style={{ borderBottom: "1px solid var(--border-light)" }}>
                    <td style={{ padding: "0.7rem 1.5rem", fontSize: "0.9rem" }}>a) Audit + Social Media Setup</td>
                    <td style={{ padding: "0.7rem 1.5rem", textAlign: "right", fontSize: "1rem", fontWeight: 800, color: "var(--brand-orange)", width: "200px" }}>₹999</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border-light)" }}>
                    <td style={{ padding: "0.7rem 1.5rem", fontSize: "0.9rem" }}>b) Google Business Setup</td>
                    <td style={{ padding: "0.7rem 1.5rem", textAlign: "right", fontSize: "1rem", fontWeight: 800, color: "var(--brand-orange)", width: "200px" }}>₹399</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border-light)" }}>
                    <td style={{ padding: "0.7rem 1.5rem", fontSize: "0.9rem" }}>c) Social Media Handling — Premium</td>
                    <td style={{ padding: "0.7rem 1.5rem", textAlign: "right", fontSize: "1rem", fontWeight: 800, color: "var(--brand-orange)", width: "200px" }}>₹6,999 / month</td>
                  </tr>
                </tbody>
              </table>

              {/* A.3 Sub-bar */}
              <div style={{ backgroundColor: "#F1F5F9", padding: "0.6rem 1.5rem", fontSize: "0.88rem", fontWeight: 700, color: "var(--brand-navy)", borderBottom: "1px solid var(--border-light)" }}>
                3. SOCIAL MEDIA MANAGEMENT
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  <tr style={{ borderBottom: "1px solid var(--border-light)" }}>
                    <td style={{ padding: "0.7rem 1.5rem", fontSize: "0.9rem" }}>Starter Package</td>
                    <td style={{ padding: "0.7rem 1.5rem", textAlign: "right", fontSize: "1rem", fontWeight: 800, color: "var(--brand-orange)", width: "200px" }}>₹1,999 / month</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border-light)" }}>
                    <td style={{ padding: "0.7rem 1.5rem", fontSize: "0.9rem" }}>Growth (Social + Leads)</td>
                    <td style={{ padding: "0.7rem 1.5rem", textAlign: "right", fontSize: "1rem", fontWeight: 800, color: "var(--brand-orange)", width: "200px" }}>₹3,999 / month</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border-light)" }}>
                    <td style={{ padding: "0.7rem 1.5rem", fontSize: "0.9rem" }}>Premium</td>
                    <td style={{ padding: "0.7rem 1.5rem", textAlign: "right", fontSize: "1rem", fontWeight: 800, color: "var(--brand-orange)", width: "200px" }}>₹6,999 / month</td>
                  </tr>
                </tbody>
              </table>

              {/* A.4 Sub-bar */}
              <div style={{ backgroundColor: "#F8FAFC", padding: "0.6rem 1.5rem", fontSize: "0.88rem", fontWeight: 700, color: "var(--brand-navy)", borderBottom: "1px solid var(--border-light)" }}>
                4. WEBSITE MANAGEMENT
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  <tr style={{ borderBottom: "1px solid var(--border-light)" }}>
                    <td style={{ padding: "0.7rem 1.5rem", fontSize: "0.9rem" }}>Basic Plan</td>
                    <td style={{ padding: "0.7rem 1.5rem", textAlign: "right", fontSize: "1rem", fontWeight: 800, color: "var(--brand-orange)", width: "200px" }}>₹2,399 / month</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border-light)" }}>
                    <td style={{ padding: "0.7rem 1.5rem", fontSize: "0.9rem" }}>Standard Plan</td>
                    <td style={{ padding: "0.7rem 1.5rem", textAlign: "right", fontSize: "1rem", fontWeight: 800, color: "var(--brand-orange)", width: "200px" }}>₹4,599 / month</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border-light)", backgroundColor: "#FFF8F5" }}>
                    <td style={{ padding: "0.7rem 1.5rem", fontSize: "0.9rem", fontWeight: 700, color: "var(--brand-navy)" }}>
                      Business Plan — <span style={{ color: "var(--brand-orange)" }}>Most Recommended</span>
                    </td>
                    <td style={{ padding: "0.7rem 1.5rem", textAlign: "right", fontSize: "1.05rem", fontWeight: 800, color: "var(--brand-orange)", width: "200px" }}>₹7,999 / month</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border-light)" }}>
                    <td style={{ padding: "0.7rem 1.5rem", fontSize: "0.9rem" }}>Custom Plan</td>
                    <td style={{ padding: "0.7rem 1.5rem", textAlign: "right", fontSize: "1rem", fontWeight: 800, color: "var(--brand-orange)", width: "200px" }}>₹15,999 / month</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* SECTION B: Coaching & Institutes Table */}
            <div>
              <div
                style={{
                  backgroundColor: "var(--brand-orange)",
                  color: "#FFFFFF",
                  padding: "0.85rem 1.5rem",
                  fontSize: "1rem",
                  fontWeight: 800,
                  letterSpacing: "0.03em",
                }}
              >
                B. COACHING &amp; INSTITUTES
              </div>

              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "#F8FAFC", borderBottom: "1px solid var(--border-light)" }}>
                    <th style={{ padding: "0.75rem 1.5rem", textAlign: "left", fontSize: "0.85rem", fontWeight: 700, color: "var(--brand-navy)", width: "200px" }}>
                      Package
                    </th>
                    <th style={{ padding: "0.75rem 1.5rem", textAlign: "right", fontSize: "0.85rem", fontWeight: 700, color: "var(--brand-navy)" }}>
                      Included Pricing
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid var(--border-light)" }}>
                    <td style={{ padding: "0.9rem 1.5rem", fontWeight: 800, color: "var(--brand-navy)", verticalAlign: "top" }}>
                      Starter Package
                    </td>
                    <td style={{ padding: "0.9rem 1.5rem", textAlign: "right", fontSize: "0.9rem" }}>
                      <div>Website (Business): ₹7,999 one-time + Social Media (Growth): ₹3,999 / month</div>
                      <div style={{ fontWeight: 800, color: "var(--brand-orange)", fontSize: "0.95rem", marginTop: "2px" }}>First Month Total: ₹11,998</div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Then ₹3,999 / month</div>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border-light)", backgroundColor: "#FFF8F5" }}>
                    <td style={{ padding: "0.9rem 1.5rem", fontWeight: 800, color: "var(--brand-navy)", verticalAlign: "top" }}>
                      Growth Package
                    </td>
                    <td style={{ padding: "0.9rem 1.5rem", textAlign: "right", fontSize: "0.9rem" }}>
                      <div>Website (Business): ₹7,999 one-time + Social Media (Premium): ₹6,999 / month</div>
                      <div style={{ fontWeight: 800, color: "var(--brand-orange)", fontSize: "0.95rem", marginTop: "2px" }}>First Month Total: ₹14,998</div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Then ₹6,999 / month</div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div style={{ padding: "0.75rem 1.5rem", fontSize: "0.8rem", color: "var(--text-muted)", backgroundColor: "#F8FAFC", borderBottom: "1px solid var(--border-light)", fontStyle: "italic" }}>
                Plan flexibility: Changes are applicable as per client requirements based on the Social Media Management plans in A.3 and Website Management plans in A.4.
              </div>
            </div>

            {/* SECTION C: Schools & Colleges Table */}
            <div>
              <div
                style={{
                  backgroundColor: "#0D7A46",
                  color: "#FFFFFF",
                  padding: "0.85rem 1.5rem",
                  fontSize: "1rem",
                  fontWeight: 800,
                  letterSpacing: "0.03em",
                }}
              >
                C. SCHOOLS &amp; COLLEGES
              </div>

              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "#F8FAFC", borderBottom: "1px solid var(--border-light)" }}>
                    <th style={{ padding: "0.75rem 1.5rem", textAlign: "left", fontSize: "0.85rem", fontWeight: 700, color: "var(--brand-navy)" }}>
                      SERVICE
                    </th>
                    <th style={{ padding: "0.75rem 1.5rem", textAlign: "right", fontSize: "0.85rem", fontWeight: 700, color: "var(--brand-navy)", width: "240px" }}>
                      PRICE / TERMS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid var(--border-light)" }}>
                    <td style={{ padding: "0.85rem 1.5rem", fontSize: "0.9rem" }}>
                      1. Manual Social Media Audit + Social Media Setup &amp; Management — One Time
                    </td>
                    <td style={{ padding: "0.85rem 1.5rem", textAlign: "right", fontSize: "1.05rem", fontWeight: 800, color: "var(--brand-orange)" }}>
                      ₹999
                    </td>
                  </tr>
                </tbody>
              </table>

              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "#F8FAFC", borderBottom: "1px solid var(--border-light)" }}>
                    <th style={{ padding: "0.75rem 1.5rem", textAlign: "left", fontSize: "0.85rem", fontWeight: 700, color: "var(--brand-navy)" }}>
                      SERVICE / COMPONENT
                    </th>
                    <th style={{ padding: "0.75rem 1.5rem", textAlign: "right", fontSize: "0.85rem", fontWeight: 700, color: "var(--brand-navy)", width: "240px" }}>
                      PRICE / TERMS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid var(--border-light)", backgroundColor: "#FFF8F5" }}>
                    <td style={{ padding: "0.9rem 1.5rem", fontSize: "0.9rem" }}>
                      <strong>2. Complete Digital Presence — Website(Business plan) + All Social Media(Premium)</strong>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "2px" }}>First Month Total: ₹7,999 one-time + ₹6,999 / month</div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Thereafter: ₹6,999 / month</div>
                    </td>
                    <td style={{ padding: "0.9rem 1.5rem", textAlign: "right" }}>
                      <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--brand-orange)" }}>₹14,998</div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Thereafter: ₹6,999 / mo</div>
                    </td>
                  </tr>

                  <tr style={{ borderBottom: "1px solid var(--border-light)" }}>
                    <td style={{ padding: "0.9rem 1.5rem", fontSize: "0.9rem" }}>
                      <strong>3. School ERP</strong>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Centralized Super Admin, Teacher, Student, Parent Portals, Attendance, Fees &amp; Marks</div>
                    </td>
                    <td style={{ padding: "0.9rem 1.5rem", textAlign: "right" }}>
                      <div style={{ fontSize: "0.82rem", color: "#0D7A46", fontWeight: 600 }}>Want to know pricing?</div>
                      <div style={{ fontSize: "1rem", fontWeight: 800, color: "var(--brand-navy)" }}>Let&apos;s Discuss!</div>
                      <a
                        href={erpWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "#15803D",
                          marginTop: "4px",
                        }}
                      >
                        <MessageCircle size={13} style={{ color: "#25D366" }} />
                        Enquire on WhatsApp
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div style={{ padding: "0.75rem 1.5rem", fontSize: "0.8rem", color: "var(--text-muted)", backgroundColor: "#F8FAFC", borderBottom: "1px solid var(--border-light)", fontStyle: "italic" }}>
                Plan flexibility: Changes are applicable as per client requirements based on the Social Media Management plans in A.3 and Website Management plans in A.4.
              </div>
            </div>

            {/* Custom Requirements Box (Exact replica as in tech) */}
            <div
              style={{
                backgroundColor: "var(--brand-navy)",
                color: "#FFFFFF",
                padding: "1.75rem 2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1.25rem",
              }}
            >
              <div>
                <h4 style={{ fontSize: "1.2rem", fontWeight: 900, letterSpacing: "0.04em", textTransform: "uppercase", color: "#FFFFFF", marginBottom: "4px" }}>
                  CUSTOM REQUIREMENTS?
                </h4>
                <p style={{ fontSize: "0.85rem", color: "#CBD5E1" }}>
                  Call / WhatsApp: +91 9117090518 | 7905239681 &bull; Website: https://www.uwillget.com/ &bull; Email: uwillget4@gmail.com
                </p>
              </div>

              <button
                type="button"
                onClick={() => onOpenEnquiry("Custom Requirement")}
                className="btn btn-primary"
                style={{ fontSize: "0.92rem", padding: "10px 22px" }}
              >
                Let&apos;s Discuss Your Requirements
              </button>
            </div>
          </div>
        )}

        {/* Global Policy Notice (As in Tech folder) */}
        <div
          style={{
            marginTop: "2.5rem",
            backgroundColor: "#FFFFFF",
            border: "1px solid var(--border-light)",
            borderRadius: "var(--radius-lg)",
            padding: "1.25rem 1.5rem",
            textAlign: "center",
            fontSize: "0.9rem",
            color: "var(--text-secondary)",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <p>
            🛡️ <strong>Official Policy:</strong> All pricing follows the official UwillGet Professional Price Sheet. Plan flexibility is supported based on specific module combinations. For custom software or enterprise ERP, <strong>let&apos;s discuss on WhatsApp or phone</strong> for customized quotes.
          </p>
        </div>
      </div>
    </section>
  );
}
