import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a single quote.
 */
const Quote = (props) => {
  const { quote } = props;
  return (
    <blockquote className="blockquote">
      <p>{quote.quote}</p>
      <footer className="blockquote-footer">
        <cite title={quote.author}>{quote.author}</cite>
      </footer>
    </blockquote>
  );
};

Quote.propTypes = {
  quote: PropTypes.shape({
    quote: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Quote;
