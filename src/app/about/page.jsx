'use client';

import { Award, Globe, Heart, Lightbulb, ShieldCheck, BookOpen, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { STATS } from '../../data';

const team = [
  { name: 'Claire Weston', role: 'Founder & CEO', initials: 'CW', bg: '#1E293B', text: '#F59E0B' },
  { name: 'Marcus Reid', role: 'Head of Sales', initials: 'MR', bg: '#374151', text: '#D1D5DB' },
  {
    name: 'Ayesha Patel',
    role: 'Senior Listings Agent',
    initials: 'AP',
    bg: '#1E3A5F',
    text: '#93C5FD',
  },
  {
    name: 'Tom Hargrove',
    role: 'Buyer Relations Lead',
    initials: 'TH',
    bg: '#2D3E2A',
    text: '#86EFAC',
  },
];
const values = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    desc: 'We believe property decisions should be based on accurate information, honest communication and appropriate due diligence.',
  },
  {
    icon: BookOpen,
    title: 'Education',
    desc: 'We help buyers understand locations, property values, investment considerations and potential risks before making decisions.',
  },
  {
    icon: Heart,
    title: 'Client-Focused Service',
    desc: "We take time to understand each client's budget, objectives and preferences before recommending suitable properties.",
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'We use digital property presentations, educational content and virtual viewing experiences to make property exploration more convenient.',
  },
];

