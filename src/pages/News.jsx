import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ChevronLeft, ExternalLink } from 'lucide-react'

const news = [
  {
    id: 1,
    slug: 'shirka-lazywalt',
    category: 'شراكات',
    categoryColor: 'bg-teal/10 text-teal',
    title: 'ڤوم تُعلن عن شراكة استراتيجية مع LazyWalt لتعزيز خدمات المدفوعات',
    excerpt: 'تسعى ڤوم من خلال هذه الشراكة إلى تقديم تجربة متكاملة للمنشآت الصغيرة والمتوسطة تجمع بين إدارة الحسابات وخدمات الدفع الرقمي في منصة واحدة.',
    date: '٨ أبريل ٢٠٢٦',
    readTime: '٣ دقائق',
    emoji: '🤝',
    gradient: 'from-teal/20 to-teal/5',
    featured: true,
  },
  {
    id: 2,
    slug: 'ittilaq-tatbiq-jadid',
    category: 'إطلاق',
    categoryColor: 'bg-orange/10 text-orange',
    title: 'ڤوم تُطلق نسخة جديدة من تطبيق الجوال بواجهة محسّنة ودعم كامل للـ iPad',
    excerpt: 'يأتي التحديث الجديد بواجهة مستخدم معاد تصميمها بالكامل، مع تجربة أسرع وأكثر سلاسة على جميع الأجهزة.',
    date: '٢ أبريل ٢٠٢٦',
    readTime: '٢ دقائق',
    emoji: '📱',
    gradient: 'from-orange/20 to-orange/5',
    featured: false,
  },
  {
    id: 3,
    slug: 'jaiza-2026',
    category: 'جوائز',
    categoryColor: 'bg-yellow-50 text-yellow-600',
    title: 'ڤوم تفوز بجائزة أفضل حل محاسبي للمنشآت الصغيرة في منتدى تقنية 2026',
    excerpt: 'في احتفالية المنتدى السنوي للتقنية المالية، حصدت ڤوم جائزة أفضل حل محاسبي للمنشآت الصغيرة والمتوسطة لعام 2026.',
    date: '٢٨ مارس ٢٠٢٦',
    readTime: '٢ دقائق',
    emoji: '🏆',
    gradient: 'from-yellow-100 to-yellow-50',
    featured: false,
  },
  {
    id: 4,
    slug: 'ietimad-zatca',
    category: 'امتثال',
    categoryColor: 'bg-green-50 text-green-600',
    title: 'ڤوم تحصل على شهادة الاعتماد من هيئة الزكاة والضريبة والجمارك للمرحلة الثانية',
    excerpt: 'حصلت ڤوم رسمياً على اعتماد زاتكا للمرحلة الثانية من الفوترة الإلكترونية، مما يؤهّل عملاءها للامتثال التام دون أي تعقيدات.',
    date: '٢٠ مارس ٢٠٢٦',
    readTime: '٣ دقائق',
    emoji: '✅',
    gradient: 'from-green-100 to-green-50',
    featured: false,
  },
  {
    id: 5,
    slug: 'tawassu-tajziat',
    category: 'توسع',
    categoryColor: 'bg-purple-50 text-purple-600',
    title: 'ڤوم تتوسع في قطاع التجزئة بإطلاق باقة متخصصة لمحلات السوبرماركت',
    excerpt: 'أعلنت ڤوم عن إطلاق باقة متكاملة مصممة خصيصاً لمحلات التجزئة، تشمل ربط نقاط البيع وإدارة المخزون وتقارير المبيعات اليومية.',
    date: '١٥ مارس ٢٠٢٦',
    readTime: '٤ دقائق',
    emoji: '🏪',
    gradient: 'from-purple-100 to-purple-50',
    featured: false,
  },
  {
    id: 6,
    slug: 'tamwil-bathari',
    category: 'تمويل',
    categoryColor: 'bg-blue-50 text-blue-600',
    title: 'ڤوم تُغلق جولة تمويل بذري بقيادة مستثمرين من المملكة والإمارات',
    excerpt: 'أعلنت ڤوم إغلاق جولة تمويل بذري ناجحة بمشاركة مجموعة من المستثمرين الاستراتيجيين من المملكة العربية السعودية والإمارات العربية المتحدة.',
    date: '٥ مارس ٢٠٢٦',
    readTime: '٣ دقائق',
    emoji: '💰',
    gradient: 'from-blue-100 to-blue-50',
    featured: false,
  },
]

