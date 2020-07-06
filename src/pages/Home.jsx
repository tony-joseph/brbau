import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container, Col, Row, Card, CardHeader, CardBody,
} from 'reactstrap';
import { RANDOM_CHARACTER_URL, RANDOM_QUOTE_URL } from '../config/urls';
import Person from '../components/Person';
import Quote from '../components/Quote';

/**
 * Home page
 *
 * Renders quote of the day and person of the day.
 */
const Home = () => {
  const [randomCharacter, setRandomCharacter] = useState({
    name: '',
    nickname: '',
    img: '',
    occupation: [],
  });
  const [randomQuote, setRandomQuote] = useState({
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

  return (
    <Container>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <Card>
            <CardHeader>
              <h1 className="text-center">Quote of the Day</h1>
            </CardHeader>
            <CardBody>
              <Quote quote={randomQuote} />
            </CardBody>
          </Card>
          <hr />
          <h1 className="text-center">Person of the Day</h1>
          <Person profile={randomCharacter} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
