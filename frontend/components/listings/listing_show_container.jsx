import { connect } from 'react-redux';
import { fetchListing, fetchListings } from '../../actions/listing_actions';
import { changeFilter } from '../../actions/filter_actions';
import { openModal } from '../../actions/modal_actions';
import ListingShow from './listing_show';


const msp = (state, ownProps) => {
    const listingId = Number(ownProps.path.match.params.id);
    return ({
        listingId: listingId,
        listings: state.entities.listings,
        users: state.entities.users,
        bookings: state.entities.bookings,
        reviews: state.entities.reviews,
        path: ownProps.path,
    });
};

const mdp = (dispatch) => {
    return({
        fetchListings: (bounds) => dispatch(fetchListings(bounds)),
        fetchListing: (id) => dispatch(fetchListing(id)),
        changeFilter: (filter, value) => dispatch(changeFilter(filter, value)),
        openModal: (modal) => dispatch(openModal(modal)),
    });
};

export default connect(msp, mdp)(ListingShow);