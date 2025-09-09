'use client';
import {
  Header,
  HeaderContainer,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenu,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  Theme,
  Content
} from '@carbon/react';
import {Search, Notification, Switcher as SwitcherIcon} from '@carbon/icons-react';
import React from 'react';

function action(text: string) {
  return () => window.alert(text);
}

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <HeaderContainer
      render={() => (
        <>
          <Theme theme="g100">
            <Header aria-label="Site name">
              <HeaderName href="#" prefix="Carbon">
                NextJs Starter
              </HeaderName>
              <HeaderNavigation aria-label="Site navigation">
                <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
                <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
                <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
                <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
                  <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                  <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
                  <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
                </HeaderMenu>
              </HeaderNavigation>
              <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="Search" onClick={action('search click')}>
                  <Search size={20} />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="Notifications" onClick={action('notification click')}>
                  <Notification size={20} />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="App Switcher" onClick={action('app-switcher click')} tooltipAlignment="end">
                  <SwitcherIcon size={20} />
                </HeaderGlobalAction>
              </HeaderGlobalBar>
            </Header>
          </Theme>

          <Content>
            <Theme theme="white">{children}</Theme>
          </Content>
        </>
      )}
    ></HeaderContainer>
  );
}
