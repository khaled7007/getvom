import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  Users,
  Activity,
  Package,
  BarChart3,
  CreditCard,
  Receipt,
  TrendingUp,
  Sparkles,
} from 'lucide-react'

/* ---------- features ---------- */
const features = [
  {
    icon: <Receipt size={24} className="text-teal" />,
    title: 'تسجيل العمليات المحاسبية',
    desc: 'القدرة على تسجيل فواتير المبيعات والمشتريات بصيغة سليمة وبعدد لا محدود',
  },
  {
    icon: <FileText size={24} className="text-teal" />,
    title: 'إصدار الفواتير وعروض الأسعار',
    desc: 'القدرة على تصميمها وتخصيصها وإرسالها لعملائك عبر الإيميل الإلكتروني بعدد لا محدود',
  },
  {
    icon: <Users size={24} className="text-teal" />,
    title: 'إضافة مستخدمين للمنصة',
    desc: 'إمكانية إضافة عشرة مستخدمين للحساب مع صلاحيات مخصصة لكل مستخدم',
  },
  {
    icon: <CreditCard size={24} className="text-teal" />,
    title: 'تتبع وطباعة سندات القبض والصرف',
    desc: 'سهولة تتبع المعاملات المالية وطباعتها وإرسالها لعملائك بعدد لا محدود',
  },
  {
    icon: <Activity size={24} className="text-teal" />,
    title: 'متابعة سجل الأنشطة',
    desc: 'القدرة على تتبع جميع العمليات المالية لكل عميل ومنتج وخدمة',
  },
  {
    icon: <Package size={24} className="text-teal" />,
    title: 'إدارة المخزون',
    desc: 'القدرة على إضافة المنتجات وتحديد الكميات وتحديد مراكز التكلفة وتصنيفها',
  },
  {
    icon: <BarChart3 size={24} className="text-teal" />,
    title: 'إصدار تقارير مالية',
    desc: 'تقرير الميزانية، كشوفات الفواتير، تقرير الأرباح والخسائر وغيرها جميعها بشكل تلقائي دون اللجوء للمحاسب السنوي',
  },
]

/* ---------- partners ---------- */
const partners = [
  { name: 'وادي طيبة', nameEn: 'Taibah Valley', color: 'from-blue-400 to-teal-400' },
  { name: 'المكان', nameEn: 'The Space', color: 'from-purple-400 to-indigo-400' },
  { name: 'JOVIA', nameEn: 'JOVIA', color: 'from-pink-400 to-orange-400' },
]

