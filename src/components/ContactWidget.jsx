import { useState, useRef } from 'react'
import { MessageCircle, X, Send, Paperclip, CheckCircle2, ChevronDown } from 'lucide-react'

export default function ContactWidget() {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [file, setFile] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const fileRef = useRef(null)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'الاسم مطلوب'
    if (!form.email.trim()) e.email = 'البريد مطلوب'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'بريد غير صالح'
    if (!form.message.trim()) e.message = 'اكتب كيف نقدر نساعدك'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    // TODO: wire to real API endpoint
    setSent(true)
  }

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    setErrors((er) => ({ ...er, [field]: undefined }))
  }

  const handleFile = (e) => {
    const f = e.target.files[0]
    if (f) setFile(f)
  }

  const reset = () => {
    setSent(false)
    setForm({ name: '', email: '', message: '' })
    setFile(null)
    setErrors({})
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">

      {/* Panel */}
      {open && (
        <div className="w-80 bg-white rounded-3xl shadow-2xl shadow-teal/20 border border-gray-100 overflow-hidden">

          {/* Header */}
          <div className="hero-gradient px-5 py-4 flex items-center justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <div className="relative flex items-center gap-3">
              <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
                <MessageCircle size={18} className="text-white" />
              </div>
              <div>
                <p className="text-white font-black text-sm">تواصل معنا</p>
                <p className="text-white/70 text-xs">نرد خلال 24 ساعة</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="relative w-7 h-7 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronDown size={16} className="text-white" />
            </button>
          </div>

          {/* Body */}
          <div className="p-5">
            {sent ? (
              <div className="py-6 flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 bg-teal/10 rounded-2xl flex items-center justify-center">
                  <CheckCircle2 size={28} className="text-teal" />
                </div>
                <p className="font-black text-gray-900 text-lg">تم الإرسال!</p>
                <p className="text-gray-500 text-sm">شكراً لتواصلك معنا، سنرد عليك قريباً</p>
                <button
                  onClick={reset}
                  className="mt-2 text-teal text-sm font-bold hover:underline"
                >
                  إرسال رسالة أخرى
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>

                {/* Name */}
                <div>
                  <input
                    type="text"
                    placeholder="الاسم"
                    value={form.name}
                    onChange={handleChange('name')}
                    className={`w-full text-sm bg-gray-50 border rounded-xl px-4 py-2.5 outline-none transition-colors placeholder-gray-400 focus:border-teal focus:bg-white ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1 pr-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    value={form.email}
                    onChange={handleChange('email')}
                    className={`w-full text-sm bg-gray-50 border rounded-xl px-4 py-2.5 outline-none transition-colors placeholder-gray-400 focus:border-teal focus:bg-white ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1 pr-1">{errors.email}</p>}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    rows={3}
                    placeholder="كيف نقدر نساعدك؟"
                    value={form.message}
                    onChange={handleChange('message')}
                    className={`w-full text-sm bg-gray-50 border rounded-xl px-4 py-2.5 outline-none transition-colors placeholder-gray-400 focus:border-teal focus:bg-white resize-none ${errors.message ? 'border-red-400' : 'border-gray-200'}`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1 pr-1">{errors.message}</p>}
                </div>

                {/* Attachment */}
                <div>
                  <input
                    ref={fileRef}
                    type="file"
                    onChange={handleFile}
                    className="hidden"
                    accept="image/*,.pdf,.doc,.docx,.xls,.xlsx"
                  />
                  <button
                    type="button"
                    onClick={() => fileRef.current.click()}
                    className={`flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-xl border transition-all w-full ${
                      file
                        ? 'bg-teal/5 border-teal/30 text-teal'
                        : 'bg-gray-50 border-gray-200 text-gray-500 hover:border-teal/30 hover:text-teal'
                    }`}
                  >
                    <Paperclip size={14} className="flex-shrink-0" />
                    <span className="truncate">
                      {file ? file.name : 'إرفاق ملف (اختياري)'}
                    </span>
                    {file && (
                      <X
                        size={13}
                        className="mr-auto flex-shrink-0 text-gray-400 hover:text-red-400"
                        onClick={(e) => { e.stopPropagation(); setFile(null) }}
                      />
                    )}
                  </button>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white font-black text-sm px-5 py-3 rounded-xl shadow-lg shadow-orange/30 transition-all hover:scale-[1.02] mt-1"
                >
                  إرسال
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => { setOpen((o) => !o); if (sent) reset() }}
        className={`w-14 h-14 rounded-2xl shadow-xl flex items-center justify-center transition-all hover:scale-110 ${
          open ? 'bg-gray-700 shadow-gray-400/30' : 'bg-teal shadow-teal/40'
        }`}
      >
        {open
          ? <X size={22} className="text-white" />
          : <MessageCircle size={24} className="text-white" />
        }
      </button>
    </div>
  )
}
