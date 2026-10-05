"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, ArrowRight, Check, Phone, Mail } from "lucide-react";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <footer
      id="contact"
      style={{
        background: "#04070d",
        borderTop: "1px solid rgba(229, 194, 135, 0.2)",
        paddingTop: "clamp(3.5rem, 6vw, 5rem)",
        paddingBottom: "3rem",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Top Newsletter & Executive Bulletin Strip */}
        <div
          className="glass-card newsletter-grid"
          style={{
            padding: "clamp(1.5rem, 4vw, 2.5rem)",
            marginBottom: "4rem",
            background: "linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(8, 14, 28, 0.95) 100%)",
            borderColor: "rgba(229, 194, 135, 0.25)",
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "2.5rem",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#e5c287",
                fontWeight: 700,
                marginBottom: "0.4rem",
              }}
            >
              GLOBAL WORKFORCE INTELLIGENCE
            </div>
            <h3 style={{ fontSize: "clamp(1.25rem, 3vw, 1.5rem)", color: "#fff", marginBottom: "0.5rem" }}>
              Subscribe to the Our Wings Talent Briefing
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Receive verified international job openings, overseas labor market trends, visa policy updates,
              and executive manpower recruitment insights across the Middle East, Asia, and beyond.
            </p>
          </div>

          <div>
            {!subscribed ? (
              <form
                onSubmit={handleSubscribe}
                className="newsletter-form"
                style={{ display: "flex", gap: "0.6rem" }}
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  style={{
                    flex: 1,
                    minWidth: 0,
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-md)",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    color: "#fff",
                    outline: "none",
                    fontSize: "0.9rem",
                  }}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    padding: "0.75rem 1.4rem",
                    background: "linear-gradient(135deg, #e8cca4 0%, #dfc295 50%, #c99f5e 100%)",
                    color: "#070a1e",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    flexShrink: 0,
                  }}
                >
                  <span>Subscribe</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  color: "#10b981",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  background: "rgba(16, 185, 129, 0.1)",
                  padding: "0.75rem 1.2rem",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid rgba(16, 185, 129, 0.2)",
                }}
              >
                <Check size={18} />
                <span>Subscribed to Our Wings Talent Briefing. Welcome aboard.</span>
              </div>
            )}
          </div>
        </div>

        {/* Multi-Column Links */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "4rem",
          }}
          className="footer-links-grid"
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.2rem" }}>
              <div
                style={{
                  position: "relative",
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/images/logo.png"
                  alt="Our Wings Overseas Logo"
                  width={48}
                  height={48}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    filter: "drop-shadow(0 2px 10px rgba(229, 194, 135, 0.45))",
                  }}
                />
              </div>
              <span style={{ fontSize: "1.2rem", fontWeight: 800, letterSpacing: "0.02em" }}>
                OUR WINGS <span style={{ color: "#e5c287" }}>OVERSEAS</span>
              </span>
            </div>

            <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Connecting skilled professionals from India with verified international employers across Dubai,
              Qatar, Serbia, Greece, Macedonia and beyond.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
              <ShieldCheck size={16} color="#e5c287" />
              <span>International Recruitment & Global Mobility</span>
            </div>
          </div>

          {/* Column 1: Recruitment Sectors */}
          <div>
            <h5 className="section-header-glow">
              Recruitment Sectors
            </h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.88rem", padding: 0, margin: 0 }}>
              <li><span className="footer-glow-item">Construction & Infrastructure</span></li>
              <li><span className="footer-glow-item">Healthcare & Nursing</span></li>
              <li><span className="footer-glow-item">Oil & Gas / Industrial</span></li>
              <li><span className="footer-glow-item">Hospitality & Facilities</span></li>
              <li><span className="footer-glow-item">Skilled Trades & Aviation</span></li>
            </ul>
          </div>

          {/* Column 2: Overseas Mobility */}
          <div>
            <h5 className="section-header-glow">
              Global Mobility
            </h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.88rem", padding: 0, margin: 0 }}>
              <li><span className="footer-glow-item">Explore Overseas Jobs</span></li>
              <li><span className="footer-glow-item">Hire Indian Talent</span></li>
              <li><span className="footer-glow-item">Visa & Emigration Process</span></li>
              <li><span className="footer-glow-item">Global Placement Standards</span></li>
              <li><span className="footer-glow-item">Ethical Recruitment Standards</span></li>
            </ul>
          </div>

          {/* Column 3: Contact & Operations */}
          <div>
            <h5 style={{ fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.2rem", color: "#fff" }}>
              Operations & Office
            </h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
              <li style={{ color: "#fff", fontWeight: 700, fontSize: "0.92rem" }}>
                Our Wings Overseas
              </li>
              <li style={{ lineHeight: 1.55 }}>
                5th Floor, Chowallur Tower Building,
                <br />
                Westfort, Thrissur, Kerala
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.55rem", marginTop: "0.25rem" }}>
                <Phone size={15} color="#e5c287" style={{ flexShrink: 0 }} />
                <a
                  href="tel:+918848193496"
                  style={{ color: "#fff", fontWeight: 600, textDecoration: "none" }}
                >
                  +91 8848193496
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}>
                <svg
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                  fill="#25D366"
                  style={{ flexShrink: 0 }}
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <a
                  href="https://wa.me/918848193496"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#fff", fontWeight: 600, textDecoration: "none" }}
                >
                  +91 8848193496
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}>
                <Mail size={15} color="#e5c287" style={{ flexShrink: 0 }} />
                <a
                  href="mailto:vinithaavin18@gmail.com"
                  style={{ color: "var(--text-secondary)", textDecoration: "none" }}
                >
                  vinithaavin18@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.07)",
            paddingTop: "2rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.2rem",
            fontSize: "0.82rem",
            color: "var(--text-muted)",
          }}
        >
          <div>
            © {new Date().getFullYear()} Our Wings Overseas. International Recruitment Agency. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: "clamp(0.75rem, 3vw, 1.5rem)", flexWrap: "wrap" }}>
            <span className="legal-glow-item">Privacy Policy</span>
            <span className="legal-glow-item">Terms of Recruitment</span>
            <span className="legal-glow-item">Regulatory Compliance</span>
            <span className="legal-glow-item">Candidate Rights</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section-header-glow {
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 1.2rem;
          color: #ffffff;
          cursor: pointer;
          user-select: none;
          display: inline-block;
          transition: all 0.25s ease;
        }
        .section-header-glow:hover {
          color: #e5c287;
          text-shadow: 0 0 12px rgba(229, 194, 135, 0.6);
        }
        .footer-glow-item {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary, #94a3b8);
          font-size: 0.88rem;
          cursor: pointer;
          user-select: none;
          transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 0.15rem 0;
          position: relative;
        }
        .footer-glow-item::before {
          content: "";
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(229, 194, 135, 0.35);
          transition: all 0.28s ease;
          flex-shrink: 0;
        }
        .footer-glow-item:hover {
          color: #ffffff;
          text-shadow: 0 0 10px rgba(229, 194, 135, 0.65), 0 0 18px rgba(255, 255, 255, 0.4);
          transform: translateX(5px);
        }
        .footer-glow-item:hover::before {
          background: #e5c287;
          box-shadow: 0 0 8px #e5c287, 0 0 14px rgba(229, 194, 135, 0.8);
          transform: scale(1.35);
        }
        .legal-glow-item {
          color: var(--text-muted);
          cursor: default;
          user-select: none;
          transition: all 0.25s ease;
        }
        .legal-glow-item:hover {
          color: #e5c287;
          text-shadow: 0 0 10px rgba(229, 194, 135, 0.5);
        }
        @media (max-width: 991px) {
          .newsletter-grid {
            grid-template-columns: 1fr !important;
            gap: 1.75rem !important;
          }
          .footer-links-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2.2rem 1.5rem !important;
          }
        }
        @media (max-width: 600px) {
          .footer-links-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 480px) {
          .newsletter-form {
            flex-direction: column !important;
          }
          .newsletter-form button {
            width: 100% !important;
            justify-content: center !important;
            min-height: 48px;
          }
        }
      `}</style>
    </footer>
  );
}
