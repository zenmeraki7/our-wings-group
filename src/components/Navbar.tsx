"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

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
    { name: "About Us", href: "#about" },
    { name: "Destinations", href: "#destinations" },
    { name: "Why Us", href: "#trust" },
    { name: "Contact & Offices", href: "#contact" },
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
        background: scrolled ? "rgba(7, 10, 30, 0.96)" : "rgba(7, 10, 30, 0.65)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(229, 194, 135, 0.25)" : "1px solid rgba(229, 194, 135, 0.1)",
        padding: scrolled ? "0.75rem 0" : "1.1rem 0",
      }}
    >
      <div
        style={{
          width: "min(1500px, calc(100% - clamp(24px, 4vw, 48px)))",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* Brand Identity */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(0.5rem, 2vw, 0.85rem)",
            flexShrink: 1,
            minWidth: 0,
            whiteSpace: "nowrap",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "clamp(42px, 5.2vw, 52px)",
              height: "clamp(42px, 5.2vw, 52px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Image
              src="/images/logo.png"
              alt="Our Wings Overseas Logo"
              width={52}
              height={52}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                filter: "drop-shadow(0 2px 12px rgba(229, 194, 135, 0.45))",
              }}
              priority
            />
          </div>
          <div style={{ whiteSpace: "nowrap", flexShrink: 1, minWidth: 0 }}>
            <div
              className="navbar-brand-name"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1rem, 3.8vw, 1.25rem)",
                fontWeight: 800,
                letterSpacing: "0.02em",
                lineHeight: 1.1,
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
                whiteSpace: "nowrap",
              }}
            >
              <span>OUR WINGS</span>
              <span style={{ color: "#e5c287" }}>OVERSEAS</span>
            </div>
            <div
              className="navbar-tagline"
              style={{
                fontSize: "clamp(0.6rem, 2.3vw, 0.68rem)",
                letterSpacing: "0.12em",
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
            gap: "clamp(0.9rem, 1.8vw, 2rem)",
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
            padding: "0.55rem",
            borderRadius: "8px",
            background: "rgba(255, 255, 255, 0.07)",
            border: "1px solid rgba(229, 194, 135, 0.2)",
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "44px",
            minHeight: "44px",
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={22} color="#e5c287" /> : <Menu size={22} color="#e5c287" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: "rgba(7, 10, 30, 0.98)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(229, 194, 135, 0.25)",
            padding: "1.25rem clamp(1rem, 4vw, 1.75rem) 1.75rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.85rem",
            maxHeight: "calc(100vh - 75px)",
            overflowY: "auto",
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
                padding: "0.6rem 0",
                borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                minHeight: "44px",
              }}
            >
              <span>{link.name}</span>
              <ArrowUpRight size={16} color="#e5c287" opacity={0.7} />
            </a>
          ))}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInquiry?.();
            }}
            className="btn btn-primary"
            style={{ 
              width: "100%", 
              marginTop: "0.75rem",
              minHeight: "48px",
              background: "linear-gradient(135deg, #e8cca4 0%, #dfc295 50%, #c99f5e 100%)",
              color: "#070a1e",
              fontWeight: 700,
              fontSize: "0.95rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <span>Partner With Us</span>
            <ArrowUpRight size={18} />
          </button>
        </div>
      )}

      {/* Media Query Inject */}
      <style jsx>{`
        @media (min-width: 1081px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 1080px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
        @media (max-width: 420px) {
          .navbar-tagline {
            display: none !important;
          }
        }
        @media (max-width: 360px) {
          .navbar-brand-name {
            font-size: 0.88rem !important;
          }
        }
      `}</style>
    </header>
  );
}
