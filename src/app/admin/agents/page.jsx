'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  Plus,
  Search,
  Users,
  UserCheck,
  UserX,
  Building2,
  Mail,
  Phone,
  MapPin,
  Pencil,
  Trash2,
  Eye,
  SlidersHorizontal,
} from 'lucide-react';

const initialAgents = [
  {
    id: '1',
    name: 'Chidi Okafor',
    email: 'chidi@benolproperty.com',
    phone: '+234 803 123 4567',
    location: 'Enugu, Enugu State',
    role: 'Senior Property Agent',
    listings: 12,
    status: 'Active',
    initials: 'CO',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    id: '2',
    name: 'Amaka Eze',
    email: 'amaka@benolproperty.com',
    phone: '+234 806 234 5678',
    location: 'Abuja, FCT',
    role: 'Property Consultant',
    listings: 8,
    status: 'Active',
    initials: 'AE',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    id: '3',
    name: 'Emeka Nwosu',
    email: 'emeka@benolproperty.com',
    phone: '+234 809 345 6789',
    location: 'Lagos, Lagos State',
    role: 'Property Agent',
    listings: 5,
    status: 'Inactive',
    initials: 'EN',
    color: 'bg-orange-100 text-orange-700',
  },
  {
    id: '4',
    name: 'Adaobi Okeke',
    email: 'adaobi@benolproperty.com',
    phone: '+234 812 456 7890',
    location: 'Port Harcourt, Rivers State',
    role: 'Property Consultant',
    listings: 9,
    status: 'Active',
    initials: 'AO',
    color: 'bg-pink-100 text-pink-700',
  },
];

export default function AgentsPage() {
  const [agents, setAgents] = useState(initialAgents);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [roleFilter, setRoleFilter] = useState('All');

  const filteredAgents = useMemo(() => {
    return agents.filter((agent) => {
      const term = search.toLowerCase();

      const matchesSearch =
        agent.name.toLowerCase().includes(term) ||
        agent.email.toLowerCase().includes(term) ||
        agent.phone.toLowerCase().includes(term) ||
        agent.location.toLowerCase().includes(term);

      const matchesStatus = statusFilter === 'All' || agent.status === statusFilter;

      const matchesRole = roleFilter === 'All' || agent.role === roleFilter;

      return matchesSearch && matchesStatus && matchesRole;
    });
  }, [agents, search, statusFilter, roleFilter]);

  const activeCount = agents.filter((agent) => agent.status === 'Active').length;

  const inactiveCount = agents.filter((agent) => agent.status === 'Inactive').length;

  const listingCount = agents.reduce((total, agent) => total + agent.listings, 0);

  const deleteAgent = (agent) => {
    const confirmed = window.confirm(`Are you sure you want to remove ${agent.name}?`);

    if (confirmed) {
      setAgents((current) => current.filter((item) => item.id !== agent.id));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-7">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-slate-500">Dashboard / Agents</p>
            <h1 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">Agents</h1>
            <p className="mt-2 text-sm text-slate-500">
              Manage your property agents and their assignments.
            </p>
          </div>

          <Link
            href="/admin/agents/new"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#8DC63F] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#78ad32]"
          >
            <Plus size={18} />
            Add New Agent
          </Link>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            {
              label: 'Total Agents',
              value: agents.length,
              icon: Users,
              color: 'bg-blue-50 text-blue-600',
            },
            {
              label: 'Active Agents',
              value: activeCount,
              icon: UserCheck,
              color: 'bg-green-50 text-green-600',
            },
            {
              label: 'Inactive Agents',
              value: inactiveCount,
              icon: UserX,
              color: 'bg-orange-50 text-orange-600',
            },
            {
              label: 'Assigned Listings',
              value: listingCount,
              icon: Building2,
              color: 'bg-purple-50 text-purple-600',
            },
          ].map((stat) => {
            const Icon = stat.icon;

            return (
              <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">{stat.label}</p>
                    <p className="mt-3 text-3xl font-bold text-slate-900">{stat.value}</p>
                  </div>

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.color}`}
                  >
                    <Icon size={22} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Filters */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="relative flex-1">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by name, email, phone or location..."
                className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#8DC63F]"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative">
                <SlidersHorizontal
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <select
                  value={statusFilter}
                  onChange={(event) => setStatusFilter(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-9 pr-8 text-sm outline-none focus:border-[#8DC63F] sm:w-40"
                >
                  <option value="All">All statuses</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <select
                value={roleFilter}
                onChange={(event) => setRoleFilter(event.target.value)}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#8DC63F]"
              >
                <option value="All">All roles</option>
                <option value="Senior Property Agent">Senior Property Agent</option>
                <option value="Property Agent">Property Agent</option>
                <option value="Property Consultant">Property Consultant</option>
              </select>
            </div>
          </div>
        </div>

        {/* Agents table */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5">
            <div>
              <h2 className="font-bold text-slate-900">All Agents</h2>
              <p className="mt-1 text-sm text-slate-500">
                {filteredAgents.length} agent
                {filteredAgents.length !== 1 ? 's' : ''} found
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-6 py-4 font-semibold">Agent</th>
                  <th className="px-6 py-4 font-semibold">Contact</th>
                  <th className="px-6 py-4 font-semibold">Location</th>
                  <th className="px-6 py-4 font-semibold">Listings</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 text-right font-semibold">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredAgents.map((agent) => (
                  <tr key={agent.id} className="transition hover:bg-slate-50/70">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold ${agent.color}`}
                        >
                          {agent.initials}
                        </div>

                        <div>
                          <p className="font-semibold text-slate-900">{agent.name}</p>
                          <p className="mt-1 text-xs text-slate-500">{agent.role}</p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <p className="flex items-center gap-2 text-sm text-slate-700">
                        <Mail size={14} className="text-slate-400" />
                        {agent.email}
                      </p>
                      <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                        <Phone size={14} className="text-slate-400" />
                        {agent.phone}
                      </p>
                    </td>

                    <td className="px-6 py-5">
                      <p className="flex items-center gap-2 text-sm text-slate-600">
                        <MapPin size={15} className="text-slate-400" />
                        {agent.location}
                      </p>
                    </td>

                    <td className="px-6 py-5">
                      <span className="font-semibold text-slate-900">{agent.listings}</span>
                      <span className="ml-1 text-xs text-slate-500">properties</span>
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                          agent.status === 'Active'
                            ? 'bg-green-50 text-green-700'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {agent.status}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/agents/${agent.id}`}
                          title="View agent"
                          className="rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                        >
                          <Eye size={16} />
                        </Link>

                        <Link
                          href={`/admin/agents/${agent.id}/edit`}
                          title="Edit agent"
                          className="rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                        >
                          <Pencil size={16} />
                        </Link>

                        <button
                          type="button"
                          onClick={() => deleteAgent(agent)}
                          title="Delete agent"
                          className="rounded-lg border border-red-100 p-2 text-red-500 transition hover:bg-red-50"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredAgents.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-6 py-16 text-center">
                      <Users size={32} className="mx-auto text-slate-300" />
                      <p className="mt-3 font-semibold text-slate-700">No agents found</p>
                      <p className="mt-1 text-sm text-slate-500">
                        Try changing your search or filters.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
