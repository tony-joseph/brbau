import React from 'react';
import { Card, CardHeader, Table } from 'reactstrap';
import PropTypes from 'prop-types';

/**
 * Renders the profile of a single character.
 */
const Person = (props) => {
  const { profile } = props;
  return (
    <Card>
      <CardHeader>
        <h4 className="text-center">{profile.name}</h4>
      </CardHeader>
      <img src={profile.img} alt={profile.name} className="card-img-top" />
      <Table>
        <tbody>
          <tr>
            <td>Nickname</td>
            <td>{`: ${profile.nickname}`}</td>
          </tr>
          <tr>
            <td>Occupation</td>
            <td>{`: ${profile.occupation.join(',')}`}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>{`: ${profile.status}`}</td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
};

Person.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string,
    nickname: PropTypes.string,
    img: PropTypes.string,
    occupation: PropTypes.arrayOf(PropTypes.string),
    status: PropTypes.string,
  }).isRequired,
};

export default Person;
