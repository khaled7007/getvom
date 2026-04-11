import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Check, X, ChevronDown } from 'lucide-react'

const sectors = [
  'مطاعم وكافيهات',
  'تجزئة عامة',
  'ملابس وأحذية',
  'تطبيقات ومتاجر إلكترونية',
  'أعمال خدمية عامة',
  'لوجستيات وشحن',
  'سياحة ووكالات سفر',
  'صالونات تجميل',
  'عطور ومستحضرات',
  'مكاتب قانونية واستشارات',
  'مقاولات وإنشاءات',
  'مكتبات وقرطاسية',
  'شركات استثمار',
  'مراكز صيانة سيارات',
  'معارض وفعاليات',
  'وكالات التسويق الرقمي',
  'أندية رياضية وصالات لياقة',
  'محلات طباعة',
  'مؤثرو السوشيال ميديا',
  'محلات الأزياء المتخصصة',
  'مراكز أنشطة الأطفال',
  'مراكز غسيل سيارات',
  'استوديوهات التصميم',
]

const features = [
  'محاسبة سحابية متكاملة',
  'فوترة إلكترونية متوافقة مع زاتكا',
  'تقارير مالية فورية',
  'إدارة المخزون والمبيعات',
  'دعم متعدد الفروع',
  '30 يوم تجربة مجانية بدون بطاقة',
]

function passwordStrength(password) {
  let score = 0
  if (password.length >= 8) score++
  if (/[A-Z]/.test(password)) score++
  if (/[0-9]/.test(password)) score++
  if (/[^A-Za-z0-9]/.test(password)) score++
  return score
}

const strengthLabel = ['', 'ضعيفة', 'مقبولة', 'جيدة', 'قوية']
const strengthColor = ['', 'bg-red-500', 'bg-orange-400', 'bg-yellow-400', 'bg-green-500']