const socialLinks = [
  {
    label: 'انستقرام',
    handle: '@getvom',
    color: 'hover:bg-pink-500',
    bg: 'bg-pink-50',
    textColor: 'text-pink-500',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: 'تويتر / X',
    handle: '@getvom',
    color: 'hover:bg-gray-900',
    bg: 'bg-gray-50',
    textColor: 'text-gray-800',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'يوتيوب',
    handle: 'getvom',
    color: 'hover:bg-red-600',
    bg: 'bg-red-50',
    textColor: 'text-red-500',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: 'فيسبوك',
    handle: 'getvom',
    color: 'hover:bg-blue-600',
    bg: 'bg-blue-50',
    textColor: 'text-blue-600',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'تيك توك',
    handle: '@getvom',
    color: 'hover:bg-gray-900',
    bg: 'bg-gray-50',
    textColor: 'text-gray-800',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
]

const categories = ['الكل', 'شراكات', 'إطلاق', 'جوائز', 'امتثال', 'توسع', 'تمويل']

export default function News() {
  useEffect(() => { document.title = 'أخبار ڤوم — آخر المستجدات والإعلانات' }, [])
  const [activeCategory, setActiveCategory] = useState('الكل')

  const filtered = activeCategory === 'الكل'
    ? news
    : news.filter((n) => n.category === activeCategory)

  const [featured, ...rest] = filtered

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="hero-gradient pt-28 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            أخبار <span className="text-orange-light">ڤوم</span>
          </h1>
          <p className="text-white/70 text-lg">
            تغطية لأحدث أخبار ڤوم والشركات والمبادرات ذات الصلة بعالم المحاسبة والتقنية المالية.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex gap-10">

          {/* Main content */}
          <div className="flex-1 min-w-0">

            {/* Category filter */}
            <div className="flex gap-2 flex-wrap mb-8">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                    activeCategory === c
                      ? 'bg-teal text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Featured news */}
            {featured && (
              <Link
                to={`/news/${featured.slug}`}
                className="block bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-6"
              >
                <div className={`bg-gradient-to-l ${featured.gradient} h-52 flex items-center justify-center relative`}>
                  <div className="text-7xl opacity-30">{featured.emoji}</div>
                  <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${featured.categoryColor}`}>
                    {featured.category}
                  </span>
                  {activeCategory === 'الكل' && (
                    <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full bg-orange/10 text-orange">
                      أبرز الأخبار
                    </span>
                  )}
                </div>
                <div className="p-7">
                  <h2 className="text-xl font-black text-gray-900 mb-3 leading-snug hover:text-teal transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-gray-400 text-xs">
                      <span className="flex items-center gap-1"><Calendar size={12} />{featured.date}</span>
                      <span className="flex items-center gap-1"><Clock size={12} />{featured.readTime} قراءة</span>
                    </div>
                    <span className="flex items-center gap-1 text-teal font-bold text-sm">
                      اقرأ المزيد <ChevronLeft size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            )}

            {/* News grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {rest.map((item) => (
                <Link
                  key={item.id}
                  to={`/news/${item.slug}`}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`bg-gradient-to-l ${item.gradient} h-36 flex items-center justify-center`}>
                    <div className="text-5xl opacity-30">{item.emoji}</div>
                  </div>
                  <div className="p-5">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${item.categoryColor}`}>
                      {item.category}
                    </span>
                    <h3 className="font-black text-gray-900 text-sm mt-3 mb-2 leading-snug hover:text-teal transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">{item.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span className="flex items-center gap-1"><Calendar size={11} />{item.date}</span>
                      <span className="flex items-center gap-1"><Clock size={11} />{item.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">

            {/* Social */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 mb-5">
              <h3 className="font-black text-gray-900 text-sm mb-4">منصاتنا الاجتماعية</h3>
              <div className="space-y-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    className={`flex items-center gap-3 p-3 rounded-xl ${s.bg} ${s.textColor} hover:text-white transition-all text-sm font-bold ${s.color} group`}
                  >
                    <span className="group-hover:text-white transition-colors">{s.icon}</span>
                    <div>
                      <p className="text-xs font-bold leading-tight">{s.label}</p>
                      <p className="text-xs opacity-60 font-normal">{s.handle}</p>
                    </div>
                    <ExternalLink size={12} className="mr-auto opacity-40 group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="hero-gradient rounded-2xl p-5 text-center">
              <p className="text-white font-black text-sm mb-2">جرّب ڤوم مجاناً</p>
              <p className="text-white/60 text-xs mb-4">٣٠ يوم بدون بطاقة</p>
              <a
                href="https://app.getvom.com/register"
                className="block bg-orange hover:bg-orange-dark text-white font-bold text-sm py-2.5 rounded-xl transition-all"
              >
                ابدأ الآن
              </a>
            </div>

            {/* Categories */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 mt-5">
              <h3 className="font-black text-gray-900 text-sm mb-4">التصنيفات</h3>
              <div className="space-y-1">
                {categories.filter((c) => c !== 'الكل').map((c) => (
                  <button
                    key={c}
                    onClick={() => setActiveCategory(c)}
                    className={`w-full text-right flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-all ${
                      activeCategory === c ? 'bg-teal/10 text-teal font-bold' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {c}
                    <span className="text-xs text-gray-400">
                      {news.filter((n) => n.category === c).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>
    </div>
  )
}
