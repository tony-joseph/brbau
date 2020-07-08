import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Col, Row } from 'reactstrap';
import { RANDOM_CHARACTER_URL, RANDOM_QUOTE_URL } from '../config/urls';
import Person from '../components/Person';
import Quote from '../components/Quote';
import { RED, ORANGE } from '../config/colours';

/**
 * Home page
 *
 * Renders quote of the day and person of the day.
 */
const Home = () => {
  const [randomCharacter, setRandomCharacter] = useState({
    char_id: 0,
    name: '',
    nickname: '',
    img: '',
    occupation: [],
    status: '',
  });
  const [randomQuote, setRandomQuote] = useState({
    quote_id: 0,
    quote: '',
    author: '',
  });

  useEffect(() => {
    axios({
      method: 'GET',
      url: RANDOM_CHARACTER_URL,
    }).then((response) => (
      setRandomCharacter(response.data[0])
    ));
  }, []);

  useEffect(() => {
    axios({
      method: 'GET',
      url: RANDOM_QUOTE_URL,
    }).then((response) => (
      setRandomQuote(response.data[0])
    ));
  }, []);

  const quoteBoxStyle = {
    backgroundColor: ORANGE,
  };

  const personBoxStyle = {
    backgroundColor: RED,
  };

  return (
    <>
      <Container fluid style={quoteBoxStyle}>
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <h1 className="text-center">Quote of the Day</h1>
            <hr />
            <div className="text-center">
              <Quote quote={randomQuote} />
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid style={personBoxStyle}>
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <p>&nbsp;</p>
            <h1 className="text-center">Person of the Day</h1>
            <hr />
            <Person profile={randomCharacter} />
            <p>&nbsp;</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
