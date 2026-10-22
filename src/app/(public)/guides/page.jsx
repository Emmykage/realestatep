'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileSearch,
  House,
  MapPin,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

const guides = [
  {
    number: '01',
    category: 'Buying Property',
    title: 'A First-Time Buyer’s Guide to Buying Property in Lagos',
    description:
      'Understand the buying process, set a realistic budget, assess locations and know what to check before committing to a property.',
    icon: House,
    readTime: '7 min read',
    points: [
      'Define your budget and property needs',
      'Compare locations and accessibility',
      'Understand additional purchase costs',
      'Verify documents before payment',
    ],
  },
  {
    number: '02',
    category: 'Property Verification',
    title: 'How to Verify Property Documents in Lagos',
    description:
      'Learn why title verification matters, which documents may be relevant and when to seek independent legal advice.',
    icon: FileSearch,
    readTime: '8 min read',
    points: [
      'Understand the title documents available',
      'Conduct appropriate searches and checks',
      'Confirm ownership and transaction authority',
      'Consult a qualified property lawyer',
    ],
  },
  {
    number: '03',
    category: 'Location Guide',
    title: 'Choosing the Right Location for Your Property',
    description:
      'Compare neighbourhoods based on accessibility, infrastructure, amenities, development and your personal objectives.',
    icon: MapPin,
    readTime: '6 min read',
    points: [
      'Consider commute times and road access',
      'Assess nearby infrastructure and amenities',
      'Understand drainage and environmental risks',
      'Research the area beyond the sales pitch',
    ],
  },
  {
    number: '04',
    category: 'Investment',
    title: 'What to Consider Before Investing in Real Estate',
    description:
      'Evaluate a property beyond its asking price by considering rental demand, recurring expenses, resale prospects and risk.',
    icon: TrendingUp,
    readTime: '9 min read',
    points: [
      'Define your investment objectives',
      'Research comparable properties and rents',
      'Estimate expenses and potential returns',
      'Account for liquidity and market risks',
    ],
  },
  {
    number: '05',
    category: 'Due Diligence',
    title: 'Property Buying Mistakes You Should Avoid',
    description:
      'Learn how to recognise common warning signs and avoid rushing into a property transaction without adequate checks.',
    icon: ShieldCheck,
    readTime: '6 min read',
    points: [
      'Do not rely on photographs alone',
      'Avoid payments before necessary verification',
      'Read agreements carefully',
      'Document communications and payments',
    ],
  },
  {
    number: '06',
    category: 'Diaspora Buyers',
    title: 'A Practical Guide to Buying Property from Abroad',
    description:
      'Explore ways to assess properties remotely, organise independent verification and manage a purchase while outside Nigeria.',
    icon: BookOpen,
    readTime: '7 min read',
    points: [
      'Request current property information',
      'Arrange live or independent property inspections',
      'Verify representatives and ownership documents',
      'Use documented payment and legal processes',
    ],
  },
];

const categories = [
  'All Guides',
  'Buying Property',
  'Property Verification',
  'Location Guide',
  'Investment',
  'Due Diligence',
  'Diaspora Buyers',
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-[#0F1114] pb-20 pt-32">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-10">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#8DC63F]/10 blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8DC63F]/20 bg-[#8DC63F]/5 px-4 py-2">
            <BookOpen size={15} className="text-[#8DC63F]" />
            <span className=" text-xs uppercase tracking-[0.2em] text-[#8DC63F]">
              Benol Property Guides
            </span>
          </div>

          <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Make Better
            <span className="block text-[#8DC63F]">Property Decisions.</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
            Property decisions deserve more than beautiful pictures. Explore practical guides to
            buying, verifying and investing in real estate across Lagos, so you can approach your
            next decision with greater clarity.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 rounded-xl bg-[#8DC63F] px-6 py-3.5 font-semibold text-[#0F1114] transition-colors hover:bg-[#9cdb4b]"
            >
              Explore Properties
              <ArrowRight size={18} />
            </Link>

            <a
              href="#all-guides"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-medium text-white transition-colors hover:border-[#8DC63F]/50 hover:text-[#8DC63F]"
            >
              Browse Guides
            </a>
          </div>
        </motion.div>
      </section>

      {/* Trust points */}
      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-8">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">
          {[
            'Practical property education',
            'Lagos-focused market knowledge',
            'More informed decision-making',
          ].map((item) => (
            <div
              key={item}
              className="flex items-center justify-center gap-3 text-center text-sm text-white/65"
            >
              <CheckCircle2 size={17} className="shrink-0 text-[#8DC63F]" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Guide cards */}
      <section id="all-guides" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3  text-xs uppercase tracking-[0.2em] text-[#8DC63F]">
              The Knowledge Hub
            </p>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Real Estate Guides
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/50">
              Start with the questions that matter most before making a property decision.
            </p>
          </div>

          <span className="text-sm text-white/40">{guides.length} essential guides</span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide, index) => {
            const Icon = guide.icon;

            return (
              <motion.article
                key={guide.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-colors hover:border-[#8DC63F]/30 hover:bg-white/[0.04]"
              >
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#8DC63F]/20 bg-[#8DC63F]/10">
                    <Icon size={22} className="text-[#8DC63F]" />
                  </div>

                  <span className=" text-sm text-white/25">{guide.number}</span>
                </div>

                <p className="mb-3  text-[10px] uppercase tracking-[0.15em] text-[#8DC63F]">
                  {guide.category}
                </p>

                <h3 className="mb-3 text-xl font-semibold leading-snug text-white transition-colors group-hover:text-[#8DC63F]">
                  {guide.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-white/50">{guide.description}</p>

                <div className="mb-6 space-y-3 border-t border-white/10 pt-5">
                  {guide.points.map((point) => (
                    <div key={point} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#8DC63F]/80" />
                      <span className="text-xs leading-relaxed text-white/55">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-xs text-white/35">{guide.readTime}</span>

                  <span className="inline-flex items-center gap-2 text-sm font-medium text-[#8DC63F]">
                    Read guide
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-6 text-xs leading-relaxed text-white/35">
          These guides provide general educational information, not legal, valuation or investment
          advice. Property documentation and transaction requirements vary, so seek qualified
          professional advice for your specific circumstances.
        </p>
      </section>

      {/* CTA */}
      <section className="px-6">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#8DC63F]/20 bg-[#8DC63F]/[0.06] px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#8DC63F]/10 blur-[90px]" />

          <div className="relative">
            <p className="mb-4  text-xs uppercase tracking-[0.2em] text-[#8DC63F]">
              Need a little more guidance?
            </p>

            <h2 className="mx-auto mb-4 max-w-2xl font-display text-3xl font-bold text-white md:text-4xl">
              Every Property Decision Starts with the Right Questions.
            </h2>

            <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
              Whether you are buying your first home, exploring land or considering an investment,
              Benol Property can help you explore available opportunities.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 rounded-xl bg-[#8DC63F] px-6 py-3.5 font-semibold text-[#0F1114] transition-colors hover:bg-[#9cdb4b]"
              >
                View Properties
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-medium text-white transition-colors hover:border-[#8DC63F]/50 hover:text-[#8DC63F]"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
