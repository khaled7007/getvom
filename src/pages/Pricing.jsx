import { useState } from 'react'
import { CheckCircle2, ChevronLeft, X } from 'lucide-react'

const plans = [
  {
    name: 'الأساسي',
    monthlyPrice: 99,
    annualPrice: 79,
    desc: 'مثالي للأعمال الصغيرة والناشئة',
    color: 'border-gray-200',
    badge: null,
    features: [
      'حتى 100 فاتورة شهرياً',
      'تقارير مالية أساسية',
      'فواتير زاتكا المرحلة الأولى',
      'مستخدم واحد',
      'دعم بالبريد الإلكتروني',
      'نسخ احتياطية يومية',
    ],
    missing: ['قائمة الدخل المزدوجة', 'ربط نقطة البيع', 'تقرير ضريبة المشتريات'],
  },
  {
    name: 'المحترف',
    monthlyPrice: 199,
    annualPrice: 159,
    desc: 'للأعمال المتنامية التي تحتاج قوة أكبر',
    color: 'border-teal',
    badge: 'الأكثر شيوعاً',
    badgeColor: 'bg-teal text-white',
    features: [
      'فواتير غير محدودة',
      'قائمة الدخل المزدوجة',
      'فواتير زاتكا المرحلتين',
      'ربط نقطة البيع',
      'تقرير ضريبة المشتريات',
      'كشف حساب العميل المتكامل',
      'حتى 5 مستخدمين',
      'دعم عبر الواتساب',
      'تقارير متقدمة',
    ],
    missing: ['إدارة فروع متعددة'],
  },
  {
    name: 'المؤسسي',
    monthlyPrice: 399,
    annualPrice: 319,
    desc: 'للشركات الكبيرة والمؤسسات',
    color: 'border-orange',
    badge: 'للشركات',
    badgeColor: 'bg-orange text-white',
    features: [
      'كل مميزات المحترف',
      'فروع ومواقع متعددة',
      'مستخدمون غير محدودون',
      'تكامل API مخصص',
      'تقارير مخصصة',
      'مدير حساب مخصص',
      'دعم 24/7',
      'تدريب على النظام',
      'نقل البيانات مجاناً',
    ],
    missing: [],
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="hero-gradient pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            أسعار <span className="text-orange-light">شفافة وبسيطة</span>
          </h1>
          <p className="text-white/80 text-xl mb-8">
            ابدأ مجاناً 30 يوماً، لا بطاقة ائتمان، لا التزامات
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 bg-white/10 border border-white/20 rounded-2xl p-1.5">
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

      {/* Plans */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-3xl border-2 p-8 flex flex-col ${plan.color} ${
                plan.badge === 'الأكثر شيوعاً' ? 'shadow-2xl shadow-teal/20 scale-105' : 'shadow-md'
              }`}
            >
              {plan.badge && (
                <div className={`absolute -top-4 right-1/2 translate-x-1/2 ${plan.badgeColor} text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap`}>
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-black text-gray-900 text-xl mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.desc}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-black text-gray-900">
                    {annual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-400 text-sm pb-2">ر.س / شهر</span>
                </div>
                {annual && (
                  <p className="text-teal text-sm font-semibold mt-1">
                    توفر {(plan.monthlyPrice - plan.annualPrice) * 12} ر.س سنوياً
                  </p>
                )}
              </div>

              <a
                href="https://app.getvom.com/register"
                className={`w-full text-center font-bold py-3.5 rounded-xl mb-8 transition-all ${
                  plan.badge === 'الأكثر شيوعاً'
                    ? 'bg-teal text-white hover:bg-teal-dark shadow-lg shadow-teal/30'
                    : plan.badge === 'للشركات'
                    ? 'bg-orange text-white hover:bg-orange-dark shadow-lg shadow-orange/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                ابدأ مجاناً 30 يوم
              </a>

              <div className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-teal flex-shrink-0" />
                    <span className="text-sm text-gray-700">{f}</span>
                  </div>
                ))}
                {plan.missing.map((f) => (
                  <div key={f} className="flex items-center gap-3 opacity-40">
                    <X size={16} className="text-gray-400 flex-shrink-0" />
                    <span className="text-sm text-gray-400">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ note */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            جميع الخطط تشمل: نسخ احتياطية يومية + دعم عربي + فواتير زاتكا المعتمدة
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="hero-gradient py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">ما زلت متردداً؟</h2>
          <p className="text-white/70 mb-8 text-lg">
            جرّب ڤوم 30 يوماً مجاناً بدون أي التزام، بياناتك آمنة وبإمكانك الإلغاء في أي وقت
          </p>
          <a
            href="https://app.getvom.com/register"
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-black text-xl px-10 py-5 rounded-2xl shadow-2xl shadow-orange/40 transition-all hover:scale-105"
          >
            ابدأ تجربتك المجانية الآن
            <ChevronLeft size={24} />
          </a>
        </div>
      </div>
    </div>
  )
}
