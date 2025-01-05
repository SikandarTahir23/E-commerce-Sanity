import React from 'react';
import Image from 'next/image';
import pic1 from '../about-banner.jpg'
import mission from '../mision.png'
import vision from '../vision.jpeg'
import story from '../story.png'
import tem1 from '../team1.jpg'
import tem2 from '../team2.jpg'
import tem3 from '../team3.jpg'
import logo1 from '../logo1.png'
import logo2 from '../logo2.png'
import logo3 from '../logo3.png'
const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 ">About Our Store</h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Welcome to our eCommerce platform where we deliver the best products and
            experiences. Your satisfaction is our priority!
          </p>
        </div>
        <Image
          src={pic1} // Replace with a hero image URL
          width = {400}
          height = {300}
          alt="Ecommerce Banner"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Mission, Vision & Story */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16 grid gap-12 sm:grid-cols-3">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <Image
            src={mission} // Replace with mission icon URL
            alt="Mission Icon"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To provide high-quality products with exceptional service that exceeds
            customer expectations.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <Image
            src={vision} // Replace with vision icon URL
            alt="Vision Icon"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-600">
            To become a trusted global brand, connecting people to their needs and
            dreams through innovation.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <Image
            src={story} // Replace with story icon URL
            alt="Story Icon"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Our Story</h2>
          <p className="text-gray-600">
            From humble beginnings to becoming a leading eCommerce platform, our journey
            reflects hard work and dedication.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white shadow-md rounded-lg p-6 w-72 text-center">
              <Image
                src={tem1}
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-gray-500">Founder & CEO</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 w-72 text-center">
              <Image
                src={tem2}
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">Jane Smith</h3>
              <p className="text-gray-500">Head of Marketing</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 w-72 text-center">
              <Image
                src={tem3}
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">Emily Brown</h3>
              <p className="text-gray-500">Lead Developer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Logos */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16">
        <h2 className="text-center text-3xl font-bold mb-8">Our Trusted Partners</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <Image
            src={logo1}
            alt="Brand 1"
            className="w-24 h-auto"
          />
          <Image
            src={logo2}
            alt="Brand 2"
            className="w-24 h-auto"
          />
          <Image
            src={logo3}
            alt="Brand 3"
            className="w-24 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
