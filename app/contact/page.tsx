import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4 sm:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">
        Contact Us
      </h1>
      <p className="text-base sm:text-lg text-gray-600 text-center max-w-xl mb-8">
        Have any questions or feedback? We&apos;d love to hear from you! Fill out the form
        below or connect with us on LinkedIn or GitHub.
      </p>

      {/* Contact Form */}
      <form className="w-full max-w-sm sm:max-w-md bg-white shadow-md rounded-md p-4 sm:p-6 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          placeholder="Your Message"
          rows= {4}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Social Media Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8">
        <a
          href="https://www.linkedin.com/in/sikandar-tahir-356a56273/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-blue-600 text-white py-3 px-6 rounded-md shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-blue-700"
        >
          <i className="fab fa-linkedin text-lg mr-2"></i> LinkedIn
        </a>
        <a
          href="https://github.com/SikandarTahir23" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-gray-800 text-white py-3 px-6 rounded-md shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-black"
        >
          <i className="fab fa-github text-lg mr-2"></i> GitHub
        </a>
      </div>
    </div>
  );
};

export default Contact;
