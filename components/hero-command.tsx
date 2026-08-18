"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";

const proofItems = [
  "Market conditions",
  "Repeatable process",
  "Intent engines",
  "Execution discipline"
];

export function HeroCommand() {
  const heroRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !heroRef.current) return;

    const hero = heroRef.current;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [".myt-bipsync-title", ".myt-bipsync-copy", ".myt-bipsync-actions", ".myt-bipsync-proof"],
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
            <h1 className="hero__title myt-bipsync-title" id="hero-title">
              Stop chasing trades. Start building a trading system.
            </h1>

            <p className="hero__paragraph myt-bipsync-copy">
              Mind Your Trades helps futures traders understand market conditions, build a repeatable
              trading process, and develop the discipline to execute it.
            </p>

            <div className="hero__buttons myt-bipsync-actions">
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
