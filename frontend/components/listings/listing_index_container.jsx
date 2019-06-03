import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import ListingIndex from './listing_index';

const msp = (state, ownProps) => {
    // debugger
    return ({
        listings: Object.values(state.entities.listings),
    });
};

const mdp = (dispatch) => {
    // debugger
    return({
        fetchListings: () => dispatch(fetchListings()),
    });
};

export default connect(msp, mdp)(ListingIndex);