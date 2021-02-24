import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import './index.css';
import Routing from './Routing';

function App() {
  return (
    <Routing />
  );
}

export default withRouter(App);

ReactDOM.render(<App />, document.getElementById('root'));
