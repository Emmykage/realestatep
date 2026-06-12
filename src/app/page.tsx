import Link from 'next/link'
import { ArrowRight, Shield, TrendingUp, Users, Star, CheckCircle2 } from 'lucide-react'
import StatsRow from '../components/StatsRow'
import PropertyCard from '../components/PropertyCard'
import SearchBar from '../components/SearchBar'



const featuredProperties = [
  {
    id: 1,
    title:     'The Whitmore Penthouse',
    address:   'Upper East Side, New York',
    price:     '$4,250,000',
    beds: 4, baths: 3, sqft: '3,800 sqft',
    type:      'Penthouse',
    tag:       'New',
    imgColor:  '#B8C9E1',
    imgAccent: '#7F99BC',
  },
  {
    id: 2,
    title:     'Sunridge Estate',
    address:   'Beverly Hills, California',
    price:     '$7,900,000',
    beds: 6, baths: 5, sqft: '6,200 sqft',
    type:      'Villa',
    tag:       'Featured',
    imgColor:  '#D4C5B0',
    imgAccent: '#A8906E',
  },
  {
    id: 3,
    title:     'Harbor View Loft',
    address:   'South Beach, Miami',
    price:     '$1,850,000',
    beds: 2, baths: 2, sqft: '1,950 sqft',
    type:      'Loft',
    imgColor:  '#B5C9C0',
    imgAccent: '#6E9E8E',
  },
  {
    id: 4,
    title:     'The Meridian',
    address:   'Lincoln Park, Chicago',
    price:     '$2,100,000',
    beds: 3, baths: 2, sqft: '2,400 sqft',
    type:      'Condo',
    tag:       'Hot',
    imgColor:  '#C7B8D8',
    imgAccent: '#8E72A8',
  },
  {
    id: 5,
    title:     'Clearwater Cottage',
    address:   'Cape Cod, Massachusetts',
    price:     '$1,200,000',
    beds: 3, baths: 2, sqft: '1,600 sqft',
    type:      'Cottage',
    imgColor:  '#BFD4D8',
    imgAccent: '#7FA8B2',
  },
  {
    id: 6,
    title:     'Skyline Duplex',
    address:   'Midtown Manhattan, New York',
    price:     '$3,400,000',
    beds: 4, baths: 3, sqft: '3,100 sqft',
    type:      'Duplex',
    imgColor:  '#C8C9CA',
    imgAccent: '#8A8E92',
  },
]

const services = [
  {
    icon:  Shield,
    title: 'Trusted Transactions',
    desc:  'Full transparency on every deal. We handle contracts, escrow, and title — you just choose your home.',
  },
  {
    icon:  TrendingUp,
    title: 'Market Intelligence',
    desc:  'Weekly data-driven reports on pricing trends, days on market, and neighborhood momentum.',
  },
  {
    icon:  Users,
    title: 'Dedicated Agents',
    desc:  'One agent per client. No handoffs, no call centres — just your expert, available when you need them.',
  },
]

const testimonials = [
  {
    name:   'Sarah Okonkwo',
    role:   'Buyer, Manhattan',
    quote:  'LuxeRealty found us a home that ticked every single box — and closed in 18 days. Effortless.',
    stars:  5,
  },
  {
    name:   'James Harrington',
    role:   'Seller, Beverly Hills',
    quote:  'Listed on a Thursday, accepted an offer above asking by Monday. Their pricing strategy is exceptional.',
    stars:  5,
  },
  {
    name:   'Priya Menon',
    role:   'Buyer, Miami',
    quote:  'As a first-time buyer I was anxious. My agent walked me through everything — I felt completely in control.',
    stars:  5,
  },
]

