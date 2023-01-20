import React, { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Reducer } from 'redux';

import './App.scss';

import { getRegistry } from '@redhat-cloud-services/frontend-components-utilities/Registry';
import NotificationsPortal from '@redhat-cloud-services/frontend-components-notifications/NotificationPortal';
import { notificationsReducer } from '@redhat-cloud-services/frontend-components-notifications/redux';
import { useChrome } from '@redhat-cloud-services/frontend-components/useChrome';
import { Router } from './assisted-ui-lib/ocm';
import { SINGLE_CLUSTER_ENABLED_FEATURES } from './assisted-ui-lib/common';

const App = () => {
  const history = useHistory();
  const { on } = useChrome();

  useEffect(() => {
    const registry = getRegistry();
    registry.register({ notifications: notificationsReducer as Reducer });

    const unregister = on('APP_NAVIGATION', (event) => history.push(`/${event.navId}`));
    return () => {
      unregister?.();
    };
  }, []);

  return (
    <Fragment>
      <NotificationsPortal />
      <Router features={SINGLE_CLUSTER_ENABLED_FEATURES} />
    </Fragment>
  );
};

export default App;