export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    sector: '',
    password: '',
    confirmPassword: '',
    terms: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [sectorOpen, setSectorOpen] = useState(false)

  const strength = passwordStrength(form.password)

  function set(field, value) {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: null }))
  }

  function validate() {
    const e = {}
    if (!form.fullName.trim()) e.fullName = 'الاسم الكامل مطلوب'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'البريد الإلكتروني غير صحيح'
    if (!/^05[0-9]{8}$/.test(form.phone)) e.phone = 'رقم الجوال يجب أن يبدأ بـ 05 ويتكون من 10 أرقام'
    if (!form.businessName.trim()) e.businessName = 'اسم المنشأة مطلوب'
    if (!form.sector) e.sector = 'يرجى اختيار القطاع'
    if (form.password.length < 8) e.password = 'كلمة المرور يجب أن تكون 8 أحرف على الأقل'
    if (form.password !== form.confirmPassword) e.confirmPassword = 'كلمتا المرور غير متطابقتين'
    if (!form.terms) e.terms = 'يجب الموافقة على الشروط والأحكام'
    return e
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setLoading(true)
    try {
      // TODO: POST /api/auth/register
      // const res = await fetch('/api/auth/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     fullName: form.fullName,
      //     email: form.email,
      //     phone: form.phone,
      //     businessName: form.businessName,
      //     sector: form.sector,
      //     password: form.password,
      //   }),
      // })
      // const data = await res.json()
      // if (!res.ok) throw new Error(data.message)
      // navigate('/dashboard')
      await new Promise(r => setTimeout(r, 1200))
      navigate('/login')
    } catch {
      setErrors({ submit: 'حدث خطأ، يرجى المحاولة مجدداً' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex" dir="rtl">
      {/* Marketing Panel */}
      <div className="hidden lg:flex lg:w-5/12 xl:w-[45%] bg-gradient-to-br from-teal via-teal/90 to-teal/70 flex-col justify-between p-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-white/30 blur-3xl" />
          <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-white/20 blur-3xl" />
        </div>

        <Link to="/" className="relative z-10">
          <img src="/vom-logo.webp" alt="ڤوم" className="h-10 brightness-0 invert" />
        </Link>

        <div className="relative z-10">
          <h2 className="text-3xl font-black text-white mb-3 leading-tight">
            ابدأ رحلتك المالية<br />الذكية اليوم
          </h2>
          <p className="text-white/80 text-base mb-8">
            انضم لآلاف المنشآت السعودية التي تدير محاسبتها بثقة مع ڤوم
          </p>
          <ul className="space-y-3">
            {features.map(f => (
              <li key={f} className="flex items-center gap-3 text-white/90 text-sm">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-white" />
                </div>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <p className="relative z-10 text-white/50 text-xs">
          © {new Date().getFullYear()} ڤوم. جميع الحقوق محفوظة.
        </p>
      </div>

      {/* Form Panel */}
      <div className="flex-1 flex items-start justify-center overflow-y-auto bg-gray-50 py-10 px-4 sm:px-8">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <Link to="/" className="lg:hidden flex justify-center mb-8">
            <img src="/vom-logo.webp" alt="ڤوم" className="h-9" />
          </Link>

          <h1 className="text-2xl font-black text-gray-900 mb-1">إنشاء حساب جديد</h1>
          <p className="text-gray-500 text-sm mb-7">
            لديك حساب؟{' '}
            <Link to="/login" className="text-teal font-semibold hover:underline">
              سجّل الدخول
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <Field label="الاسم الكامل" error={errors.fullName}>
              <input
                type="text"
                placeholder="محمد العمري"
                value={form.fullName}
                onChange={e => set('fullName', e.target.value)}
                className={inputCls(errors.fullName)}
              />
            </Field>

            {/* Email */}
            <Field label="البريد الإلكتروني" error={errors.email}>
              <input
                type="email"
                placeholder="hello@business.com"
                value={form.email}
                onChange={e => set('email', e.target.value)}
                className={inputCls(errors.email)}
                dir="ltr"
              />
            </Field>

            {/* Phone */}
            <Field label="رقم الجوال" error={errors.phone}>
              <input
                type="tel"
                placeholder="05XXXXXXXX"
                value={form.phone}
                onChange={e => set('phone', e.target.value)}
                className={inputCls(errors.phone)}
                maxLength={10}
                dir="ltr"
              />
            </Field>

            {/* Business Name */}
            <Field label="اسم المنشأة" error={errors.businessName}>
              <input
                type="text"
                placeholder="شركة النجاح للتجارة"
                value={form.businessName}
                onChange={e => set('businessName', e.target.value)}
                className={inputCls(errors.businessName)}
              />
            </Field>

            {/* Sector */}
            <Field label="القطاع" error={errors.sector}>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setSectorOpen(!sectorOpen)}
                  className={`w-full text-right px-3.5 py-2.5 rounded-xl border text-sm flex items-center justify-between transition-colors ${
                    errors.sector
                      ? 'border-red-400 bg-red-50'
                      : sectorOpen
                      ? 'border-teal ring-2 ring-teal/20 bg-white'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  } ${!form.sector ? 'text-gray-400' : 'text-gray-900'}`}
                >
                  {form.sector || 'اختر القطاع الذي تعمل فيه'}
                  <ChevronDown size={16} className={`text-gray-400 transition-transform ${sectorOpen ? 'rotate-180' : ''}`} />
                </button>
                {sectorOpen && (
                  <div className="absolute top-full right-0 left-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl z-20 max-h-52 overflow-y-auto">
                    {sectors.map(s => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => { set('sector', s); setSectorOpen(false) }}
                        className={`w-full text-right px-4 py-2.5 text-sm hover:bg-teal/5 transition-colors ${
                          form.sector === s ? 'text-teal font-semibold bg-teal/5' : 'text-gray-700'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </Field>

            {/* Password */}
            <Field label="كلمة المرور" error={errors.password}>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="8 أحرف على الأقل"
                  value={form.password}
                  onChange={e => set('password', e.target.value)}
                  className={`${inputCls(errors.password)} pl-10`}
                  dir="ltr"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {form.password && (
                <div className="mt-1.5">
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4].map(i => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-colors ${
                          i <= strength ? strengthColor[strength] : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">
                    قوة كلمة المرور: <span className={strength >= 3 ? 'text-green-600' : 'text-orange-500'}>{strengthLabel[strength]}</span>
                  </p>
                </div>
              )}
            </Field>

            {/* Confirm Password */}
            <Field label="تأكيد كلمة المرور" error={errors.confirmPassword}>
              <div className="relative">
                <input
                  type={showConfirm ? 'text' : 'password'}
                  placeholder="أعد كتابة كلمة المرور"
                  value={form.confirmPassword}
                  onChange={e => set('confirmPassword', e.target.value)}
                  className={`${inputCls(errors.confirmPassword)} pl-10`}
                  dir="ltr"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
                {form.confirmPassword && form.password === form.confirmPassword && (
                  <div className="absolute left-9 top-1/2 -translate-y-1/2 text-green-500">
                    <Check size={14} />
                  </div>
                )}
              </div>
            </Field>

            {/* Terms */}
            <div>
              <label className="flex items-start gap-2.5 cursor-pointer group">
                <div
                  onClick={() => set('terms', !form.terms)}
                  className={`mt-0.5 w-4 h-4 rounded flex items-center justify-center flex-shrink-0 border transition-colors cursor-pointer ${
                    form.terms ? 'bg-teal border-teal' : 'border-gray-300 group-hover:border-teal'
                  }`}
                >
                  {form.terms && <Check size={10} className="text-white" />}
                </div>
                <span className="text-sm text-gray-600">
                  أوافق على{' '}
                  <Link to="/terms" className="text-teal hover:underline">الشروط والأحكام</Link>
                  {' '}و{' '}
                  <Link to="/privacy" className="text-teal hover:underline">سياسة الخصوصية</Link>
                </span>
              </label>
              {errors.terms && <p className="text-xs text-red-500 mt-1">{errors.terms}</p>}
            </div>

            {errors.submit && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600">
                {errors.submit}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange hover:bg-orange-dark text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-orange/30 disabled:opacity-60 disabled:cursor-not-allowed text-sm"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  جاري إنشاء الحساب...
                </span>
              ) : (
                'إنشاء الحساب مجاناً'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">{label}</label>
      {children}
      {error && (
        <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
          <X size={12} /> {error}
        </p>
      )}
    </div>
  )
}

function inputCls(error) {
  return `w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none transition-colors ${
    error
      ? 'border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200'
      : 'border-gray-200 bg-white focus:border-teal focus:ring-2 focus:ring-teal/20'
  }`
}
