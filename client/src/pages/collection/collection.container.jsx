import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component'; 

const msp = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionsLoaded(state)
});

const collectionPageContainer = compose(
    connect(msp),
    WithSpinner
)(CollectionPage);

export default collectionPageContainer; 