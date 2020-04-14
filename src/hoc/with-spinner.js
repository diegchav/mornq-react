import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const CustomCircularProgress = withStyles({
    root: {
        color: '#fff'
    }
})(CircularProgress);

const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherOptions }) => {
        return isLoading
            ? <CustomCircularProgress />
            : <WrappedComponent {...otherOptions} />
    };

    return Spinner;
};

export default WithSpinner;