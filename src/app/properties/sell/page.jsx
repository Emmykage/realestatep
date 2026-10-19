'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Building2, CheckCircle2, Clock, Mail } from 'lucide-react';

export default function SellComingSoonPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0F1114] px-6 pb-16 pt-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#8DC63F]/10 blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#8DC63F]/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto w-full max-w-3xl text-center"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-[#8DC63F]/20 bg-[#8DC63F]/10"
        >
          <Building2 size={36} className="text-[#8DC63F]" strokeWidth={1.5} />
        </motion.div>

        {/* Status */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8DC63F]/20 bg-[#8DC63F]/5 px-4 py-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8DC63F] opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8DC63F]" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8DC63F]">
            Coming Soon
          </span>
        </div>

        {/* Heading */}
        <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          Your Property.
          <span className="mt-2 block text-[#8DC63F]">Our Next Chapter.</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
          We’re preparing a better way for property owners to connect with serious buyers. Our
          property selling service is coming soon, designed to help you showcase your property and
          navigate your next move with confidence.
        </p>

        {/* Features */}
        <div className="mb-10 grid gap-4 text-left sm:grid-cols-3">
          {['Showcase your property', 'Reach potential buyers', 'Get guided support'].map(
            (item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.12 }}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#8DC63F]" />
                <span className="text-sm leading-relaxed text-white/70">{item}</span>
              </motion.div>
            )
          )}
        </div>

        {/* Contact card */}
        <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <div className="mb-3 flex items-center justify-center gap-2 text-white">
            <Clock size={18} className="text-[#8DC63F]" />
            <h2 className="text-lg font-semibold">Looking to sell now?</h2>
          </div>

          <p className="mx-auto mb-6 max-w-lg text-sm leading-relaxed text-white/50">
            You don’t have to wait for the launch. Get in touch with our team to discuss your
            property and the next steps.
          </p>

          <a
            href="mailto:contact@benolproperty.com?subject=Property%20Selling%20Enquiry"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#8DC63F] px-6 py-3.5 font-semibold text-[#0F1114] transition-colors hover:bg-[#9cdb4b]"
          >
            <Mail size={18} />
            Enquire About Selling
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Back navigation */}
        <Link
          href="/properties"
          className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-[#8DC63F]"
        >
          <ArrowLeft size={16} />
          Back to Properties
        </Link>
      </motion.div>
    </main>
  );
}
