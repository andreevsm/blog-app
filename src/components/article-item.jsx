import * as React from 'react';

import { Link } from 'gatsby';

const ArticleItem = ({
  title,
  createdDate,
  timeToRead,
  description,
  imageUrl,
  url,
}) => (
  <div>
    <div>
      <img src={imageUrl} alt={title} />
    </div>
    <div>
      <h3>{title}</h3>
      <div>
        {/* <span>{createdDate}</span>
        <span>{timeToRead}</span> */}
      </div>
      <div>{description}</div>
      <Link to={url}>Read more</Link>
    </div>
  </div>
);

export default ArticleItem;
