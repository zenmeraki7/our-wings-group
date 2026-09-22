"use client";

import React from "react";
import { UserCheck, ExternalLink } from "lucide-react";

export default function Leadership() {
  const leaders = [
    {
      name: "Sir Alistair Vance",
      title: "Group Chairman & Co-Founder",
      credentials: "FRAeS • Ex-RAF Wing Commander",
      bio: "Visionary aviation pioneer with 34 years steering international aeronautical operations, fleet expansion, and sovereign transport treaties.",
      initials: "AV",
      gradient: "linear-gradient(135deg, #0284c7 0%, #1e40af 100%)",
    },
    {
      name: "Elena Rostova",
      title: "Group Chief Executive Officer",
      credentials: "MBA (INSEAD) • M.S. Aero Engineering",
      bio: "Former Global Aerospace Partner at top-tier consultancy, architecting high-efficiency intercontinental logistics and corporate restructuring.",
      initials: "ER",
      gradient: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)",
    },
    {
      name: "Tariq Al-Mansoor",
      title: "President, Wings Global Logistics",
      credentials: "FICS • Supply Chain Fellow",
      bio: "22 years presiding over Gulf and European cargo gateways, revolutionizing cold-chain pharma transit and automated bonded port hubs.",
      initials: "TM",
      gradient: "linear-gradient(135deg, #38bdf8 0%, #0369a1 100%)",
    },
    {
      name: "Dr. Aris Thorne",
      title: "Managing Partner, Wings Tech & Ventures",
      credentials: "Ph.D. Aerospace Propulsion (MIT)",
      bio: "Pioneer in electric vertical takeoff aircraft (eVTOL) and carbon-neutral bio-kerosene synthesizers, holding 14 aeronautical patents.",
      initials: "AT",
      gradient: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",
    },
  ];

  return (
    <section id="leadership" className="section" style={{ background: "rgba(7, 11, 22, 0.6)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="glass-pill">
            <UserCheck size={14} color="var(--accent-cyan)" />
            <span>EXECUTIVE GOVERNANCE</span>
          </div>
          <h2 className="section-title">
            Steered by World-Class <span className="gradient-text">Industry Titans</span>
          </h2>
          <p className="section-desc">
            Bringing together distinguished commanders of aerospace, supply chain logistics, high finance,
            and technological innovation.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid-4">
          {leaders.map((leader, i) => (
            <div
              key={i}
              className="glass-card glass-card-hover"
              style={{
                padding: "2rem 1.6rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {/* Avatar Monogram */}
              <div
                style={{
                  width: "82px",
                  height: "82px",
                  borderRadius: "50%",
                  background: leader.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.6rem",
                  fontWeight: 800,
                  color: "#fff",
                  boxShadow: "0 8px 24px rgba(37, 99, 235, 0.3)",
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  marginBottom: "1.4rem",
                }}
              >
                {leader.initials}
              </div>

              <h4 style={{ fontSize: "1.25rem", marginBottom: "0.25rem", color: "#fff" }}>
                {leader.name}
              </h4>

              <div
                style={{
                  fontSize: "0.85rem",
                  color: "var(--accent-cyan)",
                  fontWeight: 600,
                  marginBottom: "0.4rem",
                }}
              >
                {leader.title}
              </div>

              <div
                style={{
                  fontSize: "0.74rem",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "1rem",
                }}
              >
                {leader.credentials}
              </div>

              <p
                style={{
                  fontSize: "0.86rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  marginBottom: "1.5rem",
                  flexGrow: 1,
                }}
              >
                {leader.bio}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "0.8rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  paddingTop: "1rem",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.8rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.35rem",
                  }}
                >
                  <ExternalLink size={14} color="var(--accent-cyan)" /> Executive Dossier
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
