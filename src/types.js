import PropTypes from 'prop-types';

export const QuoteProp = PropTypes.shape({
  quote_id: PropTypes.number.isRequired,
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
});

export const QuoteArrayProp = PropTypes.arrayOf(QuoteProp);

export const PersonProp = PropTypes.shape({
  char_id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  occupation: PropTypes.arrayOf(PropTypes.string).isRequired,
  status: PropTypes.string.isRequired,
});
