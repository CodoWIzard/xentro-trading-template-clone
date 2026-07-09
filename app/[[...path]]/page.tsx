import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BookOpenCheck,
  Brain,
  CandlestickChart,
  Check,
  ChevronDown,
  ChevronRight,
  MonitorPlay,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Zap
} from "lucide-react";
import { MagneticCard, Reveal } from "../../components/reveal";
import { EdgeCockpit } from "../../components/edge-cockpit";

type PageProps = {
  params: Promise<{ path?: string[] }>;
};

const learningMenu = [
  { href: "/learning/indicators", label: "Indicators" },
  { href: "/learning/coaching", label: "Coaching" },
  { href: "/learning/courses", label: "Courses" }
];

const marketTape = [
  "Premium futures trading course",
  "Live futures trading room",
  "NQ and ES session prep",
  "Trading psychology",
  "Risk management",
  "Futures trading indicators",
  "Trade review",
  "Repeatable trading process"
];

const proofStats = [
  { value: "4", label: "connected paths: live room, courses, indicators, and coaching" },
  { value: "24/7", label: "member library for replay, preparation, and post-session review" },
  { value: "1", label: "calm operating system for futures traders building discipline" },
  { value: "0", label: "blind signal chasing, hype claims, or shortcut positioning" }
];

const pillars = [
  {
    icon: MonitorPlay,
    label: "Live Market Room",
    text: "Daily futures context, session prep, trade criteria, Q&A, and after-market review without signal noise.",
    href: "/community"
  },
  {
    icon: BookOpenCheck,
    label: "Courses",
    text: "A structured route through market structure, risk, execution, journaling, and trading psychology.",
    href: "/learning/courses"
  },
  {
    icon: CandlestickChart,
    label: "Indicators",
    text: "Clean visual decision support for momentum, levels, confluence, and trade location.",
    href: "/learning/indicators"
  },
  {
    icon: Brain,
    label: "Coaching",
    text: "Personal review loops for patience, discipline, rule-following, and sharper execution habits.",
    href: "/learning/coaching"
  }
];

const playbook = [
  "Pre-market liquidity and level map",
  "Session bias with clear invalidation",
  "Entry checklist before any risk",
  "Screenshot recap and journal notes"
];

const seoOffers = [
  {
    label: "Futures trading course",
    title: "Learn the framework before the market speeds up.",
    text: "Structured lessons for market structure, execution rules, risk management, journaling, review, and psychology."
  },
  {
    label: "Live trading room",
    title: "Prepare, observe, and review with a serious trading room.",
    text: "A focused live room for session prep, futures context, trade review, Q&A, and disciplined development."
  },
  {
    label: "Futures indicators",
    title: "Use tools as context, not as shortcuts.",
    text: "Indicator-led market context for momentum, levels, confluence, and cleaner decision support."
  },
  {
    label: "Trading psychology coaching",
    title: "Build the habits that survive pressure.",
    text: "Feedback loops for patience, rule-following, journaling, and post-session improvement."
  }
];

const routineSteps = [
  { title: "Map", text: "Mark liquidity, key levels, news, session context, and invalidation before the open." },
  { title: "Wait", text: "Let price confirm the plan instead of forcing a trade from boredom or fear of missing out." },
  { title: "Execute", text: "Define risk before entry and use a checklist that keeps decisions consistent under pressure." },
  { title: "Review", text: "Screenshots, notes, and coaching loops turn each session into the next improvement." }
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
    text: "The core path for traders ready to build a repeatable process.",
    points: ["Live sessions", "Member library", "Weekly review", "Community Q&A"],
    cta: "Request room access",
    featured: true
  },
  {
    name: "Edge Builder",
    price: "Coaching",
    text: "Higher-intent path for traders who want closer feedback on execution and psychology.",
    points: ["Private reviews", "Trade journal audits", "Personal playbook", "Priority feedback"],
    cta: "Apply for coaching"
  }
];

