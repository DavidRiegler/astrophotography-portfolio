'use client'

import { useState } from 'react'
import Image from 'next/image'
import Masonry from 'react-masonry-css'
import { motion } from 'framer-motion'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const images = [
  { src: '/Horsehead-Nebula.jpg', alt: 'Horsehead Nebula' },
  { src: '/Milky-Way.jpg', alt: 'Milky Way' },
  { src: '/Mineral-Moon.png', alt: 'Mineral Moon' },
  { src: '/North-America-Nebula.jpg', alt: 'North America Nebula' },
  { src: '/Orion-Nebula-Halpha.jpg', alt: 'Orion Nebula' },
  { src: '/Pleiades.jpg', alt: 'Pleiades' },
  { src: '/Rosette-Nebula.jpg', alt: 'Rosette Nebula' },
  { src: '/Veil-Nebula.png', alt: 'Veil Nebula' },
  { src: '/Triangulum-Galaxy.jpg', alt: 'Triangulum Galaxy' }
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({})

  const handleImageError = (src: string) => {
    setImageError(prev => ({ ...prev, [src]: true }))
  }

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Gallery</h2>
        <Masonry
          breakpointCols={{
            default: 3,
            1100: 2,
            700: 1
          }}
          className="flex w-auto"
          columnClassName="bg-clip-padding px-2"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mb-4 cursor-pointer relative"
              onClick={() => setSelectedImage(image)}
            >
              {imageError[image.src] ? (
                <div className="w-full h-[400px] bg-gray-800 rounded-lg flex items-center justify-center">
                  <ExclamationTriangleIcon className="h-12 w-12 text-yellow-500" />
                  <span className="sr-only">Image failed to load</span>
                </div>
              ) : (
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-[400px]"
                  onError={() => handleImageError(image.src)}
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
                <p className="text-sm">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          {imageError[selectedImage.src] ? (
            <div className="w-full max-w-2xl h-[600px] bg-gray-800 rounded-lg flex items-center justify-center">
              <ExclamationTriangleIcon className="h-24 w-24 text-yellow-500" />
              <span className="sr-only">Image failed to load</span>
            </div>
          ) : (
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain"
              onError={() => handleImageError(selectedImage.src)}
            />
          )}
        </div>
      )}
    </section>
  )
}