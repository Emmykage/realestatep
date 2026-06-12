import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react'

const footerLinks = {
  Company:    ['About Us', 'Our Team', 'Careers', 'Press'],
  Properties: ['Buy',      'Rent',     'Sell',    'New Builds'],
  Resources:  ['Blog',     'Guides',   'Market Report', 'FAQ'],
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Brand */}
        <div className="lg:col-span-2 space-y-5">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-gold-500 flex items-center justify-center">
              <span className="font-display text-slate-900 font-bold text-sm">L</span>
            </span>
            <span className="font-display text-xl font-bold text-white tracking-tight">
              Luxe<span className="text-gold-400">Realty</span>
            </span>
          </Link>

          <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
            Helping discerning buyers and sellers navigate premium real estate
            since 2008. Trust built on results.
          </p>

          <div className="space-y-2.5 text-sm">
            <a href="tel:+15550100200" className="flex items-center gap-2.5 hover:text-white transition-colors">
              <Phone size={14} className="text-gold-400 shrink-0" />
              +1 (555) 010-0200
            </a>
            <a href="mailto:hello@luxerealty.com" className="flex items-center gap-2.5 hover:text-white transition-colors">
              <Mail size={14} className="text-gold-400 shrink-0" />
              hello@luxerealty.com
            </a>
            <span className="flex items-center gap-2.5">
              <MapPin size={14} className="text-gold-400 shrink-0" />
              340 Park Avenue, New York, NY 10022
            </span>
          </div>

          <div className="flex gap-3 pt-1">
            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:border-gold-400 hover:text-gold-400 transition-colors"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white mb-4">{category}</h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2025 LuxeRealty Inc. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
