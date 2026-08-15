"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

const proofItems = [
  "Market conditions",
  "Repeatable process",
  "Intent engines",
  "Execution discipline"
];

const conditionRows = [
  { label: "Market bias", value: "Trend", status: "active" },
  { label: "Volatility", value: "ATR ok", status: "active" },
  { label: "Key level", value: "Waiting", status: "pending" },
  { label: "Risk", value: "0.5R", status: "active" }
];

const whopUrl = "https://whop.com/joined/mind-your-trades/";

export function HeroCommand() {
  const heroRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !heroRef.current) return;

    const hero = heroRef.current;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [".myt-bipsync-pill", ".myt-bipsync-title", ".myt-bipsync-copy", ".myt-bipsync-actions", ".myt-bipsync-proof"],
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power3.out", delay: 0.08 }
      );

    }, hero);

    const onMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      gsap.to(hero, {
        "--hero-x": x.toFixed(3),
        "--hero-y": y.toFixed(3),
        duration: 0.8,
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
    <section
      className="hero home-hero myt-bipsync-hero"
      id="home"
      aria-labelledby="hero-title"
      ref={heroRef}
    >
      <div className="hero__container myt-bipsync-container">
        <div className="hero__layout myt-bipsync-layout">
          <div className="myt-hero-copy">
            <motion.div
              className="hero__featured-content myt-bipsync-pill"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link className="button myt-glow-button" href={whopUrl} rel="noreferrer" target="_blank">
                <span className="myt-glow-button-inner">
                  <span>
                    Learning, tools and coaching <strong>available through MYT</strong>
                  </span>
                  <ArrowRight size={14} aria-hidden />
                </span>
                <span className="myt-glow-button-border" aria-hidden />
                <span className="myt-glow-button-glows" aria-hidden>
                  <span />
                  <span />
                </span>
              </Link>
            </motion.div>

            <h1 className="hero__title myt-bipsync-title" id="hero-title">
              Stop chasing trades. Start building a trading system.
            </h1>

            <p className="hero__paragraph myt-bipsync-copy">
              Mind Your Trades helps futures traders understand market conditions, build a repeatable
              trading process, and develop the discipline to execute it.
            </p>

            <div className="hero__buttons myt-bipsync-actions">
              <Link className="myt-button myt-button-primary" href={whopUrl} rel="noreferrer" target="_blank">
                Start learning
                <ArrowRight size={18} aria-hidden />
              </Link>
              <Link className="myt-button myt-button-secondary" href="/learning/indicators">
                Explore MYT tools
              </Link>
            </div>

            <div className="myt-bipsync-proof" aria-label="MYT offer tracks">
              {proofItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <aside className="myt-trade-desk" aria-label="MYT trading operating system preview">
            <div className="myt-desk-header">
              <span>MYT / INTENT ENGINE</span>
              <strong>Trade allowed</strong>
            </div>
            <div className="myt-desk-chart" aria-hidden>
              {Array.from({ length: 18 }).map((_, index) => (
                <span
                  className={index % 4 === 0 || index % 7 === 0 ? "is-red" : "is-blue"}
                  key={index}
                  style={{ "--height": 24 + ((index * 13) % 58) + "px" } as CSSProperties}
                />
              ))}
              <i />
              <b />
            </div>
            <div className="myt-desk-rows">
              {conditionRows.map((row) => (
                <div className={"myt-desk-row is-" + row.status} key={row.label}>
                  <span>{row.label}</span>
                  <strong>{row.value}</strong>
                </div>
              ))}
            </div>
            <div className="myt-desk-footer">
              <span>Conditions before entries</span>
              <strong>05-step review loop</strong>
            </div>
          </aside>
        </div>
      </div>

      <div className="hero__background myt-bipsync-background" aria-hidden>
        {!reduceMotion && (
          <video
            className="myt-bipsync-video"
            src="/videos/hero-trading-chart.mp4"
            poster="/images/myt-precision-edge.png"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        )}
      </div>
    </section>
  );
}
