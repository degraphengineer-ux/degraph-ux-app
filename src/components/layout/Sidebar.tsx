import { Link } from 'react-router-dom'
import { X, Home, Image, Briefcase, BookOpen, ShoppingCart, Camera, Users, Palette, MessageSquare, Calendar, Cloud, BarChart3, Settings } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const menuItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/about', label: 'About', icon: Home },
  { path: '/portfolio', label: 'Portfolio', icon: Image },
  { path: '/services', label: 'Services', icon: Briefcase },
  { path: '/blog', label: 'Blog', icon: BookOpen },
  { path: '/marketplace', label: 'Marketplace', icon: ShoppingCart },
  { path: '/photography', label: 'Photography', icon: Camera },
  { path: '/community', label: 'Community', icon: Users },
  { path: '/design-studio', label: 'Design Studio', icon: Palette },
  { path: '/messages', label: 'Messages', icon: MessageSquare },
  { path: '/booking', label: 'Booking', icon: Calendar },
  { path: '/cloud-storage', label: 'Cloud Storage', icon: Cloud },
  { path: '/analytics', label: 'Analytics', icon: BarChart3 },
  { path: '/settings', label: 'Settings', icon: Settings },
]

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 md:hidden z-30"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <motion.aside
        className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-slate-900/95 border-r border-slate-800 md:relative md:top-0 md:h-auto md:w-64 overflow-y-auto z-40"
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-4 space-y-2">
          {menuItems.map(({ path, label, icon: Icon }, idx) => (
            <Link
              key={path}
              to={path}
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-purple-400 hover:bg-slate-800/50 transition"
            >
              <Icon className="w-5 h-5" />
              {label}
            </Link>
          ))}
        </div>
      </motion.aside>
    </>
  )
}
