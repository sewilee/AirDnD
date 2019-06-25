export const fetchReviews = (listId) => {
    return $.ajax({
        method: "get",
        url: `/api/listings/${listId}/reviews`,
        data: { listId },
    })
};

export const createReview = (review) => {
    return $.ajax({
        method: "post",
        url: `/api/listings/${review.listing_id}/reviews`,
        data: { review },
    })
};