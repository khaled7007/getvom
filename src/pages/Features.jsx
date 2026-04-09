import { Link } from 'react-router-dom'
import { ChevronLeft, BarChart3, Shield, Zap, Users, TrendingUp, FileText, CreditCard, Bell, Calculator, Lock } from 'lucide-react'

const features = [
  {
    icon: <BarChart3 size={32} className="text-teal" />,
    title: 'قائمة الدخل المزدوجة',
    subtitle: 'إجمالي + صافي في تقرير واحد',
    desc: 'ڤوم يعرض إجمالي الربح وصافي الربح بشكل منفصل مع تحليل التكاليف، اعرف أين تذهب أموالك بالتحديد. "هل إجمالي ربحك عالٍ لكن صافيه منخفض؟ ڤوم يخبرك بالسبب."',
    badge: 'متاح لجميع القطاعات',
    badgeColor: 'bg-teal/10 text-teal',
  },
  {
    icon: <Shield size={32} className="text-teal" />,
    title: 'الإقرار الضريبي المُنسق مع زاتكا',
    subtitle: 'جاهز بنقرة واحدة',
    desc: 'الإقرار الضريبي مُصمَّم ليطابق نموذج هيئة الزكاة والضريبة والجمارك الرسمي تماماً، يُرسَل بدون أي تعديلات إضافية. يوفر ساعات من العمل كل ربع سنة.',
    badge: 'متوافق مع زاتكا',
    badgeColor: 'bg-green-100 text-green-700',
  },
  {
    icon: <Zap size={32} className="text-teal" />,
    title: 'ربط نقطة البيع، بدون مطور',
    subtitle: 'تكامل تلقائي',
    desc: 'ڤوم يحوّل مبيعات نقطة البيع إلى قيود محاسبية تلقائياً، بدون أي مطور أو وسيط تقني. يوفر عليك آلاف الريالات في التكامل.',
    badge: 'للمطاعم والخدمات',
    badgeColor: 'bg-orange/10 text-orange',
  },
  {
    icon: <Users size={32} className="text-teal" />,
    title: 'كشف حساب العميل المتكامل',
    subtitle: 'كل شيء في مكان واحد',
    desc: 'ملخص كامل لكل عميل: الفواتير، المدفوعات، الرصيد، والتاريخ الكامل، كلها في مكان واحد. يقلل النزاعات ويبني الثقة مع العملاء.',
    badge: 'للمؤثرين والخدمات',
    badgeColor: 'bg-purple-100 text-purple-700',
  },
  {
    icon: <FileText size={32} className="text-teal" />,
    title: 'تقرير ضريبة المشتريات التفصيلي',
    subtitle: 'استرجاع الضريبة بسهولة',
    desc: 'فلتر حسب الفترة، المورد، مركز التكلفة، ونوع المعاملة، يُولَّد بنقرة واحدة. يساعدك في استرجاع ضريبة المدخلات بسرعة وبدون جهد.',
    badge: 'متاح لجميع القطاعات',
    badgeColor: 'bg-teal/10 text-teal',
  },
  {
    icon: <CreditCard size={32} className="text-teal" />,
    title: 'نظام إدارة الكروت الهدية',
    subtitle: 'محاسبة صحيحة للكروت',
    desc: 'ڤوم يسجّل الكروت الهدية كالتزام مالي، لا كإيراد فوري، مع تحليل أنماط الاسترداد وتخطيط التدفق النقدي. يعكس وضعك المالي الحقيقي.',
    badge: 'للصالونات',
    badgeColor: 'bg-pink-100 text-pink-700',
  },
  {
    icon: <Calculator size={32} className="text-teal" />,
    title: 'الضمان التجاري في الفاتورة',
    subtitle: 'للمقاولات والإنشاءات',
    desc: 'خصم الضمان التجاري يُحتسب مباشرة داخل الفاتورة ويُربط تلقائياً بدليل الحسابات والتقارير المالية، لا يضيع شيء ولا يُنسى.',
    badge: 'للمقاولات',
    badgeColor: 'bg-amber-100 text-amber-700',
  },
  {
    icon: <Bell size={32} className="text-teal" />,
    title: 'تتبع الاشتراكات والتجديدات',
    subtitle: 'إيرادات متكررة تحت السيطرة',
    desc: 'تتبع مدفوعات الأعضاء المتكررة، تذكيرات التجديد، والفوترة الدورية، كلها تلقائية. لا يفوتك تجديد واحد.',
    badge: 'للصالات والمراكز',
    badgeColor: 'bg-lime-100 text-lime-700',
  },
  {
    icon: <TrendingUp size={32} className="text-teal" />,
    title: 'الفواتير الإلكترونية، زاتكا',
    subtitle: 'امتثال كامل',
    desc: 'فواتير إلكترونية معتمدة من هيئة الزكاة والضريبة والجمارك بجميع متطلبات المرحلتين، الأولى والثانية. مزودة بكود QR وجميع البيانات المطلوبة.',
    badge: 'معتمد زاتكا',
    badgeColor: 'bg-green-100 text-green-700',
  },
  {
    icon: <Lock size={32} className="text-teal" />,
    title: 'أمان وخصوصية البيانات',
    subtitle: 'بياناتك محمية دائماً',
    desc: 'تشفير كامل لبيانات عملك، نسخ احتياطية يومية، صلاحيات مخصصة لكل مستخدم. بياناتك ملكك وحدك.',
    badge: 'آمان عالي',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
]

export default function Features() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="hero-gradient pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            مميزات <span className="text-orange-light">لا تجدها في أي مكان آخر</span>
          </h1>
          <p className="text-white/80 text-xl">
            كل ميزة مصممة لحل مشكلة حقيقية يواجهها أصحاب الأعمال في السعودية
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-teal/20 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-teal/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  {f.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-black text-gray-900 text-lg leading-tight">{f.title}</h3>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${f.badgeColor}`}>
                      {f.badge}
                    </span>
                  </div>
                  <p className="text-teal text-sm font-semibold mb-3">{f.subtitle}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="hero-gradient py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">جاهز تجرب كل هذه المميزات؟</h2>
          <p className="text-white/70 mb-8 text-lg">30 يوم مجاناً، بدون بطاقة ائتمان</p>
          <a
            href="https://app.getvom.com/register"
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-black text-xl px-10 py-5 rounded-2xl shadow-2xl shadow-orange/40 transition-all hover:scale-105"
          >
            ابدأ تجربتك المجانية
            <ChevronLeft size={24} />
          </a>
        </div>
      </div>
    </div>
  )
}
