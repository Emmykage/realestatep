'use client'

import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const offices = [
  { city: 'New York',       addr: '340 Park Avenue, NY 10022',      phone: '+1 (212) 555-0100' },
  { city: 'Los Angeles',    addr: '9000 Wilshire Blvd, CA 90212',   phone: '+1 (310) 555-0200' },
  { city: 'Miami',          addr: '1111 Brickell Ave, FL 33131',    phone: '+1 (305) 555-0300' },
]

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">

      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-eyebrow">Talk to us</p>
          <h1 className="section-heading">Get in touch</h1>
          <p className="text-slate-500 mt-4 text-lg">
            No automated replies. A real agent responds within two business hours.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Form */}
          <div>
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-8">Send us a message</h2>
            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder="Smith"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  I&apos;m interested in
                </label>
                <select className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all">
                  <option>Buying a property</option>
                  <option>Selling a property</option>
                  <option>Renting</option>
                  <option>General enquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your goals, timeline, or preferred neighborhoods..."
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                type="button"
                className="w-full btn-primary justify-center py-4 text-base rounded-xl"
              >
                Send message
              </button>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-10">
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">Direct contact</h2>
              <div className="space-y-4">
                {[
                  { icon: Phone,  label: 'Call us',      value: '+1 (555) 010-0200' },
                  { icon: Mail,   label: 'Email us',     value: 'hello@luxerealty.com' },
                  { icon: Clock,  label: 'Office hours', value: 'Mon – Fri, 8am – 7pm EST' },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                    <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center shrink-0">
                      <c.icon size={16} className="text-gold-400" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{c.label}</p>
                      <p className="text-slate-800 font-medium mt-0.5">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-5">Our offices</h3>
              <div className="space-y-4">
                {offices.map((o, i) => (
                  <div key={i} className="flex items-start gap-3 pb-4 border-b border-slate-100 last:border-0">
                    <MapPin size={14} className="text-gold-500 mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">{o.city}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{o.addr}</p>
                      <p className="text-xs text-slate-400">{o.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
