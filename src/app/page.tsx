"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalDestinations from "@/components/GlobalDestinations";
import InquiryModal from "@/components/InquiryModal";

import styles from "./page.module.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function HomePage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <>
      <Navbar onOpenInquiry={() => setIsInquiryOpen(true)} />
      <main className={`${inter.variable} ${playfair.variable}`}>
        <GlobalTalentHero onOpenInquiry={() => setIsInquiryOpen(true)} />
        <AboutOurWingsSection onOpenInquiry={() => setIsInquiryOpen(true)} />
        <GlobalDestinations onOpenInquiry={() => setIsInquiryOpen(true)} />
      </main>
      <Footer />
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />
    </>
  );
}

function GlobalTalentHero({ onOpenInquiry }: { onOpenInquiry?: () => void }) {
  return (
    <section className={styles.hero}>
      <div
        className={styles.worldMap}
        aria-hidden="true"
      />

      <div className={styles.heroInner}>
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
              href="#destinations"
              className={styles.primaryButton}
            >
              <span>Explore Job Opportunities</span>
              <ArrowIcon />
            </a>

            <button
              type="button"
              onClick={onOpenInquiry}
              className={styles.secondaryButton}
            >
              <span>Hire Global Talent</span>
              <ArrowIcon />
            </button>
          </div>
        </div>

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
    <div className={styles.trustStrip} id="trust">
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

function TrustItem({ icon, title, description }: TrustItemProps) {
  return (
    <div className={styles.trustItem}>
      <div className={styles.trustIcon}>{icon}</div>

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

/* =========================================================
   ABOUT OUR WINGS SECTION
========================================================= */

function AboutOurWingsSection({ onOpenInquiry }: { onOpenInquiry?: () => void }) {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.aboutContainer}>
        <div className={styles.aboutGrid}>

          {/* LEFT — CONTENT */}
          <div className={styles.aboutContent}>
            <div className={styles.aboutEyebrow}>
              <span className={styles.aboutEyebrowLine} />
              <span>WHO WE ARE</span>
            </div>

            <h2 className={styles.aboutTitle}>
              About{" "}
              <span>Our Wings</span>{" "}
              International
            </h2>

            <p className={styles.aboutDescription}>
              Our Wings International is a government-authorized
              recruitment and visa assistance agency committed to
              creating life-changing opportunities.
            </p>

            <p className={styles.aboutDescription}>
              We connect skilled professionals from India with verified
              international employers, ensuring a smooth, transparent
              and reliable journey — from application to arrival and
              beyond.
            </p>

            <div className={styles.aboutBottom}>
              <button
                type="button"
                onClick={onOpenInquiry}
                className={styles.aboutButton}
              >
                Learn More
                <ArrowIcon />
              </button>

              <div className={styles.aboutTagline}>
                <span className={styles.taglineLine} />
                <span>
                  GLOBAL PEOPLE. STRONGER TOMORROWS.
                </span>
              </div>
            </div>
          </div>


          {/* CENTER — IMAGE COLLAGE */}
          <div className={styles.aboutVisual}>
            <div className={styles.aboutMosaic}>

              <div
                className={`${styles.aboutImageBox} ${styles.workerImage}`}
              >
                <Image
                  src="/images/about-worker.webp"
                  alt="Skilled construction professional"
                  fill
                  sizes="300px"
                />
              </div>

              <div
                className={`${styles.aboutImageBox} ${styles.nurseImage}`}
              >
                <Image
                  src="/images/about-nurse.webp"
                  alt="Healthcare professional"
                  fill
                  sizes="300px"
                />
              </div>

              <div
                className={`${styles.aboutImageBox} ${styles.passportImageBox}`}
              >
                <Image
                  src="/images/about-passport.webp"
                  alt="Passport for international travel"
                  fill
                  sizes="280px"
                />
              </div>

              <div
                className={`${styles.aboutImageBox} ${styles.flightImage}`}
              >
                <Image
                  src="/images/about-flight.webp"
                  alt="International air travel"
                  fill
                  sizes="400px"
                />
              </div>

              <div
                className={`${styles.aboutImageBox} ${styles.cityImage}`}
              >
                <Image
                  src="/images/about-dubai.webp"
                  alt="International destination"
                  fill
                  sizes="220px"
                />
              </div>

              <div
                className={styles.aboutHandwriting}
                aria-hidden="true"
              >
                <span>Different</span>
                <span>People</span>
                <span>A Brighter</span>
                <span>Tomorrow</span>
              </div>
            </div>
          </div>


          {/* RIGHT — STATS */}
          <aside className={styles.aboutStats}>
            <AboutStat
              icon={<CalendarIcon />}
              value="10+"
              label="Years of Trust"
            />

            <AboutStat
              icon={<PeopleIcon />}
              value="50+"
              label="Global Employers"
            />

            <AboutStat
              icon={<BriefcaseIcon />}
              value="10,000+"
              label="Placed Professionals"
            />

            <AboutStat
              icon={<GlobeIcon />}
              value="Multiple Countries"
              label="Across Middle East, Asia & Beyond"
              compact
            />
          </aside>

        </div>
      </div>
    </section>
  );
}

interface AboutStatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  compact?: boolean;
}

function AboutStat({
  icon,
  value,
  label,
  compact = false,
}: AboutStatProps) {
  return (
    <div className={styles.aboutStat}>
      <div className={styles.aboutStatIcon}>
        {icon}
      </div>

      <div>
        <strong
          className={
            compact
              ? styles.aboutStatCompact
              : styles.aboutStatValue
          }
        >
          {value}
        </strong>

        <span className={styles.aboutStatLabel}>
          {label}
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   ICONS
========================================================= */

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

function CalendarIcon() {
  return (
    <svg viewBox="0 0 48 48">
      <rect
        x="8"
        y="11"
        width="32"
        height="29"
        rx="3"
      />
      <path d="M15 7v8M33 7v8M8 20h32" />
      <path d="M15 26h5M27 26h5M15 33h5M27 33h5" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 48 48">
      <path d="M17 14v-3c0-2 2-4 4-4h6c2 0 4 2 4 4v3" />
      <rect
        x="7"
        y="14"
        width="34"
        height="25"
        rx="3"
      />
      <path d="M7 23c10 5 24 5 34 0" />
      <path d="M21 24h6v5h-6z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 48 48">
      <circle
        cx="24"
        cy="24"
        r="17"
      />
      <path d="M7 24h34" />
      <path
        d="
          M24 7
          C30 13 32 18 32 24
          C32 30 30 35 24 41
        "
      />
      <path
        d="
          M24 7
          C18 13 16 18 16 24
          C16 30 18 35 24 41
        "
      />
    </svg>
  );
}
