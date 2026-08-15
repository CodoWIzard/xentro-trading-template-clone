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
  UsersRound
} from "lucide-react";
import { HeroCommand } from "../../components/hero-command";
import { MarketGraph } from "../../components/market-graph";
import { MagneticCard, Reveal } from "../../components/reveal";

type PageProps = {
  params: Promise<{ path?: string[] }>;
};

const learningMenu = [
  { href: "/learning/indicators", label: "Tools" },
  { href: "/learning/coaching", label: "Coaching" },
  { href: "/learning/courses", label: "Courses soon" }
];

const whopUrl = "https://whop.com/joined/mind-your-trades/";

const proofStats = [
  { value: "5", label: "MYT framework stages before, during, and after every trade" },
  { value: "4", label: "learning tracks covering foundations, price action, system, and mindset" },
  { value: "1:1", label: "coaching for discipline, execution, and trading behavior" },
  { value: "0", label: "signals, copy trading, shortcuts, or unrealistic performance claims" }
];

const offerCards = [
  {
    icon: BookOpenCheck,
    badge: "MYT Learning",
    heading: "Learn to read the market",
    text: "Education built around Renko, ATR, volume, structure, pivots, trend, pullbacks, ranges, liquidity, risk, and review.",
    points: [
      "Market foundations without signal dependency",
      "Price action and condition reading",
      "Mindset lessons that connect to execution"
    ],
    cta: "Explore learning",
    href: "/learning/courses",
    variant: "community"
  },
  {
    icon: CandlestickChart,
    badge: "MYT Tools",
    heading: "Reduce decisions, not add noise",
    text: "Purpose-built TradingView tools that help identify market conditions, structure, volume pressure, and key levels.",
    points: [
      "Market condition and structure support",
      "Volume pressure and key level context",
      "Built to support intent before entry"
    ],
    cta: "View tools",
    href: "/learning/indicators",
    variant: "indicators"
  },
  {
    icon: UsersRound,
    badge: "MYT Coaching",
    heading: "Train the trader behind the trade",
    text: "Personal coaching focused on trading behavior, discipline, rules, risk, and execution.",
    points: [
      "Identify the habits causing impulsive trades",
      "Build rules and conditions you can actually follow",
      "Review behavior, not just entries and exits"
    ],
    cta: "Explore coaching",
    href: "/learning/coaching",
    variant: "coaching"
  }
];

const methodFramework = [
  { number: "01", title: "Context", text: "What is the market doing?" },
  { number: "02", title: "Condition", text: "Is this market tradable?" },
  { number: "03", title: "Setup", text: "What am I waiting for?" },
  { number: "04", title: "Execution", text: "Entry. Risk. Exit." },
  { number: "05", title: "Review", text: "Did I follow my rules?" }
];

const learningTracks = [
  { title: "Market Foundations", text: "Renko, ATR, volume, structure, and pivots." },
  { title: "Price Action", text: "Trend, pullbacks, ranges, and liquidity." },
  { title: "Trading System", text: "Setup, entry, stops, targets, and risk." },
  { title: "Mindset", text: "FOMO, discipline, patience, and review." }
];

const toolSignals = [
  { title: "Market Conditions", text: "Is the market worth trading?" },
  { title: "Market Structure", text: "Where is price actually moving?" },
  { title: "Volume Pressure", text: "Who is controlling the market?" },
  { title: "Key Levels", text: "Where could price react?" }
];

const intentChecklist = [
  "Market trending?",
  "ATR above minimum?",
  "Price at relevant level?",
  "Setup confirmed?",
  "Risk within limits?"
];

const operatingSystem = [
  { label: "Market", text: "What do I trade?" },
  { label: "Conditions", text: "When can I trade?" },
  { label: "Setup", text: "What am I waiting for?" },
  { label: "Risk", text: "How much do I risk?" },
  { label: "Execution", text: "How do I manage?" },
  { label: "Review", text: "How do I improve?" }
];

const pillars = [
  {
    icon: Brain,
    label: "Context Before Entry",
    text: "Trade ideas start with market context, not emotion, urgency, or a random chart reaction.",
    href: "/learning/coaching"
  },
  {
    icon: CandlestickChart,
    label: "Conditions Before Action",
    text: "A trade only makes sense when the environment, level, setup, and risk are aligned.",
    href: "/learning/indicators"
  },
  {
    icon: MonitorPlay,
    label: "Intent Before Impulse",
    text: "The MYT Intent Engine turns the chart into a decision process instead of a reaction trigger.",
    href: whopUrl
  },
  {
    icon: BookOpenCheck,
    label: "Review Before Growth",
    text: "Progress comes from reviewing rule-following, not only entries, exits, or short-term outcomes.",
    href: "/learning/courses"
  }
];

