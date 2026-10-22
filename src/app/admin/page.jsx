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

const properties = [
  {
    id: 1,
    name: 'Luxury 4 Bedroom Duplex',
    location: 'Lekki Phase 1, Lagos',
    price: '₦185,000,000',
    type: 'For Sale',
    status: 'Published',
    beds: 4,
    baths: 5,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  },
  {
    id: 2,
    name: 'Modern 3 Bedroom Apartment',
    location: 'Victoria Island, Lagos',
    price: '₦8,500,000/yr',
    type: 'For Rent',
    status: 'Published',
    beds: 3,
    baths: 3,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
  {
    id: 3,
    name: 'Contemporary Family Home',
    location: 'GRA, Port Harcourt',
    price: '₦120,000,000',
    type: 'For Sale',
    status: 'Pending',
    beds: 4,
    baths: 4,
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80',
  },
];

const enquiries = [
  {
    name: 'Chinedu Okafor',
    initials: 'CO',
    property: 'Luxury 4 Bedroom Duplex',
    date: 'Today, 10:42 AM',
    status: 'New',
  },
  {
    name: 'Amara Williams',
    initials: 'AW',
    property: 'Modern 3 Bedroom Apartment',
    date: 'Today, 9:15 AM',
    status: 'In Progress',
  },
  {
    name: 'David Eze',
    initials: 'DE',
    property: 'Contemporary Family Home',
    date: 'Yesterday, 4:30 PM',
    status: 'Contacted',
  },
  {
    name: 'Ngozi Adeyemi',
    initials: 'NA',
    property: 'Luxury 4 Bedroom Duplex',
    date: 'Yesterday, 1:20 PM',
    status: 'New',
  },
];

const SectionTitle = ({ title, subtitle, action }) => {
  return (
    <div className="mb-5 flex items-center justify-between gap-3">
      <div>
        <h2 className="text-lg font-bold tracking-tight text-slate-900">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-slate-500">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
};

export default function AdminDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [propertyFilter, setPropertyFilter] = useState('All');

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesSearch =
        property.name.toLowerCase().includes(search.toLowerCase()) ||
        property.location.toLowerCase().includes(search.toLowerCase());

      const matchesFilter = propertyFilter === 'All' || property.status === propertyFilter;

      return matchesSearch && matchesFilter;
    });
  }, [search, propertyFilter]);

  return (
    <div className="">
      {/* Top navigation */}
      <header className="sticky top-0 z-30 hidden h-[82px] items-center justify-between border-b border-slate-200 bg-white/95 px-8 backdrop-blur-xl lg:flex xl:px-10">
        <div>
          <p className="text-xs font-medium text-slate-400">Workspace / Overview</p>
          <h1 className="mt-1 text-xl font-bold tracking-tight text-slate-900">Dashboard</h1>
        </div>

        <div className="flex items-center gap-4">
          <label className="relative block">
            <Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search properties..."
              className="w-56 rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-sm outline-none transition focus:border-[#8DC63F] focus:bg-white"
            />
          </label>

          <button
            onClick={() => (window.location.href = '/admin/enquiries')}
            aria-label="View enquiries"
            className="relative rounded-xl border border-slate-200 p-2.5 text-slate-500 hover:bg-slate-50"
          >
            <Bell size={19} />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#8DC63F] ring-2 ring-white" />
          </button>

          <div className="flex items-center gap-3 border-l border-slate-200 pl-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8DC63F]/15 text-sm font-bold text-[#578c1c]">
              BA
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">Benol Admin</p>
              <p className="text-xs text-slate-400">Super Admin</p>
            </div>
            <ChevronDown size={16} className="text-slate-400" />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1600px] p-5 sm:p-7 lg:p-8 xl:p-10">
        {/* Welcome section */}
        <section className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 text-sm font-medium text-slate-500">Wednesday, October 21, 2026</p>
            <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              Welcome back, Admin <span>👋</span>
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Here&apos;s what&apos;s happening with your property business today.
            </p>
          </div>

          <Link
            href="/admin/properties/new"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#8DC63F] px-5 py-3 text-sm font-bold text-slate-950 shadow-sm transition hover:bg-[#7db52f]"
          >
            <Plus size={18} />
            Add New Property
          </Link>
        </section>

        {/* KPI cards */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: 'Total Properties',
              value: '124',
              change: '+12.5%',
              detail: 'vs. last month',
              icon: Building2,
              tone: 'bg-blue-50 text-blue-600',
              bars: [35, 52, 43, 68, 48, 77, 60, 90],
            },
            {
              title: 'Active Listings',
              value: '86',
              change: '+8.2%',
              detail: 'vs. last month',
              icon: Eye,
              tone: 'bg-[#8DC63F]/15 text-[#5d9321]',
              bars: [42, 35, 58, 46, 68, 55, 78, 90],
            },
            {
              title: 'Total Enquiries',
              value: '248',
              change: '+18.4%',
              detail: 'vs. last month',
              icon: MessageSquare,
              tone: 'bg-purple-50 text-purple-600',
              bars: [30, 46, 38, 65, 50, 72, 61, 95],
            },
            {
              title: 'Appointments',
              value: '32',
              change: '+6.7%',
              detail: 'vs. last month',
              icon: CalendarDays,
              tone: 'bg-orange-50 text-orange-600',
              bars: [38, 58, 45, 70, 55, 64, 80, 92],
            },
          ].map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.tone}`}
                  >
                    <Icon size={21} />
                  </div>
                  <div className="flex h-10 items-end gap-1">
                    {stat.bars.map((height, i) => (
                      <span
                        key={i}
                        className="w-1.5 rounded-t-sm bg-[#8DC63F]/70"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>

                <p className="mt-5 text-sm font-medium text-slate-500">{stat.title}</p>
                <div className="mt-1 flex flex-wrap items-end justify-between gap-2">
                  <p className="text-3xl font-black tracking-tight text-slate-900">{stat.value}</p>
                  <span className="mb-1 inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-700">
                    <TrendingUp size={12} /> {stat.change}
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-400">{stat.detail}</p>
              </div>
            );
          })}
        </section>

        {/* Performance and quick actions */}
        <section className="mt-8 grid grid-cols-1 gap-5 xl:grid-cols-3">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm xl:col-span-2">
            <SectionTitle
              title="Business overview"
              subtitle="Property enquiries and listing performance"
              action={
                <button className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50">
                  Last 7 months <ChevronDown className="ml-1 inline" size={13} />
                </button>
              }
            />

            <div className="mb-5 flex flex-wrap gap-5">
              <div>
                <p className="text-xs text-slate-500">Total enquiries</p>
                <p className="mt-1 text-2xl font-black text-slate-900">1,284</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Published listings</p>
                <p className="mt-1 text-2xl font-black text-slate-900">86</p>
              </div>
              <div>
                <p className="flex items-center gap-1 text-xs text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-[#8DC63F]" />
                  Enquiries
                </p>
                <p className="mt-1 text-sm font-bold text-slate-700">Monthly trend</p>
              </div>
            </div>

            <div className="grid h-48 grid-cols-7 gap-3 border-b border-slate-100 pb-2 sm:h-56 sm:gap-5">
              {[
                { month: 'Apr', enquiries: 38, listings: 25 },
                { month: 'May', enquiries: 57, listings: 35 },
                { month: 'Jun', enquiries: 46, listings: 31 },
                { month: 'Jul', enquiries: 76, listings: 46 },
                { month: 'Aug', enquiries: 61, listings: 40 },
                { month: 'Sep', enquiries: 84, listings: 55 },
                { month: 'Oct', enquiries: 94, listings: 63 },
              ].map((bar) => (
                <div key={bar.month} className="flex flex-col items-center justify-end gap-2">
                  <div className="flex h-full w-full items-end justify-center gap-1">
                    <div
                      title={`${bar.enquiries}% enquiries`}
                      className="w-1/3 max-w-6 rounded-t-md bg-[#8DC63F] transition-opacity hover:opacity-70"
                      style={{ height: `${bar.enquiries}%` }}
                    />
                    <div
                      title={`${bar.listings}% listings`}
                      className="w-1/3 max-w-6 rounded-t-md bg-slate-200 transition-opacity hover:opacity-70"
                      style={{ height: `${bar.listings}%` }}
                    />
                  </div>
                  <span className="text-xs text-slate-400">{bar.month}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-5 text-xs text-slate-500">
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-sm bg-[#8DC63F]" />
                Enquiries
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-sm bg-slate-200" />
                Listings
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <SectionTitle title="Quick actions" subtitle="Manage your business" />

            <div className="space-y-3">
              {[
                {
                  title: 'Add a property',
                  description: 'Create a new listing',
                  icon: Building2,
                  href: '/admin/properties/new',
                  tone: 'bg-[#8DC63F]/15 text-[#5d9321]',
                },
                {
                  title: 'View enquiries',
                  description: 'Respond to prospective clients',
                  icon: MessageSquare,
                  href: '/admin/enquiries',
                  tone: 'bg-blue-50 text-blue-600',
                },
                {
                  title: 'Manage agents',
                  description: 'Review your team',
                  icon: Users,
                  href: '/admin/agents',
                  tone: 'bg-purple-50 text-purple-600',
                },
                {
                  title: 'Website content',
                  description: 'Update pages and content',
                  icon: FileText,
                  href: '/admin/content',
                  tone: 'bg-orange-50 text-orange-600',
                },
              ].map((action) => {
                const Icon = action.icon;

                return (
                  <Link
                    key={action.title}
                    href={action.href}
                    className="group flex items-center gap-3 rounded-xl border border-slate-100 p-3 transition hover:border-[#8DC63F]/40 hover:bg-[#f9fbf5]"
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${action.tone}`}
                    >
                      <Icon size={19} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-slate-800">{action.title}</p>
                      <p className="mt-1 text-xs text-slate-400">{action.description}</p>
                    </div>
                    <ArrowUpRight
                      size={17}
                      className="text-slate-300 transition group-hover:text-[#669d2b]"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Property listings */}
        <section className="mt-8 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
          <SectionTitle
            title="Recent properties"
            subtitle="Keep track of your latest property listings"
            action={
              <Link
                href="/admin/properties"
                className="inline-flex items-center gap-1 text-sm font-bold text-[#578c1c] hover:text-[#426e16]"
              >
                View all <ArrowRight size={16} />
              </Link>
            }
          />

          <div className="mb-5 flex flex-col gap-3 sm:flex-row">
            <label className="relative flex-1">
              <Search
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by property or location..."
                className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-3 text-sm outline-none focus:border-[#8DC63F]"
              />
            </label>

            <select
              value={propertyFilter}
              onChange={(event) => setPropertyFilter(event.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#8DC63F]"
            >
              <option value="All">All statuses</option>
              <option value="Published">Published</option>
              <option value="Pending">Pending</option>
            </select>
          </div>

          <div className="space-y-4">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="flex flex-col gap-4 rounded-xl border border-slate-100 p-3 transition hover:border-slate-200 sm:flex-row sm:items-center"
              >
                <img
                  src={property.image}
                  alt={property.name}
                  className="h-40 w-full rounded-lg object-cover sm:h-20 sm:w-28"
                />

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-bold text-slate-900">{property.name}</h3>
                    <span
                      className={`rounded-md px-2 py-1 text-[10px] font-bold ${
                        property.status === 'Published'
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'bg-amber-50 text-amber-700'
                      }`}
                    >
                      {property.status}
                    </span>
                  </div>

                  <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                    <MapPin size={13} />
                    {property.location}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="rounded-md bg-slate-100 px-2 py-1">{property.type}</span>
                    <span className="flex items-center gap-1">
                      <BedDouble size={14} /> {property.beds} beds
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath size={14} /> {property.baths} baths
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-3 sm:border-0 sm:pt-0">
                  <p className="text-sm font-black text-slate-900">{property.price}</p>
                  <Link
                    href={`/admin/properties/${property.id}`}
                    aria-label={`View ${property.name}`}
                    className="rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:border-[#8DC63F] hover:text-[#578c1c]"
                  >
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </div>
            ))}

            {filteredProperties.length === 0 && (
              <div className="py-10 text-center">
                <Building2 className="mx-auto mb-3 text-slate-300" size={30} />
                <p className="font-semibold text-slate-700">No properties found</p>
                <p className="mt-1 text-sm text-slate-500">
                  Try a different search or status filter.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Enquiries */}
        <section className="mt-8 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
          <SectionTitle
            title="Recent enquiries"
            subtitle="Stay on top of prospective clients"
            action={
              <Link
                href="/admin/enquiries"
                className="inline-flex items-center gap-1 text-sm font-bold text-[#578c1c] hover:text-[#426e16]"
              >
                All enquiries <ArrowRight size={16} />
              </Link>
            }
          />

          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] text-left">
              <thead>
                <tr className="border-b border-slate-100 text-[11px] uppercase tracking-wider text-slate-400">
                  <th className="pb-4 pr-4 font-semibold">Client</th>
                  <th className="pb-4 pr-4 font-semibold">Property</th>
                  <th className="pb-4 pr-4 font-semibold">Date received</th>
                  <th className="pb-4 pr-4 font-semibold">Status</th>
                  <th className="pb-4 text-right font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map((enquiry) => (
                  <tr key={enquiry.name} className="border-b border-slate-50 last:border-0">
                    <td className="py-4 pr-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#8DC63F]/15 text-xs font-bold text-[#578c1c]">
                          {enquiry.initials}
                        </div>
                        <span className="text-sm font-semibold text-slate-800">{enquiry.name}</span>
                      </div>
                    </td>
                    <td className="py-4 pr-4 text-sm text-slate-500">{enquiry.property}</td>
                    <td className="py-4 pr-4 text-xs text-slate-500">{enquiry.date}</td>
                    <td className="py-4 pr-4">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                          enquiry.status === 'New'
                            ? 'bg-blue-50 text-blue-700'
                            : enquiry.status === 'In Progress'
                              ? 'bg-amber-50 text-amber-700'
                              : 'bg-emerald-50 text-emerald-700'
                        }`}
                      >
                        {enquiry.status === 'New' ? (
                          <Clock3 size={12} />
                        ) : (
                          <CheckCircle2 size={12} />
                        )}
                        {enquiry.status}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <Link
                        href="/admin/enquiries"
                        aria-label={`View enquiry from ${enquiry.name}`}
                        className="inline-flex rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-800"
                      >
                        <MoreHorizontal size={19} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <footer className="mt-8 flex flex-col justify-between gap-2 border-t border-slate-200 py-5 text-xs text-slate-400 sm:flex-row">
          <p>© 2026 Benol Property. All rights reserved.</p>
          <p>Property management workspace</p>
        </footer>
      </div>

      {mobileMenuOpen && (
        <button
          aria-label="Close menu overlay"
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/30 lg:hidden"
        />
      )}
    </div>
  );
}
