import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Search, BookOpen, CreditCard, Settings, Plug, FileText,
  BarChart2, ChevronLeft, HelpCircle, MessageCircle
} from 'lucide-react'

const categories = [
  {
    icon: <BookOpen size={22} className="text-teal" />,
    title: 'البداية السريعة',
    desc: 'كيف تبدأ مع ڤوم في 15 دقيقة',
    count: 8,
    color: 'bg-teal/10',
  },
  {
    icon: <CreditCard size={22} className="text-orange" />,
    title: 'الفواتير والمدفوعات',
    desc: 'إنشاء فواتير، تتبع مستحقات، زاتكا',
    count: 12,
    color: 'bg-orange/10',
  },
  {
    icon: <BarChart2 size={22} className="text-blue-500" />,
    title: 'التقارير والمحاسبة',
    desc: 'قوائم الدخل، الميزانية، التقارير الضريبية',
    count: 10,
    color: 'bg-blue-50',
  },
  {
    icon: <Plug size={22} className="text-purple-500" />,
    title: 'التكاملات',
    desc: 'ربط فودكس، زد، بريكسل، مرن',
    count: 6,
    color: 'bg-purple-50',
  },
  {
    icon: <Settings size={22} className="text-gray-500" />,
    title: 'إعدادات الحساب',
    desc: 'المستخدمون، الصلاحيات، الأمان',
    count: 9,
    color: 'bg-gray-100',
  },
  {
    icon: <FileText size={22} className="text-green-600" />,
    title: 'الاشتراك والفوترة',
    desc: 'ترقية الخطة، الفواتير، الإلغاء',
    count: 7,
    color: 'bg-green-50',
  },
]

const faqs = [
  {
    category: 'البداية',
    items: [
      {
        q: 'كيف أبدأ الإعداد الأول لحسابي؟',
        a: 'بعد التسجيل، ستظهر لك خطوات إعداد تلقائية: إدخال بيانات الشركة، إضافة رقم السجل التجاري، واختيار قطاع نشاطك. يستغرق الإعداد الأولي أقل من 20 دقيقة.',
      },
      {
        q: 'هل يمكنني استيراد بياناتي من برنامج آخر؟',
        a: 'نعم، ڤوم يدعم استيراد البيانات من ملفات Excel/CSV. يمكنك استيراد الفواتير والعملاء والموردين والمخزون.',
      },
      {
        q: 'كم عدد المستخدمين المسموح بهم في كل خطة؟',
        a: 'خطة الأساسي: 2 مستخدمين. خطة المحترف: 5 مستخدمين. خطة المؤسسي: مستخدمون غير محدودين.',
      },
    ],
  },
  {
    category: 'الفواتير',
    items: [
      {
        q: 'كيف أُصدر فاتورة إلكترونية متوافقة مع زاتكا؟',
        a: 'من قائمة "الفواتير"، اضغط "فاتورة جديدة"، أدخل بيانات العميل والبنود، ثم اضغط "إصدار". ڤوم يُنشئ الفاتورة مباشرة بالصيغة المعتمدة من زاتكا تلقائياً.',
      },
      {
        q: 'هل يدعم ڤوم الفاتورة الإلكترونية المرحلة الثانية (PEPPOL)؟',
        a: 'نعم، ڤوم يدعم فاتورة زاتكا بالمرحلتين الأولى والثانية (ربط المنظومة). نحدّث النظام مع كل متطلبات زاتكا الجديدة.',
      },
      {
        q: 'ماذا أفعل إذا أردت تعديل فاتورة مُصدَرة؟',
        a: 'لا يمكن تعديل فاتورة مُصدَرة. يجب إنشاء إشعار دائن (مرتجع) لإلغاء الفاتورة القديمة، ثم إصدار فاتورة جديدة بالتعديلات المطلوبة.',
      },
    ],
  },
  {
    category: 'التقارير',
    items: [
      {
        q: 'كيف أحصل على قائمة الدخل الشهرية؟',
        a: 'من قائمة "التقارير" → "قائمة الدخل"، حدد الفترة الزمنية المطلوبة، ثم اضغط "إنشاء التقرير". يمكنك تصديره بصيغة PDF أو Excel.',
      },
      {
        q: 'هل يمكنني مقارنة أداء فرعين مختلفين؟',
        a: 'نعم، في خطة المؤسسي يمكنك مقارنة التقارير المالية بين الفروع المختلفة في تقرير موحد.',
      },
    ],
  },
  {
    category: 'الاشتراك',
    items: [
      {
        q: 'كيف أُلغي اشتراكي؟',
        a: 'من الإعدادات → الاشتراك → إلغاء الاشتراك. ستبقى خدمتك فعّالة حتى نهاية الفترة الحالية المدفوعة.',
      },
      {
        q: 'هل يمكن استرداد المبلغ المدفوع؟',
        a: 'التجربة المجانية لا تتطلب أي دفع. أما الاشتراكات المدفوعة، فلا تُسترد إلا في حالات استثنائية. تواصل مع فريق الدعم لمناقشة وضعك.',
      },
    ],
  },
]

