import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ props }) => {
  const {
    title,
    text,
    date,
  } = props;

  return (
    <article>
      <h1>{title}</h1>
      <p>{text}</p>
      <span>{date}</span>
    </article>
  );
};

Article.propType = {
  article: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
  }),
};

export default Article;
