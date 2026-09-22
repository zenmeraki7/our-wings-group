"use client";

import React, { useState } from "react";
import { Plane, ShieldCheck, ArrowRight, Check } from "lucide-react";

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
      style={{
        background: "#04070d",
        borderTop: "1px solid rgba(56, 189, 248, 0.15)",
        paddingTop: "5rem",
        paddingBottom: "3rem",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Top Newsletter & Executive Bulletin Strip */}
        <div
          className="glass-card newsletter-grid"
          style={{
            padding: "2.5rem",
            marginBottom: "4.5rem",
            background: "linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(8, 14, 28, 0.95) 100%)",
            borderColor: "rgba(56, 189, 248, 0.25)",
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
            <h3 style={{ fontSize: "1.5rem", color: "#fff", marginBottom: "0.5rem" }}>
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
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #e8cca4 0%, #dfc295 50%, #c99f5e 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Plane size={18} color="#070a1e" style={{ transform: "rotate(-45deg)" }} />
              </div>
              <span style={{ fontSize: "1.2rem", fontWeight: 800, letterSpacing: "0.02em" }}>
                OUR WINGS <span style={{ color: "#e5c287" }}>GROUP</span>
              </span>
            </div>

            <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Connecting skilled professionals from India with verified international employers across Saudi Arabia,
              UAE, Qatar, Oman, Kuwait, Bahrain and beyond.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
              <ShieldCheck size={16} color="#e5c287" />
              <span>Government Authorized • MEA Approved Agency</span>
            </div>
          </div>

          {/* Column 1: Recruitment Sectors */}
          <div>
            <h5 style={{ fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.2rem", color: "#fff" }}>
              Recruitment Sectors
            </h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
              <li><a href="/jobs/construction">Construction & Infrastructure</a></li>
              <li><a href="/jobs/healthcare">Healthcare & Nursing</a></li>
              <li><a href="/jobs/industrial">Oil & Gas / Industrial</a></li>
              <li><a href="/jobs/hospitality">Hospitality & Facilities</a></li>
              <li><a href="/jobs/technical">Skilled Trades & Aviation</a></li>
            </ul>
          </div>

          {/* Column 2: Overseas Mobility */}
          <div>
            <h5 style={{ fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.2rem", color: "#fff" }}>
              Global Mobility
            </h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
              <li><a href="/jobs">Explore Overseas Jobs</a></li>
              <li><a href="/hire-global-talent">Hire Indian Talent</a></li>
              <li><a href="/about-us">Visa & Emigration Process</a></li>
              <li><a href="/about-us">MEA Approved Licensing</a></li>
              <li><a href="/about-us">Ethical Recruitment Standards</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Operations */}
          <div>
            <h5 style={{ fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.2rem", color: "#fff" }}>
              Operations & Office
            </h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
              <li style={{ color: "#fff", fontWeight: 700, fontSize: "0.92rem" }}>
                Our Wings Group
              </li>
              <li style={{ lineHeight: 1.55 }}>
                5th Floor, Chowallur Tower Building,
                <br />
                Westfort, Thrissur, Kerala
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.45rem", marginTop: "0.2rem" }}>
                <span style={{ color: "#e5c287", fontWeight: 600 }}>Ph:</span>
                <a
                  href="tel:8848193496"
                  style={{ color: "#fff", fontWeight: 600, textDecoration: "none" }}
                >
                  8848193496
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <span style={{ color: "#e5c287", fontWeight: 600 }}>Email:</span>
                <a
                  href="mailto:contact@ourwingsgroup.com"
                  style={{ color: "var(--text-secondary)", textDecoration: "none" }}
                >
                  contact@ourwingsgroup.com
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
            gap: "1rem",
            fontSize: "0.82rem",
            color: "var(--text-muted)",
          }}
        >
          <div>
            © {new Date().getFullYear()} Our Wings Group. Government Authorized Recruitment Agency (MEA Approved). All rights reserved.
          </div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a href="#" style={{ color: "var(--text-muted)" }}>Privacy Policy</a>
            <a href="#" style={{ color: "var(--text-muted)" }}>Terms of Recruitment</a>
            <a href="#" style={{ color: "var(--text-muted)" }}>MEA Compliance</a>
            <a href="#" style={{ color: "var(--text-muted)" }}>Candidate Rights</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 991px) {
          .newsletter-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-links-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-links-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
