import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CategoryCard = ({ category, stateId, stateName }) => {
  const categoryKey = category.key || category.name.toLowerCase().replace(/\s+/g, '')
  
  return (
    <Link to={`/state/${stateId}/${categoryKey}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, y: -5 }}
        className="bg-white rounded-xl p-6 card-shadow card-hover cursor-pointer border-l-4 border-pastel-mint"
      >
        <div className="flex items-center gap-4">
          <div className="text-4xl">{category.icon}</div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
            <p className="text-sm text-gray-500 mt-1">Explore {category.name.toLowerCase()} of {stateName}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default CategoryCard




