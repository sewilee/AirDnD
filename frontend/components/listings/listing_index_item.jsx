import React from 'react';

const ratingIcon = (
        <div className="listing-item-rating-icon">
            <i className="fas fa-meteor"></i>
            <i className="fas fa-meteor"></i>
            <i className="fas fa-meteor"></i>
            <i className="fas fa-meteor"></i>
            <i className="fas fa-meteor"></i>
        </div>
    )

const ListingIndexItem = (props) => {
    const { title, rate, location_type, city }  = props.listing
    // debugger
    return (
        <li className="listing-item-container">
            <div className="listing-item">
                <img src={window.air_ashari}/>
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
                        {rate} GP per night
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

export default ListingIndexItem;