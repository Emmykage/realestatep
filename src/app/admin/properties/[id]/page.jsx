'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeft,
  ArrowUpRight,
  BedDouble,
  Bath,
  Building2,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Edit,
  Eye,
  MapPin,
  Maximize2,
  Share2,
  ShieldCheck,
  Toilet,
  UserRound,
  X,
} from 'lucide-react';

const sampleProperty = {
  _id: '1',
  title: 'Contemporary 5 Bedroom Detached Duplex',
  slug: 'contemporary-5-bedroom-detached-duplex',
  description:
    'Experience comfortable living in this contemporary detached duplex. The property features spacious living areas, modern finishes, generous bedrooms, and a well-planned layout suitable for families seeking comfort and privacy.',
  type: 'Residential',
  category: 'For Sale',
  price: 185000000,
  address: 'Plot 24, Example Estate',
  city: 'Lekki',
  state: 'Lagos',
  bedrooms: 5,
  bathrooms: 5,
  toilets: 6,
  area: 420,
  landArea: 600,
  furnishing: 'Semi-furnished',
  condition: 'Newly built',
  status: 'Published',
  featured: true,
  reference: 'BP-0001',
  agent: {
    name: 'Chinedu Okafor',
    email: 'agent@example.com',
    phone: '+234 800 000 0000',
  },
  features: [
    'Fitted kitchen',
    'En-suite bedrooms',
    'Secure estate',
    'Parking space',
    'Private balcony',
    'Water supply',
    '24-hour security',
    'Modern finishing',
  ],
  images: [],
  createdAt: '2026-10-15T10:00:00.000Z',
  updatedAt: '2026-10-20T14:30:00.000Z',
};

const formatPrice = (price) =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(price);

