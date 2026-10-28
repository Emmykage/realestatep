'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  UserRound,
  Camera,
  Mail,
  Phone,
  MapPin,
  BriefcaseBusiness,
  X,
  Save,
} from 'lucide-react';

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  role: 'Property Agent',
  location: '',
  experience: '',
  bio: '',
  status: 'Active',
};

export default function NewAgentPage() {
  const [form, setForm] = useState(initialForm);
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState('');
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: '' }));
    setMessage('');
  };

  const handlePhoto = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrors((current) => ({
        ...current,
        photo: 'Please select an image file.',
      }));
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrors((current) => ({
        ...current,
        photo: 'The image must be smaller than 5MB.',
      }));
      return;
    }

    if (preview) URL.revokeObjectURL(preview);

    setPhoto(file);
    setPreview(URL.createObjectURL(file));
    setErrors((current) => ({ ...current, photo: '' }));
  };

  const removePhoto = () => {
    if (preview) URL.revokeObjectURL(preview);
    setPhoto(null);
    setPreview('');
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.firstName.trim()) {
      nextErrors.firstName = 'First name is required.';
    }

    if (!form.lastName.trim()) {
      nextErrors.lastName = 'Last name is required.';
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!form.phone.trim()) {
      nextErrors.phone = 'Phone number is required.';
    }

    if (!form.location.trim()) {
      nextErrors.location = 'Location is required.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');

    if (!validate()) return;

    setSaving(true);

    try {
      // Connect this to your agent API to persist the record.
      // This currently validates the form but does not save to MongoDB.
      console.log({
        ...form,
        name: `${form.firstName.trim()} ${form.lastName.trim()}`,
        photo,
      });

      setMessage('The form is valid. Connect the agent API to save this agent permanently.');
    } catch {
      setMessage('Unable to process the form. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const inputClass =
    'mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#8DC63F] focus:ring-2 focus:ring-[#8DC63F]/10';

  const labelClass = 'text-sm font-semibold text-slate-700';

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/admin/agents"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-[#78ad32]"
        >
          <ArrowLeft size={17} />
          Back to Agents
        </Link>

        <div className="mt-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-slate-500">Dashboard / Agents / Add New Agent</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Add New Agent</h1>
            <p className="mt-2 text-sm text-slate-500">
              Add a property professional to the Benol Property team.
            </p>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8DC63F]/15 text-[#659d27]">
            <UserRound size={25} />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-7 space-y-6">
          {/* Profile photo */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
            <h2 className="font-bold text-slate-900">Profile Photo</h2>
            <p className="mt-1 text-sm text-slate-500">
              Upload a professional photograph for the agent profile.
            </p>

            <div className="mt-6 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-slate-50">
                {preview ? (
                  <img src={preview} alt="Agent preview" className="h-full w-full object-cover" />
                ) : (
                  <UserRound size={36} className="text-slate-300" />
                )}
              </div>

              <div>
                <div className="flex flex-wrap gap-3">
                  <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                    <Camera size={17} />
                    Upload Photo
                    <input type="file" accept="image/*" onChange={handlePhoto} className="hidden" />
                  </label>

                  {preview && (
                    <button
                      type="button"
                      onClick={removePhoto}
                      className="inline-flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold text-red-600 hover:bg-red-50"
                    >
                      <X size={16} />
                      Remove
                    </button>
                  )}
                </div>

                <p className="mt-3 text-xs text-slate-500">JPG, PNG or WebP. Maximum size 5MB.</p>

                {errors.photo && <p className="mt-2 text-sm text-red-600">{errors.photo}</p>}
              </div>
            </div>
          </section>

          {/* Personal details */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8DC63F]/10 text-[#659d27]">
                <UserRound size={20} />
              </div>
              <div>
                <h2 className="font-bold text-slate-900">Personal Information</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Enter the agent&apos;s contact and identity details.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass}>First Name *</label>
                <input
                  value={form.firstName}
                  onChange={(e) => updateField('firstName', e.target.value)}
                  placeholder="e.g. Chidi"
                  className={inputClass}
                />
                {errors.firstName && (
                  <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>
                )}
              </div>

              <div>
                <label className={labelClass}>Last Name *</label>
                <input
                  value={form.lastName}
                  onChange={(e) => updateField('lastName', e.target.value)}
                  placeholder="e.g. Okafor"
                  className={inputClass}
                />
                {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
              </div>

              <div>
                <label className={labelClass}>Email Address *</label>
                <div className="relative">
                  <Mail
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    placeholder="agent@example.com"
                    className={`${inputClass} pl-11`}
                  />
                </div>
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label className={labelClass}>Phone Number *</label>
                <div className="relative">
                  <Phone
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    placeholder="+234 800 000 0000"
                    className={`${inputClass} pl-11`}
                  />
                </div>
                {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
              </div>

              <div>
                <label className={labelClass}>Office Location *</label>
                <div className="relative">
                  <MapPin
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    value={form.location}
                    onChange={(e) => updateField('location', e.target.value)}
                    placeholder="e.g. Enugu, Enugu State"
                    className={`${inputClass} pl-11`}
                  />
                </div>
                {errors.location && <p className="mt-1 text-xs text-red-600">{errors.location}</p>}
              </div>

              <div>
                <label className={labelClass}>Professional Role</label>
                <select
                  value={form.role}
                  onChange={(e) => updateField('role', e.target.value)}
                  className={inputClass}
                >
                  <option>Property Agent</option>
                  <option>Senior Property Agent</option>
                  <option>Property Consultant</option>
                  <option>Sales Manager</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>Years of Experience</label>
                <select
                  value={form.experience}
                  onChange={(e) => updateField('experience', e.target.value)}
                  className={inputClass}
                >
                  <option value="">Select experience</option>
                  <option>Less than 1 year</option>
                  <option>1–3 years</option>
                  <option>4–6 years</option>
                  <option>7–10 years</option>
                  <option>10+ years</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>Account Status</label>
                <select
                  value={form.status}
                  onChange={(e) => updateField('status', e.target.value)}
                  className={inputClass}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
          </section>

          {/* Bio */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8DC63F]/10 text-[#659d27]">
                <BriefcaseBusiness size={20} />
              </div>
              <div>
                <h2 className="font-bold text-slate-900">Professional Profile</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Introduce the agent and their property expertise.
                </p>
              </div>
            </div>

            <label className={labelClass}>Biography</label>
            <textarea
              rows={5}
              maxLength={1000}
              value={form.bio}
              onChange={(e) => updateField('bio', e.target.value)}
              placeholder="Write a short biography highlighting experience, expertise and the areas the agent serves..."
              className={`${inputClass} resize-y`}
            />
            <p className="mt-2 text-right text-xs text-slate-400">
              {form.bio.length}/1000 characters
            </p>
          </section>

          {message && (
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
              {message}
            </div>
          )}

          <div className="flex flex-col-reverse justify-end gap-3 sm:flex-row">
            <Link
              href="/admin/agents"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50"
            >
              Cancel
            </Link>

            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#8DC63F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#78ad32] disabled:opacity-60"
            >
              <Save size={17} />
              {saving ? 'Saving...' : 'Create Agent'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
