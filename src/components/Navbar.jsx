'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV_LINKS } from '../constants/global';
import { useRouter } from 'next/navigation';

const navLinks = [
  { label: 'Properties', href: '/properties' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [page, setPage] = useState('home');

  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navTo = (p) => {
    setMobileMenu(false);
    router.push(p);
  };

  return (
    // <header
    //   className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
    //     scrolled
    //       ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
    //       : 'bg-transparent'
    //   }`}
    // >
    //   <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

    //     {/* Logo */}
    //     <Link href="/" className="flex items-center gap-2.5 group">
    //       <span className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
    //         <span className="font-display text-white font-bold text-sm">L</span>
    //       </span>
    //       <span className="font-display text-xl font-bold text-slate-900 tracking-tight">
    //         Luxe<span className="text-gold-500">Realty</span>
    //       </span>
    //     </Link>

    //     {/* Desktop links */}
    //     <ul className="hidden md:flex items-center gap-8">
    //       {navLinks.map((link) => (
    //         <li key={link.href}>
    //           <Link
    //             href={link.href}
    //             className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200"
    //           >
    //             {link.label}
    //           </Link>
    //         </li>
    //       ))}
    //     </ul>

    //     {/* Desktop CTA */}
    //     <div className="hidden md:flex items-center gap-3">
    //       <a
    //         href="tel:+15550100200"
    //         className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors"
    //       >
    //         <Phone size={14} />
    //         +1 555 010 0200
    //       </a>
    //       <Link href="/properties" className="btn-primary">
    //         Browse Homes
    //       </Link>
    //     </div>

    //     {/* Mobile toggle */}
    //     <button
    //       onClick={() => setOpen(!open)}
    //       className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
    //       aria-label="Toggle menu"
    //     >
    //       {open ? <X size={22} /> : <Menu size={22} />}
    //     </button>
    //   </nav>

    //   {/* Mobile menu */}
    //   {open && (
    //     <div className="md:hidden bg-white border-t border-slate-100 px-6 pb-6 pt-3 space-y-1">
    //       {navLinks.map((link) => (
    //         <Link
    //           key={link.href}
    //           href={link.href}
    //           onClick={() => setOpen(false)}
    //           className="block py-3 text-base font-medium text-slate-700 hover:text-slate-900 border-b border-slate-50 last:border-0"
    //         >
    //           {link.label}
    //         </Link>
    //       ))}
    //       <div className="pt-3">
    //         <Link href="/properties" className="btn-primary w-full justify-center" onClick={() => setOpen(false)}>
    //           Browse Homes
    //         </Link>
    //       </div>
    //     </div>
    //   )}
    // </header>
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,12,15,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => navTo('home')} className="flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-[#8DC63F] flex items-center justify-center text-black font-black text-sm">
            O
          </div>
          <span className="text-white font-display font-bold text-lg">
            <span className="font-black">Oparah</span>{' '}
            <span className="font-normal text-white/70">Realty</span>
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ link, label }) => (
            <button
              key={link}
              onClick={() => navTo(`/${link}`)}
              className="text-sm text-white/70 hover:text-white transition-colors font-medium"
            >
              {label}
            </button>
          ))}
          <a
            href="tel:+2348050480659"
            className="flex items-center gap-2 text-[#8DC63F] text-sm font-semibold"
          >
            <span>📞</span> +234 805 048 0659
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden text-white p-2">
          <div className="space-y-1.5">
            <div
              className="w-6 h-0.5 bg-white transition-all"
              style={{ transform: mobileMenu ? 'rotate(45deg) translate(4px,4px)' : '' }}
            />
            <div
              className="w-6 h-0.5 bg-white transition-all"
              style={{ opacity: mobileMenu ? 0 : 1 }}
            />
            <div
              className="w-6 h-0.5 bg-white transition-all"
              style={{ transform: mobileMenu ? 'rotate(-45deg) translate(4px,-4px)' : '' }}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-t border-white/10 px-6 py-4 space-y-4"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => navTo(pageMap[link] || 'home')}
                className="block w-full text-left text-white/70 hover:text-[#8DC63F] py-2 text-base transition-colors"
              >
                {link}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
