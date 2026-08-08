import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  BookOpenCheck,
  Brain,
  CandlestickChart,
  Check,
  ChevronDown,
  ChevronRight,
  MonitorPlay,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Zap
} from "lucide-react";
import { HeroCommand } from "../../components/hero-command";
import { MarketGraph } from "../../components/market-graph";
import { MagneticCard, Reveal } from "../../components/reveal";

type PageProps = {
  params: Promise<{ path?: string[] }>;
};

const learningMenu = [
  { href: "/learning/indicators", label: "Indicators" },
  { href: "/learning/coaching", label: "Coaching" },
  { href: "/learning/courses", label: "Courses" }
];

const proofStats = [
  { value: "4", label: "commercial paths: courses, tools, room, coaching" },
  { value: "24/7", label: "course library for review outside market hours" },
  { value: "1", label: "clear operating system around futures execution" },
  { value: "0", label: "signal-room dependency or unrealistic performance claims" }
];

const offerCards = [
  {
    icon: UsersRound,
    badge: "Most active path",
    heading: "Live Discord trading room",
    text: "Trade around live futures context, structured prep, session review, and a room built for process instead of signal noise.",
    points: [
      "Daily market prep and live-session context",
      "Trade review, Q&A, and execution feedback",
      "Process-first support for serious futures traders"
    ],
    cta: "Join the room",
    href: "/community",
    variant: "community"
  },
  {
    icon: CandlestickChart,
    badge: "Indicator suite",
    heading: "Premium futures indicators",
    text: "Decision-support tools for levels, momentum, confluence, and trade location, styled for clarity under pressure.",
    points: [
      "Built for futures sessions and repeatable routines",
      "Cleaner context for entries, invalidation, and review",
      "Works alongside courses, coaching, and the live room"
    ],
    cta: "View indicators",
    href: "/learning/indicators",
    variant: "indicators"
  }
];

const tradingSystemSteps = [
  {
    label: "Prepare the read",
    text: "Courses and coaching build the market language, risk model, and session routine."
  },
  {
    label: "Execute with context",
    text: "Indicators and live-room prep help traders understand location, momentum, and timing."
  },
  {
    label: "Review the work",
    text: "The edge compounds after the trade: notes, screenshots, feedback, and discipline checks."
  }
];

const pillars = [
  {
    icon: MonitorPlay,
    label: "Live Market Room",
    text: "Session prep, trade context, execution criteria, and after-market review without signal-room noise.",
    href: "/community"
  },
  {
    icon: BookOpenCheck,
    label: "Courses",
    text: "A structured route from market structure to risk, execution, journaling, and psychology.",
    href: "/learning/courses"
  },
  {
    icon: CandlestickChart,
    label: "Indicators",
    text: "Visual decision support for momentum, levels, confluence, and trade location.",
    href: "/learning/indicators"
  },
  {
    icon: Brain,
    label: "Coaching",
    text: "Patience, discipline, and review habits for traders who need a tighter feedback loop.",
    href: "/learning/coaching"
  }
];

const playbook = [
  "Pre-market liquidity map",
  "Session bias with invalidation",
  "Entry checklist before risk",
  "Screenshot recap and journal notes"
];

const pricing = [
  {
    name: "Starter",
    price: "Free preview",
    text: "For traders who want to inspect the method before joining the full room.",
    points: ["Market prep sample", "Course outline", "Indicator walkthrough"],
    cta: "Preview the method"
  },
  {
    name: "MYT Room",
    price: "Core access",
    text: "For traders ready to build a repeatable process around live context and review.",
    points: ["Live sessions", "Member library", "Weekly review", "Community Q&A"],
    cta: "Request room access",
    featured: true
  },
  {
    name: "Edge Builder",
    price: "Coaching",
    text: "For traders who want closer feedback on execution, journaling, and psychology.",
    points: ["Private reviews", "Trade journal audits", "Personal playbook", "Priority feedback"],
    cta: "Apply for coaching"
  }
];

const faqs = [
  {
    question: "Is this a signal service?",
    answer:
      "No. MYT is process-first: context, decision criteria, risk, and review. Traders still make their own decisions."
  },
  {
    question: "Who is MYT for?",
    answer:
      "Futures traders who already know the market is hard and want a cleaner framework for learning, executing, and reviewing."
  },
  {
    question: "Where do indicators fit?",
    answer:
      "They support the read. The goal is cleaner context around levels, momentum, confluence, and trade location, not shortcut thinking."
  }
];

