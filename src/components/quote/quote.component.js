import React from 'react';
import PropTypes from 'prop-types';

import QuoteContainer from './quote.styles';

const Quote = ({ text, author }) => (
    <QuoteContainer>
        <h1 className="quote-text">{text}</h1>
        <h4 className="quote-author">{author}</h4>
    </QuoteContainer>
);

Quote.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default Quote;