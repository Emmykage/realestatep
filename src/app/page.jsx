'use client';
import Link from 'next/link';
import { Shield, TrendingUp, Users } from 'lucide-react';
import StatsRow from '../components/StatsRow';

import HeroBanner from '../components/hero/Hero';
import { motion } from 'framer-motion';
import { BLOG_POSTS, PROPERTIES } from '../data';
import PropertyScanner from '../components/propertyScanner/PropertyScanner';

const featuredProperties = [
  {
    id: 1,
    title: 'The Whitmore Penthouse',
    address: 'Upper East Side, New York',
    price: '$4,250,000',
    beds: 4,
    baths: 3,
    sqft: '3,800 sqft',
    type: 'Penthouse',
    tag: 'New',
    imgColor: '#B8C9E1',
    imgAccent: '#7F99BC',
  },
  {
    id: 2,
    title: 'Sunridge Estate',
    address: 'Beverly Hills, California',
    price: '$7,900,000',
    beds: 6,
    baths: 5,
    sqft: '6,200 sqft',
    type: 'Villa',
    tag: 'Featured',
    imgColor: '#D4C5B0',
    imgAccent: '#A8906E',
  },
  {
    id: 3,
    title: 'Harbor View Loft',
    address: 'South Beach, Miami',
    price: '$1,850,000',
    beds: 2,
    baths: 2,
    sqft: '1,950 sqft',
    type: 'Loft',
    imgColor: '#B5C9C0',
    imgAccent: '#6E9E8E',
  },
  {
    id: 4,
    title: 'The Meridian',
    address: 'Lincoln Park, Chicago',
    price: '$2,100,000',
    beds: 3,
    baths: 2,
    sqft: '2,400 sqft',
    type: 'Condo',
    tag: 'Hot',
    imgColor: '#C7B8D8',
    imgAccent: '#8E72A8',
  },
  {
    id: 5,
    title: 'Clearwater Cottage',
    address: 'Cape Cod, Massachusetts',
    price: '$1,200,000',
    beds: 3,
    baths: 2,
    sqft: '1,600 sqft',
    type: 'Cottage',
    imgColor: '#BFD4D8',
    imgAccent: '#7FA8B2',
  },
  {
    id: 6,
    title: 'Skyline Duplex',
    address: 'Midtown Manhattan, New York',
    price: '$3,400,000',
    beds: 4,
    baths: 3,
    sqft: '3,100 sqft',
    type: 'Duplex',
    imgColor: '#C8C9CA',
    imgAccent: '#8A8E92',
  },
];

const services = [
  {
    icon: Shield,
    title: 'Trusted Transactions',
    desc: 'Full transparency on every deal. We handle contracts, escrow, and title — you just choose your home.',
  },
  {
    icon: TrendingUp,
    title: 'Market Intelligence',
    desc: 'Weekly data-driven reports on pricing trends, days on market, and neighborhood momentum.',
  },
  {
    icon: Users,
    title: 'Dedicated Agents',
    desc: 'One agent per client. No handoffs, no call centres — just your expert, available when you need them.',
  },
];

const testimonials = [
  {
    name: 'Sarah Okonkwo',
    role: 'Buyer, Manhattan',
    quote:
      'LuxeRealty found us a home that ticked every single box — and closed in 18 days. Effortless.',
    stars: 5,
  },
  {
    name: 'James Harrington',
    role: 'Seller, Beverly Hills',
    quote:
      'Listed on a Thursday, accepted an offer above asking by Monday. Their pricing strategy is exceptional.',
    stars: 5,
  },
  {
    name: 'Priya Menon',
    role: 'Buyer, Miami',
    quote:
      'As a first-time buyer I was anxious. My agent walked me through everything — I felt completely in control.',
    stars: 5,
  },
];

const neighborhoods = [
  { name: 'Manhattan', count: '340 homes', bg: '#1E293B', accent: '#F59E0B' },
  {
    name: 'Beverly Hills',
    count: '218 homes',
    bg: '#334155',
    accent: '#D97706',
  },
  { name: 'South Beach', count: '175 homes', bg: '#1E3A5F', accent: '#F59E0B' },
  { name: 'The Hamptons', count: '92 homes', bg: '#2D3E2A', accent: '#D97706' },
];

