import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/home" className="text-2xl font-bold bg-gradient-to-r from-pastel-lavender to-pastel-peach bg-clip-text text-transparent">
            🌸 Mystic India Guide
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 rounded-xl bg-pastel-lavender text-white hover:bg-pastel-blue transition-colors duration-300"
          >
            Logout
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar




