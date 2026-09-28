'use client';

import { useState, useEffect } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { NAV_LINKS } from '../constants/global';
import { useRouter } from 'next/navigation';
import { FaPhoneAlt } from 'react-icons/fa';

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
        <button onClick={() => navTo('/')} className="flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-[#8DC63F] flex items-center justify-center text-black font-black text-sm">
            O
          </div>
          <span className="text-white font-display font-bold text-lg">
            <span className="font-black">FlatEarth</span>{' '}
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
            <span>
              <FaPhoneAlt />
            </span>{' '}
            +234 805 048 0659
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
            {NAV_LINKS.map(({ link, label }) => (
              <button
                key={link}
                onClick={() => navTo(`/${link}`)}
                className="block w-full text-left text-white/70 hover:text-[#8DC63F] py-2 text-base transition-colors"
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
