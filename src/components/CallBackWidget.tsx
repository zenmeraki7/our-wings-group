"use client";

import React, { useState } from "react";
import { PhoneCall, X, CheckCircle2, Clock, Globe2, ShieldCheck, ArrowRight, MessageCircle } from "lucide-react";

export default function CallBackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    country: "Dubai (UAE)",
    timeSlot: "Anytime",
  });
  const [refNumber, setRefNumber] = useState("");
  const [waUrl, setWaUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const generatedRef = `CB-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefNumber(generatedRef);

    const istDate = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // 1. Prepare WhatsApp URL with complete lead information
    const waText = encodeURIComponent(
      `*New Call Back Request - Our Wings Overseas*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* +91 ${formData.phone}\n` +
      `🌍 *Destination:* ${formData.country}\n` +
      `⏰ *Preferred Time:* ${formData.timeSlot}\n` +
      `🔖 *Ticket ID:* ${generatedRef}\n` +
      `📅 *Date:* ${istDate}`
    );
    const directWaUrl = `https://wa.me/918848193496?text=${waText}`;
    setWaUrl(directWaUrl);

    // 2. Dispatch email to vinithaavin18@gmail.com via FormSubmit
    try {
      await fetch("https://formsubmit.co/ajax/vinithaavin18@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `🔔 New Call Back Request [Ref: ${generatedRef}] - Our Wings Overseas`,
          _template: "table",
          _captcha: "false",
          "Candidate Name": formData.name,
          "Phone Number": `+91 ${formData.phone}`,
          "Preferred Destination": formData.country,
          "Preferred Time to Call": formData.timeSlot,
          "Ticket Reference": generatedRef,
          "Submitted At": istDate,
        }),
      });
    } catch (err) {
      console.warn("Email notification dispatch note:", err);
    }

    // 3. Local browser backup
    try {
      const existing = JSON.parse(localStorage.getItem("our_wings_callbacks") || "[]");
      existing.unshift({
        ref: generatedRef,
        ...formData,
        date: istDate,
      });
      localStorage.setItem("our_wings_callbacks", JSON.stringify(existing));
    } catch {}

    setIsLoading(false);
    setIsSubmitted(true);

    // 4. Try auto-opening WhatsApp (with user fallback button on confirmation screen)
    try {
      window.open(directWaUrl, "_blank", "noopener,noreferrer");
    } catch {}
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      country: "Dubai (UAE)",
      timeSlot: "Anytime",
    });
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Call Back Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Request a Call Back from Our Wings Overseas"
        className="callback-float-btn"
        title="Request a Call Back"
        type="button"
      >
        <span className="callback-tooltip">Request Call Back</span>
        <div className="callback-icon-wrapper">
          <PhoneCall size={22} className="callback-svg" />
        </div>
      </button>

      {/* Quick Call Back Modal */}
      {isOpen && (
        <div className="modal-overlay" onClick={handleReset}>
          <div
            className="modal-box callback-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleReset}
              aria-label="Close modal"
              className="callback-close-btn"
              type="button"
            >
              <X size={20} />
            </button>

            {!isSubmitted ? (
              <div>
                {/* Header */}
                <div style={{ marginBottom: "1.35rem" }}>
                  <div className="callback-badge">
                    <PhoneCall size={13} />
                    <span>FREE CONSULTATION</span>
                  </div>
                  <h3 className="callback-title">Request a Quick Call Back</h3>
                  <p className="callback-desc">
                    Leave your contact details and our international overseas placement advisor will call you directly.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {/* Name */}
                  <div>
                    <label className="callback-label">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="callback-input"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="callback-label">
                      PHONE NUMBER (WITH WHATSAPP) *
                    </label>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <div className="callback-country-code">+91</div>
                      <input
                        type="tel"
                        required
                        placeholder="98765 43210"
                        pattern="[0-9]{10}"
                        title="Please enter a valid 10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                        className="callback-input"
                        style={{ flex: 1 }}
                      />
                    </div>
                  </div>

                  {/* 2-Column Options */}
                  <div className="modal-grid-2" style={{ gap: "0.85rem" }}>
                    <div>
                      <label className="callback-label">
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
                          <Globe2 size={12} color="#e5c287" />
                          <span>PREFERRED DESTINATION</span>
                        </span>
                      </label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="callback-select"
                      >
                        <option value="Dubai (UAE)">Dubai (UAE)</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Serbia (Europe)">Serbia (Europe)</option>
                        <option value="Greece (Europe)">Greece (Europe)</option>
                        <option value="Macedonia (Europe)">Macedonia (Europe)</option>
                        <option value="Open to all options">Open to all options</option>
                      </select>
                    </div>

                    <div>
                      <label className="callback-label">
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
                          <Clock size={12} color="#e5c287" />
                          <span>BEST TIME TO CALL</span>
                        </span>
                      </label>
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="callback-select"
                      >
                        <option value="Anytime (ASAP)">Anytime (ASAP)</option>
                        <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                        <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                        <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="callback-submit-btn"
                  >
                    {isLoading ? (
                      <span>Connecting with advisors...</span>
                    ) : (
                      <>
                        <span>Request Free Call Back</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>

                  <div className="callback-trust-note">
                    <ShieldCheck size={14} color="#e5c287" />
                    <span>100% confidential. No spam, verified guidance only.</span>
                  </div>
                </form>
              </div>
            ) : (
              /* Success confirmation state */
              <div style={{ textAlign: "center", padding: "1rem 0" }}>
                <div className="callback-success-icon">
                  <CheckCircle2 size={36} color="#e5c287" />
                </div>
                <h3 style={{ fontSize: "1.45rem", color: "#fff", marginBottom: "0.4rem" }}>
                  Call Back Scheduled!
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6, maxWidth: "420px", margin: "0 auto 1.25rem" }}>
                  Thank you, <strong style={{ color: "#fff" }}>{formData.name}</strong>. An overseas recruitment specialist from{" "}
                  <strong style={{ color: "#e5c287" }}>Our Wings Overseas</strong> will call you at{" "}
                  <strong style={{ color: "#fff" }}>+91 {formData.phone}</strong> during {formData.timeSlot}.
                </p>

                <div className="callback-ref-box">
                  <div style={{ fontSize: "0.75rem", color: "#e5c287", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    REFERENCE TICKET ID
                  </div>
                  <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#fff", letterSpacing: "0.08em", marginTop: "0.2rem" }}>
                    {refNumber}
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "center" }}>
                  <a
                    href={waUrl || `https://wa.me/918848193496?text=${encodeURIComponent(
                      `Hello Our Wings Overseas, I just requested a call back (Ref: ${refNumber}) regarding ${formData.country} opportunities.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="callback-wa-connect"
                    style={{ width: "100%", justifyContent: "center", padding: "0.85rem 1.25rem", fontSize: "0.92rem" }}
                  >
                    <MessageCircle size={19} />
                    <span>Send via WhatsApp (+91 8848193496)</span>
                  </a>

                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                    <span>✉️ Notification dispatched to vinithaavin18@gmail.com</span>
                  </div>

                  <button
                    onClick={handleReset}
                    type="button"
                    className="callback-done-btn"
                    style={{ marginTop: "0.25rem" }}
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Styled JSX */}
      <style jsx>{`
        .callback-float-btn {
          position: fixed;
          /* Placed exactly above WhatsApp button */
          bottom: calc(clamp(18px, 3.5vw, 28px) + clamp(44px, 4.8vw, 54px) + 12px);
          right: clamp(18px, 3.5vw, 28px);
          width: clamp(44px, 4.8vw, 54px);
          height: clamp(44px, 4.8vw, 54px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #e8cca4 0%, #dfc295 50%, #c99f5e 100%);
          color: #070a1e;
          box-shadow: 0 4px 20px rgba(229, 194, 135, 0.45), 0 2px 8px rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.4);
          z-index: 1500;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
          cursor: pointer;
        }

        .callback-float-btn:hover {
          transform: scale(1.1) translateY(-2px);
          box-shadow: 0 8px 26px rgba(229, 194, 135, 0.65), 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        .callback-float-btn:active {
          transform: scale(0.95);
        }

        .callback-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        :global(.callback-svg) {
          width: clamp(20px, 2.3vw, 24px);
          height: clamp(20px, 2.3vw, 24px);
          color: #070a1e;
        }

        .callback-tooltip {
          position: absolute;
          right: calc(100% + 12px);
          top: 50%;
          transform: translateY(-50%);
          background: rgba(7, 10, 30, 0.94);
          color: #ffffff;
          border: 1px solid rgba(229, 194, 135, 0.35);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s ease, transform 0.2s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
        }

        .callback-tooltip::after {
          content: "";
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border-width: 5px;
          border-style: solid;
          border-color: transparent transparent transparent rgba(7, 10, 30, 0.94);
        }

        @media (hover: hover) and (min-width: 768px) {
          .callback-float-btn:hover .callback-tooltip {
            opacity: 1;
            visibility: visible;
            transform: translateY(-50%) translateX(-2px);
          }
        }

        /* Modal Card Styling */
        .callback-modal-card {
          padding: clamp(1.25rem, 4vw, 2rem);
          max-width: 520px;
        }

        .callback-close-btn {
          position: absolute;
          top: 1.1rem;
          right: 1.1rem;
          color: var(--text-muted);
          padding: 0.45rem;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .callback-close-btn:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.12);
        }

        .callback-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.72rem;
          font-weight: 700;
          color: #e5c287;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 0.35rem;
        }

        .callback-title {
          font-size: clamp(1.25rem, 3.5vw, 1.55rem);
          color: #ffffff;
          margin: 0;
          font-weight: 700;
        }

        .callback-desc {
          font-size: 0.86rem;
          color: var(--text-secondary);
          margin-top: 0.25rem;
          line-height: 1.5;
        }

        .callback-label {
          display: block;
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 0.3rem;
          letter-spacing: 0.03em;
        }

        .callback-country-code {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          color: #e5c287;
          font-weight: 700;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 0.85rem;
        }

        .callback-input,
        .callback-select {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          padding: 0.75rem 0.9rem;
          color: #ffffff;
          font-size: 0.92rem;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
        }

        .callback-input:focus,
        .callback-select:focus {
          border-color: #e5c287;
          background: rgba(255, 255, 255, 0.08);
        }

        .callback-select option {
          background: #0d1527;
          color: #ffffff;
        }

        .callback-submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #e8cca4 0%, #dfc295 50%, #c99f5e 100%);
          color: #070a1e;
          font-weight: 700;
          font-size: 0.95rem;
          padding: 0.8rem 1.25rem;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 0.4rem;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 15px rgba(229, 194, 135, 0.35);
        }

        .callback-submit-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(229, 194, 135, 0.5);
        }

        .callback-trust-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 0.2rem;
        }

        .callback-success-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(229, 194, 135, 0.12);
          border: 1px solid rgba(229, 194, 135, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }

        .callback-ref-box {
          background: rgba(255, 255, 255, 0.04);
          border: 1px dashed rgba(229, 194, 135, 0.35);
          border-radius: 10px;
          padding: 0.85rem 1.5rem;
          display: inline-block;
          margin-bottom: 1.5rem;
        }

        .callback-wa-connect {
          background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
          color: #ffffff;
          padding: 0.7rem 1.2rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.86rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.35);
        }

        .callback-done-btn {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          padding: 0.7rem 1.4rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.86rem;
        }

        /* Mobile Adjustments */
        @media (max-width: 640px) {
          .callback-float-btn {
            bottom: calc(clamp(14px, 3.5vw, 20px) + clamp(40px, 9vw, 46px) + 10px);
            right: clamp(14px, 3.5vw, 20px);
            width: clamp(40px, 9vw, 46px);
            height: clamp(40px, 9vw, 46px);
          }

          :global(.callback-svg) {
            width: clamp(18px, 4.5vw, 21px);
            height: clamp(18px, 4.5vw, 21px);
          }

          .callback-tooltip {
            display: none;
          }
        }

        @media (max-width: 380px) {
          .callback-float-btn {
            bottom: calc(12px + 38px + 8px);
            right: 12px;
            width: 38px;
            height: 38px;
          }

          :global(.callback-svg) {
            width: 17px;
            height: 17px;
          }
        }
      `}</style>
    </>
  );
}
