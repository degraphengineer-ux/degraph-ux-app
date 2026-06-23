import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Moon, Sun, Bell, User, Search } from 'lucide-react'
import { useStore } from '@/stores/appStore'
import { motion } from 'framer-motion'

interface NavigationProps {
  onMenuClick?: () => void
}

export default function Navigation({ onMenuClick }: NavigationProps) {
  const { theme, setTheme } = useStore()
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <nav className="sticky top-0 z-40 backdrop-blur-xl bg-slate-900/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">DU</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Degraph-UX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-slate-300 hover:text-purple-400 transition">
              Home
            </Link>
            <Link to="/portfolio" className="text-sm font-medium text-slate-300 hover:text-purple-400 transition">
              Portfolio
            </Link>
            <Link to="/services" className="text-sm font-medium text-slate-300 hover:text-purple-400 transition">
              Services
            </Link>
            <Link to="/blog" className="text-sm font-medium text-slate-300 hover:text-purple-400 transition">
              Blog
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 text-sm hover:bg-slate-800 transition">
              <Search className="w-4 h-4" />
              <span>Search</span>
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-slate-800 rounded-lg transition"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>

            <button className="relative p-2 hover:bg-slate-800 rounded-lg transition">
              <Bell className="w-5 h-5" />
              <motion.span 
                className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </button>

            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="p-2 hover:bg-slate-800 rounded-lg transition"
            >
              <User className="w-5 h-5" />
            </button>

            <button
              onClick={onMenuClick}
              className="md:hidden p-2 hover:bg-slate-800 rounded-lg transition"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
