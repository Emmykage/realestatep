'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  Building2,
  CalendarDays,
  ChartNoAxesCombined,
  MapPin,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

const locations = [
  {
    name: 'Ikoyi',
    type: 'Premium Residential',
    description:
      'Assess property quality, neighbourhood accessibility, title documentation and the intended buyer or rental market.',
    considerations: [
      'Property type and quality',
      'Ownership documentation',
      'Long-term holding costs',
    ],
  },
  {
    name: 'Victoria Island',
    type: 'Residential & Commercial',
    description:
      'Consider the intended use of the property, access to business districts, recurring costs and potential tenant demand.',
    considerations: ['Commercial activity', 'Rental demand', 'Building and service costs'],
  },
  {
    name: 'Lekki & Oniru',
    type: 'Residential & Mixed Use',
    description:
      'Compare individual neighbourhoods, road access, infrastructure, property specifications and the development surrounding each listing.',
    considerations: ['Accessibility', 'Infrastructure and drainage', 'Comparable property prices'],
  },
  {
    name: 'Ajah & Sangotedo',
    type: 'Residential & Land',
    description:
      'Evaluate the specific location, development status, access roads, land documentation and suitability for your timeline.',
    considerations: ['Land title and survey', 'Existing infrastructure', 'Development timeline'],
  },
];

const indicators = [
  {
    icon: TrendingUp,
    title: 'Asking Prices',
    description:
      'Compare similar properties in the same neighbourhood, taking size, condition, title and facilities into account.',
  },
  {
    icon: Building2,
    title: 'Supply & Demand',
    description:
      'Look at the number of comparable properties available and investigate demand from the intended buyer or tenant group.',
  },
  {
    icon: BarChart3,
    title: 'Rental Potential',
    description:
      'Estimate realistic rental income against vacancy periods, service charges, maintenance and other ownership expenses.',
  },
  {
    icon: ShieldCheck,
    title: 'Transaction Risks',
    description:
      'Consider title verification, planning requirements, environmental factors and the legal status of each property.',
  },
];

export default function MarketReportPage() {
  return (
    <main className="min-h-screen bg-[#0F1114] pb-20 pt-32">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-8">
        <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-[#8DC63F]/10 blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8DC63F]/20 bg-[#8DC63F]/5 px-4 py-2">
            <ChartNoAxesCombined size={16} className="text-[#8DC63F]" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#8DC63F]">
              Benol Property Research
            </span>
          </div>

          <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Understanding the
            <span className="block text-[#8DC63F]">Lagos Property Market.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
            Explore property-market considerations, compare locations and learn which indicators
            matter when buying, selling or investing in real estate across Lagos.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#location-insights"
              className="inline-flex items-center gap-2 rounded-xl bg-[#8DC63F] px-6 py-3.5 font-semibold text-[#0F1114] transition-colors hover:bg-[#9cdb4b]"
            >
              Explore Locations
              <ArrowRight size={18} />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-medium text-white transition-colors hover:border-[#8DC63F]/50 hover:text-[#8DC63F]"
            >
              Request Market Guidance
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Report notice */}
      <section className="px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#8DC63F]/10">
              <CalendarDays size={20} className="text-[#8DC63F]" />
            </div>
            <div>
              <h2 className="font-semibold text-white">
                Lagos Market Research & Location Insights
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-white/45">
                A practical framework for evaluating property opportunities. Verified pricing and
                transaction data should be added as they become available.
              </p>
            </div>
          </div>

          <span className="w-fit rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/45">
            Research overview
          </span>
        </div>
      </section>

      {/* Location insights */}
      <section id="location-insights" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#8DC63F]">
            Location Matters
          </p>
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Explore Key Lagos Locations
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/50">
            Every location and property is different. Use these considerations as a starting point
            for your research, not as a ranking of investment performance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {locations.map((location, index) => (
            <motion.article
              key={location.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-colors hover:border-[#8DC63F]/30 sm:p-8"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#8DC63F]/20 bg-[#8DC63F]/10">
                  <MapPin size={22} className="text-[#8DC63F]" />
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/45">
                  {location.type}
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-white">{location.name}</h3>

              <p className="mt-3 text-sm leading-relaxed text-white/50">{location.description}</p>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/70">
                  What to investigate
                </p>

                <ul className="space-y-3">
                  {location.considerations.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8DC63F]" />
                      <span className="text-sm text-white/55">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/properties"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#8DC63F] transition-colors hover:text-[#b4e879]"
              >
                Explore available properties
                <ArrowRight size={16} />
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Market indicators */}
      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#8DC63F]">
              Read Beyond the Asking Price
            </p>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Four Indicators Worth Watching
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/50">
              A more complete property assessment considers the costs, risks and purpose of
              ownership—not just the advertised price.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {indicators.map((indicator, index) => {
              const Icon = indicator.icon;

              return (
                <motion.div
                  key={indicator.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  className="rounded-2xl border border-white/10 bg-[#0F1114] p-6"
                >
                  <Icon size={25} className="mb-5 text-[#8DC63F]" />
                  <h3 className="mb-3 text-lg font-semibold text-white">{indicator.title}</h3>
                  <p className="text-sm leading-relaxed text-white/50">{indicator.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Buyer checklist */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#8DC63F]">
            Before You Commit
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-white md:text-4xl">
            Turn Market Research into a Better Decision.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/50">
            Use this checklist when comparing a property with other options in the same area.
          </p>
        </div>

        <div className="space-y-4">
          {[
            'Compare genuinely similar properties, not just nearby listings.',
            'Confirm the property title and relevant planning documentation.',
            'Estimate legal fees, taxes, service charges and maintenance costs.',
            'Inspect the property and assess its surroundings.',
            'Seek independent professional advice where necessary.',
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-4"
            >
              <ShieldCheck size={19} className="mt-0.5 shrink-0 text-[#8DC63F]" />
              <p className="text-sm leading-relaxed text-white/65">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#8DC63F]/20 bg-[#8DC63F]/[0.06] px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-10 -top-16 h-64 w-64 rounded-full bg-[#8DC63F]/10 blur-[90px]" />

          <div className="relative">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#8DC63F]">
              Your Next Move
            </p>

            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-white md:text-4xl">
              Looking for a Property in Lagos?
            </h2>

            <p className="mx-auto mb-8 mt-4 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
              Explore available listings or speak with Benol Property about your budget, location
              preferences and property objectives.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 rounded-xl bg-[#8DC63F] px-6 py-3.5 font-semibold text-[#0F1114] transition-colors hover:bg-[#9cdb4b]"
              >
                Browse Properties
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-medium text-white transition-colors hover:border-[#8DC63F]/50 hover:text-[#8DC63F]"
              >
                Contact Benol Property
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
