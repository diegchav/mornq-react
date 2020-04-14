import React from 'react'

import Color from './models/color';

import Quote from './components/quote/quote.component';

import AppContainer from './App.styles';
import GlobalStyle from './global.styles';

class App extends React.Component {
  state = {
    background: Color.random()
  }

  render() {
    return (
      <AppContainer background={this.state.background}>
        <GlobalStyle />
        <Quote />
      </AppContainer>
    );
  }
}

export default App;
