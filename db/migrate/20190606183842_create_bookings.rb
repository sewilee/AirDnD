class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :listing_id, null: false
      t.integer :guest_id, null: false
      t.date  :check_in, null: false
      t.date  :check_out, null: false
      t.integer :players, null: false
      t.string :state, null: false

      t.timestamps
    end
  end
end
