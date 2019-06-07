json.extract! user, :id, :email, :fname, :lname, :birthday
json.bookings do 
    user.bookings.each do |book|
        json.set! book.listing_id do 
        end
    end
end