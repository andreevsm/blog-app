import * as React from 'react';
import { Link } from 'gatsby';

import {
  FaStackOverflow, FaGithub, FaLinkedinIn, FaBars,
} from 'react-icons/fa';

import Avatar from '../assets/images/avatar.png';

import { LINKS } from '../constants/links';

const Header = () => {
  const [isMenuShown, setIsMenuShown] = React.useState(true);
  const isMenuShownHandler = () => {
    setIsMenuShown((current) => !current);
  };

  return (
    <header className="bg-blue left-0 top-0 text-white text-center static w-auto h-auto lg:fixed lg:h-screen lg:w-72 flex lg:block">
      <h1 className="text-2xl font-bold absolute lg:relative w-full lg:w-auto left-0 top-6">Sergey's blog</h1>

      <nav className="flex flex-col px-4 py-8">
        <button onClick={() => isMenuShownHandler()} type="button" className="relative w-6 h-6 pl-2 lg:hidden">
          <FaBars size="24" />
        </button>
        {isMenuShown && (
        <div className="lg:block">
          <div>
            <img src={Avatar} alt="Sergey'blog Avatar" className="w-40 h-40 rounded-full mb-4 mx-auto object-cover" />
            <div className="text-sm mb-4">
              Имею почти 5 лет опыта во frontend'е.
              За это время накопил много опыта, которым хотелось бы поделиться с вами.
              Подробнее обо мне можно прочесть по ссылке ниже.
              <br />

              <Link className="underline" to="/about">Обо мне</Link>
            </div>
          </div>
          <ul className="py-4">
            <li className="inline-block mr-4">
              <a target="_blank" href="https://ru.linkedin.com/in/andreevsm" rel="noreferrer">
                <FaLinkedinIn size="24px" />
              </a>
            </li>
            <li className="inline-block mr-4">
              <a target="_blank" href="https://stackoverflow.com/users/8427699/sergey-andreev" rel="noreferrer">
                <FaStackOverflow size="24px" />
              </a>
            </li>
            <li className="inline-block">
              <a target="_blank" href="https://github.com/andreevsm" rel="noreferrer">
                <FaGithub size="24px" />
              </a>
            </li>
          </ul>

          <hr className="my-4" />
          <ul className="text-left">
            {LINKS.map((link) => (
              <li key={link.name}>
                <Link activeClassName="text-gray-300 font-bold" className="py-1 block" to={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        )}

      </nav>
    </header>
  );
};

export default Header;
