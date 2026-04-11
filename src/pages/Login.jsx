import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, X } from 'lucide-react'

const stats = [
  { value: '+5,000', label: 'منشأة تثق بنا' },
  { value: '99.9%', label: 'وقت التشغيل' },
  { value: '30', label: 'يوم مجاناً' },
]

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ identifier: '', password: '', remember: false })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  function set(field, value) {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: null }))
  }

  function validate() {
    const e = {}
    if (!form.identifier.trim()) e.identifier = 'البريد الإلكتروني أو رقم الجوال مطلوب'
    if (!form.password) e.password = 'كلمة المرور مطلوبة'
    return e
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setLoading(true)
    try {
      // TODO: POST /api/auth/login
      // const res = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     identifier: form.identifier,
      //     password: form.password,
      //     remember: form.remember,
      //   }),
      // })
      // const data = await res.json()
      // if (!res.ok) throw new Error(data.message)
      // localStorage.setItem('token', data.token)
      // navigate('/dashboard')
      await new Promise(r => setTimeout(r, 1000))
      navigate('/')
    } catch {
      setErrors({ submit: 'بيانات الدخول غير صحيحة، يرجى المحاولة مجدداً' })
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
            مرحباً بعودتك<br />إلى ڤوم
          </h2>
          <p className="text-white/80 text-base mb-10">
            منصة المحاسبة السحابية الأولى للمنشآت السعودية
          </p>
          <div className="grid grid-cols-3 gap-4">
            {stats.map(s => (
              <div key={s.label} className="bg-white/10 rounded-2xl p-4 text-center">
                <p className="text-2xl font-black text-white mb-0.5">{s.value}</p>
                <p className="text-xs text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="relative z-10 text-white/50 text-xs">
          © {new Date().getFullYear()} ڤوم. جميع الحقوق محفوظة.
        </p>
      </div>

      {/* Form Panel */}
      <div className="flex-1 flex items-center justify-center bg-gray-50 px-4 sm:px-8">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <Link to="/" className="lg:hidden flex justify-center mb-8">
            <img src="/vom-logo.webp" alt="ڤوم" className="h-9" />
          </Link>

          <h1 className="text-2xl font-black text-gray-900 mb-1">تسجيل الدخول</h1>
          <p className="text-gray-500 text-sm mb-8">
            ليس لديك حساب؟{' '}
            <Link to="/register" className="text-teal font-semibold hover:underline">
              جرّب مجاناً 30 يوم
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Identifier */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                البريد الإلكتروني أو رقم الجوال
              </label>
              <input
                type="text"
                placeholder="hello@business.com أو 05XXXXXXXX"
                value={form.identifier}
                onChange={e => set('identifier', e.target.value)}
                className={inputCls(errors.identifier)}
                dir="ltr"
              />
              {errors.identifier && <ErrMsg msg={errors.identifier} />}
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-semibold text-gray-700">كلمة المرور</label>
                <Link to="/forgot-password" className="text-xs text-teal hover:underline">
                  نسيت كلمة المرور؟
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
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
              {errors.password && <ErrMsg msg={errors.password} />}
            </div>

            {/* Remember me */}
            <label className="flex items-center gap-2.5 cursor-pointer group">
              <div
                onClick={() => set('remember', !form.remember)}
                className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 border transition-colors cursor-pointer ${
                  form.remember ? 'bg-teal border-teal' : 'border-gray-300 group-hover:border-teal'
                }`}
              >
                {form.remember && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span className="text-sm text-gray-600">تذكّرني</span>
            </label>

            {errors.submit && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600">
                {errors.submit}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-teal hover:bg-teal/90 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-teal/30 disabled:opacity-60 disabled:cursor-not-allowed text-sm"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  جاري تسجيل الدخول...
                </span>
              ) : (
                'تسجيل الدخول'
              )}
            </button>

            <div className="relative flex items-center gap-3 my-2">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400">أو</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <Link
              to="/register"
              className="w-full block text-center bg-orange/10 hover:bg-orange/20 text-orange font-bold py-3 rounded-xl transition-all text-sm"
            >
              إنشاء حساب جديد مجاناً
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

function ErrMsg({ msg }) {
  return (
    <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
      <X size={12} /> {msg}
    </p>
  )
}

function inputCls(error) {
  return `w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none transition-colors ${
    error
      ? 'border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200'
      : 'border-gray-200 bg-white focus:border-teal focus:ring-2 focus:ring-teal/20'
  }`
}
