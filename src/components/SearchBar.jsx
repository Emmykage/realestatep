'use client'

import { useState } from 'react'
import { Search, ChevronDown } from 'lucide-react'

export default function SearchBar() {
  const [tab, setTab] = useState('Buy')

  return (
    <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/80 p-2 max-w-3xl w-full">
      {/* Tabs */}
      <div className="flex gap-1 mb-3 px-1 pt-1">
        {(['Buy', 'Rent', 'Sell'] ).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-5 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
              tab === t
                ? 'bg-slate-900 text-white'
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Inputs */}
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-xl">
          <Search size={16} className="text-slate-400 shrink-0" />
          <input
            type="text"
            placeholder="City, neighborhood, or address"
            className="bg-transparent text-sm text-slate-700 placeholder-slate-400 outline-none w-full"
          />
        </div>

        <div className="sm:w-36 flex items-center gap-2 px-4 py-3 bg-slate-50 rounded-xl">
          <span className="text-sm text-slate-500 whitespace-nowrap">Property type</span>
          <ChevronDown size={14} className="text-slate-400 ml-auto" />
        </div>

        <div className="sm:w-32 flex items-center gap-2 px-4 py-3 bg-slate-50 rounded-xl">
          <span className="text-sm text-slate-500">Price</span>
          <ChevronDown size={14} className="text-slate-400 ml-auto" />
        </div>

        <button className="btn-primary sm:px-7 justify-center">
          Search
        </button>
      </div>
    </div>
  )
}
