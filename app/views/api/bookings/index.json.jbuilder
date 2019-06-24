if @bookings
    json.bookings do 
        @bookings.each do |booking|
            json.set! booking.id do 
                json.partial! 'api/bookings/booking', booking: booking
            end
        end
    end

    json.listings do 
        @bookings.each do |booking|
            json.set! booking.listing_id do
                json.extract! booking.listing, :id, :title, :location_type, :edition_num, :expansion
                if (booking.listing.photos.attached?)
                    json.photoUrls booking.listing.photos.map {|file| url_for(file)}
                end
            end
        end
    end
end