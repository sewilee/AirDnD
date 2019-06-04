import { connect } from 'react-redux';
import { fetchListing, fetchListings } from '../../actions/listing_actions';
import ListingShow from './listing_show';


const msp = (state, ownProps) => {
    const listingId = ownProps.listing.match.params.id
    return ({
        listingId: listingId,
        listing: state.entities.listings[listingId] || {},
    });
};

const mdp = (dispatch) => {
    return({
        fetchListings: () => dispatch(fetchListings()),
        fetchListing: (id) => dispatch(fetchListing(id)),
    });
};

export default connect(msp, mdp)(ListingShow);