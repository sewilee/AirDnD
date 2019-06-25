json.partial! 'api/listings/listing', listing: @listing
# guests = @listing.bookings.pluck(:guest_id, :id)
json.bookings do 
    @listing.bookings.each do |book|
        json.set! book.id do
            json.extract! book, :id, :guest_id, :start_date, :end_date, :players, :status
        end
    end
end

json.reivews do
    @listing.reviews.each do |review|
        json.set! review.id do
            json.extract! review, :id, :author_id, :listing_id, :body, :rating, :created_at
        end
    end
end 