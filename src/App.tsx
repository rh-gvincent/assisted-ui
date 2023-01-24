import React, { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Reducer } from 'redux';

import './App.scss';

import { getRegistry } from '@redhat-cloud-services/frontend-components-utilities/Registry';
import NotificationsPortal from '@redhat-cloud-services/frontend-components-notifications/NotificationPortal';
import { notificationsReducer } from '@redhat-cloud-services/frontend-components-notifications/redux';
import { useChrome } from '@redhat-cloud-services/frontend-components/useChrome';
import { Router, Api } from './assisted-ui-lib/ocm';
import { authInterceptor } from './services/apiRequest';

Api.setAuthInterceptor(authInterceptor);

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
      <Router
        features={{
          ASSISTED_INSTALLER_SNO_FEATURE: true,
          ASSISTED_INSTALLER_OCS_FEATURE: true,
          ASSISTED_INSTALLER_CNV_FEATURE: true,
          ASSISTED_INSTALLER_NETWORK_TYPE_SELECTION_FEATURE: true,
          ASSISTED_INSTALLER_PLATFORM_INTEGRATION_FEATURE: true,
        }}
      />
    </Fragment>
  );
};

export default App;
