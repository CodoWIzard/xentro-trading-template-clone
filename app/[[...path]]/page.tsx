import Image from "next/image";
import Link from "next/link";
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
import { MagneticCard, Reveal } from "../../components/reveal";

type PageProps = {
  params: Promise<{ path?: string[] }>;
};

const learningMenu = [
  { href: "/learning/indicators", label: "Indicators" },
  { href: "/learning/coaching", label: "Coaching" },
  { href: "/learning/courses", label: "Courses" }
];

const marketTape = [
  "NQ prep",
  "Liquidity sweep",
  "Risk first",
  "ES context",
  "Session bias",
  "Journal review",
  "Discipline",
  "Repeatable edge"
];

const proofStats = [
  { value: "5,000+", label: "template-era users inspired the trust layer" },
  { value: "4", label: "training lanes: live, course, tools, mindset" },
  { value: "24/7", label: "library for review outside market hours" },
  { value: "1", label: "clear operating system for futures traders" }
];

const pillars = [
  {
    icon: MonitorPlay,
    label: "Live Market Room",
    text: "Session prep, trade context, execution criteria, and after-market review without signal noise.",
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
    text: "Patience, discipline, and review habits baked into the brand, not treated as a side note.",
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
    text: "The main conversion target for traders ready to build a repeatable process.",
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
      "No. The positioning is process-first: context, decision criteria, risk, and review. That is stronger and more defensible for serious traders."
  },
  {
    question: "Who is MYT for?",
    answer:
      "Futures traders who already know the market is hard and want a cleaner framework for learning, executing, and reviewing."
  },
  {
    question: "Where do indicators fit?",
    answer:
      "They are positioned as context tools, not shortcuts. That keeps the offer premium and avoids hype-heavy claims."
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
      <MarketTape />
      <Stats />
      <LearningOverview />
      <BrandProof />
      <FinalCta />
    </>
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
          <h2>Make the product feel expensive before the user ever joins.</h2>
          <p>
            The Webflow dashboard imagery is back, but the story is sharper: live futures context,
            trade review, discipline, and a real learning loop.
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
        text="Pricing gets its own page so buyers can compare the room, education, and coaching offers without scrolling through the full home story."
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
        <h2>Conversion improves when traders can see the whole path, not just a promise.</h2>
        <p>
          Prepare the market, execute with rules, review the decision, then improve the playbook with
          coaching, courses, and tools.
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

function BrandProof() {
  return (
    <Reveal className="myt-split-proof" as="section">
      <div>
        <Image src="/webflow/trading-image-01.webp" alt="" width={566} height={622} />
        <Image src="/webflow/trading-image-02.webp" alt="" width={566} height={622} />
      </div>
      <article>
        <p className="myt-kicker">Premium trading brand posture</p>
        <h2>Less casino energy. More desk-grade discipline.</h2>
        <p>
          Strong visuals, serious language, and direct page paths make the brand feel premium without
          making unrealistic performance claims.
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
        <h2>Give every buyer intent a clear next step.</h2>
        <p>The pricing section is structured for conversion even before real prices are finalized.</p>
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
