import * as APIListingUtil from '../util/listing_util';

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const RECEIVE_HOST_INFO = "RECEIVE_HOST_INFO"

const receiveListings = ({listings, hostInfo}) => {
    return ({
        type: RECEIVE_LISTINGS,
        listings,
        hostInfo,
    });
};

const receiveListing = ({listing, hostInfo, bookings, reviews}) => {
    return ({
        type: RECEIVE_LISTING,
        listing,
        hostInfo,
        bookings,
        reviews,
    });
};

export const fetchListings = (filters) => {
    return (dispatch) => {
        return APIListingUtil.fetchListings(filters).then( (res) => {
            dispatch(receiveListings(res));
        });
    };
};

export const fetchListing = (id) => {
    return (dispatch) => {
        return APIListingUtil.fetchListing(id).then( (res) => {
            dispatch(receiveListing(res));
        });
    };
};