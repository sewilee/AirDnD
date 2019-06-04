import React from 'react';
import ListingImages from './lising_show_images';
import BookingBox from './listing_show_booking'

const phbEdition = (num) => {
    if (num === 1){return `${num}st edition`}
    if (num === 2){return `${num}nd edition`}
    if (num === 3){return `${num}rd edition`}
    else {return `${num}th edition`}
};

class ListingShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchListing(this.props.listingId);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.listingId !== this.props.listingId){
            this.props.fetchListing(this.props.listingId);
        }
    }

    render(){
        const { 
            title, description, city, num_bath, host_id, language, rate,
            edition_num, expansion,location_type, max_players, min_player, photoUrls,
        } = this.props.listing;
        let images, blurb = null;
        if (photoUrls) { images = <ListingImages photoUrls={this.props.listing.photoUrls}/>}
        if (description){ blurb = description}
        // const edition = phbEdition(edition_num); only if you're hosting a campaign
        // let expansions = Core rules only" only if you're hosting a campaign

        return(
            <div className="listing-show-page">
                <section className="listing-show-img">
                    {images}
                </section>
                <div className="listing-show-information">
                    <main className="listing-show-main">
                        <div className="listing-header">
                            <div className="listing-title">
                                <h1>{title}</h1>
                            </div> 
                            <div>
                                {/* user picture */}
                            </div>
                        </div>
                        <div className="listing-info">
                            <p className="listing-info-text">{city}</p>
                        </div>
                        <ul>
                            <li className="listing-detail-container">
                                <h6 className="listing-details-header">{location_type}</h6>
                                {/* <span>{`PHB ${edition}`}</span> */}
                                {/* <span>{expansions}</span> */}
                                <div className="listing-details">
                                    <span className="listing-info-text">{`${max_players} players max`}</span>
                                    <span className="listing-info-text">{`${num_bath} bath`}</span>
                                </div>
                            </li>
                        </ul>
                        <p className="listing-info-text">
                            {blurb}
                        </p>
                    </main>
                    <aside className="listing-show-book">
                        <BookingBox rate={rate}/>
                    </aside>
                </div>
            </div>
        )
    }
}

export default ListingShow;