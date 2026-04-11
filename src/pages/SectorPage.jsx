import { useParams, Link } from 'react-router-dom'
import { getSectorBySlug, sectors } from '../data/sectors'
import { ChevronLeft, CheckCircle2, Star, ArrowLeft, Sparkles } from 'lucide-react'
import { useEffect } from 'react'
import SectorIcon from '../components/SectorIcon'

export default function SectorPage() {
  const { slug } = useParams()
  const sector = getSectorBySlug(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (sector) document.title = `ڤوم لـ ${sector.name} — محاسبة ذكية مخصصة لقطاعك`
  }, [slug, sector])

  if (!sector) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-6xl mb-4">🔍</p>
          <h2 className="text-2xl font-black mb-4">القطاع غير موجود</h2>
          <Link to="/sectors" className="text-teal font-bold underline">عودة للقطاعات</Link>
        </div>
      </div>
    )
  }

  const netPct = Math.round((sector.financial.netProfit / sector.financial.revenue) * 100)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="hero-gradient pt-28 pb-20 relative overflow-hidden">
        {/* Geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute top-12 right-12 opacity-60" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <line x1="2" y1="2" x2="34" y2="34" stroke="#FF7300" strokeWidth="5" strokeLinecap="round"/>
            <line x1="34" y1="2" x2="2" y2="34" stroke="#FF7300" strokeWidth="5" strokeLinecap="round"/>
          </svg>
          <svg className="absolute bottom-10 left-16 opacity-55" width="42" height="42" viewBox="0 0 42 42" fill="none">
            <line x1="0" y1="12" x2="42" y2="12" stroke="#E040A0" strokeWidth="4" strokeLinecap="round" transform="rotate(-35 21 21)"/>
            <line x1="0" y1="24" x2="42" y2="24" stroke="#E040A0" strokeWidth="4" strokeLinecap="round" transform="rotate(-35 21 21)"/>
            <line x1="0" y1="36" x2="42" y2="36" stroke="#E040A0" strokeWidth="4" strokeLinecap="round" transform="rotate(-35 21 21)"/>
          </svg>
          <svg className="absolute top-20 left-1/3 opacity-30" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <line x1="2" y1="2" x2="20" y2="20" stroke="#FF7300" strokeWidth="4" strokeLinecap="round"/>
            <line x1="20" y1="2" x2="2" y2="20" stroke="#FF7300" strokeWidth="4" strokeLinecap="round"/>
          </svg>
          <svg className="absolute bottom-16 right-1/4 opacity-40" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <line x1="0" y1="10" x2="32" y2="10" stroke="#9B4DCA" strokeWidth="3.5" strokeLinecap="round" transform="rotate(-40 16 16)"/>
            <line x1="0" y1="20" x2="32" y2="20" stroke="#9B4DCA" strokeWidth="3.5" strokeLinecap="round" transform="rotate(-40 16 16)"/>
          </svg>
          <svg className="absolute top-1/2 left-8 opacity-25" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="4" cy="4" r="3" fill="white"/>
            <circle cx="14" cy="4" r="3" fill="white"/>
            <circle cx="4" cy="14" r="3" fill="white"/>
            <circle cx="14" cy="14" r="3" fill="white"/>
          </svg>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          {/* breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-8">
            <Link to="/" className="hover:text-white transition-colors">الرئيسية</Link>
            <ChevronLeft size={14} />
            <Link to="/sectors" className="hover:text-white transition-colors">القطاعات</Link>
            <ChevronLeft size={14} />
            <span className="text-white/90">{sector.name}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                  <SectorIcon slug={sector.slug} size={32} className="text-white" />
                </div>
                <div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-white/90`}>
                    {sector.name}
                  </span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
                {sector.hook}
              </h1>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                {sector.painPoint}
              </p>

              <a
                href="https://app.getvom.com/register"
                className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-black text-lg px-8 py-4 rounded-2xl shadow-xl shadow-orange/40 transition-all hover:scale-105"
              >
                {sector.cta}
                <ChevronLeft size={20} />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        {/* 5 Solutions */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center">
              <CheckCircle2 size={20} className="text-teal" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-gray-900">كيف يساعدك ڤوم؟</h2>
              <p className="text-gray-400 text-sm">5 حلول مصممة لـ {sector.name}</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sector.solutions.map((sol, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 bg-teal rounded-xl flex items-center justify-center flex-shrink-0 text-white font-black text-sm">
                  {i + 1}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">{sol}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Exclusive Feature */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-teal/5 to-teal/10 border border-teal/20 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-4 left-4 opacity-10">
              <Sparkles size={80} className="text-teal" />
            </div>
            <div className="relative">
              <span className="inline-block bg-teal text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                ميزة حصرية لـ {sector.name}
              </span>
              <h3 className="text-2xl font-black text-gray-900 mb-3">
                {sector.exclusiveFeature.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                {sector.exclusiveFeature.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Financial Table */}
        <div className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 mb-2">قائمة الدخل، مثال حقيقي</h2>
          <p className="text-gray-400 text-sm mb-8">{sector.financial.note}</p>

          <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg">
            <div className="bg-gray-900 px-6 py-4">
              <p className="text-white font-bold flex items-center gap-2"><SectorIcon slug={sector.slug} size={16} className="text-white/70" /> قائمة الدخل المزدوجة، ڤوم</p>
            </div>
            {[
              { label: 'الإيرادات الشهرية الإجمالية', value: sector.financial.revenue, cls: 'text-gray-900 text-lg font-black' },
              { label: 'تكاليف التشغيل', value: sector.financial.operatingCost, cls: 'text-red-500 font-bold', pre: '- ' },
              { label: 'إجمالي الربح', value: sector.financial.grossProfit, cls: 'text-teal font-bold text-lg', bg: 'bg-teal/5' },
              { label: 'صافي الربح', value: sector.financial.netProfit, cls: 'text-orange font-black text-xl', bg: 'bg-orange/5' },
            ].map((row) => (
              <div key={row.label} className={`flex items-center justify-between px-6 py-5 border-b border-gray-50 ${row.bg || ''}`}>
                <span className="text-gray-600 font-medium">{row.label}</span>
                <span className={row.cls}>{row.pre || ''}{row.value.toLocaleString('en-US')} ريال</span>
              </div>
            ))}
            <div className="px-6 py-4 bg-gray-50">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle2 size={14} className="text-teal" />
                هذا التقرير يتولَّد تلقائياً في ڤوم، بأرقامك الفعلية
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="hero-gradient rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          {/* Geometric shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="absolute top-6 left-8 opacity-65" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <line x1="2" y1="2" x2="30" y2="30" stroke="#FF7300" strokeWidth="5" strokeLinecap="round"/>
              <line x1="30" y1="2" x2="2" y2="30" stroke="#FF7300" strokeWidth="5" strokeLinecap="round"/>
            </svg>
            <svg className="absolute bottom-8 right-10 opacity-55" width="38" height="38" viewBox="0 0 38 38" fill="none">
              <line x1="0" y1="11" x2="38" y2="11" stroke="#E040A0" strokeWidth="4" strokeLinecap="round" transform="rotate(-35 19 19)"/>
              <line x1="0" y1="22" x2="38" y2="22" stroke="#E040A0" strokeWidth="4" strokeLinecap="round" transform="rotate(-35 19 19)"/>
              <line x1="0" y1="33" x2="38" y2="33" stroke="#E040A0" strokeWidth="4" strokeLinecap="round" transform="rotate(-35 19 19)"/>
            </svg>
            <svg className="absolute top-8 right-16 opacity-45" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <line x1="0" y1="8" x2="28" y2="8" stroke="#9B4DCA" strokeWidth="3.5" strokeLinecap="round" transform="rotate(-40 14 14)"/>
              <line x1="0" y1="18" x2="28" y2="18" stroke="#9B4DCA" strokeWidth="3.5" strokeLinecap="round" transform="rotate(-40 14 14)"/>
            </svg>
          </div>
          <div className="relative">
            <h2 className="text-3xl font-black text-white mb-4">
              جاهز تعرف أرباحك الحقيقية من {sector.name}؟
            </h2>
            <p className="text-white/70 text-lg mb-8">
              30 يوم مجاناً، بدون بطاقة ائتمان
            </p>
            <a
              href="https://app.getvom.com/register"
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-black text-xl px-10 py-5 rounded-2xl shadow-2xl shadow-orange/40 transition-all hover:scale-105"
            >
              {sector.cta}
              <ChevronLeft size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Other Sectors */}
      <div className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-xl font-black text-gray-900 mb-6 text-center">قطاعات أخرى</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {sectors
              .filter((s) => s.slug !== slug)
              .slice(0, 10)
              .map((s) => (
                <Link
                  key={s.id}
                  to={`/sectors/${s.slug}`}
                  className="group flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-gray-100 hover:border-teal/30 card-hover text-center"
                >
                  <SectorIcon slug={s.slug} size={22} className="text-teal/60 group-hover:text-teal transition-colors" />
                  <span className="text-xs font-bold text-gray-700">{s.name}</span>
                </Link>
              ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/sectors" className="text-teal font-bold text-sm flex items-center gap-1 justify-center hover:underline">
              عرض جميع القطاعات <ArrowLeft size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
