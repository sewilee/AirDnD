json.partial! 'api/listings/listing', listing: @listing


# if (@listing.photos)
#     json.photoUrls @listing.photos.map {|file| url_for(file)}
# end



# json.photoUrl url_for(listing.photo)