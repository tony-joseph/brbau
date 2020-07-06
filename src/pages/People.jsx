import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Col, Row } from 'reactstrap';
import { CHARACTERS_URL } from '../config/urls';
import Person from '../components/Person';

/**
 * People page
 *
 * Renders the list of all characters
 */
const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: CHARACTERS_URL,
    }).then((response) => setPeople(response.data));
  }, []);

  const quoteList = people.map((person) => (
    <>
      <Person profile={person} />
      <hr />
    </>
  ));

  return (
    <Container>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <h1 className="text-center">People</h1>
          <hr />
          {quoteList}
        </Col>
      </Row>
    </Container>
  );
};

export default People;