const footerNav = [
  { href: "/", label: "Home" },
  { href: "/learning/courses", label: "Courses" },
  { href: "/learning/indicators", label: "Indicators" },
  { href: "/community", label: "Community" },
  { href: "/pricing", label: "Pricing" }
];

const footerSocial = ["YouTube", "Instagram", "Discord", "X"];

const learningDetails = {
  indicators: {
    eyebrow: "Indicators",
    title: "Read market context with tools that support discipline.",
    text:
      "The indicator suite is positioned as decision support: momentum, levels, confluence, and trade location without turning the chart into noise.",
    image: "/webflow/usecase-dashboard-three.webp",
    points: ["Momentum and structure context", "Clean visual confluence", "Built for futures sessions"]
  },
  coaching: {
    eyebrow: "Coaching",
    title: "Turn execution into feedback, not frustration.",
    text:
      "Coaching gives traders a review loop around preparation, entries, risk, psychology, and post-session decisions.",
    image: "/webflow/dashboard-03.webp",
    points: ["Trade journal audits", "Execution review", "Personal playbook refinement"]
  },
  courses: {
    eyebrow: "Courses",
    title: "Follow a learning path that compounds.",
    text:
      "Courses organize market structure, risk, execution, journaling, and psychology into a route traders can actually follow.",
    image: "/webflow/features-card-02.webp",
    points: ["Market structure foundations", "Risk and execution modules", "Review systems and templates"]
  }
} as const;

export default async function MYTSitePage({ params }: PageProps) {
  const path = (await params).path ?? [];
  const route = path.join("/") || "home";

  return (
    <main className="myt-site">
      <Header />
      {route === "home" ? <HomePage /> : null}
      {route === "learning/indicators" ? <LearningDetailPage detail="indicators" /> : null}
      {route === "learning/coaching" ? <LearningDetailPage detail="coaching" /> : null}
      {route === "learning/courses" ? <LearningDetailPage detail="courses" /> : null}
      {route === "community" ? <CommunityPage /> : null}
      {route === "pricing" ? <PricingPage /> : null}
      {![
        "home",
        "learning/indicators",
        "learning/coaching",
        "learning/courses",
        "community",
        "pricing"
      ].includes(route) ? <HomePage /> : null}
      <SiteFooter />
    </main>
  );
}

