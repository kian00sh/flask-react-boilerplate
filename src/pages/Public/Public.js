import React, { createElement } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const Public = ({ path, exact, component }) => (
  <Route
    path={path}
    exact={exact}
    render={() =>
      !localStorage.getItem('user') ? (
        createElement(component)
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

Public.propTypes = {
  component: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
};

export default Public;
