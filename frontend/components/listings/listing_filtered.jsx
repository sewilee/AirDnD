import React from 'react'
import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import ListingFilteredItem from './listing_filtered_item';

const msp = (state, ownProps) => {
    return ({
        listings: Object.values(state.entities.listings),
    });
};

const mdp = (dispatch) => {
    return ({
        fetchListings: () => dispatch(fetchListings()),
    });
};

class ListingFiltered extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchListings();
    }

    render() {
        const listings = this.props.listings.map((listing) => {
            return (
                <ListingFilteredItem key={listing.id} listing={listing} />
            )
        });

        return (
            <div className="filtered-listings">
                <section className="filtered-index">
                    {/* <h1>3 + campaigns</h1> */}
                    <ul className="filtered-index-items">
                        {listings}
                    </ul>
                </section>
            </div>
        )
    }
}

export default connect(msp, mdp)(ListingFiltered);