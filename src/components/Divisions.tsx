"use client";

import React, { useState } from "react";
import { Plane, Truck, Cpu, Heart, CheckCircle2, ArrowRight } from "lucide-react";

interface DivisionsProps {
  onSelectDivision: (divisionName: string) => void;
}

export default function Divisions({ onSelectDivision }: DivisionsProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const divisions = [
    {
      id: "aviation",
      name: "Wings Aviation & Aerospace",
      badge: "Flagship Division",
      tagline: "Ultra-long-range executive charter, aircraft management, and next-generation eVTOL aerial mobility.",
      icon: Plane,
      color: "var(--accent-cyan)",
      stats: [
        { label: "Fleet Capacity", value: "85+ Heavy & Super-Mid Jets" },
        { label: "Safety Rating", value: "ARGUS Platinum & Wyvern Wingman" },
        { label: "Airports Served", value: "1,200+ Worldwide" },
      ],
      capabilities: [
        "Executive & Diplomatic Private Jet Charters",
        "Aircraft Acquisition, Management & Maintenance (MRO)",
        "Fixed-Base Operator (FBO) VIP Lounges & Terminals",
        "Urban Air Mobility (eVTOL) Route Integration",
      ],
      description:
        "Providing high-net-worth individuals, heads of state, and multinational corporations with uncompromising safety, privacy, and aerodynamic efficiency.",
    },
    {
      id: "logistics",
      name: "Wings Global Logistics",
      badge: "Supply Chain & Cargo",
      tagline: "End-to-end multimodal logistics, temperature-controlled air cargo, and intelligent bonded freight hubs.",
      icon: Truck,
      color: "#60a5fa",
      stats: [
        { label: "Annual Volume", value: "420,000+ Metric Tons" },
        { label: "Bonded Facilities", value: "3.2M sq. ft. Warehousing" },
        { label: "Customs Clearance", value: "< 2 Hours Express SLA" },
      ],
      capabilities: [
        "Specialized Pharma & Healthcare Cold-Chain Transport",
        "Aerospace & High-Tech Critical Component Expediting",
        "AI-Driven Supply Chain Routing & Real-time IoT Telemetry",
        "Cross-Border Intermodal Maritime & Air Hubs",
      ],
      description:
        "Connecting global commerce with unmatched precision. From critical aerospace replacement parts to life-saving medical supplies, our global network moves with zero tolerance for delays.",
    },
    {
      id: "ventures",
      name: "Wings Tech & Ventures",
      badge: "Frontier Innovation",
      tagline: "Incubating and scaling deep-tech, autonomous transport systems, and sustainable aviation fuel (SAF).",
      icon: Cpu,
      color: "#818cf8",
      stats: [
        { label: "Capital Deployed", value: "$450M+ Growth Stage" },
        { label: "Patents Held", value: "64 Proprietary Technologies" },
        { label: "Portfolio Companies", value: "18 Active Scale-ups" },
      ],
      capabilities: [
        "Sustainable Aviation Fuel (SAF) Synthesis & Distribution",
        "Autonomous Airport Ramp Equipment & Drone Fleet Systems",
        "Next-Gen Flight Route AI Optimization Software",
        "Clean Hydrogen & Hybrid-Electric Propulsion R&D",
      ],
      description:
        "Investing in technologies that make flight and logistics faster, smarter, and carbon-neutral. Our venture arm partners with world-class engineers to invent the infrastructure of tomorrow.",
    },
    {
      id: "foundation",
      name: "Wings Humanitarian Foundation",
      badge: "ESG & Global Impact",
      tagline: "Mobilizing aviation assets for crisis relief, youth aerospace education, and global reforestation.",
      icon: Heart,
      color: "var(--accent-gold)",
      stats: [
        { label: "Relief Airlifts", value: "320+ Rapid Missions" },
        { label: "Scholarships", value: "1,500+ STEM & Pilot Grants" },
        { label: "Trees Planted", value: "4.2M Towards 10M Target" },
      ],
      capabilities: [
        "Rapid-Response Disaster Relief Air Transport",
        "Wings Aviation Academy for Underrepresented Youth",
        "Global Clean Water & Solar Infrastructure Deployments",
        "Wildlife Protection & Anti-Poaching Aerial Patrol Grants",
      ],
      description:
        "Our Wings Group believes elevated capability demands elevated responsibility. Our philanthropic wing provides rapid emergency airlift wherever natural disasters strike, while training the next generation of aviators.",
    },
  ];

  const current = divisions[activeTab];
  const IconComponent = current.icon;

  return (
    <section id="divisions" className="section" style={{ position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="glass-pill">
            <span className="pulse-dot" />
            <span>ENTERPRISE DIVISIONS</span>
          </div>
          <h2 className="section-title">
            Architected for <span className="gradient-text">Unrivaled Excellence</span>
          </h2>
          <p className="section-desc">
            Four specialized yet synergistic pillars driving commercial supremacy, precision operations, and positive
            planetary transformation.
          </p>
        </div>

        {/* Tab Buttons */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0.85rem",
            marginBottom: "2.5rem",
          }}
          className="division-tabs"
        >
          {divisions.map((div, index) => {
            const TabIcon = div.icon;
            const isSelected = activeTab === index;
            return (
              <button
                key={div.id}
                onClick={() => setActiveTab(index)}
                className="glass-card"
                style={{
                  padding: "1.2rem 1rem",
                  textAlign: "left",
                  borderColor: isSelected ? div.color : "var(--border-subtle)",
                  background: isSelected ? "rgba(30, 48, 86, 0.65)" : "var(--bg-card)",
                  boxShadow: isSelected ? `0 0 25px rgba(56, 189, 248, 0.2)` : "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  transition: "all 0.25s ease",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "10px",
                    background: isSelected ? div.color : "rgba(255, 255, 255, 0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.2s ease",
                  }}
                >
                  <TabIcon size={20} color={isSelected ? "#000" : div.color} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: isSelected ? div.color : "var(--text-muted)",
                      fontWeight: 600,
                    }}
                  >
                    {div.badge}
                  </div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: isSelected ? "#fff" : "var(--text-secondary)",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {div.name.split(" ")[1] || div.name}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Featured Division Showcase Card */}
        <div
          className="glass-card"
          style={{
            padding: "3rem",
            border: `1px solid ${current.color}33`,
            background: "linear-gradient(145deg, rgba(17, 26, 46, 0.9) 0%, rgba(10, 16, 30, 0.95) 100%)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: "3rem",
              alignItems: "center",
            }}
            className="division-details-grid"
          >
            {/* Left Content */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.3rem 0.85rem",
                  borderRadius: "var(--radius-full)",
                  background: `${current.color}15`,
                  border: `1px solid ${current.color}40`,
                  color: current.color,
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "1rem",
                }}
              >
                <IconComponent size={14} />
                <span>{current.badge}</span>
              </div>

              <h3 style={{ fontSize: "clamp(1.8rem, 2.5vw, 2.4rem)", marginBottom: "0.85rem" }}>
                {current.name}
              </h3>

              <p
                style={{
                  fontSize: "1.1rem",
                  color: "var(--text-primary)",
                  fontWeight: 500,
                  marginBottom: "1.2rem",
                  lineHeight: 1.5,
                }}
              >
                {current.tagline}
              </p>

              <p
                style={{
                  fontSize: "0.98rem",
                  color: "var(--text-secondary)",
                  marginBottom: "2rem",
                  lineHeight: 1.7,
                }}
              >
                {current.description}
              </p>

              {/* Capabilities checklist */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "0.85rem",
                  marginBottom: "2.5rem",
                }}
                className="caps-grid"
              >
                {current.capabilities.map((cap, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.6rem",
                      fontSize: "0.9rem",
                      color: "var(--text-primary)",
                    }}
                  >
                    <CheckCircle2 size={18} color={current.color} style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onSelectDivision(current.name)}
                className="btn btn-primary"
                style={{ background: current.color, color: "#000", fontWeight: 700 }}
              >
                <span>Consult with {current.name.split(" ")[1]} Team</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Right Metric Cards */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {current.stats.map((st, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.07)",
                    borderRadius: "var(--radius-md)",
                    padding: "1.5rem",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = current.color;
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.07)";
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.8rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "var(--text-muted)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {st.label}
                  </div>
                  <div
                    style={{
                      fontSize: "1.45rem",
                      fontWeight: 700,
                      color: "#ffffff",
                    }}
                  >
                    {st.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 991px) {
          .division-tabs {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .division-details-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 600px) {
          .division-tabs {
            grid-template-columns: 1fr !important;
          }
          .caps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
