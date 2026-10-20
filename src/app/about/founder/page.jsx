'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, BookOpen, Building2, MapPin, ShieldCheck, Target } from 'lucide-react';
import founder from '../../../assets/images/akah-founder.jpeg';
import Image from 'next/image';

const locations = [
  'Ikoyi',
  'Victoria Island',
  'Lekki',
  'Oniru',
  'Chevron',
  'Ikota',
  'Orchid Road',
  'Sangotedo',
];

const commitments = [
  {
    icon: Target,
    title: 'Understand the Buyer',
    description:
      'Every property search should begin with understanding the buyer’s budget, objectives, preferences and long-term plans.',
  },
  {
    icon: ShieldCheck,
    title: 'Encourage Due Diligence',
    description:
      'Property decisions deserve careful consideration of documentation, location, ownership and other relevant risks.',
  },
  {
    icon: BookOpen,
    title: 'Make Knowledge Accessible',
    description:
      'Through practical real estate education, buyers can better understand the market and ask more informed questions.',
  },
];

export default function FounderPage() {
  return (
    <main className="min-h-screen bg-[#0F1114] pb-20 pt-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Founder hero */}
        <section className="mb-24 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-sm uppercase tracking-widest text-[#8DC63F]">
              Meet the Founder
            </p>

            <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              Akah Ifeanyi
              <span className="mt-2 block text-[#8DC63F]">Founder, Benol Property</span>
            </h1>

            <p className="mb-6 text-lg leading-relaxed text-white/60">
              Making property information easier to understand and helping buyers approach real
              estate decisions with greater clarity.
            </p>

            <p className="mb-8 leading-relaxed text-white/45">
              My focus is on helping buyers and investors explore property opportunities across
              Lagos, understand the considerations behind each decision, and find options aligned
              with their individual objectives.
            </p>

            <Link
              href="/properties"
              className="inline-flex items-center gap-3 rounded-xl bg-[#8DC63F] px-6 py-4 font-semibold text-[#0F1114] transition-colors hover:bg-[#9cdb4b]"
            >
              Explore Properties
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] lg:min-h-[560px]"
          >
            <Image
              src={founder}
              alt="Akah Ifeanyi, founder of Benol Property"
              className="absolute inset-0 h-full w-full object-cover"
              fetchPriority="high"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1114]/80 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <div className="rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur-md">
                <p className="font-display text-xl font-bold text-white">Akah Ifeanyi</p>
                <p className="mt-1 text-sm text-[#8DC63F]">Founder · Benol Property</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Personal story */}
        <section className="mb-24 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4  text-sm uppercase tracking-widest text-[#8DC63F]">My Story</p>

            <h2 className="font-display text-3xl font-bold leading-tight text-white md:text-4xl">
              Real Estate Should Begin With Understanding.
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-relaxed text-white/50 md:text-base">
            <p>
              I am Akah Ifeanyi, a real estate professional focused on the Lagos Island property
              market.
            </p>

            <p>
              Through my work, I help buyers and investors explore property opportunities across
              locations including Ikoyi, Victoria Island, Lekki, Oniru, Chevron, Ikota, Orchid Road
              and Sangotedo.
            </p>

            <p>
              My approach to real estate goes beyond showing properties. I believe buyers should
              understand the location, surrounding infrastructure, potential investment case and
              practical considerations that come with ownership.
            </p>

            <p>
              I also believe that useful property information should be accessible. This is why real
              estate education is an important part of my approach, from discussing market trends
              and neighbourhood differences to explaining property buying mistakes and land
              investment considerations.
            </p>

            <p className="border-l-2 border-[#8DC63F] pl-5 font-medium text-white/80">
              My goal is to help people make property decisions with better information, realistic
              expectations and greater confidence.
            </p>
          </div>
        </section>

        {/* Areas of focus */}
        <section className="mb-24 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <div className="mb-8 flex items-start gap-4">
            <div className="rounded-xl bg-[#8DC63F]/10 p-3">
              <MapPin className="text-[#8DC63F]" size={25} />
            </div>

            <div>
              <p className="mb-2  text-xs uppercase tracking-widest text-[#8DC63F]">
                Local Market Focus
              </p>

              <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                Understanding the Lagos Property Market
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/50">
                Explore property opportunities across established neighbourhoods and developing
                locations throughout the areas I cover.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {locations.map((location) => (
              <span
                key={location}
                className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/70"
              >
                {location}
              </span>
            ))}
          </div>
        </section>

        {/* Client commitments */}
        <section className="mb-24">
          <div className="mb-10 max-w-2xl">
            <p className="mb-4  text-sm uppercase tracking-widest text-[#8DC63F]">My Commitment</p>

            <h2 className="mb-4 font-display text-3xl font-bold text-white md:text-4xl">
              What Guides My Work
            </h2>

            <p className="leading-relaxed text-white/50">
              These principles shape how I approach property conversations, market information and
              the needs of each client.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {commitments.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
                >
                  <div className="mb-5 inline-flex rounded-xl bg-[#8DC63F]/10 p-3">
                    <Icon size={25} className="text-[#8DC63F]" />
                  </div>

                  <h3 className="mb-3 font-display text-lg font-bold text-white">{item.title}</h3>

                  <p className="text-sm leading-relaxed text-white/50">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Founder CTA */}
        <section className="rounded-3xl border border-[#8DC63F]/20 bg-[#8DC63F]/[0.05] px-6 py-12 text-center md:px-12 md:py-16">
          <p className="mb-4  text-sm uppercase tracking-widest text-[#8DC63F]">
            Let’s Talk Property
          </p>

          <h2 className="mx-auto mb-5 max-w-2xl font-display text-3xl font-bold text-white md:text-4xl">
            What Does Your Next Property Decision Look Like?
          </h2>

          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-white/50 md:text-base">
            Whether you are searching for a home, exploring land or considering an investment, start
            with your goals and the information you need to make a confident decision.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/properties"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#8DC63F] px-6 py-4 font-semibold text-[#0F1114] transition-colors hover:bg-[#9cdb4b]"
            >
              Browse Properties
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-4 font-semibold text-white transition-colors hover:bg-white/5"
            >
              Contact Benol Property
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
