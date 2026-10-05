"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight, MessageSquare, Phone } from "lucide-react";

interface NavbarProps {
  onOpenEnquiry: (servicePrefill?: string) => void;
}

export default function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Solutions", href: "#solutions" },
    { label: "Audit", href: "#audit" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.96)" : "#FFFFFF",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          borderBottom: "1px solid var(--border-light)",
          transition: "all 0.25s ease",
          boxShadow: isScrolled ? "0 4px 20px rgba(15, 23, 42, 0.06)" : "none",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "var(--header-height)",
          }}
        >
          {/* Brand Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                overflow: "hidden",
                border: "1px solid var(--border-light)",
                boxShadow: "0 2px 8px rgba(27, 43, 94, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
                flexShrink: 0,
              }}
            >
              <Image
                src="/uwillget_logo_complete.jpeg"
                alt="UwillGet Logo"
                width={42}
                height={42}
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
                priority
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--brand-navy)", letterSpacing: "-0.02em" }}>
                  UwillGet
                </span>
                <span
                  style={{
                    backgroundColor: "var(--brand-orange)",
                    color: "#FFFFFF",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    padding: "2px 6px",
                    borderRadius: "4px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Digital
                </span>
              </div>
              <span style={{ fontSize: "0.68rem", color: "var(--text-muted)", letterSpacing: "0.02em" }}>
                U Want It, U Get It
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "1.75rem",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: "0.925rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-orange)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div
            style={{
              display: "none",
              alignItems: "center",
              gap: "0.75rem",
            }}
            className="desktop-actions"
          >
            <button
              onClick={() => onOpenEnquiry()}
              className="btn btn-secondary btn-sm"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                borderColor: "var(--border-light)",
              }}
            >
              <MessageSquare size={15} style={{ color: "var(--brand-orange)" }} />
              Ask for Enquiry
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("enquiry-section") || document.getElementById("contact");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn btn-primary btn-sm"
            >
              Get Started
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "42px",
              height: "42px",
              borderRadius: "8px",
              border: "1px solid var(--border-light)",
              color: "var(--brand-navy)",
              backgroundColor: "var(--bg-secondary)",
            }}
            className="mobile-hamburger"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderTop: "1px solid var(--border-light)",
              padding: "1.25rem 1.5rem 1.75rem 1.5rem",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
            }}
            className="mobile-menu-drawer"
          >
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "1.5rem" }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    padding: "0.4rem 0",
                    borderBottom: "1px solid var(--border-light)",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="btn btn-secondary btn-full"
                style={{ justifyContent: "center" }}
              >
                <MessageSquare size={16} style={{ color: "var(--brand-orange)" }} />
                Ask for Enquiry
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  const el = document.getElementById("enquiry-section") || document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn btn-primary btn-full"
                style={{ justifyContent: "center" }}
              >
                Get Started
                <ArrowRight size={16} />
              </button>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  marginTop: "0.5rem",
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                }}
              >
                <Phone size={14} style={{ color: "var(--brand-orange)" }} />
                Direct Call: <a href="tel:9117090518" style={{ fontWeight: 600, color: "var(--brand-navy)" }}>9117090518</a>
              </div>
            </div>
          </div>
        )}
      </header>

      <style jsx>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-hamburger {
            display: none !important;
          }
          .mobile-menu-drawer {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
