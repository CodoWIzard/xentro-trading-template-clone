const marqueeItems = [
  { className: "h-marquee_item is-n", label: "MYT market network chart N" },
  { className: "h-marquee_item is-r", label: "MYT market network chart R" }
];

function MarqueeInner() {
  return (
    <div className="h-marquee_inner">
      {marqueeItems.map((item) => (
        <span className={item.className} role="img" aria-label={item.label} key={item.className} />
      ))}
    </div>
  );
}

function PatternInner({ variant = "base" }: { variant?: "base" | "reverse" | "alternate" }) {
  if (variant === "reverse") {
    return (
      <div className="pattern_inner">
        <div className="pattern_line is-medium" />
        <div className="pattern_line is-long is-green" />
        <div className="pattern_line is-medium" />
        <div className="pattern_line is-long is-red" />
      </div>
    );
  }

  if (variant === "alternate") {
    return (
      <div className="pattern_inner">
        <div className="pattern_line is-red" />
        <div className="pattern_line is-long" />
        <div className="pattern_line is-green" />
        <div className="pattern_line is-long" />
      </div>
    );
  }

  return (
    <div className="pattern_inner">
      <div className="pattern_line is-green" />
      <div className="pattern_line is-long" />
      <div className="pattern_line is-red" />
      <div className="pattern_line is-long" />
    </div>
  );
}

function PatternTrack({ reverse = false, variant = "base" }: { reverse?: boolean; variant?: "base" | "reverse" | "alternate" }) {
  return (
    <div className={reverse ? "pattern_track is-reverse" : "pattern_track"}>
      <PatternInner variant={variant} />
      <PatternInner variant={variant} />
    </div>
  );
}

function PatternDivider() {
  return (
    <div data-pattern-divider-variant="inverse" className="pattern_component" aria-hidden>
      <div className="pattern_wrap">
        <PatternTrack />
      </div>
      <div className="pattern_wrap">
        <PatternTrack reverse variant="reverse" />
      </div>
      <div className="pattern_wrap">
        <PatternTrack variant="alternate" />
      </div>
    </div>
  );
}

export function MarketGraph() {
  return (
    <>
      <section className="section_h-marquee" aria-label="Animated MYT market map marquee">
        <div className="h-marquee_wrap">
          <div className="h-marquee_track">
            <MarqueeInner />
            <MarqueeInner />
          </div>
          <div className="h-marquee_overlay" aria-hidden />
        </div>
        <div className="section-border_wrap" aria-hidden>
          <div className="section-border_bg" />
          <div className="section-border_container">
            <div className="section-border_inner">
              <div className="section-border_square" />
              <div className="section-border_square is-right" />
            </div>
          </div>
        </div>
      </section>
      <PatternDivider />
    </>
  );
}
