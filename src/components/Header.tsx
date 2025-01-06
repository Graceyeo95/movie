import React, { useState, useEffect } from 'react';
import logo from '../assets/movie-logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Movies', path: '/movies' },
  { label: 'TV Shows', path: '/tv-shows' },
  { label: 'People', path: '/people' },
];

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm) {
      navigate(`/search?q=${searchTerm}`);
    }
  }, [searchTerm]);

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

        <div className='flex items-center gap-5'>
          <form className='flex items-center gap-x-3'>
            <input
              type='text'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder='Search here...'
              className='bg-transparent text-black w-[300px] px-4 py-1 outline-none border-[1px] rounded-lg border-neutral-400 text-[18px]'
            />
            <button className='text-2xl text-black'>
              <IoSearchOutline />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};
