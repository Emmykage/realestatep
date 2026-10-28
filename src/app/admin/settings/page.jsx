'use client';

import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Construction,
  Building2,
  Users,
  CalendarDays,
  ShieldCheck,
} from 'lucide-react';

export default function AdminComingSoonPage() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#F7F8F5] px-5 py-12 sm:px-8">
      <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
        <div className="grid lg:grid-cols-2">
          {/* Content */}
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            <div className="flex w-fit items-center gap-2 rounded-full border border-[#8DC63F]/30 bg-[#8DC63F]/10 px-3 py-2 text-xs font-semibold text-[#527C24]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#8DC63F]" />
              UNDER DEVELOPMENT
            </div>

            <h1 className="mt-7 text-3xl font-bold leading-tight tracking-tight text-[#20291F] sm:text-5xl">
              Something new is
              <span className="block text-[#78AA37]">taking shape.</span>
            </h1>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
              We're working on this section of the Benol Property admin panel. Soon, you'll have
              access to more tools designed to make managing your property business easier.
            </p>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-gray-100 bg-[#F8F9F6] p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#78AA37] shadow-sm">
                <Clock3 size={21} />
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-800">Feature in progress</p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  This section will be available once development is complete.
                </p>
              </div>
            </div>

            <Link
              href="/admin"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-[#8DC63F] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#79AE32]"
            >
              <ArrowLeft size={17} />
              Back to Dashboard
            </Link>
          </div>

          {/* Illustration */}
          <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[#F2F6EC] p-8 sm:min-h-[460px]">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#8DC63F]/15 blur-3xl" />
            <div className="absolute -bottom-16 -left-12 h-56 w-56 rounded-full bg-[#8DC63F]/10 blur-3xl" />

            <div className="relative w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-5 shadow-xl shadow-gray-200/60">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div>
                  <p className="text-sm font-bold text-gray-800">Feature preview</p>
                  <p className="mt-1 text-xs text-gray-400">Benol Property Admin</p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0F6E8] text-[#6B9C32]">
                  <Construction size={21} />
                </div>
              </div>

              <div className="mt-5 space-y-4">
                {[
                  { label: 'Property management', icon: Building2 },
                  { label: 'Agent management', icon: Users },
                  { label: 'Appointments', icon: CalendarDays },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-xl bg-gray-50 p-3"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#78AA37] shadow-sm">
                        <Icon size={19} />
                      </div>

                      <div className="flex-1">
                        <p className="text-xs font-semibold text-gray-700">{item.label}</p>
                        <div className="mt-2 h-1.5 w-20 rounded-full bg-gray-200" />
                      </div>

                      {index === 0 ? (
                        <CheckCircle2 size={18} className="text-[#8DC63F]" />
                      ) : (
                        <span className="rounded-full bg-amber-50 px-2 py-1 text-[9px] font-semibold text-amber-600">
                          Pending
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-xl bg-[#F0F6E8] p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#527C24]">
                  <ShieldCheck size={17} />
                  Building something better
                </div>

                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white">
                  <div className="h-full w-2/3 rounded-full bg-[#8DC63F]" />
                </div>
              </div>

              <div className="absolute -right-3 -top-4 flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-3 py-2.5 shadow-lg sm:-right-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F0F6E8] text-[#78AA37]">
                  <ShieldCheck size={17} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800">Admin tools</p>
                  <p className="text-[10px] text-gray-400">Coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-gray-100 px-7 py-5 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p>© {new Date().getFullYear()} Benol Property. All rights reserved.</p>

          <Link
            href="/admin"
            className="inline-flex items-center gap-2 transition hover:text-[#527C24]"
          >
            Return to dashboard
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </main>
  );
}
