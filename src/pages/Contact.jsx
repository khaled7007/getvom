import { useState } from 'react'
import { Phone, Mail, MessageCircle, Clock, CheckCircle2, Send, MapPin } from 'lucide-react'

const channels = [
  {
    icon: <MessageCircle size={24} className="text-teal" />,
    title: 'واتساب',
    desc: 'أسرع طريقة للتواصل معنا',
    value: '966-XX-XXX-XXXX+',
    action: 'تواصل الآن',
    href: 'https://wa.me/966XXXXXXXXX',
    badge: 'متاح الآن',
    badgeColor: 'bg-green-100 text-green-700',
  },
  {
    icon: <Mail size={24} className="text-teal" />,
    title: 'البريد الإلكتروني',
    desc: 'للاستفسارات التفصيلية والمقترحات',
    value: 'hello@getvom.com',
    action: 'أرسل بريداً',
    href: 'mailto:hello@getvom.com',
    badge: 'رد خلال 24 ساعة',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    icon: <Phone size={24} className="text-teal" />,
    title: 'الهاتف',
    desc: 'للدعم الفوري وحل المشكلات العاجلة',
    value: '0800-XXX-XXXX',
    action: 'اتصل الآن',
    href: 'tel:0800XXXXXXX',
    badge: 'مجاناً من السعودية',
    badgeColor: 'bg-teal/10 text-teal',
  },
]

const faqs = [
  { q: 'كم تستغرق فترة الإعداد؟', a: 'تستغرق عملية الإعداد الأولي أقل من 30 دقيقة. فريق الدعم متاح لمساعدتك في كل خطوة.' },
  { q: 'هل البيانات آمنة؟', a: 'نعم، نستخدم تشفيراً بمعيار AES-256 وخوادم معتمدة داخل المملكة العربية السعودية.' },
  { q: 'هل يمكن التراجع عن الاشتراك؟', a: 'يمكنك إلغاء اشتراكك في أي وقت دون أي رسوم إضافية أو عقوبات.' },
  { q: 'هل يدعم ڤوم الفروع المتعددة؟', a: 'نعم، خطة المؤسسي تدعم عدداً غير محدود من الفروع مع تقارير موحدة.' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'الاسم مطلوب'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'بريد إلكتروني غير صحيح'
    if (!form.message.trim()) e.message = 'الرسالة مطلوبة'
    return e
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setSent(true)
  }

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="hero-gradient pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute top-10 right-14 opacity-60" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <line x1="2" y1="2" x2="34" y2="34" stroke="#FF7300" strokeWidth="5" strokeLinecap="round"/>
            <line x1="34" y1="2" x2="2" y2="34" stroke="#FF7300" strokeWidth="5" strokeLinecap="round"/>
          </svg>
          <svg className="absolute bottom-10 left-16 opacity-50" width="42" height="42" viewBox="0 0 42 42" fill="none">
            <line x1="0" y1="12" x2="42" y2="12" stroke="#E040A0" strokeWidth="4" strokeLinecap="round" transform="rotate(-35 21 21)"/>
            <line x1="0" y1="24" x2="42" y2="24" stroke="#E040A0" strokeWidth="4" strokeLinecap="round" transform="rotate(-35 21 21)"/>
          </svg>
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-white/10 border border-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-6">
            تواصل معنا
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            كيف نقدر
            <br />
            <span className="text-orange-light">نساعدك؟</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            فريق ڤوم جاهز للإجابة على جميع استفساراتك. نرد بسرعة وبالعربي.
          </p>
        </div>
      </div>

      {/* Hours banner */}
      <div className="bg-teal/5 border-b border-teal/10 py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
          <span className="flex items-center gap-2">
            <Clock size={16} className="text-teal" />
            أوقات الدعم: الأحد – الخميس، ٨ص – ١٢م
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-teal" />
            الرياض، المملكة العربية السعودية
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-green-600" />
            متوسط وقت الرد: أقل من ساعتين
          </span>
        </div>
      </div>

      {/* Channels */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {channels.map((c) => (
            <div key={c.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow text-center">
              <div className="w-14 h-14 bg-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                {c.icon}
              </div>
              <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${c.badgeColor}`}>{c.badge}</span>
              <h3 className="font-black text-gray-900 text-lg mb-1">{c.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{c.desc}</p>
              <p className="font-bold text-teal text-sm mb-4 dir-ltr" dir="ltr">{c.value}</p>
              <a
                href={c.href}
                className="inline-block bg-teal hover:bg-teal-dark text-white font-bold px-6 py-2.5 rounded-xl transition-all hover:scale-105 text-sm"
              >
                {c.action}
              </a>
            </div>
          ))}
        </div>

        {/* Contact form + FAQ */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-6">أرسل لنا رسالة</h2>
            {sent ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-black text-gray-900 mb-2">تم الإرسال!</h3>
                <p className="text-gray-500">شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">الاسم</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-sm outline-none transition-colors focus:border-teal focus:bg-white ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
                      placeholder="اسمك الكريم"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">رقم الهاتف</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none transition-colors focus:border-teal focus:bg-white"
                      placeholder="05X-XXX-XXXX"
                      dir="ltr"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">البريد الإلكتروني</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-sm outline-none transition-colors focus:border-teal focus:bg-white ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
                    placeholder="example@email.com"
                    dir="ltr"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">الموضوع</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none transition-colors focus:border-teal focus:bg-white"
                  >
                    <option value="">اختر الموضوع</option>
                    <option value="support">دعم تقني</option>
                    <option value="billing">الفوترة والاشتراك</option>
                    <option value="sales">استفسار مبيعات</option>
                    <option value="partnership">شراكة أو تكامل</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">الرسالة</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-sm outline-none transition-colors focus:border-teal focus:bg-white resize-none ${errors.message ? 'border-red-400' : 'border-gray-200'}`}
                    placeholder="كيف نقدر نساعدك؟"
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-teal hover:bg-teal-dark text-white font-black py-4 rounded-2xl transition-all hover:scale-[1.02] shadow-lg shadow-teal/30"
                >
                  إرسال الرسالة
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-6">أسئلة شائعة</h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details key={i} className="group bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-bold text-gray-900 text-sm select-none">
                    {f.q}
                    <span className="text-teal group-open:rotate-45 transition-transform duration-200 flex-shrink-0 mr-3 text-xl font-light">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="hero-gradient py-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '35px 35px' }} />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-black text-white mb-3">جرّب ڤوم مجاناً لمدة 30 يوم</h2>
          <p className="text-white/70 mb-6">بدون بطاقة ائتمان، بدون التزام</p>
          <a
            href="https://app.getvom.com/register"
            className="inline-block bg-orange hover:bg-orange-dark text-white font-black px-8 py-4 rounded-2xl shadow-xl shadow-orange/40 transition-all hover:scale-105"
          >
            ابدأ تجربتك المجانية
          </a>
        </div>
      </div>
    </div>
  )
}
