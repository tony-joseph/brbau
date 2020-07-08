import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'reactstrap';
import { QUOTES_URL } from '../config/urls';
import QuoteRow from '../components/QuoteRow';
import { generateQuoteRows } from '../utils';

/**
 * Quotes page
 *
 * Renders the list of all quotes
 */
const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: QUOTES_URL,
    }).then((response) => setQuotes(response.data));
  }, []);

  const rows = generateQuoteRows(quotes);

  // eslint-disable-next-line react/no-array-index-key
  const quoteList = rows.map((row, index) => <QuoteRow key={index} quotes={row} />);

  return (
    <Container>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h1 className="text-center">Quotes</h1>
      <hr />
      {quoteList}
    </Container>
  );
};

export default Quotes;
