import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Home from 'containers/Home/Loadable';
import Header from 'containers/Header'
import FetchWrapper from 'containers/FetchWrapper'


import './style.css'


export default function App(props) {
  return (
    <FetchWrapper>
      <div className="sq-container">
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    </FetchWrapper>
  );
}
