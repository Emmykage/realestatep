'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowDownRight,
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { MdEmail } from 'react-icons/md';

const contactDetails = [
  {
    icon: Phone,
    label: 'Call our team',
    value: '+234 813 152 9888',
    href: 'tel:+2348131529888',
  },
  {
    icon: Mail,
    label: 'Send us an email',
    value: 'contact@benolproperty.com',
    href: 'mailto:contact@benolproperty.com',
  },
  {
    icon: Clock3,
    label: 'Working hours',
    value: 'Monday – Saturday',
    detail: 'Contact us to arrange a convenient time.',
  },
];

const interests = [
  'Buying a property',
  'Selling a property',
  'Land investment',
  'Renting a property',
  'Property investment advice',
  'General enquiry',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: 'Buying a property',
    location: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = [
      'Hello Benol Property, I would like to make an enquiry.',
      '',
      `Name: ${form.firstName} ${form.lastName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || 'Not provided'}`,
      `Interest: ${form.interest}`,
      `Preferred location: ${form.location || 'Not specified'}`,
      '',
      `Message: ${form.message}`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/2348131529888?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#8DC63F]/70 focus:ring-2 focus:ring-[#8DC63F]/10';

  const labelClass = 'mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-white/55';

  return (
    <main className="min-h-screen overflow-hidden bg-[#0F1114] pt-24 text-white">
      {/* Hero */}
      <section className="relative border-b border-white/[0.07]">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#8DC63F]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8DC63F]">
            <span className="h-px w-8 bg-[#8DC63F]" />
            Contact Benol Property
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
                Your next property decision
                <span className="block text-[#8DC63F]">starts with a conversation.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
                Looking to buy, sell or invest in Lagos real estate? Tell us what you have in mind.
                We’ll help you explore your options and take the next step with greater clarity.
              </p>
            </div>

            {/* <a
  href="mailto:contact@benolproperty.com"
              target="_blank"
              rel="noreferrer"
              className="group flex w-fit items-center gap-3 rounded-full border border-[#8DC63F]/30 bg-[#8DC63F]/10 px-5 py-4 text-sm font-semibold text-[#8DC63F] transition hover:bg-[#8DC63F]/15"
            >
              <MdEmail size={19} />
              Send us an Email
              <ArrowDownRight
                size={17}
                className="transition group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a> */}
          </div>

          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6 text-sm text-white/45">
            <span className="flex items-center gap-2">
              <ShieldCheck size={17} className="text-[#8DC63F]" />
              Informed property decisions
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={17} className="text-[#8DC63F]" />
              Focused on the Lagos property market
            </span>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* Enquiry form */}
          <div className="rounded-3xl border border-white/10 bg-[#15191D] p-6 sm:p-9 lg:p-10">
            <div className="mb-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8DC63F]">
                Let’s talk property
              </p>

              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Tell us what you’re looking for.
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/45">
                Share a few details and continue your enquiry with our team on WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className={labelClass}>
                    First name *
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Your first name"
                    autoComplete="given-name"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className={labelClass}>
                    Last name *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Your last name"
                    autoComplete="family-name"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+234 ..."
                    autoComplete="tel"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="interest" className={labelClass}>
                  How can we help? *
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none`}
                >
                  {interests.map((interest) => (
                    <option key={interest} value={interest} className="bg-[#15191D] text-white">
                      {interest}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="location" className={labelClass}>
                  Preferred location
                </label>
                <input
                  id="location"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="e.g. Lekki, Ikoyi, Victoria Island"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Your message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your budget, goals or the property you have in mind..."
                  required
                  className={`${inputClass} resize-y`}
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#8DC63F] px-6 py-4 text-sm font-bold text-[#10140B] transition hover:bg-[#9DD64F] focus:outline-none focus:ring-2 focus:ring-[#8DC63F] focus:ring-offset-2 focus:ring-offset-[#15191D]"
              >
                Send Message
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </button>

              <p className="text-center text-xs leading-5 text-white/35">
                Your message will open in WhatsApp for you to review and send.
              </p>
            </form>
          </div>

          {/* Contact information */}
          <aside className="flex flex-col gap-10 lg:py-4">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8DC63F]">
                Get in touch
              </p>
              <h2 className="text-2xl font-semibold sm:text-3xl">Prefer a direct conversation?</h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/50">
                Reach out using any of the contact details below. Whether you’re buying your first
                home or exploring an investment, we’re happy to hear from you.
              </p>
            </div>
            {/* <a
              href="mailto:contact@benolproperty.com"
              target="_blank"
              rel="noreferrer"
              className="group flex w-fit items-center gap-3 rounded-full border border-[#8DC63F]/30 bg-[#8DC63F]/10 px-5 py-4 text-sm font-semibold text-[#8DC63F] transition hover:bg-[#8DC63F]/15"
            >
              <MdEmail size={19} />
              Send us an Email
              <ArrowDownRight
                size={17}
                className="transition group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a> */}

            <div className="space-y-3">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/2.5 p-5 transition hover:border-[#8DC63F]/30"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#8DC63F]/10 text-[#8DC63F]">
                      <Icon size={19} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-medium text-white/40">{item.label}</p>

                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block wrap-break-word text-sm font-medium text-white transition hover:text-[#8DC63F]"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-medium text-white">{item.value}</p>
                      )}

                      {item.detail && (
                        <p className="mt-1 text-xs leading-5 text-white/35">{item.detail}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Office address */}
            <div className="relative overflow-hidden rounded-2xl border border-[#8DC63F]/20 bg-[#8DC63F]/6 p-6 sm:p-7">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-[#8DC63F]/10" />
              <div className="absolute -right-2 -top-2 h-20 w-20 rounded-full border border-[#8DC63F]/10" />

              <div className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <MapPin size={20} className="text-[#8DC63F]" />
                  <h3 className="font-semibold">Visit our office</h3>
                </div>

                <p className="max-w-sm text-sm leading-7 text-white/60">
                  Office 3, Magnuel Emporium Plaza,
                  <br />
                  Canaan Estate, Sangotedo,
                  <br />
                  Lagos, Nigeria.
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Magnuel+Emporium+Plaza+Canaan+Estate+Sangotedo+Lagos"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#8DC63F] transition hover:text-[#B0E76C]"
                >
                  Get directions
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Closing CTA */}
            <div className="border-t border-white/10 pt-7">
              <p className="text-sm leading-6 text-white/45">Still exploring your options?</p>

              <Link
                href="/properties"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#8DC63F]"
              >
                Explore available properties
                <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
