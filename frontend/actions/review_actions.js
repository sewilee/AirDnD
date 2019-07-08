import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

const receiveReviews = ({review, author}) => {
    return ({
        type: RECEIVE_REVIEWS,
        review,
        author,
    });
};

const receiveReview = (review) => {
    return({
        type: RECEIVE_REVIEW,
        review
    });
};

const removeReview = (review) => {
    return({
        type: REMOVE_REVIEW,
        reviewId: review.id,
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

export const deleteReview = (reviewId) => {
    return (dispatch) => {
        return ReviewAPIUtil.deleteReview(reviewId).then( (res) => {
            dispatch(removeReview(res));
        });
    };
};