import { connect } from 'react-redux';
// import { fetchListings } from '../../actions/listing_actions';
import { changeFilter } from '../../actions/filter_actions';
import Search from './search';

const msp = (state, ownProps) => {
    return({
        listings: Object.values(state.entities.listings),
    });
};

const mdp = (dispatch) => {
    return({
        // fetchListings: () => dispatch(fetchListings()),
        changeFilter: (filter, value) => dispatch(changeFilter(filter, value)),
    })
}

export default connect(msp, mdp)(Search)