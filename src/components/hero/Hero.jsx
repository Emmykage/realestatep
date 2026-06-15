'use client';
// import SearchBar from "./SearchBar";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';

import SearchBar from '../SearchBar';
import { useState } from 'react';
import { STATS } from '../../data';

// export default function HeroBanner() {
//   return (
//     <section className="relative overflow-hidden">

//       <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />

//       <div className="max-w-7xl mx-auto px-6 py-24 lg:py-36 relative">

//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           <div>
//             <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm">
//               Future of Real Estate
//             </span>

//             <h1 className="text-6xl font-bold mt-8 leading-tight text-slate-900">
//               Find Your Dream Home With
//               <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
//                 {" "}Immersive Property Exploration
//               </span>
//             </h1>

//             <p className="text-slate-600 mt-6 text-lg">
//               Explore premium properties today and experience
//               next-generation virtual property viewing tomorrow.
//             </p>

//             <div className="mt-10">
//               <SearchBar />
//             </div>
//           </div>

//           <div className="relative">
//             <div className="bg-white rounded-[40px] shadow-2xl p-4 border border-slate-100">

//               <img
//                 src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
//                 alt=""
//                 className="rounded-3xl h-[500px] w-full object-cover"
//               />

//             </div>

//             <div className="absolute -bottom-8 -left-8 bg-white p-5 rounded-2xl shadow-xl">
//               <p className="font-bold text-2xl">500+</p>
//               <p className="text-slate-500">Premium Listings</p>
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

function HeroBanner() {
  const [tab, setTab] = useState('For Sale');
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 160]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative h-screen min-h-[700px] flex flex-col overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-gold-50 opacity-60" />
        <div className="absolute top-1/2 -left-60 w-[500px] h-[500px] rounded-full bg-slate-100 opacity-70" />
        {/* <svg
          className="absolute inset-0 w-full h-full opacity-[0.035]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0F172A" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg> */}
      </div>
      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <video
          autoPlay
          loop
          muted
          src="/video/backgrouund-video.mp4"
          className="w-full h-full object-cover"
        ></video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0F1114]" />
      </motion.div>

      {/* Animated grid lines */}
      <motion.div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#8DC63F 1px,transparent 1px),linear-gradient(90deg,#8DC63F 1px,transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <motion.div
        style={{ opacity }}
        className="relative flex-1 flex flex-col justify-center items-center text-center px-6 pt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block bg-[#8DC63F]/10 border border-[#8DC63F]/30 text-[#8DC63F] font-mono text-xs tracking-widest uppercase px-4 py-2 rounded-full">
            Lagos · Abuja · Port Harcourt
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.05] mb-5"
        >
          Find Your
          <br />
          <span className="text-[#8DC63F]">Perfect Property</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-white/60 text-xl max-w-xl mb-10"
        >
          We minimise risk & maximise ROI on your real estate investment across Nigeria's prime
          corridors.
        </motion.p>

        {/* Search card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-full max-w-3xl"
        >
          {/* Tabs */}
          <div className="flex mb-0 gap-1 bg-black/40 backdrop-blur-md rounded-t-2xl p-1 border-t border-x border-white/10">
            {['For Sale', 'For Rent', 'Shortlet'].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{
                  background: tab === t ? '#8DC63F' : 'transparent',
                  color: tab === t ? '#000' : 'rgba(255,255,255,0.5)',
                }}
              >
                {t}
              </button>
            ))}
          </div>
          {/* Inputs */}
          <div className="bg-white/95 backdrop-blur-md rounded-b-2xl p-3 flex flex-col sm:flex-row gap-2">
            <input
              className="flex-1 px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 text-sm outline-none focus:border-[#8DC63F]"
              placeholder="Place, Neighbourhood or City"
            />
            <select className="px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-500 text-sm outline-none focus:border-[#8DC63F]">
              <option>Any Area</option>
              <option>Ikoyi</option>
              <option>Lekki</option>
              <option>Victoria Island</option>
            </select>
            <select className="px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-500 text-sm outline-none focus:border-[#8DC63F]">
              <option>Any Type</option>
              <option>Apartment</option>
              <option>Duplex</option>
              <option>Penthouse</option>
            </select>
            <motion.button
              onClick={() => setPage('properties')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-7 py-3 rounded-xl font-bold text-black text-sm"
              style={{ background: 'linear-gradient(135deg,#8DC63F,#a8e050)' }}
            >
              Search
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="relative z-10 bg-black/60 backdrop-blur-md border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-display font-bold text-[#8DC63F]">{s.value}</div>
              <div className="text-white/40 text-xs mt-1 font-mono uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
export default HeroBanner;
