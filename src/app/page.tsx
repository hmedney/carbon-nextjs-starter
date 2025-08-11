'use client';
import {Button, Header, HeaderGlobalAction, HeaderGlobalBar, HeaderName, HeaderPanel} from '@carbon/react';
import {Search, Notification, Fade, Switcher as SwitcherIcon, Settings} from '@carbon/icons-react';
import React from 'react';

export default function App() {
  return (
    <Header aria-label="IBM Platform Name">
      <HeaderName href="#" prefix="IBM">
        [Platform]
      </HeaderName>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Profile" tooltipAlignment="end">
          <Settings size={20} />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
      <HeaderPanel href="#notification-button">{/* Notification panel content here */}</HeaderPanel>
    </Header>
  );
}
