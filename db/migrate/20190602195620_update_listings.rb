class UpdateListings < ActiveRecord::Migration[5.2]
  def change
    add_index :listings, [:latitude, :longitude], unique: true, name: "by_lat_long"
  end
end
