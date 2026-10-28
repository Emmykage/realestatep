'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Building2,
  MapPin,
  BedDouble,
  Bath,
  Maximize2,
  ImagePlus,
  X,
  CheckCircle2,
  Save,
  Eye,
  Home,
  Banknote,
  FileText,
  Upload,
} from 'lucide-react';

const initialForm = {
  title: '',
  description: '',
  type: 'For Sale',
  category: 'Detached House',
  price: '',
  pricePeriod: 'Yearly',
  address: '',
  city: '',
  state: '',
  bedrooms: '',
  bathrooms: '',
  toilets: '',
  area: '',
  landArea: '',
  furnishing: 'Unfurnished',
  condition: 'Newly Built',
  features: [],
  featured: false,
  status: 'Draft',
};

const availableFeatures = [
  'Swimming Pool',
  '24/7 Security',
  'Parking Space',
  'Boys Quarters',
  'Fitted Kitchen',
  'Air Conditioning',
  'CCTV',
  'Gym',
  'Garden',
  'Water Supply',
  'Electricity',
  'Gated Estate',
];

const inputClass =
  'mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#8DC63F] focus:ring-2 focus:ring-[#8DC63F]/10';

const labelClass = 'text-sm font-semibold text-slate-700';

function FormSection({ title, description, icon: Icon, children }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
      <div className="flex items-start gap-3 border-b border-slate-100 px-5 py-5 sm:px-7">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#8DC63F]/15 text-[#578c1c]">
          <Icon size={20} />
        </div>
        <div>
          <h2 className="font-bold text-slate-900">{title}</h2>
          <p className="mt-1 text-xs leading-5 text-slate-500">{description}</p>
        </div>
      </div>
      <div className="space-y-5 p-5 sm:p-7">{children}</div>
    </section>
  );
}

