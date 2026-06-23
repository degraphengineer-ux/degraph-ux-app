import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Degraph-UX
            </h3>
            <p className="text-sm text-slate-400">
              Creating digital experiences that inspire and innovate.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-200">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/portfolio" className="text-slate-400 hover:text-purple-400">Portfolio</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-purple-400">Services</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-purple-400">Blog</Link></li>
              <li><Link to="/community" className="text-slate-400 hover:text-purple-400">Community</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-200">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-purple-400">Web Design</a></li>
              <li><a href="#" className="text-slate-400 hover:text-purple-400">Photography</a></li>
              <li><a href="#" className="text-slate-400 hover:text-purple-400">Branding</a></li>
              <li><a href="#" className="text-slate-400 hover:text-purple-400">Video Editing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-200">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-purple-400 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">
              © {currentYear} Degraph-UX. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="text-slate-400 hover:text-purple-400 transition">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
