import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import { withStyles } from '@material-ui/core/styles';

import RandomButtonContainer from './random-button.styles';

const CustomIconButton = withStyles({
    root: {
        color: '#fff'
    }
})(IconButton);

const RandomButton = ({ onClick }) => (
    <RandomButtonContainer>
        <CustomIconButton aria-label="random quote" onClick={onClick}>
            <ShuffleIcon style={{ fontSize: 30 }} />
        </CustomIconButton>
    </RandomButtonContainer>
);

export default RandomButton;