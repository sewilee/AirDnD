@listings.each do |listing|
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
