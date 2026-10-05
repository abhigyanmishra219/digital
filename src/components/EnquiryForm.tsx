"use client";

import React, { useState } from "react";
import {
  Send,
  MessageCircle,
  Phone,
  Mail,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

interface EnquiryFormProps {
  initialService?: string;
  isModal?: boolean;
  onSuccess?: () => void;
}

export default function EnquiryForm({
  initialService = "",
  isModal = false,
  onSuccess,
}: EnquiryFormProps) {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [service, setService] = useState(initialService || "Social Media Management");
  const [budgetRange, setBudgetRange] = useState("Not Decided");
  const [projectDescription, setProjectDescription] = useState("");
  const [contactMethod, setContactMethod] = useState<"WhatsApp" | "Call" | "Email">("WhatsApp");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const serviceOptions = [
    "Social Media Management",
    "Social Media Promotion",
    "Content Creation",
    "Reels / Short Videos",
    "Branding",
    "Digital Presence Audit",
    "Google Business",
    "Google Ads",
    "Website Management",
    "Website Development",
    "Digital Marketing",
    "Custom Requirement",
    "Other",
  ];

  const budgetOptions = [
    "Under ₹5,000",
    "₹5,000–₹10,000",
    "₹10,000–₹25,000",
    "₹25,000–₹50,000",
    "₹50,000+",
    "Not Decided",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Form Validation
    if (!fullName.trim()) {
      setErrorMessage("Please provide your Full Name.");
      return;
    }
    const cleanMobile = mobileNumber.replace(/\D/g, "");
    if (!cleanMobile || cleanMobile.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!projectDescription.trim()) {
      setErrorMessage("Please provide a brief description of your requirement.");
      return;
    }

    setLoading(true);

    // Prepare dispatch data
    const messageBody = `*New Enquiry - UwillGet Digital*
Name: ${fullName.trim()}
Mobile: ${cleanMobile}
Email: ${email.trim() || "Not provided"}
Business: ${businessName.trim() || "Not provided"}
Service Required: ${service}
Budget: ${budgetRange}
Preferred Contact: ${contactMethod}
Description: ${projectDescription.trim()}`;

    // Simulate async submission and open direct functional channel
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onSuccess) onSuccess();

      // Trigger actual WhatsApp dispatch if contactMethod is WhatsApp or user wants instant handover
      if (contactMethod === "WhatsApp") {
        const whatsappUrl = `https://wa.me/919117090518?text=${encodeURIComponent(messageBody)}`;
        window.open(whatsappUrl, "_blank");
      }
    }, 600);
  };

  if (submitted) {
    return (
      <div
        style={{
          padding: isModal ? "1.5rem 0" : "2.5rem 1.5rem",
          textAlign: "center",
          backgroundColor: isModal ? "transparent" : "#FFFFFF",
          borderRadius: "var(--radius-lg)",
        }}
      >
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            backgroundColor: "rgba(16, 185, 129, 0.12)",
            color: "#10B981",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.25rem auto",
          }}
        >
          <CheckCircle2 size={32} />
        </div>

        <h3
          style={{
            fontSize: "1.45rem",
            fontWeight: 800,
            color: "var(--brand-navy)",
            marginBottom: "0.5rem",
          }}
        >
          Thank you! Your enquiry has been received.
        </h3>

        <p
          style={{
            fontSize: "1rem",
            color: "var(--text-secondary)",
            maxWidth: "460px",
            margin: "0 auto 1.75rem auto",
            lineHeight: 1.5,
          }}
        >
          Our team will contact you shortly via <strong>{contactMethod}</strong>. For instant discussion, feel free to reach out directly:
        </p>

        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "1.5rem",
          }}
        >
          <a
            href="https://wa.me/919117090518?text=Hello%20UwillGet%20Digital%2C%20I%20have%20submitted%20an%20enquiry%20and%20would%20like%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              backgroundColor: "#25D366",
              color: "#FFFFFF",
            }}
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
          </a>

          <a href="tel:9117090518" className="btn btn-secondary">
            <Phone size={16} style={{ color: "var(--brand-navy)" }} />
            Call Us (9117090518)
          </a>

          <a href="mailto:uwillget4@gmail.com" className="btn btn-secondary">
            <Mail size={16} style={{ color: "var(--brand-orange)" }} />
            Email Us
          </a>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setFullName("");
            setMobileNumber("");
            setProjectDescription("");
          }}
          style={{
            fontSize: "0.85rem",
            color: "var(--brand-orange)",
            fontWeight: 600,
            textDecoration: "underline",
          }}
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
      {errorMessage && (
        <div
          style={{
            backgroundColor: "#FEF2F2",
            border: "1px solid #F87171",
            color: "#991B1B",
            padding: "0.75rem 1rem",
            borderRadius: "var(--radius-sm)",
            fontSize: "0.85rem",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <AlertCircle size={16} />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Grid: Name & Mobile */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isModal ? "1fr" : "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1rem",
        }}
      >
        <div>
          <label
            htmlFor="full-name"
            style={{
              display: "block",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "var(--text-primary)",
              marginBottom: "0.35rem",
            }}
          >
            Full Name <span style={{ color: "var(--brand-orange)" }}>*</span>
          </label>
          <input
            id="full-name"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="e.g. Ramesh Sharma"
            style={{
              width: "100%",
              padding: "0.75rem 0.9rem",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--border-medium)",
              fontSize: "0.95rem",
              fontFamily: "inherit",
              outline: "none",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="mobile-number"
            style={{
              display: "block",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "var(--text-primary)",
              marginBottom: "0.35rem",
            }}
          >
            Mobile Number <span style={{ color: "var(--brand-orange)" }}>*</span>
          </label>
          <input
            id="mobile-number"
            type="tel"
            required
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="e.g. 9117090518"
            style={{
              width: "100%",
              padding: "0.75rem 0.9rem",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--border-medium)",
              fontSize: "0.95rem",
              fontFamily: "inherit",
              outline: "none",
            }}
          />
        </div>
      </div>

      {/* Grid: Email & Business Name */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isModal ? "1fr" : "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1rem",
        }}
      >
        <div>
          <label
            htmlFor="email-address"
            style={{
              display: "block",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "var(--text-primary)",
              marginBottom: "0.35rem",
            }}
          >
            Email Address
          </label>
          <input
            id="email-address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. contact@business.com"
            style={{
              width: "100%",
              padding: "0.75rem 0.9rem",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--border-medium)",
              fontSize: "0.95rem",
              fontFamily: "inherit",
              outline: "none",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="business-name"
            style={{
              display: "block",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "var(--text-primary)",
              marginBottom: "0.35rem",
            }}
          >
            Business / Organization Name
          </label>
          <input
            id="business-name"
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="e.g. Apex Academy"
            style={{
              width: "100%",
              padding: "0.75rem 0.9rem",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--border-medium)",
              fontSize: "0.95rem",
              fontFamily: "inherit",
              outline: "none",
            }}
          />
        </div>
      </div>

      {/* Grid: Service & Budget */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isModal ? "1fr" : "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1rem",
        }}
      >
        <div>
          <label
            htmlFor="service-need"
            style={{
              display: "block",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "var(--text-primary)",
              marginBottom: "0.35rem",
            }}
          >
            What do you need? <span style={{ color: "var(--brand-orange)" }}>*</span>
          </label>
          <select
            id="service-need"
            value={service}
            onChange={(e) => setService(e.target.value)}
            style={{
              width: "100%",
              padding: "0.75rem 0.9rem",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--border-medium)",
              fontSize: "0.95rem",
              backgroundColor: "#FFFFFF",
              fontFamily: "inherit",
              outline: "none",
            }}
          >
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="budget-range"
            style={{
              display: "block",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "var(--text-primary)",
              marginBottom: "0.35rem",
            }}
          >
            Budget Range
          </label>
          <select
            id="budget-range"
            value={budgetRange}
            onChange={(e) => setBudgetRange(e.target.value)}
            style={{
              width: "100%",
              padding: "0.75rem 0.9rem",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--border-medium)",
              fontSize: "0.95rem",
              backgroundColor: "#FFFFFF",
              fontFamily: "inherit",
              outline: "none",
            }}
          >
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Project Description */}
      <div>
        <label
          htmlFor="project-description"
          style={{
            display: "block",
            fontSize: "0.85rem",
            fontWeight: 600,
            color: "var(--text-primary)",
            marginBottom: "0.35rem",
          }}
        >
          Project Description <span style={{ color: "var(--brand-orange)" }}>*</span>
        </label>
        <textarea
          id="project-description"
          required
          rows={3}
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          placeholder="Tell us about your business, current presence, and what goals you want to achieve..."
          style={{
            width: "100%",
            padding: "0.75rem 0.9rem",
            borderRadius: "var(--radius-sm)",
            border: "1px solid var(--border-medium)",
            fontSize: "0.95rem",
            fontFamily: "inherit",
            resize: "vertical",
            outline: "none",
          }}
        />
      </div>

      {/* Preferred Contact Method */}
      <div>
        <label
          style={{
            display: "block",
            fontSize: "0.85rem",
            fontWeight: 600,
            color: "var(--text-primary)",
            marginBottom: "0.5rem",
          }}
        >
          Preferred Contact Method
        </label>
        <div style={{ display: "flex", gap: "1rem" }}>
          {(["WhatsApp", "Call", "Email"] as const).map((method) => (
            <label
              key={method}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.9rem",
                cursor: "pointer",
                padding: "6px 12px",
                borderRadius: "var(--radius-sm)",
                backgroundColor: contactMethod === method ? "var(--brand-orange-light)" : "transparent",
                border: contactMethod === method ? "1px solid var(--brand-orange)" : "1px solid var(--border-light)",
                fontWeight: contactMethod === method ? 600 : 400,
                color: contactMethod === method ? "var(--brand-orange)" : "var(--text-secondary)",
              }}
            >
              <input
                type="radio"
                name={`contact-method-${isModal ? "modal" : "page"}`}
                value={method}
                checked={contactMethod === method}
                onChange={() => setContactMethod(method)}
                style={{ display: "none" }}
              />
              {method}
            </label>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="btn btn-primary btn-lg btn-full"
        style={{ marginTop: "0.5rem", justifyContent: "center" }}
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Submitting Enquiry...
          </>
        ) : (
          <>
            Submit Enquiry
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}
