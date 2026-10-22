'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  Plus,
  Search,
  SlidersHorizontal,
  MapPin,
  BedDouble,
  Bath,
  Maximize2,
  Eye,
  Pencil,
  Trash2,
  MoreHorizontal,
  Building2,
  CheckCircle2,
  Clock3,
  Archive,
  X,
  ChevronDown,
} from 'lucide-react';

const initialProperties = [
  {
    id: 1,
    title: 'Luxury 4 Bedroom Duplex',
    location: 'Lekki Phase 1, Lagos',
    price: 185000000,
    type: 'For Sale',
    category: 'Duplex',
    status: 'Published',
    bedrooms: 4,
    bathrooms: 5,
    area: 320,
    featured: true,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
    date: 'Oct 20, 2026',
  },
  {
    id: 2,
    title: 'Modern 3 Bedroom Apartment',
    location: 'Victoria Island, Lagos',
    price: 8500000,
    type: 'For Rent',
    category: 'Apartment',
    status: 'Published',
    bedrooms: 3,
    bathrooms: 3,
    area: 180,
    featured: true,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
    date: 'Oct 18, 2026',
  },
  {
    id: 3,
    title: 'Contemporary Family Home',
    location: 'GRA, Port Harcourt',
    price: 120000000,
    type: 'For Sale',
    category: 'Detached House',
    status: 'Pending',
    bedrooms: 4,
    bathrooms: 4,
    area: 280,
    featured: false,
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&q=80',
    date: 'Oct 16, 2026',
  },
  {
    id: 4,
    title: 'Premium 2 Bedroom Flat',
    location: 'Ikeja GRA, Lagos',
    price: 6500000,
    type: 'For Rent',
    category: 'Apartment',
    status: 'Published',
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
    featured: false,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80',
    date: 'Oct 14, 2026',
  },
  {
    id: 5,
    title: 'Executive 5 Bedroom Mansion',
    location: 'Asokoro, Abuja',
    price: 450000000,
    type: 'For Sale',
    category: 'Detached House',
    status: 'Draft',
    bedrooms: 5,
    bathrooms: 6,
    area: 520,
    featured: true,
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=900&q=80',
    date: 'Oct 12, 2026',
  },
  {
    id: 6,
    title: 'Serviced Studio Apartment',
    location: 'Yaba, Lagos',
    price: 3500000,
    type: 'For Rent',
    category: 'Studio',
    status: 'Published',
    bedrooms: 1,
    bathrooms: 1,
    area: 65,
    featured: false,
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80',
    date: 'Oct 10, 2026',
  },
];

const formatPrice = (price, type) => {
  const formatted = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(price);

  return type === 'For Rent' ? `${formatted}/year` : formatted;
};

