import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Col, Row } from 'reactstrap';
import { QUOTES_URL } from '../config/urls';
import Quote from '../components/Quote';

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

  const quoteList = quotes.map((quote) => (
    <>
      <Quote quote={quote} />
      <hr />
    </>
  ));

  return (
    <Container>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <h1 className="text-center">Quotes</h1>
          <hr />
          {quoteList}
        </Col>
      </Row>
    </Container>
  );
};

export default Quotes;
