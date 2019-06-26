json.partial! 'api/listings/listing', listing: @listing


json.bookings do 
    @listing.bookings.each do |book|
        json.set! book.id do
            json.extract! book, :id, :guest_id, :start_date, :end_date, :players, :status
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