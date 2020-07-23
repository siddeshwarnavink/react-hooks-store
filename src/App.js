import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import initFeedStore from './store/feed-store';
import Layout from './hoc/Layout';
import Feed from './contaners/Feed/Feed';
import Bookmarks from './contaners/Bookmarks/Bookmarks'

// Bootstrap the stores.
initFeedStore();

const app = () => {
  let routes = (
    <Switch>
      <Route exact path="/bookmarks" component={Bookmarks} />
      <Route exact path="/" component={Feed} />

      <Redirect to="/" />
    </Switch>
  )

  return (
    <Layout>
      {routes}
    </Layout>
  );
};

export default app;