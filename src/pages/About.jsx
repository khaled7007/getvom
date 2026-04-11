import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, Target, Eye, Heart, Shield, Users, TrendingUp, Code2, Calculator, Headphones } from 'lucide-react'

const values = [
  {
    icon: <Target size={28} className="text-teal" />,
    title: 'الوضوح المالي',
    desc: 'نؤمن أن كل صاحب عمل يستحق أن يعرف أرباحه الحقيقية في أي لحظة، بدون تعقيد.',
  },
  {
    icon: <Heart size={28} className="text-teal" />,
    title: 'مصمم للسعودية',
    desc: 'ڤوم مبني من الأساس للسوق السعودي، بمتطلبات زاتكا، وبلغة تفهمها.',
  },
  {
    icon: <Shield size={28} className="text-teal" />,
    title: 'الامتثال الضريبي',
    desc: 'معتمد من هيئة الزكاة والضريبة والجمارك، فواتير إلكترونية متوافقة مع جميع المراحل.',
  },
  {
    icon: <Users size={28} className="text-teal" />,
    title: 'لكل قطاع لغته',
    desc: 'مو برنامج عام لكل شيء. كل قطاع عنده محتواه ومميزاته وأمثلته المالية الخاصة.',
  },
]

const stats = [
  { value: '+4,000', label: 'صاحب عمل يثق بـ ڤوم' },
  { value: '23', label: 'قطاع مدعوم' },
  { value: '+500K', label: 'فاتورة صادرة' },
  { value: '2020', label: 'سنة التأسيس' },
]

const team = [
  { name: 'فريق التطوير', role: 'مهندسون سعوديون', Icon: Code2 },
  { name: 'فريق المحاسبة', role: 'محاسبون معتمدون', Icon: Calculator },
  { name: 'فريق الدعم', role: 'دعم عربي 24/7', Icon: Headphones },
]

