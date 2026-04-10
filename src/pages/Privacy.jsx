import { Shield, Lock, Eye, Database, UserCheck, RefreshCw } from 'lucide-react'

const sections = [
  {
    icon: <Database size={22} className="text-teal" />,
    title: 'البيانات التي نجمعها',
    content: [
      'بيانات الحساب: الاسم، البريد الإلكتروني، رقم الهاتف، واسم الشركة.',
      'البيانات المالية: الفواتير، المصاريف، الأرباح، وقيود المحاسبة التي تدخلها في النظام.',
      'بيانات الاستخدام: كيفية استخدامك للتطبيق، الصفحات التي تزورها، والميزات التي تستخدمها.',
      'بيانات الجهاز: نوع الجهاز، نظام التشغيل، وعنوان IP.',
    ],
  },
  {
    icon: <Eye size={22} className="text-teal" />,
    title: 'كيف نستخدم بياناتك',
    content: [
      'تقديم خدمات المحاسبة والفوترة الإلكترونية.',
      'إرسال التقارير والتنبيهات المتعلقة بحسابك.',
      'تحسين تجربة المستخدم وتطوير الخدمات.',
      'الامتثال لمتطلبات هيئة الزكاة والضريبة والجمارك (زاتكا).',
      'التواصل معك للرد على استفساراتك ودعمك.',
    ],
  },
  {
    icon: <Lock size={22} className="text-teal" />,
    title: 'كيف نحمي بياناتك',
    content: [
      'تشفير كامل للبيانات باستخدام معيار AES-256.',
      'خوادم آمنة مستضافة داخل المملكة العربية السعودية.',
      'نسخ احتياطية يومية لضمان عدم فقدان البيانات.',
      'مراجعات أمنية دورية من جهات خارجية مستقلة.',
      'تقييد الوصول الداخلي للبيانات على أساس مبدأ الحاجة للمعرفة.',
    ],
  },
  {
    icon: <UserCheck size={22} className="text-teal" />,
    title: 'حقوقك',
    content: [
      'الحق في الاطلاع على جميع بياناتك الشخصية المحفوظة لدينا.',
      'الحق في تصحيح أي بيانات غير دقيقة.',
      'الحق في حذف حسابك وجميع بياناتك نهائياً.',
      'الحق في تصدير بياناتك بصيغة قابلة للقراءة.',
      'الحق في الاعتراض على معالجة بياناتك لأغراض التسويق.',
    ],
  },
  {
    icon: <RefreshCw size={22} className="text-teal" />,
    title: 'مشاركة البيانات مع الأطراف الثالثة',
    content: [
      'لا نبيع بياناتك الشخصية لأي طرف ثالث تحت أي ظرف.',
      'نشارك البيانات فقط مع مزودي الخدمات الضروريين (مثل خدمات الدفع والاستضافة) وفق عقود صارمة.',
      'نُفصح عن البيانات للجهات الحكومية عند الطلب القانوني فقط.',
      'التكاملات مع أنظمة الطرف الثالث (مثل فودكس وزد) تعمل وفق سياسات الخصوصية الخاصة بكل منها.',
    ],
  },
]

export default function Privacy() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="hero-gradient pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield size={32} className="text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            سياسة الخصوصية
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            خصوصيتك تهمنا. هذه الصفحة توضح كيف نجمع بياناتك، نستخدمها، ونحمي أمانها.
          </p>
          <p className="text-white/50 text-sm mt-4">آخر تحديث: يناير 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">

        {/* Intro */}
        <div className="bg-teal/5 border border-teal/10 rounded-2xl p-6 mb-12">
          <p className="text-gray-700 leading-relaxed">
            تُطبَّق هذه السياسة على جميع منتجات وخدمات شركة ڤوم، بما فيها الموقع الإلكتروني وتطبيق الهاتف ولوحة التحكم. باستخدامك لخدماتنا، فأنت توافق على البنود الواردة في هذه السياسة.
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
                <h2 className="text-xl font-black text-gray-900">{s.title}</h2>
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

        {/* Cookies */}
        <div className="mt-8 bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
          <h2 className="text-xl font-black text-gray-900 mb-4">ملفات تعريف الارتباط (Cookies)</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            نستخدم ملفات الارتباط لتحسين تجربتك وتذكر تفضيلاتك. يمكنك التحكم في إعدادات ملفات الارتباط من متصفحك. إيقاف ملفات الارتباط قد يؤثر على بعض وظائف التطبيق.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            نستخدم أدوات تحليل الزوار (مثل Google Analytics) لفهم كيفية استخدام الموقع وتحسينه، وذلك بطريقة مجمّعة لا تحدد هويتك الشخصية.
          </p>
        </div>

        {/* Contact */}
        <div className="mt-8 bg-gray-50 border border-gray-100 rounded-2xl p-7">
          <h2 className="text-xl font-black text-gray-900 mb-3">تواصل معنا بشأن الخصوصية</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            إذا كان لديك أي استفسار أو طلب يتعلق بخصوصيتك أو بياناتك، يمكنك التواصل مع فريقنا:
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:privacy@getvom.com" className="flex items-center gap-2 text-teal font-bold text-sm hover:underline">
              <Lock size={16} />
              privacy@getvom.com
            </a>
          </div>
        </div>

        <p className="text-gray-400 text-xs text-center mt-10">
          تحتفظ شركة ڤوم بحق تعديل هذه السياسة في أي وقت. سيتم إشعارك بأي تغييرات جوهرية عبر البريد الإلكتروني أو عبر التطبيق.
        </p>
      </div>
    </div>
  )
}
