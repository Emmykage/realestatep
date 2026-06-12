import Link from 'next/link'
import { Bed, Bath, Maximize, MapPin, Heart } from 'lucide-react'

export default function PropertyCard({ p }) {
  return (
    <div className="card-property group">
      {/* Image placeholder with color */}
      <div
        className="relative h-56 flex items-end p-4 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${p.imgColor} 0%, ${p.imgAccent} 100%)` }}
      >
        {p.tag && (
          <span className="absolute top-4 left-4 bg-white text-slate-800 text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full">
            {p.tag}
          </span>
        )}
        <button className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors group/heart">
          <Heart size={14} className="text-slate-400 group-hover/heart:text-red-500 transition-colors" />
        </button>

        {/* Decorative building silhouette */}
        <svg className="absolute bottom-0 left-0 w-full opacity-10" viewBox="0 0 400 80" preserveAspectRatio="none">
          <rect x="20"  y="30" width="40" height="50" fill="white"/>
          <rect x="80"  y="15" width="55" height="65" fill="white"/>
          <rect x="155" y="40" width="35" height="40" fill="white"/>
          <rect x="210" y="10" width="65" height="70" fill="white"/>
          <rect x="295" y="25" width="50" height="55" fill="white"/>
          <rect x="355" y="45" width="40" height="35" fill="white"/>
          {/* Windows */}
          {[30,45,90,105,165,220,235,250,305,320,365].map((x, i) => (
            <rect key={i} x={x} y={i % 2 === 0 ? 35 : 50} width="10" height="8" fill="white" opacity="0.6"/>
          ))}
        </svg>

        <div className="relative z-10">
          <p className="text-white font-display font-bold text-2xl">{p.price}</p>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="font-display font-semibold text-slate-900 text-lg leading-snug group-hover:text-gold-600 transition-colors">
            {p.title}
          </h3>
          <span className="text-[11px] font-medium text-gold-600 bg-gold-50 px-2.5 py-1 rounded-full shrink-0 mt-0.5">
            {p.type}
          </span>
        </div>

        <div className="flex items-center gap-1 text-slate-400 text-sm mb-4">
          <MapPin size={13} />
          <span>{p.address}</span>
        </div>

        <div className="flex items-center gap-5 text-sm text-slate-500 pt-4 border-t border-slate-100">
          <span className="flex items-center gap-1.5">
            <Bed size={14} className="text-slate-400" />
            {p.beds} beds
          </span>
          <span className="flex items-center gap-1.5">
            <Bath size={14} className="text-slate-400" />
            {p.baths} baths
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize size={14} className="text-slate-400" />
            {p.sqft}
          </span>
        </div>
      </div>
    </div>
  )
}