const faqs = [
  {
    question: "Is this a signal service?",
    answer:
      "No. MYT is positioned around process: context, decision criteria, risk, execution, and review. That is stronger for serious traders than blindly copying calls."
  },
  {
    question: "Who is MYT for?",
    answer:
      "Futures traders who already know the market is hard and want a cleaner framework for learning, executing, reviewing, and building discipline."
  },
  {
    question: "Where do indicators fit?",
    answer:
      "They are positioned as context tools, not shortcuts. That keeps the offer premium and avoids hype-heavy claims."
  },
  {
    question: "Can beginners join?",
    answer:
      "Yes, but the page speaks to serious beginners and developing traders. The courses create structure first, then the live room and coaching help sharpen execution."
  },
  {
    question: "What makes the live room different?",
    answer:
      "The focus is preparation and review. Traders see how context is built, why a trade is valid or invalid, and how to improve after the session."
  }
];

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
    points: ["Market structure foundations", "Risk and execution modules", "Review systems and worksheets"]
  }
} as const;

const routeMeta: Record<string, { title: string; description: string }> = {
  home: {
    title: "Futures Trading Course, Live Room & Indicators",
    description:
      "Mind Your Trades helps futures traders build a repeatable trading process with a live trading room, futures trading courses, coaching, and indicator-led market context."
  },
  "learning/indicators": {
    title: "Trading Indicators",
    description:
      "MYT indicators help futures traders read market context, momentum, levels, and confluence without adding chart noise."
  },
  "learning/coaching": {
    title: "Futures Trading Coaching",
    description:
      "MYT coaching helps futures traders review execution, refine risk decisions, and build a personal trading playbook."
  },
  "learning/courses": {
    title: "Futures Trading Courses",
    description:
      "MYT courses organize market structure, risk, execution, journaling, and psychology into a clear learning path."
  },
  community: {
    title: "Live Futures Trading Room",
    description:
      "Join the MYT live trading room for session prep, trade review, Q&A, and process-first futures trading development."
  },
  pricing: {
    title: "MYT Pricing",
    description:
      "Compare MYT access paths for the live trading room, futures trading courses, indicators, and coaching."
  }
};

function routeFromPath(path?: string[]) {
  return path?.join("/") || "home";
}