const neighborhoods = [
  { name: 'Manhattan',    count: '340 homes',  bg: '#1E293B', accent: '#F59E0B' },
  { name: 'Beverly Hills', count: '218 homes', bg: '#334155', accent: '#D97706' },
  { name: 'South Beach',  count: '175 homes',  bg: '#1E3A5F', accent: '#F59E0B' },
  { name: 'The Hamptons', count: '92 homes',   bg: '#2D3E2A', accent: '#D97706' },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-50 pt-20">

        {/* Geometric background accent */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-gold-50 opacity-60" />
          <div className="absolute top-1/2 -left-60 w-[500px] h-[500px] rounded-full bg-slate-100 opacity-70" />
          {/* Grid lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0F172A" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Premium Real Estate</p>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.08] mb-6">
              Find the home<br />
              you&apos;ve always<br />
              <em className="not-italic text-gold-500">imagined.</em>
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-xl">
              Over 4,000 curated listings across the most sought-after neighborhoods.
              Guided by agents who know every street.
            </p>

            <SearchBar />

            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-slate-500">
              {['No hidden fees', 'Instant valuations', 'Licensed in 50 states'].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-gold-500" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Floating property count badge */}
        <div className="absolute bottom-10 right-8 hidden lg:flex flex-col items-end gap-2">
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-100 border border-slate-100 px-5 py-4 text-right">
            <p className="font-display text-3xl font-bold text-slate-900">4,200+</p>
            <p className="text-xs text-slate-500 mt-0.5">Active listings nationwide</p>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <StatsRow />

      {/* ── FEATURED PROPERTIES ──────────────────────────── */}
      <section className="py-24 bg-white" id="properties">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="section-eyebrow">Hand-picked for you</p>
              <h2 className="section-heading">Featured properties</h2>
            </div>
            <Link href="/properties" className="btn-outline shrink-0">
              View all listings <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((p) => (
              <PropertyCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── NEIGHBORHOODS ────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="section-eyebrow text-center">Where do you want to live?</p>
          <h2 className="section-heading text-center mb-12">Explore by neighborhood</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {neighborhoods.map((n) => (
              <Link
                key={n.name}
                href="/properties"
                className="group relative rounded-2xl overflow-hidden h-56 flex flex-col justify-end p-6 cursor-pointer"
                style={{ background: n.bg }}
              >
                {/* Decorative building */}
                <svg className="absolute bottom-0 left-0 w-full opacity-10" viewBox="0 0 200 80" preserveAspectRatio="none">
                  <rect x="10" y="20" width="25" height="60" fill="white"/>
                  <rect x="45" y="5"  width="35" height="75" fill="white"/>
                  <rect x="90" y="30" width="20" height="50" fill="white"/>
                  <rect x="120" y="10" width="40" height="70" fill="white"/>
                  <rect x="170" y="25" width="25" height="55" fill="white"/>
                </svg>

                <div className="relative z-10">
                  <p
                    className="text-xs font-semibold tracking-widest uppercase mb-1"
                    style={{ color: n.accent }}
                  >
                    {n.count}
                  </p>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-gold-300 transition-colors">
                    {n.name}
                  </h3>
                </div>

                <div
                  className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0"
                  style={{ background: n.accent }}
                >
                  <ArrowRight size={14} className="text-white" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section className="py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: copy */}
            <div>
              <p className="section-eyebrow">Why LuxeRealty</p>
              <h2 className="section-heading mb-6">
                More than listings.<br />
                Real guidance.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-10">
                Most agencies hand you a portal login and disappear. We do the opposite —
                every client has a dedicated agent who knows the market intimately and
                advocates fiercely on your behalf.
              </p>
              <Link href="/about" className="btn-primary">
                Meet our team <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right: service cards */}
            <div className="space-y-5">
              {services.map((s, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-md transition-all duration-200"
                >
                  <span className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center shrink-0">
                    <s.icon size={20} className="text-gold-400" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{s.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="section-eyebrow text-center">Client stories</p>
          <h2 className="section-heading text-center mb-14">What our clients say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 p-7 flex flex-col gap-5 hover:shadow-lg transition-shadow duration-200">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} size={14} className="fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed text-[15px] flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="pt-4 border-t border-slate-100">
                  <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────── */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold-400 text-xs font-semibold tracking-[0.18em] uppercase mb-4">Ready to move?</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Your next chapter<br />starts with a conversation.
          </h2>
          <p className="text-slate-400 mb-10 text-lg">
            Book a free 30-minute consultation with a senior agent. No pressure, no jargon.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full font-medium text-sm tracking-wide transition-colors duration-200"
            >
              Book a consultation <ArrowRight size={14} />
            </Link>
            <Link href="/properties" className="inline-flex items-center justify-center gap-2 border border-slate-600 text-slate-300 hover:text-white hover:border-slate-400 px-8 py-4 rounded-full font-medium text-sm tracking-wide transition-colors duration-200">
              Browse listings
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