function Header() {
  return (
    <header className="myt-header">
      <Link className="myt-brand" href="/" aria-label="Mind Your Trades home">
        <Image src="/brand/myt-logo.png" alt="MYT" width={360} height={151} priority />
        <span>Mind Your Trades</span>
      </Link>
      <nav className="myt-nav" aria-label="Main navigation">
        <Link href="/">Home</Link>
        <div className="myt-nav-dropdown">
          <button className="myt-nav-dropdown-trigger" type="button" aria-haspopup="true">
            Learning
            <ChevronDown size={14} aria-hidden />
          </button>
          <div className="myt-nav-dropdown-menu">
            {learningMenu.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <Link href="/community">Community</Link>
        <Link href="/pricing">Pricing</Link>
      </nav>
      <Link className="myt-header-cta" href="/pricing">
        Join the room
      </Link>
    </header>
  );
}

function HomePage() {
  return (
    <>
      <HeroCommand />
      <TradingTextBlock />
      <MarketGraph />
      <TradingFeatures />
      <LearningOverview />
      <ProductStory />
      <BrandProof />
      <FinalCta />
    </>
  );
}

function TradingFeatures() {
  return (
    <section
      className="features myt-features"
      data-top-spacing-mobile="none"
      data-bottom-spacing-mobile="regular"
      data-top-spacing-desktop="regular"
      data-bottom-spacing-desktop="large"
      style={{ "--theme-color": "var(--green)" } as CSSProperties}
    >
      <div className="features__container">
        <div className="myt-access-grid">
          {offerCards.map((feature) => {
              const Icon = feature.icon;

              return (
                <article className={"myt-access-card myt-access-card-" + feature.variant} key={feature.heading}>
                  <div className="myt-access-glow" aria-hidden />
                  <div className="myt-access-topline">
                    <div className="myt-access-icon">
                      <Icon size={30} aria-hidden />
                    </div>
                    <span>{feature.badge}</span>
                  </div>

                  <div className="myt-access-copy">
                    <h2>{feature.heading}</h2>
                    <p>{feature.text}</p>
                  </div>

                  <ul className="myt-access-points">
                    {feature.points.map((point) => (
                      <li key={point}>
                        <Check size={17} aria-hidden />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <Link className="myt-access-cta" href={feature.href}>
                    {feature.cta}
                    <ArrowRight size={18} aria-hidden />
                  </Link>
                </article>
              );
            })}
        </div>
      </div>
    </section>
  );
}

function TradingTextBlock() {
  return (
    <section
      className="text-block myt-text-block"
      data-background="black"
      data-align="center"
      data-align-mobile="center"
    >
      <div className="text-block__glow" data-position="left" style={{ "--vertical-position": "0%" } as CSSProperties} />
      <div className="text-block__container">
        <div className="myt-explainer">
          <div className="myt-explainer-copy">
            <p className="myt-kicker">Mind Your Trades in plain English</p>
            <h2>Method over mood.</h2>
            <p>
              Mind Your Trades is for futures traders who want a cleaner way to prepare, execute, and
              review. Courses teach the method. Indicators sharpen the read. The live room and coaching
              keep the work honest when the market gets loud.
            </p>
            <div className="myt-explainer-tags" aria-label="Mind Your Trades offer">
              <span>Courses</span>
              <span>Indicators</span>
              <span>Live room</span>
              <span>Coaching</span>
            </div>
          </div>

          <div className="myt-method-ledger" aria-label="Mind Your Trades method">
            <div className="myt-method-ledger-mark" aria-hidden>
              MYT
            </div>
            <div className="myt-method-ledger-head">
              <span>What the system gives you</span>
              <strong>No signals. No hype. Just cleaner preparation, execution, and review.</strong>
            </div>
            {tradingSystemSteps.map((step, index) => (
              <article className="myt-method-ledger-row" key={step.label}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{step.label}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LearningDetailPage({ detail }: { detail: keyof typeof learningDetails }) {
  const item = learningDetails[detail];
  return (
    <>
      <SubHero eyebrow={item.eyebrow} title={item.title} text={item.text} cta="Request access" href="/pricing" />
      <Reveal className="myt-showcase" as="section">
        <div className="myt-showcase-media myt-screen-frame">
          <Image src={item.image} alt="" width={1764} height={1454} sizes="(max-width: 900px) 100vw, 56vw" />
          <div className="myt-light-border" aria-hidden />
        </div>
        <div className="myt-showcase-copy">
          <p className="myt-kicker">{item.eyebrow}</p>
          <h2>Built for traders who want a process, not noise.</h2>
          <p>{item.text}</p>
          <div className="myt-checklist">
            {item.points.map((point) => (
              <span key={point}>
                <ShieldCheck size={18} aria-hidden />
                {point}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
      <FinalCta />
    </>
  );
}

function CommunityPage() {
  return (
    <>
      <SubHero
        eyebrow="Community"
        title="A live trading room built around context, review, and discipline."
        text="Join session prep, trade review, Q&A, psychology work, and a cleaner way to develop with serious futures traders."
        cta="Join the room"
        href="/pricing"
      />
      <Reveal className="myt-showcase myt-showcase-first" as="section">
        <div className="myt-showcase-media myt-screen-frame">
          <Image
            src="/webflow/usecase-dashboard.webp"
            alt="Trading use-case dashboard with analytics and chart interface."
            width={1764}
            height={1454}
            sizes="(max-width: 900px) 100vw, 56vw"
          />
          <div className="myt-light-border" aria-hidden />
        </div>
        <div className="myt-showcase-copy">
          <p className="myt-kicker">Live room</p>
          <h2>Walk into the session with a plan before price starts moving.</h2>
          <p>
            The room is built around preparation, execution criteria, live futures context,
            trade review, and the discipline to keep improving after the closing bell.
          </p>
          <div className="myt-checklist">
            {playbook.map((item) => (
              <span key={item}>
                <ShieldCheck size={18} aria-hidden />
                {item}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
      <Stats />
      <FinalCta />
    </>
  );
}

function PricingPage() {
  return (
    <>
      <SubHero
        eyebrow="Pricing"
        title="Choose the access path that matches your trading stage."
        text="Compare the preview, live room, and coaching routes, then request the level of support that fits your process."
        cta="Request access"
        href="mailto:hello@mindyourtrades.com"
      />
      <PricingSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}

function SubHero({ eyebrow, title, text, cta, href }: { eyebrow: string; title: string; text: string; cta: string; href: string }) {
  return (
    <section className="myt-subhero">
      <div>
        <p className="myt-kicker">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
        <Link className="myt-button myt-button-primary" href={href}>
          {cta}
          <ChevronRight size={18} aria-hidden />
        </Link>
      </div>
      <Image
        src="/webflow/hero-dashboard.webp"
        alt=""
        width={1440}
        height={985}
        priority
        sizes="(max-width: 900px) 100vw, 45vw"
      />
    </section>
  );
}

function Stats() {
  return (
    <Reveal className="myt-stats" as="section">
      {proofStats.map((stat) => (
        <div key={stat.value}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </Reveal>
  );
}

function LearningOverview() {
  return (
    <Reveal className="myt-section myt-method" as="section">
      <div className="myt-section-heading">
        <p className="myt-kicker">The MYT learning system</p>
        <h2>See the whole path before you commit to the room.</h2>
        <p>
          Prepare the market, execute with rules, review the decision, then improve the playbook with
          coaching, courses, live context, and tools.
        </p>
      </div>
      <div className="myt-pillar-grid">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <MagneticCard className="myt-pillar" key={pillar.label}>
              <Icon size={28} aria-hidden />
              <h3>{pillar.label}</h3>
              <p>{pillar.text}</p>
              <Link className="myt-text-link" href={pillar.href}>
                Open page
                <ArrowRight size={15} aria-hidden />
              </Link>
            </MagneticCard>
          );
        })}
      </div>
    </Reveal>
  );
}

function ProductStory() {
  return (
    <Reveal className="myt-showcase myt-showcase-first myt-renovation-showcase" as="section">
      <div className="myt-showcase-media myt-screen-frame">
        <Image
          src="/webflow/usecase-dashboard.webp"
          alt="Trading education dashboard with analytics and market context."
          width={1764}
          height={1454}
          sizes="(max-width: 900px) 100vw, 56vw"
        />
        <div className="myt-light-border" aria-hidden />
      </div>
      <div className="myt-showcase-copy">
        <p className="myt-kicker">The commercial core</p>
        <h2>Everything points back to a repeatable trading process.</h2>
        <p>
          MYT combines structured curriculum, decision-support tools, live market context, and
          coaching routes for traders who want a serious way to develop.
        </p>
        <div className="myt-checklist">
          {["Course path before claims", "Tools as decision support", "Live room as context, not signals"].map((item) => (
            <span key={item}>
              <ShieldCheck size={18} aria-hidden />
              {item}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function BrandProof() {
  return (
    <Reveal className="myt-split-proof" as="section">
      <div>
        <Image src="/webflow/trading-image-01.webp" alt="" width={566} height={622} />
        <Image src="/webflow/trading-image-02.webp" alt="" width={566} height={622} />
      </div>
      <article>
        <p className="myt-kicker">Premium trading brand posture</p>
        <h2>Serious enough to trust. Human enough to learn from.</h2>
        <p>
          The tone is calm by design: no loud claims, no unrealistic promises, just a clear path
          for traders who want structure, feedback, and better decisions.
        </p>
        <Link className="myt-button myt-button-secondary" href="/pricing">
          Compare access paths
          <ArrowRight size={18} aria-hidden />
        </Link>
      </article>
    </Reveal>
  );
}

function PricingSection() {
  return (
    <Reveal className="myt-pricing" as="section">
      <div className="myt-section-heading myt-centered">
        <p className="myt-kicker">Choose your access path</p>
        <h2>Start with the path that matches the way you trade.</h2>
        <p>Choose the preview, join the live room, or apply for closer coaching support.</p>
      </div>
      <div className="myt-pricing-grid">
        {pricing.map((plan) => (
          <MagneticCard className={plan.featured ? "myt-plan myt-plan-featured" : "myt-plan"} key={plan.name}>
            {plan.featured ? (
              <div className="myt-plan-badge">
                <Sparkles size={14} aria-hidden />
                Recommended
              </div>
            ) : null}
            <h3>{plan.name}</h3>
            <strong>{plan.price}</strong>
            <p>{plan.text}</p>
            <ul>
              {plan.points.map((point) => (
                <li key={point}>
                  <Check size={16} aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
            <Link className="myt-button myt-button-primary" href="mailto:hello@mindyourtrades.com">
              {plan.cta}
            </Link>
          </MagneticCard>
        ))}
      </div>
    </Reveal>
  );
}

function FaqSection() {
  return (
    <Reveal className="myt-faq" as="section">
      <div className="myt-section-heading">
        <p className="myt-kicker">Buyer questions</p>
        <h2>Clear answers before you request access.</h2>
      </div>
      <div className="myt-faq-list">
        {faqs.map((faq) => (
          <article key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>
    </Reveal>
  );
}

function FinalCta() {
  return (
    <section className="myt-apply" id="contact">
      <div>
        <Image src="/brand/myt-logo.png" alt="MYT" width={280} height={118} />
        <p className="myt-kicker">Precision. Discipline. Operating system.</p>
        <h2>For futures traders ready to learn the method, use the tools, and review the work.</h2>
      </div>
      <Link className="myt-button myt-button-primary" href="mailto:hello@mindyourtrades.com">
        Request access
        <UsersRound size={18} aria-hidden />
      </Link>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="myt-footer footer_component">
      <FooterPattern />
      <FooterSectionBorder />

      <FooterPattern variant="base" />
      <FooterSectionBorder />

      <div className="myt-footer-container">
        <div className="footer_inner">
          <div className="footer_body">
            <div className="footer_top">
              <div className="footer_main">
                <Link aria-label="Mind Your Trades home" className="footer_logo-link" href="/">
                  <Image src="/brand/myt-logo.png" alt="MYT" width={360} height={151} />
                </Link>
                <p className="footer_p">
                  Courses, tools, live context, and coaching for futures traders building a
                  repeatable process.
                </p>
              </div>

              <nav aria-label="Footer navigation" className="footer_nav">
                <ul className="footer_nav_list">
                  {footerNav.map((item) => (
                    <li className="footer_nav_item" key={item.href}>
                      <Link className="footer_nav_link" href={item.href}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="footer_bottom">
              <nav aria-label="Social links" className="footer_social">
                <ul className="footer_social_list">
                  {footerSocial.map((item) => (
                    <li className="footer_social_item" key={item}>
                      <span className="footer_social_link">{item}</span>
                    </li>
                  ))}
                </ul>
              </nav>

              <Link className="footer_cta" href="/pricing">
                Join the next cohort
                <Zap size={16} aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FooterSectionBorder />

      <div className="myt-footer-container">
        <div className="footer_legal_wrap">
          <div className="footer_legal_text">© 2026 Mind Your Trades. All rights reserved.</div>
          <nav aria-label="Legal navigation" className="footer_nav">
            <ul className="footer_nav_list">
              <li className="footer_nav_item">
                <Link className="footer_nav_link" href="/privacy-policy">
                  Privacy policy
                </Link>
              </li>
              <li className="footer_nav_item">
                <Link className="footer_nav_link" href="/terms-conditions">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="footer_editorial_line" aria-hidden>
        {Array.from({ length: 7 }).map((_, index) => (
          <span key={index}>Mind Your Trades</span>
        ))}
      </div>

      <div className="footer_marquee_wrap" aria-hidden>
        <div className="footer_marquee_inner">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="footer_marquee_item" key={index}>
              <span>Mind Your Trades</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FooterPattern({ variant = "inverse" }: { variant?: "inverse" | "base" }) {
  return (
    <div data-pattern-divider-variant={variant} className="pattern_component footer_pattern" aria-hidden>
      <div className="pattern_wrap">
        <div className="pattern_track">
          <FooterPatternInner />
          <FooterPatternInner />
        </div>
      </div>
      <div className="pattern_wrap">
        <div className="pattern_track is-reverse">
          <FooterPatternInner variant="reverse" />
          <FooterPatternInner variant="reverse" />
        </div>
      </div>
      <div className="pattern_wrap">
        <div className="pattern_track">
          <FooterPatternInner variant="alternate" />
          <FooterPatternInner variant="alternate" />
        </div>
      </div>
    </div>
  );
}

function FooterPatternInner({ variant = "base" }: { variant?: "base" | "reverse" | "alternate" }) {
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

function FooterSectionBorder() {
  return (
    <div className="section-border_wrap footer_section-border" aria-hidden>
      <div className="section-border_bg" />
      <div className="section-border_container">
        <div className="section-border_inner">
          <div className="section-border_square" />
          <div className="section-border_square is-right" />
        </div>
      </div>
    </div>
  );
}
