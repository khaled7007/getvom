import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

const sections = [
  { id: 'sales',       label: 'إدارة المبيعات والفوترة الإلكترونية' },
  { id: 'purchases',   label: 'إدارة المشتريات والمصروفات' },
  { id: 'products',    label: 'تسجيل المنتجات / الكميات' },
  { id: 'accounting',  label: 'المحاسبة والأصول' },
  { id: 'hr',          label: 'إدارة الموارد البشرية' },
  { id: 'templates',   label: 'قوالب الفواتير' },
  { id: 'permissions', label: 'الصلاحيات والمستخدمين' },
  { id: 'apps',        label: 'التطبيقات' },
  { id: 'support',     label: 'خدمة العملاء' },
  { id: 'general',     label: 'مميزات عامة' },
]

const mockupBgs = {
  sales:       'linear-gradient(135deg, #d4f3ee 0%, #f0fbf9 100%)',
  purchases:   'linear-gradient(135deg, #ffe8cc 0%, #fff8f0 100%)',
  products:    'linear-gradient(135deg, #ede9fe 0%, #f5f3ff 100%)',
  accounting:  'linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)',
  hr:          'linear-gradient(135deg, #dcfce7 0%, #f0fdf4 100%)',
  templates:   'linear-gradient(135deg, #fef9c3 0%, #fefce8 100%)',
  permissions: 'linear-gradient(135deg, #f1f5f9 0%, #f8fafc 100%)',
}

