import React from 'react';
import ListingIndexItem from './listing_index_item';

class ListingIndex extends React.Component{
    constructor(props){
        super(props);
        // debugger
    }

    componentDidMount(){
        this.props.fetchListings();
    }

    render(){
        // debugger
        const listings = this.props.listings.map( (listing) => {
            return (
                <ListingIndexItem key={listing.id} listing={listing}/>
            )
        });

        return (
            <div className="listing-landing-page">
                <section className="listing-index">
                    <h1>Where to campaign</h1>
                    <ul className="listing-index-items">
                        {listings}
                    </ul>
                </section>
            </div>
        )
    }
}

export default ListingIndex;