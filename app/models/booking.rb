class Booking < ApplicationRecord
    validates :listing_id, :guest_id, :check_in, :check_out, :players, presence: true
    

end