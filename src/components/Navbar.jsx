import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, BookOpen, Newspaper, FileText, HelpCircle, Receipt, Code2, GraduationCap, Scale } from 'lucide-react'

const navLinks = [
  { label: 'الرئيسية', to: '/' },
  { label: 'عن ڤوم', to: '/about' },
  { label: 'القطاعات', to: '/sectors' },
  { label: 'المميزات', to: '/features' },
  { label: 'التكاملات', to: '/apps' },
  { label: 'برنامج نمو', to: '/growth' },
  { label: 'الأسعار', to: '/pricing' },
]

const supportLinks = [
  { icon: <BookOpen size={16} />, label: 'المدونة', to: '/blog', desc: 'مقالات ونصائح محاسبية' },
  { icon: <Newspaper size={16} />, label: 'الأخبار', to: '/blog', desc: 'آخر أخبار ڤوم' },
  { icon: <FileText size={16} />, label: 'برنامج المحاسبة', to: '/accounting-software', desc: 'الدليل الشامل 2025' },
  { icon: <HelpCircle size={16} />, label: 'الأسئلة الشائعة', to: '/help', desc: 'إجابات لأكثر الأسئلة' },
  { icon: <Receipt size={16} />, label: 'الفوترة الإلكترونية', to: '/einvoicing', desc: 'امتثال زاتكا الكامل' },
  { icon: <Receipt size={16} />, label: 'فواتير المبيعات', to: '/einvoicing', desc: 'إصدار وإدارة الفواتير' },
  { icon: <GraduationCap size={16} />, label: 'باقة الطلاب', to: '/student', desc: 'مجاناً لطلاب الجامعات' },
  { icon: <Code2 size={16} />, label: 'ربط عبر API', to: '/api', desc: 'للمطورين والأنظمة' },
  { icon: <Scale size={16} />, label: 'الشروط والأحكام', to: '/terms', desc: 'سياسات الاستخدام' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [supportOpen, setSupportOpen] = useState(false)
  const [mobileSupport, setMobileSupport] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setSupportOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setSupportOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const supportActive = supportLinks.some(l => location.pathname === l.to)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg shadow-teal/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/vom-logo.webp"
            alt="ڤوم"
            className={`h-9 w-auto transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link text-sm font-semibold transition-colors ${
                scrolled ? 'text-gray-700 hover:text-teal' : 'text-white/90 hover:text-white'
              } ${location.pathname === link.to ? 'text-teal' : ''}`}
            >
              {link.label}
            </Link>
          ))}

          {/* دعم الأعمال dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setSupportOpen(!supportOpen)}
              className={`flex items-center gap-1 text-sm font-semibold transition-colors ${
                scrolled ? 'text-gray-700 hover:text-teal' : 'text-white/90 hover:text-white'
              } ${supportActive ? 'text-teal' : ''}`}
            >
              دعم الأعمال
              <ChevronDown size={14} className={`transition-transform duration-200 ${supportOpen ? 'rotate-180' : ''}`} />
            </button>

            {supportOpen && (
              <div className="absolute top-full right-0 mt-3 w-72 bg-white rounded-2xl shadow-xl shadow-black/10 border border-gray-100 overflow-hidden z-50">
                <div className="p-2">
                  {supportLinks.map((l) => (
                    <Link
                      key={l.label}
                      to={l.to}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group"
                    >
                      <div className="w-8 h-8 bg-teal/10 rounded-lg flex items-center justify-center text-teal flex-shrink-0 group-hover:bg-teal group-hover:text-white transition-colors">
                        {l.icon}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-800">{l.label}</p>
                        <p className="text-xs text-gray-400">{l.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.getvom.com"
            className="text-sm font-semibold text-teal bg-teal/10 hover:bg-teal/20 px-4 py-2 rounded-lg transition-all"
          >
            تسجيل الدخول
          </a>
          <a
            href="https://app.getvom.com/register"
            className="text-sm font-bold text-white bg-orange hover:bg-orange-dark px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-orange/30"
          >
            جرّب مجاناً
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-gray-700' : 'text-white'
          }`}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  location.pathname === link.to
                    ? 'bg-teal/10 text-teal'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile support dropdown */}
            <button
              onClick={() => setMobileSupport(!mobileSupport)}
              className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              دعم الأعمال
              <ChevronDown size={14} className={`transition-transform duration-200 ${mobileSupport ? 'rotate-180' : ''}`} />
            </button>

            {mobileSupport && (
              <div className="bg-gray-50 rounded-xl overflow-hidden mx-2">
                {supportLinks.map((l) => (
                  <Link
                    key={l.label}
                    to={l.to}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-0"
                  >
                    <div className="w-7 h-7 bg-teal/10 rounded-lg flex items-center justify-center text-teal flex-shrink-0">
                      {l.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{l.label}</span>
                  </Link>
                ))}
              </div>
            )}

            <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
              <a
                href="https://app.getvom.com/register"
                className="text-center text-sm font-bold text-white bg-orange px-5 py-3 rounded-xl"
              >
                جرّب مجاناً، 30 يوم
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
