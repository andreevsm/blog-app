import * as React from 'react';
import { Link } from 'gatsby';

import Avatar from '../assets/images/avatar.png';

const ArticleItem = ({
  title,
  createdDate,
  timeToRead,
  description,
  // imageUrl,
  url,
}) => (
  <div className="flex">
    <div className="w-1/4">
      <img className="rounded-sm w-40" src={Avatar} alt={title} />
    </div>
    <div className="flex-1">
      <h3 className="mb-1 text-lg font-bold">
        <Link to={url}>{title}</Link>
      </h3>
      <div className="mb-1 text-xs text-gray-400">
        <span className="mr-2">{createdDate}</span>
        |
        <span className="ml-2">
          {timeToRead}
          {' '}
          min read
        </span>
      </div>
      <div className="text-sm">{`${description.slice(0, 140)}...`}</div>
      <Link className="text-blue" to={url}>Read more</Link>
    </div>
  </div>
);

export default ArticleItem;
