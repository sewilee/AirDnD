export const fetchListings = (data) => {
    return $.ajax({
        method: "get",
        url: 'api/listings',
        data,
    })
};

export const fetchListing = (id) => {
    return $.ajax({
        method: "get",
        url: `api/listings/${id}`,
    })
};