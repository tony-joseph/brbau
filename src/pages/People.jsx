import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'reactstrap';
import { CHARACTERS_URL } from '../config/urls';
import PeopleRow from '../components/PeopleRow';
import { generatePeopleRows } from '../utils';

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

  const rows = generatePeopleRows(people);

  // eslint-disable-next-line react/no-array-index-key
  const peopleList = rows.map((profiles, index) => <PeopleRow key={index} profiles={profiles} />);

  return (
    <Container>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h1 className="text-center">People</h1>
      <hr />
      {peopleList}
    </Container>
  );
};

export default People;
