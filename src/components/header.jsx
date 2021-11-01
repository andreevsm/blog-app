import * as React from 'react';
import { Link } from 'gatsby';
import Avatar from '../assets/images/avatar.png';

import { LINKS } from '../constants/links';

const Header = () => (
  <header className="bg-blue fixed left-0 top-0 h-screen w-80 text-white text-center">
    <h1 className="text-xl font-bold pt-6">Sergey's blog</h1>

    <nav className="flex items-center flex-col px-4 py-8">
      <div>
        <div>
          <img src={Avatar} alt="Sergey'blog Avatar" className="w-40 h-40 rounded-full mb-4 mx-auto object-cover" />
          <div className="text-sm mb-4">
            Hi, my name is Sergey Andreev. Briefly introduce yourself here. You can also provide a link to the about page.
            <br />

            <Link to="/about">Find out more about me</Link>
          </div>
        </div>
        <ul>
          <li>
            LinkedIn
          </li>
          <li>
            Stack Overflow
          </li>
          <li>
            Github
          </li>
        </ul>

        <hr className="my-4" />
      </div>

      <ul className="text-left">
        {LINKS.map((link) => (
          <li key={link.name}>
            <Link className="p-2" to={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
