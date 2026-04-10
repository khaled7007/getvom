import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img src="/vom-logo.webp" alt="ڤوم" className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              برنامج محاسبة ذكي مصمم لأصحاب الأعمال في السعودية. تحكم في مصاريفك واعرف أرباحك بوضوح.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-teal rounded-lg flex items-center justify-center transition-colors text-xs font-bold">
                𝕏
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-teal rounded-lg flex items-center justify-center transition-colors text-xs">
                in
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-teal rounded-lg flex items-center justify-center transition-colors">
                📸
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-teal">المنتج</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">عن ڤوم</Link></li>
              <li><Link to="/features" className="hover:text-white transition-colors">المميزات</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">الأسعار</Link></li>
              <li><Link to="/sectors" className="hover:text-white transition-colors">القطاعات</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 text-teal">القطاعات</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/sectors/restaurants" className="hover:text-white transition-colors">مطاعم وكافيهات</Link></li>
              <li><Link to="/sectors/retail" className="hover:text-white transition-colors">تجزئة عامة</Link></li>
              <li><Link to="/sectors/construction" className="hover:text-white transition-colors">مقاولات وإنشاءات</Link></li>
              <li><Link to="/sectors/gyms" className="hover:text-white transition-colors">صالات لياقة</Link></li>
              <li><Link to="/sectors" className="hover:text-white transition-colors text-teal">عرض الكل (23 قطاع)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 text-teal">الدعم</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/help" className="hover:text-white transition-colors">مركز المساعدة</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">تواصل معنا</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">المدونة</Link></li>
              <li><Link to="/einvoicing" className="hover:text-white transition-colors">الفوترة الإلكترونية</Link></li>
              <li><Link to="/student" className="hover:text-white transition-colors">باقة الطلاب</Link></li>
              <li><Link to="/api" className="hover:text-white transition-colors">ربط عبر API</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">سياسة الخصوصية</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">الشروط والأحكام</Link></li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-gray-500 mb-2">متوفر على</p>
              <div className="flex gap-2">
                <a href="#" className="bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-lg text-xs transition-colors">App Store</a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-lg text-xs transition-colors">Google Play</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2025 ڤوم. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <img src="/zatca-badge.svg" alt="زاتكا" className="h-5 w-5 opacity-70" />
              <span className="text-gray-400 text-xs">معتمد من هيئة الزكاة والضريبة والجمارك</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