const playbook = [
  "Only trade when conditions are met",
  "Separate intent from impulse",
  "Review the rule you broke",
  "Train patience before execution"
];

const pricing = [
  {
    name: "MYT Learning",
    price: "Learn",
    text: "For traders who want to understand the market instead of depending on someone else's signals.",
    points: ["Market foundations", "Price action", "Trading system", "Mindset modules"],
    cta: "Start learning"
  },
  {
    name: "MYT Tools",
    price: "Tools",
    text: "For traders who want practical resources that support cleaner decisions and proper conditions.",
    points: ["Market conditions", "Structure context", "Volume pressure", "Key levels"],
    cta: "View tools",
    featured: true
  },
  {
    name: "MYT Coaching",
    price: "1:1",
    text: "For traders who want direct support with discipline, execution habits, and rule-following.",
    points: ["Private feedback", "Behavior review", "Trading rules", "Accountability"],
    cta: "View on Whop"
  }
];

const faqs = [
  {
    question: "Is this a signal service?",
    answer:
      "No. MYT is positioned around education, conditions, tools, discipline, and execution. No signals, no copy trading, and no shortcuts."
  },
  {
    question: "Who is MYT for?",
    answer:
      "Futures traders who want to stop chasing trades and build a repeatable process around context, conditions, setup, execution, and review."
  },
  {
    question: "Where do the tools fit?",
    answer:
      "MYT tools support market conditions, structure, volume pressure, key levels, and intent. They should reduce decisions, not create more of them."
  }
];

const footerNav = [
  { href: "/", label: "Home" },
  { href: "/learning/courses", label: "Courses" },
  { href: "/learning/indicators", label: "Tools" },
  { href: "/learning/coaching", label: "Coaching" },
  { href: "/pricing", label: "Whop" }
];

const footerSocial = ["YouTube", "Instagram", "Discord", "X"];

const footerHighlights = [
  "Mindset-first futures coaching",
  "Intent engines and trading tools",
  "Whop hub for services and access"
];

