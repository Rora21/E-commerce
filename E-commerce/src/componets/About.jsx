import React from 'react';
import Comfort from '../assets/image/comfort.jpg'

function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row items-center justify-center px-8 py-12">
      
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
         src='comfort.jpg'
          alt="Interior design setup"
          className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left">
        <h2 className="text-4xl font-semibold text-[#83723A] mb-4">
          About Flamingo Designs
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          At <span className="font-semibold">Flamingo Designs</span>, we believe your home should feel like a sanctuary —
          a space filled with comfort, style, and personality. Our handcrafted
          pillows, cushions, and sofa accessories are made with love and care to
          bring warmth and beauty to your interiors.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Every product we create combines fine craftsmanship with elegant design.
          Whether it’s a soft velvet cushion, a chic sofa throw, or a detailed
          interior accent, our collections are designed to elevate your living
          space with a touch of luxury and coziness.
        </p>
        <p className="text-[#83723A] font-medium">
          We don’t just design interiors — we design comfort. 
        </p>
      </div>

    </div>
  );
}

export default About;
