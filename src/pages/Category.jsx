import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import PlaceCard from '../components/PlaceCard'
import statesData from '../data/states.json'
import categoriesData from '../data/categories.json'
import placesData from '../data/sample_places.json'

const Category = () => {
  const { id, categoryKey } = useParams()
  const navigate = useNavigate()
  const [state, setState] = useState(null)
  const [category, setCategory] = useState(null)
  const [selectedSubcategory, setSelectedSubcategory] = useState(null)
  const [places, setPlaces] = useState([])

  useEffect(() => {
    const foundState = statesData.find((s) => s.id === parseInt(id))
    setState(foundState)

    // Find category
    const cat = categoriesData[categoryKey]
    if (cat) {
      setCategory(cat)
    }
  }, [id, categoryKey])

  useEffect(() => {
    if (state && categoryKey && placesData[state.name]) {
      const statePlaces = placesData[state.name][categoryKey]
      if (statePlaces) {
        // If subcategory is selected, filter places
        if (selectedSubcategory) {
          const subcategoryPlaces = statePlaces[selectedSubcategory]
          setPlaces(subcategoryPlaces || [])
        } else {
          // Show all places from all subcategories
          const allPlaces = []
          Object.values(statePlaces).forEach((subcatPlaces) => {
            if (Array.isArray(subcatPlaces)) {
              allPlaces.push(...subcatPlaces)
            }
          })
          setPlaces(allPlaces)
        }
      } else {
        setPlaces([])
      }
    }
  }, [state, categoryKey, selectedSubcategory])

  if (!state || !category) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading...</p>
      </div>
    )
  }

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory)
  }

  const getCategoryTitle = () => {
    const categoryName = category.name
    return `${categoryName} of ${state.name}`
  }

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate(`/state/${id}`)}
            className="mb-4 text-pastel-lavender hover:text-pastel-blue transition-colors flex items-center gap-2"
          >
            ← Back to {state.name}
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            {category.icon} {getCategoryTitle()}
          </h1>
          <p className="text-gray-600">Explore the {category.name.toLowerCase()} of {state.name}</p>
        </motion.div>

        {/* Subcategory buttons */}
        {category.subcategories && category.subcategories.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Subcategories</h2>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedSubcategory(null)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  !selectedSubcategory
                    ? 'bg-pastel-lavender text-white shadow-lg'
                    : 'bg-white text-gray-700 card-shadow hover:bg-pastel-cream'
                }`}
              >
                All
              </button>
              {category.subcategories.map((subcategory) => (
                <button
                  key={subcategory}
                  onClick={() => handleSubcategoryClick(subcategory)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    selectedSubcategory === subcategory
                      ? 'bg-pastel-lavender text-white shadow-lg'
                      : 'bg-white text-gray-700 card-shadow hover:bg-pastel-cream'
                  }`}
                >
                  {subcategory}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Places grid */}
        {places.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {places.map((place, index) => (
              <motion.div
                key={place.id || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <PlaceCard place={place} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 text-center card-shadow"
          >
            <p className="text-xl text-gray-600 mb-4">
              No places available for this category yet.
            </p>
            <p className="text-sm text-gray-500">
              More content coming soon!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Category




