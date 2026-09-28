const stats = [
  { value: '35+', label: 'Homes Sold' },
  { value: 'NGN 1.2B', label: 'ToTeam Sales 2026' },
  { value: '4 +', label: 'Years Active' },
  { value: '98%', label: 'Client Satisfaction' },
];

export default function StatsRow() {
  return (
    <section className="py-14 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-bold text-slate-900 mb-1">{s.value}</p>
              <p className="text-sm text-slate-500 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
