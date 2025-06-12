import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-3 border-b border-gray-400 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
        <h3 className="font-extrabold text-2xl tracking-wide text-black">Club Finder</h3>

        <div className="hidden md:flex space-x-8 font-semibold text-gray-700">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-black' : 'text-gray-400'}>Home</NavLink>
          <NavLink to="/clubs" className={({ isActive }) => isActive ? 'text-black' : 'text-gray-400'}>Club List</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-black' : 'text-gray-400'}>About</NavLink>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden px-6 pt-2 pb-4 space-y-2 font-semibold text-gray-700">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'block text-black' : 'block text-gray-400'}>Home</NavLink>
          <NavLink to="/clubs" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'block text-black' : 'block text-gray-400'}>Club List</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'block text-black' : 'block text-gray-400'}>About</NavLink>
        </div>
      )}
    </div>
  );
}

export default Navbar;
