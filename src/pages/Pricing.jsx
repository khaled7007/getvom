import { useState, useEffect, useRef } from 'react'
import { CheckCircle2, ChevronLeft, X, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

/* ─── Plans ─────────────────────────────────────────────── */
const plans = [
  {
    id: 'starter',
    name: 'باقة للتقدمة',
    monthlyPrice: 270,
    annualPrice: 216,
    desc: 'للأعمال الصغيرة والناشئة',
    header: 'bg-blue-600',
    ring: 'ring-blue-200',
    badge: null,
    cta: 'ابدأ مجاناً',
    ctaHref: 'https://app.getvom.com/register',
    ctaClass: 'bg-white/15 hover:bg-white/25 text-white border border-white/30',
  },
  {
    id: 'unlimited',
    name: 'الباقة اللامحدودة',
    monthlyPrice: 350,
    annualPrice: 280,
    desc: 'الأنسب للأعمال المتنامية',
    header: 'bg-amber-400',
    ring: 'ring-amber-200',
    badge: 'الأكثر مبيعاً',
    cta: 'ابدأ مجاناً',
    ctaHref: 'https://app.getvom.com/register',
    ctaClass: 'bg-white/15 hover:bg-white/25 text-white border border-white/30',
  },
  {
    id: 'business',
    name: 'باقة الأعمال',
    monthlyPrice: null,
    annualPrice: null,
    desc: 'للمؤسسات والشركات الكبيرة',
    header: 'bg-teal',
    ring: 'ring-teal/30',
    badge: null,
    cta: 'تواصل مع فريق المبيعات',
    ctaHref: '/contact',
    ctaClass: 'bg-white/15 hover:bg-white/25 text-white border border-white/30',
    ctaIsLink: true,
  },
]

/* ─── Comparison Sections ────────────────────────────────── */
/* Values: true=✓  false=✗  'غير محدود'=∞  'محدود'=limited  other string=number */
const sections = [
  {
    title: 'إدارة المبيعات',
    rows: [
      { label: 'تسجيل الفاتورة الضريبية',         v: ['محدود', 'غير محدود', 'غير محدود'] },
      { label: 'إصدار عروض الأسعار',              v: ['محدود', '50', 'غير محدود'] },
      { label: 'إصدار أوامر الشراء',              v: ['محدود', '50', 'غير محدود'] },
      { label: 'إصدار إشعارات الدائن والمدين',    v: ['محدود', '50', 'غير محدود'] },
      { label: 'تتبع طلبيات العملاء والموردين',   v: ['محدود', '50', 'غير محدود'] },
      { label: 'بطاقة العميل واليومية الشاملة',   v: ['محدود', '50', 'غير محدود'] },
    ],
  },
  {
    title: 'إدارة الاشتراكات',
    rows: [
      { label: 'تسجيل اشتراكات العملاء',           v: ['محدود', '4', 'غير محدود'] },
      { label: 'ربط العملاء بالباقة',              v: [true, true, true] },
      { label: 'تجديد الاشتراك تلقائياً',          v: [true, true, true] },
      { label: 'إنشاء الفواتير للاشتراكات',        v: [true, true, true] },
      { label: 'تتبع انتهاء الاشتراكات',           v: [true, true, true] },
    ],
  },
  {
    title: 'المحاسبة',
    rows: [
      { label: 'شجرة الحسابات',                   v: [true, true, true] },
      { label: 'القيود اليومية',                    v: [true, true, true] },
      { label: 'قيود محاسبية تلقائية',              v: [true, true, true] },
      { label: 'قائمة الدخل',                      v: [true, true, true] },
      { label: 'الميزانية العمومية',                v: [true, true, true] },
    ],
  },
  {
    title: 'إدارة الأصول',
    rows: [
      { label: 'شراء الأصول وتسجيلها',             v: [true, true, true] },
      { label: 'بيع الأصول',                        v: [true, true, true] },
      { label: 'إهلاك الأصول تلقائياً',             v: [true, true, true] },
      { label: 'بطاقة الأصل الكاملة',               v: [true, true, true] },
    ],
  },
  {
    title: 'المنتجات / الخدمات',
    rows: [
      { label: 'إضافة تصنيف المنتجات',              v: [true, true, true] },
      { label: 'إضافة الخدمات وتسعيرها',            v: [true, true, true] },
      { label: 'إدارة المخزون',                     v: [true, true, true] },
      { label: 'إدارة المستودعات',                  v: [false, true, true] },
      { label: 'إدارة الوحدات',                     v: [true, true, true] },
    ],
  },
  {
    title: 'تصميم المستندات',
    rows: [
      { label: 'قوالب مخصصة للوثائق',              v: ['1', '10', 'غير محدود'] },
      { label: 'تخصيص ألوان وشعار المنشأة',         v: [true, true, true] },
      { label: 'إرسال الوثائق بالبريد الإلكتروني',  v: [true, true, true] },
    ],
  },
  {
    title: 'الصلاحيات والمستخدمون',
    rows: [
      { label: 'عدد المستخدمين',                    v: ['1', '5', 'غير محدود'] },
      { label: 'إدارة الصلاحيات المخصصة',           v: [true, true, true] },
      { label: 'سجل الأنشطة',                       v: [true, true, true] },
    ],
  },
  {
    title: 'الموارد البشرية',
    rows: [
      { label: 'تسجيل بيانات الموظفين',             v: [true, true, true] },
      { label: 'إدارة الرواتب والبدلات',             v: [true, true, true] },
      { label: 'إدارة الإجازات والغياب',             v: [true, true, true] },
    ],
  },
  {
    title: 'التقارير',
    rows: [
      { label: 'التقرير المالي',                     v: [true, true, true] },
      { label: 'كشف الحساب',                        v: [true, true, true] },
      { label: 'قائمة الدخل',                       v: [true, true, true] },
      { label: 'الميزانية العمومية',                 v: [true, true, true] },
      { label: 'الإفصاحات المالية IFRS',             v: [true, true, true] },
      { label: 'ميزان المراجعة',                    v: [true, true, true] },
      { label: 'التدفقات النقدية',                   v: [true, true, true] },
      { label: 'تقارير ضريبة القيمة المضافة',        v: [true, true, true] },
      { label: 'تقارير المخزون',                    v: [true, true, true] },
      { label: 'تقارير الأصول الثابتة',              v: [true, true, true] },
      { label: 'الأستاذ العام',                     v: [true, true, true] },
    ],
  },
  {
    title: 'التطبيقات',
    rows: [
      { label: 'Foodics',   v: [false, true, true] },
      { label: 'Zid',       v: [false, true, true] },
      { label: 'Prexie',    v: [false, true, true] },
      { label: 'Marn',      v: [false, true, true] },
    ],
  },
  {
    title: 'الربط بواسطة API',
    rows: [
      { label: 'واجهة برمجية RESTful',               v: [false, false, true] },
      { label: 'Webhook events',                     v: [false, false, true] },
      { label: 'بيئة Sandbox للاختبار',              v: [false, false, true] },
      { label: 'دعم فني مخصص للمطورين',              v: [false, false, true] },
    ],
  },
]

/* ─── Cell renderer ─────────────────────────────────────── */
function Cell({ v }) {
  if (v === true)  return <CheckCircle2 size={18} className="text-teal mx-auto" />
  if (v === false) return <X size={15} className="text-gray-300 mx-auto" />
  if (v === 'غير محدود') return <span className="text-teal font-bold text-xs">غير محدود</span>
  if (v === 'محدود')     return <span className="text-gray-400 text-xs">محدود</span>
  return <span className="font-black text-gray-700 text-sm">{v}</span>
}

/* ─── Plan Header Card ───────────────────────────────────── */
function PlanHeader({ plan, annual, compact }) {
  const price = annual ? plan.annualPrice : plan.monthlyPrice
  return (
    <div className={`${plan.header} rounded-2xl p-4 text-white relative overflow-hidden h-full flex flex-col`}>
      {plan.badge && (
        <span className="absolute top-2 left-2 bg-white text-amber-600 text-[10px] font-black px-2 py-0.5 rounded-full">
          {plan.badge}
        </span>
      )}
      <p className={`font-black leading-tight mb-1 ${compact ? 'text-sm' : 'text-base'}`}>{plan.name}</p>
      {price ? (
        <div className={`font-black leading-none ${compact ? 'text-xl' : 'text-2xl'}`}>
          {price}
          <span className="text-[11px] font-normal opacity-80 mr-0.5">ر.س/شهر</span>
        </div>
      ) : (
        <p className="text-[11px] opacity-80 leading-tight">تواصل معنا</p>
      )}
      {!compact && (
        <>
          <p className="text-[11px] opacity-70 mt-1 mb-3 leading-tight">{plan.desc}</p>
          {plan.ctaIsLink ? (
            <Link
              to={plan.ctaHref}
              className={`mt-auto text-center text-[11px] font-bold py-2 rounded-xl transition-all ${plan.ctaClass}`}
            >
              {plan.cta}
            </Link>
          ) : (
            <a
              href={plan.ctaHref}
              className={`mt-auto text-center text-[11px] font-bold py-2 rounded-xl transition-all ${plan.ctaClass}`}
            >
              {plan.cta}
            </a>
          )}
        </>
      )}
    </div>
  )
}

/* ─── Comparison Table ───────────────────────────────────── */
function ComparisonTable({ annual }) {
  const stickyRef = useRef(null)
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    const el = stickyRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([e]) => setStuck(e.intersectionRatio < 1),
      { threshold: [1], rootMargin: '-57px 0px 0px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="max-w-5xl mx-auto px-2 sm:px-4 pb-16">

      {/* Sticky plan header row */}
      <div
        ref={stickyRef}
        className={`sticky top-14 z-20 transition-shadow ${stuck ? 'shadow-lg' : ''}`}
      >
        <div className="grid grid-cols-4 gap-2 bg-white pt-3 pb-2 px-2 rounded-b-2xl">
          <div /> {/* label column spacer */}
          {plans.map((p) => (
            <PlanHeader key={p.id} plan={p} annual={annual} compact={stuck} />
          ))}
        </div>
      </div>

      {/* Sections */}
      {sections.map((sec) => (
        <div key={sec.title} className="mt-2">
          {/* Section header */}
          <div className="grid grid-cols-4 gap-2 bg-gray-100 rounded-xl px-3 py-2.5 mb-0.5">
            <p className="col-span-1 font-black text-gray-700 text-sm">{sec.title}</p>
            {plans.map((p) => (
              <div key={p.id} className={`h-1.5 rounded-full ${p.header} opacity-40 self-center`} />
            ))}
          </div>

          {/* Feature rows */}
          {sec.rows.map((row, ri) => (
            <div
              key={ri}
              className={`grid grid-cols-4 gap-2 px-3 py-2.5 items-center rounded-lg ${
                ri % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'
              }`}
            >
              <p className="text-gray-600 text-xs leading-snug">{row.label}</p>
              {row.v.map((val, pi) => (
                <div key={pi} className="text-center">
                  <Cell v={val} />
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}

      {/* Footer note */}
      <p className="text-center text-gray-400 text-xs mt-8">
        جميع الباقات تشمل: نسخ احتياطية يومية + دعم عربي + فواتير زاتكا المعتمدة + تجربة مجانية 30 يوماً
      </p>
    </div>
  )
}

/* ─── Simple Cards View ──────────────────────────────────── */
const simpleCards = [
  {
    name: 'باقة للتقدمة',
    monthlyPrice: 270,
    annualPrice: 216,
    desc: 'للأعمال الصغيرة والناشئة',
    headerClass: 'bg-blue-600',
    badge: null,
    features: [
      'فاتورة ضريبية محدودة',
      'تقارير مالية أساسية',
      'فواتير زاتكا المرحلتين',
      'مستخدم واحد',
      'قالب وثيقة واحد',
      'دعم بالبريد الإلكتروني',
      'نسخ احتياطية يومية',
    ],
    missing: ['إدارة المستودعات', 'التطبيقات والتكاملات', 'API'],
  },
  {
    name: 'الباقة اللامحدودة',
    monthlyPrice: 350,
    annualPrice: 280,
    desc: 'للأعمال المتنامية التي تحتاج قوة أكبر',
    headerClass: 'bg-amber-400',
    badge: 'الأكثر مبيعاً',
    features: [
      'فواتير وعروض أسعار غير محدودة',
      'قائمة الدخل المزدوجة',
      'فواتير زاتكا المرحلتين',
      'إدارة المستودعات',
      '10 قوالب وثائق مخصصة',
      'حتى 5 مستخدمين',
      'جميع التكاملات (Foodics, Zid…)',
      'دعم عبر الواتساب',
    ],
    missing: ['API'],
  },
  {
    name: 'باقة الأعمال',
    monthlyPrice: null,
    annualPrice: null,
    desc: 'للشركات الكبيرة والمؤسسات',
    headerClass: 'bg-teal',
    badge: 'للمؤسسات',
    features: [
      'كل مميزات اللامحدودة',
      'مستخدمون غير محدودون',
      'قوالب وثائق غير محدودة',
      'API كامل + Webhooks',
      'بيئة Sandbox للمطورين',
      'تقارير مخصصة',
      'مدير حساب مخصص',
      'دعم 24/7 + تدريب',
    ],
    missing: [],
  },
]

function SimpleCards({ annual }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="grid md:grid-cols-3 gap-6">
        {simpleCards.map((plan) => (
          <div
            key={plan.name}
            className={`relative bg-white rounded-3xl overflow-hidden shadow-lg ${
              plan.badge === 'الأكثر مبيعاً' ? 'ring-2 ring-amber-400 shadow-amber-100 scale-[1.02]' : ''
            }`}
          >
            {/* Colored header */}
            <div className={`${plan.headerClass} p-6 text-white relative`}>
              {plan.badge && (
                <span className="absolute top-3 left-3 bg-white/20 text-white text-xs font-black px-3 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}
              <h3 className="font-black text-xl mb-1">{plan.name}</h3>
              <p className="text-white/70 text-sm mb-4">{plan.desc}</p>
              {plan.monthlyPrice ? (
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-black">{annual ? plan.annualPrice : plan.monthlyPrice}</span>
                  <span className="text-white/70 text-sm pb-1">ر.س / شهر</span>
                </div>
              ) : (
                <p className="text-2xl font-black">تواصل معنا</p>
              )}
              {annual && plan.monthlyPrice && (
                <p className="text-white/80 text-xs mt-1">
                  توفر {(plan.monthlyPrice - plan.annualPrice) * 12} ر.س سنوياً
                </p>
              )}
            </div>

            {/* Features */}
            <div className="p-6">
              {plan.monthlyPrice ? (
                <Link
                  to="/register"
                  className={`block w-full text-center font-bold py-3 rounded-xl mb-6 transition-all ${plan.headerClass} text-white hover:opacity-90 shadow-lg`}
                >
                  ابدأ مجاناً 30 يوم
                </Link>
              ) : (
                <Link
                  to="/contact"
                  className={`block w-full text-center font-bold py-3 rounded-xl mb-6 transition-all ${plan.headerClass} text-white hover:opacity-90 shadow-lg`}
                >
                  تواصل مع فريق المبيعات
                </Link>
              )}
              <div className="space-y-2.5">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <CheckCircle2 size={15} className="text-teal flex-shrink-0" />
                    <span className="text-sm text-gray-700">{f}</span>
                  </div>
                ))}
                {plan.missing.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 opacity-35">
                    <X size={15} className="text-gray-400 flex-shrink-0" />
                    <span className="text-sm text-gray-400">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-gray-400 text-sm mt-10">
        جميع الباقات تشمل: نسخ احتياطية يومية + دعم عربي + فواتير زاتكا المعتمدة
      </p>
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────────── */
export default function Pricing() {
  useEffect(() => { document.title = 'الأسعار — ڤوم | ابدأ مجاناً 30 يوماً' }, [])
  const [annual, setAnnual]   = useState(false)
  const [activeTab, setActiveTab] = useState('compare')

  return (
    <div className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="hero-gradient pt-28 pb-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">
            باقات <span className="text-orange-light">ڤوم</span>
          </h1>
          <p className="text-white/80 text-lg mb-8">
            بإمكانك الاشتراك شهرياً أو سنوياً — ابدأ مجاناً 30 يوماً بدون بطاقة ائتمان
          </p>

          {/* Annual / Monthly toggle */}
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl p-1.5">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-xl font-bold text-sm transition-all ${
                !annual ? 'bg-white text-teal shadow' : 'text-white/70 hover:text-white'
              }`}
            >
              شهري
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                annual ? 'bg-white text-teal shadow' : 'text-white/70 hover:text-white'
              }`}
            >
              سنوي
              <span className="bg-orange text-white text-xs px-2 py-0.5 rounded-full">وفّر 20%</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Tab bar ──────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-100 sticky top-14 z-30">
        <div className="max-w-5xl mx-auto px-4 flex justify-center py-2.5">
          <div className="inline-flex bg-gray-100 rounded-xl p-1 gap-1">
            {[
              { id: 'compare',  label: 'مقارنة الباقات' },
              { id: 'features', label: 'مميزات خاصة' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-lg font-bold text-sm transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Content ──────────────────────────────────────── */}
      {activeTab === 'compare'
        ? <ComparisonTable annual={annual} />
        : <SimpleCards annual={annual} />
      }

      {/* ── CTA ──────────────────────────────────────────── */}
      <div className="hero-gradient py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">ما زلت متردداً؟</h2>
          <p className="text-white/70 mb-8 text-lg">
            جرّب ڤوم 30 يوماً مجاناً بدون أي التزام، بياناتك آمنة وبإمكانك الإلغاء في أي وقت
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white font-black text-lg px-10 py-4 rounded-2xl shadow-2xl shadow-orange/40 transition-all hover:scale-105"
            >
              ابدأ تجربتك المجانية الآن
              <ChevronLeft size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-2xl transition-all"
            >
              <Phone size={18} />
              تحدث مع فريق المبيعات
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
