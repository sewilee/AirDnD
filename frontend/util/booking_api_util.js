export const fetchBookings = (guestId) => {
    return $.ajax({
        method:  "get",
        url: "api/bookings",
        data: { guestId },
    })
};

export const fetchBooking = (bookId) => {
    return $.ajax({
        method: "get",
        url: `api/bookings/${bookId}`
    })
};

export const createBooking = (booking) => {
    return $.ajax({
        method: "post",
        url: `/api/listings/${booking.listingId}/bookings`,
        data: { booking },
    })
};

export const updateBooking = (booking) => {
    return $.ajax({
        method: "patch",
        url: `api/bookings/${booking.id}`,
        data: { booking },
    })
};

export const deleteBooking = (bookId) => {
    return $.ajax({
        method: "delete",
        url: `api/bookings/${bookId}`
    })
}