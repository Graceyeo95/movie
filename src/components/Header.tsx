import React from 'react';
import logo from '../assets/movie-logo.png';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Movies', path: '/movies' },
  { label: 'TV Shows', path: '/tv-shows' },
  { label: 'People', path: '/people' },
];

export const Header = () => {
  return (
    <header className='fixed w-full top-0 bg-white'>
      <div className='mx-auto py-4 px-10 flex items-center justify-between'>
        <div>
          <img src={logo} alt='movie logo' width={100} />
        </div>

        <nav>
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className='ml-4 text-lg lg:text-2xl text-gray-800 hover:text-gray-600'
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};
