import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, ChevronLeft, X, ChevronDown } from 'lucide-react'

/* ---- Table of Contents ---- */
const toc = [
  { id: 'what', label: 'ما هو برنامج المحاسبة؟' },
  { id: 'types', label: 'أنواع البرامج المحاسبية' },
  { id: 'cloud-vs-traditional', label: 'سحابي أم تقليدي؟' },
  { id: 'how-to-choose', label: 'كيف تختار البرنامج الأنسب؟' },
  { id: 'comparison', label: 'مقارنة أشهر البرامج' },
  { id: 'by-sector', label: 'برامج حسب النشاط التجاري' },
  { id: 'free', label: 'البرامج المجانية وقوالب Excel' },
  { id: 'faq', label: 'أسئلة وأجوبة' },
]

const summaryPoints = [
  { bold: 'ليست كل البرامج معتمدة تلقائياً.', text: 'تأكد أن البرنامج يدعم المرحلة الثانية من الفوترة الإلكترونية، ويولّد UUID والتوقيع الرقمي، ويرتبط فعلياً بمنصة "فاتورة" التابعة لزاتكا.' },
  { bold: 'السعر وحده لا يكفي.', text: 'الرخيص قد يكون مكلفاً على المدى البعيد. احسب التكلفة الحقيقية: كم ساعة عمل يوفر؟ كم خطأً يمنع؟ كم غرامة تتفادى؟' },
  { bold: 'البرامج السحابية تتفوق في المرونة والتوافق الرسمي.', text: 'يمكنك الوصول من أي مكان، وإصدار فواتير إلكترونية معتمدة بلحظة، ومتابعة الأرقام حتى لو لم تكن محاسباً محترفاً.' },
  { bold: 'ابدأ دائماً بتجربة عملية.', text: 'نفّذ سيناريو عمل حقيقي؛ من عرض السعر إلى الفاتورة إلى رفعها على المنصة. إذا شعرت أن العملية معقدة فابحث عن بديل.' },
]

const softwareTypes = [
  { title: 'برامج تقليدية (أوفلاين)', icon: '🖥️', desc: 'تُثبَّت في جهاز واحد وتعمل بدون إنترنت. محدودة الانتشار اليوم بسبب ضعف التكامل وعدم دعمها الفوترة الإلكترونية.', pros: [], cons: ['لا تدعم الفوترة الإلكترونية', 'يصعب الوصول عن بُعد', 'تحديثات يدوية'] },
  { title: 'برامج سحابية (Cloud)', icon: '☁️', desc: 'تعمل عبر الإنترنت وتتيح الدخول من أي مكان. الخيار المفضّل اليوم للمنشآت السعودية.', pros: ['موافقة لزاتكا من اليوم الأول', 'نسخ احتياطي تلقائي', 'تحديثات مستمرة', 'وصول من أي جهاز'], cons: [] },
  { title: 'برامج مجانية', icon: '🆓', desc: 'خيار مناسب للبدايات لكنها محدودة الخصائص. قد تبدأ بها ثم تنتقل إلى حل مدفوع لاحقاً.', pros: ['بدون تكلفة', 'سهلة البداية'], cons: ['محدودة الميزات', 'قد لا تدعم زاتكا'] },
  { title: 'برامج متخصصة', icon: '🎯', desc: 'موجّهة لفئات معيّنة كالمطاعم أو المصانع أو المتاجر الإلكترونية مع ميزات مخصصة لكل قطاع.', pros: ['مصممة لاحتياجات القطاع', 'تكامل مع نقاط البيع'], cons: ['أغلى من البرامج العامة'] },
]

const comparisonTable = [
  { name: 'ڤوم VoM', target: 'الشركات الصغيرة والمتوسطة', zatca: true, ease: true, extras: 'تقارير ضريبة القيمة المضافة، إدارة العملاء، دعم فني فوري', highlight: true },
  { name: 'قيود Qoyod', target: 'شركات متوسطة بفرق محاسبة داخلية', zatca: 'جزئي', ease: false, extras: 'تكاملات متعددة، تحليلات متقدمة', highlight: false },
  { name: 'سكاي سوفت', target: 'شركات كبيرة بحاجات مخصصة', zatca: true, ease: false, extras: 'حلول مخصصة حسب القطاع', highlight: false },
  { name: 'Excel', target: 'مبتدئين وأصحاب الميزانيات المحدودة', zatca: false, ease: true, extras: 'مرن لكنه يدوي بالكامل', highlight: false },
]

