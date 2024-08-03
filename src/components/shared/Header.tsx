import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 py-4 text-white bg-gray-800">
      <nav className="container flex items-center justify-between mx-auto">
        <Link to="/" className="text-xl font-bold">
          Profile App
        </Link>
        <div>
          <Link to="/" className="mr-4">
            Profile List
          </Link>
          <Link to="/admin" className="mr-4">
            Admin Panel
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
