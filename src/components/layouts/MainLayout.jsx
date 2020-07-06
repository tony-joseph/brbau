import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import MainMenu from '../navigation/MainMenu';
import Footer from '../navigation/Footer';

/**
 * Main site layout
 */
const MainLayout = (props) => {
  const { children } = props;

  return (
    <>
      <MainMenu />
      <Container>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        {children}
      </Container>
      <Footer />
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
