import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ChevronLeft, Camera, Share2, Play, Users } from 'lucide-react'

const posts = [
  {
    id: 1,
    category: 'محاسبة',
    categoryColor: 'bg-teal/10 text-teal',
    title: 'كيف تختار برنامج محاسبة مناسب لنشاطك التجاري؟',
    excerpt: 'الاختيار الصحيح لبرنامج المحاسبة يوفّر عليك ساعات من العمل اليدوي ويضمن دقة بياناتك المالية. إليك المعايير الأساسية التي يجب مراعاتها.',
    date: '١٠ أبريل ٢٠٢٥',
    readTime: '٥ دقائق',
    image: null,
    featured: true,
  },
  {
    id: 2,
    category: 'زاتكا',
    categoryColor: 'bg-orange/10 text-orange',
    title: 'الفوترة الإلكترونية المرحلة الثانية: كل ما تحتاج معرفته',
    excerpt: 'المرحلة الثانية من الفوترة الإلكترونية (ربط المنظومة) باتت إلزامية. تعرّف على المتطلبات وكيف يساعدك ڤوم في الامتثال التام.',
    date: '٥ أبريل ٢٠٢٥',
    readTime: '٧ دقائق',
    image: null,
    featured: false,
  },
  {
    id: 3,
    category: 'نصائح',
    categoryColor: 'bg-blue-50 text-blue-600',
    title: '٥ أخطاء محاسبية شائعة يقع فيها أصحاب المطاعم',
    excerpt: 'من عدم فصل الحسابات الشخصية عن التجارية، إلى إهمال تتبع تكلفة البضاعة المباعة — تعرف على أبرز الأخطاء وكيف تتجنبها.',
    date: '١ أبريل ٢٠٢٥',
    readTime: '٤ دقائق',
    image: null,
    featured: false,
  },
  {
    id: 4,
    category: 'قطاعات',
    categoryColor: 'bg-purple-50 text-purple-600',
    title: 'إدارة حسابات صالون التجميل: دليل شامل لعام ٢٠٢٥',
    excerpt: 'صالونات التجميل لها طبيعة مالية خاصة — اشتراكات، باقات، مخزون. إليك كيف تديرها بشكل احترافي مع ڤوم.',
    date: '٢٨ مارس ٢٠٢٥',
    readTime: '٦ دقائق',
    image: null,
    featured: false,
  },
  {
    id: 5,
    category: 'زاتكا',
    categoryColor: 'bg-orange/10 text-orange',
    title: 'دعم الهيئة للفوترة الإلكترونية: كيف تحصل على ٢٥٠٠ ريال؟',
    excerpt: 'هيئة الزكاة والضريبة والجمارك تدعم المنشآت الصغيرة بمبلغ ٢٥٠٠ ريال لتبني الفوترة الإلكترونية. تعرف على الشروط وخطوات التقديم.',
    date: '٢٠ مارس ٢٠٢٥',
    readTime: '٣ دقائق',
    image: null,
    featured: false,
  },
  {
    id: 6,
    category: 'محاسبة',
    categoryColor: 'bg-teal/10 text-teal',
    title: 'قائمة الدخل للمقاولين: كيف تحسب أرباحك الحقيقية؟',
    excerpt: 'المقاولات قطاع معقد مالياً — مشاريع متعددة، مدفوعات متأخرة، تكاليف غير متوقعة. إليك نموذج قائمة دخل مناسب.',
    date: '١٥ مارس ٢٠٢٥',
    readTime: '٨ دقائق',
    image: null,
    featured: false,
  },
]

const social = [
  { icon: <Camera size={18} />, label: 'انستقرام', color: 'hover:bg-pink-500' },
  { icon: <Share2 size={18} />, label: 'تويتر / X', color: 'hover:bg-gray-900' },
  { icon: <Play size={18} />, label: 'يوتيوب', color: 'hover:bg-red-600' },
  { icon: <Users size={18} />, label: 'فيسبوك', color: 'hover:bg-blue-600' },
]

const categories = ['الكل', 'محاسبة', 'زاتكا', 'نصائح', 'قطاعات']

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('الكل')

  const filtered = activeCategory === 'الكل'
    ? posts
    : posts.filter((p) => p.category === activeCategory)

  const [featured, ...rest] = filtered

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="hero-gradient pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            مدونة <span className="text-orange-light">ڤوم</span>
          </h1>
          <p className="text-white/70 text-lg">
            تغطية لأحدث أخبار ڤوم والشركات والبادرات ذات الصلة بعالم المحاسبة والتقنية المالية.
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

            {/* Featured post */}
            {featured && (
              <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-6">
                <div className="bg-gradient-to-l from-teal/10 to-teal/5 h-48 flex items-center justify-center relative">
                  <div className="text-6xl opacity-20">📊</div>
                  <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${featured.categoryColor}`}>
                    {featured.category}
                  </span>
                  {activeCategory === 'الكل' && (
                    <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full bg-orange/10 text-orange">
                      مميز
                    </span>
                  )}
                </div>
                <div className="p-7">
                  <h2 className="text-xl font-black text-gray-900 mb-3 leading-snug hover:text-teal transition-colors cursor-pointer">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-gray-400 text-xs">
                      <span className="flex items-center gap-1"><Calendar size={12} />{featured.date}</span>
                      <span className="flex items-center gap-1"><Clock size={12} />{featured.readTime} قراءة</span>
                    </div>
                    <button className="flex items-center gap-1 text-teal font-bold text-sm hover:underline">
                      اقرأ المزيد <ChevronLeft size={14} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Post grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {rest.map((post) => (
                <div key={post.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-gradient-to-l from-gray-50 to-gray-100 h-32 flex items-center justify-center">
                    <div className="text-4xl opacity-20">📄</div>
                  </div>
                  <div className="p-5">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${post.categoryColor}`}>
                      {post.category}
                    </span>
                    <h3 className="font-black text-gray-900 text-sm mt-3 mb-2 leading-snug hover:text-teal transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span className="flex items-center gap-1"><Calendar size={11} />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">

            {/* Social */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 mb-5">
              <h3 className="font-black text-gray-900 text-sm mb-4">منصاتنا الاجتماعية</h3>
              <div className="space-y-2">
                {social.map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    className={`flex items-center gap-3 p-3 rounded-xl bg-gray-50 text-gray-600 hover:text-white transition-all text-sm font-bold ${s.color}`}
                  >
                    {s.icon}
                    {s.label}
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
                {categories.filter(c => c !== 'الكل').map((c) => (
                  <button
                    key={c}
                    onClick={() => setActiveCategory(c)}
                    className={`w-full text-right flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-all ${
                      activeCategory === c ? 'bg-teal/10 text-teal font-bold' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {c}
                    <span className="text-xs text-gray-400">
                      {posts.filter(p => p.category === c).length}
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
