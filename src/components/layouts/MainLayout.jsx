import React from 'react';
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
      {children}
      <Footer />
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
