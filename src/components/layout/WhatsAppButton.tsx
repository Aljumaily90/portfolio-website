'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useState } from 'react'

const WA_URL =
  'https://wa.me/41791016465?text=Hallo%20Ahmad%2C%20ich%20interessiere%20mich%20f%C3%BCr%20deine%20Leistungen.'

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      <motion.span
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 10 }}
        transition={{ duration: 0.2 }}
        className="bg-[#111118] text-white text-sm px-3 py-2 rounded-lg border border-[#1E1E2E] whitespace-nowrap pointer-events-none"
      >
        WhatsApp schreiben
      </motion.span>

      {/* Button */}
      <motion.a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp schreiben"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileTap={{ scale: 0.9 }}
        className="relative w-14 h-14 sm:w-12 sm:h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:bg-[#1ebe5d] transition-colors"
      >
        {/* Pulse ring */}
        <motion.span
          className="absolute inset-0 rounded-full bg-[#25D366]"
          animate={{ scale: [1, 1.4, 1.4], opacity: [0.4, 0, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
        />
        <MessageCircle size={24} className="text-white relative z-10" />
      </motion.a>
    </div>
  )
}
