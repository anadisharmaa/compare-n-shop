import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import ProductDescription from './ProductDescription';
import Checkout from './Checkout';

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/product" component={ProductDescription} />
      <Route exact path="/checkout" component={Checkout} />
      <Route component={Home} />
    </Switch>
  </Layout>
);

export default App;
