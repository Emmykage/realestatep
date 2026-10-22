'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  Building2,
  Users,
  MessageSquare,
  CalendarDays,
  Settings,
  Search,
  Bell,
  Plus,
  ArrowUpRight,
  ArrowRight,
  MapPin,
  BedDouble,
  Bath,
  MoreHorizontal,
  TrendingUp,
  Eye,
  CheckCircle2,
  Clock3,
  Menu,
  X,
  ChevronDown,
  FileText,
  LogOut,
  CircleHelp,
} from 'lucide-react';
import React from 'react';
const navigation = [
  { label: 'Overview', href: '/admin', icon: LayoutDashboard },
  { label: 'Properties', href: '/admin/properties', icon: Building2, count: '24' },
  { label: 'Enquiries', href: '/admin/enquiries', icon: MessageSquare, count: '8' },
  { label: 'Agents', href: '/admin/agents', icon: Users },
  { label: 'Appointments', href: '/admin/appointments', icon: CalendarDays },
];

const Aside = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 flex w-[260px] flex-col border-r border-slate-200 bg-white transition-transform lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex h-[82px] items-center justify-between border-b border-slate-100 px-7">
        <Link href="/admin" className="text-2xl font-black tracking-tight text-slate-900">
          benol<span className="text-[#8DC63F]">.</span>
          <span className="ml-2 text-xs font-medium text-slate-400">ADMIN</span>
        </Link>
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="rounded-lg p-2 text-slate-500 lg:hidden"
          aria-label="Close navigation"
        >
          <X size={19} />
        </button>
      </div>

      <div className="px-4 pt-7">
        <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
          Workspace
        </p>

        <nav className="space-y-1">
          {navigation.map((item, index) => {
            const Icon = item.icon;
            const active = index === 0;

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition ${
                  active
                    ? 'bg-[#8DC63F]/10 text-[#578c1c]'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <span className="flex items-center gap-3">
                  <Icon size={19} />
                  {item.label}
                </span>
                {item.count && (
                  <span
                    className={`rounded-md px-2 py-0.5 text-xs ${
                      active ? 'bg-white' : 'bg-slate-100'
                    }`}
                  >
                    {item.count}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <p className="mb-3 mt-9 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
          Management
        </p>

        <nav className="space-y-1">
          <Link
            href="/admin/content"
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
          >
            <FileText size={19} />
            Website Content
          </Link>
          <Link
            href="/admin/settings"
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
          >
            <Settings size={19} />
            Settings
          </Link>
        </nav>
      </div>

      <div className="mt-auto p-4">
        <div className="rounded-2xl bg-[#f5f8ef] p-4">
          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#669d2b]">
            <CircleHelp size={19} />
          </div>
          <p className="text-sm font-bold text-slate-800">Need a hand?</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">
            Get help managing your property listings.
          </p>
          <a
            href="mailto:contact@benolproperty.com"
            className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#578c1c]"
          >
            Contact support <ArrowRight size={13} />
          </a>
        </div>

        <div className="mt-4 flex items-center gap-3 border-t border-slate-100 px-2 pt-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
            BA
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold text-slate-800">Benol Admin</p>
            <p className="text-xs text-slate-500">Administrator</p>
          </div>
          <button
            onClick={() => window.location.assign('/')}
            title="Return to website"
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-800"
          >
            <LogOut size={17} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
