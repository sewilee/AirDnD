class Booking < ApplicationRecord
    validates :listing_id, :guest_id, :start_date, :end_date, :players, :status, presence: true
    validates :status, inclusion: { in: ["pending", "approved", "denied"]}
    validate :invalid_booking

    belongs_to :guest,
    primary_key: :id,
    foreign_key: :guest_id,
    class_name: :User

    belongs_to :listing,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :Listing


    def invalid_booking
        if(:start_date < :end_date)
            return true
        else
            return false
        end
    end

end