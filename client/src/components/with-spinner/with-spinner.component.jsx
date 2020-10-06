import React from 'react';
import Spinner from '../spinner/spinner.styles.js'; 


const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
    return isLoading ? (
        <Spinner /> 
    ) : (
        <WrappedComponent {...otherProps} />
    );
};


export default WithSpinner; 