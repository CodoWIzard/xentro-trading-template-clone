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

export function MarketGraph() {
  return (
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
  );
}