export default function HomePage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,

      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stagger = { show: { transition: { staggerChildren: 0.1 } } };

  return (
    <>
      <HeroBanner />

      <StatsRow />

      {/* ── FEATURED PROPERTIES ──────────────────────────── */}
      {/* <section className="py-24 bg-white" id="properties">
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
      </section> */}

      {/* ── NEIGHBORHOODS ────────────────────────────────── */}
      {/* <section className="py-24 bg-slate-50">
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
                <svg
                  className="absolute bottom-0 left-0 w-full opacity-10"
                  viewBox="0 0 200 80"
                  preserveAspectRatio="none"
                >
                  <rect x="10" y="20" width="25" height="60" fill="white" />
                  <rect x="45" y="5" width="35" height="75" fill="white" />
                  <rect x="90" y="30" width="20" height="50" fill="white" />
                  <rect x="120" y="10" width="40" height="70" fill="white" />
                  <rect x="170" y="25" width="25" height="55" fill="white" />
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
      </section> */}

      {/* <section className="py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-eyebrow">Why LuxeRealty</p>
              <h2 className="section-heading mb-6">
                More than listings.
                <br />
                Real guidance.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-10">
                Most agencies hand you a portal login and disappear. We do the opposite — every
                client has a dedicated agent who knows the market intimately and advocates fiercely
                on your behalf.
              </p>
              <Link href="/about" className="btn-primary">
                Meet our team <ArrowRight size={14} />
              </Link>
            </div>

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
      </section> */}

      {/* <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="section-eyebrow text-center">Client stories</p>
          <h2 className="section-heading text-center mb-14">What our clients say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-100 p-7 flex flex-col gap-5 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} size={14} className="fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed text-[15px] flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="pt-4 border-t border-slate-100">
                  <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold-400 text-xs font-semibold tracking-[0.18em] uppercase mb-4">
            Ready to move?
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Your next chapter
            <br />
            starts with a conversation.
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
            <Link
              href="/properties"
              className="inline-flex items-center justify-center gap-2 border border-slate-600 text-slate-300 hover:text-white hover:border-slate-400 px-8 py-4 rounded-full font-medium text-sm tracking-wide transition-colors duration-200"
            >
              Browse listings
            </Link>
          </div>
        </div>
      </section> */}

      <section className="bg-[#0F1114] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <motion.p
                variants={fadeUp}
                className="text-[#8DC63F] font-mono text-sm tracking-widest uppercase mb-2"
              >
                Curated for You
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl font-display font-bold text-white">
                Featured Listings
              </motion.h2>
            </div>
            <motion.button
              variants={fadeUp}
              onClick={() => setPage('properties')}
              className="hidden md:block px-6 py-3 rounded-xl border border-[#8DC63F]/40 text-[#8DC63F] text-sm font-semibold hover:bg-[#8DC63F]/10 transition-all"
            >
              View All Properties →
            </motion.button>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROPERTIES.slice(0, 3).map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group rounded-2xl overflow-hidden border border-white/8 bg-white/3 cursor-pointer"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-black"
                    style={{ background: '#8DC63F' }}
                  >
                    {p.tag}
                  </span>
                </div>
                <div className="p-5">
                  <div className="text-[#8DC63F] font-bold text-xl mb-1">{p.price}</div>
                  <div className="text-white font-display font-semibold text-lg">{p.title}</div>
                  <div className="text-white/40 text-sm mt-1 mb-4">{p.location}</div>
                  <div className="flex gap-5 text-white/50 text-sm border-t border-white/8 pt-4">
                    <span>{p.beds} Beds</span>
                    <span>{p.baths} Baths</span>
                    <span>{p.sqft} sqft</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Scanner */}
      <PropertyScanner />

      {/* Why FlatEarth */}
      <section className="bg-[#0F1114] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-[#8DC63F] font-mono text-sm tracking-widest uppercase mb-3"
            >
              Why Choose Us
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl font-display font-bold text-white">
              We Protect Your Capital
            </motion.h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                n: '01',
                title: 'Title Verification',
                body: 'Full legal due diligence on every listing. We verify C of O, survey plans, and encumbrances before you view.',
              },
              {
                n: '02',
                title: 'ROI Modelling',
                body: 'Our proprietary model stress-tests rental yield and capital appreciation across 5-year scenarios.',
              },
              {
                n: '03',
                title: 'Deal Execution',
                body: 'From offer to keys — we manage negotiations, documentation, and escrow so nothing slips.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="p-8 rounded-2xl border border-white/8 bg-white/3 relative overflow-hidden group hover:border-[#8DC63F]/40 transition-all duration-300"
              >
                <div className="absolute top-4 right-5 text-[#8DC63F]/10 font-display font-black text-7xl group-hover:text-[#8DC63F]/20 transition-all duration-500">
                  {item.n}
                </div>
                <div className="relative">
                  <div className="text-[#8DC63F] font-mono text-sm mb-4">{item.n}</div>
                  <div className="text-white font-display font-bold text-xl mb-3">{item.title}</div>
                  <div className="text-white/50 leading-relaxed">{item.body}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[#0F1114]/80" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-display font-bold text-white mb-6"
          >
            Ready to invest in
            <br />
            <span className="text-[#8DC63F]">Nigerian real estate?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg mb-10"
          >
            Book a free 30-minute consultation with our senior advisors. No pressure, just clarity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4 rounded-xl font-bold text-black text-lg"
              style={{ background: 'linear-gradient(135deg,#8DC63F,#a8e050)' }}
            >
              Book Free Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4 rounded-xl font-bold text-white border border-white/20 backdrop-blur-md hover:bg-white/10 transition-all"
            >
              +234 805 048 0659
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="bg-[#0F1114] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <motion.p
                variants={fadeUp}
                className="text-[#8DC63F] font-mono text-sm tracking-widest uppercase mb-2"
              >
                Market Intelligence
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl font-display font-bold text-white">
                Latest from The Brief
              </motion.h2>
            </div>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-white/8 bg-white/3"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute top-3 left-3 bg-[#8DC63F] text-black text-xs font-bold px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-display font-semibold text-base leading-snug mb-2">
                    {post.title}
                  </h3>
                  <div className="text-white/30 font-mono text-xs">{post.date}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
