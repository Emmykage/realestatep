import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
export default function VirtualTourPanel({ images }) {
  const [angle, setAngle] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startAngle, setStartAngle] = useState(0);
  const containerRef = useRef(null);
  const G = '#8DC63F';

  const imgIndex =
    Math.floor((((angle % 360) + 360) % 360) / (360 / images.length)) % images.length;

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartX(e.clientX);
    setStartAngle(angle);
  };
  const handleMouseMove = useCallback(
    (e) => {
      if (!dragging) return;
      const delta = (e.clientX - startX) * 0.4;
      setAngle(startAngle + delta);
    },
    [dragging, startX, startAngle]
  );
  const handleMouseUp = () => setDragging(false);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove]);

  return (
    <div
      className="relative rounded-2xl overflow-hidden border"
      style={{
        borderColor: 'rgba(141,198,63,0.3)',
        aspectRatio: '16/9',
        cursor: dragging ? 'grabbing' : 'grab',
      }}
      ref={containerRef}
      onMouseDown={handleMouseDown}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={imgIndex}
          src={images[imgIndex]}
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="w-full h-full object-cover pointer-events-none select-none"
          draggable={false}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      {/* HUD */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
        <div
          className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1.5 font-mono text-xs"
          style={{ color: G }}
        >
          ⟳ 360° VIRTUAL TOUR
        </div>
        <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1.5 font-mono text-xs text-white/60">
          {Math.round(((angle % 360) + 360) % 360)}° · Drag to rotate
        </div>
      </div>
      {/* Compass */}
      <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center">
        <motion.div style={{ rotate: -angle % 360 }} className="text-base">
          🧭
        </motion.div>
      </div>
      {/* Drag hint */}
      <div className="absolute bottom-4 left-4 font-mono text-xs text-white/40 bg-black/40 rounded px-2 py-1">
        ← drag →
      </div>
    </div>
  );
}
