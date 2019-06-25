import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

const receiveReviews = (reviews) => {
    return ({
        type: RECEIVE_REVIEWS,
        reviews,
    });
};

const receiveReview = (review) => {
    return({
        type: RECEIVE_REVIEW,
        review
    });
};

export const fetchReviews = (listId) => {
    return (dispatch) => {
        return ReviewAPIUtil.fetchReviews(listId).then( (res) => {
            dispatch(receiveReviews(res));
        });
    };
};

export const createReview = (review) => {
    return (dispatch) => {
        return ReviewAPIUtil.createReview(review).then( (res) => {
            dispatch(receiveReview(res));
        });
    };
};