const scenarios = [
  {
    num: '١',
    title: 'منشأة ناشئة تبحث عن البداية السهلة',
    icon: '🌱',
    color: 'bg-green-50 border-green-100',
    accent: 'text-green-600',
    desc: 'عندما تبدأ مشروعك، تكون الأولوية للبساطة والتكلفة المنخفضة. البرامج المجانية مغرية لكنها قد تتحول إلى عبء مع نمو العمل، خاصة عند الدخول في الفوترة الإلكترونية الإلزامية.',
    tip: 'حتى لو بدأت بأداة بسيطة، تأكد أنها قابلة للتوسع ومعتمدة من الهيئة منذ البداية.',
  },
  {
    num: '٢',
    title: 'منشأة قائمة تريد نظاماً متكاملاً',
    icon: '🏢',
    color: 'bg-blue-50 border-blue-100',
    accent: 'text-blue-600',
    desc: 'في هذه المرحلة تحتاج إدارة تشغيلية شاملة تتكامل مع الجرد والمخزون والعملاء والموردين ونقاط البيع. الوقت عامل حاسم — كل دقيقة في واجهة معقدة تعني خسارة مباشرة.',
    tip: 'الحل المثالي هو برنامج سحابي بواجهة عربية واضحة يدعم الفوترة الإلكترونية تلقائياً.',
  },
  {
    num: '٣',
    title: 'منشأة تهدف للامتثال الكامل للهيئة',
    icon: '⚖️',
    color: 'bg-teal/5 border-teal/15',
    accent: 'text-teal',
    desc: 'تحتاج إلى نظام معتمد رسمياً يُصدر الفواتير بصيغها النظامية، ويدعم مرحلة التكامل، وينشئ تقارير مالية جاهزة لتقديم الإقرارات الدورية.',
    tip: 'أي خطأ في التنسيق مع منصة فاتورة قد يكلفك غرامات تأخير أو رفض الفواتير.',
  },
]

const sectors = [
  { name: 'المتاجر الإلكترونية', icon: '🛒', slug: 'ecommerce' },
  { name: 'شركات الاستثمار', icon: '📈', slug: 'investment' },
  { name: 'المقاولات والعقارات', icon: '🏗️', slug: 'construction' },
  { name: 'وكالات التسويق', icon: '📣', slug: 'marketing' },
  { name: 'مكاتب المحاماة', icon: '⚖️', slug: 'legal' },
  { name: 'أنشطة الأطفال', icon: '🧒', slug: 'kids' },
  { name: 'الخدمات اللوجستية', icon: '🚚', slug: 'logistics' },
  { name: 'المطاعم والمقاهي', icon: '🍔', slug: 'restaurants' },
  { name: 'مكاتب التصميم', icon: '🎨', slug: 'design' },
  { name: 'شركات الطباعة', icon: '🖨️', slug: 'print' },
  { name: 'النوادي الرياضية', icon: '🏋️', slug: 'gyms' },
  { name: 'السفر والسياحة', icon: '✈️', slug: 'tourism' },
  { name: 'صيانة السيارات', icon: '🔧', slug: 'auto-repair' },
  { name: 'مراكز التجميل', icon: '💄', slug: 'salons' },
  { name: 'محلات العطور', icon: '🌸', slug: 'perfumes' },
]

const faqs = [
  { q: 'ما هو أفضل برنامج محاسبة؟', a: 'أفضل برنامج محاسبة يعتمد على احتياجاتك، وموافقة سعره مع ميزانيتك، وأمانه، وقدرته على الربط التلقائي مع زاتكا. يُعدّ برنامج ڤوم أفضل خيار للشركات الصغيرة والمتوسطة في السعودية.' },
  { q: 'ما هي البرامج المحاسبية المستخدمة في السعودية؟', a: 'توجد برامج كثيرة لكن ليست كلها تناسب طبيعة مشروعك. من أبرزها: ڤوم، قيود، سكاي سوفت، وبعض البرامج العالمية. الأهم أن تكون معتمدة من هيئة الزكاة والضريبة والجمارك.' },
  { q: 'هل يوجد برنامج محاسبة مجاني؟', a: 'نعم، لكنه في الغالب محدود الإمكانات والميزات. ڤوم يوفر تجربة مجانية 30 يوماً بدون بطاقة بنكية للتجربة الكاملة.' },
  { q: 'ما هو النظام المحاسبي الإلكتروني؟', a: 'هو برنامج يجري تخزينه على الحاسوب أو سحابياً لإدارة المعاملات المالية. البرامج السحابية توفر جميع الاحتياجات المحاسبية مع التزامن الفوري وإمكانية الوصول من أي مكان.' },
  { q: 'هل ڤوم معتمد من هيئة الزكاة والضريبة والجمارك؟', a: 'نعم، ڤوم معتمد رسمياً ويدعم إصدار الفاتورة الضريبية الإلكترونية وإرسالها تلقائياً للهيئة، موافقاً بالكامل لمتطلبات المرحلة الثانية من الفوترة الإلكترونية.' },
]

