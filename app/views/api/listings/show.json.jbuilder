json.listing do
    json.set! @listing.id do
        json.partial! 'api/listings/listing', listing: @listing
    end
end

json.hostInfo do
    json.set! @listing.host.id do
        json.partial! 'api/users/user', user: @listing.host
    end
end

json.bookings do 
    @listing.bookings.each do |book|
        json.set! book.id do
            json.partial! 'api/bookings/booking', booking: book
        end
    end
end

# json.reviews do
#     @listing.reviews.each do |review|
#         json.set! review.id do
#             json.extract! review, :id, :author_id, :listing_id, :body, :rating, :created_at
#         end
#     end
# end 