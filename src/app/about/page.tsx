'use client';
import { Award, Globe, Heart } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
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
    icon: Award,
    title: 'Excellence',
    desc: 'We hold every transaction to the highest standard — from first showing to final signature.',
  },
  {
    icon: Globe,
    title: 'Local depth',
    desc: 'Our agents live in the neighborhoods they sell. That knowledge is your edge.',
  },
  {
    icon: Heart,
    title: 'Client first',
    desc: 'Your timeline, your priorities, your pace. We fit our process to your life, not the reverse.',
  },
];

// export default function AboutPage() {
//   return (
//     <div className="pt-20 min-h-screen bg-white">

//       {/* Hero */}
//       <section className="bg-slate-900 py-28 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <p className="text-gold-400 text-xs font-semibold tracking-[0.18em] uppercase mb-4">Our story</p>
//           <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
//             Built on trust.<br />
//             <em className="not-italic text-gold-400">Driven by results.</em>
//           </h1>
//           <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
//             LuxeRealty was founded in 2008 by Claire Weston with one conviction: that premium real estate
//             should come with premium service — every step of the way.
//           </p>
//         </div>
//       </section>

//       {/* Values */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <p className="section-eyebrow text-center">What we stand for</p>
//           <h2 className="section-heading text-center mb-14">Our values</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {values.map((v, i) => (
//               <div key={i} className="text-center px-4">
//                 <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-5">
//                   <v.icon size={22} className="text-gold-400" />
//                 </div>
//                 <h3 className="font-display font-bold text-xl text-slate-900 mb-3">{v.title}</h3>
//                 <p className="text-slate-500 leading-relaxed text-sm">{v.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team */}
//       <section className="py-24 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <p className="section-eyebrow text-center">The people behind the deals</p>
//           <h2 className="section-heading text-center mb-14">Meet our team</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {team.map((m, i) => (
//               <div key={i} className="text-center group">
//                 <div
//                   className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-display font-bold transition-transform duration-200 group-hover:scale-105"
//                   style={{ background: m.bg, color: m.text }}
//                 >
//                   {m.initials}
//                 </div>
//                 <p className="font-semibold text-slate-900 text-sm">{m.name}</p>
//                 <p className="text-xs text-slate-400 mt-0.5">{m.role}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 bg-white border-t border-slate-100">
//         <div className="max-w-3xl mx-auto text-center px-6">
//           <h2 className="section-heading mb-4">Ready to work together?</h2>
//           <p className="text-slate-500 mb-8">Let&apos;s talk about your goals.</p>
//           <Link href="/contact" className="btn-primary">
//             Get in touch <ArrowRight size={14} />
//           </Link>
//         </div>
//       </section>
//     </div>
//   )
// }
export default function AboutPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
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
    <div className="bg-[#0F1114] min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="grid lg:grid-cols-2 gap-16 items-center mb-24"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-[#8DC63F] font-mono text-sm tracking-widest uppercase mb-4"
            >
              About Oparah Realty
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-5xl font-display font-bold text-white leading-tight mb-6"
            >
              Nigeria's Most Trusted Property Partner
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/60 text-lg leading-relaxed mb-6">
              For over 12 years, Oparah Realty has navigated the complexities of Nigerian real
              estate so our clients don't have to. From Banana Island penthouses to first-home
              apartments in Surulere, we bring the same rigour to every deal.
            </motion.p>
            <motion.p variants={fadeUp} className="text-white/40 text-base leading-relaxed">
              Our approach combines deep market intelligence, legal due diligence, and a proprietary
              risk-scoring model that has protected over ₦180 billion in client capital.
            </motion.p>
          </div>
          <motion.div
            variants={fadeUp}
            className="relative rounded-3xl overflow-hidden h-96 lg:h-[500px]"
          >
            <img
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80"
              alt="Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1114]/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-5">
                <div className="text-white font-display font-bold text-xl">Chukwuemeka Oparah</div>
                <div className="text-[#8DC63F] text-sm mt-1">
                  Founder & CEO · 12+ Years in Lagos Real Estate
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12 }}
              className="text-center p-8 rounded-2xl border border-white/8 bg-white/3"
            >
              <div className="text-4xl font-display font-bold text-[#8DC63F]">{s.value}</div>
              <div className="text-white/50 text-sm mt-2 font-mono uppercase tracking-wider">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold text-white mb-10"
          >
            Our Principles
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '◈',
                title: 'Radical Transparency',
                body: 'Every fee, every risk, every clause — disclosed upfront. No hidden charges, ever.',
              },
              {
                icon: '◎',
                title: 'ROI-First Thinking',
                body: 'We run the numbers before you fall in love with a property. Your investment thesis comes first.',
              },
              {
                icon: '◉',
                title: 'Legal Armour',
                body: "In-house solicitors verify title documents, survey plans, and governor's consent on every transaction.",
              },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-7 rounded-2xl border border-white/8 bg-white/3"
              >
                <div className="text-4xl text-[#8DC63F] mb-4">{v.icon}</div>
                <div className="text-white font-display font-bold text-lg mb-2">{v.title}</div>
                <div className="text-white/50 text-sm leading-relaxed">{v.body}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
