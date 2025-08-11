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
  GlobalTheme,
  Theme,
  Content
} from '@carbon/react';
import {Search, Notification, Switcher as SwitcherIcon, Settings} from '@carbon/icons-react';
import React from 'react';

function action(text: string) {
  return () => window.alert(text);
}

export default function App() {
  return (
    <HeaderContainer
      render={({isSideNavExpanded, onClickSideNavExpand}) => (
        <>
          <Theme theme="g100">
            <Header aria-label="IBM Platform Name">
              <HeaderName href="#" prefix="IBM">
                [Platform]
              </HeaderName>
              <HeaderNavigation aria-label="IBM [Platform]">
                <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
                <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
                <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
                <HeaderMenu isActive aria-label="Link 4" menuLinkName="Link 4">
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
                <HeaderGlobalAction
                  aria-label="App Switcher"
                  onClick={action('app-switcher click')}
                  tooltipAlignment="end"
                >
                  <SwitcherIcon size={20} />
                </HeaderGlobalAction>
              </HeaderGlobalBar>
            </Header>
          </Theme>

          <Content>
            <Theme theme="white">ldjhasl;dsa</Theme>
          </Content>
        </>
      )}
    ></HeaderContainer>
  );
}
