import * as APIListingUtil from '../util/listing_util';

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const RECEIVE_HOST_INFO = "RECEIVE_HOST_INFO"

const receiveListings = (listings) => {
    return ({
        type: RECEIVE_LISTINGS,
        listings,
    });
};

const receiveListing = (listing) => {
    return ({
        type: RECEIVE_LISTING,
        listing,
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