const sectionData = [
  {
    id: 'sales',
    icon: '🧾',
    title: 'إدارة المبيعات والفوترة الإلكترونية',
    points: [
      { icon: '🟢', text: 'إنشاء فواتير مبيعات معتمدة من زاتكا (المرحلة الأولى والثانية) بكل سهولة' },
      { icon: '🟢', text: 'ربط المبيعات تلقائياً بدليل الحسابات دون أي إدخال يدوي' },
      { icon: '🟢', text: 'إدارة عروض الأسعار وتحويلها إلى فواتير بنقرة واحدة' },
      { icon: '🟢', text: 'تتبع المستحقات والمدفوعات لكل عميل مع تذكيرات تلقائية' },
      { icon: '🟢', text: 'دعم عملاء متعددين وفئات سعرية مختلفة في نفس الوقت' },
    ],
  },
  {
    id: 'purchases',
    icon: '🛒',
    title: 'إدارة المشتريات والمصروفات',
    points: [
      { icon: '🟠', text: 'تسجيل الموردين وإدارتهم من واجهة واحدة بشكل سهل وسريع' },
      { icon: '🟠', text: 'يمكنك تسجيل المشتريات والمصروفات مع ربطها بحسابات الموردين تلقائياً' },
      { icon: '🟠', text: 'إضافة الكميات للمخزون مباشرة عند تسجيل فاتورة الشراء' },
      { icon: '🟠', text: 'تتبع حالة السداد للموردين مع تنبيهات عند استحقاق الدفع' },
    ],
  },
  {
    id: 'products',
    icon: '📦',
    title: 'تسجيل المنتجات / الكميات',
    points: [
      { icon: '🟣', text: 'تسجيل المنتجات والخدمات بعدد غير محدود مع تصنيفات مرنة' },
      { icon: '🟣', text: 'تحديد الأسعار الأساسية لكل منتج مع إمكانية إضافة أسعار خاصة للعملاء' },
      { icon: '🟣', text: 'تتبع الكميات والمخزون مع تنبيهات عند نفاد المخزون' },
      { icon: '🟣', text: 'إضافة الوحدات والتحويل بينها (كرتون، قطعة، كيلو...)' },
    ],
  },
  {
    id: 'accounting',
    icon: '📈',
    title: 'المحاسبة والأصول',
    points: [
      { icon: '🔵', text: 'دليل حسابات كامل وقابل للتخصيص بدون حدود مع ترحيل تلقائي للقيود' },
      { icon: '🔵', text: 'يمكن استيراد الأرصدة المحاسبية السابقة للسنوات الماضية' },
      { icon: '🔵', text: 'تقارير مالية كاملة: قائمة الدخل، الميزانية العمومية، التدفقات النقدية' },
      { icon: '🔵', text: 'مراكز تكلفة غير محدودة لتتبع الأداء المالي لكل مشروع أو فرع' },
      { icon: '🔵', text: 'إدارة الأصول الثابتة وحساب الاستهلاك تلقائياً' },
    ],
  },
  {
    id: 'hr',
    icon: '👥',
    title: 'إدارة الموارد البشرية',
    points: [
      { icon: '🟢', text: 'تسجيل الموظفين بعدد غير محدود مع بياناتهم الكاملة' },
      { icon: '🟢', text: 'إصدار مسيرات رواتب شهرية بتاريخ الدفع تلقائياً' },
      { icon: '🟢', text: 'احتساب البدلات والخصومات والمكافآت بشكل آلي' },
      { icon: '🟢', text: 'تسجيل الإجازات وتتبع رصيد كل موظف' },
    ],
  },
  {
    id: 'templates',
    icon: '🖨️',
    title: 'قوالب الفواتير',
    points: [
      { icon: '🟡', text: '+50 قالب فاتورة مختلف يناسب جميع القطاعات' },
      { icon: '🟡', text: 'إضافة شعار شركتك ومعلوماتها البنكية على كل فاتورة' },
      { icon: '🟡', text: 'تخصيص ألوان وخطوط القوالب لتتوافق مع هوية علامتك التجارية' },
      { icon: '🟡', text: 'إضافة الشروط والأحكام وبيانات المدفوعات لكل قالب' },
      { icon: '🟡', text: 'طباعة ومشاركة الفواتير مباشرة من التطبيق' },
    ],
  },
  {
    id: 'permissions',
    icon: '🔐',
    title: 'الصلاحيات والمستخدمين',
    points: [
      { icon: '⚫', text: 'إضافة عدد غير محدود من المستخدمين مع تحديد صلاحيات كل منهم' },
      { icon: '⚫', text: 'توزيع الصلاحيات بمرونة تامة: قراءة، تعديل، حذف، اعتماد' },
      { icon: '⚫', text: 'تقييد الوصول لبعض الحسابات والتقارير المالية الحساسة' },
      { icon: '⚫', text: 'سجل نشاط كامل يوضح كل عملية قام بها كل مستخدم' },
    ],
  },
  {
    id: 'apps',
    icon: '🔗',
    title: 'التطبيقات',
    points: [
      { icon: '🔗', text: 'يمكن ربط هذه التطبيقات مع ڤوم لتتمكن من نقل البيعات والمشتريات بكل سهولة' },
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
    icon: '🎧',
    title: 'خدمة العملاء',
    points: [
      { icon: '🟢', text: 'خدمة أعمال متكاملة على مدار الساعة' },
      { icon: '📘', text: 'مستندات ومقاطع مرئية لشرح جميع ميزات النظام' },
      { icon: '🎓', text: 'تدريب مجاني عند البدء لضمان الاستخدام الصحيح' },
      { icon: '🔄', text: 'تحديثات مستمرة ومجانية دون أي تكاليف إضافية' },
    ],
  },
  {
    id: 'general',
    icon: '⚡',
    title: 'مميزات عامة',
    points: [],
    cards: [
      { icon: '📱', title: 'تطبيق الجوال', desc: 'تحكم بأعمالك من أي مكان عبر تطبيق iOS و Android' },
      { icon: '☁️', title: 'سحابي بالكامل', desc: 'لا تثبيت، لا صيانة، وصول فوري من أي جهاز' },
      { icon: '📊', title: 'تقارير مفصّلة', desc: 'تقارير مالية شاملة بالتفصيل لاتخاذ قرارات أفضل' },
      { icon: '🔒', title: 'أمان عالي', desc: 'تشفير البيانات ونسخ احتياطية يومية تلقائية' },
      { icon: '🌐', title: 'دعم اللغتين', desc: 'واجهة عربية وإنجليزية كاملة مع دعم RTL' },
      { icon: '⚙️', title: 'تخصيص كامل', desc: 'خصّص النظام ليناسب طبيعة عملك تماماً' },
    ],
  },
]

function SectionMockup({ sectionId }) {
  const bg = mockupBgs[sectionId]
  if (!bg) return null
  return (
    <div
      className="rounded-2xl border border-gray-100 p-6 mb-8 h-52 flex flex-col gap-3 overflow-hidden"
      style={{ background: bg }}
    >
      <div className="flex items-center gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
        <div className="flex-1 bg-white rounded-md h-4 mr-2 opacity-60" />
      </div>
      <div className="flex-1 flex flex-col gap-2 overflow-hidden">
        <div className="flex gap-2">
          <div className="w-20 h-3 rounded" style={{ background: 'rgba(25,186,163,0.35)' }} />
          <div className="w-32 h-3 bg-white rounded opacity-70" />
          <div className="w-16 h-3 bg-white rounded opacity-50" />
          <div className="w-12 h-3 rounded" style={{ background: 'rgba(255,115,0,0.3)' }} />
        </div>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex gap-2 items-center">
            <div className="w-3 h-3 rounded border border-gray-300 flex-shrink-0 bg-white opacity-70" />
            <div className="w-24 h-2.5 bg-white rounded opacity-60" />
            <div className="w-28 h-2.5 bg-white rounded opacity-40" />
            <div className="w-14 h-2.5 bg-white rounded opacity-30" />
            <div className="w-10 h-2.5 rounded mr-auto" style={{ background: 'rgba(25,186,163,0.25)' }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Features() {
  const [activeId, setActiveId] = useState('sales')

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map(({ id }) => {
        const el = document.getElementById(id)
        if (!el) return { id, top: Infinity }
        return { id, top: Math.abs(el.getBoundingClientRect().top - 120) }
      })
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b))
      setActiveId(closest.id)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="hero-gradient pt-28 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '36px 36px' }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            ميزات تقدمها ڤوم
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            كل ما تحتاجه لإدارة <span className="text-orange-light">أعمالك بذكاء</span>
          </h1>
          <p className="text-white/80 text-lg">
            منصة محاسبية متكاملة مصممة خصيصاً لأصحاب الأعمال في السعودية
          </p>
        </div>
      </div>

      {/* Content + Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex gap-10 items-start">

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {sectionData.map((sec) => (
              <section key={sec.id} id={sec.id} className="mb-20" style={{ scrollMarginTop: '6rem' }}>

                {/* Section header */}
                <div className="flex items-center gap-3 mb-6 justify-center">
                  <span className="text-3xl bg-orange-50 w-12 h-12 rounded-xl flex items-center justify-center border border-orange-100">
                    {sec.icon}
                  </span>
                  <h2 className="text-2xl font-black text-gray-900">{sec.title}</h2>
                </div>

                {/* Mockup */}
                <SectionMockup sectionId={sec.id} />

                {/* Apps logos */}
                {sec.apps && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    {sec.apps.map((app) => (
                      <Link
                        key={app.name}
                        to={app.to}
                        className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-center hover:shadow-md hover:border-teal/20 transition-all h-24"
                      >
                        <img src={app.logo} alt={app.name} className="max-h-10 max-w-full object-contain" />
                      </Link>
                    ))}
                  </div>
                )}

                {/* General feature cards */}
                {sec.cards && (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {sec.cards.map((card) => (
                      <div key={card.title} className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:border-teal/20 transition-all">
                        <span className="text-3xl mb-3 block">{card.icon}</span>
                        <h4 className="font-black text-gray-900 text-sm mb-1">{card.title}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bullet points */}
                {sec.points.length > 0 && (
                  <ul className="space-y-3">
                    {sec.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-lg flex-shrink-0 mt-0.5">{p.icon}</span>
                        <p className="text-gray-700 text-sm leading-relaxed">{p.text}</p>
                      </li>
                    ))}
                  </ul>
                )}

              </section>
            ))}
          </div>

          {/* Sticky sidebar */}
          <aside className="hidden lg:block w-60 flex-shrink-0 sticky top-24 self-start">
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 text-right">
              ميزات تقدمها ڤوم
            </p>
            <nav className="space-y-0.5">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`w-full text-right flex items-center justify-end gap-2.5 px-3 py-2 rounded-xl text-sm transition-all ${
                    activeId === s.id
                      ? 'text-gray-900 font-bold'
                      : 'text-gray-400 hover:text-gray-700'
                  }`}
                >
                  {s.label}
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0 border-2 transition-all"
                    style={{
                      backgroundColor: activeId === s.id ? '#19BAA3' : 'transparent',
                      borderColor: activeId === s.id ? '#19BAA3' : '#d1d5db',
                    }}
                  />
                </button>
              ))}
            </nav>
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