const formatDate = (date) =>
  new Date(date).toLocaleDateString('en-NG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

export default function PropertyDetailsPage() {
  const params = useParams();
  const [property] = useState(sampleProperty);
  const [activeImage, setActiveImage] = useState(0);
  const [showPreview, setShowPreview] = useState(false);

  const images = property.images.length
    ? property.images
    : [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1000&q=85',
      ];

  const propertyId = params?.id;

  const nextImage = () => {
    setActiveImage((current) => (current + 1) % images.length);
  };

  const previousImage = () => {
    setActiveImage((current) => (current - 1 + images.length) % images.length);
  };

  const copyPropertyLink = async () => {
    const url = `${window.location.origin}/properties/${property.slug}`;

    try {
      await navigator.clipboard.writeText(url);
      alert('Property link copied.');
    } catch {
      alert('Unable to copy the property link.');
    }
  };

  return (
    <main className="min-h-screen bg-[#F7F8F5] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb and actions */}
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <Link
              href="/admin/properties"
              className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-[#527C24]"
            >
              <ArrowLeft size={16} />
              Back to properties
            </Link>

            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Property Details
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Review listing information and manage this property.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={copyPropertyLink}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              <Share2 size={16} />
              Copy link
            </button>

            <Link
              href={`/admin/properties/${propertyId}/edit`}
              className="inline-flex items-center gap-2 rounded-xl bg-[#8DC63F] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#79AE32]"
            >
              <Edit size={16} />
              Edit property
            </Link>
          </div>
        </div>

        {/* Property title and status */}
        <section className="mb-6 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#EEF6E5] px-3 py-1 text-xs font-semibold text-[#527C24]">
                  {property.status}
                </span>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {property.category}
                </span>

                {property.featured && (
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                    Featured
                  </span>
                )}
              </div>

              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">{property.title}</h2>

              <p className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                <MapPin size={16} className="shrink-0" />
                {property.address}, {property.city}, {property.state}
              </p>

              <p className="mt-2 text-xs text-gray-400">Reference: {property.reference}</p>
            </div>

            <div className="md:text-right">
              <p className="text-sm text-gray-500">Asking price</p>
              <p className="mt-1 text-2xl font-bold text-[#527C24] sm:text-3xl">
                {formatPrice(property.price)}
              </p>
            </div>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main column */}
          <div className="space-y-6 lg:col-span-2">
            {/* Gallery */}
            <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-bold text-gray-900">Property Gallery</h3>
                <span className="text-xs text-gray-400">
                  {activeImage + 1} of {images.length}
                </span>
              </div>

              <div className="relative overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={images[activeImage]}
                  alt={property.title}
                  className="h-[280px] w-full object-cover sm:h-[420px]"
                />

                <button
                  type="button"
                  onClick={previousImage}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow transition hover:bg-white"
                >
                  <ChevronLeft size={21} />
                </button>

                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow transition hover:bg-white"
                >
                  <ChevronRight size={21} />
                </button>

                <button
                  type="button"
                  onClick={() => setShowPreview(true)}
                  className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-lg bg-white/95 px-3 py-2 text-xs font-semibold text-gray-700 shadow"
                >
                  <Maximize2 size={14} />
                  View image
                </button>
              </div>

              <div className="mt-3 grid grid-cols-4 gap-3">
                {images.map((image, index) => (
                  <button
                    type="button"
                    key={image}
                    onClick={() => setActiveImage(index)}
                    className={`overflow-hidden rounded-lg border-2 ${
                      activeImage === index ? 'border-[#8DC63F]' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Property view ${index + 1}`}
                      className="h-20 w-full object-cover sm:h-24"
                    />
                  </button>
                ))}
              </div>
            </section>

            {/* Description */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
              <h3 className="text-lg font-bold text-gray-900">Description</h3>

              <p className="mt-4 text-sm leading-7 text-gray-600">{property.description}</p>
            </section>

            {/* Specifications */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
              <h3 className="text-lg font-bold text-gray-900">Property Specifications</h3>

              <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  {
                    label: 'Bedrooms',
                    value: property.bedrooms,
                    icon: BedDouble,
                  },
                  {
                    label: 'Bathrooms',
                    value: property.bathrooms,
                    icon: Bath,
                  },
                  {
                    label: 'Toilets',
                    value: property.toilets,
                    icon: Toilet,
                  },
                  {
                    label: 'Floor area',
                    value: `${property.area} m²`,
                    icon: Maximize2,
                  },
                  {
                    label: 'Land area',
                    value: `${property.landArea} m²`,
                    icon: Building2,
                  },
                  {
                    label: 'Condition',
                    value: property.condition,
                    icon: Check,
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="rounded-xl border border-gray-100 bg-gray-50 p-4"
                    >
                      <Icon size={19} className="text-[#78AA37]" />
                      <p className="mt-3 text-xs text-gray-500">{item.label}</p>
                      <p className="mt-1 text-sm font-bold text-gray-800">{item.value}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 grid gap-4 border-t border-gray-100 pt-5 sm:grid-cols-2">
                <div>
                  <p className="text-xs text-gray-500">Property type</p>
                  <p className="mt-1 text-sm font-semibold text-gray-800">{property.type}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Furnishing</p>
                  <p className="mt-1 text-sm font-semibold text-gray-800">{property.furnishing}</p>
                </div>
              </div>
            </section>

            {/* Features */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
              <h3 className="text-lg font-bold text-gray-900">Features & Amenities</h3>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {property.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EEF6E5] text-[#527C24]">
                      <Check size={14} />
                    </span>
                    {feature}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right column */}
          <aside className="space-y-6">
            {/* Agent */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="font-bold text-gray-900">Assigned Agent</h3>

              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF6E5] text-[#527C24]">
                  <UserRound size={23} />
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-800">{property.agent.name}</p>
                  <p className="mt-1 text-xs text-gray-500">Property Agent</p>
                </div>
              </div>

              <div className="mt-5 space-y-3 border-t border-gray-100 pt-4 text-sm">
                <p className="break-all text-gray-600">{property.agent.email}</p>
                <p className="text-gray-600">{property.agent.phone}</p>
              </div>

              <Link
                href="/admin/agents"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                View agents
                <ArrowUpRight size={15} />
              </Link>
            </section>

            {/* Listing information */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="font-bold text-gray-900">Listing Information</h3>

              <div className="mt-5 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-sm text-gray-500">Listing ID</span>
                  <span className="break-all text-right text-sm font-semibold text-gray-800">
                    {property._id}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <span className="text-sm text-gray-500">Created</span>
                  <span className="text-right text-sm font-semibold text-gray-800">
                    {formatDate(property.createdAt)}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <span className="text-sm text-gray-500">Last updated</span>
                  <span className="text-right text-sm font-semibold text-gray-800">
                    {formatDate(property.updatedAt)}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-gray-500">Featured</span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      property.featured
                        ? 'bg-[#EEF6E5] text-[#527C24]'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {property.featured ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>
            </section>

            {/* Quick actions */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="font-bold text-gray-900">Quick Actions</h3>

              <div className="mt-4 space-y-3">
                <Link
                  href={`/admin/properties/${propertyId}/edit`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#8DC63F] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#79AE32]"
                >
                  <Edit size={16} />
                  Edit listing
                </Link>

                <Link
                  href="/admin/properties"
                  className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  <ClipboardList size={16} />
                  All properties
                </Link>
              </div>
            </section>
          </aside>
        </div>
      </div>

      {/* Fullscreen image preview */}
      {showPreview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setShowPreview(false)}
        >
          <button
            type="button"
            aria-label="Close image preview"
            onClick={() => setShowPreview(false)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-8"
          >
            <ChevronLeft size={24} />
          </button>

          <img
            src={images[activeImage]}
            alt={property.title}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
          />

          <button
            type="button"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            className="absolute right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-8"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </main>
  );
}
