import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Feed from './Feed';
import Sidebar from './Sidebar';

const GlobalStyle = createGlobalStyle`
html, body {
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;

};
div{
  box-sizing: border-box;
}
`;

function NewTab(): JSX.Element {
  return (
    <Screen>
      <GlobalStyle />
      <Feed />
      <Sidebar />
    </Screen>
  );
}

export default NewTab;

const Screen = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
`;
