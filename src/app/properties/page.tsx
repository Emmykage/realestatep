import { Sliders } from 'lucide-react'
import PropertyCard, { Property } from '@/components/PropertyCard'

const allProperties: Property[] = [
  { id:1,  title:'The Whitmore Penthouse', address:'Upper East Side, NY',   price:'$4,250,000', beds:4, baths:3, sqft:'3,800 sqft', type:'Penthouse', tag:'New',      imgColor:'#B8C9E1', imgAccent:'#7F99BC' },
  { id:2,  title:'Sunridge Estate',        address:'Beverly Hills, CA',     price:'$7,900,000', beds:6, baths:5, sqft:'6,200 sqft', type:'Villa',      tag:'Featured', imgColor:'#D4C5B0', imgAccent:'#A8906E' },
  { id:3,  title:'Harbor View Loft',       address:'South Beach, Miami',    price:'$1,850,000', beds:2, baths:2, sqft:'1,950 sqft', type:'Loft',                       imgColor:'#B5C9C0', imgAccent:'#6E9E8E' },
  { id:4,  title:'The Meridian',           address:'Lincoln Park, Chicago', price:'$2,100,000', beds:3, baths:2, sqft:'2,400 sqft', type:'Condo',      tag:'Hot',      imgColor:'#C7B8D8', imgAccent:'#8E72A8' },
  { id:5,  title:'Clearwater Cottage',     address:'Cape Cod, MA',          price:'$1,200,000', beds:3, baths:2, sqft:'1,600 sqft', type:'Cottage',                    imgColor:'#BFD4D8', imgAccent:'#7FA8B2' },
  { id:6,  title:'Skyline Duplex',         address:'Midtown Manhattan, NY', price:'$3,400,000', beds:4, baths:3, sqft:'3,100 sqft', type:'Duplex',                     imgColor:'#C8C9CA', imgAccent:'#8A8E92' },
  { id:7,  title:'Nob Hill Classic',       address:'Nob Hill, San Francisco',price:'$3,750,000',beds:4, baths:3, sqft:'2,900 sqft', type:'Townhouse',  tag:'New',      imgColor:'#D1C0B0', imgAccent:'#9E7A60' },
  { id:8,  title:'The Langford',           address:'Downtown Austin, TX',   price:'$950,000',   beds:2, baths:2, sqft:'1,400 sqft', type:'Condo',                      imgColor:'#C0CADA', imgAccent:'#7890A8' },
  { id:9,  title:'Willowbrook Manor',      address:'Greenwich, Connecticut',price:'$6,500,000', beds:7, baths:6, sqft:'8,400 sqft', type:'Manor',      tag:'Rare',     imgColor:'#C5D0C5', imgAccent:'#7A9A7A' },
]

const types = ['All', 'Penthouse', 'Villa', 'Condo', 'Loft', 'Cottage', 'Duplex', 'Townhouse', 'Manor']

export default function PropertiesPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">

      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
          <p className="section-eyebrow">All listings</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h1 className="section-heading">Browse properties</h1>
            <p className="text-slate-500 text-sm pb-1">Showing {allProperties.length} results</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">

        {/* Filter bar */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <div className="flex items-center gap-1.5 text-sm text-slate-600 font-medium mr-2">
            <Sliders size={14} />
            Filter:
          </div>
          {types.map((t) => (
            <button
              key={t}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150 border ${
                t === 'All'
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:text-slate-900'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProperties.map((p) => (
            <PropertyCard key={p.id} p={p} />
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-14">
          <button className="btn-outline px-10">
            Load more properties
          </button>
        </div>
      </div>
    </div>
  )
}
