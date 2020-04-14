import React from 'react';

import QuoteContainer from './quote.styles';

const Quote = props => (
    <QuoteContainer>
        <h1 className="quote-text">{props.text}</h1>
        <h4 className="quote-author">{props.author}</h4>
    </QuoteContainer>
);

export default Quote;