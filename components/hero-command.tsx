"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import {
  BookOpenCheck,
  CandlestickChart,
  ChevronRight,
  GraduationCap,
  Radio,
  Sparkles,
  Target
} from "lucide-react";

const offerTracks = [
  { label: "Courses", detail: "Structured futures path", icon: GraduationCap },
  { label: "Tools", detail: "Indicators and confluence", icon: CandlestickChart },
  { label: "Live Room", detail: "Session context", icon: Radio },
  { label: "Coaching", detail: "Review and discipline", icon: Target }
];

const copyItems = [
  "Futures trading education",
  "Indicator tools",
  "Live market context",
  "Coaching and review"
];

export function HeroCommand() {
  const heroRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !heroRef.current) return;

    const hero = heroRef.current;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".myt-hero-bg",
        { scale: 1.08, opacity: 0.18 },
        { scale: 1, opacity: 0.38, duration: 1.4, ease: "power3.out" }
      );

      gsap.fromTo(
        ".myt-dashboard-frame",
        { y: 50, rotateZ: -3, opacity: 0 },
        { y: 0, rotateZ: -1, opacity: 1, duration: 1, ease: "expo.out", delay: 0.25 }
      );

      gsap.fromTo(
        ".myt-offer-card",
        { y: 18, opacity: 0, filter: "blur(8px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.7, stagger: 0.08, ease: "power3.out", delay: 0.45 }
      );
    }, hero);

    const onMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      gsap.to(hero, {
        "--mx": x.toFixed(3),
        "--my": y.toFixed(3),
        duration: 0.55,
        ease: "power3.out"
      });
    };

    hero.addEventListener("pointermove", onMove);

    return () => {
      hero.removeEventListener("pointermove", onMove);
      ctx.revert();
    };
  }, [reduceMotion]);

  return (
    <section className="myt-hero" id="home" aria-labelledby="hero-title" ref={heroRef}>
      <Image className="myt-hero-bg" src="/images/myt-precision-edge.png" alt="" fill priority sizes="100vw" />
      <div className="myt-hero-noise" aria-hidden />
      <div className="myt-hero-spotlight" aria-hidden />
      <div className="myt-orbit-field" aria-hidden>
        <span />
        <span />
      </div>
      <div className="myt-hero-inner">
        <motion.div
          className="myt-hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="myt-trust-line">Premium futures education, tools, and live market context</p>
          <p className="myt-kicker">MYT learning ecosystem</p>
          <h1 id="hero-title">
            Sell the method. <span>Make the edge feel real.</span>
          </h1>
          <p className="myt-hero-text">
            A high-trust home for courses, indicators, live room access, and coaching built around a
            disciplined futures trading process.
          </p>
          <div className="myt-copy-rail" aria-label="MYT offer summary">
            {copyItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="myt-hero-badges" aria-label="MYT platform benefits">
            <span>
              <BookOpenCheck size={15} aria-hidden />
              Course library
            </span>
            <span>
              <CandlestickChart size={15} aria-hidden />
              Indicator suite
            </span>
          </div>
          <div className="myt-actions">
            <Link className="myt-button myt-button-primary" href="/pricing">
              View access options
              <ChevronRight size={18} aria-hidden />
            </Link>
            <Link className="myt-button myt-button-secondary" href="/learning/courses">
              Explore courses
              <BookOpenCheck size={18} aria-hidden />
            </Link>
          </div>
          <div className="myt-proof-row">
            <div className="myt-avatar-stack" aria-label="Trader proof avatars">
              <Image src="/webflow/avatar-01.webp" alt="" width={50} height={50} />
              <Image src="/webflow/avatar-02.webp" alt="" width={50} height={50} />
              <Image src="/webflow/avatar-03.webp" alt="" width={50} height={50} />
            </div>
            <p>Built for a trader selling a serious method, not another signal room.</p>
          </div>
        </motion.div>

        <aside className="myt-dashboard-stage" aria-label="MYT trading dashboard and offer preview">
          <div className="myt-dashboard-glow" aria-hidden />
          <div className="myt-dashboard-frame">
            <Image
              className="myt-dashboard-main"
              src="/webflow/hero-dashboard.webp"
              alt="Trading platform dashboard preview with performance panels and market charts."
              width={2880}
              height={1970}
              priority
              sizes="(max-width: 900px) 96vw, 1120px"
            />
            <div className="myt-command-grid" aria-hidden>
              <span />
              <span />
              <span />
            </div>
            <div className="myt-liquidity-line" aria-hidden />
            <div className="myt-risk-band" aria-hidden>
              <span>Tools + education stack</span>
            </div>
            <div className="myt-dashboard-label" aria-hidden>
              <span>MYT LEARNING HUB</span>
            </div>
          </div>
          <div className="myt-offer-stack" aria-hidden>
            {offerTracks.map((item) => {
              const Icon = item.icon;
              return (
                <div className="myt-offer-card" key={item.label}>
                  <Icon size={18} />
                  <span>{item.label}</span>
                  <strong>{item.detail}</strong>
                </div>
              );
            })}
          </div>
          <div className="myt-session-card" aria-hidden>
            <span>Featured course</span>
            <strong>Futures Framework</strong>
            <small>Structure, risk, execution</small>
          </div>
          <div className="myt-discipline-card" aria-hidden>
            <span>Tool access</span>
            <strong>Indicator Suite</strong>
            <small>Levels, momentum, confluence</small>
          </div>
          <div className="myt-spark-card" aria-hidden>
            <Sparkles size={16} />
            <span>Course launch ready</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
