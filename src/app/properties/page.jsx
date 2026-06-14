'use client';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { useState } from 'react';
import { PROPERTIES } from '../../data';
import { useRouter } from 'next/navigation';

function PropertiesPage() {
  const router = useRouter();
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? PROPERTIES : PROPERTIES.filter((p) => p.type === filter);
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
        <motion.div initial="hidden" animate="show" variants={stagger} className="mb-12">
          <motion.p
            variants={fadeUp}
            className="text-[#8DC63F] font-mono text-sm tracking-widest uppercase mb-3"
          >
            Listings
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl font-display font-bold text-white">
            Available Properties
          </motion.h1>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex gap-3 mb-10 flex-wrap"
        >
          {['All', 'For Sale', 'For Rent', 'Shortlet'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200"
              style={{
                background: filter === f ? '#8DC63F' : 'transparent',
                color: filter === f ? '#000' : 'rgba(255,255,255,0.5)',
                borderColor: filter === f ? '#8DC63F' : 'rgba(255,255,255,0.15)',
              }}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((p, i) => (
              <motion.div
                onClick={router.push(`/properties/${p.id}`)}
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group rounded-2xl overflow-hidden border border-white/8 bg-white/3 cursor-pointer"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold text-black"
                      style={{ background: '#8DC63F' }}
                    >
                      {p.tag}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 text-white border border-white/20">
                      {p.type}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-[#8DC63F] font-bold text-xl mb-1">{p.price}</div>
                  <div className="text-white font-display font-semibold text-lg leading-tight">
                    {p.title}
                  </div>
                  <div className="text-white/40 text-sm mt-1 mb-4">{p.location}</div>
                  <div className="flex gap-5 text-white/50 text-sm border-t border-white/8 pt-4">
                    <span>{p.beds} Beds</span>
                    <span>{p.baths} Baths</span>
                    <span>{p.sqft} sqft</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default PropertiesPage;
