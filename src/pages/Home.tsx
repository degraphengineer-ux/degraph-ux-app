import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Code, Camera, Palette } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center min-h-[80vh]">
        <motion.div
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="inline-block"
            variants={itemVariants}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/50 text-purple-300 text-sm font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Welcome to Degraph-UX
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Create. Innovate.
            </span>
            <br />
            <span className="text-slate-100">Inspire.</span>
          </motion.h1>

          <motion.p
            className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Degraph-UX is a creative platform for design, development, photography, and digital innovation. Crafting the future of digital creativity.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 hover:-translate-y-1 transition duration-300"
            >
              View Portfolio
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-slate-700 bg-slate-800/50 hover:bg-slate-700/50 text-slate-200 font-semibold transition duration-300"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-100 mb-4">Featured Services</h2>
          <p className="text-slate-400 text-lg">Everything you need for creative excellence</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              title: 'Web Design',
              description: 'Modern, responsive, and beautiful web experiences',
              icon: Palette,
              color: 'from-blue-500 to-purple-500',
            },
            {
              title: 'Photography',
              description: 'Professional photography that tells your story',
              icon: Camera,
              color: 'from-purple-500 to-pink-500',
            },
            {
              title: 'Development',
              description: 'Cutting-edge web development with latest technologies',
              icon: Code,
              color: 'from-pink-500 to-red-500',
            },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                className="p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-slate-600 transition duration-300 group cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -12 }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl text-slate-100 mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      {/* Quick Access */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { label: 'Portfolio', path: '/portfolio', icon: '🖼' },
            { label: 'Services', path: '/services', icon: '💼' },
            { label: 'Blog', path: '/blog', icon: '📝' },
            { label: 'Community', path: '/community', icon: '👥' },
          ].map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-purple-500/50 hover:bg-slate-800 transition duration-300 group text-center"
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <p className="text-slate-200 font-semibold text-sm group-hover:text-purple-400 transition">
                {item.label}
              </p>
            </Link>
          ))}
        </motion.div>
      </section>
    </div>
  )
}
