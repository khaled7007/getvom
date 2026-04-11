import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Receipt, ShoppingCart, Package, BarChart3, Users,
  FileImage, Shield, Layers, Headphones, Zap,
  Check, ChevronLeft, ArrowLeft,
} from 'lucide-react'

/* ─── Section meta ─────────────────────────────────────────── */
const sections = [
  {
    id: 'sales',
    label: 'المبيعات والفوترة',
    fullLabel: 'إدارة المبيعات والفوترة الإلكترونية',
    Icon: Receipt,
    accent: '#19BAA3',
    accentLight: '#f0fbf9',
    accentMid: '#d4f3ee',
    points: [
      'إنشاء فواتير مبيعات معتمدة من زاتكا (المرحلة الأولى والثانية)',
      'ربط المبيعات تلقائياً بدليل الحسابات دون أي إدخال يدوي',
      'إدارة عروض الأسعار وتحويلها إلى فواتير بنقرة واحدة',
      'تتبع المستحقات والمدفوعات لكل عميل مع تذكيرات تلقائية',
      'دعم عملاء متعددين وفئات سعرية مختلفة في نفس الوقت',
    ],
  },
  {
    id: 'purchases',
    label: 'المشتريات',
    fullLabel: 'إدارة المشتريات والمصروفات',
    Icon: ShoppingCart,
    accent: '#FF7300',
    accentLight: '#fff8f0',
    accentMid: '#ffe8cc',
    points: [
      'تسجيل الموردين وإدارتهم من واجهة واحدة بشكل سهل وسريع',
      'تسجيل المشتريات والمصروفات مع ربطها بحسابات الموردين تلقائياً',
      'إضافة الكميات للمخزون مباشرة عند تسجيل فاتورة الشراء',
      'تتبع حالة السداد للموردين مع تنبيهات عند استحقاق الدفع',
    ],
  },
  {
    id: 'products',
    label: 'المنتجات',
    fullLabel: 'تسجيل المنتجات والكميات',
    Icon: Package,
    accent: '#8B5CF6',
    accentLight: '#faf5ff',
    accentMid: '#ede9fe',
    points: [
      'تسجيل المنتجات والخدمات بعدد غير محدود مع تصنيفات مرنة',
      'تحديد الأسعار الأساسية لكل منتج مع إمكانية أسعار خاصة للعملاء',
      'تتبع الكميات والمخزون مع تنبيهات عند نفاد المخزون',
      'إضافة الوحدات والتحويل بينها (كرتون، قطعة، كيلو...)',
    ],
  },
  {
    id: 'accounting',
    label: 'المحاسبة',
    fullLabel: 'المحاسبة والأصول',
    Icon: BarChart3,
    accent: '#2563EB',
    accentLight: '#eff6ff',
    accentMid: '#dbeafe',
    points: [
      'دليل حسابات كامل وقابل للتخصيص بلا حدود مع ترحيل تلقائي للقيود',
      'استيراد الأرصدة المحاسبية السابقة للسنوات الماضية',
      'تقارير مالية كاملة: قائمة الدخل، الميزانية، التدفقات النقدية',
      'مراكز تكلفة غير محدودة لكل مشروع أو فرع',
      'إدارة الأصول الثابتة وحساب الاستهلاك تلقائياً',
    ],
  },
  {
    id: 'hr',
    label: 'الموارد البشرية',
    fullLabel: 'إدارة الموارد البشرية',
    Icon: Users,
    accent: '#16A34A',
    accentLight: '#f0fdf4',
    accentMid: '#dcfce7',
    points: [
      'تسجيل الموظفين بعدد غير محدود مع بياناتهم الكاملة',
      'إصدار مسيرات رواتب شهرية بتاريخ الدفع تلقائياً',
      'احتساب البدلات والخصومات والمكافآت بشكل آلي',
      'تسجيل الإجازات وتتبع رصيد كل موظف',
    ],
  },
  {
    id: 'templates',
    label: 'قوالب الفواتير',
    fullLabel: 'قوالب الفواتير',
    Icon: FileImage,
    accent: '#D97706',
    accentLight: '#fffbeb',
    accentMid: '#fde68a',
    points: [
      '+50 قالب فاتورة مختلف يناسب جميع القطاعات',
      'إضافة شعار شركتك ومعلوماتها البنكية على كل فاتورة',
      'تخصيص الألوان والخطوط لتوافق هوية علامتك التجارية',
      'إضافة الشروط والأحكام وبيانات المدفوعات لكل قالب',
      'طباعة ومشاركة الفواتير مباشرة من التطبيق',
    ],
  },
  {
    id: 'permissions',
    label: 'الصلاحيات',
    fullLabel: 'الصلاحيات والمستخدمين',
    Icon: Shield,
    accent: '#475569',
    accentLight: '#f8fafc',
    accentMid: '#e2e8f0',
    points: [
      'إضافة عدد غير محدود من المستخدمين مع تحديد صلاحيات كل منهم',
      'توزيع الصلاحيات بمرونة تامة: قراءة، تعديل، حذف، اعتماد',
      'تقييد الوصول لبعض الحسابات والتقارير المالية الحساسة',
      'سجل نشاط كامل يوضح كل عملية قام بها كل مستخدم',
    ],
  },
  {
    id: 'apps',
    label: 'التطبيقات',
    fullLabel: 'التطبيقات المتكاملة',
    Icon: Layers,
    accent: '#0891B2',
    accentLight: '#ecfeff',
    accentMid: '#cffafe',
    points: [
      'ربط هذه التطبيقات مع ڤوم لنقل المبيعات والمشتريات بسهولة تامة',
    ],
    apps: [
      { name: 'مرن', logo: '/logos/marn.png', to: '/apps/marn' },
      { name: 'فودكس', logo: '/logos/foodics.jpg', to: '/apps/foodics' },
      { name: 'زد', logo: '/logos/zid.png', to: '/apps/zid' },
      { name: 'بريكسل', logo: '/logos/prexie.png', to: '/apps/prexie' },
    ],
  },
  {
    id: 'support',
    label: 'خدمة العملاء',
    fullLabel: 'خدمة العملاء',
    Icon: Headphones,
    accent: '#DB2777',
    accentLight: '#fdf2f8',
    accentMid: '#fce7f3',
    points: [
      'خدمة أعمال متكاملة على مدار الساعة',
      'مستندات ومقاطع مرئية لشرح جميع ميزات النظام',
      'تدريب مجاني عند البدء لضمان الاستخدام الصحيح',
      'تحديثات مستمرة ومجانية دون أي تكاليف إضافية',
    ],
  },
  {
    id: 'general',
    label: 'مميزات عامة',
    fullLabel: 'مميزات عامة',
    Icon: Zap,
    accent: '#19BAA3',
    accentLight: '#f0fbf9',
    accentMid: '#d4f3ee',
    points: [],
    cards: [
      { Icon: Zap,         title: 'تطبيق الجوال',   desc: 'تحكم بأعمالك من أي مكان عبر تطبيق iOS و Android' },
      { Icon: Layers,      title: 'سحابي بالكامل',   desc: 'لا تثبيت، لا صيانة، وصول فوري من أي جهاز' },
      { Icon: BarChart3,   title: 'تقارير مفصّلة',   desc: 'تقارير مالية شاملة بالتفصيل لاتخاذ قرارات أفضل' },
      { Icon: Shield,      title: 'أمان عالي',        desc: 'تشفير البيانات ونسخ احتياطية يومية تلقائية' },
      { Icon: Users,       title: 'دعم اللغتين',      desc: 'واجهة عربية وإنجليزية كاملة مع دعم RTL' },
      { Icon: Receipt,     title: 'تخصيص كامل',       desc: 'خصّص النظام ليناسب طبيعة عملك تماماً' },
    ],
  },
]

