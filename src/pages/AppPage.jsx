import { useParams, Link } from 'react-router-dom'
import { getAppBySlug, apps } from '../data/apps'
import { useEffect } from 'react'
import { ChevronLeft, CheckCircle2, Plug, ArrowLeft, Zap } from 'lucide-react'

const partnerColors = {
  foodics: { bg: 'bg-red-500',    light: 'bg-red-50',    border: 'border-red-200',    text: 'text-red-600',    gradient: 'from-red-500 to-orange-500'    },
  prexie:  { bg: 'bg-blue-500',   light: 'bg-blue-50',   border: 'border-blue-200',   text: 'text-blue-600',   gradient: 'from-blue-500 to-indigo-500'   },
  zid:     { bg: 'bg-yellow-500', light: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700', gradient: 'from-yellow-500 to-amber-500' },
  marn:    { bg: 'bg-green-500',  light: 'bg-green-50',  border: 'border-green-200',  text: 'text-green-700',  gradient: 'from-green-500 to-teal-500'    },
}

export default function AppPage() {
  const { slug } = useParams()
  const app = getAppBySlug(slug)
  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!app) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-6xl mb-4">🔌</p>
          <h2 className="text-2xl font-black mb-4">التطبيق غير موجود</h2>
          <Link to="/apps" className="text-teal font-bold underline">عودة لسوق التطبيقات</Link>
        </div>
      </div>
    )
  }

  const c = partnerColors[app.slug]

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="hero-gradient pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <svg className="absolute top-10 right-14 opacity-60" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <line x1="2" y1="2" x2="34" y2="34" stroke="#FF7300" strokeWidth="5" strokeLinecap="round"/>
            <line x1="34" y1="2" x2="2" y2="34" stroke="#FF7300" strokeWidth="5" strokeLinecap="round"/>
          </svg>
          <svg className="absolute bottom-10 left-16 opacity-50" width="42" height="42" viewBox="0 0 42 42" fill="none">
            <line x1="0" y1="12" x2="42" y2="12" stroke="#E040A0" strokeWidth="4" strokeLinecap="round" transform="rotate(-35 21 21)"/>
            <line x1="0" y1="24" x2="42" y2="24" stroke="#E040A0" strokeWidth="4" strokeLinecap="round" transform="rotate(-35 21 21)"/>
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-8">
            <Link to="/" className="hover:text-white transition-colors">الرئيسية</Link>
            <ChevronLeft size={14} />
            <Link to="/apps" className="hover:text-white transition-colors">سوق التطبيقات</Link>
            <ChevronLeft size={14} />
            <span className="text-white/90">ڤوم و {app.name}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Logos */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 px-4 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  <img src="/vom-logo.webp" alt="ڤوم" className="h-7 w-auto" />
                </div>
                <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Plug size={16} className="text-white" />
                </div>
                <div className={`h-14 px-4 ${app.logoBg} rounded-2xl flex items-center justify-center shadow-lg border border-white/10`}>
                  <img src={app.logo} alt={app.name} className="h-7 w-auto max-w-[120px] object-contain" />
                </div>
              </div>

              <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${app.categoryColor}`}>
                {app.category}
              </span>

              <h1 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
                ڤوم و {app.name}
                <br />
                <span className="text-orange-light">{app.tagline}</span>
              </h1>

              <p className="text-white/75 text-lg leading-relaxed mb-8">
                {app.description}
              </p>

              <a
                href={app.registerUrl}
                className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-black text-lg px-8 py-4 rounded-2xl shadow-xl shadow-orange/40 transition-all hover:scale-105"
              >
                {app.cta}
                <ChevronLeft size={20} />
              </a>
            </div>

            {/* Connection visual */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative">
                {/* Center connection card */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="h-12 px-3 bg-white rounded-xl flex items-center justify-center shadow-md">
                      <img src="/vom-logo.webp" alt="ڤوم" className="h-6 w-auto" />
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-8 h-0.5 bg-white/40" />
                      <Zap size={16} className="text-orange-light" />
                      <div className="w-8 h-0.5 bg-white/40" />
                    </div>
                    <div className={`h-12 px-3 ${app.logoBg} rounded-xl flex items-center justify-center shadow-md border border-white/10`}>
                      <img src={app.logo} alt={app.name} className="h-6 w-auto max-w-[90px] object-contain" />
                    </div>
                  </div>
                  <p className="text-white font-bold text-sm mb-1">تكامل مباشر</p>
                  <p className="text-white/60 text-xs">بياناتك تتدفق تلقائياً</p>

                  <div className="mt-6 space-y-2">
                    {app.features.slice(0, 3).map((f) => (
                      <div key={f.title} className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2">
                        <CheckCircle2 size={12} className="text-teal flex-shrink-0" />
                        <span className="text-white/80 text-xs">{f.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center">
              <CheckCircle2 size={20} className="text-teal" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-gray-900">مميزات التكامل مع {app.name}</h2>
              <p className="text-gray-400 text-sm">{app.features.length} ميزة جاهزة من أول يوم</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {app.features.map((f, i) => (
              <div
                key={i}
                className={`bg-white border ${c.border} rounded-2xl p-5 hover:shadow-md transition-shadow`}
              >
                <div className={`w-8 h-8 ${c.bg} rounded-xl flex items-center justify-center mb-3`}>
                  <CheckCircle2 size={16} className="text-white" />
                </div>
                <h3 className="font-black text-gray-900 mb-2 text-sm">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How to connect */}
        <div className={`${c.light} border ${c.border} rounded-3xl p-8 mb-12`}>
          <h2 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
            <Plug size={20} className={c.text} />
            كيف تربط {app.name} مع ڤوم؟
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {app.steps.map((s, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`w-9 h-9 ${c.bg} rounded-xl flex items-center justify-center text-white font-black text-sm flex-shrink-0`}>
                  {s.step}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed font-medium pt-1">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <a
              href={app.registerUrl}
              className={`inline-flex items-center gap-2 ${c.bg} text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-all shadow-lg`}
            >
              {app.cta}
              <ChevronLeft size={18} />
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="hero-gradient rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="absolute top-6 left-8 opacity-65" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <line x1="2" y1="2" x2="30" y2="30" stroke="#FF7300" strokeWidth="5" strokeLinecap="round"/>
              <line x1="30" y1="2" x2="2" y2="30" stroke="#FF7300" strokeWidth="5" strokeLinecap="round"/>
            </svg>
            <svg className="absolute bottom-6 right-10 opacity-55" width="38" height="38" viewBox="0 0 38 38" fill="none">
              <line x1="0" y1="11" x2="38" y2="11" stroke="#E040A0" strokeWidth="4" strokeLinecap="round" transform="rotate(-35 19 19)"/>
              <line x1="0" y1="22" x2="38" y2="22" stroke="#E040A0" strokeWidth="4" strokeLinecap="round" transform="rotate(-35 19 19)"/>
            </svg>
          </div>
          <div className="relative">
            <h2 className="text-2xl font-black text-white mb-3">
              جاهز تربط {app.name} مع ڤوم؟
            </h2>
            <p className="text-white/70 mb-6">30 يوم مجاناً، بدون بطاقة ائتمان</p>
            <a
              href={app.registerUrl}
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-black text-xl px-10 py-5 rounded-2xl shadow-2xl shadow-orange/40 transition-all hover:scale-105"
            >
              {app.cta}
              <ChevronLeft size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Other apps */}
      <div className="bg-gray-50 py-14 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h3 className="text-lg font-black text-gray-900 mb-5 text-center">تكاملات أخرى</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {apps
              .filter((a) => a.slug !== slug)
              .map((a) => {
                const ac = partnerColors[a.slug]
                return (
                  <Link
                    key={a.id}
                    to={`/apps/${a.slug}`}
                    className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 hover:border-teal/30 card-hover"
                  >
                    <div className={`w-10 h-10 ${a.logoBg} rounded-xl flex-shrink-0 border border-gray-100 flex items-center justify-center p-1.5`}>
                      <img src={a.logo} alt={a.name} className="h-full w-auto max-h-full object-contain" />
                    </div>
                    <div>
                      <p className="font-black text-gray-900 text-sm">ڤوم و {a.name}</p>
                      <p className="text-gray-400 text-xs">{a.category}</p>
                    </div>
                  </Link>
                )
              })}
          </div>
          <div className="text-center mt-5">
            <Link to="/apps" className="text-teal font-bold text-sm flex items-center gap-1 justify-center hover:underline">
              جميع التكاملات <ArrowLeft size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
