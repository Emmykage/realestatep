'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Building2, Eye, EyeOff, LockKeyhole, Mail, ShieldCheck } from 'lucide-react';

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Connect this form to your admin authentication API.
    console.log({
      email,
      password,
      rememberMe,
    });
  };

  return (
    <main className="grid min-h-screen bg-white lg:grid-cols-2">
      {/* Left: Brand panel */}
      <section className="relative hidden min-h-screen overflow-hidden bg-[#182218] p-12 text-white lg:flex lg:flex-col lg:justify-between xl:p-16">
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#8DC63F]/15 blur-[100px]" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#8DC63F]/10 blur-[100px]" />

        <Link href="/" className="relative z-10 flex w-fit items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8DC63F] text-[#182218]">
            <Building2 size={26} />
          </div>

          <div>
            <p className="text-xl font-bold tracking-tight">
              BENOL<span className="text-[#8DC63F]">.</span>
            </p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">Property</p>
          </div>
        </Link>

        <div className="relative z-10 max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/80">
            <ShieldCheck size={15} className="text-[#8DC63F]" />
            Secure administration portal
          </div>

          <h1 className="text-5xl font-semibold leading-[1.15] tracking-tight xl:text-6xl">
            Your property business,
            <span className="mt-2 block text-[#8DC63F]">all in one place.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-8 text-white/60">
            Manage property listings, oversee agents, track enquiries, and keep your operations
            moving from one central workspace.
          </p>

          {/* Decorative property illustration */}
          <div className="relative mt-12 h-64 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#354833] to-[#202C20]">
            <div className="absolute left-[10%] top-[12%] h-44 w-44 rounded-full border border-white/10" />
            <div className="absolute left-[18%] top-[22%] h-28 w-28 rounded-full border border-white/10" />

            <div className="absolute bottom-0 left-[8%] h-[65%] w-[27%] border border-white/10 bg-[#253525]">
              <div className="grid h-full grid-cols-2 gap-3 p-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="border border-[#8DC63F]/25 bg-[#8DC63F]/10" />
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 left-[35%] h-[85%] w-[35%] border border-white/15 bg-gradient-to-b from-[#708667] to-[#2B3B29] shadow-2xl">
              <div className="h-2 w-full bg-[#8DC63F]" />
              <div className="grid h-[85%] grid-cols-3 gap-3 p-4">
                {Array.from({ length: 9 }).map((_, index) => (
                  <div key={index} className="border border-white/15 bg-[#182218]/40" />
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 right-[5%] h-[48%] w-[25%] border border-white/10 bg-[#30412D]">
              <div className="grid h-full grid-cols-2 gap-2 p-3">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="border border-white/10 bg-[#182218]/40" />
                ))}
              </div>
            </div>

            <div className="absolute bottom-5 left-5 rounded-xl border border-white/10 bg-[#182218]/80 px-4 py-3 backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-widest text-white/50">Benol Property</p>
              <p className="mt-1 text-sm font-semibold">Built around your next move.</p>
            </div>
          </div>
        </div>

        <p className="relative z-10 text-xs text-white/40">
          © {new Date().getFullYear()} Benol Property. All rights reserved.
        </p>
      </section>

      {/* Right: Login form */}
      <section className="flex min-h-screen items-center justify-center px-5 py-12 sm:px-10 lg:px-12">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <Link href="/" className="mb-12 flex w-fit items-center gap-3 lg:hidden">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#8DC63F] text-white">
              <Building2 size={23} />
            </div>

            <div>
              <p className="text-lg font-bold text-gray-900">
                BENOL<span className="text-[#8DC63F]">.</span>
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Property</p>
            </div>
          </Link>

          <div className="mb-9">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0F6E8] text-[#679D2C]">
              <LockKeyhole size={27} />
            </div>

            <p className="text-sm font-semibold text-[#679D2C]">ADMINISTRATOR ACCESS</p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Welcome back
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Sign in to access your Benol Property management dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">
                Email address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="username"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="admin@benolproperty.com"
                  className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#8DC63F] focus:ring-4 focus:ring-[#8DC63F]/10"
                />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                  Password
                </label>

                <Link
                  href="/admin/forgot-password"
                  className="text-xs font-semibold text-[#679D2C] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <LockKeyhole
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-11 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#8DC63F] focus:ring-4 focus:ring-[#8DC63F]/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
                className="h-4 w-4 rounded border-gray-300 accent-[#8DC63F]"
              />
              Remember me
            </label>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#8DC63F] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#79AE32] focus:outline-none focus:ring-4 focus:ring-[#8DC63F]/25"
            >
              Sign in to dashboard
              <ArrowRight size={17} />
            </button>
          </form>

          <div className="mt-8 flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4">
            <ShieldCheck size={19} className="mt-0.5 shrink-0 text-[#679D2C]" />
            <p className="text-xs leading-5 text-gray-500">
              This area is intended for authorized administrators only. Keep your login credentials
              secure.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="text-sm font-medium text-gray-500 transition hover:text-[#527C24]"
            >
              Back to Benol Property website
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
