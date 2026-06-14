import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { SCAN_PROPERTIES } from '../../data';
function PropertyScanner() {
  const [active, setActive] = useState(null);
  const [scanAngle, setScanAngle] = useState(0);
  const [scanning, setScanning] = useState(false);
  const [found, setFound] = useState(null);
  const animRef = useRef(null);
  const panRef = useRef(0);
  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const stagger = { show: { transition: { staggerChildren: 0.1 } } };

  const startScan = () => {
    setScanning(true);
    setFound(null);
    setActive(null);
    let angle = 0;
    const duration = 3500;
    const start = performance.now();
    const animate = (now) => {
      const t = Math.min((now - start) / duration, 1);
      angle = t * 360;
      panRef.current = angle;
      setScanAngle(angle);
      if (t < 1) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        const pick = SCAN_PROPERTIES[Math.floor(Math.random() * SCAN_PROPERTIES.length)];
        setFound(pick);
        setActive(pick.id);
        setScanning(false);
      }
    };
    animRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => () => cancelAnimationFrame(animRef.current), []);

  return (
    <section className="relative py-28 bg-[#0a0c0f] overflow-hidden">
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(#8DC63F 1px,transparent 1px),linear-gradient(90deg,#8DC63F 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-[#8DC63F] font-mono text-sm tracking-widest uppercase mb-3"
          >
            3D Property Scanner
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-5xl font-display font-bold text-white leading-tight"
          >
            Scan Lagos.
            <br />
            <span className="text-[#8DC63F]">Find Your Building.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 mt-4 max-w-lg text-lg">
            Our aerial scanning technology lets you virtually pan across Lagos and lock onto
            specific properties in real time.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Scanner Viewport */}
          <div className="relative">
            <div
              className="relative rounded-2xl overflow-hidden border border-[#8DC63F]/20 bg-black aspect-[4/3]"
              style={{ perspective: '1000px' }}
            >
              {/* City panorama — animates on scan */}
              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1400&q=80)',
                  backgroundSize: '300% 100%',
                }}
                animate={
                  scanning
                    ? { backgroundPositionX: ['0%', '200%'] }
                    : { backgroundPositionX: `${(scanAngle / 360) * 200}%` }
                }
                transition={scanning ? { duration: 3.5, ease: 'linear' } : { duration: 0 }}
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Scan line */}
              {scanning && (
                <motion.div
                  className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#8DC63F] to-transparent opacity-80"
                  animate={{ left: ['0%', '100%'] }}
                  transition={{ duration: 3.5, ease: 'linear' }}
                />
              )}

              {/* HUD overlay */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-between items-start">
                  <div className="text-[#8DC63F] font-mono text-xs space-y-1">
                    <div>LAT: 6.4541° N</div>
                    <div>LNG: 3.3947° E</div>
                    <div>ALT: 420m</div>
                  </div>
                  <div className="text-[#8DC63F] font-mono text-xs text-right space-y-1">
                    <div>{scanning ? 'SCANNING...' : found ? 'TARGET LOCKED' : 'STANDBY'}</div>
                    <div>ANGLE: {Math.round(scanAngle)}°</div>
                  </div>
                </div>

                {/* Crosshair */}
                {scanning && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      className="w-24 h-24 border-2 border-[#8DC63F]/60 rounded-full flex items-center justify-center"
                    >
                      <div className="w-2 h-2 bg-[#8DC63F] rounded-full" />
                    </motion.div>
                  </div>
                )}

                {/* Found overlay */}
                <AnimatePresence>
                  {found && !scanning && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="bg-black/80 border border-[#8DC63F] rounded-xl p-5 text-center backdrop-blur-sm max-w-xs">
                        <div className="text-[#8DC63F] font-mono text-xs mb-2">
                          ◉ TARGET ACQUIRED
                        </div>
                        <div className="text-white font-display font-bold text-xl">
                          {found.title}
                        </div>
                        <div className="text-white/60 text-sm mt-1">{found.location}</div>
                        <div className="text-[#8DC63F] font-bold text-lg mt-2">{found.price}</div>
                        <div className="text-white/40 font-mono text-xs mt-1">
                          {found.floors} · Verified Listing
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Progress bar */}
                <div>
                  {scanning && (
                    <motion.div className="h-0.5 bg-[#8DC63F]/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#8DC63F]"
                        animate={{ width: '100%' }}
                        initial={{ width: '0%' }}
                        transition={{ duration: 3.5, ease: 'linear' }}
                      />
                    </motion.div>
                  )}
                  <div className="flex justify-between mt-2 text-white/30 font-mono text-xs">
                    <span>LAGOS METRO SCAN v2.1</span>
                    <span>{scanning ? 'PROCESSING' : found ? 'COMPLETE' : 'READY'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scan button */}
            <motion.button
              onClick={startScan}
              disabled={scanning}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-5 w-full py-4 rounded-xl font-display font-bold text-black text-lg transition-all"
              style={{
                background: scanning ? '#444' : 'linear-gradient(135deg,#8DC63F,#a8e050)',
                cursor: scanning ? 'not-allowed' : 'pointer',
              }}
            >
              {scanning
                ? 'Scanning Lagos Skyline...'
                : found
                  ? 'Scan Again'
                  : '▶  Start 3D Aerial Scan'}
            </motion.button>
          </div>

          {/* Property cards */}
          <div className="space-y-3">
            {SCAN_PROPERTIES.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setActive(p.id)}
                className="flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-300"
                style={{
                  background: active === p.id ? 'rgba(141,198,63,0.08)' : 'rgba(255,255,255,0.03)',
                  borderColor: active === p.id ? '#8DC63F' : 'rgba(255,255,255,0.08)',
                }}
              >
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                  {active === p.id && (
                    <motion.div
                      layoutId="scanTarget"
                      className="absolute inset-0 border-2 border-[#8DC63F] rounded-lg"
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-display font-semibold text-sm truncate">
                    {p.title}
                  </div>
                  <div className="text-white/40 text-xs mt-0.5">
                    {p.location} · {p.floors}
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-[#8DC63F] font-bold text-sm">{p.price}</div>
                  {active === p.id && (
                    <div className="text-[#8DC63F]/60 font-mono text-xs mt-0.5">LOCKED</div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default PropertyScanner;
