"use client";

import React from "react";

export default function WhatsAppButton() {
  const phoneNumber = "918848193496";
  const defaultMessage = encodeURIComponent(
    "Hello Our Wings Overseas, I would like to inquire about international recruitment opportunities."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Our Wings Overseas on WhatsApp"
        className="whatsapp-float-btn"
        title="Chat on WhatsApp"
      >
        <span className="whatsapp-tooltip">Chat with us</span>
        <svg
          viewBox="0 0 24 24"
          className="whatsapp-svg"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

      <style jsx>{`
        .whatsapp-float-btn {
          position: fixed;
          bottom: clamp(18px, 3.5vw, 28px);
          right: clamp(18px, 3.5vw, 28px);
          width: clamp(44px, 4.8vw, 54px);
          height: clamp(44px, 4.8vw, 54px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
          color: #ffffff;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.45), 0 2px 8px rgba(0, 0, 0, 0.35);
          z-index: 1500;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
          text-decoration: none;
          cursor: pointer;
        }

        .whatsapp-float-btn:hover {
          transform: scale(1.1) translateY(-2px);
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.6), 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        .whatsapp-float-btn:active {
          transform: scale(0.95);
        }

        .whatsapp-svg {
          width: clamp(23px, 2.6vw, 29px);
          height: clamp(23px, 2.6vw, 29px);
          display: block;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
        }

        .whatsapp-tooltip {
          position: absolute;
          right: calc(100% + 12px);
          top: 50%;
          transform: translateY(-50%);
          background: rgba(7, 10, 30, 0.94);
          color: #ffffff;
          border: 1px solid rgba(37, 211, 102, 0.35);
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

        .whatsapp-tooltip::after {
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
          .whatsapp-float-btn:hover .whatsapp-tooltip {
            opacity: 1;
            visibility: visible;
            transform: translateY(-50%) translateX(-2px);
          }
        }

        @media (max-width: 640px) {
          .whatsapp-float-btn {
            bottom: clamp(14px, 3.5vw, 20px);
            right: clamp(14px, 3.5vw, 20px);
            width: clamp(40px, 9vw, 46px);
            height: clamp(40px, 9vw, 46px);
          }

          .whatsapp-svg {
            width: clamp(21px, 4.8vw, 24px);
            height: clamp(21px, 4.8vw, 24px);
          }

          .whatsapp-tooltip {
            display: none;
          }
        }

        @media (max-width: 380px) {
          .whatsapp-float-btn {
            bottom: 12px;
            right: 12px;
            width: 38px;
            height: 38px;
          }

          .whatsapp-svg {
            width: 19px;
            height: 19px;
          }
        }
      `}</style>
    </>
  );
}
