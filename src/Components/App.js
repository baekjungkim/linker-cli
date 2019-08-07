import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './Header';
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from '../Styles/Theme';
import Router from './Router';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const Content = styled.div``;

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <GlobalStyles />
        <Header />
        <Content>
          <Router />
        </Content>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
