import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-4 text-center text-white bg-gray-800">
      &copy; {new Date().getFullYear()} Profile App
    </footer>
  );
};

export default Footer;
