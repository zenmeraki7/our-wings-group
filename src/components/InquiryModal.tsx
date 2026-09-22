"use client";

import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle, Sparkles } from "lucide-react";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDivision?: string;
}

export default function InquiryModal({ isOpen, onClose, defaultDivision }: InquiryModalProps) {
  const [formData, setFormData] = useState(() => ({
    name: "",
    email: "",
    phone: "",
    company: "",
    division: defaultDivision || "Global Talent & Overseas Placement",
    scope: "",
  }));
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [referenceId, setReferenceId] = useState("WG-829104");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setReferenceId(`WG-${Math.floor(100000 + Math.random() * 900000)}`);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
        style={{ padding: "2.5rem" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: "absolute",
            top: "1.25rem",
            right: "1.25rem",
            color: "var(--text-muted)",
            padding: "0.5rem",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.05)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--accent-cyan)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "0.4rem",
                }}
              >
                <Sparkles size={14} />
                <span>CONFIDENTIAL INQUIRY</span>
              </div>
              <h3 style={{ fontSize: "1.6rem", color: "#fff" }}>
                Partner With Our Wings Group
              </h3>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginTop: "0.25rem" }}>
                Connect directly with our corporate dispatch, aviation charter desk, or venture partners.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "0.3rem",
                    }}
                  >
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lord Alexander Wright"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "0.3rem",
                    }}
                  >
                    ORGANIZATION / FIRM *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Holdings LLC"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "0.3rem",
                    }}
                  >
                    OFFICIAL EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alexander@apex.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "0.3rem",
                    }}
                  >
                    DIRECT CONTACT NUMBER
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 019-2831"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    marginBottom: "0.3rem",
                  }}
                >
                  DIVISION OF INTEREST
                </label>
                <select
                  value={formData.division}
                  onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                  style={{
                    ...inputStyle,
                    background: "#0d1527",
                    color: "#fff",
                  }}
                >
                  <option value="Wings Aviation & Aerospace">Wings Aviation & Aerospace (Charter, Fleet & MRO)</option>
                  <option value="Wings Global Logistics">Wings Global Logistics (Air Cargo & Intermodal)</option>
                  <option value="Wings Tech & Ventures">Wings Tech & Ventures (Deep-Tech & SAF Capital)</option>
                  <option value="Wings Humanitarian Foundation">Wings Humanitarian Foundation (Relief & Grants)</option>
                  <option value="General Corporate Executive Inquiry">General Corporate Executive Inquiry</option>
                </select>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    marginBottom: "0.3rem",
                  }}
                >
                  PROJECT SCOPE / REQUEST DETAILS *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Outline your charter flight requirements, cargo specifications, or venture proposal..."
                  value={formData.scope}
                  onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                  style={{ ...inputStyle, resize: "none" }}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-primary"
                style={{ width: "100%", marginTop: "0.5rem", height: "46px" }}
              >
                {isLoading ? (
                  <span>Encrypting & Routing Dispatch...</span>
                ) : (
                  <>
                    <span>Submit Confidential Inquiry</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
            <div
              style={{
                width: "65px",
                height: "65px",
                borderRadius: "50%",
                background: "rgba(16, 185, 129, 0.15)",
                border: "1px solid rgba(16, 185, 129, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem auto",
              }}
            >
              <CheckCircle size={36} color="#10b981" />
            </div>

            <h3 style={{ fontSize: "1.6rem", color: "#fff", marginBottom: "0.5rem" }}>
              Inquiry Dispatched Successfully
            </h3>

            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              Thank you, <strong>{formData.name}</strong>. Your consultation dossier has been routed to the executive desk of{" "}
              <strong>{formData.division}</strong>. Reference ID:{" "}
              <span style={{ color: "var(--accent-cyan)", fontFamily: "monospace", fontWeight: 700 }}>
                #{referenceId}
              </span>.
            </p>

            <div
              style={{
                padding: "1rem",
                borderRadius: "var(--radius-md)",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                fontSize: "0.82rem",
                color: "var(--text-muted)",
                marginBottom: "1.8rem",
              }}
            >
              A designated managing director will contact you via {formData.email} within 2 business hours.
            </div>

            <button onClick={handleReset} className="btn btn-primary" style={{ minWidth: "160px" }}>
              Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem 0.9rem",
  borderRadius: "8px",
  background: "rgba(255, 255, 255, 0.04)",
  border: "1px solid rgba(255, 255, 255, 0.12)",
  color: "#fff",
  fontSize: "0.88rem",
  outline: "none",
  fontFamily: "inherit",
  transition: "border-color 0.2s ease",
};
