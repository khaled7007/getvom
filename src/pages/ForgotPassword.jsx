import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, X, CheckCircle } from 'lucide-react'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('يرجى إدخال بريد إلكتروني صحيح')
      return
    }
    setLoading(true)
    try {
      // TODO: POST /api/auth/forgot-password
      // const res = await fetch('/api/auth/forgot-password', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // })
      // if (!res.ok) throw new Error()
      await new Promise(r => setTimeout(r, 1000))
      setSent(true)
    } catch {
      setError('حدث خطأ، يرجى المحاولة مجدداً')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4" dir="rtl">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-lg shadow-black/5 border border-gray-100 p-8">
          <Link to="/" className="flex justify-center mb-8">
            <img src="/vom-logo.webp" alt="ڤوم" className="h-9" />
          </Link>

          {sent ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-teal" />
              </div>
              <h1 className="text-xl font-black text-gray-900 mb-2">تم إرسال الرابط!</h1>
              <p className="text-gray-500 text-sm mb-2">
                أرسلنا رابط إعادة تعيين كلمة المرور إلى
              </p>
              <p className="font-semibold text-gray-800 text-sm mb-6" dir="ltr">{email}</p>
              <p className="text-xs text-gray-400 mb-8">
                لم تجد الرسالة؟ تحقق من مجلد الرسائل غير المرغوب فيها (Spam)
              </p>
              <button
                onClick={() => { setSent(false); setEmail('') }}
                className="text-sm text-teal hover:underline"
              >
                إرسال مرة أخرى
              </button>
            </div>
          ) : (
            <>
              <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center mb-5">
                <Mail size={22} className="text-teal" />
              </div>

              <h1 className="text-xl font-black text-gray-900 mb-1">نسيت كلمة المرور؟</h1>
              <p className="text-gray-500 text-sm mb-7">
                أدخل بريدك الإلكتروني وسنرسل لك رابط إعادة التعيين
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    placeholder="hello@business.com"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setError('') }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none transition-colors ${
                      error
                        ? 'border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200'
                        : 'border-gray-200 bg-white focus:border-teal focus:ring-2 focus:ring-teal/20'
                    }`}
                    dir="ltr"
                  />
                  {error && (
                    <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
                      <X size={12} /> {error}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-teal hover:bg-teal/90 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-teal/30 disabled:opacity-60 disabled:cursor-not-allowed text-sm"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      جاري الإرسال...
                    </span>
                  ) : (
                    'إرسال رابط إعادة التعيين'
                  )}
                </button>
              </form>
            </>
          )}

          <Link
            to="/login"
            className="flex items-center justify-center gap-1.5 text-sm text-gray-500 hover:text-teal transition-colors mt-6"
          >
            <ArrowRight size={14} />
            العودة لتسجيل الدخول
          </Link>
        </div>
      </div>
    </div>
  )
}
