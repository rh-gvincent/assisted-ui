import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Button, Stack, StackItem, Title } from '@patternfly/react-core';
import { Main } from '@redhat-cloud-services/frontend-components/Main';
import { PageHeader, PageHeaderTitle } from '@redhat-cloud-services/frontend-components/PageHeader';
import { addNotification } from '@redhat-cloud-services/frontend-components-notifications/redux';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    insights?.chrome?.appAction?.('home-page');
  }, []);

  const handleAlert = () => {
    dispatch(
      addNotification({
        variant: 'success',
        title: 'Notification title',
        description: "yes it's working",
      })
    );
  };

  return (
    <React.Fragment>
      <PageHeader>
        <PageHeaderTitle title="Home page" />
        <p>This is the home page of Assister Installer</p>
      </PageHeader>
      <Main>
        <Stack hasGutter>
          <StackItem>
            <Title headingLevel="h2" size="3xl">
              Test alert
            </Title>
            <Button variant="primary" onClick={handleAlert}>
              Dispatch alert
            </Button>
          </StackItem>
        </Stack>
      </Main>
    </React.Fragment>
  );
};

export default HomePage;
