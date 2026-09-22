"use client";

import React from "react";
import { Newspaper, ArrowUpRight, Calendar } from "lucide-react";

export default function Insights() {
  const articles = [
    {
      title: "Our Wings Group Announces Acquisition of 14 Long-Range Bombardier Global 7500s",
      category: "Aviation Expansion",
      date: "September 15, 2026",
      summary: "Expanding our ultra-long-range non-stop charter capability connecting London, Singapore, and New York with next-generation avionics.",
      readTime: "4 min read",
    },
    {
      title: "Wings Global Logistics Inaugurates Fully Automated Cargo Hub in Dubai South",
      category: "Infrastructure",
      date: "August 28, 2026",
      summary: "Equipped with robotics, temperature-zoned automated storage, and AI-enabled customs integration handling 60,000 pallets monthly.",
      readTime: "5 min read",
    },
    {
      title: "Wings Tech Ventures Leads $65M Series B in Hydrogen-Electric Aircraft Propulsion",
      category: "Ventures & ESG",
      date: "July 12, 2026",
      summary: "Accelerating regional zero-emission aerial transport with real-world flight trials scheduled for early 2027.",
      readTime: "6 min read",
    },
  ];

  return (
    <section id="insights" className="section" style={{ position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="glass-pill">
            <Newspaper size={14} color="var(--accent-cyan)" />
            <span>NEWS & INSIGHTS</span>
          </div>
          <h2 className="section-title">
            Latest From Our <span className="gradient-text">Global Network</span>
          </h2>
          <p className="section-desc">
            Stay updated with strategic acquisitions, supply chain breakthroughs, sustainability updates,
            and executive perspectives.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid-3">
          {articles.map((art, i) => (
            <div
              key={i}
              className="glass-card glass-card-hover"
              style={{
                padding: "2rem",
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
                    marginBottom: "1.2rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.76rem",
                      fontWeight: 700,
                      color: "var(--accent-cyan)",
                      background: "rgba(56, 189, 248, 0.1)",
                      border: "1px solid rgba(56, 189, 248, 0.25)",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "var(--radius-full)",
                      textTransform: "uppercase",
                    }}
                  >
                    {art.category}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                    {art.readTime}
                  </span>
                </div>

                <h4
                  style={{
                    fontSize: "1.2rem",
                    lineHeight: 1.4,
                    marginBottom: "0.85rem",
                    color: "#ffffff",
                  }}
                >
                  {art.title}
                </h4>

                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    marginBottom: "1.5rem",
                  }}
                >
                  {art.summary}
                </p>
              </div>

              <div
                style={{
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  paddingTop: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.78rem",
                    color: "var(--text-muted)",
                  }}
                >
                  <Calendar size={13} />
                  <span>{art.date}</span>
                </div>

                <a
                  href="#insights"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "var(--accent-cyan)",
                  }}
                >
                  <span>Read Story</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
