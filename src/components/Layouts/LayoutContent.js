import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

function LayoutContent ({ children }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.7 }}>
      {children}
    </motion.div>
  )
}

LayoutContent.propTypes = {
  children: PropTypes.node.isRequired
}

export default LayoutContent
