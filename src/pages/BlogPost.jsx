import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Calendar, Clock, ChevronLeft, ArrowRight } from 'lucide-react'

const posts = [
  {
    slug: 'ikhtiar-barnmaj-mohasaba',
    id: 1,
    category: 'محاسبة',
    categoryColor: 'bg-teal/10 text-teal',
    title: 'كيف تختار برنامج محاسبة مناسب لنشاطك التجاري؟',
    excerpt: 'الاختيار الصحيح لبرنامج المحاسبة يوفّر عليك ساعات من العمل اليدوي ويضمن دقة بياناتك المالية. إليك المعايير الأساسية التي يجب مراعاتها.',
    date: '١٠ أبريل ٢٠٢٥',
    readTime: '٥ دقائق',
    content: [
      {
        type: 'paragraph',
        text: 'اختيار برنامج المحاسبة المناسب لنشاطك التجاري ليس قراراً بسيطاً — فهو يؤثر على كفاءة عملياتك اليومية، ودقة تقاريرك المالية، ومدى امتثالك للأنظمة الضريبية. في هذا المقال، نرشدك خطوة بخطوة نحو الاختيار الأمثل.',
      },
      {
        type: 'heading',
        text: '١. حدّد احتياجاتك أولاً',
      },
      {
        type: 'paragraph',
        text: 'قبل البحث في أي برنامج، اسأل نفسك: ما هو حجم نشاطك؟ هل تحتاج إلى إدارة مخزون؟ هل لديك فروع متعددة؟ كم عدد الفواتير الشهرية؟ هذه الأسئلة ستحدد الميزات الجوهرية التي تحتاجها.',
      },
      {
        type: 'heading',
        text: '٢. الامتثال لمتطلبات زاتكا',
      },
      {
        type: 'paragraph',
        text: 'في المملكة العربية السعودية، يجب أن يكون البرنامج متوافقاً مع متطلبات هيئة الزكاة والضريبة والجمارك (زاتكا)، خاصةً فيما يتعلق بالفوترة الإلكترونية بمرحلتيها. تأكد أن البرنامج معتمد رسمياً من الهيئة ويدعم إصدار الفواتير بصيغة XML وإرسالها إلى منصة فاتورة.',
      },
      {
        type: 'heading',
        text: '٣. سهولة الاستخدام',
      },
      {
        type: 'paragraph',
        text: 'برنامج المحاسبة يجب أن يوفّر وقتك لا أن يضيعه. ابحث عن واجهة سهلة وبسيطة باللغة العربية، مع دعم فني متاح بالعربي. كثير من البرامج العالمية تكون رائعة من الناحية التقنية، لكنها صعبة الاستخدام لمن لا يتحدث الإنجليزية.',
      },
      {
        type: 'heading',
        text: '٤. التوافق مع قطاعك',
      },
      {
        type: 'paragraph',
        text: 'ليست كل برامج المحاسبة متساوية لجميع القطاعات. مطعم يحتاج إلى ربط مع نقطة البيع وتتبع تكلفة البضاعة المباعة، بينما شركة مقاولات تحتاج إلى إدارة المشاريع وتتبع التكاليف لكل مشروع. اختر برنامجاً يفهم طبيعة نشاطك.',
      },
      {
        type: 'heading',
        text: '٥. السعر مقابل القيمة',
      },
      {
        type: 'paragraph',
        text: 'لا تختار الأرخص بالضرورة ولا الأغلى. احسب تكلفة البرنامج مقارنةً بالوقت الذي ستوفره والأخطاء التي ستتجنبها. برنامج محاسبة جيد يمكن أن يعوّض تكلفته خلال أشهر قليلة فقط.',
      },
      {
        type: 'highlight',
        text: 'نصيحة: جرّب نسخة تجريبية مجانية قبل الالتزام باشتراك. معظم البرامج الجيدة توفر فترة تجربة مجانية من 14 إلى 30 يوماً.',
      },
      {
        type: 'heading',
        text: 'الخلاصة',
      },
      {
        type: 'paragraph',
        text: 'اختيار برنامج المحاسبة الصحيح قرار استراتيجي. خذ وقتك في التقييم، وتذكر أن الأفضل هو الذي يناسب نشاطك تحديداً ويساعدك على معرفة أرباحك بوضوح في أي لحظة.',
      },
    ],
  },
  {
    slug: 'einvoicing-phase-2',
    id: 2,
    category: 'زاتكا',
    categoryColor: 'bg-orange/10 text-orange',
    title: 'الفوترة الإلكترونية المرحلة الثانية: كل ما تحتاج معرفته',
    excerpt: 'المرحلة الثانية من الفوترة الإلكترونية (ربط المنظومة) باتت إلزامية. تعرّف على المتطلبات وكيف يساعدك ڤوم في الامتثال التام.',
    date: '٥ أبريل ٢٠٢٥',
    readTime: '٧ دقائق',
    content: [
      {
        type: 'paragraph',
        text: 'أعلنت هيئة الزكاة والضريبة والجمارك عن تطبيق المرحلة الثانية من الفوترة الإلكترونية (ربط المنظومة وتكاملها) بشكل تدريجي بدءاً من يناير ٢٠٢٣. هذه المرحلة أكثر تعقيداً من الأولى وتتطلب تكاملاً مباشراً مع منصة فاتورة.',
      },
      {
        type: 'heading',
        text: 'ما الفرق بين المرحلتين؟',
      },
      {
        type: 'paragraph',
        text: 'المرحلة الأولى (ديسمبر ٢٠٢١): إصدار فواتير إلكترونية بصيغة XML أو PDF/A-3 مع QR Code، وحفظها محلياً. المرحلة الثانية: ربط النظام مباشرة مع منصة فاتورة التابعة لزاتكا، وإرسال كل فاتورة للمنصة والحصول على اعتمادها في الوقت الفعلي.',
      },
      {
        type: 'heading',
        text: 'متطلبات المرحلة الثانية',
      },
      {
        type: 'paragraph',
        text: 'يجب أن يتضمن نظام الفوترة: UUID فريد لكل فاتورة، توقيع رقمي معتمد، ربط API مع منصة فاتورة، إرسال الفواتير للمنصة والحصول على الختم الإلكتروني قبل تسليمها للعميل.',
      },
      {
        type: 'highlight',
        text: 'مهم: المنشآت التي تجاوزت إيراداتها ٣ مليارات ريال بدأ تطبيق المرحلة الثانية عليها من يناير ٢٠٢٣، والتطبيق يتوسع تدريجياً ليشمل جميع المنشآت.',
      },
      {
        type: 'heading',
        text: 'العقوبات على عدم الامتثال',
      },
      {
        type: 'paragraph',
        text: 'يمكن أن تصل الغرامات على عدم إصدار فواتير إلكترونية إلى ٥٠٠٠ ريال عن كل مخالفة. عدم الامتثال قد يؤثر أيضاً على تسجيلك في ضريبة القيمة المضافة وعملياتك التجارية.',
      },
      {
        type: 'heading',
        text: 'كيف يساعدك ڤوم؟',
      },
      {
        type: 'paragraph',
        text: 'ڤوم متوافق تماماً مع متطلبات المرحلتين ومعتمد من هيئة زاتكا. يتولى النظام إنشاء الفواتير بالصيغة الصحيحة، التوقيع الرقمي، وإرسالها لمنصة فاتورة تلقائياً — كل هذا بنقرة واحدة دون أي تدخل تقني منك.',
      },
    ],
  },
  {
    slug: 'akhta-mohasabiya-mataam',
    id: 3,
    category: 'نصائح',
    categoryColor: 'bg-blue-50 text-blue-600',
    title: '٥ أخطاء محاسبية شائعة يقع فيها أصحاب المطاعم',
    excerpt: 'من عدم فصل الحسابات الشخصية عن التجارية، إلى إهمال تتبع تكلفة البضاعة المباعة — تعرف على أبرز الأخطاء وكيف تتجنبها.',
    date: '١ أبريل ٢٠٢٥',
    readTime: '٤ دقائق',
    content: [
      {
        type: 'paragraph',
        text: 'قطاع المطاعم من أكثر القطاعات التي تشهد أخطاءً محاسبية شائعة — بسبب طبيعة العمليات اليومية المتسارعة والتعامل الكثيف بالنقد. إليك أبرز الأخطاء التي يجب تجنبها.',
      },
      {
        type: 'heading',
        text: 'الخطأ الأول: خلط الحسابات الشخصية مع التجارية',
      },
      {
        type: 'paragraph',
        text: 'من أشيع الأخطاء أن يستخدم صاحب المطعم حساب الشركة لمصروفاته الشخصية أو العكس. هذا يشوّه الأرقام الحقيقية ويجعل من المستحيل معرفة الربح الفعلي. الحل: افتح حساباً مصرفياً منفصلاً تماماً للنشاط التجاري.',
      },
      {
        type: 'heading',
        text: 'الخطأ الثاني: إهمال تكلفة البضاعة المباعة (COGS)',
      },
      {
        type: 'paragraph',
        text: 'كثير من أصحاب المطاعم يحسبون إيراداتهم دون طرح تكلفة المواد الخام. تكلفة البضاعة المباعة في المطاعم تتراوح عادةً بين ٢٥٪ و٣٥٪ من الإيرادات. إهمال هذا الرقم يعطيك صورة وردية كاذبة عن الربحية.',
      },
      {
        type: 'heading',
        text: 'الخطأ الثالث: عدم تتبع الهدر والتلف',
      },
      {
        type: 'paragraph',
        text: 'الهدر الغذائي والتلف يمثلان تكلفة حقيقية يجب تسجيلها. المطاعم التي لا تتتبع هذه الأرقام لا تعرف أين تذهب أموالها. حدّد نسبة هدر مقبولة واتخذ إجراءات حين تتجاوزها.',
      },
      {
        type: 'heading',
        text: 'الخطأ الرابع: الاعتماد على النقد دون توثيق',
      },
      {
        type: 'paragraph',
        text: 'المدفوعات النقدية يجب تسجيلها يومياً وتوثيقها بالكامل. عدم مطابقة الصندوق النقدي يومياً يُصعّب اكتشاف الفجوات في وقت مبكر ويفتح الباب للاختلاسات.',
      },
      {
        type: 'heading',
        text: 'الخطأ الخامس: تأجيل التسوية المحاسبية لآخر السنة',
      },
      {
        type: 'paragraph',
        text: 'المراجعة المحاسبية يجب أن تكون شهرية على الأقل، لا سنوية. اكتشاف الأخطاء والمشكلات مبكراً يوفّر الكثير من الوقت والمال. برنامج المحاسبة الجيد يعطيك تقارير فورية دون جهد.',
      },
      {
        type: 'highlight',
        text: 'تذكر: الربحية الحقيقية = الإيرادات - تكلفة البضاعة - رواتب الموظفين - الإيجار - فواتير الخدمات - الهدر - الضرائب. لا تكتفِ بمتابعة الإيرادات وحدها.',
      },
    ],
  },
  {
    slug: 'hesabat-salon-tajmil',
    id: 4,
    category: 'قطاعات',
    categoryColor: 'bg-purple-50 text-purple-600',
    title: 'إدارة حسابات صالون التجميل: دليل شامل لعام ٢٠٢٥',
    excerpt: 'صالونات التجميل لها طبيعة مالية خاصة — اشتراكات، باقات، مخزون. إليك كيف تديرها بشكل احترافي مع ڤوم.',
    date: '٢٨ مارس ٢٠٢٥',
    readTime: '٦ دقائق',
    content: [
      {
        type: 'paragraph',
        text: 'صالونات التجميل تعمل بنموذج مالي مختلف عن كثير من القطاعات — خليط من الخدمات الفردية، الاشتراكات الشهرية، الباقات المجمّعة، ومبيعات منتجات العناية. هذا التنوع يجعل إدارة الحسابات أكثر تعقيداً إذا لم يكن لديك النظام الصحيح.',
      },
      {
        type: 'heading',
        text: 'هيكل إيرادات صالون التجميل',
      },
      {
        type: 'paragraph',
        text: 'الإيرادات في الصالون عادةً تنقسم إلى: خدمات شعر (قص، صبغ، علاج)، خدمات عناية بالبشرة والأظافر، باقات العروس، اشتراكات شهرية، ومبيعات منتجات التجميل. كل فئة لها هامش ربح مختلف ويجب تتبعها منفصلة.',
      },
      {
        type: 'heading',
        text: 'التحديات المحاسبية الخاصة بالصالونات',
      },
      {
        type: 'paragraph',
        text: 'أبرز التحديات: تتبع حصص المصففين (عمولات على الخدمات)، إدارة مخزون منتجات التجميل مع تواريخ الصلاحية، محاسبة الاشتراكات الشهرية (إيراد مؤجل)، والعروض الترويجية.',
      },
      {
        type: 'heading',
        text: 'إدارة الاشتراكات والباقات',
      },
      {
        type: 'paragraph',
        text: 'عندما تبيع اشتراكاً شهرياً، المبلغ المستلم ليس إيراداً كاملاً فوراً — يُعترف به تدريجياً مع تقديم الخدمات. ڤوم يتعامل مع هذا النوع من الإيرادات تلقائياً.',
      },
      {
        type: 'heading',
        text: 'كيف يساعدك ڤوم بالتحديد',
      },
      {
        type: 'paragraph',
        text: 'مع ڤوم يمكنك: إصدار فواتير للعملاء فوراً، تتبع المخزون بمنتجاتك، تسجيل عمولات المصففين، إصدار تقارير المبيعات اليومية والشهرية، والامتثال لمتطلبات زاتكا — كل هذا من مكان واحد.',
      },
      {
        type: 'highlight',
        text: 'نصيحة: احرص على مطابقة مبيعات كل مصفف مع مدفوعاته أسبوعياً. هذا يساعدك على قياس أداء كل موظف ويمنع أي تسريب في الإيرادات.',
      },
    ],
  },
  {
    slug: 'daam-zatca-2500',
    id: 5,
    category: 'زاتكا',
    categoryColor: 'bg-orange/10 text-orange',
    title: 'دعم الهيئة للفوترة الإلكترونية: كيف تحصل على ٢٥٠٠ ريال؟',
    excerpt: 'هيئة الزكاة والضريبة والجمارك تدعم المنشآت الصغيرة بمبلغ ٢٥٠٠ ريال لتبني الفوترة الإلكترونية. تعرف على الشروط وخطوات التقديم.',
    date: '٢٠ مارس ٢٠٢٥',
    readTime: '٣ دقائق',
    content: [
      {
        type: 'paragraph',
        text: 'أطلقت هيئة الزكاة والضريبة والجمارك برنامجاً لدعم المنشآت الصغيرة والمتوسطة في تبني الفوترة الإلكترونية، بمبلغ يصل إلى ٢٥٠٠ ريال سعودي. إليك كل ما تحتاج معرفته.',
      },
      {
        type: 'heading',
        text: 'من يستحق الدعم؟',
      },
      {
        type: 'paragraph',
        text: 'يشترط للاستفادة من الدعم: أن تكون المنشأة خاضعة لأنظمة الفوترة الإلكترونية، وأن تكون إيراداتها السنوية لا تتجاوز ٣ مليون ريال، وأن تكون مسجلة في ضريبة القيمة المضافة ومقيمة في المملكة، وألا تكون استفادت من الدعم سابقاً.',
      },
      {
        type: 'heading',
        text: 'خطوات التقديم',
      },
      {
        type: 'paragraph',
        text: '١. تأكد من استيفاء الشروط المذكورة أعلاه. ٢. اختر حلاً معتمداً من هيئة زاتكا (مثل ڤوم). ٣. قدّم طلب الدعم عبر بوابة هيئة الزكاة الإلكترونية. ٤. أرفق الوثائق المطلوبة (سجل تجاري، شهادة ضريبية). ٥. انتظر موافقة الهيئة والاستلام.',
      },
      {
        type: 'highlight',
        text: 'الدعم يُقدَّم مباشرةً لمزود الحل البرمجي لتغطية تكلفة الاشتراك. يعني عملياً أنك ستحصل على ڤوم مجاناً أو بسعر مخفض بشكل كبير.',
      },
      {
        type: 'heading',
        text: 'كيف نساعدك في ڤوم؟',
      },
      {
        type: 'paragraph',
        text: 'فريق ڤوم يساعدك في إتمام إجراءات الدعم من البداية للنهاية. تواصل معنا وسنوجّهك خطوة بخطوة حتى تحصل على دعم الهيئة وتبدأ رحلتك مع الفوترة الإلكترونية المعتمدة.',
      },
    ],
  },
  {
    slug: 'dakhil-muqawilin',
    id: 6,
    category: 'محاسبة',
    categoryColor: 'bg-teal/10 text-teal',
    title: 'قائمة الدخل للمقاولين: كيف تحسب أرباحك الحقيقية؟',
    excerpt: 'المقاولات قطاع معقد مالياً — مشاريع متعددة، مدفوعات متأخرة، تكاليف غير متوقعة. إليك نموذج قائمة دخل مناسب.',
    date: '١٥ مارس ٢٠٢٥',
    readTime: '٨ دقائق',
    content: [
      {
        type: 'paragraph',
        text: 'شركات المقاولات تواجه تحدياً فريداً في قياس الربحية — فالمشروع قد يستمر أشهراً أو سنوات، والمدفوعات تأتي على مراحل، والتكاليف تتفاوت بشكل كبير. قائمة الدخل الصحيحة هي مفتاح معرفة الوضع المالي الحقيقي.',
      },
      {
        type: 'heading',
        text: 'هيكل إيرادات شركة المقاولات',
      },
      {
        type: 'paragraph',
        text: 'الإيرادات في المقاولات تُعترف بها وفق طريقة نسبة الإتمام (Percentage of Completion). يعني أنك لا تسجّل الإيراد كله عند توقيع العقد، بل تدريجياً مع تقدم العمل. هذه الطريقة تعطي صورة أدق عن الوضع المالي الفعلي.',
      },
      {
        type: 'heading',
        text: 'التكاليف التي يجب تتبعها',
      },
      {
        type: 'paragraph',
        text: 'تكاليف المواد والخامات، رواتب العمالة المباشرة، إيجار المعدات والآليات، المقاولون من الباطن، تكاليف المشروع الإدارية، والمصاريف العامة (تأمينات، رسوم، خدمات).',
      },
      {
        type: 'heading',
        text: 'نموذج قائمة دخل مبسط للمقاولات',
      },
      {
        type: 'paragraph',
        text: 'الإيرادات المعترف بها (حسب نسبة الإتمام): ١,٢٠٠,٠٠٠ ريال. ناقص: تكلفة المشاريع المنفذة: ٨٠٠,٠٠٠ ريال. إجمالي الربح: ٤٠٠,٠٠٠ ريال. ناقص: مصاريف تشغيلية عامة: ١٥٠,٠٠٠ ريال. صافي الربح قبل الضريبة: ٢٥٠,٠٠٠ ريال.',
      },
      {
        type: 'highlight',
        text: 'تحذير: كثير من المقاولين يخلطون بين التدفق النقدي والربحية. استلامك لدفعة من العميل لا يعني أنك حققت ربحاً — الربح يُحدَّد بعد خصم جميع التكاليف المرتبطة بذلك الجزء من العمل.',
      },
      {
        type: 'heading',
        text: 'كيف يساعدك ڤوم؟',
      },
      {
        type: 'paragraph',
        text: 'ڤوم يتيح لك تتبع تكاليف كل مشروع على حدة، إصدار فواتير مرحلية، وإنشاء قوائم دخل تفصيلية لكل مشروع وللشركة ككل. كل ذلك دون الحاجة إلى محاسب متخصص يومياً.',
      },
    ],
  },
]

export function getAllBlogPosts() {
  return posts
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  useEffect(() => {
    if (post) document.title = `${post.title} — مدونة ڤوم`
  }, [post])

  if (!post) return <Navigate to="/blog" replace />

  const related = posts.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="hero-gradient pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors">
            <ArrowRight size={16} />
            العودة للمدونة
          </Link>
          <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${post.categoryColor}`}>
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-5 text-white/60 text-sm">
            <span className="flex items-center gap-1.5"><Calendar size={14} />{post.date}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} />{post.readTime} قراءة</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <div className="prose-article space-y-6">
          {post.content.map((block, i) => {
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

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-14">
            <h3 className="text-xl font-black text-gray-900 mb-6">مقالات ذات صلة</h3>
            <div className="grid sm:grid-cols-2 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:border-teal/20 transition-all"
                >
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${p.categoryColor}`}>
                    {p.category}
                  </span>
                  <h4 className="font-black text-gray-900 text-sm mt-3 mb-2 leading-snug hover:text-teal transition-colors">
                    {p.title}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Calendar size={11} />{p.date}</span>
                    <span className="flex items-center gap-1"><Clock size={11} />{p.readTime}</span>
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