const learningDetails = {
  indicators: {
    eyebrow: "Tools",
    title: "Tools should reduce decisions. Not create more of them.",
    text:
      "MYT tools and intent engines help traders identify market conditions, structure, volume pressure, and key levels before they act.",
    image: "/webflow/usecase-dashboard-three.webp",
    points: ["Market conditions", "Market structure", "Volume pressure", "Key levels"]
  },
  coaching: {
    eyebrow: "Coaching",
    title: "Your strategy is not always the problem. Your execution might be.",
    text:
      "1:1 coaching focuses on trading behavior, discipline, rules, risk, and execution. No signals, no copy trading, no shortcuts.",
    image: "/webflow/dashboard-03.webp",
    points: ["Behavior review", "Rule-building", "Risk discipline", "Execution feedback"]
  },
  courses: {
    eyebrow: "Learning",
    title: "Learn to read the market. Not someone else's signals.",
    text:
      "MYT learning covers market foundations, price action, trading system design, and mindset so futures traders can build a process.",
    image: "/webflow/features-card-02.webp",
    points: ["Renko, ATR, volume, structure, pivots", "Trend, pullbacks, ranges, liquidity", "Setup, entry, stops, targets, risk"]
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
        <Link href="/learning/coaching">Coaching</Link>
        <Link href="/pricing">Whop</Link>
      </nav>
      <Link className="myt-header-cta" href={whopUrl} rel="noreferrer" target="_blank">
        View Whop
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
      <MethodFramework />
      <LearningOverview />
      <TradingFeatures />
      <IntentEngine />
      <OperatingSystem />
      <ProductStory />
      <BrandProof />
      <Stats />
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
          {offerCards.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <article
                  className={"myt-access-card myt-access-card-" + feature.variant}
                  data-index={"0" + (index + 1)}
                  key={feature.heading}
                >
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
            <h2>Most traders do not need another strategy. They need a better process.</h2>
            <p>
              You follow your plan until you do not. You chase a breakout, enter too early,
              move your stop, or trade conditions that do not fit your setup. MYT was built
              to replace that loop with a repeatable trading process.
            </p>
            <div className="myt-explainer-tags" aria-label="Mind Your Trades offer">
              <span>Context</span>
              <span>Conditions</span>
              <span>Setup</span>
              <span>Execution</span>
              <span>Review</span>
            </div>
          </div>

          <div className="myt-problem-stack" aria-label="Trading problems MYT helps solve">
            {[
              "You chase a breakout.",
              "You enter too early.",
              "You move your stop.",
              "You trade the wrong conditions."
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
            <strong>The problem is not always your strategy. It is the lack of a process.</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function MethodFramework() {
  return (
    <Reveal className="myt-section myt-framework-section" as="section">
      <div className="myt-section-heading myt-centered">
        <p className="myt-kicker">The MYT Framework</p>
        <h2>Trade the process. Not the impulse.</h2>
        <p>
          Every trade starts before the entry. MYT turns the trading day into a sequence
          of decisions that can be followed, reviewed, and improved.
        </p>
      </div>
      <div className="myt-framework-grid">
        {methodFramework.map((step) => (
          <article className="myt-framework-card" key={step.title}>
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </Reveal>
  );
}

function IntentEngine() {
  return (
    <Reveal className="myt-intent-engine" as="section">
      <div className="myt-intent-copy">
        <p className="myt-kicker">MYT Intent Engine</p>
        <h2>Your chart tells you what price is doing. Your Intent Engine tells you what you are allowed to do.</h2>
        <p>
          The point is not to add another indicator to stare at. It is to turn market
          conditions, setup, and risk into a clear yes-or-no decision before emotion takes over.
        </p>
      </div>
      <div className="myt-intent-panel" aria-label="MYT Intent Engine checklist">
        {intentChecklist.map((item) => (
          <div className="myt-intent-row" key={item}>
            <span>{item}</span>
            <Check size={18} aria-hidden />
          </div>
        ))}
        <div className="myt-intent-status">
          <strong>Trade allowed</strong>
          <span>Conditions before entries.</span>
        </div>
      </div>
    </Reveal>
  );
}

function OperatingSystem() {
  return (
    <Reveal className="myt-section myt-operating-system" as="section">
      <div className="myt-section-heading">
        <p className="myt-kicker">Build your Trading Operating System</p>
        <h2>Your rules. Your process. Your edge.</h2>
        <p>
          MYT gives visitors a practical mental model: the trader needs a system for market
          selection, conditions, setup, risk, execution, and review.
        </p>
      </div>
      <div className="myt-os-grid">
        {operatingSystem.map((item) => (
          <article className="myt-os-card" key={item.label}>
            <h3>{item.label}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </Reveal>
  );
}

function LearningTracks() {
  return (
    <div className="myt-learning-tracks">
      {learningTracks.map((track) => (
        <article key={track.title}>
          <h3>{track.title}</h3>
          <p>{track.text}</p>
        </article>
      ))}
    </div>
  );
}

function ToolSignalList() {
  return (
    <div className="myt-tool-signals">
      {toolSignals.map((tool) => (
        <div key={tool.title}>
          <strong>{tool.title}</strong>
          <span>{tool.text}</span>
        </div>
      ))}
    </div>
  );
}

function LearningDetailPage({ detail }: { detail: keyof typeof learningDetails }) {
  const item = learningDetails[detail];
  return (
    <>
      <SubHero eyebrow={item.eyebrow} title={item.title} text={item.text} cta="Open Whop" href={whopUrl} />
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
        title="Find MYT where the services are sold."
        text="The website gives Mind Your Trades a professional home. Whop remains the practical hub for buying access, tools, coaching, and future offers."
        cta="Open Whop"
        href={whopUrl}
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
          <p className="myt-kicker">Whop hub</p>
          <h2>A simple bridge from discovery to paid access.</h2>
          <p>
            MYT does not need to look like a massive platform yet. It needs to feel credible,
            focused, and easy to trust before a visitor clicks through to Whop.
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
        title="View the current MYT offers on Whop."
        text="Coaching, tools, and future paid education can live on Whop while the website stays clean, professional, and easy to find."
        cta="Open Whop"
        href={whopUrl}
      />
      <PricingSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}

function SubHero({ eyebrow, title, text, cta, href }: { eyebrow: string; title: string; text: string; cta: string; href: string }) {
  const isExternal = href.startsWith("http");

  return (
    <section className="myt-subhero">
      <div>
        <p className="myt-kicker">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
        <Link
          className="myt-button myt-button-primary"
          href={href}
          rel={isExternal ? "noreferrer" : undefined}
          target={isExternal ? "_blank" : undefined}
        >
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
        <p className="myt-kicker">MYT Learning</p>
        <h2>Learn to read the market. Not someone else&apos;s signals.</h2>
        <p>
          MYT does not teach visitors what to trade. It teaches them how to think about
          trading through foundations, price action, trading system design, and mindset.
        </p>
      </div>
      <LearningTracks />
      <div className="myt-pillar-grid">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <MagneticCard className="myt-pillar" key={pillar.label}>
              <Icon size={28} aria-hidden />
              <h3>{pillar.label}</h3>
              <p>{pillar.text}</p>
              <Link
                className="myt-text-link"
                href={pillar.href}
                rel={pillar.href.startsWith("http") ? "noreferrer" : undefined}
                target={pillar.href.startsWith("http") ? "_blank" : undefined}
              >
                {pillar.href.startsWith("http") ? "Open Whop" : "Open page"}
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
        <p className="myt-kicker">MYT Tools</p>
        <h2>Tools should reduce decisions. Not create more of them.</h2>
        <p>
          Purpose-built TradingView tools help identify market conditions, structure,
          volume pressure, and key levels without turning the chart into noise.
        </p>
        <ToolSignalList />
        <div className="myt-checklist">
          {["Designed around conditions and intent", "Supports decision-making before entry", "Available through the MYT Whop hub"].map((item) => (
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
        <p className="myt-kicker">MYT Coaching</p>
        <h2>Your strategy is not always the problem. Your execution might be.</h2>
        <p>
          Personal coaching focuses on trading behavior, discipline, rules, risk, and execution.
          MYT does not tell traders what to buy or sell. It helps them become traders who know
          when to trade and when not to.
        </p>
        <p className="myt-no-shortcuts">No signals. No copy trading. No shortcuts.</p>
        <Link className="myt-button myt-button-secondary" href={whopUrl} rel="noreferrer" target="_blank">
          Explore coaching
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
        <h2>Current services live on Whop. The website makes them easier to find.</h2>
        <p>Use this page as a professional bridge to coaching, tools, and future MYT products.</p>
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
            <Link className="myt-button myt-button-primary" href={whopUrl} rel="noreferrer" target="_blank">
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
        <h2>Clear answers before visitors continue to Whop.</h2>
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
        <p className="myt-kicker">Mindset. Conditions. Discipline.</p>
        <h2>Learn the market. Build your edge. Master your execution.</h2>
      </div>
      <Link className="myt-button myt-button-primary" href={whopUrl} rel="noreferrer" target="_blank">
        Start learning
        <UsersRound size={18} aria-hidden />
      </Link>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="myt-footer footer_component">
      <div className="myt-footer-container">
        <div className="footer_inner">
          <div className="footer_body">
            <div className="footer_grid">
              <div className="footer_main">
                <Link aria-label="Mind Your Trades home" className="footer_logo-link" href="/">
                  <Image src="/brand/myt-logo.png" alt="MYT" width={360} height={151} />
                </Link>
                <p className="footer_p">
                  Learning, TradingView tools, and coaching for futures traders who want a
                  repeatable process instead of another impulse-driven trade.
                </p>
                <ul className="footer_highlights" aria-label="Mind Your Trades footer highlights">
                  {footerHighlights.map((item) => (
                    <li key={item}>
                      <Check size={15} aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <nav aria-label="Footer navigation" className="footer_nav footer_column">
                <span>Explore</span>
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

              <div className="footer_column">
                <span>Access paths</span>
                <div className="footer_access_list">
                  <Link href="/learning/coaching">1:1 coaching</Link>
                  <Link href="/learning/indicators">Intent engines</Link>
                  <Link href={whopUrl} rel="noreferrer" target="_blank">Whop hub</Link>
                  <Link href="/learning/courses">Courses soon</Link>
                </div>
              </div>

              <aside className="footer_panel" aria-label="Request MYT access">
                <span>Next step</span>
                <h2>Ready to train the mindset behind your trades?</h2>
                <p>Open the Whop hub to view MYT learning, tools, coaching, and access.</p>
                <Link className="myt-button myt-button-primary" href={whopUrl} rel="noreferrer" target="_blank">
                  Start learning
                  <ArrowRight size={18} aria-hidden />
                </Link>
              </aside>
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

              <div className="footer_legal_cluster">
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
          </div>
        </div>
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
