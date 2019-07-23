import React from 'react';

import Layout from './hoc/layout/layout'
import BurgerBuilder from './container/burgerBuilder/burgerBuilder'

import {Route,Switch} from 'react-router-dom'

import Checkout from './container/checkout/checkout'

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout}></Route>
          <Route path="/" exact component={BurgerBuilder}></Route>
          
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
