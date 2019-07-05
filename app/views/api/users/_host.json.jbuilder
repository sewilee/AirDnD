json.extract! host, :fname, :lname, :email, :created_at
if host.photo.attached?
    json.photoUrl url_for(host.photo)
end