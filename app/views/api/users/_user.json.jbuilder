json.extract! user, :id, :email, :fname, :lname, :birthday, :created_at

if user.photo.attached?
    json.photoUrl url_for(host.photo)
end