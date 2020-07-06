import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import Home from './pages/Home';
import People from './pages/People';
import Quotes from './pages/Quotes';

import './static/bootstrap.css';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/people" component={People} />
        <Route exact path="/quotes" component={Quotes} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
