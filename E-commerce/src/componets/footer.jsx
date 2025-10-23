import React from 'react'

function Footer() {
  return (
    <div className="bg-white shadow mt-8">
      <div className="max-w-6xl mx-auto px-4 py-4 text-center text-gray-600">
        &copy; {new Date().getFullYear()} Sunrise Store. All rights reserved.

      </div>
    </div>
  )
}

export default Footer
