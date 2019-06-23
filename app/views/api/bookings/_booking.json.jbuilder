# json.set! booking.id do 
    json.extract! booking, :id, :start_date, :end_date, :players, :listing_id, :guest_id, :status
# end