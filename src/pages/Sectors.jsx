import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { sectors } from '../data/sectors'
import { ChevronLeft, Search } from 'lucide-react'
import SectorIcon from '../components/SectorIcon'

export default function Sectors() {
  useEffect(() => { document.title = 'القطاعات — ڤوم | 23 قطاع مدعوم' }, [])
  const [query, setQuery] = useState('')
  const filtered = sectors.filter((s) =>
    s.name.includes(query) || s.hook.includes(query)
  )

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="hero-gradient pt-28 pb-16 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-white/10 border border-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            23 قطاع مدعوم
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            ڤوم يتحدث <span className="text-orange-light">بلغة عملك</span>
          </h1>
          <p className="text-white/80 text-xl mb-8">
            مو "برنامج محاسبة عام"، محتوى مخصص لكل قطاع، مع أمثلة مالية حقيقية بالريال السعودي
          </p>

          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50" />
            <input
              type="text"
              placeholder="ابحث عن قطاعك..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 pr-12 pl-4 py-3 rounded-xl backdrop-blur-sm focus:outline-none focus:border-white/50 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-xl font-semibold">لم نجد نتائج لـ "{query}"</p>
          </div>
        ) : (
          <>
            <p className="text-gray-400 text-sm mb-8 text-center">
              يعرض {filtered.length} قطاع
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((sector) => (
                <Link
                  key={sector.id}
                  to={`/sectors/${sector.slug}`}
                  className="group bg-white border border-gray-100 rounded-2xl p-6 card-hover flex flex-col gap-4"
                >
                  {/* top */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gray-50 group-hover:bg-teal/5 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors">
                      <SectorIcon slug={sector.slug} size={26} className="text-teal/70 group-hover:text-teal transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-black text-gray-900 group-hover:text-teal transition-colors text-lg leading-tight">
                        {sector.name}
                      </h3>
                    </div>
                  </div>

                  {/* hook */}
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                    {sector.hook}
                  </p>

                  {/* cta */}
                  <div className="flex items-center gap-1.5 text-teal text-sm font-bold group-hover:gap-3 transition-all">
                    <span>تفاصيل قطاعك</span>
                    <ChevronLeft size={16} />
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="bg-teal/5 border-t border-teal/10 py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-3">
            ما لقيت قطاعك؟
          </h2>
          <p className="text-gray-500 mb-6">
            ڤوم يدعم أي نشاط تجاري في السعودية، تواصل معنا وسنضيف قطاعك
          </p>
          <a
            href="https://app.getvom.com/register"
            className="inline-flex items-center gap-2 bg-orange text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-orange/30 hover:bg-orange-dark transition-all"
          >
            ابدأ تجربتك المجانية
            <ChevronLeft size={18} />
          </a>
        </div>
      </div>
    </div>
  )
}
