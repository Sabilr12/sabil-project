import React from 'react';

const Footer = () => {
  return (
    <footer
      className="py-16 px-6"
      style={{
        backgroundImage: 'url(/img/F4.JPG)', // Ganti dengan path gambar latar belakang yang benar
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Column 1: About Us */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-white">Atiam rhoncus sit amet</h3>
          <p className="text-gray-200 text-sm">
            Adip scing sed ipsum. Lorem ipsum dolor sit amet adipiscing sem neque.
          </p>
        </div>

        {/* Column 2: Contact */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-white">Contact</h3>
          <ul className="text-gray-200 text-sm">
            <li>666 888 0000</li>
            <li>info@company.com</li>
            <li>66 Top Brooklyn Street, New York</li>
          </ul>
        </div>

        {/* Column 3: Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-white">Links</h3>
          <ul className="text-gray-200 text-sm">
            <li>Top Sellers</li>
            <li>Shopping</li>
            <li>About Store</li>
            <li>Contact</li>
            <li>Help</li>
            <li>Explore</li>
            <li>New Products</li>
            <li>My Account</li>
            <li>Support</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-white">Newsletter</h3>
          <p className="text-gray-200 text-sm mb-4">Email Address</p>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 bg-gray-700 text-white border-none rounded-md mb-4"
          />
          <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-500 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-200 mt-12 py-4 border-t border-gray-700">
        <p>&copy; 2025 Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
