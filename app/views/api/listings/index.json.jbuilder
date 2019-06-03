@listings.each do |listing|
    json.set! listing.id do
        json.partial! 'api/listings/listing', listing: listing
        json.photoUrls listing.photos.map {|file| url_for(file)}
    end
end
