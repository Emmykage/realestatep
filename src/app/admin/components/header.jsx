'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const MobilHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-5 lg:hidden">
      <Link href="/admin" className="text-xl font-black tracking-tight text-slate-900">
        benol<span className="text-[#8DC63F]">.</span>
      </Link>
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle navigation"
        className="rounded-xl border border-slate-200 p-2"
      >
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  );
};

export default MobilHeader;
