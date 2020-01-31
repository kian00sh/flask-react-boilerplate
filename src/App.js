import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import routes from './routes';
import Public from './pages/Public';
// import Private from './pages/Private';
import NotFound from './pages/NotFound';

const App = () => (
  <BrowserRouter>
    <Switch>
      {routes.public.map(route => (
        <Public key={route.path} {...route} />
      ))}
      {/* {routes.private.map(route => (
        <Private key={route.path} sidebarTabs={routes.private} {...route} />
      ))} */}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
