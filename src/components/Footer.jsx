import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-1">
              <img src="/vom-logo.webp" alt="ڤوم" className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="text-teal text-xs font-semibold mb-4">Value of Money</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              برنامج محاسبة ذكي مصمم لأصحاب الأعمال في السعودية. تحكم في مصاريفك واعرف أرباحك بوضوح.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="X" className="w-9 h-9 bg-gray-800 hover:bg-teal rounded-lg flex items-center justify-center transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 bg-gray-800 hover:bg-teal rounded-lg flex items-center justify-center transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 bg-gray-800 hover:bg-teal rounded-lg flex items-center justify-center transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* المنتج */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-teal">المنتج</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">عن ڤوم</Link></li>
              <li><Link to="/features" className="hover:text-white transition-colors">المميزات</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">الأسعار</Link></li>
              <li><Link to="/growth" className="hover:text-white transition-colors">برنامج نمو</Link></li>
              <li><Link to="/apps" className="hover:text-white transition-colors">سوق التطبيقات</Link></li>
            </ul>
          </div>

          {/* القطاعات */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-teal">القطاعات</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/sectors/restaurants" className="hover:text-white transition-colors">مطاعم وكافيهات</Link></li>
              <li><Link to="/sectors/retail" className="hover:text-white transition-colors">تجزئة عامة</Link></li>
              <li><Link to="/sectors/construction" className="hover:text-white transition-colors">مقاولات وإنشاءات</Link></li>
              <li><Link to="/sectors/beauty" className="hover:text-white transition-colors">مراكز التجميل</Link></li>
              <li><Link to="/sectors/gyms" className="hover:text-white transition-colors">صالات لياقة</Link></li>
              <li><Link to="/sectors" className="hover:text-white transition-colors text-teal text-xs">عرض الكل ←</Link></li>
            </ul>
          </div>

          {/* الدعم */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-teal">الدعم</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/help" className="hover:text-white transition-colors">مركز المساعدة</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">تواصل معنا</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">المدونة</Link></li>
              <li><Link to="/news" className="hover:text-white transition-colors">الأخبار</Link></li>
              <li><Link to="/einvoicing" className="hover:text-white transition-colors">الفوترة الإلكترونية</Link></li>
              <li><Link to="/student" className="hover:text-white transition-colors">باقة الطلاب</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">سياسة الخصوصية</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">الشروط والأحكام</Link></li>
            </ul>
          </div>

        </div>

        {/* نقبل */}
        <div className="border-t border-gray-800 pt-8 pb-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-bold text-gray-300 ml-1">:نقبل</span>
            {/* Visa */}
            <div className="bg-white rounded px-2 py-1 flex items-center h-7">
              <svg viewBox="0 0 750 471" className="h-4 w-auto" fill="none">
                <path d="M278 334L316 137h62l-38 197h-62zM524 141c-12-5-32-10-56-10-62 0-106 33-106 80 0 35 31 54 55 66 24 12 32 20 32 31 0 17-19 24-37 24-25 0-38-4-58-13l-8-4-9 54c15 7 42 13 70 13 65 0 108-32 108-82 0-27-16-48-53-65-22-11-36-18-36-29 0-10 12-20 37-20 21 0 37 4 49 9l6 3 9-57zM620 137h-48c-15 0-26 4-33 19l-92 178h65s11-29 13-36h79c2 8 7 36 7 36h58L620 137zm-76 115l24-65 14 65h-38zM224 137l-61 135-7-33c-12-39-48-82-89-103l56 198h66l98-197h-63z" fill="#1A1F71" />
              </svg>
            </div>
            {/* Mada */}
            <div className="bg-white rounded px-2 py-1 h-7 flex items-center">
              <span className="text-[11px] font-black text-[#00A550] leading-none">mada</span>
            </div>
            {/* Mastercard */}
            <div className="bg-white rounded px-2 py-1 h-7 flex items-center">
              <svg viewBox="0 0 38 24" className="h-4 w-auto">
                <circle cx="13" cy="12" r="12" fill="#EB001B" />
                <circle cx="25" cy="12" r="12" fill="#F79E1B" />
                <path d="M19 4.8a12 12 0 0 1 0 14.4A12 12 0 0 1 19 4.8z" fill="#FF5F00" />
              </svg>
            </div>
            {/* Apple Pay */}
            <div className="bg-black border border-gray-700 rounded px-2.5 py-1 h-7 flex items-center">
              <svg viewBox="0 0 165 48" className="h-4 w-auto" fill="white">
                <path d="M31.9 10.5c1.7-2.1 2.9-5 2.5-7.9-2.4.1-5.4 1.6-7.1 3.7-1.6 1.8-2.9 4.8-2.5 7.6 2.7.2 5.4-1.3 7.1-3.4zM34.4 14.4c-3.9-.2-7.3 2.2-9.1 2.2-1.9 0-4.7-2.1-7.8-2-4 .1-7.7 2.3-9.8 5.9-4.2 7.2-1.1 17.9 3 23.8 2 2.9 4.4 6.2 7.6 6.1 3-.1 4.2-2 7.8-2 3.7 0 4.7 2 7.8 1.9 3.3-.1 5.3-3 7.3-5.9 2.3-3.4 3.2-6.6 3.3-6.8-.1 0-6.3-2.4-6.4-9.6-.1-6 4.9-8.9 5.1-9.1-2.8-4.1-7.1-4.5-8.8-4.5zM67.9 4.3c8.3 0 14 5.7 14 14s-5.8 14.1-14.2 14.1h-9.1V46h-6.6V4.3h15.9zm-9.3 22.5h7.5c5.8 0 9-3.1 9-8.5 0-5.4-3.3-8.5-9-8.5h-7.5v17zM84.6 38.1c0-5.5 4.2-8.8 11.6-9.3l8.6-.5v-2.4c0-3.5-2.3-5.5-6.2-5.5-3.7 0-6 1.8-6.5 4.5H86c.3-5.8 5.3-10.1 12.8-10.1 7.5 0 12.4 4 12.4 10.2V46h-6.1v-4.9h-.1c-1.8 3.3-5.6 5.4-9.6 5.4-6.1 0-10.8-3.8-10.8-9.4zm20.2-2.8v-2.4l-7.7.5c-3.8.3-5.9 1.9-5.9 4.5 0 2.6 2.2 4.4 5.5 4.4 4.3 0 8.1-2.9 8.1-7zM115.9 62.2v-5.4c.5.1 1.6.1 2.2.1 3.1 0 4.8-1.3 5.8-4.7l.6-2-11.3-31.4h6.9l7.9 25.3h.1l7.9-25.3h6.7l-11.7 33c-2.7 7.5-5.7 9.9-12.1 9.9-.6.1-2.4.1-3-.5z" />
              </svg>
            </div>
            {/* تحويل بنكي */}
            <div className="bg-gray-800 rounded px-2.5 py-1 h-7 flex items-center">
              <span className="text-[11px] text-gray-300 font-medium">تحويل بنكي</span>
            </div>
            {/* App Store */}
            <a href="#" className="bg-gray-800 hover:bg-gray-700 rounded px-3 py-1 h-7 flex items-center gap-1.5 transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white flex-shrink-0">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span className="text-[11px] text-gray-300">App Store</span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} ڤوم. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-3">
            <img src="/zatca-badge.svg" alt="هيئة الزكاة والضريبة والجمارك" className="h-9 w-9 opacity-80" />
            <div>
              <p className="text-gray-400 text-xs leading-snug">هيئة الزكاة والضريبة والجمارك</p>
              <p className="text-gray-500 text-[10px] leading-snug">المرحلة الثانية للفوترة الإلكترونية</p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
