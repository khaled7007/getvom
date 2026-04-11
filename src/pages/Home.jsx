import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { sectors } from '../data/sectors'
import SectorIcon from '../components/SectorIcon'
import {
  ChevronLeft,
  CheckCircle2,
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  Users,
  Star,
  ArrowLeft,
  UtensilsCrossed,
  ShoppingBag,
  Truck,
  Scissors,
  HardHat,
} from 'lucide-react'

/* ---------- tiny hook ---------- */
function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

/* ---------- animated counter ---------- */
function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const [ref, visible] = useInView()
  useEffect(() => {
    if (!visible) return
    let start = 0
    const step = target / 60
    const id = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(id) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(id)
  }, [visible, target])
  return <span ref={ref}>{count.toLocaleString('en-US')}{suffix}</span>
}

/* ---------- Section wrapper ---------- */
function Section({ children, className = '' }) {
  const [ref, visible] = useInView()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </div>
  )
}

/* ========================================
   HERO
   ======================================== */
function Hero() {
  return (
    <section className="relative min-h-screen hero-gradient flex items-center overflow-hidden">
      {/* decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-20 w-80 h-80 bg-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/2 w-[600px] h-[300px] bg-black/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        {/* Geometric brand shapes */}
        {/* Orange X — top left */}
        <svg className="absolute top-24 left-10 opacity-70" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <line x1="2" y1="2" x2="34" y2="34" stroke="#FF7300" strokeWidth="5" strokeLinecap="round"/>
          <line x1="34" y1="2" x2="2" y2="34" stroke="#FF7300" strokeWidth="5" strokeLinecap="round"/>
        </svg>

        {/* Magenta diagonal lines — bottom left */}
        <svg className="absolute bottom-32 left-16 opacity-60" width="44" height="44" viewBox="0 0 44 44" fill="none">
          <line x1="0" y1="14" x2="44" y2="14" stroke="#E040A0" strokeWidth="4" strokeLinecap="round" transform="rotate(-35 22 22)"/>
          <line x1="0" y1="26" x2="44" y2="26" stroke="#E040A0" strokeWidth="4" strokeLinecap="round" transform="rotate(-35 22 22)"/>
          <line x1="0" y1="38" x2="44" y2="38" stroke="#E040A0" strokeWidth="4" strokeLinecap="round" transform="rotate(-35 22 22)"/>
        </svg>

        {/* Small teal chevron — top right area */}
        <svg className="absolute top-40 right-1/4 opacity-50" width="28" height="28" viewBox="0 0 28 28" fill="none">
          <polyline points="6,4 22,14 6,24" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        {/* Orange small X — bottom right */}
        <svg className="absolute bottom-40 right-12 opacity-60" width="22" height="22" viewBox="0 0 22 22" fill="none">
          <line x1="2" y1="2" x2="20" y2="20" stroke="#FF7300" strokeWidth="4" strokeLinecap="round"/>
          <line x1="20" y1="2" x2="2" y2="20" stroke="#FF7300" strokeWidth="4" strokeLinecap="round"/>
        </svg>

        {/* Purple/pink diagonal lines — top right */}
        <svg className="absolute top-20 right-20 opacity-50" width="38" height="38" viewBox="0 0 38 38" fill="none">
          <line x1="0" y1="12" x2="38" y2="12" stroke="#9B4DCA" strokeWidth="3.5" strokeLinecap="round" transform="rotate(-40 19 19)"/>
          <line x1="0" y1="22" x2="38" y2="22" stroke="#9B4DCA" strokeWidth="3.5" strokeLinecap="round" transform="rotate(-40 19 19)"/>
        </svg>

        {/* Small white dot cluster — mid left */}
        <svg className="absolute top-1/2 left-6 opacity-30" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="4" cy="4" r="3" fill="white"/>
          <circle cx="14" cy="4" r="3" fill="white"/>
          <circle cx="4" cy="14" r="3" fill="white"/>
          <circle cx="14" cy="14" r="3" fill="white"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left، copy */}
          <div>
            {/* ZATCA badge */}
            <div className="inline-flex items-center gap-4 mb-6">
              <img src="/zatca-badge.svg" alt="هيئة الزكاة والضريبة والجمارك" className="h-14 w-14 brightness-0 invert" />
              <div>
                <p className="text-white font-bold text-sm leading-snug">هيئة الزكاة والضريبة والجمارك</p>
                <p className="text-white/80 text-xs leading-snug">Zakat, Tax and Customs Authority</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="w-4 h-4 bg-teal rounded-full flex items-center justify-center text-white font-black text-[9px] flex-shrink-0">✓</span>
                  <p className="text-white/90 text-xs font-semibold">المرحلة الثانية للفوترة الإلكترونية</p>
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              تحكم في مصاريفك،{' '}
              <span className="text-orange-light">اعرف أرباحك</span>{' '}
              بوضوح
            </h1>

            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-lg">
              ڤوم يتتبع مبيعاتك ومشترياتك بدقة، ويولّد تقارير مالية تساعدك على اتخاذ قرارات بثقة، وتحقيق أرباح أعلى، والقضاء على التكاليف الخفية التي تهدد استمرارية عملك.
            </p>

            {/* Sector pills */}
            <p className="text-white/60 text-sm mb-3">مصمم لـ:</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['مطاعم', 'صالونات', 'مقاولات', 'متاجر إلكترونية', 'مؤثرين', 'لوجستيات', '+17 قطاع'].map((s) => (
                <span key={s} className="bg-white/10 border border-white/20 text-white/90 text-xs px-3 py-1 rounded-full">
                  {s}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-xl shadow-orange/40 transition-all hover:scale-105"
              >
                ابدأ تجربتك المجانية، 30 يوم
                <ChevronLeft size={20} />
              </Link>
              <Link
                to="/sectors"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-4 rounded-2xl transition-all backdrop-blur-sm"
              >
                ابحث عن قطاعك
                <ArrowLeft size={18} />
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-black text-white">+4,000</div>
                <div className="text-white/60 text-xs">مستخدم نشط</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <div className="text-2xl font-black text-white">23</div>
                <div className="text-white/60 text-xs">قطاع مدعوم</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <div className="text-2xl font-black text-white">30</div>
                <div className="text-white/60 text-xs">يوم مجاناً</div>
              </div>
            </div>
          </div>

          {/* Right، dashboard card */}
          <div className="hidden md:block relative">
            <div className="relative animate-float">
              {/* main card */}
              <div className="bg-white rounded-3xl shadow-2xl p-6 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-gray-500 text-sm">صافي الربح، أبريل 2025</p>
                    <p className="text-3xl font-black text-gray-900">30,000 <span className="text-lg font-semibold text-gray-400">ر.س</span></p>
                  </div>
                  <div className="w-12 h-12 bg-teal/10 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="text-teal" size={24} />
                  </div>
                </div>

                {/* profit bar */}
                <div className="space-y-3 mb-6">
                  {[
                    { label: 'الإيرادات', value: 100000, pct: 100, color: 'bg-teal' },
                    { label: 'إجمالي الربح', value: 60000, pct: 60, color: 'bg-teal/60' },
                    { label: 'صافي الربح', value: 30000, pct: 30, color: 'bg-orange' },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">{item.label}</span>
                        <span className="font-bold text-gray-900">{item.value.toLocaleString('en-US')} ر.س</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 bg-teal/5 border border-teal/20 rounded-xl p-3">
                  <CheckCircle2 size={16} className="text-teal flex-shrink-0" />
                  <p className="text-xs text-teal font-medium">الإقرار الضريبي جاهز للرفع على زاتكا</p>
                </div>
              </div>

              {/* floating cards */}
              <div className="absolute -top-4 -right-6 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2 z-20">
                <div className="w-8 h-8 bg-orange/10 rounded-xl flex items-center justify-center">
                  <UtensilsCrossed size={16} className="text-orange" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">مطعم السعادة</p>
                  <p className="text-sm font-bold text-gray-900">+12% هذا الشهر</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2 z-20">
                <div className="w-8 h-8 bg-teal/10 rounded-xl flex items-center justify-center">
                  <Shield size={16} className="text-teal" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">فاتورة زاتكا</p>
                  <p className="text-sm font-bold text-teal">معتمدة ✓</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 20C1200 70 960 0 720 30C480 60 240 10 0 40V80Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

/* ========================================
   STATS — Bold Dark
   ======================================== */
function StatsBar() {
  const stats = [
    { value: 4000,   suffix: '+',  label: 'صاحب عمل يثق بـ ڤوم', sub: 'مستخدم نشط',   delay: 0   },
    { value: 23,     suffix: '',   label: 'قطاع تجاري مدعوم',     sub: 'من المطعم للمقاول', delay: 100 },
    { value: 500000, suffix: '+',  label: 'فاتورة إلكترونية',     sub: 'صادرة حتى اليوم',  delay: 200 },
    { value: 4.8,    suffix: '/5', label: 'تقييم متوسط',          sub: 'من العملاء',        delay: 300 },
  ]

  const [ref, visible] = useInView(0.15)

  return (
    <section className="bg-white py-20 relative overflow-hidden border-b border-gray-100">
      <div ref={ref} className="relative max-w-5xl mx-auto px-8 sm:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${s.delay}ms` }}
            >
              {/* big number */}
              <div
                className={`font-black leading-none mb-3 ${i % 2 === 0 ? 'text-teal' : 'text-orange'}`}
                style={{ fontSize: 'clamp(2.4rem, 4vw, 3.8rem)' }}
              >
                <Counter target={s.value} suffix={s.suffix} />
              </div>

              {/* label */}
              <p className="text-gray-800 font-bold text-sm mb-1">{s.label}</p>
              <p className="text-gray-400 text-xs">{s.sub}</p>

              {/* accent line */}
              <div className={`mt-4 h-0.5 w-8 rounded-full ${i % 2 === 0 ? 'bg-teal/40' : 'bg-orange/40'}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ========================================
   SECTOR GRID
   ======================================== */
function SectorsPreview() {
  const preview = sectors.slice(0, 8)
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Section>
          <div className="text-center mb-14">
            <span className="inline-block bg-teal/10 text-teal text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              23 قطاع مدعوم
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              مصمم لعملك
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              مو برنامج محاسبة عادي. ڤوم يعرف طبيعة عملك ويتحدث بلغتك.
            </p>
          </div>
        </Section>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {preview.map((sector, i) => (
            <Section key={sector.id}>
              <Link
                to={`/sectors/${sector.slug}`}
                className="group flex flex-col items-center gap-3 p-5 bg-white rounded-2xl border border-gray-100 hover:border-teal/30 card-hover text-center"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="w-14 h-14 bg-gray-50 group-hover:bg-teal/5 rounded-2xl flex items-center justify-center transition-colors">
                  <SectorIcon slug={sector.slug} size={26} className="text-teal/70 group-hover:text-teal transition-colors" />
                </div>
                <p className="font-bold text-gray-900 text-sm group-hover:text-teal transition-colors">
                  {sector.name}
                </p>
                <ChevronLeft size={14} className="text-gray-300 group-hover:text-teal transition-colors" />
              </Link>
            </Section>
          ))}
        </div>

        <Section>
          <div className="text-center mt-10">
            <Link
              to="/sectors"
              className="inline-flex items-center gap-2 bg-teal text-white font-bold px-8 py-3.5 rounded-xl hover:bg-teal-dark transition-all shadow-lg shadow-teal/30"
            >
              عرض جميع القطاعات الـ 23
              <ArrowLeft size={18} />
            </Link>
          </div>
        </Section>
      </div>
    </section>
  )
}

/* ========================================
   FINANCIAL EXAMPLE
   ======================================== */
function FinancialShowcase() {
  const [active, setActive] = useState(0)
  const examples = [
    { name: 'مطعم', icon: <UtensilsCrossed size={16} />, revenue: 100000, opCost: 40000, gross: 60000, net: 30000 },
    { name: 'تجزئة', icon: <ShoppingBag size={16} />, revenue: 400000, opCost: 145000, gross: 255000, net: 180000 },
    { name: 'لوجستيات', icon: <Truck size={16} />, revenue: 400000, opCost: 150000, gross: 250000, net: 150000 },
    { name: 'استثمار', icon: <TrendingUp size={16} />, revenue: 500000, opCost: 200000, gross: 300000, net: 200000 },
  ]
  const ex = examples[active]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Section>
          <div className="text-center mb-14">
            <span className="inline-block bg-orange/10 text-orange text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              أمثلة مالية حقيقية بالريال السعودي
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              اعرف أرباحك <span className="text-gradient-orange">بالأرقام</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              كل قطاع عنده أرقامه الحقيقية. ڤوم يحسبها لك تلقائياً.
            </p>
          </div>
        </Section>

        <Section>
          {/* Tabs */}
          <div className="flex gap-2 mb-8 flex-wrap justify-center">
            {examples.map((e, i) => (
              <button
                key={e.name}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                  active === i
                    ? 'bg-teal text-white shadow-lg shadow-teal/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {e.icon}
                {e.name}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="max-w-2xl mx-auto bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-xl shadow-gray-100">
            <div className="bg-gray-900 px-6 py-4">
              <p className="text-white font-bold text-center flex items-center justify-center gap-2">{ex.icon} قائمة الدخل، {ex.name} شهري</p>
            </div>
            <div className="divide-y divide-gray-50">
              {[
                { label: 'الإيرادات', value: ex.revenue, cls: 'text-gray-900 font-bold' },
                { label: 'تكاليف التشغيل', value: ex.opCost, cls: 'text-red-500 font-bold', prefix: '- ' },
                { label: 'إجمالي الربح', value: ex.gross, cls: 'text-teal font-bold', bg: 'bg-teal/5' },
                { label: 'صافي الربح', value: ex.net, cls: 'text-orange font-black text-xl', bg: 'bg-orange/5' },
              ].map((row) => (
                <div key={row.label} className={`flex items-center justify-between px-6 py-4 ${row.bg || ''}`}>
                  <span className="text-gray-600 font-medium">{row.label}</span>
                  <span className={row.cls}>
                    {row.prefix || ''}{row.value.toLocaleString('en-US')} ريال
                  </span>
                </div>
              ))}
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
              <p className="text-xs text-gray-400 text-center">
                هذا مثال توضيحي، ڤوم يحسب أرقامك الفعلية تلقائياً
              </p>
            </div>
          </div>
        </Section>
      </div>
    </section>
  )
}

/* ========================================
   FEATURES
   ======================================== */
function FeaturesHighlight() {
  const features = [
    {
      icon: <BarChart3 size={28} className="text-teal" />,
      title: 'قائمة الدخل المزدوجة',
      desc: 'الإجمالي والصافي في تقرير واحد، اعرف أين تذهب أموالك بالتحديد.',
    },
    {
      icon: <Shield size={28} className="text-teal" />,
      title: 'إقرار زاتكا جاهز',
      desc: 'الإقرار الضريبي مُصمَّم ليطابق نموذج زاتكا الرسمي، يُرسَل بدون أي تعديلات.',
    },
    {
      icon: <Zap size={28} className="text-teal" />,
      title: 'ربط نقطة البيع',
      desc: 'مبيعاتك تتحول إلى قيود محاسبية تلقائياً، بدون مطور أو وسيط.',
    },
    {
      icon: <Users size={28} className="text-teal" />,
      title: 'كشف حساب العميل',
      desc: 'الفواتير، المدفوعات، الرصيد، والتاريخ، كلها في مكان واحد لكل عميل.',
    },
    {
      icon: <TrendingUp size={28} className="text-teal" />,
      title: 'تقرير ضريبة المشتريات',
      desc: 'فلتر حسب الفترة، المورد، مركز التكلفة، مولَّد في نقرة واحدة.',
    },
    {
      icon: <CheckCircle2 size={28} className="text-teal" />,
      title: 'الكروت الهدية (للصالونات)',
      desc: 'يسجلها كالتزام مالي، لا إيراد فوري، يعكس وضعك المالي الحقيقي.',
    },
  ]
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Section>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              مميزات <span className="text-gradient-teal">لا تجدها في أي مكان آخر</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              ڤوم يتحدث بلغة قطاعك.
            </p>
          </div>
        </Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Section key={f.title}>
              <div
                className="bg-white p-6 rounded-2xl border border-gray-100 card-hover h-full"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-14 h-14 bg-teal/10 rounded-2xl flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </Section>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ========================================
   TESTIMONIALS
   ======================================== */
function Testimonials() {
  const items = [
    {
      name: 'محمد العتيبي',
      role: 'صاحب مطعم، الرياض',
      icon: <UtensilsCrossed size={20} className="text-teal" />,
      text: 'قبل ڤوم كنت أعرف أرباحي في نهاية الشهر بس. الحين أعرفها في أي لحظة وبدقة كاملة.',
      stars: 5,
    },
    {
      name: 'سارة الزهراني',
      role: 'صاحبة صالون تجميل، جدة',
      icon: <Scissors size={20} className="text-teal" />,
      text: 'الكروت الهدية كانت مشكلة محاسبية كبيرة عندي. ڤوم حلها تلقائياً وعرفت وضعي المالي الحقيقي.',
      stars: 5,
    },
    {
      name: 'فهد الدوسري',
      role: 'مقاول، الدمام',
      icon: <HardHat size={20} className="text-teal" />,
      text: 'الضمان التجاري في الفاتورة كان يضيع مني دائماً. ڤوم يحسبه تلقائياً ويسجله في الحسابات.',
      stars: 5,
    },
  ]
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Section>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              يقولون عن <span className="text-gradient-teal">ڤوم</span>
            </h2>
          </div>
        </Section>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Section key={t.name}>
              <div
                className="bg-gray-50 p-6 rounded-2xl border border-gray-100 h-full"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {Array(t.stars).fill(0).map((_, j) => (
                    <Star key={j} size={16} className="text-orange fill-orange" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-sm">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center">
                    {t.icon}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </Section>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ========================================
   CTA
   ======================================== */
function CTASection() {
  return (
    <section className="py-20 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orange X — top left */}
        <svg className="absolute top-8 left-12 opacity-70" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <line x1="2" y1="2" x2="38" y2="38" stroke="#FF7300" strokeWidth="6" strokeLinecap="round"/>
          <line x1="38" y1="2" x2="2" y2="38" stroke="#FF7300" strokeWidth="6" strokeLinecap="round"/>
        </svg>

        {/* Magenta diagonal lines — bottom right */}
        <svg className="absolute bottom-10 right-16 opacity-60" width="50" height="50" viewBox="0 0 50 50" fill="none">
          <line x1="0" y1="14" x2="50" y2="14" stroke="#E040A0" strokeWidth="4.5" strokeLinecap="round" transform="rotate(-35 25 25)"/>
          <line x1="0" y1="26" x2="50" y2="26" stroke="#E040A0" strokeWidth="4.5" strokeLinecap="round" transform="rotate(-35 25 25)"/>
          <line x1="0" y1="38" x2="50" y2="38" stroke="#E040A0" strokeWidth="4.5" strokeLinecap="round" transform="rotate(-35 25 25)"/>
        </svg>

        {/* Small orange X — bottom left */}
        <svg className="absolute bottom-16 left-20 opacity-55" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <line x1="2" y1="2" x2="22" y2="22" stroke="#FF7300" strokeWidth="4" strokeLinecap="round"/>
          <line x1="22" y1="2" x2="2" y2="22" stroke="#FF7300" strokeWidth="4" strokeLinecap="round"/>
        </svg>

        {/* Purple lines — top right */}
        <svg className="absolute top-10 right-24 opacity-50" width="44" height="44" viewBox="0 0 44 44" fill="none">
          <line x1="0" y1="12" x2="44" y2="12" stroke="#9B4DCA" strokeWidth="4" strokeLinecap="round" transform="rotate(-40 22 22)"/>
          <line x1="0" y1="24" x2="44" y2="24" stroke="#9B4DCA" strokeWidth="4" strokeLinecap="round" transform="rotate(-40 22 22)"/>
        </svg>

        {/* White chevron — mid right */}
        <svg className="absolute top-1/2 right-10 -translate-y-1/2 opacity-30" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <polyline points="8,4 24,15 8,26" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        {/* Dot cluster — mid left */}
        <svg className="absolute top-1/2 left-8 -translate-y-1/2 opacity-25" width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="5" cy="5" r="3.5" fill="white"/>
          <circle cx="17" cy="5" r="3.5" fill="white"/>
          <circle cx="5" cy="17" r="3.5" fill="white"/>
          <circle cx="17" cy="17" r="3.5" fill="white"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <Section>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
            جاهز تعرف أرباحك{' '}
            <span className="text-orange-light">الحقيقية؟</span>
          </h2>
          <p className="text-white/80 text-xl mb-10">
            30 يوم تجربة مجانية، بدون بطاقة ائتمان، بدون التزام
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white font-black text-xl px-10 py-5 rounded-2xl shadow-2xl shadow-orange/40 transition-all hover:scale-105"
            >
              ابدأ مجاناً الآن
              <ChevronLeft size={24} />
            </Link>
          </div>
          <p className="text-white/50 text-sm mt-6">
            +4,000 صاحب عمل في السعودية يثقون بـ ڤوم
          </p>
        </Section>
      </div>
    </section>
  )
}

/* ========================================
   PAGE
   ======================================== */
export default function Home() {
  useEffect(() => {
    document.title = 'ڤوم — برنامج محاسبة ذكي لأصحاب الأعمال في السعودية'
  }, [])
  return (
    <>
      <Hero />
      <StatsBar />
      <SectorsPreview />
      <FinancialShowcase />
      <FeaturesHighlight />
      <Testimonials />
      <CTASection />
    </>
  )
}
