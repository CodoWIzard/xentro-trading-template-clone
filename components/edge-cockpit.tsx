"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, CheckCircle2, Gauge, LineChart, LockKeyhole, MousePointer2 } from "lucide-react";

const cockpitRows = [
  { label: "Context", value: "London high swept", tone: "cyan" },
  { label: "Bias", value: "Long only above VWAP", tone: "green" },
  { label: "Risk", value: "0.5R until confirmation", tone: "gold" }
];

const checklist = ["Session plan written", "Invalidation defined", "Review slot booked"];

export function EdgeCockpit() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.aside
      className="edge-cockpit"
      aria-label="Interactive MYT edge cockpit preview"
      initial={reduceMotion ? false : { opacity: 0, y: 28, rotateX: 8 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
    >
      <div className="edge-cockpit-topbar">
        <span />
        <span />
        <span />
        <strong>MYT EDGE OS</strong>
      </div>
      <div className="edge-cockpit-grid">
        <motion.div
          className="edge-orb"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          <div>
            <Gauge size={24} aria-hidden />
            <strong>84</strong>
            <span>Plan quality</span>
          </div>
        </motion.div>
        <div className="edge-chart">
          <div className="edge-chart-head">
            <LineChart size={18} aria-hidden />
            <span>NQ prep model</span>
          </div>
          <svg viewBox="0 0 360 160" role="img" aria-label="Stylized trading setup line chart">
            <path d="M18 118 C58 92 70 112 104 84 C136 58 154 84 184 70 C220 52 238 36 268 52 C302 70 316 38 344 24" />
            <path d="M18 132 L344 132" />
            <circle cx="268" cy="52" r="6" />
          </svg>
        </div>
      </div>
      <div className="edge-cockpit-rows">
        {cockpitRows.map((row) => (
          <motion.div className={"edge-row edge-row-" + row.tone} key={row.label} whileHover={reduceMotion ? undefined : { x: 8 }}>
            <span>{row.label}</span>
            <strong>{row.value}</strong>
          </motion.div>
        ))}
      </div>
      <div className="edge-cockpit-bottom">
        <div>
          <Activity size={18} aria-hidden />
          <span>Live room opens in 12m</span>
        </div>
        <div>
          <LockKeyhole size={18} aria-hidden />
          <span>Rules before entry</span>
        </div>
      </div>
      <div className="edge-checklist">
        {checklist.map((item) => (
          <span key={item}>
            <CheckCircle2 size={16} aria-hidden />
            {item}
          </span>
        ))}
      </div>
      <div className="edge-cursor-hint">
        <MousePointer2 size={14} aria-hidden />
        Hover the cockpit
      </div>
    </motion.aside>
  );
}
