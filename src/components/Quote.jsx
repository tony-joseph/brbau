import React from 'react';
import PropTypes from 'prop-types';
import { QuoteProp } from '../types';

/**
 * Renders a single quote.
 */
const Quote = (props) => {
  const { quote, color } = props;
  const style = {
    backgroundColor: color,
    height: '100%',
    padding: '10px',
  };

  return (
    <blockquote className="blockquote text-center" style={style}>
      <p>{quote.quote}</p>
      <footer className="blockquote-footer">
        <cite title={quote.author}>{quote.author}</cite>
      </footer>
    </blockquote>
  );
};

Quote.propTypes = {
  quote: QuoteProp.isRequired,
  color: PropTypes.string,
};

Quote.defaultProps = {
  color: '',
};

export default Quote;
