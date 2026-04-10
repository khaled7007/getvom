import { Link, useParams, Navigate } from 'react-router-dom'
import { Calendar, Clock, ArrowRight, ChevronLeft } from 'lucide-react'

const newsItems = [
  {
    slug: 'shirka-lazywalt',
    id: 1,
    category: 'شراكات',
    categoryColor: 'bg-teal/10 text-teal',
    title: 'ڤوم تُعلن عن شراكة استراتيجية مع LazyWalt لتعزيز خدمات المدفوعات',
    excerpt: 'تسعى ڤوم من خلال هذه الشراكة إلى تقديم تجربة متكاملة للمنشآت الصغيرة والمتوسطة تجمع بين إدارة الحسابات وخدمات الدفع الرقمي في منصة واحدة.',
    date: '٨ أبريل ٢٠٢٦',
    readTime: '٣ دقائق',
    emoji: '🤝',
    gradient: 'from-teal/20 to-teal/5',
    content: [
      {
        type: 'paragraph',
        text: 'أعلنت شركة ڤوم للمحاسبة السحابية اليوم عن إبرام شراكة استراتيجية مع LazyWalt، المنصة الرائدة في خدمات الدفع الرقمي للأعمال الصغيرة والمتوسطة في منطقة الخليج العربي.',
      },
      {
        type: 'paragraph',
        text: 'تهدف هذه الشراكة إلى دمج قدرات ڤوم في إدارة الحسابات والفوترة الإلكترونية مع بنية LazyWalt التحتية المتقدمة لمعالجة المدفوعات، بما يتيح لأصحاب الأعمال إدارة دورة حياة الفاتورة بالكامل — من الإصدار حتى الاستلام — داخل نظام واحد متكامل.',
      },
      {
        type: 'heading',
        text: 'ما الذي تعنيه هذه الشراكة لعملاء ڤوم؟',
      },
      {
        type: 'paragraph',
        text: 'بموجب هذه الشراكة، سيتمكن عملاء ڤوم من استقبال مدفوعات عملائهم مباشرةً عبر الفواتير الإلكترونية، مع تسوية تلقائية في سجلات المحاسبة. كما ستتاح لهم خيارات دفع متعددة تشمل مدى، فيزا، ماستركارد، وتحويلات آنية عبر تطبيقات المحافظ الرقمية.',
      },
      {
        type: 'highlight',
        text: 'يُتوقع إطلاق التكامل الكامل بين المنصتين خلال الربع الثالث من عام ٢٠٢٦. عملاء ڤوم الحاليون سيحصلون على الوصول المبكر قبل الإطلاق الرسمي.',
      },
      {
        type: 'heading',
        text: 'رؤية الشركتين',
      },
      {
        type: 'paragraph',
        text: 'قال فريق ڤوم: "نحن نؤمن أن الحاجز بين إصدار الفاتورة واستلام الدفع يجب أن يختفي. عبر هذه الشراكة، نقدم لأصحاب الأعمال السعوديين تجربة مالية متكاملة حقيقية لم تكن متاحة من قبل."',
      },
    ],
  },
  {
    slug: 'ittilaq-tatbiq-jadid',
    id: 2,
    category: 'إطلاق',
    categoryColor: 'bg-orange/10 text-orange',
    title: 'ڤوم تُطلق نسخة جديدة من تطبيق الجوال بواجهة محسّنة ودعم كامل للـ iPad',
    excerpt: 'يأتي التحديث الجديد بواجهة مستخدم معاد تصميمها بالكامل، مع تجربة أسرع وأكثر سلاسة على جميع الأجهزة.',
    date: '٢ أبريل ٢٠٢٦',
    readTime: '٢ دقائق',
    emoji: '📱',
    gradient: 'from-orange/20 to-orange/5',
    content: [
      {
        type: 'paragraph',
        text: 'أطلقت ڤوم الإصدار ٣.٠ من تطبيق الجوال الخاص بها، وهو أكبر تحديث في تاريخ التطبيق منذ إطلاقه. يتضمن التحديث إعادة تصميم كاملة للواجهة، تحسينات جوهرية في الأداء، ودعماً أصيلاً لأجهزة iPad لأول مرة.',
      },
      {
        type: 'heading',
        text: 'أبرز مزايا الإصدار الجديد',
      },
      {
        type: 'paragraph',
        text: 'الواجهة الجديدة مصممة للعمل باللمس أولاً، مع تحسينات واضحة في سرعة التنقل بين الشاشات. أصبح بإمكان المستخدمين إصدار فاتورة إلكترونية من الشاشة الرئيسية خلال ثلاث نقرات فقط.',
      },
      {
        type: 'paragraph',
        text: 'دعم iPad يتيح لأصحاب الأعمال الاستفادة من الشاشة الكبيرة لعرض التقارير المالية والفواتير جنباً إلى جنب. التطبيق يستغل ميزات iPad مثل Split View و Stage Manager.',
      },
      {
        type: 'highlight',
        text: 'التحديث متاح مجاناً لجميع المشتركين الحاليين عبر App Store و Google Play. التثبيت التلقائي سيتم خلال الأيام القادمة.',
      },
      {
        type: 'heading',
        text: 'ما القادم؟',
      },
      {
        type: 'paragraph',
        text: 'تعمل ڤوم حالياً على إصدار نسخة Apple Watch تتيح إشعارات فورية عند استلام المدفوعات، مع لوحة ملخص مالي يومي. الإطلاق متوقع في الربع الثالث من ٢٠٢٦.',
      },
    ],
  },
  {
    slug: 'jaiza-2026',
    id: 3,
    category: 'جوائز',
    categoryColor: 'bg-yellow-50 text-yellow-600',
    title: 'ڤوم تفوز بجائزة أفضل حل محاسبي للمنشآت الصغيرة في منتدى تقنية 2026',
    excerpt: 'في احتفالية المنتدى السنوي للتقنية المالية، حصدت ڤوم جائزة أفضل حل محاسبي للمنشآت الصغيرة والمتوسطة لعام 2026.',
    date: '٢٨ مارس ٢٠٢٦',
    readTime: '٢ دقائق',
    emoji: '🏆',
    gradient: 'from-yellow-100 to-yellow-50',
    content: [
      {
        type: 'paragraph',
        text: 'في حفل توزيع جوائز منتدى تقنية المالية السعودي (SFTECH 2026) الذي أُقيم في الرياض، حصدت ڤوم جائزة "أفضل حل محاسبي للمنشآت الصغيرة والمتوسطة لعام 2026"، وذلك من بين ٤٧ منافساً من المملكة وخارجها.',
      },
      {
        type: 'heading',
        text: 'معايير التقييم',
      },
      {
        type: 'paragraph',
        text: 'قيّمت لجنة التحكيم الحلول المشاركة وفق معايير عدة: سهولة الاستخدام، مستوى الامتثال لمتطلبات زاتكا، جودة الدعم الفني، نطاق الميزات مقارنةً بالسعر، ورضا المستخدمين. حققت ڤوم أعلى درجة مجمّعة في ثلاثة من هذه المحاور الخمسة.',
      },
      {
        type: 'highlight',
        text: 'هذه الجائزة تؤكد التزامنا بتقديم حل محاسبي حقيقي مصمم خصيصاً لأصحاب الأعمال السعوديين — لا مجرد ترجمة لبرنامج أجنبي.',
      },
      {
        type: 'paragraph',
        text: 'تأتي هذه الجائزة بعد عام من النمو الملحوظ، إذ تجاوز عدد مستخدمي ڤوم ٤٠٠٠ منشأة نشطة، وصدر عبر المنصة أكثر من نصف مليون فاتورة إلكترونية متوافقة مع زاتكا.',
      },
    ],
  },
  {
    slug: 'ietimad-zatca',
    id: 4,
    category: 'امتثال',
    categoryColor: 'bg-green-50 text-green-600',
    title: 'ڤوم تحصل على شهادة الاعتماد من هيئة الزكاة والضريبة والجمارك للمرحلة الثانية',
    excerpt: 'حصلت ڤوم رسمياً على اعتماد زاتكا للمرحلة الثانية من الفوترة الإلكترونية، مما يؤهّل عملاءها للامتثال التام دون أي تعقيدات.',
    date: '٢٠ مارس ٢٠٢٦',
    readTime: '٣ دقائق',
    emoji: '✅',
    gradient: 'from-green-100 to-green-50',
    content: [
      {
        type: 'paragraph',
        text: 'تُعلن ڤوم بكل فخر حصولها على شهادة الاعتماد الرسمي من هيئة الزكاة والضريبة والجمارك للمرحلة الثانية من الفوترة الإلكترونية (ربط المنظومة وتكاملها)، وذلك بعد اجتياز جميع الاختبارات التقنية المطلوبة.',
      },
      {
        type: 'heading',
        text: 'ماذا يعني هذا لعملاء ڤوم؟',
      },
      {
        type: 'paragraph',
        text: 'بحصول ڤوم على هذا الاعتماد، يمكن لجميع عملاء المنصة الامتثال التام لمتطلبات المرحلة الثانية دون الحاجة إلى تطوير حلول تقنية إضافية أو التعامل مع مزودين متعددين. ڤوم تتولى الربط مع منصة فاتورة التابعة لزاتكا تلقائياً.',
      },
      {
        type: 'paragraph',
        text: 'كل فاتورة صادرة عبر ڤوم تحمل: UUID فريداً، توقيعاً رقمياً معتمداً، وتُرسَل لمنصة فاتورة والحصول على الختم الإلكتروني في ثوانٍ — كل هذا يحدث خلف الكواليس دون أي تدخل من المستخدم.',
      },
      {
        type: 'highlight',
        text: 'إذا كنت عميلاً حالياً لـ ڤوم، فأنت تستفيد من هذا الاعتماد تلقائياً. لا يتطلب الأمر أي إجراء من جانبك.',
      },
      {
        type: 'heading',
        text: 'ماذا لو لم أكن مشتركاً بعد؟',
      },
      {
        type: 'paragraph',
        text: 'إذا كانت منشأتك تخضع لمتطلبات المرحلة الثانية ولم تنتقل بعد لحل معتمد، فالوقت يمضي. تواصل مع فريق ڤوم اليوم للبدء في عملية الانتقال بسلاسة قبل موعد تطبيق المرحلة على منشأتك.',
      },
    ],
  },
  {
    slug: 'tawassu-tajziat',
    id: 5,
    category: 'توسع',
    categoryColor: 'bg-purple-50 text-purple-600',
    title: 'ڤوم تتوسع في قطاع التجزئة بإطلاق باقة متخصصة لمحلات السوبرماركت',
    excerpt: 'أعلنت ڤوم عن إطلاق باقة متكاملة مصممة خصيصاً لمحلات التجزئة، تشمل ربط نقاط البيع وإدارة المخزون وتقارير المبيعات اليومية.',
    date: '١٥ مارس ٢٠٢٦',
    readTime: '٤ دقائق',
    emoji: '🏪',
    gradient: 'from-purple-100 to-purple-50',
    content: [
      {
        type: 'paragraph',
        text: 'أطلقت ڤوم "باقة التجزئة"، وهي حزمة متكاملة مصممة خصيصاً لاحتياجات محلات السوبرماركت والهايبرماركت والتجزئة بشكل عام. تأتي هذه الباقة استجابةً لطلبات متزايدة من هذا القطاع الذي يمثل شريحة واسعة من عملاء ڤوم.',
      },
      {
        type: 'heading',
        text: 'ما الذي تقدمه باقة التجزئة؟',
      },
      {
        type: 'paragraph',
        text: 'الباقة تشمل: ربط مباشر مع نقاط البيع الشائعة، إدارة مخزون ذكية مع تنبيهات النفاد التلقائية، تقارير مبيعات يومية وأسبوعية وشهرية، تتبع هامش الربح لكل صنف، وإصدار تقارير ضريبة القيمة المضافة المتوافقة مع زاتكا.',
      },
      {
        type: 'paragraph',
        text: 'ميزة جديدة تُطلَق لأول مرة مع هذه الباقة: "لوحة المقارنة اليومية" التي تعرض أداء المحل مقارنةً بنفس اليوم من الأسبوع الماضي، والشهر الماضي — مما يتيح اتخاذ قرارات أسرع وأدق.',
      },
      {
        type: 'highlight',
        text: 'باقة التجزئة متاحة الآن بسعر تعريفي مع فترة تجربة مجانية ٣٠ يوماً. البنية الأساسية تدعم حتى ١٠٠,٠٠٠ صنف وفروع متعددة.',
      },
    ],
  },
  {
    slug: 'tamwil-bathari',
    id: 6,
    category: 'تمويل',
    categoryColor: 'bg-blue-50 text-blue-600',
    title: 'ڤوم تُغلق جولة تمويل بذري بقيادة مستثمرين من المملكة والإمارات',
    excerpt: 'أعلنت ڤوم إغلاق جولة تمويل بذري ناجحة بمشاركة مجموعة من المستثمرين الاستراتيجيين من المملكة العربية السعودية والإمارات العربية المتحدة.',
    date: '٥ مارس ٢٠٢٦',
    readTime: '٣ دقائق',
    emoji: '💰',
    gradient: 'from-blue-100 to-blue-50',
    content: [
      {
        type: 'paragraph',
        text: 'أعلنت ڤوم اليوم إتمام جولة تمويلها البذرية بنجاح، بمشاركة نخبة من المستثمرين الاستراتيجيين من المملكة العربية السعودية والإمارات العربية المتحدة، إلى جانب صندوق رأس مال مغامر متخصص في حلول التقنية المالية للأسواق الناشئة.',
      },
      {
        type: 'heading',
        text: 'أين ستُوجَّه الاستثمارات؟',
      },
      {
        type: 'paragraph',
        text: 'ستُوجَّه الاستثمارات الجديدة نحو ثلاثة محاور رئيسية: توسيع الفريق الهندسي لتسريع تطوير المنتج، بناء قدرات التعلم الآلي لتقديم توصيات مالية ذكية، والتوسع الجغرافي نحو أسواق الخليج خارج المملكة.',
      },
      {
        type: 'paragraph',
        text: 'تأتي هذه الجولة في مرحلة نمو متسارع تشهدها ڤوم، إذ تجاوز معدل النمو الشهري في قاعدة المستخدمين ١٥٪ خلال الأشهر الستة الماضية، مع معدل احتفاظ بالعملاء يتخطى ٩٢٪.',
      },
      {
        type: 'highlight',
        text: 'رسالتنا لم تتغير: بناء الأداة المحاسبية الأكثر ملاءمةً لأصحاب الأعمال في السعودية والخليج. هذا التمويل يعجّل مسيرتنا نحو هذا الهدف.',
      },
      {
        type: 'heading',
        text: 'ماذا يعني هذا للعملاء؟',
      },
      {
        type: 'paragraph',
        text: 'التمويل الجديد يعني: تطوير أسرع للميزات المطلوبة، دعم فني أقوى، وتكاملات أوسع مع المنصات المحلية والإقليمية. خلال الأشهر القادمة ستشهدون إطلاق ميزات كنا نعمل عليها لفترة طويلة.',
      },
    ],
  },
]

