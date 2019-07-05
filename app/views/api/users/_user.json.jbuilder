json.extract! user, :id, :email, :fname, :lname, :birthday, :created_at
json.booking_ids user.bookings.pluck(:id)
if user.photo.attached?
    json.photoUrl url_for(host.photo)
end