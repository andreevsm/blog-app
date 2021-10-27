import * as React from 'react';
import { Link } from 'gatsby';

import { LINKS } from '../constants/links';

const SideBar = () => (
  <aside className="bg-blue">
    <h1 className="m-4 text-white text-xl">Sergey Andreev's blog</h1>

    <ul>
      {LINKS.map((link) => (
        <li key={link.name}>
          <Link to={link.url}>{link.name}</Link>
        </li>
      ))}
    </ul>
  </aside>
);

export default SideBar;
