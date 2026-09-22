import React from "react";
import Image from "next/image";
import styles from "@/app/page.module.css";

interface GlobalTalentHeroProps {
  onOpenInquiry?: (context?: string) => void;
}

export default function GlobalTalentHero({ onOpenInquiry }: GlobalTalentHeroProps) {
  return (
    <section className={styles.hero} id="hero">
      {/* Decorative world map */}
      <div
        className={styles.worldMap}
        aria-hidden="true"
      />

      <div className={styles.heroInner}>
        {/* LEFT */}
        <div className={styles.heroContent}>
          <div className={styles.eyebrow}>
            <span>PEOPLE</span>
            <span className={styles.eyebrowDot}>•</span>
            <span>OPPORTUNITIES</span>
            <span className={styles.eyebrowDot}>•</span>
            <span>A BRIGHTER TOMORROW</span>
          </div>

          <h1 className={styles.heroTitle}>
            <span>Global Talent.</span>
            <span className={styles.heroTitleAccent}>
              Brighter Futures.
            </span>
          </h1>

          <p className={styles.heroDescription}>
            Connecting skilled professionals from India with verified
            international opportunities and helping global employers
            build dependable workforces.
          </p>

          <div className={styles.heroActions}>
            <a
              href="#divisions"
              onClick={(e) => {
                if (onOpenInquiry) {
                  e.preventDefault();
                  onOpenInquiry("International Careers & Placements");
                }
              }}
              className={styles.primaryButton}
              id="hero-explore-jobs-btn"
            >
              <span>Explore Job Opportunities</span>
              <ArrowIcon />
            </a>

            <a
              href="#inquiry"
              onClick={(e) => {
                if (onOpenInquiry) {
                  e.preventDefault();
                  onOpenInquiry("Global Employer Workforce Solutions");
                }
              }}
              className={styles.secondaryButton}
              id="hero-hire-talent-btn"
            >
              <span>Hire Global Talent</span>
              <ArrowIcon />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.visual}>
          <Image
            src="/images/hero-airport.webp"
            alt="Professional preparing for an international career"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 55vw"
            className={styles.heroImage}
          />

          <div className={styles.imageShade} />

          <div className={styles.visualMessage}>
            <span>A World</span>
            <span>of Opportunities</span>
            <span>Awaits</span>
          </div>

          <div
            className={styles.visualKeywords}
            aria-hidden="true"
          >
            <span>WORK</span>
            <span>TRAVEL</span>
            <span>GROW</span>
            <span>BELONG</span>

            <div className={styles.keywordLine} />
          </div>

          <div
            className={styles.travelStamp}
            aria-hidden="true"
          >
            <div className={styles.travelStampInner}>
              <PlaneIcon />
            </div>
          </div>
        </div>
      </div>

      <TrustStrip />
    </section>
  );
}

function TrustStrip() {
  return (
    <div className={styles.trustStrip}>
      <div className={styles.trustInner}>
        <TrustItem
          icon={<BuildingIcon />}
          title="Government Authorized"
          description="MEA approved recruitment agency"
        />

        <TrustItem
          icon={<PeopleIcon />}
          title="Trusted Global Employers"
          description="Partnering with leading companies worldwide"
        />

        <TrustItem
          icon={<ShieldIcon />}
          title="End-to-End Support"
          description="From application to arrival"
        />

        <TrustItem
          icon={<HandshakeIcon />}
          title="Transparent & Ethical Process"
          description="Built on trust, integrity and people first"
        />
      </div>
    </div>
  );
}

interface TrustItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function TrustItem({
  icon,
  title,
  description,
}: TrustItemProps) {
  return (
    <div className={styles.trustItem}>
      <div className={styles.trustIcon}>
        {icon}
      </div>

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M14 7l5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 48 48">
      <path d="M12 40V16h24v24" />
      <path d="M18 16V9h12v7" />
      <path d="M8 40h32" />
      <path d="M18 23h4v4h-4z" />
      <path d="M26 23h4v4h-4z" />
      <path d="M18 31h4v4h-4z" />
      <path d="M26 31h4v9h-4z" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 48 48">
      <circle cx="24" cy="15" r="6" />
      <circle cx="11" cy="19" r="4" />
      <circle cx="37" cy="19" r="4" />

      <path d="M14 39v-4c0-6 4-10 10-10s10 4 10 10v4" />
      <path d="M4 38v-3c0-5 3-8 8-8" />
      <path d="M44 38v-3c0-5-3-8-8-8" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 48 48">
      <path d="M24 5 39 11v11c0 10-6 17-15 21C15 39 9 32 9 22V11Z" />
      <path d="m17 24 5 5 10-11" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg viewBox="0 0 48 48">
      <path d="m4 20 9-9 8 5" />
      <path d="m44 20-9-9-8 5" />
      <path d="m14 21 10-7 6 5" />
      <path d="m8 24 14 14c2 2 5 2 7 0l11-11" />
      <path d="m19 31 5 5" />
      <path d="m24 27 6 6" />
      <path d="m29 23 6 6" />
    </svg>
  );
}

function PlaneIcon() {
  return (
    <svg viewBox="0 0 64 64">
      <path
        d="m8 35 20-7 7-18c1-3 5-5 8-4 3 1 4 4 2 7l-7 15 14 4c4 1 5 5 3 8-1 2-4 3-7 2l-15-4-10 13-6-2 5-14-11 3Z"
        fill="currentColor"
      />
    </svg>
  );
}
