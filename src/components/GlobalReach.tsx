"use client";

import React, { useState } from "react";
import { Globe, MapPin, Radio, Compass, PlaneTakeoff, Navigation } from "lucide-react";

export default function GlobalReach() {
  const [selectedRegion, setSelectedRegion] = useState<string>("all");

  const regions = [
    { id: "all", label: "Global Network" },
    { id: "americas", label: "Americas Hub" },
    { id: "emea", label: "EMEA & UK" },
    { id: "apac", label: "Asia-Pacific" },
    { id: "mena", label: "Middle East" },
  ];

  const hubs = [
    {
      city: "London & Farnborough",
      region: "emea",
      type: "FBO & European Cargo Gateway",
      fleet: "28 Heavy Aircraft",
      warehouse: "850,000 sq ft Bonded Storage",
      status: "Active 24/7",
    },
    {
      city: "New York & Teterboro",
      region: "americas",
      type: "Executive Aviation & Transatlantic Node",
      fleet: "34 Long-Range Aircraft",
      warehouse: "1,200,000 sq ft Logistics Campus",
      status: "Active 24/7",
    },
    {
      city: "Dubai & Al Maktoum (DWC)",
      region: "mena",
      type: "Intercontinental Freight & Maintenance",
      fleet: "22 Global Aircraft",
      warehouse: "950,000 sq ft Climate Controlled",
      status: "Active 24/7",
    },
    {
      city: "Singapore (Changi & Seletar)",
      region: "apac",
      type: "Asia-Pacific Regional Headquarters",
      fleet: "18 Executive Jets",
      warehouse: "700,000 sq ft Autonomous Logistics",
      status: "Active 24/7",
    },
    {
      city: "Zurich & Geneva",
      region: "emea",
      type: "Private Wealth & Diplomatic Charter",
      fleet: "12 Ultra Long Range Jets",
      warehouse: "Specialized Valuables Vaults",
      status: "Active 24/7",
    },
    {
      city: "Tokyo (Haneda)",
      region: "apac",
      type: "Robotics & Cold-Chain Technology Hub",
      fleet: "10 Charter Jets",
      warehouse: "Automated Robotic Distribution",
      status: "Active 24/7",
    },
  ];

  const filteredHubs =
    selectedRegion === "all"
      ? hubs
      : hubs.filter((hub) => hub.region === selectedRegion);

  return (
    <section id="reach" className="section" style={{ background: "rgba(10, 15, 29, 0.4)" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="glass-pill">
            <Radio size={14} color="var(--accent-cyan)" />
            <span>GLOBAL FOOTPRINT</span>
          </div>
          <h2 className="section-title">
            Strategic Nodes Across <span className="gradient-text">Key Continents</span>
          </h2>
          <p className="section-desc">
            Operating from world-class private aviation terminals, deep-water ports, and bonded air-cargo gateways
            with seamless customs sovereignty.
          </p>
        </div>

        {/* Region Filter Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.65rem",
            marginBottom: "3rem",
          }}
        >
          {regions.map((reg) => (
            <button
              key={reg.id}
              onClick={() => setSelectedRegion(reg.id)}
              style={{
                padding: "0.6rem 1.3rem",
                borderRadius: "var(--radius-full)",
                fontSize: "0.85rem",
                fontWeight: 600,
                border: "1px solid",
                borderColor:
                  selectedRegion === reg.id
                    ? "var(--accent-cyan)"
                    : "rgba(255, 255, 255, 0.1)",
                background:
                  selectedRegion === reg.id
                    ? "rgba(56, 189, 248, 0.15)"
                    : "rgba(255, 255, 255, 0.03)",
                color: selectedRegion === reg.id ? "#fff" : "var(--text-secondary)",
                transition: "all 0.2s ease",
              }}
            >
              {reg.label}
            </button>
          ))}
        </div>

        {/* Hubs Grid */}
        <div className="grid-3">
          {filteredHubs.map((hub, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover"
              style={{
                padding: "1.8rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      color: "var(--accent-cyan)",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    <MapPin size={15} />
                    <span>{hub.city}</span>
                  </div>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "var(--radius-full)",
                      background: "rgba(16, 185, 129, 0.12)",
                      border: "1px solid rgba(16, 185, 129, 0.3)",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      color: "#34d399",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#10b981",
                      }}
                    />
                    {hub.status}
                  </span>
                </div>

                <h4 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                  {hub.type}
                </h4>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    margin: "1.2rem 0",
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <PlaneTakeoff size={15} color="var(--accent-cyan)" />
                    <span>{hub.fleet}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Navigation size={15} color="var(--accent-cyan)" />
                    <span>{hub.warehouse}</span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  paddingTop: "0.85rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "0.78rem",
                  color: "var(--text-muted)",
                }}
              >
                <span>Dispatch Status: Green</span>
                <Compass size={14} color="var(--accent-cyan)" />
              </div>
            </div>
          ))}
        </div>

        {/* Global Dispatch Strip */}
        <div
          className="glass-card"
          style={{
            marginTop: "3rem",
            padding: "1.75rem 2rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
            background: "linear-gradient(90deg, rgba(2, 132, 199, 0.12), rgba(99, 102, 241, 0.12))",
            borderColor: "rgba(56, 189, 248, 0.3)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "rgba(56, 189, 248, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Globe size={22} color="var(--accent-cyan)" />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>
                24/7 Global Flight & Cargo Operations Control Center
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                Direct hotlines active for diplomatic flight permits, charter dispatch, and urgent cargo manifests.
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <a
              href="tel:+18005559464"
              className="btn btn-outline-cyan"
              style={{ padding: "0.6rem 1.25rem", fontSize: "0.85rem" }}
            >
              Hotline: +1 (800) 555-WINGS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
