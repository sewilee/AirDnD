json.extract! listing, :id, :host_id, :title, :description, :rate, :city, :address, :location_type, :longitude, :latitude, :num_bath, :expansion, :edition_num, :language, :min_players, :max_players
if (listing.photos.attached?)
    json.photoUrls listing.photos.map {|file| url_for(file)}
end

json.hostInfo do 
    host = listing.host
    json.extract! host, :fname, :lname, :email, :created_at
    if host.photo.attached?
        json.photoUrl url_for(host.photo)
    end
end
