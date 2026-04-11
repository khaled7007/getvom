import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Download, ChevronLeft, AlertCircle, CheckCircle2, FileText, Zap, Shield } from 'lucide-react'

/* ─── Templates data ────────────────────────────────────── */
const templates = [
  {
    id: 'inv2',
    name: 'نموذج فاتورة مبيعات',
    desc: 'فاتورة احترافية بإطار برتقالي وقسم QR Code متوافق',
    file: '/invoices/INV2.pdf',
    accent: '#FF7300',
    accentLight: '#FFF3E8',
    style: 'orange',
    badge: 'الأكثر تحميلاً',
    badgeClass: 'bg-orange/10 text-orange',
  },
  {
    id: 'inv3',
    name: 'نموذج فاتورة ضريبية',
    desc: 'تصميم عصري بألوان رمادية وزرقاء مناسب لجميع القطاعات',
    file: '/invoices/INV3.pdf',
    accent: '#2563EB',
    accentLight: '#EFF6FF',
    style: 'blue-gray',
    badge: null,
    badgeClass: '',
  },
  {
    id: 'inv4',
    name: 'نموذج فاتورة إلكترونية',
    desc: 'فاتورة أنيقة بلوني العلامة التجارية — تيل وبرتقالي',
    file: '/invoices/INV4.pdf',
    accent: '#19BAA3',
    accentLight: '#E8FAF7',
    style: 'teal-orange',
    badge: 'الأحدث',
    badgeClass: 'bg-teal/10 text-teal',
  },
  {
    id: 'inv5',
    name: 'نموذج فاتورة للشركات',
    desc: 'تصميم مؤسسي بألوان التيل وعناصر ديكورية متميزة',
    file: '/invoices/INV5.pdf',
    accent: '#19BAA3',
    accentLight: '#E8FAF7',
    style: 'teal-clean',
    badge: null,
    badgeClass: '',
  },
  {
    id: 'inv6',
    name: 'قالب فاتورة الأعمال',
    desc: 'تصميم نظيف باللون الأزرق مع شريط رأس وذيل واضحين',
    file: '/invoices/INV6.pdf',
    accent: '#3B82F6',
    accentLight: '#EFF6FF',
    style: 'blue-bars',
    badge: null,
    badgeClass: '',
  },
]

/* ─── Mini invoice preview components ───────────────────── */

