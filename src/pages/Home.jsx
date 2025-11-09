import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import StateCard from '../components/StateCard'
import statesData from '../data/states.json'

const Home = () => {
  const [states, setStates] = useState([])

  useEffect(() => {
    setStates(statesData)
  }, [])

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Explore the 29 States of Incredible India 🇮🇳
          </h1>
          <p className="text-lg text-gray-600">
            Discover nature, heritage, culture, and hidden gems across India
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {states.map((state, index) => (
            <motion.div
              key={state.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <StateCard state={state} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Home




