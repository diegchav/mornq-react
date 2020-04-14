import React from 'react'

import Color from './models/color';

import Quote from './components/quote/quote.component';

import WithSpinner from './hoc/with-spinner';

import { db } from './firebase/firebase.utils';

import { FIRESTORE_QUOTES_COLLECTION } from './constants';

import AppContainer from './App.styles';
import GlobalStyle from './global.styles';

const QuoteWithSpinner = WithSpinner(Quote);

class App extends React.Component {
  state = {
    background: Color.random(),
    quotes: [],
    quoteText: '',
    quoteAuthor: '',
    loading: true
  }

  componentDidMount() {
    try {
        db.collection(FIRESTORE_QUOTES_COLLECTION).get().then(snapshot => {
            let quotes = [];
            snapshot.forEach(doc => {
                quotes.push(doc.data());
            });
            let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            this.setState({
                quotes,
                quoteText: randomQuote.text,
                quoteAuthor: randomQuote.author,
                loading: false
            });
        });
    } catch (err) {
        console.error(err);
    }
}

  render() {
    return (
      <AppContainer background={this.state.background}>
        <GlobalStyle />
        <QuoteWithSpinner
          isLoading={this.state.loading}
          text={this.state.quoteText}
          author={this.state.quoteAuthor} />
      </AppContainer>
    );
  }
}

export default App;
