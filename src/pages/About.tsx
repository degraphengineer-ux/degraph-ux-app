import { motion } from 'framer-motion'
import { ArrowRight, Award, Target, Users, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            About Degraph-UX
          </motion.h1>
          <motion.p
            className="text-xl text-slate-400 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            A modern creative studio dedicated to crafting premium digital experiences
          </motion.p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-20 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-slate-100 mb-6">Our Story</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-4">
              Degraph-UX is born from a passion for combining creativity with technology. We believe that exceptional digital experiences start with understanding the intersection of design, innovation, and human-centered thinking.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Since our inception, we've been dedicated to delivering premium digital solutions that inspire, engage, and transform brands.
            </p>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/20"
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            <div className="aspect-video bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl flex items-center justify-center">
              <div className="text-6xl">🎨</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-purple-500/50 transition"
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            <Target className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold text-slate-100 mb-3">Our Mission</h3>
            <p className="text-slate-400 leading-relaxed">
              To combine creativity with cutting-edge technology to deliver exceptional digital experiences that exceed expectations and inspire our clients to achieve their digital goals.
            </p>
          </motion.div>
          <motion.div
            className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-pink-500/50 transition"
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            <Zap className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-2xl font-bold text-slate-100 mb-3">Our Vision</h3>
            <p className="text-slate-400 leading-relaxed">
              To be a leading creative studio that empowers brands and individuals through innovative digital solutions, setting new standards for excellence in design and development.
            </p>
          </motion.div>
        </motion.div>

        {/* Expertise */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold text-slate-100 mb-12 text-center"
            variants={itemVariants}
          >
            Our Expertise
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {[
              { title: 'Web Design', items: ['UI/UX Design', 'Responsive Design', 'Design Systems'] },
              { title: 'Development', items: ['Web Dev', 'Full Stack', 'Performance Opt'] },
              { title: 'Creative', items: ['Photography', 'Video Editing', 'Graphic Design'] },
              { title: 'Strategy', items: ['Branding', 'Consulting', 'Digital Strategy'] },
            ].map((category, idx) => (
              <motion.div
                key={idx}
                className="p-6 rounded-xl bg-slate-800/30 border border-slate-700 hover:border-purple-500/50 transition"
                variants={itemVariants}
              >
                <h4 className="font-bold text-purple-400 mb-4">{category.title}</h4>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-slate-400 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition duration-300"
          >
            Explore Our Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
