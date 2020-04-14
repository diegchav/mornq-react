import React from 'react';

import QuoteContainer from './quote.styles';

const Quote = () => (
    <QuoteContainer>
        <h1 className="quote-text">Tough times never last, but tough people do.</h1>
        <h4 className="quote-author">Robert Schuller</h4>
    </QuoteContainer>
);

export default Quote;