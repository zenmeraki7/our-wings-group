import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./GlobalDestinations.module.css";

export interface Destination {
  code: string;
  name: string;
  flag: string;
  image: string;
  description: string;
  href: string;
}

const destinations: Destination[] = [
  {
    code: "SA",
    name: "Saudi Arabia",
    flag: "/images/flags/saudi-arabia.svg",
    image: "/images/destinations/saudi.webp",
    description:
      "Large-scale construction, infrastructure and industrial manpower opportunities.",
    href: "/jobs/saudi-arabia",
  },
  {
    code: "AE",
    name: "United Arab Emirates",
    flag: "/images/flags/uae.svg",
    image: "/images/destinations/uae.webp",
    description:
      "Construction, hospitality, aviation, logistics and professional roles across the Emirates.",
    href: "/jobs/uae",
  },
  {
    code: "QA",
    name: "Qatar",
    flag: "/images/flags/qatar.svg",
    image: "/images/destinations/qatar.webp",
    description:
      "Infrastructure, hospitality and skilled trade opportunities in a dynamic market.",
    href: "/jobs/qatar",
  },
  {
    code: "OM",
    name: "Oman",
    flag: "/images/flags/oman.svg",
    image: "/images/destinations/oman.webp",
    description:
      "Engineering, construction and industrial workforce requirements.",
    href: "/jobs/oman",
  },
  {
    code: "KW",
    name: "Kuwait",
    flag: "/images/flags/kuwait.svg",
    image: "/images/destinations/kuwait.webp",
    description:
      "Oil & gas support, construction and facilities manpower.",
    href: "/jobs/kuwait",
  },
  {
    code: "BH",
    name: "Bahrain",
    flag: "/images/flags/bahrain.svg",
    image: "/images/destinations/bahrain.webp",
    description:
      "Hospitality, construction and skilled technical placements.",
    href: "/jobs/bahrain",
  },
];

interface GlobalDestinationsProps {
  onOpenInquiry?: () => void;
}