/* ─── Fake UI mockup ────────────────────────────────────────── */
function SectionMockup({ accent, accentLight, accentMid }) {
  return (
    <div
      className="rounded-2xl border p-5 mb-10 overflow-hidden"
      style={{ background: accentLight, borderColor: accentMid }}
    >
      {/* Browser chrome */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gray-100">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-gray-100 rounded-md h-5 mx-2" />
        </div>
        {/* Content area */}
        <div className="flex" style={{ minHeight: '140px' }}>
          {/* Left sidebar */}
          <div className="w-36 border-l border-gray-100 p-3 flex flex-col gap-2">
            {[80, 60, 70, 55, 65].map((w, i) => (
              <div
                key={i}
                className="h-3 rounded"
                style={{
                  width: `${w}%`,
                  background: i === 0 ? accent : '#f1f5f9',
                  opacity: i === 0 ? 0.9 : 1,
                }}
              />
            ))}
          </div>
          {/* Main panel */}
          <div className="flex-1 p-4 flex flex-col gap-3">
            {/* Toolbar */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <div className="h-6 w-16 rounded-lg" style={{ background: accent, opacity: 0.85 }} />
                <div className="h-6 w-12 rounded-lg bg-gray-100" />
              </div>
              <div className="h-5 w-28 rounded bg-gray-100" />
            </div>
            {/* Table rows */}
            <div className="flex flex-col gap-2 mt-1">
              <div className="grid grid-cols-4 gap-2">
                {['30%', '45%', '25%', '20%'].map((w, i) => (
                  <div key={i} className="h-2.5 rounded" style={{ width: w, background: accentMid }} />
                ))}
              </div>
              {[0, 1, 2].map((row) => (
                <div key={row} className="grid grid-cols-4 gap-2 py-1 border-b border-gray-50">
                  {[70, 85, 50, 40].map((w, i) => (
                    <div key={i} className="h-2.5 rounded bg-gray-100" style={{ width: `${w}%` }} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Main component ────────────────────────────────────────── */
export default function Features() {
  const [activeId, setActiveId] = useState(sections[0].id)

  useEffect(() => { document.title = 'مميزات ڤوم — محاسبة ذكية لكل قطاع' }, [])

  useEffect(() => {
    const onScroll = () => {
      let best = sections[0].id
      let bestDist = Infinity
      sections.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (!el) return
        const dist = Math.abs(el.getBoundingClientRect().top - 130)
        if (dist < bestDist) { bestDist = dist; best = id }
      })
      setActiveId(best)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const activeSec = sections.find((s) => s.id === activeId) || sections[0]

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="hero-gradient pt-28 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '36px 36px' }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-white/20">
            ميزات تقدمها ڤوم
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            كل ما تحتاجه لإدارة{' '}
            <span className="text-orange-light">أعمالك بذكاء</span>
          </h1>
          <p className="text-white/80 text-lg">
            منصة محاسبية متكاملة مصممة خصيصاً لأصحاب الأعمال في السعودية
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex gap-12 items-start">

          {/* ── Main content ── */}
          <div className="flex-1 min-w-0">
            {sections.map((sec, idx) => {
              const hasMockup = !sec.apps && !sec.cards
              return (
                <section
                  key={sec.id}
                  id={sec.id}
                  style={{ scrollMarginTop: '6rem' }}
                  className="mb-4"
                >
                  {/* Section card */}
                  <div
                    className="rounded-3xl border overflow-hidden transition-all duration-300"
                    style={{
                      borderColor: sec.accentMid,
                      background: idx % 2 === 0 ? '#ffffff' : sec.accentLight,
                    }}
                  >
                    {/* Section header band */}
                    <div
                      className="flex items-center gap-4 px-8 py-6 border-b"
                      style={{ borderColor: sec.accentMid, background: sec.accentLight }}
                    >
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm"
                        style={{ background: sec.accent }}
                      >
                        <sec.Icon size={22} color="white" strokeWidth={2} />
                      </div>
                      <div>
                        <h2 className="text-xl font-black text-gray-900 leading-tight">
                          {sec.fullLabel}
                        </h2>
                        <div className="flex items-center gap-1.5 mt-1">
                          <div className="w-16 h-0.5 rounded-full" style={{ background: sec.accent }} />
                        </div>
                      </div>
                    </div>

                    {/* Section body */}
                    <div className="px-8 py-8">

                      {/* Mockup */}
                      {hasMockup && (
                        <SectionMockup
                          accent={sec.accent}
                          accentLight={sec.accentLight}
                          accentMid={sec.accentMid}
                        />
                      )}

                      {/* Apps grid */}
                      {sec.apps && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                          {sec.apps.map((app) => (
                            <Link
                              key={app.name}
                              to={app.to}
                              className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-center hover:shadow-md transition-all h-24 group"
                            >
                              <img
                                src={app.logo}
                                alt={app.name}
                                className="max-h-10 max-w-full object-contain group-hover:scale-105 transition-transform"
                              />
                            </Link>
                          ))}
                        </div>
                      )}

                      {/* General feature cards */}
                      {sec.cards && (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                          {sec.cards.map((card) => (
                            <div
                              key={card.title}
                              className="bg-white rounded-2xl p-5 border hover:shadow-md transition-all"
                              style={{ borderColor: sec.accentMid }}
                            >
                              <div
                                className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                                style={{ background: sec.accentLight, border: `1px solid ${sec.accentMid}` }}
                              >
                                <card.Icon size={18} style={{ color: sec.accent }} strokeWidth={2} />
                              </div>
                              <h4 className="font-black text-gray-900 text-sm mb-1">{card.title}</h4>
                              <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Points */}
                      {sec.points.length > 0 && (
                        <ul className="space-y-3">
                          {sec.points.map((text, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span
                                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                style={{ background: sec.accentMid }}
                              >
                                <Check size={11} style={{ color: sec.accent }} strokeWidth={3} />
                              </span>
                              <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
                            </li>
                          ))}
                        </ul>
                      )}

                    </div>
                  </div>

                  {/* Section separator arrow */}
                  {idx < sections.length - 1 && (
                    <div className="flex justify-center py-4">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center rotate-90">
                        <ArrowLeft size={14} className="text-gray-400" />
                      </div>
                    </div>
                  )}
                </section>
              )
            })}
          </div>

          {/* ── Sticky sidebar ── */}
          <aside className="hidden lg:block w-56 flex-shrink-0 sticky top-24 self-start">
            <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-4 text-right">
              الأقسام
            </p>
            <nav className="space-y-0.5">
              {sections.map((s) => {
                const isActive = activeId === s.id
                return (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className="w-full text-right flex items-center justify-end gap-2.5 px-3 py-2 rounded-xl text-sm transition-all"
                    style={{
                      color: isActive ? s.accent : '#9ca3af',
                      background: isActive ? s.accentLight : 'transparent',
                      fontWeight: isActive ? 700 : 400,
                    }}
                  >
                    {s.label}
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0 transition-all"
                      style={{
                        background: isActive ? s.accent : '#d1d5db',
                        transform: isActive ? 'scale(1.3)' : 'scale(1)',
                      }}
                    />
                  </button>
                )
              })}
            </nav>

            {/* Active section CTA */}
            <div
              className="mt-6 rounded-2xl p-4 border"
              style={{ background: activeSec.accentLight, borderColor: activeSec.accentMid }}
            >
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center mb-2"
                style={{ background: activeSec.accent }}
              >
                <activeSec.Icon size={16} color="white" strokeWidth={2} />
              </div>
              <p className="text-xs font-bold text-gray-700 leading-snug mb-3">
                {activeSec.fullLabel}
              </p>
              <a
                href="https://app.getvom.com/register"
                className="flex items-center justify-center gap-1 text-white text-xs font-bold py-2 rounded-xl w-full transition-all hover:opacity-90"
                style={{ background: activeSec.accent }}
              >
                جرّب الآن
                <ChevronLeft size={12} />
              </a>
            </div>
          </aside>

        </div>
      </div>

      {/* CTA */}
      <div className="hero-gradient py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">جاهز تجرب كل هذه المميزات؟</h2>
          <p className="text-white/70 mb-8 text-lg">٣٠ يوم مجاناً، بدون بطاقة ائتمان</p>
          <a
            href="https://app.getvom.com/register"
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-black text-xl px-10 py-5 rounded-2xl shadow-2xl transition-all hover:scale-105"
          >
            ابدأ تجربتك المجانية
            <ChevronLeft size={24} />
          </a>
        </div>
      </div>

    </div>
  )
}
