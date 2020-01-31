// import React from 'react';

// ----- Public Pages -----
import Home from '../containers/HomeContainer';

// ----- Private Pages -----

const routes = {
  public: [
    {
      exact: true,
      path: '/',
      component: Home,
      title: 'Home',
    },
  ],
  private: [],
};

export default routes;
