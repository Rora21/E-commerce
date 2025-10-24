import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-8 py-12">
      <h2 className="text-4xl font-semibold text-[#83723A] mb-6">Contact Us</h2>
      <p className="text-gray-700 mb-8 text-center max-w-xl">
        Have a question or custom order? We'd love to hear from you!
        Reach out and our team will get back to you soon.
      </p>

      <form className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#83723A]"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#83723A]"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            placeholder="Write your message..."
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#83723A]"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#83723A] text-white py-2 rounded-md hover:bg-[#6f622e] transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
