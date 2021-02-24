import React from 'react';

import Navbar from './Navbar.js';
import CalendarSideBar from './CalendarSideBar';
import KzHeader from './KzHeader.js';

export default function ContentWrapper({
  Component, headerText, hideSidebar, children }) {
  return (
    <div className="site">
      <Navbar />
      <div className="content-wrapper">
        <div className="content-wrapper-wrapper">
          <div className="right-wrapper">
            <KzHeader {...{ headerText }} />
            <Component />
          </div>
          {!hideSidebar && (
            <div className="left-wrapper" style={{borderColor: "#000000"}}>
              <CalendarSideBar />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
