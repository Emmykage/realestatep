'use client';
import { useState } from 'react';

// ─── ROI CALCULATOR ──────────────────────────────────────────────────────────
function ROICalculator({ basePrice, roi }) {
  const [investment, setInvestment] = useState(100000000);
  const [years, setYears] = useState(5);
  const annualReturn = investment * (roi.capitalAppreciation / 100);
  const totalReturn = investment * Math.pow(1 + roi.capitalAppreciation / 100, years);
  const profit = totalReturn - investment;
  const rentalIncome = investment * (roi.rentalYield / 100) * years;

  const fmt = (n) => '₦' + Math.round(n).toLocaleString();
  const G = '#8DC63F';

  return (
    <div
      className="bg-white/3 border rounded-2xl p-6"
      style={{ borderColor: 'rgba(255,255,255,0.08)' }}
    >
      <div className="flex items-center gap-2 mb-6">
        <span className="text-xl">📊</span>
        <h3 className="text-white font-display font-bold text-lg">ROI Calculator</h3>
        <span
          className="ml-auto text-xs font-mono px-2 py-1 rounded-full text-black font-bold"
          style={{ background: G }}
        >
          LIVE
        </span>
      </div>

      <div className="space-y-5 mb-6">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-white/60 text-sm">Investment Amount</span>
            <span className="text-white font-mono text-sm font-bold">{fmt(investment)}</span>
          </div>
          <input
            type="range"
            min={50000000}
            max={2000000000}
            step={10000000}
            value={investment}
            onChange={(e) => setInvestment(+e.target.value)}
            className="w-full accent-[#8DC63F] cursor-pointer"
          />
          <div className="flex justify-between text-white/30 font-mono text-xs mt-1">
            <span>₦50M</span>
            <span>₦2B</span>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-white/60 text-sm">Holding Period</span>
            <span className="text-white font-mono text-sm font-bold">{years} years</span>
          </div>
          <input
            type="range"
            min={1}
            max={15}
            step={1}
            value={years}
            onChange={(e) => setYears(+e.target.value)}
            className="w-full accent-[#8DC63F] cursor-pointer"
          />
          <div className="flex justify-between text-white/30 font-mono text-xs mt-1">
            <span>1yr</span>
            <span>15yrs</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {[
          {
            label: 'Projected Value',
            value: fmt(totalReturn),
            highlight: true,
          },
          { label: 'Capital Gain', value: fmt(profit), highlight: false },
          {
            label: 'Rental Income',
            value: fmt(rentalIncome),
            highlight: false,
          },
          {
            label: 'Total Return',
            value: fmt(profit + rentalIncome),
            highlight: true,
          },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl p-4"
            style={{
              background: item.highlight ? 'rgba(141,198,63,0.08)' : 'rgba(255,255,255,0.03)',
              border: `1px solid ${item.highlight ? 'rgba(141,198,63,0.3)' : 'rgba(255,255,255,0.06)'}`,
            }}
          >
            <div className="text-white/50 text-xs mb-1">{item.label}</div>
            <div
              className="font-display font-bold text-sm"
              style={{ color: item.highlight ? G : 'white' }}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 text-xs font-mono text-white/30 mt-2">
        <span>Cap. appreciation: {roi.capitalAppreciation}%/yr</span>
        <span>·</span>
        <span>Yield: {roi.rentalYield}%</span>
      </div>
    </div>
  );
}
export default ROICalculator;
