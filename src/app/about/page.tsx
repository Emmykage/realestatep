import { Award, Globe, Heart } from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const team = [
  { name: 'Claire Weston',    role: 'Founder & CEO',         initials: 'CW', bg: '#1E293B', text: '#F59E0B' },
  { name: 'Marcus Reid',      role: 'Head of Sales',          initials: 'MR', bg: '#374151', text: '#D1D5DB' },
  { name: 'Ayesha Patel',     role: 'Senior Listings Agent',  initials: 'AP', bg: '#1E3A5F', text: '#93C5FD' },
  { name: 'Tom Hargrove',     role: 'Buyer Relations Lead',   initials: 'TH', bg: '#2D3E2A', text: '#86EFAC' },
]

const values = [
  { icon: Award,  title: 'Excellence',   desc: 'We hold every transaction to the highest standard — from first showing to final signature.' },
  { icon: Globe,  title: 'Local depth',  desc: 'Our agents live in the neighborhoods they sell. That knowledge is your edge.' },
  { icon: Heart,  title: 'Client first', desc: 'Your timeline, your priorities, your pace. We fit our process to your life, not the reverse.' },
]

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-slate-900 py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-400 text-xs font-semibold tracking-[0.18em] uppercase mb-4">Our story</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Built on trust.<br />
            <em className="not-italic text-gold-400">Driven by results.</em>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            LuxeRealty was founded in 2008 by Claire Weston with one conviction: that premium real estate
            should come with premium service — every step of the way.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="section-eyebrow text-center">What we stand for</p>
          <h2 className="section-heading text-center mb-14">Our values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="text-center px-4">
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <v.icon size={22} className="text-gold-400" />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-3">{v.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="section-eyebrow text-center">The people behind the deals</p>
          <h2 className="section-heading text-center mb-14">Meet our team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <div key={i} className="text-center group">
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-display font-bold transition-transform duration-200 group-hover:scale-105"
                  style={{ background: m.bg, color: m.text }}
                >
                  {m.initials}
                </div>
                <p className="font-semibold text-slate-900 text-sm">{m.name}</p>
                <p className="text-xs text-slate-400 mt-0.5">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="section-heading mb-4">Ready to work together?</h2>
          <p className="text-slate-500 mb-8">Let&apos;s talk about your goals.</p>
          <Link href="/contact" className="btn-primary">
            Get in touch <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  )
}
