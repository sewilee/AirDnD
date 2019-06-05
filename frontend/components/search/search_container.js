import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';

const msp = (state, ownProps) => {
    return({

    });
};

const mdp = (dispatch) => {
    return({
        fetchListings: () => dispatch(fetchListings()),
    })
}

export default 