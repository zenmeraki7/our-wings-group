"use client";

import React, { useState } from "react";
import { Award, Zap, ShieldCheck, Leaf, Milestone, Users } from "lucide-react";

export default function About() {
  const [activeYear, setActiveYear] = useState<string>("2026");

  const pillars = [
    {
      icon: Zap,
      title: "Velocity & Agility",
      desc: "Instantaneous dispatch capabilities, adaptive routing AI, and zero-friction international customs clearing.",
    },
    {
      icon: ShieldCheck,
      title: "Absolute Safety Standard",
      desc: "Top-tier ARGUS Platinum, IS-BAO Stage 3, and Wyvern Wingman credentials across all aeronautical operations.",
    },
    {
      icon: Award,
      title: "Integrity & Discretion",
      desc: "Trusted by Fortune 100 executives, heads of state, and sovereign wealth entities for absolute confidentiality.",
    },
    {
      icon: Leaf,
      title: "Planetary Stewardship",
      desc: "Pioneering Sustainable Aviation Fuel (SAF), hydrogen propulsion testing, and zero-landfill smart hubs.",
    },
  ];

  const milestones = [
    {
      year: "1998",
      title: "Foundation & First Flight",
      desc: "Founded with two turboprop aircraft providing expedited regional transport and medical evacuation across coastal corridors.",
    },
    {
      year: "2008",
      title: "Global Logistics Expansion",
      desc: "Inaugurated international bonded air freight networks and acquired primary logistics nodes across London, New York, and Frankfurt.",
    },
    {
      year: "2017",
      title: "Ventures & Tech Inception",
      desc: "Established Wings Tech & Ventures to back frontier autonomous flight, route telemetry AI, and sustainable fuel synthesizers.",
    },
    {
      year: "2022",
      title: "Humanitarian Foundation Launch",
      desc: "Pledged permanent allocation of group flight hours and $40M endowment to emergency medical airlift missions.",
    },
    {
      year: "2026",
      title: "Unified Global Enterprise",
      desc: "Consolidated all divisions under Our Wings Group holding structure, commanding 85+ aircraft and 48 intercontinental freight nodes.",
    },
  ];

  const currentMilestone = milestones.find((m) => m.year === activeYear) || milestones[4];

  return (
    <section id="about" className="section" style={{ position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="glass-pill">
            <Users size={14} color="var(--accent-cyan)" />
            <span>LEGACY & VISION</span>
          </div>
          <h2 className="section-title">
            Built On Decades of <span className="gradient-text">Disciplined Elevation</span>
          </h2>
          <p className="section-desc">
            From our beginnings as an agile aviation operator to an international multi-sector powerhouse,
            we cultivate leadership that pushes the boundaries of human transit and logistical speed.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid-4" style={{ marginBottom: "5rem" }}>
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="glass-card glass-card-hover"
                style={{
                  padding: "2rem 1.6rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.85rem",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(56, 189, 248, 0.12)",
                    border: "1px solid rgba(56, 189, 248, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={22} color="var(--accent-cyan)" />
                </div>
                <h4 style={{ fontSize: "1.15rem", color: "#fff" }}>{pillar.title}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Milestones Timeline */}
        <div
          className="glass-card"
          style={{
            padding: "3rem",
            background: "linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(8, 13, 25, 0.95) 100%)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "2rem",
            }}
          >
            <Milestone size={20} color="var(--accent-cyan)" />
            <h3 style={{ fontSize: "1.4rem" }}>Milestones in Our Journey</h3>
          </div>

          {/* Year selector buttons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              overflowX: "auto",
              paddingBottom: "1rem",
              marginBottom: "2rem",
            }}
          >
            {milestones.map((m) => (
              <button
                key={m.year}
                onClick={() => setActiveYear(m.year)}
                style={{
                  padding: "0.5rem 1.4rem",
                  borderRadius: "var(--radius-full)",
                  background:
                    activeYear === m.year
                      ? "var(--gradient-primary)"
                      : "rgba(255, 255, 255, 0.05)",
                  color: activeYear === m.year ? "#fff" : "var(--text-secondary)",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  border:
                    activeYear === m.year
                      ? "1px solid rgba(255, 255, 255, 0.3)"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                  transition: "all 0.2s ease",
                  flexShrink: 0,
                }}
              >
                {m.year}
              </button>
            ))}
          </div>

          {/* Active Milestone Card */}
          <div
            style={{
              background: "rgba(56, 189, 248, 0.05)",
              border: "1px solid rgba(56, 189, 248, 0.2)",
              borderRadius: "var(--radius-md)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
              animation: "fadeIn 0.3s ease",
            }}
          >
            <div
              style={{
                fontSize: "1.8rem",
                fontWeight: 800,
                color: "var(--accent-cyan)",
              }}
            >
              {currentMilestone.year} • {currentMilestone.title}
            </div>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                maxWidth: "800px",
              }}
            >
              {currentMilestone.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