export default function About() {
  useEffect(() => { document.title = 'عن ڤوم — قصتنا ورؤيتنا' }, [])
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="hero-gradient pt-28 pb-24 relative overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-white/10 border border-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-6">
            من نحن
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            بنينا ڤوم لأن أصحاب الأعمال
            <span className="text-orange-light"> يستحقون وضوحاً مالياً حقيقياً</span>
          </h1>
          <p className="text-white/80 text-xl leading-relaxed">
            كل يوم، آلاف أصحاب الأعمال في السعودية ينهون يومهم ولا يعرفون بالضبط كم ربحوا. ڤوم وُجد لحل هذه المشكلة.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-teal mb-1">{s.value}</div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="inline-block bg-teal/10 text-teal text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              قصتنا
            </span>
            <h2 className="text-3xl font-black text-gray-900 mb-6">
              من أين جاءت فكرة ڤوم؟
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                بدأت القصة من مشكلة حقيقية، أصحاب مطاعم وصالونات ومحلات تجزئة في السعودية كانوا يستخدمون برامج محاسبة مصممة للشركات الكبيرة أو للأسواق الأجنبية.
              </p>
              <p>
                النتيجة؟ برامج معقدة لا تفهم طبيعة عملهم، ولا تتحدث بلغتهم، ولا تعرف متطلبات هيئة الزكاة والضريبة والجمارك.
              </p>
              <p>
                فبنينا ڤوم، برنامجاً يعرف الفرق بين مطعم وصالون ومقاول، ويتحدث مع كل واحد بلغته ومشاكله الحقيقية.
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-teal/10 rounded-2xl flex items-center justify-center">
                <Eye size={24} className="text-teal" />
              </div>
              <div>
                <p className="font-black text-gray-900">رؤيتنا</p>
                <p className="text-gray-400 text-sm">Vision</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed font-medium mb-8">
              "أن يكون كل صاحب عمل في السعودية قادراً على معرفة أرباحه الحقيقية في أي لحظة، بنقرة واحدة."
            </p>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange/10 rounded-2xl flex items-center justify-center">
                <TrendingUp size={24} className="text-orange" />
              </div>
              <div>
                <p className="font-black text-gray-900">مهمتنا</p>
                <p className="text-gray-400 text-sm">Mission</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed font-medium mt-4">
              "تحويل المحاسبة من عبء إلى قوة تنافسية لكل صاحب عمل في السعودية."
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-3">قيمنا</h2>
            <p className="text-gray-500">ما يحركنا كل يوم</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-teal/20 transition-all">
                <div className="w-12 h-12 bg-teal/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-black text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-3">فريقنا</h2>
            <p className="text-gray-500">سعوديون يبنون لأصحاب الأعمال السعوديين</p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {team.map((t) => (
              <div key={t.name} className="text-center bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-14 h-14 bg-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <t.Icon size={28} className="text-teal" />
                </div>
                <p className="font-black text-gray-900 text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs mt-1">{t.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ZATCA badge */}
        <div className="text-center mb-20">
          <img src="/zatca-badge.svg" alt="هيئة الزكاة والضريبة والجمارك" className="h-20 w-20 mx-auto mb-4" />
          <p className="font-black text-gray-800 text-base mb-2">هيئة الزكاة والضريبة والجمارك</p>
          <p className="text-gray-400 text-sm mb-4">Zakat, Tax and Customs Authority</p>
          <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
            ڤوم معتمد رسمياً لإصدار الفواتير الإلكترونية وفق متطلبات المرحلتين الأولى والثانية. إقرار ضريبة القيمة المضافة جاهز بنقرة واحدة ومطابق لنموذج زاتكا الرسمي.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="hero-gradient py-16 relative overflow-hidden">
        {/* Geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute top-8 left-12 opacity-65" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <line x1="2" y1="2" x2="34" y2="34" stroke="#FF7300" strokeWidth="5" strokeLinecap="round"/>
            <line x1="34" y1="2" x2="2" y2="34" stroke="#FF7300" strokeWidth="5" strokeLinecap="round"/>
          </svg>
          <svg className="absolute bottom-8 right-14 opacity-55" width="44" height="44" viewBox="0 0 44 44" fill="none">
            <line x1="0" y1="13" x2="44" y2="13" stroke="#E040A0" strokeWidth="4.5" strokeLinecap="round" transform="rotate(-35 22 22)"/>
            <line x1="0" y1="25" x2="44" y2="25" stroke="#E040A0" strokeWidth="4.5" strokeLinecap="round" transform="rotate(-35 22 22)"/>
            <line x1="0" y1="37" x2="44" y2="37" stroke="#E040A0" strokeWidth="4.5" strokeLinecap="round" transform="rotate(-35 22 22)"/>
          </svg>
          <svg className="absolute top-10 right-20 opacity-45" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <line x1="0" y1="10" x2="32" y2="10" stroke="#9B4DCA" strokeWidth="3.5" strokeLinecap="round" transform="rotate(-40 16 16)"/>
            <line x1="0" y1="20" x2="32" y2="20" stroke="#9B4DCA" strokeWidth="3.5" strokeLinecap="round" transform="rotate(-40 16 16)"/>
          </svg>
          <svg className="absolute bottom-10 left-20 opacity-30" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <line x1="2" y1="2" x2="20" y2="20" stroke="#FF7300" strokeWidth="4" strokeLinecap="round"/>
            <line x1="20" y1="2" x2="2" y2="20" stroke="#FF7300" strokeWidth="4" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-black text-white mb-4">
            انضم لـ +4,000 صاحب عمل يثقون بـ ڤوم
          </h2>
          <p className="text-white/70 mb-8 text-lg">30 يوم مجاناً، بدون بطاقة ائتمان</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.getvom.com/register"
              className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white font-black text-xl px-10 py-5 rounded-2xl shadow-2xl shadow-orange/40 transition-all hover:scale-105"
            >
              ابدأ تجربتك المجانية
              <ChevronLeft size={24} />
            </a>
            <Link
              to="/sectors"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-5 rounded-2xl transition-all"
            >
              شوف قطاعك
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