export default function Help() {
  useEffect(() => { document.title = 'مركز المساعدة — الأسئلة الشائعة | ڤوم' }, [])
  const [search, setSearch] = useState('')
  const [openIndex, setOpenIndex] = useState(null)

  const filteredFaqs = faqs.map((cat) => ({
    ...cat,
    items: cat.items.filter(
      (item) =>
        !search.trim() ||
        item.q.includes(search) ||
        item.a.includes(search)
    ),
  })).filter((cat) => cat.items.length > 0)

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="hero-gradient pt-28 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle size={32} className="text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            مركز المساعدة
          </h1>
          <p className="text-white/70 text-lg mb-8">
            ابحث في أكثر من 50 مقالة لحل مشكلتك بسرعة
          </p>
          {/* Search */}
          <div className="relative max-w-lg mx-auto">
            <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ابحث عن سؤالك..."
              className="w-full bg-white text-gray-900 pr-12 pl-4 py-4 rounded-2xl text-sm outline-none shadow-xl placeholder-gray-400 focus:ring-2 focus:ring-teal/30"
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      {!search && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">تصفح حسب الموضوع</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((c) => (
              <button
                key={c.title}
                onClick={() => setSearch(c.title.split(' ')[0])}
                className="text-right bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:border-teal/20 transition-all group"
              >
                <div className={`w-11 h-11 ${c.color} rounded-xl flex items-center justify-center mb-4`}>
                  {c.icon}
                </div>
                <h3 className="font-black text-gray-900 mb-1">{c.title}</h3>
                <p className="text-gray-500 text-xs mb-3">{c.desc}</p>
                <span className="text-teal text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                  {c.count} مقالة <ChevronLeft size={14} />
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* FAQs */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">
          {search ? `نتائج البحث: "${search}"` : 'الأسئلة الشائعة'}
        </h2>

        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-5xl mb-4">🔍</p>
            <h3 className="text-xl font-black text-gray-900 mb-2">لم نجد نتائج</h3>
            <p className="text-gray-500 text-sm mb-6">جرّب كلمات بحث مختلفة أو تواصل مع فريق الدعم</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-teal text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-all"
            >
              تواصل مع الدعم <ChevronLeft size={16} />
            </Link>
          </div>
        ) : (
          <div className="space-y-10">
            {filteredFaqs.map((cat) => (
              <div key={cat.category}>
                <h3 className="text-sm font-black text-teal uppercase tracking-wide mb-4 flex items-center gap-2">
                  <span className="h-px flex-1 bg-teal/20" />
                  {cat.category}
                  <span className="h-px flex-1 bg-teal/20" />
                </h3>
                <div className="space-y-3">
                  {cat.items.map((item, i) => {
                    const key = `${cat.category}-${i}`
                    const isOpen = openIndex === key
                    return (
                      <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : key)}
                          className="w-full text-right flex items-center justify-between p-5 font-bold text-gray-900 text-sm hover:text-teal transition-colors"
                        >
                          {item.q}
                          <span className={`text-teal text-xl font-light flex-shrink-0 mr-4 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
                            +
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                            {item.a}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Still need help */}
      <div className="bg-gray-50 border-t border-gray-100 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-3">لم تجد إجابتك؟</h2>
          <p className="text-gray-500 mb-8">فريق الدعم جاهز للمساعدة في أي استفسار</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 bg-teal hover:bg-teal-dark text-white font-bold px-6 py-3 rounded-xl transition-all"
            >
              <MessageCircle size={18} />
              تواصل مع الدعم
            </Link>
            <a
              href="https://wa.me/966XXXXXXXXX"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition-all"
            >
              <MessageCircle size={18} />
              واتساب مباشر
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