export default function AdminPropertiesPage() {
  const [properties, setProperties] = useState(initialProperties);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [view, setView] = useState('Grid');
  const [menuId, setMenuId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const query = search.toLowerCase();

      const matchesSearch =
        property.title.toLowerCase().includes(query) ||
        property.location.toLowerCase().includes(query);

      const matchesStatus = statusFilter === 'All' || property.status === statusFilter;

      const matchesType = typeFilter === 'All' || property.type === typeFilter;

      const matchesCategory = categoryFilter === 'All' || property.category === categoryFilter;

      return matchesSearch && matchesStatus && matchesType && matchesCategory;
    });
  }, [properties, search, statusFilter, typeFilter, categoryFilter]);

  const counts = {
    all: properties.length,
    published: properties.filter((item) => item.status === 'Published').length,
    pending: properties.filter((item) => item.status === 'Pending').length,
    drafts: properties.filter((item) => item.status === 'Draft').length,
  };

  const updateStatus = (id, status) => {
    setProperties((current) =>
      current.map((item) => (item.id === id ? { ...item, status } : item))
    );
    setMenuId(null);
  };

  const deleteProperty = () => {
    setProperties((current) => current.filter((item) => item.id !== deleteId));
    setDeleteId(null);
  };

  return (
    <div className="min-h-screen bg-[#f7f9fc] px-4 py-6 text-slate-800 sm:px-6 lg:px-8 lg:py-9">
      <div className="mx-auto max-w-[1500px]">
        {/* Page heading */}
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-medium text-slate-400">
              <Link href="/admin" className="hover:text-slate-700">
                Dashboard
              </Link>
              <span>/</span>
              <span className="text-slate-600">Properties</span>
            </div>

            <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              Properties
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Manage your listings, prices and property availability.
            </p>
          </div>

          <Link
            href="/admin/properties/new"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#8DC63F] px-5 py-3 text-sm font-bold text-slate-950 shadow-sm transition hover:bg-[#7db52f]"
          >
            <Plus size={19} />
            Add New Property
          </Link>
        </div>

        {/* Summary cards */}
        <div className="mb-8 grid grid-cols-2 gap-4 xl:grid-cols-4">
          {[
            {
              label: 'Total properties',
              value: counts.all,
              icon: Building2,
              color: 'bg-blue-50 text-blue-600',
            },
            {
              label: 'Published',
              value: counts.published,
              icon: CheckCircle2,
              color: 'bg-emerald-50 text-emerald-600',
            },
            {
              label: 'Pending review',
              value: counts.pending,
              icon: Clock3,
              color: 'bg-amber-50 text-amber-600',
            },
            {
              label: 'Drafts',
              value: counts.drafts,
              icon: Archive,
              color: 'bg-purple-50 text-purple-600',
            },
          ].map((stat) => {
            const Icon = stat.icon;

            return (
              <button
                key={stat.label}
                onClick={() =>
                  setStatusFilter(
                    stat.label === 'Published'
                      ? 'Published'
                      : stat.label === 'Pending review'
                        ? 'Pending'
                        : stat.label === 'Drafts'
                          ? 'Draft'
                          : 'All'
                  )
                }
                className={`rounded-2xl border bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-5 ${
                  (stat.label === 'Total properties' && statusFilter === 'All') ||
                  (stat.label === 'Published' && statusFilter === 'Published') ||
                  (stat.label === 'Pending review' && statusFilter === 'Pending') ||
                  (stat.label === 'Drafts' && statusFilter === 'Draft')
                    ? 'border-[#8DC63F]/60'
                    : 'border-slate-200/80'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.color}`}
                  >
                    <Icon size={20} />
                  </div>
                  <ChevronDown size={15} className="text-slate-300" />
                </div>

                <p className="mt-4 text-sm text-slate-500">{stat.label}</p>
                <p className="mt-1 text-2xl font-black text-slate-900">{stat.value}</p>
              </button>
            );
          })}
        </div>

        {/* Filters */}
        <section className="mb-6 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5">
          <div className="mb-4 flex items-center gap-2">
            <SlidersHorizontal size={17} className="text-[#669d2b]" />
            <h2 className="text-sm font-bold text-slate-800">Search and filters</h2>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
            <label className="relative sm:col-span-2 xl:col-span-2">
              <Search
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search property or location..."
                className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm outline-none transition focus:border-[#8DC63F]"
              />
            </label>

            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-[#8DC63F]"
            >
              <option value="All">All statuses</option>
              <option value="Published">Published</option>
              <option value="Pending">Pending</option>
              <option value="Draft">Draft</option>
            </select>

            <select
              value={typeFilter}
              onChange={(event) => setTypeFilter(event.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-[#8DC63F]"
            >
              <option value="All">Sale and rent</option>
              <option value="For Sale">For sale</option>
              <option value="For Rent">For rent</option>
            </select>

            <select
              value={categoryFilter}
              onChange={(event) => setCategoryFilter(event.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-[#8DC63F]"
            >
              <option value="All">All categories</option>
              <option value="Duplex">Duplex</option>
              <option value="Apartment">Apartment</option>
              <option value="Detached House">Detached house</option>
              <option value="Studio">Studio</option>
            </select>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
            <p className="text-xs text-slate-500">
              Showing <strong className="text-slate-800">{filteredProperties.length}</strong> of{' '}
              <strong className="text-slate-800">{properties.length}</strong> properties
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setSearch('');
                  setStatusFilter('All');
                  setTypeFilter('All');
                  setCategoryFilter('All');
                }}
                className="rounded-lg px-3 py-2 text-xs font-semibold text-slate-500 hover:bg-slate-100"
              >
                Clear filters
              </button>

              <div className="flex rounded-lg border border-slate-200 p-1">
                {['Grid', 'List'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setView(item)}
                    className={`rounded-md px-3 py-1.5 text-xs font-semibold transition ${
                      view === item
                        ? 'bg-[#8DC63F]/15 text-[#578c1c]'
                        : 'text-slate-500 hover:bg-slate-50'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Property cards */}
        {filteredProperties.length > 0 ? (
          <div
            className={
              view === 'Grid'
                ? 'grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3'
                : 'flex flex-col gap-4'
            }
          >
            {filteredProperties.map((property) => (
              <article
                key={property.id}
                className={`group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg ${
                  view === 'List' ? 'flex flex-col sm:flex-row' : ''
                }`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden bg-slate-100 ${
                    view === 'List' ? 'h-56 sm:h-auto sm:w-64 sm:shrink-0' : 'h-56'
                  }`}
                >
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                    <span className="rounded-lg bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm">
                      {property.type}
                    </span>

                    {property.featured && (
                      <span className="rounded-lg bg-[#8DC63F] px-3 py-1.5 text-xs font-bold text-slate-950 shadow-sm">
                        Featured
                      </span>
                    )}
                  </div>

                  <span
                    className={`absolute bottom-3 left-3 rounded-lg px-3 py-1.5 text-xs font-bold shadow-sm ${
                      property.status === 'Published'
                        ? 'bg-emerald-50 text-emerald-700'
                        : property.status === 'Pending'
                          ? 'bg-amber-50 text-amber-700'
                          : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {property.status}
                  </span>

                  <div className="absolute right-3 top-3">
                    <button
                      onClick={() => setMenuId(menuId === property.id ? null : property.id)}
                      aria-label={`Actions for ${property.title}`}
                      className="rounded-lg bg-white/95 p-2 text-slate-700 shadow-sm hover:bg-white"
                    >
                      <MoreHorizontal size={18} />
                    </button>

                    {menuId === property.id && (
                      <div className="absolute right-0 z-20 mt-2 w-48 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl">
                        <Link
                          href={`/admin/properties/${property.id}`}
                          className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50"
                          onClick={() => setMenuId(null)}
                        >
                          <Pencil size={15} /> Edit property
                        </Link>

                        {property.status !== 'Published' && (
                          <button
                            onClick={() => updateStatus(property.id, 'Published')}
                            className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50"
                          >
                            <CheckCircle2 size={15} /> Publish
                          </button>
                        )}

                        {property.status === 'Published' && (
                          <button
                            onClick={() => updateStatus(property.id, 'Draft')}
                            className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50"
                          >
                            <Archive size={15} /> Move to draft
                          </button>
                        )}

                        <button
                          onClick={() => {
                            setDeleteId(property.id);
                            setMenuId(null);
                          }}
                          className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-red-600 hover:bg-red-50"
                        >
                          <Trash2 size={15} /> Delete property
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Details */}
                <div className="flex min-w-0 flex-1 flex-col p-5">
                  <p className="text-xl font-black tracking-tight text-slate-900">
                    {formatPrice(property.price, property.type)}
                  </p>

                  <h2 className="mt-2 text-base font-bold text-slate-800">{property.title}</h2>

                  <p className="mt-2 flex items-start gap-1.5 text-sm text-slate-500">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-[#7db52f]" />
                    {property.location}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-4 border-y border-slate-100 py-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <BedDouble size={16} /> {property.bedrooms} Beds
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Bath size={16} /> {property.bathrooms} Baths
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Maximize2 size={15} /> {property.area} m²
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-400">
                        Category
                      </p>
                      <p className="mt-1 text-xs font-semibold text-slate-700">
                        {property.category}
                      </p>
                    </div>

                    <Link
                      href={`/admin/properties/${property.id}`}
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 transition hover:border-[#8DC63F] hover:bg-[#8DC63F]/10"
                    >
                      <Pencil size={14} />
                      Edit
                    </Link>
                  </div>

                  <p className="mt-4 text-[11px] text-slate-400">Added {property.date}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-400">
              <Building2 size={27} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">No properties found</h3>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
              Try changing your search or filters to find the properties you are looking for.
            </p>
            <button
              onClick={() => {
                setSearch('');
                setStatusFilter('All');
                setTypeFilter('All');
                setCategoryFilter('All');
              }}
              className="mt-5 rounded-xl bg-[#8DC63F] px-4 py-2.5 text-sm font-bold text-slate-950 hover:bg-[#7db52f]"
            >
              Reset filters
            </button>
          </div>
        )}

        <div className="mt-8 flex flex-col justify-between gap-2 border-t border-slate-200 py-5 text-xs text-slate-400 sm:flex-row">
          <p>© 2026 Benol Property. All rights reserved.</p>
          <p>Property management workspace</p>
        </div>
      </div>

      {/* Delete confirmation */}
      {deleteId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <Trash2 size={22} />
              </div>
              <button
                onClick={() => setDeleteId(null)}
                aria-label="Close confirmation"
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
              >
                <X size={19} />
              </button>
            </div>

            <h3 className="mt-5 text-lg font-black text-slate-900">Delete this property?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              This will remove the property from this page. This demo does not delete anything from
              your database.
            </p>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setDeleteId(null)}
                className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={deleteProperty}
                className="flex-1 rounded-xl bg-red-600 px-4 py-3 text-sm font-bold text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
