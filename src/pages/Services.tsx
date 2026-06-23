import { motion } from 'framer-motion'
import { Check, ArrowRight, Star } from 'lucide-react'
import { useState } from 'react'

const services = [
  {
    id: 1,
    title: 'Web Design',
    icon: '🎨',
    price: '$999',
    description: 'Modern, responsive web design tailored to your brand',
    features: [
      'Custom responsive design',
      'UI/UX optimization',
      'Interactive prototypes',
      'Design system',
      'Unlimited revisions',
    ],
    color: 'from-blue-600 to-purple-600',
  },
  {
    id: 2,
    title: 'Web Development',
    icon: '💻',
    price: '$1,499',
    description: 'High-performance web applications with latest technologies',
    features: [
      'React/Vue development',
      'Full-stack solutions',
      'Database integration',
      'API development',
      'Performance optimization',
    ],
    color: 'from-purple-600 to-pink-600',
  },
  {
    id: 3,
    title: 'Graphic Design',
    icon: '🖌️',
    price: '$599',
    description: 'Eye-catching graphic designs for all your needs',
    features: [
      'Logo design',
      'Brand guidelines',
      'Marketing materials',
      'Social media graphics',
      'Print ready files',
    ],
    color: 'from-pink-600 to-red-600',
  },
  {
    id: 4,
    title: 'Photography',
    icon: '📸',
    price: '$799',
    description: 'Professional photography for products, events, and more',
    features: [
      'Professional shoot',
      'On-location services',
      'Photo retouching',
      'High-res images',
      '50+ edited photos',
    ],
    color: 'from-orange-600 to-yellow-600',
  },
  {
    id: 5,
    title: 'Video Editing',
    icon: '🎬',
    price: '$899',
    description: 'Professional video editing with stunning visual effects',
    features: [
      'Video editing',
      'Color grading',
      'Visual effects',
      'Sound design',
      '4K delivery',
    ],
    color: 'from-green-600 to-teal-600',
  },
  {
    id: 6,
    title: 'Branding',
    icon: '⭐',
    price: '$1,299',
    description: 'Complete branding and identity design package',
    features: [
      'Logo design',
      'Brand strategy',
      'Visual identity',
      'Brand guidelines',
      'Marketing collateral',
    ],
    color: 'from-indigo-600 to-purple-600',
  },
]

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

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
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl text-slate-400 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Premium digital services tailored to elevate your brand
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              className={`relative rounded-2xl border transition duration-300 p-8 group cursor-pointer ${
                selectedService === service.id
                  ? 'bg-slate-800/80 border-purple-500/50 ring-2 ring-purple-500/20'
                  : 'bg-slate-800/40 border-slate-700 hover:border-purple-500/50'
              }`}
              variants={itemVariants}
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              whileHover={{ y: -8 }}
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{service.icon}</div>

              {/* Title & Price */}
              <h3 className="text-2xl font-bold text-slate-100 mb-2">{service.title}</h3>
              <p className={`text-3xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-4`}>
                {service.price}
              </p>

              {/* Description */}
              <p className="text-slate-400 text-sm mb-6">{service.description}</p>

              {/* Features */}
              <motion.div
                className="space-y-3 mb-6"
                initial={{ opacity: 0 }}
                animate={selectedService === service.id ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {selectedService === service.id && service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                    <Check className="w-4 h-4 text-purple-400" />
                    {feature}
                  </div>
                ))}
              </motion.div>

              {/* Button */}
              <button className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 hover:shadow-lg hover:shadow-purple-500/30 text-white font-semibold transition duration-300 flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