/* Shared table rows */
function TableRows({ accent, rows = 5 }) {
  return (
    <>
      {/* Header */}
      <div className="flex py-[3px] px-1" style={{ background: accent }}>
        {[2, 1, 1, 1, 1, 1].map((w, i) => (
          <div key={i} className="h-[2px] bg-white/50 rounded mx-[1px]" style={{ flex: w }} />
        ))}
      </div>
      {/* Rows */}
      {[...Array(rows)].map((_, i) => (
        <div key={i} className={`flex py-[2px] px-1 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          {[2, 1, 1, 1, 1, 1].map((w, j) => (
            <div key={j} className="h-[1.5px] bg-gray-200 rounded mx-[1px]" style={{ flex: w }} />
          ))}
        </div>
      ))}
    </>
  )
}

function InfoLines({ count = 4, gap = false }) {
  return (
    <div className={`space-y-[2px] ${gap ? 'mt-[3px]' : ''}`}>
      {[...Array(count)].map((_, i) => (
        <div key={i} className="flex gap-[3px] items-center">
          <div className="h-[1.5px] rounded bg-gray-200" style={{ width: 20 - i * 2 }} />
          <div className="h-[1.5px] rounded bg-gray-100 flex-1" />
        </div>
      ))}
    </div>
  )
}

function QRBox({ accent }) {
  return (
    <div className="w-[18px] h-[18px] border rounded-[2px] flex flex-col items-center justify-center flex-shrink-0"
      style={{ borderColor: accent }}>
      <div className="text-[3.5px] font-black leading-none" style={{ color: accent }}>QR</div>
      <div className="text-[2.5px] text-gray-400">code</div>
    </div>
  )
}

function VomLogo({ color = '#19BAA3' }) {
  return (
    <svg width="18" height="8" viewBox="0 0 36 14" fill="none">
      <path d="M2 2L8 12L14 2" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M16 2C16 2 18 10 20 2" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M22 2C22 8 26 12 30 8C34 4 30 2 27 4C24 6 26 12 30 12" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  )
}

/* INV2 — Orange frame */
function PreviewOrange() {
  const accent = '#FF7300'
  return (
    <div className="bg-white rounded-[3px] overflow-hidden w-full h-full border-2 p-[6px] text-right"
      style={{ borderColor: accent }}>
      <div className="flex justify-between items-start mb-[4px]">
        <QRBox accent={accent} />
        <div className="text-right">
          <div className="text-[5.5px] font-black text-gray-800 mb-[1px]">فاتورة مبيعات</div>
          <InfoLines count={4} />
        </div>
      </div>
      <div className="h-[1.5px] mb-[3px] rounded" style={{ background: accent }} />
      <div className="flex gap-[4px] mb-[4px]">
        <div className="flex-1"><InfoLines count={4} /></div>
        <div className="flex-1"><InfoLines count={4} /></div>
      </div>
      <div className="rounded-[2px] overflow-hidden mb-[3px]"><TableRows accent={accent} /></div>
      <div className="flex justify-between items-center px-[2px]">
        <div className="text-[4.5px] font-black" style={{ color: accent }}>000,000.00 SR</div>
        <div className="text-[3.5px] text-gray-500">الإجمالي</div>
      </div>
    </div>
  )
}

/* INV3 — Blue/Gray */
function PreviewBlueGray() {
  const accent = '#2563EB'
  return (
    <div className="bg-white rounded-[3px] overflow-hidden w-full h-full text-right relative"
      style={{ border: '1px solid #e5e7eb' }}>
      {/* Watermark-like gray bg top */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ background: 'repeating-linear-gradient(45deg, #9ca3af, #9ca3af 1px, transparent 1px, transparent 8px)' }} />
      <div className="relative p-[6px]">
        <div className="flex justify-between items-start mb-[3px]">
          <VomLogo />
          <div className="text-[5.5px] font-black text-gray-800">فاتورة مبيعات</div>
        </div>
        <div className="h-[1.5px] mb-[3px] rounded" style={{ background: accent }} />
        <div className="flex gap-[3px] mb-[4px]">
          <QRBox accent={accent} />
          <div className="flex-1"><InfoLines count={5} /></div>
        </div>
        <div className="rounded-[2px] overflow-hidden mb-[3px]">
          <div className="flex py-[3px] px-1 bg-gray-800">
            {[2, 1, 1, 1, 1, 1].map((w, i) => (
              <div key={i} className="h-[2px] bg-white/50 rounded mx-[1px]" style={{ flex: w }} />
            ))}
          </div>
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`flex py-[2px] px-1 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
              {[2, 1, 1, 1, 1, 1].map((w, j) => (
                <div key={j} className="h-[1.5px] bg-gray-200 rounded mx-[1px]" style={{ flex: w }} />
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center px-[2px]">
          <div className="text-[4.5px] font-black" style={{ color: accent }}>000,000.00 SR</div>
          <div className="text-[3.5px] text-gray-500">الإجمالي</div>
        </div>
        {/* Blue bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-[4px]" style={{ background: accent }} />
      </div>
    </div>
  )
}

/* INV4 — Teal/Orange diagonal */
function PreviewTealOrange() {
  return (
    <div className="bg-white rounded-[3px] overflow-hidden w-full h-full relative text-right"
      style={{ border: '1px solid #e5e7eb' }}>
      {/* Diagonal teal header top-left */}
      <div className="absolute top-0 left-0 w-[40px] h-[22px] overflow-hidden">
        <div className="absolute top-0 left-0 w-[60px] h-[30px] origin-top-left -rotate-12"
          style={{ background: '#19BAA3', opacity: 0.9 }} />
      </div>
      {/* QR in top-left */}
      <div className="absolute top-[4px] left-[4px] z-10">
        <QRBox accent="#19BAA3" />
      </div>
      {/* Top orange stripe */}
      <div className="absolute top-0 right-0 w-1/2 h-[5px]" style={{ background: '#FF7300' }} />
      <div className="p-[6px] pt-[8px]">
        <div className="flex justify-end mb-[2px]">
          <div className="text-[5.5px] font-black text-gray-800">فاتورة مبيعات</div>
        </div>
        <div className="flex gap-[4px] mb-[4px] mt-[4px]">
          <div className="flex-1"><InfoLines count={4} /></div>
          <div className="flex-1"><InfoLines count={4} /></div>
        </div>
        <div className="rounded-[2px] overflow-hidden mb-[3px]">
          <TableRows accent="#19BAA3" />
        </div>
        <div className="flex justify-between items-center px-[2px]">
          <div className="text-[4.5px] font-black text-teal">000,000.00 SR</div>
          <div className="text-[3.5px] text-gray-500">الإجمالي</div>
        </div>
      </div>
      {/* Teal/orange bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[8px] flex">
        <div className="flex-1" style={{ background: '#19BAA3' }} />
        <div className="w-[30px]" style={{ background: '#FF7300' }} />
      </div>
    </div>
  )
}

/* INV5 — Teal clean with decorative elements */
function PreviewTealClean() {
  const accent = '#19BAA3'
  return (
    <div className="bg-white rounded-[3px] overflow-hidden w-full h-full relative text-right"
      style={{ border: '1px solid #e5e7eb' }}>
      {/* Decorative left side bars */}
      <div className="absolute left-0 top-[20px] flex flex-col gap-[2px]">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-[3px] h-[5px] rounded-r-sm opacity-30"
            style={{ background: accent }} />
        ))}
      </div>
      <div className="p-[6px]">
        {/* Header box: logo + QR side by side */}
        <div className="border rounded-[2px] flex items-center gap-[4px] p-[3px] mb-[3px]"
          style={{ borderColor: `${accent}30` }}>
          <VomLogo color={accent} />
          <div className="flex-1" />
          <QRBox accent={accent} />
          <div className="text-right flex-1"><InfoLines count={3} /></div>
        </div>
        {/* Orange invoice number bar */}
        <div className="h-[5px] rounded mb-[3px] flex items-center px-1"
          style={{ background: '#FF7300' }}>
          <div className="flex gap-2 w-full">
            <div className="h-[2px] bg-white/60 rounded flex-1" />
            <div className="h-[2px] bg-white/60 rounded flex-1" />
          </div>
        </div>
        <div className="flex gap-[4px] mb-[3px]">
          <div className="flex-1"><InfoLines count={4} /></div>
          <div className="flex-1"><InfoLines count={4} /></div>
        </div>
        <div className="rounded-[2px] overflow-hidden mb-[3px]">
          <TableRows accent={accent} rows={4} />
        </div>
        <div className="flex justify-between items-center px-[2px]">
          <div className="text-[4.5px] font-black" style={{ color: accent }}>000,000.00 SR</div>
          <div className="text-[3.5px] text-gray-500">الإجمالي</div>
        </div>
      </div>
      {/* Decorative teal circle bottom-left */}
      <div className="absolute bottom-[-8px] left-[-8px] w-[20px] h-[20px] rounded-full opacity-20"
        style={{ background: accent }} />
    </div>
  )
}

/* INV6 — Blue bars */
function PreviewBlueBars() {
  const accent = '#3B82F6'
  return (
    <div className="bg-white rounded-[3px] overflow-hidden w-full h-full text-right"
      style={{ border: '1px solid #e5e7eb' }}>
      {/* Top full-width blue bar */}
      <div className="h-[6px] w-full" style={{ background: accent }} />
      <div className="p-[5px]">
        <div className="flex justify-between items-start mb-[3px]">
          <VomLogo />
          <div className="text-right">
            <div className="text-[5.5px] font-black text-gray-800">فاتورة مبيعات</div>
            <InfoLines count={3} />
          </div>
        </div>
        {/* Blue invoice number highlight */}
        <div className="flex gap-[3px] mb-[3px]">
          <div className="flex-1 h-[5px] rounded-[1px]" style={{ background: `${accent}20`, border: `1px solid ${accent}40` }} />
          <div className="flex-1 h-[5px] rounded-[1px]" style={{ background: accent }}>
            <div className="h-full flex items-center px-1">
              <div className="h-[1.5px] bg-white/60 rounded flex-1" />
            </div>
          </div>
        </div>
        <div className="flex gap-[3px] mb-[3px]">
          <QRBox accent={accent} />
          <div className="flex-1"><InfoLines count={5} /></div>
        </div>
        <div className="rounded-[2px] overflow-hidden mb-[3px]">
          <TableRows accent={accent} rows={4} />
        </div>
        {/* Blue total bg */}
        <div className="flex justify-between items-center px-[2px] py-[2px] rounded-[2px]"
          style={{ background: `${accent}15` }}>
          <div className="text-[4.5px] font-black" style={{ color: accent }}>000,000.00 SR</div>
          <div className="text-[3.5px] text-gray-500">الإجمالي</div>
        </div>
      </div>
      {/* Bottom blue bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[4px]" style={{ background: accent }} />
    </div>
  )
}

const previewComponents = {
  'orange':     PreviewOrange,
  'blue-gray':  PreviewBlueGray,
  'teal-orange': PreviewTealOrange,
  'teal-clean': PreviewTealClean,
  'blue-bars':  PreviewBlueBars,
}

/* ─── Template Card ──────────────────────────────────────── */
function TemplateCard({ tmpl }) {
  const Preview = previewComponents[tmpl.style]
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group">
      {/* Preview */}
      <div className="relative bg-gray-50 p-5 flex items-center justify-center"
        style={{ height: 200 }}>
        {tmpl.badge && (
          <span className={`absolute top-3 right-3 text-[10px] font-black px-2.5 py-0.5 rounded-full z-10 ${tmpl.badgeClass}`}>
            {tmpl.badge}
          </span>
        )}
        <div className="relative shadow-xl rounded-[3px]" style={{ width: 110, height: 155 }}>
          <Preview />
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-black text-gray-900 text-sm mb-1">{tmpl.name}</h3>
        <p className="text-gray-400 text-xs leading-relaxed mb-4">{tmpl.desc}</p>

        {/* Buttons */}
        <div className="flex gap-2">
          <a
            href={tmpl.file}
            download
            className="flex items-center gap-1.5 flex-1 justify-center text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 py-2 rounded-xl transition-all"
          >
            <Download size={13} />
            تحميل
          </a>
          <a
            href="https://app.getvom.com/register"
            className="flex items-center gap-1.5 flex-1 justify-center text-xs font-bold text-white bg-teal hover:opacity-90 py-2 rounded-xl transition-all"
          >
            إنشاء الآن
            <ChevronLeft size={13} />
          </a>
        </div>
      </div>
    </div>
  )
}

/* ─── Hero Invoice Mockup ────────────────────────────────── */
function HeroMockup() {
  return (
    <div className="relative flex items-center justify-center h-full min-h-[340px]">
      {/* Shadow/glow behind */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-52 h-72 rounded-3xl blur-3xl opacity-20 bg-orange" />
      </div>

      {/* Back card (INV6 - blue) */}
      <div className="absolute shadow-2xl rounded-[4px] rotate-6 opacity-80"
        style={{ width: 170, height: 240 }}>
        <PreviewBlueBars />
      </div>

      {/* Front card (INV4 - teal/orange) */}
      <div className="relative shadow-2xl rounded-[4px] -rotate-3 z-10"
        style={{ width: 190, height: 268 }}>
        <PreviewTealOrange />
      </div>
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────────── */
export default function SalesInvoices() {
  useEffect(() => { document.title = 'فواتير المبيعات — نماذج مجانية جاهزة للتحميل | ڤوم' }, [])

  return (
    <div className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="hero-gradient pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Text — right column in RTL */}
            <div>
              <span className="inline-block bg-white/10 border border-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-5">
                مجانية ومتاحة للتحميل الفوري
              </span>
              <h1 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
                نماذج فواتير
                <br />
                <span className="text-orange-light">مجانية</span>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-md">
                في ڤوم، تدرك أن إنشاء فواتير احترافية يُعدّ جزءاً مهماً من إدارة أعمالك بكفاءة. لتسهيل هذه العملية، نقدم مجموعة مختارة من قوالب الفواتير عالية الجودة، القابلة للتخصيص، والمجانية تماماً.
              </p>

              {/* ZATCA note */}
              <div className="bg-white/10 border border-white/20 rounded-2xl p-4 mb-7 flex gap-3">
                <AlertCircle size={18} className="text-orange-light flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    <span className="font-bold text-orange-light">تنويه: </span>
                    هذه القوالب لا تدعم الفوترة الإلكترونية. إذا كنت تبحث عن فواتير إلكترونية معتمدة من زاتكا،
                    {' '}
                    <a href="https://app.getvom.com/register" className="text-white font-bold underline underline-offset-2 hover:text-orange-light transition-colors">
                      يمكنك تجربة النظام هنا مجاناً
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://app.getvom.com/register"
                  className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-black px-7 py-3.5 rounded-2xl shadow-xl shadow-orange/40 transition-all hover:scale-105"
                >
                  جرّب الآن مجاناً <ChevronLeft size={18} />
                </a>
                <a
                  href="#templates"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-6 py-3.5 rounded-2xl transition-all"
                >
                  <Download size={16} />
                  تحميل القوالب
                </a>
              </div>
            </div>

            {/* Invoice mockup — left column in RTL */}
            <div className="hidden md:block">
              <HeroMockup />
            </div>
          </div>
        </div>
      </div>

      {/* ── Benefits strip ───────────────────────────────── */}
      <div className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { icon: <Download size={20} className="text-teal" />, title: 'تحميل فوري', desc: 'PDF جاهز بدون تسجيل' },
              { icon: <FileText size={20} className="text-teal" />, title: '5 قوالب متنوعة', desc: 'لجميع أنواع الأعمال' },
              { icon: <Zap size={20} className="text-teal" />, title: 'قابلة للتخصيص', desc: 'أضف شعارك وبياناتك' },
            ].map((b) => (
              <div key={b.title} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center">
                  {b.icon}
                </div>
                <p className="font-black text-gray-800 text-sm">{b.title}</p>
                <p className="text-gray-500 text-xs">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Templates grid ───────────────────────────────── */}
      <div id="templates" className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
            نماذج فواتير وقوالب مجانية
            <span className="text-teal"> جاهزة للتحميل والطباعة</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            اختر القالب المناسب لعملك، حمّله وأضف بياناتك. كلها مجانية وجاهزة للطباعة.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {templates.map((tmpl) => (
            <TemplateCard key={tmpl.id} tmpl={tmpl} />
          ))}

          {/* Use ڤوم card */}
          <div className="bg-teal/5 border-2 border-teal/20 border-dashed rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 hover:bg-teal/10 transition-colors">
            <div className="w-14 h-14 bg-teal/10 rounded-2xl flex items-center justify-center">
              <Shield size={26} className="text-teal" />
            </div>
            <div>
              <h3 className="font-black text-gray-900 mb-1">فاتورة إلكترونية معتمدة</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                أصدر فواتير إلكترونية متوافقة مع زاتكا مباشرة من ڤوم — بدون قوالب يدوية
              </p>
            </div>
            <a
              href="https://app.getvom.com/register"
              className="w-full text-center text-sm font-bold text-white bg-teal hover:opacity-90 py-2.5 rounded-xl transition-all"
            >
              ابدأ مجاناً 30 يوم
            </a>
          </div>
        </div>
      </div>

      {/* ── What makes a great invoice ───────────────────── */}
      <div className="bg-gray-50 py-16 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-gray-900 mb-2">ما الذي تحتويه الفاتورة الاحترافية؟</h2>
            <p className="text-gray-500 text-sm">قوالبنا تتضمن جميع العناصر المطلوبة نظامياً في السعودية</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'بيانات البائع', desc: 'الاسم، الرقم الضريبي، رقم السجل التجاري، العنوان' },
              { title: 'بيانات المشتري', desc: 'اسم العميل، الرقم الضريبي، العنوان، رقم الجوال' },
              { title: 'تفاصيل البنود', desc: 'المنتجات، الكميات، سعر الوحدة، الخصم، الضريبة' },
              { title: 'الملاحظات والشروط', desc: 'ملاحظات إضافية، شروط الدفع، الحساب البنكي' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-2.5 mb-2">
                  <CheckCircle2 size={16} className="text-teal flex-shrink-0 mt-0.5" />
                  <h3 className="font-black text-gray-900 text-sm">{item.title}</h3>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mr-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────── */}
      <div className="hero-gradient py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            جاهز لفاتورة إلكترونية حقيقية؟
          </h2>
          <p className="text-white/70 mb-7 leading-relaxed">
            القوالب اليدوية مفيدة للبداية، لكن ڤوم يصدر فواتيرك الإلكترونية تلقائياً،
            <br className="hidden sm:block" />
            يرفعها لزاتكا، ويسجّلها محاسبياً — كل ذلك في نقرة واحدة
          </p>
          <a
            href="https://app.getvom.com/register"
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-black px-10 py-4 rounded-2xl shadow-2xl shadow-orange/40 transition-all hover:scale-105"
          >
            جرّب ڤوم مجاناً 30 يوم <ChevronLeft size={20} />
          </a>
        </div>
      </div>

    </div>
  )
}
