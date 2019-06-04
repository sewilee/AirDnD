export const fetchListings = () => {
    return $.ajax({
        method: "get",
        url: 'api/listings',
    })
};

export const fetchListing = (id) => {
    return $.ajax({
        method: "get",
        url: `api/listings/${id}`,
    })
};