/* ---------- partner carousel ---------- */
function PartnersCarousel() {
  const [active, setActive] = useState(0)
  const prev = () => setActive((p) => (p - 1 + partners.length) % partners.length)
  const next = () => setActive((p) => (p + 1) % partners.length)

  const visible = [
    partners[(active + partners.length - 1) % partners.length],
    partners[active],
    partners[(active + 1) % partners.length],
  ]

  return (
    <div className="flex items-center justify-center gap-6">
      <button onClick={prev} className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:border-teal/40 hover:text-teal transition-all shadow-sm">
        <ChevronRight size={18} />
      </button>

      <div className="flex items-center gap-4">
        {visible.map((p, i) => (
          <div
            key={p.nameEn + i}
            className={`flex flex-col items-center justify-center rounded-full border-2 transition-all duration-300 ${
              i === 1
                ? 'w-44 h-44 border-teal/30 shadow-xl scale-100'
                : 'w-32 h-32 border-gray-200 opacity-60 scale-90'
            } bg-white`}
          >
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-2`}>
              <TrendingUp size={22} className="text-white" />
            </div>
            <p className="font-black text-gray-800 text-sm text-center leading-tight">{p.name}</p>
            <p className="text-gray-400 text-xs mt-0.5">{p.nameEn}</p>
          </div>
        ))}
      </div>

      <button onClick={next} className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:border-teal/40 hover:text-teal transition-all shadow-sm">
        <ChevronLeft size={18} />
      </button>
    </div>
  )
}

/* ========================================
   PAGE
   ======================================== */
export default function Growth() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section className="hero-gradient pt-28 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <svg className="absolute top-10 left-12 opacity-60" width="38" height="38" viewBox="0 0 38 38" fill="none">
            <line x1="2" y1="2" x2="36" y2="36" stroke="#FF7300" strokeWidth="5" strokeLinecap="round"/>
            <line x1="36" y1="2" x2="2" y2="36" stroke="#FF7300" strokeWidth="5" strokeLinecap="round"/>
          </svg>
          <svg className="absolute bottom-12 right-20 opacity-50" width="44" height="44" viewBox="0 0 44 44" fill="none">
            <line x1="0" y1="13" x2="44" y2="13" stroke="#E040A0" strokeWidth="4.5" strokeLinecap="round" transform="rotate(-35 22 22)"/>
            <line x1="0" y1="25" x2="44" y2="25" stroke="#E040A0" strokeWidth="4.5" strokeLinecap="round" transform="rotate(-35 22 22)"/>
          </svg>
          <svg className="absolute top-20 right-16 opacity-40" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <line x1="0" y1="9" x2="30" y2="9" stroke="#9B4DCA" strokeWidth="3.5" strokeLinecap="round" transform="rotate(-40 15 15)"/>
            <line x1="0" y1="19" x2="30" y2="19" stroke="#9B4DCA" strokeWidth="3.5" strokeLinecap="round" transform="rotate(-40 15 15)"/>
          </svg>
          <svg className="absolute bottom-20 left-1/3 opacity-30" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <line x1="2" y1="2" x2="20" y2="20" stroke="#FF7300" strokeWidth="4" strokeLinecap="round"/>
            <line x1="20" y1="2" x2="2" y2="20" stroke="#FF7300" strokeWidth="4" strokeLinecap="round"/>
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-5">
                <Sparkles size={14} className="text-orange-light" />
                برنامج نمو
              </div>

              <h1 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
                نمو أكبر،{' '}
                <span className="text-orange-light">نمو أسرع</span>
                {' '}.. للنجاح
              </h1>

              <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-lg">
                كسب الشركات الناشئة التي تستخدم برنامج ڤوم المحاسبي دقة مالية عالية تعزز من النجاح المالي وتدعمهم للتركيز على بقية المشروع من خلال الشروع في مواجهة التحديات في المستقبل.
              </p>

              {/* Discount badge */}
              <div className="inline-flex items-center gap-3 bg-orange/20 border border-orange/40 rounded-2xl px-5 py-3 mb-8">
                <div className="w-10 h-10 bg-orange rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-black text-sm">90%</span>
                </div>
                <div>
                  <p className="text-white font-black text-lg leading-none">خصم 90%</p>
                  <p className="text-white/70 text-sm">لمدة 6 أشهر كاملة</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://app.getvom.com/register"
                  className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white font-black text-lg px-8 py-4 rounded-2xl shadow-xl shadow-orange/40 transition-all hover:scale-105"
                >
                  سجل الآن
                  <ChevronLeft size={20} />
                </a>
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-4 rounded-2xl transition-all"
                >
                  عرض الباقات
                </Link>
              </div>
            </div>

            {/* Right visual */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative">
                <div className="w-72 h-72 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-orange/20 rounded-3xl flex items-center justify-center mb-5">
                    <TrendingUp size={36} className="text-orange-light" />
                  </div>
                  <p className="text-white font-black text-4xl mb-1">90%</p>
                  <p className="text-white/80 font-bold text-lg">خصم حصري</p>
                  <p className="text-white/60 text-sm mt-1">لمدة 6 أشهر</p>

                  <div className="w-full mt-6 pt-4 border-t border-white/20 grid grid-cols-2 gap-3">
                    <div className="text-center">
                      <p className="text-white font-black text-xl">+500</p>
                      <p className="text-white/60 text-xs">شركة ناشئة</p>
                    </div>
                    <div className="text-center">
                      <p className="text-white font-black text-xl">23</p>
                      <p className="text-white/60 text-xs">قطاع مدعوم</p>
                    </div>
                  </div>
                </div>

                {/* floating badge */}
                <div className="absolute -top-4 -left-6 bg-white rounded-2xl shadow-xl px-4 py-2.5">
                  <p className="text-xs text-gray-500">وفّر كل شهر</p>
                  <p className="font-black text-teal text-lg">حتى 4,500 ر.س</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 15C1200 52 960 0 720 22C480 45 240 8 0 30V60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-teal/10 text-teal text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              ما يشمله البرنامج
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              مميزات برنامج المحاسبة السحابي{' '}
              <span className="text-teal">ڤوم</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              كل ما تحتاجه لإدارة محاسبتك بشكل احترافي من اليوم الأول
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div
                key={i}
                className="group flex gap-4 bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-lg hover:border-teal/20 transition-all"
              >
                <div className="w-12 h-12 bg-teal/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-black text-gray-900 mb-1.5 text-sm">{f.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Eligibility ── */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-10">
            من يستحق الانضمام لبرنامج النمو؟
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: '🚀', title: 'شركات ناشئة', desc: 'مسجلة بأقل من 3 سنوات وتسعى للنمو' },
              { icon: '💡', title: 'مشاريع ريادية', desc: 'لديها فكرة واعدة وتحتاج بنية تحتية مالية' },
              { icon: '🤝', title: 'شركاء حاضنات', desc: 'منضمون لحاضنة أعمال أو مسرّع معتمد' },
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:border-teal/20 transition-all">
                <div className="text-4xl mb-3">{c.icon}</div>
                <h3 className="font-black text-gray-900 mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-3">شركاؤنا</h2>
            <p className="text-gray-500">مؤسسات ريادية تدعم نمو الشركات الناشئة بالشراكة مع ڤوم</p>
          </div>
          <PartnersCarousel />
        </div>
      </section>

      {/* ── Partner CTA ── */}
      <section className="hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <svg className="absolute top-8 left-14 opacity-65" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <line x1="2" y1="2" x2="34" y2="34" stroke="#FF7300" strokeWidth="5" strokeLinecap="round"/>
            <line x1="34" y1="2" x2="2" y2="34" stroke="#FF7300" strokeWidth="5" strokeLinecap="round"/>
          </svg>
          <svg className="absolute bottom-10 right-16 opacity-55" width="44" height="44" viewBox="0 0 44 44" fill="none">
            <line x1="0" y1="13" x2="44" y2="13" stroke="#E040A0" strokeWidth="4.5" strokeLinecap="round" transform="rotate(-35 22 22)"/>
            <line x1="0" y1="25" x2="44" y2="25" stroke="#E040A0" strokeWidth="4.5" strokeLinecap="round" transform="rotate(-35 22 22)"/>
          </svg>
          <svg className="absolute top-10 right-24 opacity-40" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <line x1="0" y1="9" x2="30" y2="9" stroke="#9B4DCA" strokeWidth="3.5" strokeLinecap="round" transform="rotate(-40 15 15)"/>
            <line x1="0" y1="19" x2="30" y2="19" stroke="#9B4DCA" strokeWidth="3.5" strokeLinecap="round" transform="rotate(-40 15 15)"/>
          </svg>
        </div>

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            نحن وشركاؤنا نفخر بمساعدة
            <br />
            <span className="text-orange-light">الشركات الناشئة على النمو بشكل أفضل!</span>
          </h2>
          <p className="text-white/75 text-lg mb-8">
            تريد أن تصبح شريكاً؟
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.getvom.com/register"
              className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white font-black text-xl px-10 py-5 rounded-2xl shadow-2xl shadow-orange/40 transition-all hover:scale-105"
            >
              قدّم طلبك هنا
              <ChevronLeft size={24} />
            </a>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-5 rounded-2xl transition-all"
            >
              تعرف علينا أكثر
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
