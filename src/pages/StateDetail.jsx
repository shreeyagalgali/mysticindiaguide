import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import CategoryCard from '../components/CategoryCard'
import statesData from '../data/states.json'
import categoriesData from '../data/categories.json'

const StateDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [state, setState] = useState(null)

  useEffect(() => {
    const foundState = statesData.find((s) => s.id === parseInt(id))
    setState(foundState)
  }, [id])

  if (!state) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <p className="text-xl text-gray-600">State not found</p>
      </div>
    )
  }

  const categories = [
    { key: 'nature', ...categoriesData.nature },
    { key: 'heritage', ...categoriesData.heritage },
    { key: 'culture', ...categoriesData.culture },
    { key: 'localLife', ...categoriesData.localLife },
    { key: 'hiddenGems', ...categoriesData.hiddenGems },
  ]

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <div className="relative">
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img
            src={state.bannerImage}
            alt={state.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1200x600?text=' + state.name
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              {state.name}
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 card-shadow"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">About</h2>
          <p className="text-gray-600 leading-relaxed">{state.description}</p>
          {state.spiritualSignificance && (
            <div className="mt-4 p-4 bg-pastel-cream rounded-xl">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Spiritual Significance:</span>{' '}
                {state.spiritualSignificance}
              </p>
            </div>
          )}
        </motion.div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Explore Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CategoryCard
                  category={category}
                  stateId={state.id}
                  stateName={state.name}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StateDetail




