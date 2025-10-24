import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#83723A] text-white py-8 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a href="#" className="hover:text-gray-200"><FaFacebook size={20} /></a>
        <a href="#" className="hover:text-gray-200"><FaInstagram size={20} /></a>
        <a href="#" className="hover:text-gray-200"><FaTwitter size={20} /></a>
      </div>
      <p className="text-sm">© {new Date().getFullYear()} Flamingo Designs. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
