import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, ChevronLeft, Code2, Zap, Lock, BookOpen, Terminal } from 'lucide-react'

const endpoints = [
  { method: 'GET',    path: '/invoices',         desc: 'جلب قائمة الفواتير' },
  { method: 'POST',   path: '/invoices',         desc: 'إنشاء فاتورة جديدة' },
  { method: 'GET',    path: '/invoices/{id}',    desc: 'جلب فاتورة محددة' },
  { method: 'POST',   path: '/invoices/{id}/cancel', desc: 'إلغاء فاتورة' },
  { method: 'GET',    path: '/customers',        desc: 'جلب قائمة العملاء' },
  { method: 'POST',   path: '/customers',        desc: 'إضافة عميل جديد' },
  { method: 'GET',    path: '/reports/income',   desc: 'تقرير قائمة الدخل' },
  { method: 'GET',    path: '/expenses',         desc: 'جلب المصروفات' },
]

const methodColor = {
  GET: 'bg-green-100 text-green-700',
  POST: 'bg-blue-100 text-blue-700',
  PUT: 'bg-yellow-100 text-yellow-700',
  DELETE: 'bg-red-100 text-red-700',
}

const features = [
  { icon: <Zap size={20} className="text-teal" />, title: 'RESTful API', desc: 'واجهة برمجية موحدة وسهلة التكامل مع أي نظام' },
  { icon: <Lock size={20} className="text-teal" />, title: 'OAuth 2.0', desc: 'تحقق آمن باستخدام معايير الصناعة' },
  { icon: <BookOpen size={20} className="text-teal" />, title: 'توثيق كامل', desc: 'وثائق تفصيلية مع أمثلة لكل endpoint' },
  { icon: <Terminal size={20} className="text-teal" />, title: 'Sandbox بيئة اختبار', desc: 'جرّب الـ API بأمان قبل التشغيل الفعلي' },
]

const codeExample = `// مثال: إنشاء فاتورة
const response = await fetch('https://api.getvom.com/v1/invoices', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    customer_id: 'cust_123',
    items: [
      { description: 'خدمة استشارية', quantity: 1, price: 500 }
    ],
    vat_rate: 0.15,
    issue_date: '2025-04-10',
  }),
})

const invoice = await response.json()
console.log(invoice.id) // inv_abc456`

export default function ApiPage() {
  useEffect(() => { document.title = 'API ڤوم — ربط أنظمتك بمحاسبتك' }, [])
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="hero-gradient pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Code2 size={32} className="text-white" />
          </div>
          <span className="inline-block bg-white/10 border border-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            للمطورين
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            ربط عبر API
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            ادمج ڤوم مع أنظمتك الحالية بسهولة. واجهة برمجية RESTful كاملة لإدارة الفواتير والعملاء والتقارير المالية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://developers.getvom.com"
              className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white font-black px-8 py-4 rounded-2xl shadow-xl shadow-orange/40 transition-all hover:scale-105"
            >
              استعرض التوثيق <ChevronLeft size={20} />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl transition-all"
            >
              تحدث مع فريقنا
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {features.map((f, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm text-center">
              <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                {f.icon}
              </div>
              <h3 className="font-black text-gray-900 mb-1 text-sm">{f.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Code example + endpoints */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">

          {/* Code */}
          <div>
            <h2 className="text-xl font-black text-gray-900 mb-4">مثال سريع</h2>
            <div className="bg-gray-950 rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-gray-500 text-xs mr-2 font-mono">create-invoice.js</span>
              </div>
              <pre className="p-5 text-xs text-green-400 font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap" dir="ltr">
                {codeExample}
              </pre>
            </div>
          </div>

          {/* Endpoints */}
          <div>
            <h2 className="text-xl font-black text-gray-900 mb-4">أبرز الـ Endpoints</h2>
            <div className="space-y-2">
              {endpoints.map((e, i) => (
                <div key={i} className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3">
                  <span className={`text-xs font-black px-2 py-0.5 rounded-lg min-w-[44px] text-center font-mono ${methodColor[e.method]}`}>
                    {e.method}
                  </span>
                  <code className="text-gray-600 text-xs font-mono flex-1" dir="ltr">{e.path}</code>
                  <span className="text-gray-400 text-xs">{e.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Plans */}
        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-16">
          <h2 className="text-xl font-black text-gray-900 mb-6 text-center">الـ API متوفر في</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { plan: 'خطة المؤسسي', features: ['طلبات غير محدودة', 'دعم فني مخصص', 'Webhook events', 'بيئة Sandbox'] },
              { plan: 'خطة المحترف', features: ['١٠,٠٠٠ طلب/شهر', 'دعم عبر الإيميل', 'Webhook محدود', 'بيئة Sandbox'] },
            ].map((p, i) => (
              <div key={i} className={`rounded-2xl p-6 border ${i === 0 ? 'bg-teal/5 border-teal/15' : 'bg-white border-gray-100'}`}>
                <h3 className="font-black text-gray-900 mb-4">{p.plan}</h3>
                <ul className="space-y-2">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={14} className="text-teal" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/pricing" className="text-teal font-bold text-sm hover:underline flex items-center gap-1 justify-center">
              عرض جميع الخطط <ChevronLeft size={14} />
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="hero-gradient rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          <div className="relative">
            <h2 className="text-2xl font-black text-white mb-3">جاهز تبدأ التكامل؟</h2>
            <p className="text-white/70 mb-6">API Key جاهز فور تفعيل حسابك</p>
            <Link
              to="/register"
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-black px-10 py-4 rounded-2xl shadow-xl shadow-orange/40 transition-all hover:scale-105"
            >
              احصل على API Key <ChevronLeft size={20} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
