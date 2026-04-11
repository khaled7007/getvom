import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, ChevronLeft, GraduationCap, BookOpen, Users, Award, X } from 'lucide-react'

const features = [
  { title: 'وصول كامل لجميع المميزات', included: true },
  { title: 'فواتير إلكترونية متوافقة مع زاتكا', included: true },
  { title: 'قوائم دخل وميزانية عمومية', included: true },
  { title: 'تقارير ضريبية', included: true },
  { title: 'دعم فني متخصص', included: true },
  { title: 'محاضرات ومواد تعليمية', included: true },
  { title: 'شهادة إتمام معتمدة', included: true },
  { title: 'ربط API', included: false },
  { title: 'مستخدمون متعددون', included: false },
]

const steps = [
  { num: '١', title: 'سجّل بإيميل جامعتك', desc: 'استخدم بريدك الجامعي الرسمي للتحقق من صفتك الطلابية.' },
  { num: '٢', title: 'ارفع وثيقة القبول', desc: 'صورة من بطاقتك الجامعية أو وثيقة القيد الحالي.' },
  { num: '٣', title: 'استمتع بالباقة مجاناً', included: true, desc: 'يتم التفعيل خلال ٢٤ ساعة وتبقى الباقة فعّالة طوال سنتك الدراسية.' },
]

const universities = [
  'جامعة الملك سعود', 'جامعة الملك عبدالعزيز', 'جامعة الملك فهد للبترول',
  'جامعة الإمام محمد بن سعود', 'جامعة الملك خالد', 'جامعة طيبة',
  'جامعة القصيم', 'وجميع الجامعات السعودية المعتمدة',
]

export default function StudentPackage() {
  useEffect(() => { document.title = 'باقة الطلاب — ڤوم مجاناً لطلاب الجامعات' }, [])
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="hero-gradient pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <GraduationCap size={32} className="text-white" />
          </div>
          <span className="inline-block bg-orange/20 border border-orange/30 text-orange-light text-sm font-black px-4 py-1.5 rounded-full mb-4">
            مجاناً للطلاب
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            باقة الطلاب
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            طالب محاسبة أو إدارة أعمال؟ ڤوم يمنحك وصولاً كاملاً للمنصة مجاناً طوال دراستك — تعلّم على أداة احترافية حقيقية.
          </p>
          <a
            href="https://app.getvom.com/register?plan=student"
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-black px-8 py-4 rounded-2xl shadow-xl shadow-orange/40 transition-all hover:scale-105"
          >
            سجّل كطالب الآن <ChevronLeft size={20} />
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">

        {/* What's included */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16 items-start">
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-6">ماذا تشمل الباقة؟</h2>
            <ul className="space-y-3">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3">
                  {f.included
                    ? <CheckCircle2 size={18} className="text-teal flex-shrink-0" />
                    : <X size={18} className="text-gray-300 flex-shrink-0" />
                  }
                  <span className={`text-sm ${f.included ? 'text-gray-800 font-medium' : 'text-gray-400 line-through'}`}>
                    {f.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-teal/5 border border-teal/15 rounded-3xl p-8 text-center">
            <div className="text-6xl font-black text-teal mb-2">مجاناً</div>
            <p className="text-gray-500 text-sm mb-1">طوال فترة دراستك</p>
            <p className="text-gray-400 text-xs mb-8">تُجدَّد سنوياً بوثيقة قيد</p>

            <div className="space-y-3 text-right mb-8">
              <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 text-sm">
                <span className="text-gray-500">السعر الأصلي</span>
                <span className="text-gray-400 line-through">٩٩ ريال/شهر</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-teal/10 rounded-xl border border-teal/20 text-sm">
                <span className="font-bold text-teal">سعر الطلاب</span>
                <span className="font-black text-teal text-lg">٠ ريال</span>
              </div>
            </div>

            <a
              href="https://app.getvom.com/register?plan=student"
              className="block bg-teal hover:bg-teal-dark text-white font-black py-4 rounded-2xl transition-all hover:scale-105 shadow-lg shadow-teal/30"
            >
              سجّل الآن مجاناً
            </a>
          </div>
        </div>

        {/* How to register */}
        <div className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 text-center mb-10">كيف تسجّل؟</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-teal rounded-2xl flex items-center justify-center text-white font-black text-xl mx-auto mb-4">
                  {s.num}
                </div>
                <h3 className="font-black text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Universities */}
        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center">
              <BookOpen size={20} className="text-teal" />
            </div>
            <h2 className="text-xl font-black text-gray-900">الجامعات المشمولة</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {universities.map((u, i) => (
              <span key={i} className={`text-sm px-3 py-1.5 rounded-xl font-medium ${i === universities.length - 1 ? 'bg-teal/10 text-teal' : 'bg-white border border-gray-100 text-gray-700'}`}>
                {u}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="hero-gradient rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          <div className="relative">
            <Award size={40} className="text-orange-light mx-auto mb-4" />
            <h2 className="text-2xl font-black text-white mb-3">ابدأ مسيرتك المحاسبية اليوم</h2>
            <p className="text-white/70 mb-6">الأدوات الاحترافية بين يديك — مجاناً</p>
            <a
              href="https://app.getvom.com/register?plan=student"
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-black px-10 py-4 rounded-2xl shadow-xl shadow-orange/40 transition-all hover:scale-105"
            >
              سجّل كطالب <ChevronLeft size={20} />
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