export function generateStaticParams() {
  return Object.keys(routeMeta).map((route) => ({
    path: route === "home" ? [] : route.split("/")
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const route = routeFromPath((await params).path);
  const meta = routeMeta[route];

  if (!meta) {
    return {};
  }

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: route === "home" ? "/" : "/" + route
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: route === "home" ? "/" : "/" + route,
      images: ["/images/myt-precision-edge.png"],
      type: "website"
    }
  };
}

export default async function MYTSitePage({ params }: PageProps) {
  const route = routeFromPath((await params).path);

  if (!routeMeta[route]) {
    notFound();
  }

  return (
    <main className="myt-site">
      <Header />
      {route === "home" ? <HomePage /> : null}
      {route === "learning/indicators" ? <LearningDetailPage detail="indicators" /> : null}
      {route === "learning/coaching" ? <LearningDetailPage detail="coaching" /> : null}
      {route === "learning/courses" ? <LearningDetailPage detail="courses" /> : null}
      {route === "community" ? <CommunityPage /> : null}
      {route === "pricing" ? <PricingPage /> : null}
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
      <StructuredData />
      <section className="myt-hero" id="home" aria-labelledby="hero-title">
        <div className="myt-hero-inner">
          <div className="myt-hero-copy">
            <p className="myt-kicker">Futures trading course, live room, coaching, and indicators</p>
            <h1 id="hero-title">Build a futures trading process you can actually repeat.</h1>
            <p className="myt-hero-text">
              Mind Your Trades gives developing NQ and ES traders a calm operating system for market prep,
              execution rules, live review, premium indicators, and coaching. Less noise, sharper decisions,
              better feedback after every session.
            </p>
            <div className="myt-actions">
              <Link className="myt-button myt-button-primary" href="/pricing">
                Request access
                <ChevronRight size={18} aria-hidden />
              </Link>
              <Link className="myt-button myt-button-secondary" href="/learning/courses">
                Explore courses
                <PlayCircle size={18} aria-hidden />
              </Link>
            </div>
            <div className="myt-proof-row">
              <span>Built for NQ and ES traders</span>
              <span>Process-first, not signal-first</span>
              <span>Designed for review loops</span>
            </div>
          </div>
          <EdgeCockpit />
        </div>
      </section>
      <MarketTape />
      <Stats />
      <SeoOfferGrid />
      <LearningOverview />
      <ShowcaseSection />
      <RoutineSection />
      <PricingSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}

function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Mind Your Trades",
    alternateName: "MYT",
    url: "https://xentro-trading-template-clone.vercel.app",
    description:
      "Futures trading education, live trading room, coaching, and indicator-led market context for traders building a repeatable process.",
    areaServed: "Worldwide",
    offers: seoOffers.map((offer) => ({
      "@type": "Offer",
      name: offer.label,
      description: offer.text,
      category: "Trading education"
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
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
        text="Community is where the live room belongs: session prep, trade review, Q&A, psychology, and a cleaner way to develop with other serious traders."
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
          <h2>Train inside a room where every session has a purpose.</h2>
          <p>
            The live room is built around futures context, trade review, discipline, and a learning loop
            that helps traders improve without depending on blind calls.
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
        text="Compare the room, education, and coaching offers in one place, then choose the path that matches your current trading stage."
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

function MarketTape() {
  return (
    <section className="myt-tape" aria-label="MYT focus ticker">
      <div>
        {[...marketTape, ...marketTape].map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
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
        <h2>Everything points back to one question: can you repeat the decision?</h2>
        <p>
          Education, live room, indicator context, and coaching support the same outcome: a cleaner
          process before, during, and after the session.
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

function SeoOfferGrid() {
  return (
    <Reveal className="myt-section myt-seo-offers" as="section">
      <div className="myt-section-heading myt-centered">
        <p className="myt-kicker">What traders come here for</p>
        <h2>Training paths for futures traders who want structure.</h2>
        <p>
          Courses, live review, indicators, and coaching are separated clearly so the right trader can
          find the right next step fast.
        </p>
      </div>
      <div className="myt-offer-grid">
        {seoOffers.map((offer) => (
          <article className="myt-offer-tile" key={offer.label}>
            <span>{offer.label}</span>
            <h3>{offer.title}</h3>
            <p>{offer.text}</p>
          </article>
        ))}
      </div>
    </Reveal>
  );
}

function ShowcaseSection() {
  return (
    <Reveal className="myt-showcase myt-showcase-first" as="section">
      <div className="myt-showcase-media myt-screen-frame">
        <Image
          src="/webflow/hero-dashboard.webp"
          alt="Trading dashboard interface used to visualize market context and review."
          width={1440}
          height={985}
          sizes="(max-width: 900px) 100vw, 56vw"
        />
        <div className="myt-light-border" aria-hidden />
      </div>
      <div className="myt-showcase-copy">
        <p className="myt-kicker">Why it converts</p>
        <h2>It feels premium because it removes pressure instead of adding more noise.</h2>
        <p>
          The offer is built around calm decision-making: prepare the trade, define invalidation,
          execute only when the setup is valid, then review what happened. That is the kind of
          education serious traders can trust.
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
  );
}

function RoutineSection() {
  return (
    <Reveal className="myt-routine" as="section">
      <div className="myt-routine-visual">
        <Image src="/images/myt-building-edge.png" alt="MYT trading education visual." width={1200} height={900} />
      </div>
      <div className="myt-routine-copy">
        <p className="myt-kicker">The trader routine</p>
        <h2>A minimal system for a high-pressure environment.</h2>
        <p>
          Futures trading moves quickly. MYT slows the decision down with a routine traders can follow
          before the open, during execution, and after the closing bell.
        </p>
        <div className="myt-routine-steps">
          {routineSteps.map((step, index) => (
            <article key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function PricingSection() {
  return (
    <Reveal className="myt-pricing" as="section">
      <div className="myt-section-heading myt-centered">
        <p className="myt-kicker">Choose your access path</p>
        <h2>Start with the room, deepen with education, or get closer coaching.</h2>
        <p>Each path is framed around a different level of commitment so traders can move without guessing.</p>
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
        <h2>Answer the objections before they become hesitation.</h2>
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
        <p className="myt-kicker">Precision. Discipline. Edge.</p>
        <h2>For futures traders ready to stop collecting noise and start building a process.</h2>
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
    <footer className="myt-footer">
      <span>MYT - Mind Your Trades</span>
      <Link href="/pricing">
        Join the next cohort
        <Zap size={16} aria-hidden />
      </Link>
    </footer>
  );
}
