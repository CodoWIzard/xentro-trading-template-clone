"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";

const graphNodes = [
  { x: 82, y: 238, label: "Prep", value: "Session map" },
  { x: 224, y: 164, label: "Context", value: "Bias + levels" },
  { x: 388, y: 212, label: "Tools", value: "Confluence" },
  { x: 552, y: 116, label: "Execute", value: "Risk rules" },
  { x: 742, y: 178, label: "Review", value: "Journal loop" },
  { x: 918, y: 84, label: "Coaching", value: "Feedback" }
];

const graphPaths = [
  "M82 238 C142 208 166 184 224 164",
  "M224 164 C284 136 330 212 388 212",
  "M388 212 C464 210 484 128 552 116",
  "M552 116 C628 96 666 178 742 178",
  "M742 178 C812 170 858 108 918 84",
  "M82 238 C258 316 542 312 918 84"
];

export function MarketGraph() {
  const graphRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !graphRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".myt-network-path",
        { strokeDashoffset: 1 },
        { strokeDashoffset: 0, duration: 1.6, stagger: 0.08, ease: "power3.out" }
      );

      gsap.fromTo(
        ".myt-network-node",
        { scale: 0.72, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.7, stagger: 0.08, ease: "back.out(1.5)", delay: 0.35 }
      );

      gsap.to(".myt-network-flow", {
        strokeDashoffset: -2,
        duration: 3.8,
        repeat: -1,
        ease: "none"
      });
    }, graphRef);

    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <section className="myt-network-section" ref={graphRef} aria-labelledby="network-title">
      <div className="myt-network-copy">
        <p className="myt-kicker">Operating graph</p>
        <h2 id="network-title">A moving map of the MYT learning system.</h2>
        <p>
          This sits directly below the hero to make the method feel alive: preparation, context,
          tools, execution, review, and coaching connected as one repeatable trading workflow.
        </p>
      </div>

      <div className="myt-network-board" aria-label="Animated MYT trading workflow graph">
        <div className="myt-network-board-head">
          <span>MYT / Process intelligence</span>
          <strong>Live method map</strong>
        </div>
        <svg viewBox="0 0 1000 360" role="img" aria-labelledby="network-svg-title">
          <title id="network-svg-title">Animated workflow graph from preparation to coaching</title>
          <defs>
            <linearGradient id="mytNetworkLine" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#8ddfff" stopOpacity="0.18" />
              <stop offset="48%" stopColor="#8ddfff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#f7f0ce" stopOpacity="0.72" />
            </linearGradient>
            <radialGradient id="mytNodeGlow">
              <stop offset="0%" stopColor="#f7f0ce" stopOpacity="1" />
              <stop offset="45%" stopColor="#8ddfff" stopOpacity="0.62" />
              <stop offset="100%" stopColor="#8ddfff" stopOpacity="0" />
            </radialGradient>
          </defs>

          <g className="myt-network-grid" aria-hidden>
            {Array.from({ length: 9 }).map((_, index) => (
              <line key={"v-" + index} x1={70 + index * 110} x2={70 + index * 110} y1="42" y2="318" />
            ))}
            {Array.from({ length: 5 }).map((_, index) => (
              <line key={"h-" + index} x1="48" x2="952" y1={70 + index * 56} y2={70 + index * 56} />
            ))}
          </g>

          <g fill="none">
            {graphPaths.map((path) => (
              <path className="myt-network-path" d={path} pathLength="1" key={path} />
            ))}
            <path className="myt-network-flow" d={graphPaths[5]} pathLength="1" />
          </g>

          <g>
            {graphNodes.map((node) => (
              <g className="myt-network-node" key={node.label} transform={"translate(" + node.x + " " + node.y + ")"}>
                <circle r="28" className="myt-network-node-glow" />
                <circle r="8" className="myt-network-node-core" />
                <text x="0" y="-38" textAnchor="middle" className="myt-network-node-label">
                  {node.label}
                </text>
                <text x="0" y="46" textAnchor="middle" className="myt-network-node-value">
                  {node.value}
                </text>
              </g>
            ))}
          </g>
        </svg>
        <div className="myt-network-metrics" aria-label="Workflow metrics">
          <span>
            <strong>6</strong>
            linked stages
          </span>
          <span>
            <strong>4</strong>
            paid offer paths
          </span>
          <span>
            <strong>1</strong>
            repeatable method
          </span>
        </div>
      </div>
    </section>
  );
}
