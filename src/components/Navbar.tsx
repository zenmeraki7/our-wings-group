"use client";

import React, { useState, useEffect } from "react";
import { Plane, Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";

interface NavbarProps {
  onOpenInquiry?: () => void;
}

export default function Navbar({ onOpenInquiry }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Divisions", href: "#divisions" },
    { name: "Global Reach", href: "#reach" },
    { name: "About Group", href: "#about" },
    { name: "Leadership", href: "#leadership" },
    { name: "Impact & ESG", href: "#impact" },
    { name: "Insights", href: "#insights" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(7, 10, 30, 0.94)" : "rgba(7, 10, 30, 0.5)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(229, 194, 135, 0.25)" : "1px solid rgba(229, 194, 135, 0.1)",
        padding: scrolled ? "0.85rem 0" : "1.2rem 0",
      }}
    >
      <div
        style={{
          width: "min(1500px, calc(100% - 48px))",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.2rem",
        }}
      >
        {/* Brand Identity */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.85rem",
            flexShrink: 0,
            whiteSpace: "nowrap",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #e8cca4 0%, #dfc295 50%, #c99f5e 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 18px rgba(229, 194, 135, 0.35)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              flexShrink: 0,
            }}
          >
            <Plane size={22} color="#070a1e" style={{ transform: "rotate(-45deg)" }} />
          </div>
          <div style={{ whiteSpace: "nowrap", flexShrink: 0 }}>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.25rem",
                fontWeight: 800,
                letterSpacing: "0.02em",
                lineHeight: 1.1,
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                whiteSpace: "nowrap",
              }}
            >
              <span>OUR WINGS</span>
              <span style={{ color: "#e5c287" }}>GROUP</span>
            </div>
            <div
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#e5c287",
                fontWeight: 600,
                opacity: 0.85,
                whiteSpace: "nowrap",
              }}
            >
              Global Talent & Mobility
            </div>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav
          style={{
            display: "none",
            gap: "clamp(0.9rem, 1.6vw, 1.85rem)",
            alignItems: "center",
            flexShrink: 1,
            whiteSpace: "nowrap",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: "#94a3b8",
                fontSize: "0.92rem",
                fontWeight: 500,
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#e5c287")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Trust Indicator */}
        <div
          style={{
            display: "none",
            alignItems: "center",
            gap: "0.85rem",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
          className="desktop-nav"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.45rem",
              fontSize: "0.8rem",
              color: "#e5c287",
              background: "rgba(229, 194, 135, 0.08)",
              padding: "0.4rem 0.85rem",
              borderRadius: "var(--radius-full)",
              border: "1px solid rgba(229, 194, 135, 0.28)",
              fontWeight: 600,
              flexShrink: 0,
            }}
          >
            <ShieldCheck size={15} color="#e5c287" />
            <span>Govt. Authorized • MEA Approved</span>
          </div>

          <button
            onClick={onOpenInquiry}
            className="btn btn-primary"
            style={{ 
              padding: "0.65rem 1.4rem", 
              fontSize: "0.88rem",
              background: "linear-gradient(135deg, #e8cca4 0%, #dfc295 50%, #c99f5e 100%)",
              color: "#070a1e",
              fontWeight: 700,
              boxShadow: "0 4px 15px rgba(229, 194, 135, 0.3)",
              flexShrink: 0,
            }}
            id="nav-partner-btn"
          >
            <span>Partner With Us</span>
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          style={{
            color: "var(--text-primary)",
            padding: "0.5rem",
            borderRadius: "8px",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            display: "none",
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: "rgba(8, 13, 25, 0.98)",
            borderBottom: "1px solid rgba(56, 189, 248, 0.2)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
            animation: "fadeIn 0.2s ease",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "1.05rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                padding: "0.4rem 0",
              }}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInquiry?.();
            }}
            className="btn btn-primary"
            style={{ width: "100%", marginTop: "0.5rem" }}
          >
            <span>Partner With Us</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      )}

      {/* Media Query Inject */}
      <style jsx>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 991px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
