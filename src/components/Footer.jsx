import { Link } from 'react-router-dom'

const mainLinks = [
  { label: 'عن ڤوم', to: '/about' },
  { label: 'المميزات', to: '/features' },
  { label: 'الباقات', to: '/pricing' },
  { label: 'برنامج نمو', to: '/growth' },
  { label: 'مسؤولية محاسبة', to: '/accounting-software' },
  { label: 'باقة الطلاب', to: '/student' },
]

const appsLinks = [
  { label: 'زد', to: '/apps/zid' },
  { label: 'فودكس', to: '/apps/foodics' },
  { label: 'مرن', to: '/apps/marn' },
  { label: 'بريكسل', to: '/apps/prexie' },
]

const supportLinks = [
  { label: 'المدونة', to: '/blog' },
  { label: 'الأخبار', to: '/news' },
  { label: 'الأدوات المالية', to: '/features' },
  { label: 'أسئلة شائعة', to: '/help' },
  { label: 'تواصل معنا', to: '/contact' },
  { label: 'الشروط والأحكام', to: '/terms' },
]

const sectorLinks = [
  { label: 'المطاعم والمقاهي', to: '/sectors/restaurants' },
  { label: 'مكاتب التصميم', to: '/sectors/design' },
  { label: 'وكالات التسويق', to: '/sectors/marketing' },
  { label: 'مكاتب المحاماة', to: '/sectors/legal' },
  { label: 'مراكز الأطفال', to: '/sectors/kids' },
  { label: 'مراكز التجميل', to: '/sectors/beauty' },
  { label: 'الطباعة والإعلان', to: '/sectors/printing' },
  { label: 'مراكز صيانة', to: '/sectors/maintenance' },
  { label: 'السيارات', to: '/sectors/automotive' },
  { label: 'التجار الإلكترونيين', to: '/sectors/ecommerce' },
  { label: 'شركات اللوجستيات', to: '/sectors/logistics' },
  { label: 'العقارات والمقاولات', to: '/sectors/construction' },
  { label: 'شركات الاستثمار', to: '/sectors/investment' },
  { label: 'النوادي الرياضية', to: '/sectors/gyms' },
  { label: 'محلات العطور', to: '/sectors/perfumes' },
  { label: 'السفر والسياحة', to: '/sectors/travel' },
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    bg: 'bg-[#0077B5] hover:bg-[#005885]',
  },
  {
    label: 'WhatsApp',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
    bg: 'bg-[#25D366] hover:bg-[#1da851]',
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
    bg: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 hover:opacity-80',
  },
  {
    label: 'X',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    bg: 'bg-gray-900 hover:bg-gray-700',
  },
  {
    label: 'TikTok',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
    bg: 'bg-gray-900 hover:bg-gray-700',
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#e8edf3] text-gray-700 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Main grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <img src="/vom-logo.webp" alt="ڤوم" className="h-10 w-auto mb-2" />
            <p className="text-sm font-bold text-gray-500 mb-5">Value of Money</p>
            {/* ZATCA badge */}
            <div className="flex items-start gap-3 bg-white rounded-xl p-3 border border-gray-200 max-w-[200px]">
              <div className="flex-shrink-0 mt-0.5">
                <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
                  <circle cx="20" cy="20" r="20" fill="#006340" />
                  <path d="M12 20c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8-8-3.582-8-8z" fill="white" fillOpacity="0.2" />
                  <path d="M16 20l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 leading-tight mb-0.5">معتمد من</p>
                <p className="text-[11px] font-bold text-gray-700 leading-tight">هيئة الزكاة والضريبة</p>
                <p className="text-[11px] font-bold text-gray-700 leading-tight">والجمارك</p>
                <p className="text-[10px] text-teal mt-1 font-semibold">للمرحلة الثانية للفوترة</p>
              </div>
            </div>
          </div>

          {/* الرئيسية */}
          <div>
            <h4 className="font-black text-gray-900 text-sm mb-4">الرئيسية</h4>
            <ul className="space-y-2.5">
              {mainLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-gray-500 hover:text-teal transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* سوق التطبيقات */}
          <div>
            <h4 className="font-black text-gray-900 text-sm mb-4">سوق التطبيقات</h4>
            <ul className="space-y-2.5">
              {appsLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-gray-500 hover:text-teal transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* دعم الأعمال */}
          <div>
            <h4 className="font-black text-gray-900 text-sm mb-4">دعم الأعمال</h4>
            <ul className="space-y-2.5">
              {supportLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-gray-500 hover:text-teal transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* القطاعات */}
          <div>
            <h4 className="font-black text-gray-900 text-sm mb-4">القطاعات</h4>
            <ul className="space-y-2.5">
              {sectorLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-gray-500 hover:text-teal transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-300 pt-6 flex flex-col lg:flex-row items-center justify-between gap-6">

          {/* Social icons */}
          <div className="flex items-center gap-2 order-3 lg:order-1">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className={`w-9 h-9 rounded-lg flex items-center justify-center text-white transition-all ${s.bg}`}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Payment methods */}
          <div className="flex flex-wrap items-center gap-3 order-2">
            <span className="text-sm font-black text-gray-700 ml-1">:نقبل</span>

            {/* تحويل بنكي */}
            <div className="bg-white border border-gray-200 rounded-lg px-2.5 py-1.5 flex items-center">
              <span className="text-[11px] font-bold text-gray-700 leading-tight text-center">تحويل<br/>بنكي</span>
            </div>

            {/* Visa */}
            <div className="bg-white border border-gray-200 rounded-lg px-2.5 py-1.5">
              <svg viewBox="0 0 750 471" className="h-5 w-auto" fill="none">
                <rect width="750" height="471" rx="40" fill="white" />
                <path d="M278 334L316 137h62l-38 197h-62zM524 141c-12-5-32-10-56-10-62 0-106 33-106 80 0 35 31 54 55 66 24 12 32 20 32 31 0 17-19 24-37 24-25 0-38-4-58-13l-8-4-9 54c15 7 42 13 70 13 65 0 108-32 108-82 0-27-16-48-53-65-22-11-36-18-36-29 0-10 12-20 37-20 21 0 37 4 49 9l6 3 9-57zM620 137h-48c-15 0-26 4-33 19l-92 178h65s11-29 13-36h79c2 8 7 36 7 36h58L620 137zm-76 115l24-65 14 65h-38zM224 137l-61 135-7-33c-12-39-48-82-89-103l56 198h66l98-197h-63z" fill="#1A1F71" />
                <path d="M136 137H36l-1 5c78 20 130 68 151 125l-22-111c-4-15-14-19-28-19z" fill="#F9A533" />
              </svg>
            </div>

            {/* Mada */}
            <div className="bg-white border border-gray-200 rounded-lg px-2.5 py-1.5">
              <svg viewBox="0 0 200 80" className="h-5 w-auto">
                <rect width="200" height="80" rx="8" fill="white" />
                <text x="100" y="52" textAnchor="middle" fontFamily="Arial" fontWeight="bold" fontSize="28" fill="#00A550">mada</text>
                <text x="100" y="70" textAnchor="middle" fontFamily="Arial" fontSize="11" fill="#666">مدى</text>
              </svg>
            </div>

            {/* Mastercard */}
            <div className="bg-white border border-gray-200 rounded-lg px-2.5 py-1.5">
              <svg viewBox="0 0 131 86" className="h-5 w-auto">
                <circle cx="47" cy="43" r="43" fill="#EB001B" />
                <circle cx="84" cy="43" r="43" fill="#F79E1B" />
                <path d="M65.5 14.5a43 43 0 0 1 0 57A43 43 0 0 1 65.5 14.5z" fill="#FF5F00" />
              </svg>
            </div>

            {/* Apple Pay */}
            <div className="bg-black rounded-lg px-2.5 py-1.5">
              <svg viewBox="0 0 165 48" className="h-5 w-auto" fill="white">
                <path d="M31.9 10.5c1.7-2.1 2.9-5 2.5-7.9-2.4.1-5.4 1.6-7.1 3.7-1.6 1.8-2.9 4.8-2.5 7.6 2.7.2 5.4-1.3 7.1-3.4zM34.4 14.4c-3.9-.2-7.3 2.2-9.1 2.2-1.9 0-4.7-2.1-7.8-2-4 .1-7.7 2.3-9.8 5.9-4.2 7.2-1.1 17.9 3 23.8 2 2.9 4.4 6.2 7.6 6.1 3-.1 4.2-2 7.8-2 3.7 0 4.7 2 7.8 1.9 3.3-.1 5.3-3 7.3-5.9 2.3-3.4 3.2-6.6 3.3-6.8-.1 0-6.3-2.4-6.4-9.6-.1-6 4.9-8.9 5.1-9.1-2.8-4.1-7.1-4.5-8.8-4.5zM67.9 4.3c8.3 0 14 5.7 14 14s-5.8 14.1-14.2 14.1h-9.1V46h-6.6V4.3h15.9zm-9.3 22.5h7.5c5.8 0 9-3.1 9-8.5 0-5.4-3.3-8.5-9-8.5h-7.5v17zM84.6 38.1c0-5.5 4.2-8.8 11.6-9.3l8.6-.5v-2.4c0-3.5-2.3-5.5-6.2-5.5-3.7 0-6 1.8-6.5 4.5H86c.3-5.8 5.3-10.1 12.8-10.1 7.5 0 12.4 4 12.4 10.2V46h-6.1v-4.9h-.1c-1.8 3.3-5.6 5.4-9.6 5.4-6.1 0-10.8-3.8-10.8-9.4zm20.2-2.8v-2.4l-7.7.5c-3.8.3-5.9 1.9-5.9 4.5 0 2.6 2.2 4.4 5.5 4.4 4.3 0 8.1-2.9 8.1-7zM115.9 62.2v-5.4c.5.1 1.6.1 2.2.1 3.1 0 4.8-1.3 5.8-4.7l.6-2-11.3-31.4h6.9l7.9 25.3h.1l7.9-25.3h6.7l-11.7 33c-2.7 7.5-5.7 9.9-12.1 9.9-.6.1-2.4.1-3-.5z" />
              </svg>
            </div>

            {/* App Store */}
            <a
              href="#"
              className="bg-black text-white rounded-lg px-3 py-1.5 flex items-center gap-1.5 hover:bg-gray-800 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div>
                <p className="text-[9px] leading-none text-gray-300">Download on the</p>
                <p className="text-xs font-bold leading-tight">App Store</p>
              </div>
            </a>
          </div>

          {/* CTA */}
          <a
            href="https://app.getvom.com/register"
            className="bg-teal hover:bg-teal/90 text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-all order-1 lg:order-3 whitespace-nowrap"
          >
            تجربة مجانية
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-5 text-center">
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} ڤوم. جميع الحقوق محفوظة.</p>
        </div>

      </div>
    </footer>
  )
}
