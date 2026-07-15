"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, BookOpenCheck, CandlestickChart, Radio, ShieldCheck } from "lucide-react";

const heroSignals = ["Structured courses", "Indicator tools", "Live market room", "Execution coaching"];

const proofItems = [
  ["01", "Prepare", "Map the session before risk enters the equation."],
  ["02", "Execute", "Use rules, levels, and context instead of impulse."],
  ["03", "Review", "Turn screenshots and journals into repeatable progress."]
];

export function HeroCommand() {
  const heroRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !heroRef.current) return;

    const hero = heroRef.current;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".myt-atelier-line",
        { scaleX: 0 },
        { scaleX: 1, duration: 1.1, ease: "expo.out", delay: 0.15 }
      );

      gsap.fromTo(
        ".myt-atelier-visual",
        { y: 56, opacity: 0, clipPath: "inset(18% 8% 0% 8% round 12px)" },
        { y: 0, opacity: 1, clipPath: "inset(0% 0% 0% 0% round 12px)", duration: 1.1, ease: "expo.out", delay: 0.25 }
      );

      gsap.fromTo(
        ".myt-atelier-proof li",
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power3.out", delay: 0.45 }
      );
    }, hero);

    const onMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      gsap.to(hero, {
        "--tilt-x": (x * 10).toFixed(2),
        "--tilt-y": (y * -8).toFixed(2),
        duration: 0.7,
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
    <section className="myt-atelier-hero" id="home" aria-labelledby="hero-title" ref={heroRef}>
      <div className="myt-atelier-backdrop" aria-hidden>
        <Image src="/images/myt-precision-edge.png" alt="" fill priority sizes="100vw" />
      </div>
      <div className="myt-atelier-shell">
        <motion.div
          className="myt-atelier-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="myt-atelier-kicker">Mind Your Trades / futures education platform</p>
          <h1 id="hero-title">
            The workspace for traders building a real process.
          </h1>
          <p className="myt-atelier-lede">
            Courses, indicators, live-room context, and coaching arranged into one serious learning
            system for futures traders who want discipline before performance claims.
          </p>
          <div className="myt-atelier-actions">
            <Link className="myt-button myt-button-primary" href="/pricing">
              Request access
              <ArrowRight size={18} aria-hidden />
            </Link>
            <Link className="myt-button myt-button-secondary" href="/learning/courses">
              View curriculum
              <BookOpenCheck size={18} aria-hidden />
            </Link>
          </div>
        </motion.div>

        <div className="myt-atelier-panel" aria-label="MYT offer overview">
          <div className="myt-atelier-panel-head">
            <span>MYT operating system</span>
            <strong>Course stack / tool suite / live review</strong>
          </div>
          <div className="myt-atelier-line" aria-hidden />
          <ul className="myt-atelier-proof">
            {proofItems.map(([number, label, text]) => (
              <li key={number}>
                <span>{number}</span>
                <strong>{label}</strong>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="myt-atelier-visual-wrap">
        <div className="myt-atelier-visual">
          <Image
            src="/webflow/hero-dashboard.webp"
            alt="Trading dashboard and market analysis workspace."
            width={2880}
            height={1970}
            priority
            sizes="(max-width: 900px) 96vw, 1120px"
          />
          <div className="myt-atelier-visual-caption">
            <span>
              <CandlestickChart size={16} aria-hidden />
              Live chart context
            </span>
            <span>
              <ShieldCheck size={16} aria-hidden />
              Risk-first framework
            </span>
            <span>
              <Radio size={16} aria-hidden />
              Room-ready workflow
            </span>
          </div>
        </div>
      </div>

      <div className="myt-atelier-ticker" aria-label="MYT offer tracks">
        {heroSignals.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
