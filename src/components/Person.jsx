import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import { PersonProp } from '../types';

/**
 * Renders the profile of a single character.
 */
const Person = (props) => {
  const { profile, color } = props;
  const style = {
    backgroundColor: color,
    height: '100%',
  };
  const imgStyle = {
    height: '320px',
  };

  return (
    <div style={style}>
      <div className="text-center">
        <img src={profile.img} alt={profile.name} className="img-fluid rounded" style={imgStyle} />
      </div>
      <Table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{`: ${profile.name}`}</td>
          </tr>
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
    </div>
  );
};

Person.propTypes = {
  profile: PersonProp.isRequired,
  color: PropTypes.string,
};

Person.defaultProps = {
  color: '',
};

export default Person;
