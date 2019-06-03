json.partial! 'api/listings/listing', listing: @listing
json.photoUrls @listing.photos.map {|file| url_for(file)}

# json.hostInfo do 
#     json.extract! @hostInfo, :fname
#     if @hostInfo.photo.attached?
#         json.photoUrl url_for(@hostInfo.photo)
#     end

# end

# json.photoUrl url_for(listing.photo)