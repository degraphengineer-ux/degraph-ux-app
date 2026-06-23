import { motion } from 'framer-motion'
import { Heart, MessageCircle, Share2, Calendar } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: '10 Tips for Better UI/UX Design',
    category: 'Design',
    image: '🎨',
    excerpt: 'Learn the essential principles to create stunning user interfaces and experiences.',
    date: 'May 23, 2024',
    readTime: '5 min read',
    views: '2.5K',
  },
  {
    id: 2,
    title: 'Web Development Trends in 2024',
    category: 'Development',
    image: '💻',
    excerpt: 'Explore the latest technologies and frameworks shaping web development.',
    date: 'May 20, 2024',
    readTime: '8 min read',
    views: '1.8K',
  },
  {
    id: 3,
    title: 'Professional Photography Lighting',
    category: 'Photography',
    image: '📸',
    excerpt: 'Master the art of lighting to capture professional-grade photographs.',
    date: 'May 18, 2024',
    readTime: '6 min read',
    views: '1.2K',
  },
  {
    id: 4,
    title: 'Video Editing Best Practices',
    category: 'Video',
    image: '🎬',
    excerpt: 'Techniques and tips to create engaging and professional videos.',
    date: 'May 15, 2024',
    readTime: '7 min read',
    views: '956',
  },
  {
    id: 5,
    title: 'Building Better Design Systems',
    category: 'Design',
    image: '🎯',
    excerpt: 'Create scalable and maintainable design systems for your products.',
    date: 'May 12, 2024',
    readTime: '9 min read',
    views: '2.1K',
  },
  {
    id: 6,
    title: 'Color Psychology in Branding',
    category: 'Branding',
    image: '🎨',
    excerpt: 'Understand how colors influence perception and brand recognition.',
    date: 'May 10, 2024',
    readTime: '5 min read',
    views: '1.5K',
  },
]

const categories = ['All', 'Design', 'Development', 'Photography', 'Video', 'Branding']

export default function Blog() {
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
            Blog & Learning Hub
          </motion.h1>
          <motion.p
            className="text-xl text-slate-400"
            variants={itemVariants}
          >
            Articles, tutorials, and insights on design and development
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
              className="px-6 py-2 rounded-full text-sm font-medium transition duration-300 bg-slate-800/50 text-slate-300 border border-slate-700 hover:border-purple-500/50 hover:text-purple-400"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="group rounded-2xl bg-slate-800/50 border border-slate-700 overflow-hidden hover:border-purple-500/50 transition duration-300 cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -12 }}
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center text-6xl group-hover:scale-110 transition duration-300">
                {post.image}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-purple-600/20 text-purple-400 text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-400">{post.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-100 mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <div className="flex items-center gap-2 text-slate-400 text-xs">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-slate-700/50 rounded-lg transition">
                      <Heart className="w-4 h-4 text-slate-400 hover:text-red-400" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
