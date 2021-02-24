import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Components/Common/Home.js'
import About from './Components/Common/About.js'
import Mentoring from './Components/Common/Mentoring.js'
import Sessions from './Components/Common/Sessions.js'
import Contact from './Components/Common/Contact.js'
import MentoringSchedule from './Components/Common/MentoringSchedule.js'
import Classes from './Components/Common/Classes.js'
import GroupClasses from './Components/Common/GroupClasses.js'
import ContinuingEducationCourses from './Components/Common/ContinuingEducationCourses.js'
import ContentWrapper from './Components/ContentWrapper/ContentWrapper.js';
// errthang except sessions has a calendar component mayne
// 

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
      Component: Mentoring,
      headerText: 'Mentoring', path: '/mentoring'
    },
    {
      Component: Sessions,
      headerText: 'Sessions', path: '/sessions'
    },
    {
      Component: Contact,
      headerText: 'Contact', path: '/contact'
    },
    {
      Component: MentoringSchedule,
      headerText: 'Mentoring Schedule', path: '/mentoring-schedule'
    },
    {
      Component: GroupClasses,
      headerText: 'Group Classes', path: '/group-classes'
    },
    {
      Component: Classes,
      headerText: 'Classes', path: '/classes'
    },
    {
      Component: ContinuingEducationCourses,
      headerText: 'Continuing Education Courses',
      path: '/continuing-education-courses'
    },
  ];
  return (
    <Router>
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
