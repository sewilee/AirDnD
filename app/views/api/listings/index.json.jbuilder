@listings.each do |listing|
    json.listings do
        json.set! listing.id do
            json.partial! 'api/listings/listing', listing: listing
            
            rate_sum = 0;
            listing.reviews.each do |review|
                rate_sum += review.rating
            end
    
            unless(listing.reviews.length == 0)
                json.avgRate rate_sum / listing.reviews.length
            end
        end
    end

    json.hostInfo do 
        host = listing.host
        json.set! host.id do 
            json.partial! 'api/users/user', user: host
            # json.extract! host, :fname, :lname, :email, :created_at
            #     if host.photo.attached?
            #         json.photoUrl url_for(host.photo)
            #     end
            # end
        end
    end
end
