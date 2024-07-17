import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Components/Common/Home.js'
import About from './Components/Common/About.js'
import Contact from './Components/Common/Contact.js'
import ContentWrapper from './Components/ContentWrapper/ContentWrapper.js';

export default function Routing({ appProps }) {
  const routes = [
    {
      Component: Home,
      headerText: 'Home', path: '/'
    },
    {
      Component: About,
      headerText: 'About', path: '/about'
    },
    {
      Component: Contact,
      headerText: 'Contact', path: '/contact'
    },
  ];
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        {routes.map(({ path, Component, headerText }, index) => {
          return (
            <Route
              key={index}
              exact
              path={path}
              render={props => (
                <ContentWrapper
                  {...{ headerText, Component }} {...props} />
              )}
            />
          );
        })}
        <Route render={props => (
          <ContentWrapper
            {...{ headerText: 'Home', Component: Home }} {...props} />
        )} />
      </Switch>
    </Router>
  );
}
