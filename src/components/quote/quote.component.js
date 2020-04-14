import React from 'react';

import { db } from '../../firebase/firebase.utils';

import { FIRESTORE_QUOTES_COLLECTION } from '../../constants';

import QuoteContainer from './quote.styles';

class Quote extends React.Component {
    state = {
        quotes: [],
        quoteText: '',
        quoteAuthor: ''
    };

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
                    quoteAuthor: randomQuote.author
                });
            });
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            <QuoteContainer>
                <h1 className="quote-text">{this.state.quoteText}</h1>
                <h4 className="quote-author">{this.state.quoteAuthor}</h4>
            </QuoteContainer>
        );
    }
}

export default Quote;