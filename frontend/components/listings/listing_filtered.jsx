import React from 'react'
import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import { changeFilter } from '../../actions/filter_actions';
import ListingFilteredItem from './listing_filtered_item';
import ListingMap from '../map/listing_map';

const msp = (state, ownProps) => {
    return ({
        listings: Object.values(state.entities.listings),
    });
};

const mdp = (dispatch) => {
    return ({
        fetchListings: (bounds) => dispatch(fetchListings(bounds)),
        changeFilter: (filter, value) => dispatch(changeFilter(filter, value)),
    });
};

class ListingFiltered extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        const listings = this.props.listings.map((listing) => {
            return (
                <ListingFilteredItem key={listing.id} listing={listing} />
            )
        });
        return (
            <>
                <div className="filtered-listings">
                    <section className="filtered-index">
                        {/* <h1>3 + campaigns</h1> */}
                        <ul className="filtered-index-items">
                            {listings}
                        </ul>
                    </section>
                </div>
                <div className="filtered-map">
                    < ListingMap listings={this.props.listings} changeFilter={this.props.changeFilter} fetchListings={this.props.fetchListings}/>
                </div>
            </>
        )
    }
}

export default connect(msp, mdp)(ListingFiltered);