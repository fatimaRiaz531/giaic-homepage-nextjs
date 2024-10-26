// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        <p className="mt-2">Follow us on:</p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li><a href="https://twitter.com" className="hover:text-gray-400">Twitter</a></li>
          <li><a href="https://facebook.com" className="hover:text-gray-400">Facebook</a></li>
          <li><a href="https://linkedin.com" className="hover:text-gray-400">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
