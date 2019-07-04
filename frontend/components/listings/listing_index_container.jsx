import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import ListingIndex from './listing_index';

const msp = (state, ownProps) => {
    return ({
        listings: Object.values(state.entities.listings),
        users: state.entities.users,
    });
};

const mdp = (dispatch) => {
    return({
        fetchListings: () => dispatch(fetchListings()),
    });
};

export default connect(msp, mdp)(ListingIndex);