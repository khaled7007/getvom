import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, ChevronLeft, FileText, Shield, Zap, Clock, Building2, AlertCircle } from 'lucide-react'

const phases = [
  {
    num: '١',
    title: 'المرحلة الأولى — الإصدار',
    date: 'ديسمبر ٢٠٢١',
    status: 'مكتمل',
    statusColor: 'bg-green-100 text-green-700',
    desc: 'إلزام المنشآت بإصدار فواتير إلكترونية بصيغة XML أو PDF/A-3 مع QR Code.',
    features: ['فاتورة ضريبية إلكترونية', 'إشعار دائن / مدين', 'QR Code على الفاتورة'],
  },
  {
    num: '٢',
    title: 'المرحلة الثانية — الربط والتكامل',
    date: 'من ٢٠٢٣ تدريجياً',
    status: 'جارٍ التطبيق',
    statusColor: 'bg-orange/10 text-orange',
    desc: 'ربط أنظمة الفوترة مع منصة زاتكا (فاتورة) بشكل مباشر وآني.',
    features: ['ربط مباشر مع منصة فاتورة', 'تقارير مالية آنية', 'UUID لكل فاتورة', 'توقيع رقمي معتمد'],
  },
]

const benefits = [
  { icon: <Zap size={20} className="text-teal" />, title: 'إصدار فوري', desc: 'أصدر فواتير إلكترونية متوافقة في ثوانٍ' },
  { icon: <Shield size={20} className="text-teal" />, title: 'امتثال كامل', desc: 'معتمد من هيئة الزكاة والضريبة والجمارك' },
  { icon: <Clock size={20} className="text-teal" />, title: 'توفير الوقت', desc: 'لا حاجة لإدخال البيانات يدوياً' },
  { icon: <FileText size={20} className="text-teal" />, title: 'أرشفة تلقائية', desc: 'جميع فواتيرك محفوظة ومرتبة تلقائياً' },
  { icon: <Building2 size={20} className="text-teal" />, title: 'للجميع', desc: 'مناسب لجميع القطاعات والأحجام' },
  { icon: <CheckCircle2 size={20} className="text-teal" />, title: 'تقارير ضريبية', desc: 'إقرار ضريبي جاهز بنقرة واحدة' },
]

const subsidy = [
  'أن تكون المنشأة خاضعة لأنظمة الفوترة الإلكترونية',
  'إيرادات سنوية لا تتجاوز ٣ مليون ريال',
  'مسجّلة في ضريبة القيمة المضافة ومقيمة في السعودية',
  'لم تستفد من الدعم مسبقاً',
]

export default function EInvoicing() {
  useEffect(() => { document.title = 'الفوترة الإلكترونية زاتكا — ڤوم | امتثال كامل للمرحلتين' }, [])
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="hero-gradient pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-white/10 border border-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-6">
            معتمد من زاتكا
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            الفوترة الإلكترونية
            <br />
            <span className="text-orange-light">بكل بساطة</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            ڤوم يتولى عنك الامتثال الكامل لمتطلبات زاتكا — من إصدار الفواتير الإلكترونية حتى الربط المباشر مع منصة فاتورة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.getvom.com/register"
              className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white font-black px-8 py-4 rounded-2xl shadow-xl shadow-orange/40 transition-all hover:scale-105"
            >
              ابدأ مجاناً <ChevronLeft size={20} />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl transition-all"
            >
              تحدث مع خبير
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 text-center mb-10">لماذا ڤوم للفوترة الإلكترونية؟</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center mb-4">
                  {b.icon}
                </div>
                <h3 className="font-black text-gray-900 mb-1">{b.title}</h3>
                <p className="text-gray-500 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Phases */}
        <div className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 text-center mb-10">مراحل الفوترة الإلكترونية</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {phases.map((p, i) => (
              <div key={i} className={`rounded-3xl p-7 border ${i === 0 ? 'bg-green-50 border-green-100' : 'bg-orange/5 border-orange/10'}`}>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-10 h-10 ${i === 0 ? 'bg-green-500' : 'bg-orange'} rounded-xl flex items-center justify-center text-white font-black`}>
                    {p.num}
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${p.statusColor}`}>{p.status}</span>
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-1">{p.title}</h3>
                <p className="text-gray-400 text-xs mb-3">{p.date}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{p.desc}</p>
                <ul className="space-y-2">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={14} className={i === 0 ? 'text-green-500' : 'text-orange'} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ZATCA subsidy */}
        <div className="bg-teal/5 border border-teal/15 rounded-3xl p-8 mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-teal rounded-2xl flex items-center justify-center flex-shrink-0">
              <img src="/zatca-badge.svg" alt="زاتكا" className="h-7 w-7 brightness-0 invert" />
            </div>
            <div>
              <h2 className="text-xl font-black text-gray-900 mb-1">دعم الهيئة للفوترة الإلكترونية</h2>
              <p className="text-gray-500 text-sm">احصل على <span className="font-black text-teal">٢٥٠٠ ريال</span> دعم من هيئة الزكاة والضريبة والجمارك</p>
            </div>
          </div>
          <h3 className="font-bold text-gray-700 text-sm mb-3 flex items-center gap-2">
            <AlertCircle size={16} className="text-teal" /> شروط الاستحقاق
          </h3>
          <ul className="space-y-2 mb-6">
            {subsidy.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle2 size={14} className="text-teal mt-0.5 flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-teal text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-all text-sm">
            استفسر عن الدعم <ChevronLeft size={16} />
          </Link>
        </div>

        {/* CTA */}
        <div className="hero-gradient rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          <div className="relative">
            <h2 className="text-2xl font-black text-white mb-3">جاهز تطبّق الفوترة الإلكترونية؟</h2>
            <p className="text-white/70 mb-6">٣٠ يوم مجاناً، الإعداد في أقل من ساعة</p>
            <a
              href="https://app.getvom.com/register"
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-black px-10 py-4 rounded-2xl shadow-xl shadow-orange/40 transition-all hover:scale-105"
            >
              ابدأ مجاناً الآن <ChevronLeft size={20} />
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
