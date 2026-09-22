"use client";

import React from "react";
import { ArrowRight, Globe, Shield, Sparkles, Building2, ChevronDown } from "lucide-react";

interface HeroProps {
  onOpenInquiry: () => void;
}

export default function Hero({ onOpenInquiry }: HeroProps) {
  return (
    <section
      style={{
        position: "relative",
        paddingTop: "9.5rem",
        paddingBottom: "6rem",
        overflow: "hidden",
      }}
    >
      {/* Background Ambience Glows */}
      <div
        className="ambient-glow"
        style={{
          width: "550px",
          height: "550px",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.16) 0%, rgba(37, 99, 235, 0.08) 50%, transparent 70%)",
          top: "-50px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      <div
        className="ambient-glow"
        style={{
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.14) 0%, transparent 70%)",
          top: "30%",
          right: "5%",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Top Tag */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.75rem" }}>
          <div className="glass-pill">
            <span className="pulse-dot" />
            <span>GLOBAL EXCELLENCE • AVIATION & LOGISTICS • VENTURES</span>
          </div>
        </div>

        {/* Main Headline */}
        <div style={{ textAlign: "center", maxWidth: "920px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5.2vw, 4.4rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
              marginBottom: "1.6rem",
            }}
          >
            Empowering Horizons. <br />
            <span className="gradient-text">Elevating Tomorrow.</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
              color: "var(--text-secondary)",
              maxWidth: "760px",
              margin: "0 auto 2.5rem auto",
              lineHeight: 1.7,
            }}
          >
            <strong>Our Wings Group</strong> is a premier international conglomerate orchestrating world-class
            private aviation, automated supply chain logistics, frontier engineering ventures, and philanthropic foundations
            across 4 continents.
          </p>

          {/* Action CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.1rem",
              marginBottom: "4.5rem",
            }}
          >
            <a href="#divisions" className="btn btn-primary" id="hero-explore-btn">
              <span>Explore Group Divisions</span>
              <ArrowRight size={18} />
            </a>
            <button
              onClick={onOpenInquiry}
              className="btn btn-secondary"
              id="hero-inquiry-btn"
            >
              <Sparkles size={16} color="var(--accent-cyan)" />
              <span>Partner & Inquire</span>
            </button>
          </div>
        </div>

        {/* Key Operational Highlights Grid */}
        <div
          className="grid-4"
          style={{
            marginTop: "1.5rem",
          }}
        >
          {/* Tile 1 */}
          <div className="glass-card glass-card-hover" style={{ padding: "1.75rem 1.5rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1rem",
              }}
            >
              <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>
                Group Valuation
              </span>
              <Building2 size={20} color="var(--accent-cyan)" />
            </div>
            <div style={{ fontSize: "2.1rem", fontWeight: 800, color: "#fff", marginBottom: "0.3rem" }}>
              $3.8B+
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              Combined Enterprise Assets & Portfolios Under Management
            </div>
          </div>

          {/* Tile 2 */}
          <div className="glass-card glass-card-hover" style={{ padding: "1.75rem 1.5rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1rem",
              }}
            >
              <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>
                Global Terminals
              </span>
              <Globe size={20} color="var(--accent-cyan)" />
            </div>
            <div style={{ fontSize: "2.1rem", fontWeight: 800, color: "#fff", marginBottom: "0.3rem" }}>
              48 Hubs
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              Strategic air freight, FBO, and fulfillment nodes worldwide
            </div>
          </div>

          {/* Tile 3 */}
          <div className="glass-card glass-card-hover" style={{ padding: "1.75rem 1.5rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1rem",
              }}
            >
              <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>
                Operational Precision
              </span>
              <Shield size={20} color="var(--accent-cyan)" />
            </div>
            <div style={{ fontSize: "2.1rem", fontWeight: 800, color: "#fff", marginBottom: "0.3rem" }}>
              99.94%
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              On-time performance & industry-leading safety record
            </div>
          </div>

          {/* Tile 4 */}
          <div className="glass-card glass-card-hover" style={{ padding: "1.75rem 1.5rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1rem",
              }}
            >
              <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>
                Sustainability
              </span>
              <Sparkles size={20} color="var(--accent-gold)" />
            </div>
            <div style={{ fontSize: "2.1rem", fontWeight: 800, color: "var(--accent-gold)", marginBottom: "0.3rem" }}>
              Net Zero
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              2035 commitment to SAF biofuel and zero-emission freight
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
          <a
            href="#divisions"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.4rem",
              color: "var(--text-muted)",
              fontSize: "0.8rem",
              fontWeight: 500,
            }}
          >
            <span>Scroll to explore</span>
            <ChevronDown size={18} style={{ animation: "bounce 2s infinite" }} />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(6px);
          }
          60% {
            transform: translateY(3px);
          }
        }
      `}</style>
    </section>
  );
}
