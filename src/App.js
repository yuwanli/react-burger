import React from 'react';

import Layout from './components/layout/layout'
import BurgerBuilder from './container/burgerBuilder/burgerBuilder'

function App() {
  return (
    <div>
      <Layout>
        <h1>hello world</h1>
        <BurgerBuilder></BurgerBuilder>
      </Layout>
    </div>
  );
}

export default App;
