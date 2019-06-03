import * as APIListingUtil from '../util/listing_util';

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";

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

export const fetchListings = () => {
    return (dispatch) => {
        return APIListingUtil.fetchListings().then( (res) => {
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