export default function AccountingSoftware() {
  useEffect(() => { document.title = 'برنامج المحاسبة السحابي — دليل شامل 2025 | ڤوم' }, [])
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="hero-gradient pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-white/10 border border-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-6">
            دليل شامل 2025
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight">
            برنامج المحاسبة
            <br />
            <span className="text-orange-light">الدليل الشامل لاختيار الحل الأنسب في السعودية</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            السوق مزدحم بأكثر من 20 برنامجاً. هذا الدليل يأخذك خطوة بخطوة لتختار البرنامج الذي يحميك من مخالفات زاتكا، ويختصر وقتك، ويعطيك رؤية واضحة لأرقامك.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-black px-8 py-4 rounded-2xl shadow-xl shadow-orange/40 transition-all hover:scale-105"
          >
            جرّب ڤوم مجاناً 30 يوم <ChevronLeft size={20} />
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex gap-10 items-start">

          {/* Sticky TOC sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0 sticky top-24">
            <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
              <p className="text-xs font-black text-gray-400 mb-3 uppercase tracking-wider">محتويات الدليل</p>
              <nav className="space-y-1">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-xs text-gray-600 hover:text-teal hover:bg-teal/5 px-3 py-2 rounded-xl transition-all"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0 space-y-14">

            {/* Summary box */}
            <div className="bg-teal/5 border border-teal/15 rounded-3xl p-7">
              <h2 className="text-lg font-black text-teal mb-5">المختصر المفيد</h2>
              <div className="space-y-4">
                {summaryPoints.map((p, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-teal mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <span className="font-black text-gray-900">{p.bold} </span>
                      {p.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* What is */}
            <section id="what">
              <h2 className="text-2xl font-black text-gray-900 mb-4">ما هي برامج المحاسبة؟</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                برامج المحاسبة هي أنظمة رقمية تساعدك في تسجيل ومعالجة وتحليل المعاملات المالية لنشاطك التجاري. سواء كنت تدير مؤسسة صغيرة، أو متجراً إلكترونياً، أو شركة تقدم خدمات احترافية، فهذه البرامج صارت أداة أساسية لتتبع الإيرادات والنفقات والأصول والضرائب بطريقة آلية دقيقة.
              </p>
              <p className="text-gray-600 leading-relaxed">
                في السياق السعودي، اكتسبت برامج المحاسبة أهمية مضاعفة بعد إطلاق هيئة الزكاة والضريبة والجمارك (ZATCA) للمرحلة الثانية من الفوترة الإلكترونية، إذ أصبح استخدام برنامج محاسبي معتمد ومتكامل ضرورة قانونية وليس خياراً.
              </p>
            </section>

            {/* Types */}
            <section id="types">
              <h2 className="text-2xl font-black text-gray-900 mb-6">أنواع برامج المحاسبة</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {softwareTypes.map((t, i) => (
                  <div key={i} className={`bg-white border rounded-2xl p-5 shadow-sm ${i === 1 ? 'border-teal/20 ring-1 ring-teal/10' : 'border-gray-100'}`}>
                    <div className="text-3xl mb-3">{t.icon}</div>
                    <h3 className="font-black text-gray-900 mb-2">{t.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">{t.desc}</p>
                    {t.pros.length > 0 && (
                      <ul className="space-y-1">
                        {t.pros.map((p, j) => (
                          <li key={j} className="flex items-center gap-2 text-xs text-gray-600">
                            <CheckCircle2 size={12} className="text-teal" />{p}
                          </li>
                        ))}
                      </ul>
                    )}
                    {t.cons.length > 0 && (
                      <ul className="space-y-1 mt-2">
                        {t.cons.map((c, j) => (
                          <li key={j} className="flex items-center gap-2 text-xs text-gray-400">
                            <X size={12} className="text-red-400" />{c}
                          </li>
                        ))}
                      </ul>
                    )}
                    {i === 1 && <span className="inline-block mt-3 text-xs font-black text-teal bg-teal/10 px-3 py-1 rounded-full">الخيار المفضّل في السعودية</span>}
                  </div>
                ))}
              </div>
            </section>

            {/* Cloud vs Traditional */}
            <section id="cloud-vs-traditional">
              <h2 className="text-2xl font-black text-gray-900 mb-6">سحابي أم تقليدي؟ مقارنة مباشرة</h2>
              <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-right px-5 py-3 font-black text-gray-700">وجه المقارنة</th>
                      <th className="text-center px-5 py-3 font-black text-gray-500">تقليدي</th>
                      <th className="text-center px-5 py-3 font-black text-teal">سحابي ☁️</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {[
                      ['الوصول', 'من جهاز واحد فقط', 'من أي جهاز عبر الإنترنت'],
                      ['التحديثات', 'يدوية', 'تلقائية'],
                      ['دعم الفوترة الإلكترونية', 'غير مدعوم غالباً', 'مدعوم ومعتمد من زاتكا'],
                      ['النسخ الاحتياطي', 'مسؤولية المستخدم', 'تلقائياً من مزود الخدمة'],
                      ['الأمان', 'حسب قوة جهازك', 'سيرفرات مشفرة ومعتمدة'],
                    ].map(([label, old, cloud], i) => (
                      <tr key={i} className="bg-white hover:bg-gray-50 transition-colors">
                        <td className="px-5 py-3 font-medium text-gray-700">{label}</td>
                        <td className="px-5 py-3 text-center text-gray-400">{old}</td>
                        <td className="px-5 py-3 text-center text-teal font-medium">{cloud}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* How to choose */}
            <section id="how-to-choose">
              <h2 className="text-2xl font-black text-gray-900 mb-6">كيف تختار برنامج المحاسبة الأنسب لنشاطك؟</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                من واقع احتكاكنا بالسوق السعودي، هناك 3 سيناريوهات مختلفة لاستخدامات برامج المحاسبة:
              </p>
              <div className="space-y-5">
                {scenarios.map((s, i) => (
                  <div key={i} className={`border rounded-2xl p-6 ${s.color}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{s.icon}</span>
                      <div>
                        <span className={`text-xs font-black ${s.accent}`}>السيناريو {s.num}</span>
                        <h3 className="font-black text-gray-900">{s.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{s.desc}</p>
                    <div className="flex items-start gap-2 bg-white/60 rounded-xl p-3">
                      <span className="text-lg flex-shrink-0">💡</span>
                      <p className="text-xs text-gray-700 leading-relaxed"><span className="font-black">نصيحتنا: </span>{s.tip}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Comparison table */}
            <section id="comparison">
              <h2 className="text-2xl font-black text-gray-900 mb-6">مقارنة بين أشهر برامج المحاسبة في السعودية</h2>
              <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-right px-4 py-3 font-black text-gray-700">البرنامج</th>
                      <th className="text-right px-4 py-3 font-black text-gray-700">الفئة المستهدفة</th>
                      <th className="text-center px-4 py-3 font-black text-gray-700">زاتكا</th>
                      <th className="text-center px-4 py-3 font-black text-gray-700">سهولة الاستخدام</th>
                      <th className="text-right px-4 py-3 font-black text-gray-700">مزايا إضافية</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {comparisonTable.map((r, i) => (
                      <tr key={i} className={r.highlight ? 'bg-teal/5' : 'bg-white hover:bg-gray-50'}>
                        <td className="px-4 py-3 font-black text-gray-900">
                          {r.name}
                          {r.highlight && <span className="mr-2 text-xs bg-teal text-white px-2 py-0.5 rounded-full">موصى به</span>}
                        </td>
                        <td className="px-4 py-3 text-gray-600 text-xs">{r.target}</td>
                        <td className="px-4 py-3 text-center">
                          {r.zatca === true ? '✅' : r.zatca === 'جزئي' ? '⚠️ جزئي' : '❌'}
                        </td>
                        <td className="px-4 py-3 text-center">{r.ease ? '✅' : '❌ يحتاج تدريب'}</td>
                        <td className="px-4 py-3 text-gray-500 text-xs">{r.extras}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* VOM highlight */}
            <div className="bg-gray-900 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
              <div className="relative">
                <h3 className="text-xl font-black text-white mb-5">لماذا بدأ كثيرون يثقون بـ ڤوم؟</h3>
                <div className="space-y-4">
                  {[
                    { title: 'اعتماد رسمي وتكامل حقيقي مع زاتكا', desc: 'ڤوم معتمد رسمياً ويدعم إصدار الفاتورة الضريبية الإلكترونية وإرسالها تلقائياً، موافقاً بالكامل للمرحلة الثانية.' },
                    { title: 'واجهة مريحة لغير المحاسبين', desc: 'مصممة لرواد الأعمال والمديرين — من تصنيف المصروفات إلى الفواتير والتقارير، كل شيء بخطوات بسيطة.' },
                    { title: 'تجربة مجانية بدون بطاقة بنكية', desc: 'جرّب ڤوم 30 يوماً بالكامل قبل أي قرار. فريق الدعم جاهز للإجابة على أي استفسار.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-teal rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 size={14} className="text-white" />
                      </div>
                      <div>
                        <p className="font-black text-white text-sm">{item.title}</p>
                        <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 mt-6 bg-orange hover:bg-orange-dark text-white font-black px-6 py-3 rounded-xl shadow-lg shadow-orange/30 transition-all hover:scale-105 text-sm"
                >
                  ابدأ تجربتك المجانية الآن <ChevronLeft size={16} />
                </Link>
              </div>
            </div>

            {/* By sector */}
            <section id="by-sector">
              <h2 className="text-2xl font-black text-gray-900 mb-3">برامج محاسبة حسب النشاط التجاري</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                منشأتك ليست كأي منشأة أخرى. كل نشاط تجاري له خصوصيته المحاسبية. ڤوم صمّم حلولاً مخصصة لكل قطاع:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {sectors.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/sectors/${s.slug}`}
                    className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl p-4 hover:border-teal/30 hover:shadow-sm transition-all group"
                  >
                    <span className="text-xl">{s.icon}</span>
                    <span className="text-sm font-bold text-gray-700 group-hover:text-teal transition-colors">{s.name}</span>
                    <ChevronLeft size={12} className="text-gray-300 group-hover:text-teal mr-auto transition-colors" />
                  </Link>
                ))}
              </div>
            </section>

            {/* Free options */}
            <section id="free">
              <h2 className="text-2xl font-black text-gray-900 mb-4">البرامج المجانية وقوالب Excel</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                عند انطلاق أي مشروع، من الطبيعي البحث عن خيار مجاني. لكن تكمن مشكلة جوهرية: ليس كل برنامج مجاني يناسب السوق السعودي. منذ المرحلة الثانية من الفوترة الإلكترونية، أصبح ضرورياً أن يدعم النظام:
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {[
                  { title: 'قوالب Excel جاهزة', desc: 'تتبع الدخل والمصروفات اليومية، وإصدار فاتورة ضريبية يدوية. مناسب كبداية مؤقتة.', badge: 'مؤقت', badgeColor: 'bg-gray-100 text-gray-600' },
                  { title: 'باقة ڤوم المجانية', desc: 'إصدار فواتير إلكترونية موافقة لزاتكا، إدارة العملاء والمبيعات، تقارير ضريبية مبسطة.', badge: 'موصى به', badgeColor: 'bg-teal/10 text-teal' },
                  { title: 'نماذج فواتير جاهزة', desc: 'مكتبة مجانية من القوالب: فواتير ضريبية، مبيعات، عروض أسعار. مثالية للاستخدام المؤقت.', badge: 'يدوي', badgeColor: 'bg-orange/10 text-orange' },
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                    <span className={`text-xs font-black px-2.5 py-1 rounded-full ${item.badgeColor}`}>{item.badge}</span>
                    <h3 className="font-black text-gray-900 mt-3 mb-2 text-sm">{item.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-orange/5 border border-orange/10 rounded-2xl p-5 flex items-start gap-3">
                <span className="text-xl flex-shrink-0">⚠️</span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-black">تنبيه مهم: </span>أي برنامج غير معتمد من الهيئة سيصبح عائقاً كبيراً لاحقاً، سواء عند رفع الإقرارات أو التوسع في عمليات البيع والفوترة.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="text-2xl font-black text-gray-900 mb-6">أسئلة وأجوبة حول برامج المحاسبة</h2>
              <div className="space-y-3">
                {faqs.map((f, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full text-right flex items-center justify-between p-5 font-bold text-gray-900 text-sm hover:text-teal transition-colors"
                    >
                      {f.q}
                      <ChevronDown size={16} className={`flex-shrink-0 mr-3 text-teal transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                        {f.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <div className="hero-gradient rounded-3xl p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
              <div className="relative">
                <h2 className="text-2xl font-black text-white mb-3">
                  برنامج المحاسبة ليس مجرد أداة، بل شريك نموّ
                </h2>
                <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xl mx-auto">
                  ڤوم يبسّط لك الفوترة الإلكترونية، ويمنحك تقارير جاهزة للعرض أمام الهيئة، ويبدأ معك من لحظة التسجيل بدون تعقيد.
                </p>
                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-black px-10 py-4 rounded-2xl shadow-xl shadow-orange/40 transition-all hover:scale-105"
                >
                  ابدأ تجربتك المجانية الآن <ChevronLeft size={20} />
                </Link>
                <p className="text-white/40 text-xs mt-4">30 يوماً مجاناً — بدون بطاقة بنكية</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
