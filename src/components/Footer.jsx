import { Mail, MapPin, Phone, ArrowUpRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/logo/logo-transparent.png';

const footerLinks = {
  Company: [
    { label: 'About Us', link: '/about' },
    { label: 'Our Team', link: '/team' },
    { label: 'Careers', link: '/career' },
    { label: 'Press', link: '/blog' },
  ],
  Properties: [
    { label: 'Buy a Property', link: '/properties?type=buy' },
    { label: 'Rent a Property', link: '/properties?type=rent' },
    { label: 'Sell a Property', link: '/properties/sell' },
    { label: 'New Builds', link: '/properties?type=new-builds' },
  ],
  Resources: [
    { label: 'Blog & Insights', link: '/blog' },
    { label: 'Property Guides', link: '/guides' },
    { label: 'Market Report', link: '/market-report' },
    { label: 'FAQs', link: '/faq' },
  ],
};

const contactDetails = [
  {
    icon: Phone,
    value: '+234 813 152 9888',
    href: 'tel:+2348131529888',
  },
  {
    icon: Mail,
    value: 'contact@benolproperty.com',
    href: 'mailto:contact@benolproperty.com',
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#E7E9E1] bg-[#F7F8F2] text-[#20251B]">
      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10 lg:px-8 lg:py-20">
        {/* Brand */}
        <div className="space-y-6 sm:col-span-2 lg:col-span-2">
          <Link href="/" aria-label="Benol Property home" className="inline-flex h-20">
            <Image
              src={logo}
              alt="Benol Property"

              className="h-full w-44 object-cover mt-1"
            />
          </Link>

          <p className="max-w-sm text-sm leading-7 text-[#70756A]">
            Helping you make informed property decisions through market knowledge, transparent
            information and a more considered approach to real estate in Lagos.
          </p>

          <div className="space-y-4">
            {contactDetails.map(({ icon: Icon, value, href }) => (
              <a
                key={href}
                href={href}
                className="group flex w-fit items-center gap-3 text-sm text-[#52594C] transition hover:text-[#557D22]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E4E8DB] bg-white text-[#719F32] shadow-sm transition group-hover:border-[#8DC63F]/60 group-hover:bg-[#EFF6E5]">
                  <Icon size={16} />
                </span>
                {value}
              </a>
            ))}

            <div className="flex items-start gap-3 text-sm leading-6 text-[#70756A]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E4E8DB] bg-white text-[#719F32] shadow-sm">
                <MapPin size={16} />
              </span>
              <span className="max-w-xs pt-1">
                Office 3, Magnuel Emporium Plaza, Canaan Estate, Sangotedo, Lagos, Nigeria
              </span>
            </div>
          </div>

          <a
            href="https://wa.me/2348131529888"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#8DC63F] px-5 py-3 text-sm font-semibold text-[#17200E] shadow-sm transition hover:bg-[#9AD64C] hover:shadow-md"
          >
            Talk to our team
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Navigation */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h2 className="mb-6 text-xs font-bold uppercase tracking-[0.16em] text-[#30382A]">
              {category}
            </h2>

            <ul className="space-y-4">
              {links.map(({ link, label }) => (
                <li key={link}>
                  <Link
                    href={link}
                    className="group inline-flex items-center gap-1 text-sm text-[#74796F] transition-colors hover:text-[#557D22]"
                  >
                    {label}
                    <ArrowRight
                      size={13}
                      className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#E3E6DC] bg-white/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-[#858A7F] sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Benol Property. All rights reserved.</p>

          <p className="flex items-center gap-2">
            Real estate, with greater clarity.
            <span className="h-2 w-2 rounded-full bg-[#8DC63F]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
