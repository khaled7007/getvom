import {
  UtensilsCrossed,
  ShoppingBag,
  Shirt,
  ShoppingCart,
  Wrench,
  Truck,
  Plane,
  Scissors,
  Sparkles,
  Scale,
  HardHat,
  BookOpen,
  TrendingUp,
  Settings,
  CalendarDays,
  Megaphone,
  Dumbbell,
  Printer,
  Star,
  Crown,
  Baby,
  Car,
  Palette,
} from 'lucide-react'

const iconMap = {
  restaurants:  UtensilsCrossed,
  retail:       ShoppingBag,
  clothing:     Shirt,
  ecommerce:    ShoppingCart,
  services:     Wrench,
  logistics:    Truck,
  tourism:      Plane,
  salons:       Scissors,
  perfumes:     Sparkles,
  legal:        Scale,
  construction: HardHat,
  bookstores:   BookOpen,
  investment:   TrendingUp,
  'auto-repair': Settings,
  events:       CalendarDays,
  marketing:    Megaphone,
  gyms:         Dumbbell,
  print:        Printer,
  influencers:  Star,
  fashion:      Crown,
  kids:         Baby,
  carwash:      Car,
  design:       Palette,
}

export default function SectorIcon({ slug, size = 24, className = '' }) {
  const Icon = iconMap[slug]
  if (!Icon) return null
  return <Icon size={size} className={className} />
}
