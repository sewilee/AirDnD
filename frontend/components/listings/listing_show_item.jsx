import React from 'react';
import ListingMap from '../map/listing_map';

export const HostedBy = (host) => {
    const { fname, created_at } = host.host;
    const month = created_at.split("-")[1];
    const monthName = {
        "01": "January",
        "02": "February",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "August",
        "09": "September",
        "10": "October",
        "11": "November",
        "12": "December",
    }
    const year = created_at.split("-")[0];
    return (
        <div className="listing-other-host-info">
            <div className="listing-host-div">
                <h4 className="listing-other-header">Hosted by {fname}</h4>
                <p className="host-info-text">Joined in {monthName[month]} {year}</p>
            </div>
            <div className="listing-host">
                <img src={window.user_icon_d20} />
                <div className="listing-host-text">{fname}</div>
            </div>
        </div>
    )
};

export const Neighborhood = (props) => {
    return(
        <div className="listing-other-info">
            <div>
                <h4 className="listing-header-citymap">The neighborhood</h4>
            </div>
            <div className="listing-info-map">
                <ListingMap singleListing={props.singleListing} fetchListing={props.fetchListing}/>
            </div>
        </div>
    )
};

export const Cancellations = (props) => {
    const { cancelType } = props;
    let day = 5;
    if(cancelType === "Moderate"){ day = 10; }
    if(cancelType === "Strict"){ day = 15; }

    return(
        <div className="listing-other-info">
            <h3 className="listing-other-header pad-bottom">Policy</h3>
            <div className="policy">
                <h4 className="listing-details-header bordered-top">Cancellations</h4>
                <h6 className="listing-details-header">{cancelType} · Free cancellation for 48 hours</h6>
                <p className="listing-info-text">After that, cancel up to {day} days before check-in and get a full refund, minus the service fee.</p>
            </div>
        </div>
    )
};