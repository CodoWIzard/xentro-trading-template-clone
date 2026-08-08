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
  { value: "1:1", label: "coaching for discipline, execution, and trading behavior" },
  { value: "Tools", label: "intent engines and trading resources sold through Whop" },
  { value: "Soon", label: "course material planned as the brand grows" },
  { value: "0", label: "signal selling or unrealistic performance claims" }
];

const offerCards = [
  {
    icon: UsersRound,
    badge: "Core offer",
    heading: "1:1 mindset coaching",
    text: "Personal coaching for traders who know their biggest problem is not another strategy, but discipline under pressure.",
    points: [
      "Identify the habits causing impulsive trades",
      "Build rules and conditions you can actually follow",
      "Review behavior, not just entries and exits"
    ],
    cta: "Explore coaching",
    href: "/learning/coaching",
    variant: "community"
  },
  {
    icon: CandlestickChart,
    badge: "Paid tools",
    heading: "Intent engines and trading tools",
    text: "Practical tools that support rule-based trading decisions without turning the chart into another source of noise.",
    points: [
      "Designed around conditions, intent, and restraint",
      "Supports the trader's decision-making process",
      "Available through the MYT Whop hub"
    ],
    cta: "View tools",
    href: "/learning/indicators",
    variant: "indicators"
  }
];

const tradingSystemSteps = [
  {
    label: "Spot the pattern",
    text: "The work starts by identifying the emotional loops: chasing, forcing, hesitating, revenge trading, or ignoring conditions."
  },
  {
    label: "Install conditions",
    text: "MYT centers the trader around clear rules, market conditions, and intent before a trade is allowed to happen."
  },
  {
    label: "Rewire the reaction",
    text: "Coaching and review make the trading day less about prediction and more about repeating the right behavior."
  }
];

const pillars = [
  {
    icon: Brain,
    label: "Mindset Coaching",
    text: "1:1 support for traders who need to rebuild discipline, patience, and rule-following under pressure.",
    href: "/learning/coaching"
  },
  {
    icon: CandlestickChart,
    label: "Intent Engines",
    text: "Decision-support tools built around conditions and intent, not hype or blind signals.",
    href: "/learning/indicators"
  },
  {
    icon: MonitorPlay,
    label: "Whop Hub",
    text: "The current place to view and buy MYT access, tools, and available services.",
    href: whopUrl
  },
  {
    icon: BookOpenCheck,
    label: "Courses Coming",
    text: "Education can grow later without the homepage pretending a full course ecosystem already exists.",
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
    name: "Mindset Coaching",
    price: "1:1",
    text: "For traders who want direct support with discipline, execution habits, and rule-following.",
    points: ["Private feedback", "Behavior review", "Trading rules", "Accountability"],
    cta: "View on Whop"
  },
  {
    name: "Intent Engines",
    price: "Tools",
    text: "For traders who want practical resources that support cleaner decisions and proper conditions.",
    points: ["Intent tools", "Rule support", "Decision context", "Whop access"],
    cta: "View tools",
    featured: true
  },
  {
    name: "Courses",
    price: "Future",
    text: "For future buyers once MYT expands the material into paid course products.",
    points: ["Mindset lessons", "Rule systems", "Execution modules", "Future library"],
    cta: "Check updates"
  }
];

const faqs = [
  {
    question: "Is this a signal service?",
    answer:
      "No. MYT is positioned around discipline, mindset, conditions, and tools. Traders are expected to make their own decisions."
  },
  {
    question: "Who is MYT for?",
    answer:
      "Futures traders who already understand that mindset, patience, and rule-following are usually the real bottleneck."
  },
  {
    question: "Where do the tools fit?",
    answer:
      "Tools such as intent engines support decision-making and conditions. They should reinforce discipline, not replace judgment."
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
    title: "Use tools that reinforce discipline instead of replacing it.",
    text:
      "MYT tools and intent engines are framed as decision support for traders who want clearer conditions before they act.",
    image: "/webflow/usecase-dashboard-three.webp",
    points: ["Intent and condition support", "Cleaner decision context", "Built to reduce impulsive trading"]
  },
  coaching: {
    eyebrow: "Coaching",
    title: "Rebuild the trading behavior behind the trade.",
    text:
      "1:1 coaching focuses on the mindset side of trading: patience, rule-following, discipline, and the reactions that show up under pressure.",
    image: "/webflow/dashboard-03.webp",
    points: ["Mindset and discipline review", "Rule-building", "Personal trading behavior feedback"]
  },
  courses: {
    eyebrow: "Courses",
    title: "Courses can become the next layer of the MYT brand.",
    text:
      "Courses are positioned as future paid education, so the website can mention them without making the brand look bigger than it is today.",
    image: "/webflow/features-card-02.webp",
    points: ["Future paid lessons", "Mindset frameworks", "Rules and execution modules"]
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
            <h2>Mindset over impulse.</h2>
            <p>
              Mind Your Trades is a professional home for traders who need help with the part
              that usually breaks first: discipline. The brand points people to coaching,
              practical tools, and future education without pretending to be a giant academy on day one.
            </p>
            <div className="myt-explainer-tags" aria-label="Mind Your Trades offer">
              <span>1:1 coaching</span>
              <span>Intent engines</span>
              <span>Whop access</span>
              <span>Courses later</span>
            </div>
          </div>

          <div className="myt-method-ledger" aria-label="Mind Your Trades method">
            <div className="myt-method-ledger-mark" aria-hidden>
              MYT
            </div>
            <div className="myt-method-ledger-head">
              <span>The MYT focus</span>
              <strong>Rules before reactions. Conditions before entries. Mindset before size.</strong>
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
        <p className="myt-kicker">What MYT offers now</p>
        <h2>A clear brand home for coaching, tools, and future education.</h2>
        <p>
          The homepage should not over-explain a product that is still growing. It should make the
          current offer obvious and give visitors enough trust to continue to Whop.
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
        <p className="myt-kicker">The commercial core</p>
        <h2>Sell the transformation, not a long list of features.</h2>
        <p>
          The real promise is not another chart setup. It is helping traders stop breaking their
          own rules, follow conditions, and build a calmer relationship with execution.
        </p>
        <div className="myt-checklist">
          {["1:1 coaching as the anchor", "Tools that support intent", "Courses introduced as a future layer"].map((item) => (
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
        <p className="myt-kicker">Professional brand posture</p>
        <h2>A credible front door for a founder-led trading brand.</h2>
        <p>
          For a young offer, the website should do less pretending and more positioning: who it is for,
          what can be bought now, where to buy it, and why the mindset angle matters.
        </p>
        <Link className="myt-button myt-button-secondary" href={whopUrl} rel="noreferrer" target="_blank">
          View Whop offers
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
        <h2>For futures traders ready to stop reacting and start following rules.</h2>
      </div>
      <Link className="myt-button myt-button-primary" href={whopUrl} rel="noreferrer" target="_blank">
        View Whop
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
                  Mindset-first coaching and trading tools for futures traders who want to follow
                  rules instead of impulses.
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
                <p>Open the Whop hub to view current coaching, tools, and MYT access.</p>
                <Link className="myt-button myt-button-primary" href={whopUrl} rel="noreferrer" target="_blank">
                  View Whop
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
