json.bookings do 
    @bookings.each do |book|
        json.set! booking.id do 
            json.partial! 'api/bookings/booking', booking: book
        end
    end
end