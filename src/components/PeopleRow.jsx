import React from 'react';
import { Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import Person from './Person';
import { PersonProp } from '../types';

const PeopleRow = (props) => {
  const { profiles } = props;
  const items = profiles.map((profile) => (
    <Col md="4" key={profile.profile.char_id}>
      <Person profile={profile.profile} color={profile.color} />
    </Col>
  ));

  return (
    <Row noGutters>
      {items}
    </Row>
  );
};

PeopleRow.propTypes = {
  profiles: PropTypes.arrayOf(
    PropTypes.shape({
      profile: PersonProp.isRequired,
      color: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PeopleRow;
