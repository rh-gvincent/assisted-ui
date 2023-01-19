import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Bullseye, Spinner } from '@patternfly/react-core';

const HomePage = lazy(() => import(/* webpackChunkName: "HomePage" */ './home/HomePage'));

const Routes = () => (
  <Suspense
    fallback={
      <Bullseye>
        <Spinner />
      </Bullseye>
    }
  >
    <Switch>
      <Route path="/home" component={HomePage} />
      <Route>
        <Redirect to="/home" />
      </Route>
    </Switch>
  </Suspense>
);

export default Routes;
