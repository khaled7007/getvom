import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { apps } from '../data/apps'
import { ChevronLeft, Plug, CheckCircle2, ArrowLeft } from 'lucide-react'

const partnerColors = {
  foodics: { bg: 'bg-red-500',    text: 'text-red-500',    light: 'bg-red-50',    border: 'border-red-100'    },
  prexie:  { bg: 'bg-blue-500',   text: 'text-blue-500',   light: 'bg-blue-50',   border: 'border-blue-100'   },
  zid:     { bg: 'bg-yellow-500', text: 'text-yellow-600', light: 'bg-yellow-50', border: 'border-yellow-100' },
  marn:    { bg: 'bg-green-500',  text: 'text-green-600',  light: 'bg-green-50',  border: 'border-green-100'  },
}

export default function Apps() {
  useEffect(() => { document.title = 'سوق التطبيقات — ڤوم | تكامل مع Foodics وZid وغيرها' }, [])
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="hero-gradient pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <svg className="absolute top-10 left-14 opacity-60" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <line x1="2" y1="2" x2="34" y2="34" stroke="#FF7300" strokeWidth="5" strokeLinecap="round"/>
            <line x1="34" y1="2" x2="2" y2="34" stroke="#FF7300" strokeWidth="5" strokeLinecap="round"/>
          </svg>
          <svg className="absolute bottom-10 right-16 opacity-55" width="44" height="44" viewBox="0 0 44 44" fill="none">
            <line x1="0" y1="13" x2="44" y2="13" stroke="#E040A0" strokeWidth="4.5" strokeLinecap="round" transform="rotate(-35 22 22)"/>
            <line x1="0" y1="25" x2="44" y2="25" stroke="#E040A0" strokeWidth="4.5" strokeLinecap="round" transform="rotate(-35 22 22)"/>
          </svg>
          <svg className="absolute top-16 right-20 opacity-40" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <line x1="0" y1="9" x2="30" y2="9" stroke="#9B4DCA" strokeWidth="3.5" strokeLinecap="round" transform="rotate(-40 15 15)"/>
            <line x1="0" y1="19" x2="30" y2="19" stroke="#9B4DCA" strokeWidth="3.5" strokeLinecap="round" transform="rotate(-40 15 15)"/>
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-6">
            <Plug size={14} />
            4 تكاملات متاحة
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
            سوق <span className="text-orange-light">التطبيقات</span>
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto leading-relaxed">
            ربط ڤوم مع الأنظمة اللي تستخدمها يومياً. بياناتك تتدفق تلقائياً ومحاسبتك دائماً محدّثة.
          </p>
        </div>
      </div>

      {/* How it works strip */}
      <div className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { n: '١', title: 'اختر التطبيق', desc: 'اختر النظام اللي تستخدمه من القائمة' },
              { n: '٢', title: 'اربطه بنقرة', desc: 'الربط يتم في دقيقتين من لوحة التحكم' },
              { n: '٣', title: 'بياناتك تتدفق', desc: 'المبيعات والمصاريف تنعكس تلقائياً في ڤوم' },
            ].map((s) => (
              <div key={s.n} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-teal rounded-2xl flex items-center justify-center text-white font-black text-xl">
                  {s.n}
                </div>
                <p className="font-black text-gray-900">{s.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Apps Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {apps.map((app) => {
            const c = partnerColors[app.slug]
            return (
              <Link
                key={app.id}
                to={`/apps/${app.slug}`}
                className={`group relative bg-white border ${c.border} rounded-3xl p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
              >
                {/* background accent */}
                <div className={`absolute top-0 left-0 w-1.5 h-full ${c.bg} rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity`} />

                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-2">
                    {/* VOM */}
                    <div className="h-10 px-3 bg-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <img src="/vom-logo.webp" alt="ڤوم" className="h-5 w-auto" style={{ filter: 'invert(53%) sepia(60%) saturate(400%) hue-rotate(130deg)' }} />
                    </div>
                    <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Plug size={10} className="text-gray-400" />
                    </div>
                    {/* Partner logo */}
                    <div className={`h-10 px-3 ${app.logoBg} rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-100`}>
                      <img src={app.logo} alt={app.name} className="h-5 w-auto max-w-[80px] object-contain" />
                    </div>
                  </div>
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${app.categoryColor}`}>
                    {app.category}
                  </span>
                </div>

                <h2 className={`text-xl font-black text-gray-900 mb-2 group-hover:${c.text} transition-colors`}>
                  ڤوم و {app.name}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">
                  {app.description}
                </p>

                {/* Features preview */}
                <div className="space-y-2 mb-5">
                  {app.features.slice(0, 3).map((f) => (
                    <div key={f.title} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-teal flex-shrink-0" />
                      <span className="text-gray-600 text-xs">{f.title}</span>
                    </div>
                  ))}
                  {app.features.length > 3 && (
                    <p className={`text-xs font-bold ${c.text} mr-5`}>
                      +{app.features.length - 3} مميزات أخرى
                    </p>
                  )}
                </div>

                <div className={`flex items-center gap-1.5 font-bold text-sm ${c.text} group-hover:gap-3 transition-all`}>
                  <span>اعرف أكثر عن التكامل</span>
                  <ChevronLeft size={16} />
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="hero-gradient py-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <svg className="absolute top-8 left-12 opacity-65" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <line x1="2" y1="2" x2="34" y2="34" stroke="#FF7300" strokeWidth="5" strokeLinecap="round"/>
            <line x1="34" y1="2" x2="2" y2="34" stroke="#FF7300" strokeWidth="5" strokeLinecap="round"/>
          </svg>
          <svg className="absolute bottom-8 right-14 opacity-55" width="44" height="44" viewBox="0 0 44 44" fill="none">
            <line x1="0" y1="13" x2="44" y2="13" stroke="#E040A0" strokeWidth="4.5" strokeLinecap="round" transform="rotate(-35 22 22)"/>
            <line x1="0" y1="25" x2="44" y2="25" stroke="#E040A0" strokeWidth="4.5" strokeLinecap="round" transform="rotate(-35 22 22)"/>
          </svg>
        </div>
        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-3">
            ما تستخدم أي من هذه الأنظمة؟
          </h2>
          <p className="text-white/70 mb-8">
            ڤوم يعمل مستقلاً أيضاً، وقريباً نضيف تكاملات أكثر
          </p>
          <a
            href="https://app.getvom.com/register"
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-black text-lg px-8 py-4 rounded-2xl shadow-xl shadow-orange/40 transition-all hover:scale-105"
          >
            ابدأ تجربتك المجانية
            <ChevronLeft size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}