export default function GlobalDestinations({ onOpenInquiry }: GlobalDestinationsProps) {
  return (
    <section className={styles.section} id="destinations">
      <div className={styles.container}>
        {/* =========================
            HEADER
        ========================== */}

        <div className={styles.header}>
          <div className={styles.headerCopy}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              GLOBAL DESTINATIONS
            </div>

            <h2 className={styles.title}>
              Opportunities
              <span> Across the World</span>
            </h2>

            <p className={styles.intro}>
              Explore career opportunities in leading global markets.
              We connect skilled professionals with trusted employers
              across key industries and international destinations.
            </p>

            <div className={styles.trustRow}>
              <TrustItem
                icon={<GlobeIcon />}
                title="Trusted"
                text="Employers"
              />

              <TrustItem
                icon={<ShieldIcon />}
                title="Verified"
                text="Opportunities"
              />

              <TrustItem
                icon={<PeopleIcon />}
                title="End-to-End"
                text="Support"
              />
            </div>
          </div>

          <div className={styles.mapArea}>
            <WorldMapGraphic />

            <div className={styles.handwritten}>
              <span>Building</span>
              <span>Careers</span>
              <span>Worldwide</span>
            </div>

            <p className={styles.mapNote}>
              From the Middle East
              <br />
              to Asia and beyond —
              <br />
              new horizons await.
            </p>
          </div>
        </div>

        {/* =========================
            COUNTRY CARDS
        ========================== */}

        <div className={styles.destinationGrid}>
          {destinations.map((destination) => (
            <DestinationCard
              destination={destination}
              key={destination.code}
            />
          ))}
        </div>

        {/* =========================
            CTA BANNER
        ========================== */}

        <div className={styles.ctaBanner}>
          <div className={styles.ctaOverlay} />

          <div className={styles.ctaContent}>
            <div className={styles.ctaCopy}>
              <span className={styles.ctaEyebrow}>
                READY FOR A GLOBAL CAREER?
              </span>

              <h3>
                Let&apos;s Find the Right Opportunity for You.
              </h3>
            </div>

            {onOpenInquiry ? (
              <button
                type="button"
                onClick={onOpenInquiry}
                className={styles.ctaButton}
              >
                <span>Start Your Inquiry</span>
                <ArrowIcon />
              </button>
            ) : (
              <Link
                href="#contact"
                className={styles.ctaButton}
              >
                <span>Explore Opportunities</span>
                <ArrowIcon />
              </Link>
            )}

            <div className={styles.ctaFeatures}>
              <MiniFeature
                icon={<BriefcaseIcon />}
                line1="Multiple"
                line2="Industries"
              />

              <MiniFeature
                icon={<GlobeIcon />}
                line1="Trusted"
                line2="Global Partners"
              />

              <MiniFeature
                icon={<PersonIcon />}
                line1="Better"
                line2="Futures"
              />
            </div>
          </div>

          <div className={styles.aircraftVisual}>
            <Image
              src="/images/destinations/aircraft.webp"
              alt="International aircraft in flight"
              fill
              sizes="520px"
              className={styles.aircraftImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface DestinationCardProps {
  destination: Destination;
}

function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link
      href={destination.href}
      className={styles.destinationCard}
    >
      <Image
        src={destination.image}
        alt={`${destination.name} skyline`}
        fill
        sizes="
          (max-width: 760px) 100vw,
          (max-width: 1100px) 50vw,
          33vw
        "
        className={styles.destinationImage}
      />

      <div className={styles.cardOverlay} />

      <div className={styles.cardContent}>
        <div className={styles.countryMeta}>
          <span className={styles.countryCode}>
            {destination.code}
          </span>

          <span className={styles.flag}>
            <Image
              src={destination.flag}
              alt={`${destination.name} flag`}
              width={35}
              height={24}
            />
          </span>
        </div>

        <div className={styles.cardBottom}>
          <h3>{destination.name}</h3>

          <p>{destination.description}</p>

          <div className={styles.cardLinkRow}>
            <span className={styles.viewText}>
              View Opportunities
              <ArrowIcon />
            </span>

            <span className={styles.circleArrow}>
              <ArrowIcon />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

interface TrustItemProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

function TrustItem({ icon, title, text }: TrustItemProps) {
  return (
    <div className={styles.trustItem}>
      <div className={styles.trustIcon}>
        {icon}
      </div>

      <div>
        <strong>{title}</strong>
        <span>{text}</span>
      </div>
    </div>
  );
}

interface MiniFeatureProps {
  icon: React.ReactNode;
  line1: string;
  line2: string;
}

function MiniFeature({
  icon,
  line1,
  line2,
}: MiniFeatureProps) {
  return (
    <div className={styles.miniFeature}>
      <div className={styles.miniFeatureIcon}>
        {icon}
      </div>

      <span>
        {line1}
        <br />
        {line2}
      </span>
    </div>
  );
}

/* =========================
   MAP
========================= */

function WorldMapGraphic() {
  return (
    <svg
      className={styles.worldMap}
      viewBox="0 0 900 430"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="mapDots"
          width="6"
          height="6"
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx="1"
            cy="1"
            r="1"
            fill="currentColor"
          />
        </pattern>
      </defs>

      <path
        className={styles.mapShape}
        d="
          M55 130
          C100 88 169 77 214 97
          C243 110 269 109 299 92
          C338 68 394 69 429 91
          C469 116 496 115 531 91
          C567 67 621 70 661 94
          C694 114 734 119 775 107
          C811 96 845 104 871 131
          C843 159 828 190 821 223
          C790 228 760 239 739 261
          C707 294 668 303 626 289
          C586 275 551 279 514 300
          C474 324 431 324 390 309
          C356 296 319 299 284 313
          C244 329 199 323 168 300
          C139 278 109 262 78 247
          C61 206 52 167 55 130
        "
      />

      <path
        className={styles.route}
        d="M520 210 C560 140 630 110 685 125"
      />

      <path
        className={styles.route}
        d="M520 210 C620 160 705 170 770 210"
      />

      <path
        className={styles.route}
        d="M520 210 C600 220 675 250 755 285"
      />

      {[520, 585, 650, 706, 770].map(
        (cx, index) => (
          <circle
            key={cx}
            className={styles.mapDot}
            cx={cx}
            cy={[210, 157, 130, 180, 210][index]}
            r="7"
          />
        ),
      )}
    </svg>
  );
}

/* =========================
   ICONS
========================= */

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24">
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

function GlobeIcon() {
  return (
    <svg viewBox="0 0 48 48">
      <circle cx="24" cy="24" r="17" />
      <path d="M7 24h34" />
      <path d="M24 7c6 7 9 12 9 17s-3 11-9 17" />
      <path d="M24 7c-6 7-9 12-9 17s3 11 9 17" />
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

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 48 48">
      <path d="M16 14v-3c0-2 2-4 4-4h8c2 0 4 2 4 4v3" />
      <rect
        x="7"
        y="14"
        width="34"
        height="26"
        rx="3"
      />
      <path d="M7 24h34" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 48 48">
      <circle cx="24" cy="15" r="8" />
      <path d="M10 40c1-9 6-14 14-14s13 5 14 14" />
    </svg>
  );
}
