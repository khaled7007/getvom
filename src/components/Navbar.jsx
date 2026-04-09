import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'الرئيسية', to: '/' },
  { label: 'عن ڤوم', to: '/about' },
  { label: 'القطاعات', to: '/sectors' },
  { label: 'المميزات', to: '/features' },
  { label: 'الأسعار', to: '/pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

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
        <nav className="hidden md:flex items-center gap-8">
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
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 flex flex-col gap-2">
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
