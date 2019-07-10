import React from 'react';
import ListingImages from './lising_show_images';
import CreateBookingContainer from '../bookings/create_booking_container';
import ReviewIndexContainer from '../reviews/review_index_container';
import moment from 'moment';
import {
    Cancellations,
    HostedBy,
    Neighborhood,
} from './listing_show_item';

const locationTypeIcon = (type) => {
    if (type === "City") { return <i className="fas fa-university"></i>}
    if (type === "Fortification") { return <i className="fab fa-fort-awesome"></i>}
    if (type === "Religious Location") { return <i className="fas fa-church"></i>}
    if (type === "Wilderness") { return <i className="fas fa-tree"></i>}
    if (type === "The Underdark") { return <i className="fas fa-spider"></i>}
}

const phbEdition = (num) => {
    if (num === 1){return `${num}st edition`}
    if (num === 2){return `${num}nd edition`}
    if (num === 3){return `${num}rd edition`}
    else {return `${num}th edition`}
};

const historyBlurb = (string) => {
    const stringArr = string.split("-$-");
    return stringArr.map( (paragraph, idx)=> {
        return <p key={idx} className="listing-history">{paragraph}</p>
    });
};

class ListingShow extends React.Component{
    constructor(props){
        super(props);
    }

    reviewForm(listBooks){
        const { currentUserId, bookings, users } = this.props
        let currentUser = users[currentUserId];
        let userBooks = currentUser.booking_ids
        
        if(userBooks.length === 0){return false;}

        const commonBooks = userBooks.filter(function (val) {
            return listBooks.indexOf(val) != -1;
        });

        for(let i = 0; i < userBooks.length; i ++ ){
            if (bookings[commonBooks[i]]){
                let endDate = moment(bookings[commonBooks[i]].end_date);
                let dateString = endDate.fromNow();
                dateString = dateString.split("ago");
                if(dateString.length === 2){
                    return true;
                }
            }
        }
        return false;

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
        const { listingId, currentUserId } = this.props;
        const currentListing = this.props.listings[listingId];
        let images, blurb, listingInfo;
        
        if (currentListing === undefined){
            return null;
        }

        const { 
            title, description, city, host_id, rate,
            edition_num, expansion,location_type, max_players, photoUrls,
        } = currentListing;

        const hostInfo = this.props.users[host_id]

        if (hostInfo === undefined) {
            return null;
        }

        let prevBooking = false;
        let bookingIds = currentListing.book_ids;

        if(currentUserId){
            if(bookingIds && Object.values(bookingIds).length){
                prevBooking = this.reviewForm(bookingIds);
            }
        }
        

        
        if (photoUrls) { 
            images = <ListingImages photoUrls={photoUrls}/>
            listingInfo = {title, city, location_type, photo: photoUrls[0], rate, maxPlayers: max_players}
        }
        
        if (description){ 
            blurb = historyBlurb(description);
        }        
        const edition = phbEdition(edition_num);
        let expansions = "Core rules only"

        return(
            <div className="listing-show-page">
                <section className="listing-show-img">
                    {images}
                </section>
                <section className="listing-show-information">
                    <main className="listing-show-main">
                        <div className="listing-header">
                            <div className="listing-label">
                                <div className="listing-title">
                                    <h1>{title}</h1>
                                </div> 
                                <div className="listing-info">
                                    <p>{city}</p>
                                </div>
                            </div>
                            <div className="listing-host">
                                <img src={window.user_icon_d20}/>
                                <div className="listing-host-text">{hostInfo.fname}</div>
                            </div>
                        </div>
                        <ul>
                            <li className="listing-detail-1">
                                {locationTypeIcon(location_type)}
                                <div className="listing-detail-container">
                                    <h6 className="listing-details-header">{location_type}</h6>
                                    <div className="listing-details">
                                        <span className="listing-info-text">{`${max_players} players`}</span>
                                        <span className="listing-info-text">{`${edition}`}</span>
                                        <span className="listing-info-text">{expansions}</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="listing-description">
                            <div className="listing-info-text">
                                <p className="listing-details-header">History</p>
                                {blurb}
                            </div>
                        </div>
                        <div>
                            <HostedBy host={hostInfo}/>
                            <Neighborhood singleListing={currentListing} fetchListing={this.props.fetchListing}/>
                            <Cancellations cancelType="Strict"/>
                            <ReviewIndexContainer listId={this.props.listingId} prevBooking={prevBooking}/>
                        </div>
                    </main>
                    <aside className="listing-book-aside">
                        <CreateBookingContainer listingId={listingId} path={this.props.path} listingInfo={listingInfo}/>
                    </aside>
                </section>
                {/* <footer className="listing-book-footer">
                    <section>
                        rates
                    </section>
                    <section>
                        <button onClick={() => this.props.openModal("book")}>Roll for it</button>
                    </section>
                </footer> */}
            </div>
        )
    }
}

export default ListingShow;