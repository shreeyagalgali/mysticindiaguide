import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PlaceCard = ({ place }) => {
  const [showMap, setShowMap] = useState(false)

  // Note: Replace YOUR_GOOGLE_MAPS_KEY with your actual Google Maps API key
  const MAP_API_KEY = 'YOUR_GOOGLE_MAPS_KEY'
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${MAP_API_KEY}&q=${place.lat},${place.lng}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl overflow-hidden card-shadow card-hover"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={place.image}
          alt={place.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300?text=' + place.title
          }}
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{place.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{place.description}</p>
        <p className="text-xs text-gray-500 mb-4">📍 {place.location}</p>
        <button
          onClick={() => setShowMap(!showMap)}
          className="w-full px-4 py-2 rounded-xl bg-pastel-mint text-white hover:bg-pastel-blue transition-colors duration-300"
        >
          {showMap ? 'Hide Map' : 'View on Map'}
        </button>
      </div>
      <AnimatePresence>
        {showMap && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 border-t border-gray-200">
              {MAP_API_KEY === 'YOUR_GOOGLE_MAPS_KEY' ? (
                <div className="bg-pastel-cream rounded-lg p-8 text-center">
                  <p className="text-gray-700 mb-2">
                    📍 Map Preview (Placeholder)
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Location: {place.location}
                  </p>
                  <p className="text-xs text-gray-500">
                    To enable maps, replace <code className="bg-white px-2 py-1 rounded">YOUR_GOOGLE_MAPS_KEY</code> in PlaceCard.jsx with your Google Maps API key
                  </p>
                </div>
              ) : (
                <iframe
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={mapUrl}
                  title={place.title}
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default PlaceCard

