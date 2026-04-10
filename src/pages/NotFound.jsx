import { Link } from 'react-router-dom'
import { Home, Search, ChevronLeft } from 'lucide-react'

const links = [
  { to: '/', label: 'الرئيسية' },
  { to: '/features', label: 'المميزات' },
  { to: '/pricing', label: 'الأسعار' },
  { to: '/sectors', label: 'القطاعات' },
  { to: '/apps', label: 'التكاملات' },
  { to: '/contact', label: 'تواصل معنا' },
]

export default function NotFound() {
  return (
    <div className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-16 right-20 opacity-60" width="48" height="48" viewBox="0 0 48 48" fill="none">
          <line x1="2" y1="2" x2="46" y2="46" stroke="#FF7300" strokeWidth="6" strokeLinecap="round"/>
          <line x1="46" y1="2" x2="2" y2="46" stroke="#FF7300" strokeWidth="6" strokeLinecap="round"/>
        </svg>
        <svg className="absolute bottom-20 left-24 opacity-50" width="44" height="44" viewBox="0 0 44 44" fill="none">
          <line x1="0" y1="12" x2="44" y2="12" stroke="#E040A0" strokeWidth="4" strokeLinecap="round" transform="rotate(-35 22 22)"/>
          <line x1="0" y1="24" x2="44" y2="24" stroke="#E040A0" strokeWidth="4" strokeLinecap="round" transform="rotate(-35 22 22)"/>
          <line x1="0" y1="36" x2="44" y2="36" stroke="#E040A0" strokeWidth="4" strokeLinecap="round" transform="rotate(-35 22 22)"/>
        </svg>
      </div>

      <div className="relative text-center px-4 sm:px-6 max-w-2xl mx-auto">
        <div className="text-8xl font-black text-white/20 mb-2 leading-none">404</div>
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">
          هذه الصفحة غير موجودة
        </h1>
        <p className="text-white/70 text-lg mb-10">
          ربما الرابط خاطئ أو تم نقل الصفحة.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white font-black px-8 py-4 rounded-2xl shadow-xl shadow-orange/40 transition-all hover:scale-105"
          >
            <Home size={20} />
            الرئيسية
          </Link>
          <Link
            to="/help"
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl transition-all"
          >
            <Search size={20} />
            مركز المساعدة
          </Link>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
          <p className="text-white/60 text-sm mb-4">أو اذهب إلى</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white text-sm font-bold px-4 py-2 rounded-xl transition-all"
              >
                {l.label}
                <ChevronLeft size={14} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
