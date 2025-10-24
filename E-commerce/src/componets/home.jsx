import React from 'react'
import backgroundImg from "../assets/image/bg.jpg";  

function home() {
  return (
      <section
      className="relative flex items-center justify-center h-[90vh] bg-cover bg-center"
    
      style={{
        backgroundImage:
          `url(${backgroundImg})`,
      }}
    >
      {}
      <div className="absolute inset-0 bg-white/20"></div>

      {/* Centered text box */}
      <div className="relative bg-white/80 border border-[#83723A] px-10 py-8 text-center shadow-md">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#83723A] tracking-wide mb-3">
          FLAMINGO DESIGNS
        </h1>
        <div className="border-t border-[#83723A] w-32 mx-auto mb-3"></div>
        <p className="uppercase text-[#83723A] tracking-[0.3em] text-sm">
          Hand Crafted Collection
        </p>
      </div>
    </section>
  )
}

export default home
