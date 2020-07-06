import React from 'react';
import { Container } from 'reactstrap';

/**
 * Default website footer
 */
const Footer = () => (
  <Container>
    <hr />
    <p className="text-center">
      &copy;
      {' '}
      <a href="https://tonyj.me/">Tony Joseph</a>
    </p>
  </Container>
);

export default Footer;
