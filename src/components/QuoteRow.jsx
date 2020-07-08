import React from 'react';
import { Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import Quote from './Quote';
import { QuoteProp } from '../types';

const QuoteRow = (props) => {
  const { quotes } = props;
  const items = quotes.map((quote) => (
    <Col md="6" key={quote.quote.quote_id}>
      <Quote quote={quote.quote} color={quote.color} />
    </Col>
  ));

  return (
    <Row noGutters>
      {items}
    </Row>
  );
};

QuoteRow.propTypes = {
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      quote: QuoteProp,
      color: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default QuoteRow;