const principles = [
  {
    icon: Award,
    title: 'Informed Decisions',
    body: 'We help clients look beyond beautiful pictures and asking prices to understand the factors that matter when buying property.',
  },
  {
    icon: Globe,
    title: 'Local Market Knowledge',
    body: 'From Ikoyi and Victoria Island to Lekki and the Lekki-Epe corridor, we help clients explore locations with greater understanding.',
  },
  {
    icon: Target,
    title: 'Purpose-Driven Property',
    body: 'Whether you are buying a home, investing, acquiring land or exploring luxury real estate, we focus on your objectives first.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

export default function AboutPage() {
  const statsRef = useRef(null);

  return (
    <div className="min-h-screen bg-[#0F1114] pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Hero */}
        <motion.section
          initial="hidden"
          animate="show"
          variants={stagger}
          className="mb-24 grid items-center gap-16 lg:grid-cols-2"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="mb-4  text-sm uppercase tracking-widest text-[#8DC63F]"
            >
              About Benol Property
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mb-6 text-4xl font-display font-bold leading-tight text-white md:text-5xl"
            >
              Property Decisions Deserve More Than Beautiful Pictures.
            </motion.h1>

            <motion.p variants={fadeUp} className="mb-6 text-lg leading-relaxed text-white/60">
              Benol Property is a real estate brand focused on helping people explore, understand
              and make informed decisions about property in Lagos, with particular attention to
              Lagos Island and the Lekki-Epe corridor.
            </motion.p>

            <motion.p variants={fadeUp} className="text-base leading-relaxed text-white/40">
              Whether you are purchasing a home, searching for an investment opportunity, acquiring
              land or exploring luxury real estate, we believe the right decision involves more than
              price alone. Location, accessibility, infrastructure, title documentation, development
              potential, market demand and your investment timeline all matter.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            className="relative h-96 overflow-hidden rounded-3xl lg:h-[500px]"
          >
            <img
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1000&q=85"
              alt="Modern residential property representing the Benol Property real estate brand"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1114]/90 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <div className="rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur-md">
                <div className="font-display text-xl font-bold text-white">Benol Property</div>
                <div className="mt-1 text-sm text-[#8DC63F]">
                  Helping You Make Informed Property Decisions
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Stats */}
        <div ref={statsRef} className="mb-24 grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center"
            >
              <div className="font-display text-3xl font-bold text-[#8DC63F] md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2  text-xs uppercase tracking-wider text-white/50">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission and Vision */}
        <section className="mb-24 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#8DC63F]/10">
              <Target className="text-[#8DC63F]" size={24} />
            </div>

            <p className="mb-3  text-xs uppercase tracking-widest text-[#8DC63F]">Our Mission</p>

            <h2 className="mb-4 font-display text-2xl font-bold text-white">
              Making Property Decisions Clearer
            </h2>

            <p className="text-sm leading-relaxed text-white/50 md:text-base">
              To make real estate buying, selling and investing in Lagos more transparent, informed
              and accessible by connecting people to suitable properties, providing practical market
              knowledge and guiding them through important property decisions with professionalism
              and integrity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#8DC63F]/10">
              <Globe className="text-[#8DC63F]" size={24} />
            </div>

            <p className="mb-3  text-xs uppercase tracking-widest text-[#8DC63F]">Our Vision</p>

            <h2 className="mb-4 font-display text-2xl font-bold text-white">
              A More Transparent Real Estate Experience
            </h2>

            <p className="text-sm leading-relaxed text-white/50 md:text-base">
              To become a trusted, technology-driven real estate brand for Lagos Island, recognised
              for market expertise, transparent property information and an exceptional experience
              for local and diaspora buyers.
            </p>
          </motion.div>
        </section>

        {/* Company Story */}
        <section className="mb-24 grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4  text-sm uppercase tracking-widest text-[#8DC63F]">Who We Are</p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl font-bold leading-tight text-white md:text-4xl"
            >
              Real Estate With Clarity, Confidence and Purpose.
            </motion.h2>
          </div>

          <div className="space-y-5 text-sm leading-relaxed text-white/50 md:text-base">
            <p>
              At Benol Property, we believe buying property should begin with understanding the
              buyer&apos;s objectives. Every client has different needs, financial considerations
              and long-term plans. Our role is to help make the process easier to understand.
            </p>

            <p>
              Property decisions involve more than finding an attractive building or a promising
              plot of land. Location, accessibility, surrounding infrastructure, title
              documentation, development potential, market demand and ownership considerations all
              deserve attention.
            </p>

            <p>
              Beyond property transactions, we are committed to real estate education. Through
              market insights, area guides, property walkthroughs and educational articles, we aim
              to help buyers ask better questions and approach property decisions with greater
              confidence.
            </p>

            <p>
              For clients living outside Lagos or abroad, we also aim to make property exploration
              more accessible through digital presentations and virtual viewing options.
            </p>

            <p className="border-l-2 border-[#8DC63F] pl-5 font-medium text-white/80">
              Our goal is simple: to help you make more informed property decisions.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-24">
          <div className="mb-10 max-w-2xl">
            <p className="mb-4  text-sm uppercase tracking-widest text-[#8DC63F]">What Guides Us</p>

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-4 font-display text-3xl font-bold text-white"
            >
              Our Core Values
            </motion.h2>

            <p className="text-sm leading-relaxed text-white/50 md:text-base">
              The principles behind how we serve our clients, share information and approach every
              property opportunity.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-[#8DC63F]/40"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#8DC63F]/10">
                    <Icon size={24} className="text-[#8DC63F]" />
                  </div>

                  <h3 className="mb-3 font-display text-lg font-bold text-white">{value.title}</h3>

                  <p className="text-sm leading-relaxed text-white/50">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Our Principles */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="mb-4  text-sm uppercase tracking-widest text-[#8DC63F]">Our Approach</p>

            <h2 className="font-display text-3xl font-bold text-white">
              What You Can Expect From Us
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
                >
                  <div className="mb-4 text-[#8DC63F]">
                    <Icon size={30} />
                  </div>

                  <h3 className="mb-3 font-display text-lg font-bold text-white">
                    {principle.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-white/50">{principle.body}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Founder */}
        {/* <section className="mb-24 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[360px] lg:min-h-[560px]">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1000&q=85"
                alt="Professional portrait representing the founder of Benol Property"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1114]/80 via-transparent to-transparent lg:bg-gradient-to-r" />

              <div className="absolute bottom-6 left-6">
                <p className=" text-xs uppercase tracking-widest text-[#8DC63F]">
                  Meet the Founder
                </p>
                <h3 className="mt-2 font-display text-3xl font-bold text-white">Akah Ifeanyi</h3>
                <p className="mt-1 text-sm text-white/60">Founder, Benol Property</p>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
              <p className="mb-4  text-sm uppercase tracking-widest text-[#8DC63F]">
                The Person Behind the Brand
              </p>

              <h2 className="mb-6 font-display text-3xl font-bold text-white md:text-4xl">
                Meet Akah Ifeanyi
              </h2>

              <div className="space-y-5 text-sm leading-relaxed text-white/50 md:text-base">
                <p>
                  I am Akah Ifeanyi, a real estate professional focused on the Lagos Island property
                  market.
                </p>

                <p>
                  Through my work, I help buyers and investors explore property opportunities across
                  locations including Ikoyi, Victoria Island, Lekki, Oniru, Chevron, Ikota, Orchid
                  Road and Sangotedo.
                </p>

                <p>
                  My approach to real estate goes beyond showing properties. I believe buyers should
                  understand the location, the surrounding infrastructure, the potential investment
                  case and the practical considerations that come with ownership.
                </p>

                <p>
                  This belief also informs my educational content, where I discuss property buying
                  mistakes, market trends, neighbourhood differences, land investment strategies and
                  the questions buyers should ask before committing their money.
                </p>

                <p>
                  My goal is to make property information easier to understand and help clients
                  approach their decisions with greater clarity.
                </p>

                <p className="font-medium text-white/80">
                  Welcome to Benol Property. Let&apos;s make your next property decision an informed
                  one.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Closing CTA */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-[#8DC63F]/20 bg-[#8DC63F]/[0.05] px-6 py-12 text-center md:px-12 md:py-16"
        >
          <p className="mb-4  text-sm uppercase tracking-widest text-[#8DC63F]">
            Your Next Chapter Starts Here
          </p>

          <h2 className="mx-auto mb-5 max-w-2xl font-display text-3xl font-bold text-white md:text-4xl">
            Looking for Property in Lagos?
          </h2>

          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-white/50 md:text-base">
            Whether you are buying your first home, investing in land or exploring your next
            property opportunity, we are here to help you take the next step with greater clarity.
          </p>

          <a
            href="/properties"
            className="inline-flex items-center gap-3 rounded-xl bg-[#8DC63F] px-7 py-4 font-semibold text-[#0F1114] transition-colors hover:bg-[#9cdb4b]"
          >
            Explore Properties
            <span aria-hidden="true">→</span>
          </a>
        </motion.section>
      </div>
    </div>
  );
}
