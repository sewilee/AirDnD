class Listing < ApplicationRecord
    validates :host_id, :title, :rate, presence: true
    validates :address, presence: true, uniqueness: true
    validates :city, :longitude, :latitude, presence: true
    validates :num_bath, :expansion, :edition_num, :max_players, presence: true
    validates :location_type, inclusion: { in: ["City", "Fortification", "Religious Location", "Wilderness", "The Underdark"],
        message: "%{value} is not a valid location type" }
    validates :expansion, inclusion: { in: ["true", "false"] }

    belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User

    has_many :reviews,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :Review

    has_many :bookings,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :Booking

    has_many_attached :photos

    def self.in_bounds(bounds)
        self.where("latitude < ?", bounds[:northEast][:lat])
        .where("latitude > ?", bounds[:southWest][:lat])
        .where("longitude < ?", bounds[:northEast][:lng])
        .where("longitude > ?", bounds[:southWest][:lng])
    end
end