json.partial! 'api/listings/listing', listing: @listing
# guests = @listing.bookings.pluck(:guest_id, :id)
json.bookings do 
    @listing.bookings.each do |book|
        json.set! book.id do
            json.extract! book, :id, :guest_id, :start_date, :end_date, :players, :status
        end
    end
end