export default function NewPropertyPage() {
  const [form, setForm] = useState(initialForm);
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('success');

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: '' }));
    setMessage('');
  };

  const handleImageChange = (event) => {
    const selectedFiles = Array.from(event.target.files || []);
    const validFiles = selectedFiles.filter((file) => file.type.startsWith('image/'));

    if (validFiles.length !== selectedFiles.length) {
      setMessageType('error');
      setMessage('Please select image files only.');
    }

    const combined = [...images, ...validFiles].slice(0, 10);

    setImages(combined);
    setImagePreviews(combined.map((file) => URL.createObjectURL(file)));

    event.target.value = '';
  };

  const removeImage = (index) => {
    URL.revokeObjectURL(imagePreviews[index]);

    setImages((current) => current.filter((_, i) => i !== index));
    setImagePreviews((current) => current.filter((_, i) => i !== index));
  };

  const toggleFeature = (feature) => {
    setForm((current) => ({
      ...current,
      features: current.features.includes(feature)
        ? current.features.filter((item) => item !== feature)
        : [...current.features, feature],
    }));
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!form.title.trim()) nextErrors.title = 'Property title is required.';
    if (!form.description.trim()) {
      nextErrors.description = 'Property description is required.';
    }
    if (!form.price || Number(form.price) <= 0) {
      nextErrors.price = 'Enter a valid price.';
    }
    if (!form.address.trim()) nextErrors.address = 'Property address is required.';
    if (!form.city.trim()) nextErrors.city = 'City is required.';
    if (!form.state.trim()) nextErrors.state = 'State is required.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');

    if (!validateForm()) {
      setMessageType('error');
      setMessage('Please complete the required fields before continuing.');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setSubmitting(true);

    try {
      /*
       * Integration point:
       * Upload images to your storage provider, then send their URLs
       * with the property data to your existing API.
       *
       * Replace this demo handler when your backend endpoint is ready.
       */
      console.log('Property form data:', {
        ...form,
        price: Number(form.price),
        bedrooms: form.bedrooms ? Number(form.bedrooms) : null,
        bathrooms: form.bathrooms ? Number(form.bathrooms) : null,
        toilets: form.toilets ? Number(form.toilets) : null,
        area: form.area ? Number(form.area) : null,
        landArea: form.landArea ? Number(form.landArea) : null,
        images: images.map((file) => file.name),
      });

      setMessageType('success');
      setMessage(
        'Form validated successfully. Connect your property API to save this listing permanently.'
      );
    } catch (error) {
      setMessageType('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f9fc] px-4 py-6 text-slate-800 sm:px-6 lg:px-8 lg:py-9">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-7">
          <Link
            href="/admin/properties"
            className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-[#578c1c]"
          >
            <ArrowLeft size={17} />
            Back to properties
          </Link>

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="mb-2 flex items-center gap-2 text-xs text-slate-400">
                <Link href="/admin" className="hover:text-slate-700">
                  Dashboard
                </Link>
                <span>/</span>
                <Link href="/admin/properties" className="hover:text-slate-700">
                  Properties
                </Link>
                <span>/</span>
                <span className="text-slate-600">Add new</span>
              </div>

              <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                Add New Property
              </h1>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Add the details below to create a new property listing.
              </p>
            </div>

            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              New listing
            </span>
          </div>
        </div>

        {/* Feedback */}
        {message && (
          <div
            role="status"
            className={`mb-6 flex items-start gap-3 rounded-xl border p-4 text-sm ${
              messageType === 'error'
                ? 'border-red-200 bg-red-50 text-red-700'
                : 'border-emerald-200 bg-emerald-50 text-emerald-800'
            }`}
          >
            <CheckCircle2 size={19} className="mt-0.5 shrink-0" />
            <p>{message}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic details */}
          <FormSection
            title="Basic information"
            description="Give your listing a clear title and an informative description."
            icon={FileText}
          >
            <div>
              <label className={labelClass} htmlFor="title">
                Property title <span className="text-red-500">*</span>
              </label>
              <input
                id="title"
                value={form.title}
                onChange={(event) => updateField('title', event.target.value)}
                placeholder="e.g. Luxury 4 Bedroom Duplex in Lekki"
                className={inputClass}
              />
              {errors.title && <p className="mt-1 text-xs text-red-600">{errors.title}</p>}
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="type">
                  Listing type
                </label>
                <select
                  id="type"
                  value={form.type}
                  onChange={(event) => updateField('type', event.target.value)}
                  className={inputClass}
                >
                  <option>For Sale</option>
                  <option>For Rent</option>
                  <option>Short Let</option>
                  <option>For Lease</option>
                </select>
              </div>

              <div>
                <label className={labelClass} htmlFor="category">
                  Property category
                </label>
                <select
                  id="category"
                  value={form.category}
                  onChange={(event) => updateField('category', event.target.value)}
                  className={inputClass}
                >
                  <option>Detached House</option>
                  <option>Duplex</option>
                  <option>Apartment</option>
                  <option>Terrace House</option>
                  <option>Bungalow</option>
                  <option>Land</option>
                  <option>Commercial Property</option>
                  <option>Studio</option>
                </select>
              </div>
            </div>

            <div>
              <label className={labelClass} htmlFor="description">
                Property description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                rows={6}
                value={form.description}
                onChange={(event) => updateField('description', event.target.value)}
                placeholder="Describe the property, its condition, location benefits and standout features..."
                className={inputClass + ' resize-y'}
              />
              {errors.description && (
                <p className="mt-1 text-xs text-red-600">{errors.description}</p>
              )}
            </div>
          </FormSection>

          {/* Pricing */}
          <FormSection
            title="Pricing and terms"
            description="Set the asking price and rental terms, where applicable."
            icon={Banknote}
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="price">
                  Price (₦) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-[25px] -translate-y-1/2 text-sm font-semibold text-slate-400">
                    ₦
                  </span>
                  <input
                    id="price"
                    type="number"
                    min="1"
                    value={form.price}
                    onChange={(event) => updateField('price', event.target.value)}
                    placeholder="185000000"
                    className={inputClass + ' pl-9'}
                  />
                </div>
                {errors.price && <p className="mt-1 text-xs text-red-600">{errors.price}</p>}
              </div>

              <div>
                <label className={labelClass} htmlFor="pricePeriod">
                  Payment period
                </label>
                <select
                  id="pricePeriod"
                  value={form.pricePeriod}
                  onChange={(event) => updateField('pricePeriod', event.target.value)}
                  className={inputClass}
                >
                  <option>One-time payment</option>
                  <option>Yearly</option>
                  <option>Monthly</option>
                  <option>Daily</option>
                  <option>Negotiable</option>
                </select>
              </div>
            </div>

            <p className="text-xs leading-5 text-slate-400">
              Use the full amount in naira, without commas. The payment period helps distinguish a
              sale price from a rental or short-let rate.
            </p>
          </FormSection>

          {/* Location */}
          <FormSection
            title="Property location"
            description="Help prospective buyers and tenants find the property."
            icon={MapPin}
          >
            <div>
              <label className={labelClass} htmlFor="address">
                Street address <span className="text-red-500">*</span>
              </label>
              <input
                id="address"
                value={form.address}
                onChange={(event) => updateField('address', event.target.value)}
                placeholder="Street name, estate or neighbourhood"
                className={inputClass}
              />
              {errors.address && <p className="mt-1 text-xs text-red-600">{errors.address}</p>}
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="city">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  id="city"
                  value={form.city}
                  onChange={(event) => updateField('city', event.target.value)}
                  placeholder="e.g. Lagos"
                  className={inputClass}
                />
                {errors.city && <p className="mt-1 text-xs text-red-600">{errors.city}</p>}
              </div>

              <div>
                <label className={labelClass} htmlFor="state">
                  State <span className="text-red-500">*</span>
                </label>
                <select
                  id="state"
                  value={form.state}
                  onChange={(event) => updateField('state', event.target.value)}
                  className={inputClass}
                >
                  <option value="">Select state</option>
                  {[
                    'Abia',
                    'Adamawa',
                    'Akwa Ibom',
                    'Anambra',
                    'Bauchi',
                    'Bayelsa',
                    'Benue',
                    'Borno',
                    'Cross River',
                    'Delta',
                    'Ebonyi',
                    'Edo',
                    'Ekiti',
                    'Enugu',
                    'FCT - Abuja',
                    'Gombe',
                    'Imo',
                    'Jigawa',
                    'Kaduna',
                    'Kano',
                    'Katsina',
                    'Kebbi',
                    'Kogi',
                    'Kwara',
                    'Lagos',
                    'Nasarawa',
                    'Niger',
                    'Ogun',
                    'Ondo',
                    'Osun',
                    'Oyo',
                    'Plateau',
                    'Rivers',
                    'Sokoto',
                    'Taraba',
                    'Yobe',
                    'Zamfara',
                  ].map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                {errors.state && <p className="mt-1 text-xs text-red-600">{errors.state}</p>}
              </div>
            </div>
          </FormSection>

          {/* Property specifications */}
          <FormSection
            title="Property specifications"
            description="Provide the details clients use to compare properties."
            icon={Home}
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <label className={labelClass} htmlFor="bedrooms">
                  Bedrooms
                </label>
                <input
                  id="bedrooms"
                  type="number"
                  min="0"
                  value={form.bedrooms}
                  onChange={(event) => updateField('bedrooms', event.target.value)}
                  placeholder="4"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="bathrooms">
                  Bathrooms
                </label>
                <input
                  id="bathrooms"
                  type="number"
                  min="0"
                  value={form.bathrooms}
                  onChange={(event) => updateField('bathrooms', event.target.value)}
                  placeholder="5"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="toilets">
                  Toilets
                </label>
                <input
                  id="toilets"
                  type="number"
                  min="0"
                  value={form.toilets}
                  onChange={(event) => updateField('toilets', event.target.value)}
                  placeholder="6"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="area">
                  Floor area (m²)
                </label>
                <input
                  id="area"
                  type="number"
                  min="0"
                  value={form.area}
                  onChange={(event) => updateField('area', event.target.value)}
                  placeholder="320"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="landArea">
                  Land area (m²)
                </label>
                <input
                  id="landArea"
                  type="number"
                  min="0"
                  value={form.landArea}
                  onChange={(event) => updateField('landArea', event.target.value)}
                  placeholder="600"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="condition">
                  Property condition
                </label>
                <select
                  id="condition"
                  value={form.condition}
                  onChange={(event) => updateField('condition', event.target.value)}
                  className={inputClass}
                >
                  <option>Newly Built</option>
                  <option>Under Construction</option>
                  <option>Good Condition</option>
                  <option>Needs Renovation</option>
                </select>
              </div>
            </div>

            <div>
              <label className={labelClass} htmlFor="furnishing">
                Furnishing
              </label>
              <select
                id="furnishing"
                value={form.furnishing}
                onChange={(event) => updateField('furnishing', event.target.value)}
                className={inputClass}
              >
                <option>Unfurnished</option>
                <option>Partly Furnished</option>
                <option>Fully Furnished</option>
              </select>
            </div>

            <div>
              <h3 className={labelClass}>Property features</h3>
              <p className="mt-1 text-xs text-slate-500">
                Select all features available at this property.
              </p>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {availableFeatures.map((feature) => (
                  <label
                    key={feature}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 text-sm transition ${
                      form.features.includes(feature)
                        ? 'border-[#8DC63F] bg-[#8DC63F]/10 text-slate-900'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={form.features.includes(feature)}
                      onChange={() => toggleFeature(feature)}
                      className="h-4 w-4 accent-[#8DC63F]"
                    />
                    {feature}
                  </label>
                ))}
              </div>
            </div>
          </FormSection>

          {/* Images */}
          <FormSection
            title="Property images"
            description="Upload clear, high-quality images to showcase the property."
            icon={ImagePlus}
          >
            <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/70 px-5 py-10 text-center transition hover:border-[#8DC63F] hover:bg-[#8DC63F]/5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#669d2b] shadow-sm">
                <Upload size={25} />
              </div>

              <p className="mt-4 text-sm font-bold text-slate-800">
                Click to upload property images
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Image files only. You can select up to 10 images.
              </p>

              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="sr-only"
              />
            </label>

            {imagePreviews.length > 0 && (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {imagePreviews.map((src, index) => (
                  <div
                    key={`${images[index].name}-${index}`}
                    className="group relative overflow-hidden rounded-xl border border-slate-200"
                  >
                    <img
                      src={src}
                      alt={`Property preview ${index + 1}`}
                      className="h-32 w-full object-cover"
                    />
                    {index === 0 && (
                      <span className="absolute bottom-2 left-2 rounded-md bg-[#8DC63F] px-2 py-1 text-[10px] font-bold text-slate-950">
                        Cover image
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      aria-label={`Remove image ${index + 1}`}
                      className="absolute right-2 top-2 rounded-lg bg-white p-1.5 text-red-600 shadow-sm transition hover:bg-red-50"
                    >
                      <X size={15} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <p className="text-xs leading-5 text-slate-400">
              The first selected image will be treated as the cover image in this form. Image
              previews are temporary; upload the images to your storage service before saving the
              listing permanently.
            </p>
          </FormSection>

          {/* Publishing */}
          <FormSection
            title="Publishing settings"
            description="Choose whether this property should be published or saved as a draft."
            icon={CheckCircle2}
          >
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50">
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(event) => updateField('featured', event.target.checked)}
                className="mt-1 h-4 w-4 accent-[#8DC63F]"
              />
              <div>
                <p className="text-sm font-bold text-slate-800">Feature this property</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Mark this listing for potential promotion in featured property sections on the
                  website.
                </p>
              </div>
            </label>

            <div>
              <label className={labelClass} htmlFor="status">
                Listing status
              </label>
              <select
                id="status"
                value={form.status}
                onChange={(event) => updateField('status', event.target.value)}
                className={inputClass}
              >
                <option value="Draft">Save as draft</option>
                <option value="Pending">Pending review</option>
                <option value="Published">Publish listing</option>
              </select>
              <p className="mt-2 text-xs text-slate-400">
                Publishing should only make a property publicly visible after the server has
                validated and saved the listing.
              </p>
            </div>
          </FormSection>

          {/* Actions */}
          <div className="sticky bottom-0 z-20 -mx-4 flex flex-col-reverse gap-3 border-t border-slate-200 bg-white/95 p-4 backdrop-blur sm:-mx-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:static lg:mx-0 lg:rounded-2xl lg:border lg:p-5">
            <Link
              href="/admin/properties"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
            >
              <ArrowLeft size={17} />
              Cancel
            </Link>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => updateField('status', 'Draft')}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
              >
                <Save size={17} />
                Save as draft
              </button>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#8DC63F] px-6 py-3 text-sm font-bold text-slate-950 shadow-sm transition hover:bg-[#7db52f] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Eye size={17} />
                {submitting ? 'Processing...' : 'Save Property'}
              </button>
            </div>
          </div>
        </form>

        <footer className="py-6 text-center text-xs text-slate-400">
          © 2026 Benol Property. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
