'use client';
import { AnimatePresence, motion } from 'framer-motion';
import VirtualTourPanel from '../../../components/virtualTourPanel/VirtualTourPanel';
import { PROPERTIES, PROPERTY_DETAILS } from '../../../data';
import { useParams } from 'next/navigation';
import { useRef, useState } from 'react';
export default function PropertyDetailPage({ setPage, setSelectedProperty }) {
  const { id } = useParams();
  const details = PROPERTY_DETAILS[id] || PROPERTY_DETAILS[1];
  const [activeGalleryIdx, setActiveGalleryIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [saved, setSaved] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: `I'm interested in  Please contact me.`,
  });
  const [formSent, setFormSent] = useState(false);
  const [tourMode, setTourMode] = useState(false);
  const stickyRef = useRef(null);
  const G = '#8DC63F';

  const TABS = ['overview', 'features', 'floor plan', 'investment', 'virtual tour', 'location'];

  const property = PROPERTIES.find((p) => p.id == id);

  console.log(property, id);

  const openLightbox = (idx) => {
    setLightboxIdx(idx);
    setLightboxOpen(true);
  };

  const submitForm = () => {
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  const similar = PROPERTIES.filter(
    (p) =>
      p.id !== property.id &&
      (p.type === property.type ||
        p.location.includes(property.location.split(',')[1]?.trim() || ''))
  ).slice(0, 3);

  return (
    <div className="bg-[#0F1114] min-h-screen pt-16">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-2 text-sm">
        <button
          onClick={() => setPage('home')}
          className="text-white/40 hover:text-white transition-colors"
        >
          Home
        </button>
        <span className="text-white/20">›</span>
        <button
          onClick={() => setPage('properties')}
          className="text-white/40 hover:text-white transition-colors"
        >
          Properties
        </button>
        <span className="text-white/20">›</span>
        <span className="text-white/70 truncate">{property.title}</span>
      </div>

      {/* ── GALLERY ─────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="grid grid-cols-4 grid-rows-2 gap-2 rounded-2xl overflow-hidden h-[420px] lg:h-[520px]">
          {/* Main */}
          <motion.div
            className="col-span-4 lg:col-span-2 row-span-2 relative cursor-pointer group"
            onClick={() => openLightbox(0)}
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={details.gallery[0]}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            <div className="absolute bottom-4 left-4">
              <span
                className="px-3 py-1 rounded-full text-xs font-bold text-black"
                style={{ background: G }}
              >
                {property.tag}
              </span>
            </div>
          </motion.div>
          {/* Side grid */}
          {details.gallery.slice(1, 5).map((img, i) => (
            <motion.div
              key={i}
              className="hidden lg:block relative cursor-pointer group overflow-hidden"
              onClick={() => openLightbox(i + 1)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.25 }}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300" />
              {i === 3 && details.gallery.length > 5 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white font-display font-bold text-lg">
                    +{details.gallery.length - 5} Photos
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        {/* Gallery action row */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex gap-2">
            {details.gallery.slice(0, 6).map((img, i) => (
              <motion.button
                key={i}
                onClick={() => openLightbox(i)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-10 rounded-lg overflow-hidden border-2 transition-all"
                style={{ borderColor: activeGalleryIdx === i ? G : 'transparent' }}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover"
                  onClick={() => setActiveGalleryIdx(i)}
                />
              </motion.button>
            ))}
          </div>
          <div className="flex gap-2">
            <motion.button
              onClick={() => setTourMode(true)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold transition-all"
              style={{
                borderColor: 'rgba(141,198,63,0.4)',
                color: G,
                background: 'rgba(141,198,63,0.06)',
              }}
            >
              <span>⟳</span> Virtual Tour
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold text-white/60 hover:text-white transition-all"
              style={{ borderColor: 'rgba(255,255,255,0.12)' }}
            >
              <span>⤢</span> All Photos
            </motion.button>
          </div>
        </div>
      </div>

      {/* Virtual Tour Modal */}
      <AnimatePresence>
        {tourMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-6"
            onClick={() => setTourMode(false)}
          >
            <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-display font-bold text-xl">
                  360° Virtual Tour — {property.title}
                </h3>
                <button
                  onClick={() => setTourMode(false)}
                  className="text-white/50 hover:text-white text-2xl"
                >
                  ✕
                </button>
              </div>
              <VirtualTourPanel images={details.gallery} />
              <p className="text-white/40 text-xs font-mono text-center mt-3">
                Click and drag to rotate. Press ESC to close.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MAIN CONTENT ────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT COLUMN */}
          <div className="flex-1 min-w-0">
            {/* Title Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold text-black"
                      style={{ background: G }}
                    >
                      {property.type}
                    </span>
                    <span className="text-white/40 font-mono text-xs px-2 py-1 rounded-full border border-white/10">
                      {details.legalStatus}
                    </span>
                    <span className="text-white/40 font-mono text-xs">
                      👁 {details.views.toLocaleString()} views
                    </span>
                    <span className="text-white/40 font-mono text-xs">
                      🤍 {details.saved} saved
                    </span>
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-display font-bold text-white leading-tight mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center gap-2 text-white/50 text-sm">
                    <span>📍</span>
                    <span>{property.location}</span>
                    <span className="ml-2 text-white/30">·</span>
                    <span className="text-white/30 font-mono text-xs">{details.agent.listed}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="text-3xl font-display font-black" style={{ color: G }}>
                    {property.price}
                  </div>
                  <div className="font-mono text-xs text-white/30">
                    ≈ $
                    {Math.round(
                      parseInt(property.price.replace(/[^\d]/g, '')) / 1600
                    ).toLocaleString()}{' '}
                    USD
                  </div>
                  <motion.button
                    onClick={() => setSaved((s) => !s)}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg border transition-all"
                    style={{
                      borderColor: saved ? 'rgba(141,198,63,0.5)' : 'rgba(255,255,255,0.12)',
                      color: saved ? G : 'rgba(255,255,255,0.5)',
                      background: saved ? 'rgba(141,198,63,0.08)' : 'transparent',
                    }}
                  >
                    {saved ? '♥ Saved' : '♡ Save'}
                  </motion.button>
                </div>
              </div>

              {/* Key stats strip */}
              <div
                className="flex gap-6 flex-wrap mt-5 pt-5 border-t"
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              >
                {[
                  { icon: '🛏', label: 'Bedrooms', value: property.beds },
                  { icon: '🚿', label: 'Bathrooms', value: property.baths },
                  { icon: '📐', label: 'Area', value: property.sqft + ' sqft' },
                  { icon: '🏗', label: 'Year Built', value: details.specs.yearBuilt },
                  { icon: '🚗', label: 'Parking', value: details.specs.parking + ' spaces' },
                  { icon: '📋', label: 'Title', value: details.specs.titleDoc },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center gap-1 min-w-[72px]">
                    <span className="text-xl">{stat.icon}</span>
                    <span className="text-white font-display font-bold text-sm">{stat.value}</span>
                    <span className="text-white/40 text-xs font-mono">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tab Navigation */}
            <div
              className="flex gap-1 bg-white/3 rounded-xl p-1 mb-8 overflow-x-auto"
              style={{ border: '1px solid rgba(255,255,255,0.06)' }}
            >
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold capitalize transition-all"
                  style={{
                    background: activeTab === tab ? G : 'transparent',
                    color: activeTab === tab ? '#000' : 'rgba(255,255,255,0.5)',
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* OVERVIEW */}
                {activeTab === 'overview' && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-white font-display font-bold text-xl mb-4">
                        About This Property
                      </h2>
                      <p className="text-white/60 leading-relaxed text-base">
                        {details.description}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-white font-display font-semibold text-lg mb-4">
                        Property Specifications
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {Object.entries(details.specs).map(([k, v]) => (
                          <div
                            key={k}
                            className="flex items-center justify-between px-4 py-3 rounded-xl"
                            style={{
                              background: 'rgba(255,255,255,0.03)',
                              border: '1px solid rgba(255,255,255,0.06)',
                            }}
                          >
                            <span className="text-white/40 text-sm capitalize">
                              {k.replace(/([A-Z])/g, ' $1')}
                            </span>
                            <span className="text-white font-semibold text-sm">{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-display font-semibold text-lg mb-4">
                        Nearby Landmarks
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {details.nearby.map((n, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl"
                            style={{
                              background: 'rgba(255,255,255,0.03)',
                              border: '1px solid rgba(255,255,255,0.06)',
                            }}
                          >
                            <span style={{ color: G }}>📍</span>
                            <span className="text-white/60 text-sm">{n}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* FEATURES */}
                {activeTab === 'features' && (
                  <div>
                    <h2 className="text-white font-display font-bold text-xl mb-6">
                      Property Features & Amenities
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {details.features.map((f, i) => (
                        <motion.div
                          key={f}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.04 }}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl group hover:border-[#8DC63F]/30 transition-all cursor-default"
                          style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.06)',
                          }}
                        >
                          <span
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ background: G }}
                          />
                          <span className="text-white/70 text-sm">{f}</span>
                        </motion.div>
                      ))}
                    </div>
                    <div
                      className="mt-8 p-5 rounded-2xl"
                      style={{
                        background: 'rgba(141,198,63,0.06)',
                        border: '1px solid rgba(141,198,63,0.2)',
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">🔒</span>
                        <div>
                          <div className="text-white font-semibold mb-1">
                            Security & Infrastructure
                          </div>
                          <div className="text-white/50 text-sm">
                            This property includes 24/7 manned security, CCTV surveillance,
                            perimeter fencing, automated gates, diesel generator with automatic
                            changeover, and a 10,000L overhead water storage system.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* FLOOR PLAN */}
                {activeTab === 'floor plan' && (
                  <div>
                    <h2 className="text-white font-display font-bold text-xl mb-6">
                      Floor Plan & Dimensions
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
                      {Object.entries(details.floorPlan).map(([k, v]) => (
                        <div
                          key={k}
                          className="text-center p-5 rounded-xl"
                          style={{
                            background: 'rgba(141,198,63,0.06)',
                            border: '1px solid rgba(141,198,63,0.15)',
                          }}
                        >
                          <div
                            className="text-white font-display font-bold text-lg"
                            style={{ color: G }}
                          >
                            {v}
                          </div>
                          <div className="text-white/40 text-xs mt-1 capitalize">
                            {k.replace(/([A-Z])/g, ' $1')}
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Stylised floor plan SVG */}
                    <div
                      className="rounded-2xl p-6 border"
                      style={{
                        background: 'rgba(255,255,255,0.02)',
                        borderColor: 'rgba(255,255,255,0.08)',
                      }}
                    >
                      <div className="text-white/40 text-xs font-mono mb-4 text-center">
                        FLOOR PLAN — NOT TO SCALE · INDICATIVE ONLY
                      </div>
                      <svg
                        viewBox="0 0 700 420"
                        className="w-full max-h-80"
                        style={{ filter: 'drop-shadow(0 0 20px rgba(141,198,63,0.1))' }}
                      >
                        <rect width="700" height="420" fill="#0a0c0f" rx="12" />
                        {/* Outer wall */}
                        <rect
                          x="40"
                          y="30"
                          width="620"
                          height="360"
                          fill="none"
                          stroke="#8DC63F"
                          strokeWidth="3"
                          rx="4"
                        />
                        {/* Rooms */}
                        <rect
                          x="40"
                          y="30"
                          width="280"
                          height="180"
                          fill="rgba(141,198,63,0.05)"
                          stroke="#8DC63F"
                          strokeWidth="1.5"
                        />
                        <text
                          x="180"
                          y="125"
                          textAnchor="middle"
                          fill="rgba(141,198,63,0.8)"
                          fontSize="12"
                          fontFamily="DM Mono"
                        >
                          MASTER SUITE
                        </text>
                        <text
                          x="180"
                          y="143"
                          textAnchor="middle"
                          fill="rgba(255,255,255,0.3)"
                          fontSize="10"
                          fontFamily="DM Mono"
                        >
                          1,400 sqft
                        </text>

                        <rect
                          x="320"
                          y="30"
                          width="340"
                          height="180"
                          fill="rgba(141,198,63,0.03)"
                          stroke="#8DC63F"
                          strokeWidth="1.5"
                        />
                        <text
                          x="490"
                          y="115"
                          textAnchor="middle"
                          fill="rgba(141,198,63,0.8)"
                          fontSize="12"
                          fontFamily="DM Mono"
                        >
                          LIVING / DINING
                        </text>
                        <text
                          x="490"
                          y="133"
                          textAnchor="middle"
                          fill="rgba(255,255,255,0.3)"
                          fontSize="10"
                          fontFamily="DM Mono"
                        >
                          2,000 sqft
                        </text>

                        <rect
                          x="40"
                          y="210"
                          width="180"
                          height="180"
                          fill="rgba(141,198,63,0.03)"
                          stroke="#8DC63F"
                          strokeWidth="1.5"
                        />
                        <text
                          x="130"
                          y="305"
                          textAnchor="middle"
                          fill="rgba(141,198,63,0.7)"
                          fontSize="11"
                          fontFamily="DM Mono"
                        >
                          BED 2
                        </text>
                        <text
                          x="130"
                          y="321"
                          textAnchor="middle"
                          fill="rgba(255,255,255,0.3)"
                          fontSize="9"
                          fontFamily="DM Mono"
                        >
                          600 sqft
                        </text>

                        <rect
                          x="220"
                          y="210"
                          width="180"
                          height="180"
                          fill="rgba(141,198,63,0.03)"
                          stroke="#8DC63F"
                          strokeWidth="1.5"
                        />
                        <text
                          x="310"
                          y="305"
                          textAnchor="middle"
                          fill="rgba(141,198,63,0.7)"
                          fontSize="11"
                          fontFamily="DM Mono"
                        >
                          BED 3
                        </text>
                        <text
                          x="310"
                          y="321"
                          textAnchor="middle"
                          fill="rgba(255,255,255,0.3)"
                          fontSize="9"
                          fontFamily="DM Mono"
                        >
                          600 sqft
                        </text>

                        <rect
                          x="400"
                          y="210"
                          width="140"
                          height="180"
                          fill="rgba(141,198,63,0.03)"
                          stroke="#8DC63F"
                          strokeWidth="1.5"
                        />
                        <text
                          x="470"
                          y="295"
                          textAnchor="middle"
                          fill="rgba(141,198,63,0.7)"
                          fontSize="11"
                          fontFamily="DM Mono"
                        >
                          KITCHEN
                        </text>
                        <text
                          x="470"
                          y="311"
                          textAnchor="middle"
                          fill="rgba(255,255,255,0.3)"
                          fontSize="9"
                          fontFamily="DM Mono"
                        >
                          400 sqft
                        </text>

                        <rect
                          x="540"
                          y="210"
                          width="120"
                          height="180"
                          fill="rgba(141,198,63,0.04)"
                          stroke="#8DC63F"
                          strokeWidth="1.5"
                        />
                        <text
                          x="600"
                          y="290"
                          textAnchor="middle"
                          fill="rgba(141,198,63,0.7)"
                          fontSize="10"
                          fontFamily="DM Mono"
                        >
                          TERRACE
                        </text>
                        <text
                          x="600"
                          y="306"
                          textAnchor="middle"
                          fill="rgba(255,255,255,0.3)"
                          fontSize="9"
                          fontFamily="DM Mono"
                        >
                          800 sqft
                        </text>

                        {/* Doors */}
                        {[
                          [170, 210],
                          [315, 210],
                          [395, 100],
                        ].map(([x, y], i) => (
                          <line
                            key={i}
                            x1={x}
                            y1={y}
                            x2={x + 25}
                            y2={y}
                            stroke="#8DC63F"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        ))}

                        {/* North arrow */}
                        <g transform="translate(650,60)">
                          <circle
                            cx="0"
                            cy="0"
                            r="18"
                            fill="rgba(141,198,63,0.1)"
                            stroke="#8DC63F"
                            strokeWidth="1"
                          />
                          <text x="0" y="-6" textAnchor="middle" fill="#8DC63F" fontSize="14">
                            ↑
                          </text>
                          <text
                            x="0"
                            y="9"
                            textAnchor="middle"
                            fill="rgba(255,255,255,0.5)"
                            fontSize="8"
                            fontFamily="DM Mono"
                          >
                            N
                          </text>
                        </g>
                      </svg>
                    </div>
                    <p className="text-white/30 text-xs font-mono text-center mt-3">
                      Floor plan is indicative. Request certified plans from your agent.
                    </p>
                  </div>
                )}

                {/* INVESTMENT */}
                {activeTab === 'investment' && (
                  <div className="space-y-6">
                    <h2 className="text-white font-display font-bold text-xl">
                      Investment Analysis
                    </h2>
                    {/* ROI cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {[
                        {
                          label: 'Rental Yield',
                          value: details.roi.rentalYield + '%',
                          sub: 'Per annum',
                          good: true,
                        },
                        {
                          label: 'Capital Appreciation',
                          value: details.roi.capitalAppreciation + '%',
                          sub: 'Avg 5yr CAGR',
                          good: true,
                        },
                        {
                          label: 'Gross Rental Income',
                          value: details.roi.grossRent,
                          sub: 'Annual estimate',
                          good: false,
                        },
                        {
                          label: 'Net Rental Income',
                          value: details.roi.netRent,
                          sub: 'After service charges',
                          good: false,
                        },
                        {
                          label: 'Occupancy Rate',
                          value: details.roi.occupancyRate,
                          sub: 'Area average',
                          good: true,
                        },
                        {
                          label: 'Risk Score',
                          value: 'Low',
                          sub: 'Title verified · Liquid area',
                          good: true,
                        },
                      ].map((card, i) => (
                        <motion.div
                          key={card.label}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.06 }}
                          className="p-5 rounded-2xl"
                          style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: `1px solid ${card.good ? 'rgba(141,198,63,0.15)' : 'rgba(255,255,255,0.06)'}`,
                          }}
                        >
                          <div className="text-white/40 text-xs font-mono mb-1">{card.label}</div>
                          <div
                            className="text-2xl font-display font-bold"
                            style={{ color: card.good ? G : 'white' }}
                          >
                            {card.value}
                          </div>
                          <div className="text-white/30 text-xs mt-1">{card.sub}</div>
                        </motion.div>
                      ))}
                    </div>
                    <ROICalculator basePrice={property.price} roi={details.roi} />
                    <div
                      className="p-4 rounded-xl text-xs text-white/30 font-mono"
                      style={{
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      ⚠ Projections are estimates based on historical area data and are not
                      guaranteed. Past performance does not indicate future results. Consult a
                      financial advisor before investing.
                    </div>
                  </div>
                )}

                {/* VIRTUAL TOUR */}
                {activeTab === 'virtual tour' && (
                  <div>
                    <h2 className="text-white font-display font-bold text-xl mb-2">
                      360° Virtual Tour
                    </h2>
                    <p className="text-white/50 text-sm mb-6">
                      Drag left or right to pan around the property. Experience each room before you
                      visit.
                    </p>
                    <VirtualTourPanel images={details.gallery} />
                    <div className="grid grid-cols-3 gap-3 mt-4">
                      {[
                        'Living Room',
                        'Master Suite',
                        'Kitchen & Dining',
                        'Terrace',
                        'Master Bath',
                        'Garage',
                      ].map((room, i) => (
                        <motion.button
                          key={room}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="py-2.5 px-3 rounded-xl text-sm font-semibold transition-all"
                          style={{
                            background:
                              i === 0 ? 'rgba(141,198,63,0.12)' : 'rgba(255,255,255,0.03)',
                            color: i === 0 ? G : 'rgba(255,255,255,0.5)',
                            border: `1px solid ${i === 0 ? 'rgba(141,198,63,0.3)' : 'rgba(255,255,255,0.06)'}`,
                          }}
                        >
                          {room}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* LOCATION */}
                {activeTab === 'location' && (
                  <div>
                    <h2 className="text-white font-display font-bold text-xl mb-6">
                      Location & Neighbourhood
                    </h2>
                    {/* Map embed placeholder */}
                    <div
                      className="relative rounded-2xl overflow-hidden mb-6"
                      style={{
                        height: 320,
                        background: '#0a0c0f',
                        border: '1px solid rgba(141,198,63,0.2)',
                      }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80"
                        alt="Map"
                        className="w-full h-full object-cover opacity-40"
                      />
                      <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="w-10 h-10 rounded-full border-4 flex items-center justify-center text-xl"
                          style={{ borderColor: G, background: 'rgba(141,198,63,0.2)' }}
                        >
                          📍
                        </motion.div>
                        <div className="text-white font-display font-bold text-lg">
                          {property.location}
                        </div>
                        <a
                          href={`https://maps.google.com/?q=${encodeURIComponent(property.location)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 px-5 py-2 rounded-xl text-sm font-semibold text-black"
                          style={{ background: G }}
                        >
                          Open in Google Maps ↗
                        </a>
                      </div>
                      {/* Grid lines over map */}
                      <div
                        className="absolute inset-0 pointer-events-none opacity-20"
                        style={{
                          backgroundImage: `linear-gradient(${G} 1px,transparent 1px),linear-gradient(90deg,${G} 1px,transparent 1px)`,
                          backgroundSize: '40px 40px',
                        }}
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-white font-semibold mb-3">What's Nearby</h3>
                        <div className="space-y-2">
                          {details.nearby.map((n, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-3 py-2.5 px-4 rounded-xl"
                              style={{
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.06)',
                              }}
                            >
                              <span style={{ color: G }}>◉</span>
                              <span className="text-white/60 text-sm">{n}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-3">Area Scores</h3>
                        <div className="space-y-3">
                          {[
                            ['Security', 92],
                            ['Transport', 78],
                            ['Schools', 85],
                            ['Amenities', 95],
                            ['Investment', 96],
                          ].map(([label, score]) => (
                            <div key={label}>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-white/50">{label}</span>
                                <span className="font-mono font-bold" style={{ color: G }}>
                                  {score}/100
                                </span>
                              </div>
                              <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: score + '%' }}
                                  transition={{ duration: 0.8, delay: 0.2 }}
                                  className="h-full rounded-full"
                                  style={{ background: G }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:w-96 flex-shrink-0">
            <div className="sticky top-20 space-y-4">
              {/* Price card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl p-6"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div className="text-3xl font-display font-black mb-1" style={{ color: G }}>
                  {property.price}
                </div>
                <div className="text-white/40 text-sm mb-5">
                  {property.type} · {property.location}
                </div>

                <div className="flex gap-3 mb-5">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 py-3.5 rounded-xl font-bold text-black text-sm"
                    style={{ background: `linear-gradient(135deg,${G},#a8e050)` }}
                  >
                    Schedule Viewing
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 py-3.5 rounded-xl font-bold text-white text-sm border transition-all hover:bg-white/5"
                    style={{ borderColor: 'rgba(255,255,255,0.15)' }}
                  >
                    Make Offer
                  </motion.button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-3 rounded-xl font-semibold text-sm border flex items-center justify-center gap-2 transition-all hover:bg-white/5"
                  style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)' }}
                >
                  <span>💬</span> WhatsApp Agent
                </motion.button>
              </motion.div>

              {/* Agent card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="rounded-2xl p-5"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={details.agent.avatar}
                      alt={details.agent.name}
                      className="w-14 h-14 rounded-xl object-cover"
                    />
                    {details.agent.verified && (
                      <div
                        className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                        style={{ background: G }}
                      >
                        ✓
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="text-white font-display font-bold">{details.agent.name}</div>
                    <div className="text-white/40 text-xs mt-0.5">{details.agent.title}</div>
                    {details.agent.verified && (
                      <div className="text-xs mt-1 font-mono" style={{ color: G }}>
                        Verified Agent
                      </div>
                    )}
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <a
                    href={`tel:${details.agent.phone}`}
                    className="flex items-center gap-3 py-2.5 px-3 rounded-xl transition-all hover:bg-white/5"
                    style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <span style={{ color: G }}>📞</span>
                    <span className="text-white/70">{details.agent.phone}</span>
                  </a>
                  <a
                    href={`mailto:${details.agent.email}`}
                    className="flex items-center gap-3 py-2.5 px-3 rounded-xl transition-all hover:bg-white/5"
                    style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <span style={{ color: G }}>✉</span>
                    <span className="text-white/70">{details.agent.email}</span>
                  </a>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="rounded-2xl p-5"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <h3 className="text-white font-display font-bold mb-4">Send Enquiry</h3>
                <AnimatePresence mode="wait">
                  {formSent ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-8"
                    >
                      <div className="text-4xl mb-3">✅</div>
                      <div className="text-white font-semibold">Enquiry Sent!</div>
                      <div className="text-white/40 text-sm mt-1">
                        We'll be in touch within 2 hours.
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div key="form" className="space-y-3">
                      {[
                        { key: 'name', placeholder: 'Full Name', type: 'text' },
                        { key: 'email', placeholder: 'Email Address', type: 'email' },
                        { key: 'phone', placeholder: 'Phone Number', type: 'tel' },
                      ].map((field) => (
                        <input
                          key={field.key}
                          type={field.type}
                          placeholder={field.placeholder}
                          value={contactForm[field.key]}
                          onChange={(e) =>
                            setContactForm((f) => ({ ...f, [field.key]: e.target.value }))
                          }
                          className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/30 outline-none transition-all"
                          style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                          }}
                          onFocus={(e) => (e.target.style.borderColor = G)}
                          onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                        />
                      ))}
                      <textarea
                        rows={3}
                        placeholder="Your message…"
                        value={contactForm.message}
                        onChange={(e) => setContactForm((f) => ({ ...f, message: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/30 outline-none resize-none transition-all"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.1)',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = G)}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />
                      <motion.button
                        onClick={submitForm}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full py-3.5 rounded-xl font-bold text-black text-sm"
                        style={{ background: `linear-gradient(135deg,${G},#a8e050)` }}
                      >
                        Send Enquiry →
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Quick stats */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="rounded-2xl p-5"
                style={{
                  background: 'rgba(141,198,63,0.06)',
                  border: '1px solid rgba(141,198,63,0.2)',
                }}
              >
                <div className="text-xs font-mono mb-3" style={{ color: G }}>
                  INVESTMENT SNAPSHOT
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Yield', value: details.roi.rentalYield + '%' },
                    { label: 'Cap. Growth', value: details.roi.capitalAppreciation + '%' },
                    { label: 'Occupancy', value: details.roi.occupancyRate },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="font-display font-bold text-lg" style={{ color: G }}>
                        {s.value}
                      </div>
                      <div className="text-white/40 text-xs mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setActiveTab('investment')}
                  className="mt-3 w-full text-xs py-2 rounded-lg text-center transition-all hover:bg-white/5 text-white/40 hover:text-white border"
                  style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  Open Full ROI Calculator →
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        {similar.length > 0 && (
          <div className="mt-16 pt-12 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-white font-display font-bold text-2xl">Similar Properties</h2>
              <button
                onClick={() => setPage('properties')}
                className="text-sm font-semibold transition-colors hover:text-white"
                style={{ color: G }}
              >
                View All →
              </button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {similar.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  onClick={() => {
                    setSelectedProperty(p);
                    setPage('property-detail');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group rounded-2xl overflow-hidden border cursor-pointer"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    borderColor: 'rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="relative overflow-hidden h-44">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span
                      className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold text-black"
                      style={{ background: G }}
                    >
                      {p.type}
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="font-bold mb-0.5" style={{ color: G }}>
                      {p.price}
                    </div>
                    <div className="text-white font-display font-semibold text-sm">{p.title}</div>
                    <div className="text-white/40 text-xs mt-1">{p.location}</div>
                    <div
                      className="flex gap-4 text-white/40 text-xs mt-3 pt-3 border-t"
                      style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                    >
                      <span>{p.beds} Beds</span>
                      <span>{p.baths} Baths</span>
                      <span>{p.sqft} sqft</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={details.gallery}
            index={lightboxIdx}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
