import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './Header';
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from '../Styles/Theme';
import Router from './Router';
import Store from '../Store/Store';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const Content = styled.div``;

class App extends Component {
  state = {
    logged: false,
  };

  onLogin = () => {
    this.setState({
      logged: true,
    });
  };

  onLogout = () => {
    this.setState({
      logged: false,
    });
  };

  render() {
    const { logged } = this.state;
    const { state, onLogin, onLogout } = this;
    const value = { state, onLogin, onLogout };

    return (
      <Store.Provider value={value}>
        <ThemeProvider theme={Theme}>
          <Wrapper>
            <GlobalStyles />
            <Header logged={logged} onLogout={this.onLogout} />
            <Content>
              <Router />
            </Content>
          </Wrapper>
        </ThemeProvider>
      </Store.Provider>
    );
  }
}

export default App;
