import React from 'react';
import { withRouter } from 'react-router-dom';

const ratingIcon = (avgRate) => {

    const iconRating = [];

    for (let i = 0; i < 5; i++) {
        if (i < avgRate) {
            iconRating.push(<i key={i} className="fas fa-star"></i>)
        } else {
            iconRating.push(<i key={i} className="far fa-star"></i>)
        }
    }
    return (
        <div className="listing-item-rating-icon">
            {iconRating}
        </div>
    );
};

class ListingIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const listingId = this.props.listing.id;
        this.props.history.push(`/listings/${listingId}`)
    }

    render(){
        const { title, rate, location_type, city, avgRate } = this.props.listing;
        let image_link = window.img_notfound;
        if (this.props.listing.photoUrls.length) { image_link = this.props.listing.photoUrls[0] }
        return(
            <li className="listing-index-items-li" onClick={this.handleClick}>
                <div className="listing-item">
                    <img src={image_link} />
                </div>

                <div className="listing-item-info">
                    <div>
                        <h4>{location_type} &#183; {city}</h4>
                    </div>
                    <div>
                        <h3>{title}</h3>
                    </div>
                    <div>
                        <p className="listing-item-text">
                            <i className="fas fa-coins"></i>
                            {rate} gp per night
                        </p>
                    </div>
                    <div className="listing-item-rating">
                        {ratingIcon(avgRate)}
                        {/* <span>{avgRate}</span> */}
                    </div>
                </div>
            </li>
        )
    }
}

export default withRouter(ListingIndexItem);