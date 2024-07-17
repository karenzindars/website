import React from 'react';

import Navbar from './Navbar.js';

export default function ContentWrapper({ Component }) {
  return (
    <div className="site">
      <Navbar />
      <Component />
    </div>
  )
}