export default function NewsPost() {
  const { slug } = useParams()
  const item = newsItems.find((n) => n.slug === slug)

  if (!item) return <Navigate to="/news" replace />

  const related = newsItems.filter((n) => n.slug !== slug).slice(0, 2)

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="hero-gradient pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          <Link to="/news" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors">
            <ArrowRight size={16} />
            العودة للأخبار
          </Link>
          <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${item.categoryColor}`}>
            {item.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
            {item.title}
          </h1>
          <div className="flex items-center gap-5 text-white/60 text-sm">
            <span className="flex items-center gap-1.5"><Calendar size={14} />{item.date}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} />{item.readTime} قراءة</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <div className="space-y-6">
          {item.content.map((block, i) => {
            if (block.type === 'paragraph') {
              return (
                <p key={i} className="text-gray-700 leading-relaxed text-base">
                  {block.text}
                </p>
              )
            }
            if (block.type === 'heading') {
              return (
                <h2 key={i} className="text-xl font-black text-gray-900 mt-10 mb-3">
                  {block.text}
                </h2>
              )
            }
            if (block.type === 'highlight') {
              return (
                <div key={i} className="bg-teal/5 border-r-4 border-teal rounded-xl px-5 py-4 text-gray-700 text-sm leading-relaxed">
                  {block.text}
                </div>
              )
            }
            return null
          })}
        </div>

        {/* CTA */}
        <div className="hero-gradient rounded-3xl p-8 text-center mt-14 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative">
            <h3 className="text-xl font-black text-white mb-2">جرّب ڤوم مجاناً ٣٠ يوماً</h3>
            <p className="text-white/70 text-sm mb-5">بدون بطاقة ائتمان، بدون التزام</p>
            <a
              href="https://app.getvom.com/register"
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-black px-8 py-3.5 rounded-xl shadow-xl shadow-orange/40 transition-all hover:scale-105"
            >
              ابدأ الآن <ChevronLeft size={18} />
            </a>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-14">
            <h3 className="text-xl font-black text-gray-900 mb-6">أخبار ذات صلة</h3>
            <div className="grid sm:grid-cols-2 gap-5">
              {related.map((n) => (
                <Link
                  key={n.slug}
                  to={`/news/${n.slug}`}
                  className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:border-teal/20 transition-all"
                >
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${n.categoryColor}`}>
                    {n.category}
                  </span>
                  <h4 className="font-black text-gray-900 text-sm mt-3 mb-2 leading-snug hover:text-teal transition-colors">
                    {n.title}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Calendar size={11} />{n.date}</span>
                    <span className="flex items-center gap-1"><Clock size={11} />{n.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
