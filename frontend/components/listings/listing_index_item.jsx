import React from 'react';
import { withRouter } from 'react-router-dom';

const ratingIcon = (
        <div className="listing-item-rating-icon">
            <i className="fas fa-meteor"></i>
            <i className="fas fa-meteor"></i>
            <i className="fas fa-meteor"></i>
            <i className="fas fa-meteor"></i>
            <i className="fas fa-meteor"></i>
        </div>
    )

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
        const { title, rate, location_type, city, } = this.props.listing;
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
                        {ratingIcon}
                        <span>10</span>
                    </div>
                </div>
            </li>
        )
    }
}

export default withRouter(ListingIndexItem);