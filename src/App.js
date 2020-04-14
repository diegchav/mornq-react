import React from 'react'

import Color from './models/color';

import Quote from './components/quote/quote.component';
import RandomButton from './components/random-button/random-button.component';

import WithSpinner from './hoc/with-spinner';

import { db } from './firebase/firebase.utils';

import {
  LOCAL_STORAGE_KEY,
  FIRESTORE_QUOTES_COLLECTION
} from './constants';

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
    let quotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (quotes) {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      this.setQuote({ quote: randomQuote, quotes: quotes, loading: false });
    } else {
      try {
        db.collection(FIRESTORE_QUOTES_COLLECTION).get().then(snapshot => {
            quotes = [];
            snapshot.forEach(doc => {
                quotes.push(doc.data());
            });
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            this.setQuote({ quote: randomQuote, quotes: quotes, loading: false });

            // Save to local storage.
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(quotes));
        });
      } catch (err) {
          console.error(err);
      }
    }
  }

  handleRandomQuoteClick = () => {
    const { quotes } = this.state;
    const randomBackground = Color.random();
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    this.setQuote({ quote: randomQuote, background: randomBackground });
  };

  setQuote = ({ quote, ...otherProps }) => {
    const { text, author } = quote;
    this.setState({
      quoteText: text,
      quoteAuthor: author,
      ...otherProps
    });
  };

  render() {
    return (
      <AppContainer background={this.state.background}>
        <GlobalStyle />
        <QuoteWithSpinner
          isLoading={this.state.loading}
          text={this.state.quoteText}
          author={this.state.quoteAuthor} />
        <RandomButton
          onClick={this.handleRandomQuoteClick}
        />
      </AppContainer>
    );
  }
}

export default App;
