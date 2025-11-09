import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const StateCard = ({ state }) => {
  return (
    <Link to={`/state/${state.id}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        className="bg-white rounded-xl overflow-hidden card-shadow card-hover cursor-pointer"
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={state.cardImage}
            alt={state.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x300?text=' + state.name
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">{state.name}</h3>
        </div>
      </motion.div>
    </Link>
  )
}

export default StateCard




