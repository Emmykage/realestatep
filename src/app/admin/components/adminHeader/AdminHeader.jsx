import { Search } from 'lucide-react';
import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';

const AdminHeader = () => {
  const [search, setSearch] = useState('');

  return (
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
  );
};

export default AdminHeader;
