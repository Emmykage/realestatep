'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV_LINKS } from '../constants/global';
import { useRouter } from 'next/navigation';
import { FaPhoneAlt } from 'react-icons/fa';
import logo from '../assets/logo/logo-transparent.png';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [desktopAboutOpen, setDesktopAboutOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navTo = (path) => {
    setMobileMenu(false);
    setAboutOpen(false);
    setDesktopAboutOpen(false);
    router.push(path);
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
      <div className="mx-auto flex h-17 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <div className="relative h-full w-44 bg-white">
          <Image
            src={logo}
            className="w-full h-full absolute object-cover scale-105 mt-2"
            alt="logo"
            onClick={() => navTo('/')}
          />
        </div>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ link, label, sub }) => {
            const hasSubmenu = Boolean(sub?.length);
            const isAbout = link === 'about';

            return (
              <div
                key={link}
                className="relative"
                onMouseEnter={() => {
                  if (isAbout && hasSubmenu) {
                    setDesktopAboutOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  if (isAbout) {
                    setDesktopAboutOpen(false);
                  }
                }}
              >
                <button
                  type="button"
                  onClick={() => {
                    if (hasSubmenu) {
                      setDesktopAboutOpen((prev) => !prev);
                    } else {
                      navTo(`/${link}`);
                    }
                  }}
                  aria-expanded={hasSubmenu ? desktopAboutOpen : undefined}
                  className="flex items-center gap-2 py-3 text-sm font-medium text-white/70 transition-colors hover:text-white"
                >
                  {label}

                  {hasSubmenu && (
                    <span
                      className={`text-xs transition-transform ${
                        desktopAboutOpen ? 'rotate-180' : ''
                      }`}
                    >
                      ▼
                    </span>
                  )}
                </button>

                {/* Desktop dropdown */}
                {hasSubmenu && (
                  <AnimatePresence>
                    {desktopAboutOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full z-50 min-w-52 pt-2"
                      >
                        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#171A1F] py-2 shadow-xl">
                          {sub.map((item) => (
                            <button
                              key={item.link}
                              type="button"
                              onClick={() => navTo(`/${item.link}`)}
                              className="block w-full px-4 py-3 text-left text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-[#8DC63F]"
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}

          {/* Phone */}
          <a
            href="tel:+2348131529888"
            className="flex items-center gap-2 text-sm font-semibold text-[#8DC63F]"
          >
            <FaPhoneAlt />
            +234 813 152 9888
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenu((prev) => !prev)}
          className="p-2 text-white md:hidden"
          aria-label={mobileMenu ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenu}
        >
          <div className="space-y-1.5">
            <div
              className="h-0.5 w-6 bg-white transition-all"
              style={{
                transform: mobileMenu ? 'rotate(45deg) translate(4px,4px)' : '',
              }}
            />

            <div
              className="h-0.5 w-6 bg-white transition-all"
              style={{ opacity: mobileMenu ? 0 : 1 }}
            />

            <div
              className="h-0.5 w-6 bg-white transition-all"
              style={{
                transform: mobileMenu ? 'rotate(-45deg) translate(4px,-4px)' : '',
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-black/95 px-6 py-4 md:hidden"
          >
            <div className="space-y-2">
              {NAV_LINKS.map(({ link, label, sub }) => {
                const hasSubmenu = Boolean(sub?.length);
                const isAbout = link === 'about';

                return (
                  <div key={link}>
                    {hasSubmenu ? (
                      <>
                        <button
                          type="button"
                          onClick={() => setAboutOpen((prev) => !prev)}
                          aria-expanded={aboutOpen}
                          className="flex w-full items-center justify-between py-3 text-left text-base text-white/70 transition-colors hover:text-[#8DC63F]"
                        >
                          {label}

                          <span
                            className={`text-xs transition-transform ${
                              aboutOpen ? 'rotate-180' : ''
                            }`}
                          >
                            ▼
                          </span>
                        </button>

                        <AnimatePresence>
                          {aboutOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-3 border-l border-white/10 pl-4">
                                {sub.map((item) => (
                                  <button
                                    key={item.link}
                                    type="button"
                                    onClick={() => navTo(`/${item.link}`)}
                                    className="block w-full py-3 text-left text-sm text-white/60 transition-colors hover:text-[#8DC63F]"
                                  >
                                    {item.label}
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <button
                        type="button"
                        onClick={() => navTo(`/${link}`)}
                        className="block w-full py-3 text-left text-base text-white/70 transition-colors hover:text-[#8DC63F]"
                      >
                        {label}
                      </button>
                    )}
                  </div>
                );
              })}

              {/* Mobile phone */}
              <a
                href="tel:+2348131529888"
                className="flex items-center gap-2 py-3 text-sm font-semibold text-[#8DC63F]"
              >
                <FaPhoneAlt />
                +234 813 152 9888
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
