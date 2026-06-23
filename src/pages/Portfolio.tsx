import { motion } from 'framer-motion'
import { Star, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const portfolioData = [
  {
    id: 1,
    title: 'E-Commerce Website',
    category: 'Web Design',
    image: '🛍️',
    description: 'Modern e-commerce platform with high performance',
    tags: ['React', 'Tailwind', 'Payment'],
  },
  {
    id: 2,
    title: 'Brand Identity Design',
    category: 'Graphic Design',
    image: '🎨',
    description: 'Complete branding package for tech startup',
    tags: ['Logo', 'Colors', 'Guidelines'],
  },
  {
    id: 3,
    title: 'Photography Series',
    category: 'Photography',
    image: '📸',
    description: 'Professional product photography collection',
    tags: ['Studio', 'Lighting', 'Editing'],
  },
  {
    id: 4,
    title: 'Mobile App Design',
    category: 'Web Design',
    image: '📱',
    description: 'Native iOS app with beautiful UI',
    tags: ['iOS', 'Swift', 'Design'],
  },
  {
    id: 5,
    title: 'Video Production',
    category: 'Video Editing',
    image: '🎬',
    description: 'Commercial video with professional editing',
    tags: ['4K', 'VFX', 'Sound'],
  },
  {
    id: 6,
    title: 'UI/UX Design System',
    category: 'Web Design',
    image: '🎯',
    description: 'Comprehensive design system for enterprise',
    tags: ['Components', 'Patterns', 'Docs'],
  },
]

const categories = ['All', 'Web Design', 'Graphic Design', 'Photography', 'Video Editing']

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All'
    ? portfolioData
    : portfolioData.filter(p => p.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            My Portfolio
          </motion.h1>
          <motion.p
            className="text-xl text-slate-400"
            variants={itemVariants}
          >
            Showcase of my best work in design, development, and creativity
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white'
                  : 'bg-slate-800/50 text-slate-300 border border-slate-700 hover:border-purple-500/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="group rounded-2xl bg-slate-800/50 border border-slate-700 overflow-hidden hover:border-purple-500/50 transition duration-300 cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -12 }}
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center text-6xl group-hover:scale-110 transition duration-300">
                {project.image}
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-purple-400 text-sm font-medium mb-2">{project.category}</p>
                <h3 className="text-xl font-bold text-slate-100 mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 rounded text-xs bg-slate-700/50 text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button className="w-full py-2 rounded-lg bg-slate-700/50 hover:bg-purple-600/30 text-slate-200 text-sm font-medium transition duration-300 flex items-center justify-center gap-2">
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
