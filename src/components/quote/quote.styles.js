import styled from 'styled-components';

const QuoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    padding: 2rem;

    .quote-text,
    .quote-author {
        margin: .5rem 0;
    }

    .quote-text {
        font-size: 3rem;
    }

    .quote-author {
        font-size: 1.5rem;
        font-style: italic;
        text-align: right;
    }
`;

export default QuoteContainer;