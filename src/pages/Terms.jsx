import { FileText, AlertCircle, CreditCard, ShieldOff, Scale, Phone } from 'lucide-react'

const sections = [
  {
    icon: <FileText size={22} className="text-teal" />,
    title: 'قبول الشروط',
    content: [
      'باستخدامك لبرنامج ڤوم أو التسجيل فيه، فأنت توافق على الالتزام بهذه الشروط والأحكام بالكامل.',
      'إذا كنت تستخدم ڤوم بالنيابة عن شركة أو مؤسسة، فأنت تؤكد أنك مخوّل للموافقة على هذه الشروط نيابةً عنها.',
      'يحق لنا تعديل هذه الشروط في أي وقت مع إشعارك المسبق عبر البريد الإلكتروني.',
      'استمرارك في استخدام الخدمة بعد سريان التعديلات يُعدّ قبولاً ضمنياً للشروط الجديدة.',
    ],
  },
  {
    icon: <CreditCard size={22} className="text-teal" />,
    title: 'الاشتراك والدفع',
    content: [
      'تُقدَّم الخدمة بشكل اشتراك شهري أو سنوي، وتُجدَّد تلقائياً ما لم يتم الإلغاء قبل موعد التجديد.',
      'تجربة مجانية لمدة 30 يوماً لجميع الخطط الجديدة دون الحاجة لبطاقة ائتمان.',
      'يمكن إلغاء الاشتراك في أي وقت دون رسوم إضافية، وتبقى الخدمة فعّالة حتى نهاية الفترة المدفوعة.',
      'لا يحق استرداد المبالغ المدفوعة عن الفترات المنقضية إلا في حالات استثنائية وفق تقدير الشركة.',
      'الأسعار قابلة للتغيير مع إشعار مسبق لا يقل عن 30 يوماً.',
    ],
  },
  {
    icon: <AlertCircle size={22} className="text-teal" />,
    title: 'الاستخدام المقبول',
    content: [
      'تلتزم باستخدام ڤوم للأغراض التجارية المشروعة فقط.',
      'يُحظر استخدام الخدمة لأي نشاط غير قانوني أو مخالف للأنظمة السعودية.',
      'أنت مسؤول عن دقة البيانات التي تُدخلها في النظام.',
      'يُحظر محاولة اختراق النظام أو الوصول إلى بيانات مستخدمين آخرين.',
      'يُحظر إعادة بيع الخدمة أو استخدامها لبناء منتج منافس دون إذن كتابي مسبق.',
    ],
  },
  {
    icon: <ShieldOff size={22} className="text-teal" />,
    title: 'حدود المسؤولية',
    content: [
      'تُقدَّم الخدمة "كما هي" دون ضمانات من أي نوع فيما يتعلق بالاستمرارية المطلقة.',
      'لا تتحمل شركة ڤوم مسؤولية الأخطاء المحاسبية الناجمة عن إدخال بيانات خاطئة من قِبل المستخدم.',
      'المسؤولية القصوى لشركة ڤوم محدودة بمبلغ ما دفعته في الشهر السابق لحدوث النزاع.',
      'لا نضمن التوافق مع جميع الأجهزة أو المتصفحات القديمة.',
      'الامتثال الضريبي مسؤولية المستخدم رغم أن ڤوم يُيسّر العملية.',
    ],
  },
  {
    icon: <Scale size={22} className="text-teal" />,
    title: 'الملكية الفكرية',
    content: [
      'جميع حقوق الملكية الفكرية لبرنامج ڤوم، بما فيها الكود والتصميم والعلامة التجارية، محفوظة لشركة ڤوم.',
      'يُمنح المستخدمون ترخيصاً محدوداً وغير قابل للنقل لاستخدام الخدمة وفق هذه الشروط.',
      'البيانات التي تُدخلها في النظام تبقى ملكاً لك وتستطيع تصديرها في أي وقت.',
      'يحق لنا استخدام اسم شركتك كمرجع تسويقي بعد الحصول على موافقتك.',
    ],
  },
]

export default function Terms() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="hero-gradient pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Scale size={32} className="text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            الشروط والأحكام
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            هذه الشروط تحكم استخدامك لبرنامج ڤوم. يرجى قراءتها بعناية قبل البدء.
          </p>
          <p className="text-white/50 text-sm mt-4">آخر تحديث: يناير 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">

        {/* Intro */}
        <div className="bg-orange/5 border border-orange/10 rounded-2xl p-6 mb-12 flex items-start gap-4">
          <AlertCircle size={22} className="text-orange flex-shrink-0 mt-0.5" />
          <p className="text-gray-700 leading-relaxed text-sm">
            تحكم هذه الشروط والأحكام العلاقة بين شركة ڤوم للبرمجيات ("الشركة") وبين المستخدمين ("العميل"). الاستمرار في استخدام الخدمة يُعدّ موافقةً صريحة على هذه الشروط.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((s, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center">
                  {s.icon}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-teal font-black text-sm opacity-60">0{i + 1}</span>
                  <h2 className="text-xl font-black text-gray-900">{s.title}</h2>
                </div>
              </div>
              <ul className="space-y-3">
                {s.content.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 flex-shrink-0" />
                    <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Governing law */}
        <div className="mt-8 bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
          <h2 className="text-xl font-black text-gray-900 mb-4">القانون الحاكم وتسوية النزاعات</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            تخضع هذه الشروط وتُفسَّر وفقاً للأنظمة والتشريعات المعمول بها في المملكة العربية السعودية.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            في حال نشوء أي نزاع، يُسعى أولاً لحله وديّاً خلال 30 يوماً من تاريخ الإشعار. في حال تعذّر ذلك، تختص المحاكم السعودية بالنظر في النزاع.
          </p>
        </div>

        {/* Contact */}
        <div className="mt-8 bg-gray-50 border border-gray-100 rounded-2xl p-7">
          <h2 className="text-xl font-black text-gray-900 mb-3">تواصل بشأن هذه الشروط</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            إذا كان لديك أي استفسار حول هذه الشروط أو تحتاج لتوضيح، نحن هنا للمساعدة:
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:legal@getvom.com" className="flex items-center gap-2 text-teal font-bold text-sm hover:underline">
              <FileText size={16} />
              legal@getvom.com
            </a>
            <a href="/contact" className="flex items-center gap-2 text-teal font-bold text-sm hover:underline">
              <Phone size={16} />
              صفحة تواصل معنا
            </a>
          </div>
        </div>

        <p className="text-gray-400 text-xs text-center mt-10">
          © 2025 ڤوم للبرمجيات. جميع الحقوق محفوظة.
        </p>
      </div>
    </div>
  )
}
