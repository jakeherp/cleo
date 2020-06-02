import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Layout } from './components/templates/Layout';
import Container from './components/atoms/Container';
import Tabs from './components/molecules/Tabs';
import Dashboard from './tabs/dashboard';
import Bills from './tabs/bills';
import Transactions from './tabs/transactions';

ReactDOM.render(
  <Layout>
    <Container>
      <Router>
        <Tabs />
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/bills">
            <Bills />
          </Route>
          <Route path="/transactions">
            <Transactions />
          </Route>
        </Switch>
      </Router>
    </Container>
  </Layout>,
  document.getElementById('root')
);
